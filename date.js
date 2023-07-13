window.onload = function () {
    let anniDate = new Date("2020,7,14");
    let date = new Date();
    let timeDiff = date.getTime() - anniDate.getTime();

    let dateDiff = timeDiff / (1000 * 3600 * 24);
    let totalYear = Math.floor(dateDiff / 360);
    let totalMonth = Math.floor(dateDiff / 30);

    const year = document.getElementsByClassName("year")[0];
    year.innerText = totalYear + " years";

    const month = document.getElementsByClassName("month")[0];
    month.innerText = totalMonth + " months";

    const day = document.getElementsByClassName("day")[0];
    day.innerText = Math.floor(dateDiff) + " days";
}
