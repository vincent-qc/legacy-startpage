function getTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let amPm;
    m = checkTime(m);

    if(h > 12){
        amPm = "PM";
        h -= 12;
    }else if(h == 12){
        amPm = "PM";
    }else if(h == 0){
        amPm = "AM";
        h = 12;
    }else{
        amPm = "AM";
    }

    const timeElem = document.getElementById('time');
    timeElem.innerHTML = h + ":" + m + '&nbsp;' + amPm;
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

getTime();

setInterval(getTime, 500);