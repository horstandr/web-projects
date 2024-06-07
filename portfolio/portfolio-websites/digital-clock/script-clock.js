function startTime() {
    var clock = document.getElementById("clock");
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    minutes = checkTime(minutes);
    hours = checkTime(hours);
    seconds = checkTime(seconds);

    clock.innerHTML = hours + '.' + minutes + '.' + seconds;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Creates buttons
const body = document.body;
const buttons = `<button onclick="openFullscreen()" id="fs-button">Fullscreen</button><br><button onclick="closeFullscreen()" style="display:none" id="exit-button">Exit</button>`
body.innerHTML += buttons;

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  document.getElementById('fs-button').style.display = "none";
  document.getElementById('exit-button').style.display = "block";
}

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    document.getElementById('fs-button').style.display = "block";
    document.getElementById('exit-button').style.display = "none";
  }