let localDate = document.querySelector('.local-date');

setInterval(() => {
    let date = new Date;
    localDate.textContent = `Выше местное время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000);