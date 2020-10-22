(function(){
    var pDay = document.getElementById('date__day'),
            pDaynum = document.getElementById('date__daynum'),
            pMonth = document.getElementById('date__month'),
            pYear = document.getElementById('date__year'),
            pHours = document.getElementById('time__hours'),
            pMinutes = document.getElementById('time__minutes'),
            pSeconds = document.getElementById('time__seconds'),
            pAmpm = document.getElementById('time__ampm');
            var weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];    

    var updateWatch = function(){
        var date = new Date(),
            day = date.getDay(),
            daynum = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            ampm;

        pDay.textContent = weeks[day];
        pDaynum.textContent = daynum;
        pMonth.textContent = months[month];
        pYear.textContent = year;

        if (hours >= 12) {
            hours = hours - 12;
            ampm = 'PM';
            if (hours === 0) {
                hours = 12;
            }
        } else {
            ampm = 'AM';
        }

        pHours.textContent = hours < 10 ? '0' + hours : hours;
        pMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        pSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        pAmpm.textContent = ampm;
    }

    var intervalo = setInterval(updateWatch, 1000);
})();
