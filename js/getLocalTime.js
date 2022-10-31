function getLocalDate() {
    let localDate = document.querySelector('.local-date');

    setInterval(() => {
        let date = new Date;
        localDate.textContent = `Your local time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }, 1000);
}

getLocalDate();


export default getLocalDate;