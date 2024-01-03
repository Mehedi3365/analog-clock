function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const hourRotation = (hours + minutes / 60) * 360 / 12;
    const minuteRotation = (minutes + seconds / 60) * 360 / 60;
    const secondRotation = seconds * 360 / 60;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial update when the page loads