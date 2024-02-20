function startTime() {
    var clock = document.getElementById("clock");
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    minutes = checkTime(minutes);
    hours = checkTime(hours);
    seconds = checkTime(seconds);

    clock.innerHTML = hours + 'i' + minutes + 'i' + seconds;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}