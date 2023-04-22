const clock = document.querySelector('h2#clock');

function sayHello() {
    console.log('hello');
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);

}

// 5秒のたびにに呼び出す
//setInterval(sayHello, 5000);

// 5秒後に呼び出す
//setTimeout(sayHello, 5000);
getClock()
setInterval(getClock, 1000);