const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Estructura de datos para almacenar las tareas
let tareas = [
    {
        id: 1,
        descripcion: "Hacer la compra",
        completada: false,
        fechaCreacion: new Date("2023-10-01T10:00:00Z")
    },
    {
        id: 2,
        descripcion: "Lavar el coche",
        completada: true,
        fechaCreacion: new Date("2023-10-02T15:30:00Z")
    },
    {
        id: 3,
        descripcion: "Estudiar para el examen",
        completada: false,
        fechaCreacion: new Date("2023-10-03T08:45:00Z")
    }
];
let idContador = 4; // El siguiente ID a asignar será 4

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

// Crear una nueva tarea
app.post('/tareas', (req, res) => {
    const { descripcion, completada } = req.body;
    if (!descripcion) {
        return res.status(400).json({ error: 'La descripción es requerida' });
    }
    const nuevaTarea = {
        id: idContador++,
        descripcion,
        completada: completada || false,
        fechaCreacion: new Date()
    };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

// Leer todas las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas);
});

// Leer una tarea específica por su ID
app.get('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json(tarea);
});

// Actualizar una tarea existente
app.put('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tareaIndex = tareas.findIndex(t => t.id === id);
    if (tareaIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    const { descripcion, completada } = req.body;
    tareas[tareaIndex] = {
        ...tareas[tareaIndex],
        descripcion: descripcion || tareas[tareaIndex].descripcion,
        completada: completada !== undefined ? completada : tareas[tareaIndex].completada
    };
    res.json(tareas[tareaIndex]);
});

// Eliminar una tarea por su ID
app.delete('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tareaIndex = tareas.findIndex(t => t.id === id);
    if (tareaIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    tareas.splice(tareaIndex, 1);
    res.status(204).send();
});

// Calcular estadísticas sobre las tareas
app.get('/estadisticas', (req, res) => {
    const totalTareas = tareas.length;
    const tareasCompletadas = tareas.filter(t => t.completada).length;
    const tareasPendientes = totalTareas - tareasCompletadas;
    const tareaMasReciente = tareas.reduce((a, b) => a.fechaCreacion > b.fechaCreacion ? a : b, {});
    const tareaMasAntigua = tareas.reduce((a, b) => a.fechaCreacion < b.fechaCreacion ? a : b, {});

    res.json({
        totalTareas,
        tareasCompletadas,
        tareasPendientes,
        tareaMasReciente: tareaMasReciente.id ? tareaMasReciente : null,
        tareaMasAntigua: tareaMasAntigua.id ? tareaMasAntigua : null
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});