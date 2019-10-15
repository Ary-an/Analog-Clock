  var secondHand = document.querySelector('.second-hand');
  var minsHand = document.querySelector('.minute-hand');
  var hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    var mins = now.getMinutes();
    var minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    var hour = now.getHours();
    var hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();
