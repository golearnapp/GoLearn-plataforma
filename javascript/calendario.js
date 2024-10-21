document.addEventListener('DOMContentLoaded', function()
{
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl,
    {
      initialView: 'dayGridMonth',
      locale: 'pt-br',
      headerToolbar: {
        left: 'prev,today',
        center: 'title',
        right: 'next'}
    });
    calendar.render();
});