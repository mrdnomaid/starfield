function toggle(toggleMe) {
    var toggleMe = document.getElementById(toggleMe);
    if (toggleMe.style.display === 'block' || toggleMe.style.display === '')
        toggleMe.style.display = 'none';
    else
        toggleMe.style.display = 'block';
}

function toggleD(toggleMe) {
    var toggleMe = document.getElementById(toggleMe);
    if (toggleMe.disabled === false || toggleMe.disabled === '')
        toggleMe.disabled = true;
    else
        toggleMe.disabled = false;
}

function getRandom(min, max) {
    ran = Math.floor(Math.random() * (max - min + 1)) + min;
    return ran;
}

function loadTheThing() {

    toggle('tellMeWhatToDo');

    if (document.getElementById('shouldIMakeItRandomInstead').checked = true) {
      var doItThisManyTimes = getRandom(50, 150);
    }else {
      var doItThisManyTimes = document.getElementById('customAmountOfStars').value;
    }

    for (var i = 0; i < doItThisManyTimes; i++) {
      document.body.innerHTML += '<span class="star" style="background-color: rgb(' + getRandom(240, 255) + ',' + getRandom(240, 255) + ',' + getRandom(240, 255) + '); top: ' + getRandom(2, 98) + '%; left:' + getRandom(2, 98) + '%;"></span>';
    }

}

if (location.hash) {
  loadTheThing();
}
