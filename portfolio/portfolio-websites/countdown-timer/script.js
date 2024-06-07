function startCountdown() {
    var future = true;
    var bodyForm = document.getElementById('body-form');
    var now = new Date();
    var dateTimeStr = document.getElementById('datetime').value;
    var display = document.getElementById('countdown');

    display.style.display = 'block';
    bodyForm.style.display = 'none';
    console.log(dateTimeStr);

    var dateTime = new Date(dateTimeStr);
    var dateTimeFinal = dateDifference(dateTime, now);
    

    var days = Math.floor((dateTimeFinal / 86_400_000));
    var hours = Math.floor((dateTimeFinal % (1000 * 60 * 60 * 24)) / 3_600_000);
    var minutes = Math.floor((dateTimeFinal % (1000 * 60 * 60)) / 60_000);
    var seconds = Math.floor((dateTimeFinal % (1000 * 60)) / 1_000);

    display.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
        document.getElementById('end-sound').play();
        setTimeout(100);
        alert('The time is here...');
        location.reload();
        return;
    }
}

function updateStart() {
    var now = new Date();
    var dateTimeStr = document.getElementById('datetime').value;
    var dateTime = new Date(dateTimeStr);
    var dateTimeFinal = dateDifference(dateTime, now);

    if (Math.sign(dateTimeFinal) == -1) {
        alert('The date needs to be in the future!');
        return;
    } else if (dateTimeStr == '') {
        alert('Please insert a date and time!');
        return;
    } else {
        setInterval(startCountdown, 1000);
    }
}

function dateDifference(finalDate, now) {
    return finalDate - now; 
}