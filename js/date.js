function calendar(){
    let date = new Date();
    let weekDay = date.getDay();
    let dayOfMonth = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let day;
    switch(weekDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    let monthName;
    switch(month){
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2:
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
        case 7:
            monthName = "August";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "October";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
    }

    let fullCalendar = day + "|" + monthName + '&nbsp;' + dayOfMonth;
    
    let dateElem = document.getElementById('calendar');
    dateElem.innerHTML = fullCalendar;
}

calendar();

setInterval(calendar, 1000);