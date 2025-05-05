$('#calendar').fullCalendar({
    defaultView: 'month', // Vista predeterminada
    events: [
        {
            title: 'Evento 1',
            start: '2023-11-05' // Fecha del evento
        },
        {
            title: 'Evento 2',
            start: '2023-11-15',
            end: '2023-11-17' // Evento que dura varios días
        }
        // Puedes añadir más eventos de manera similar
    ]
});