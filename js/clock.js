const clock = document.querySelector('h2#clock');

function sayHello() {
    console.log('hello');
}

function getClock() {
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

// 5秒のたびにに呼び出す
//setInterval(sayHello, 5000);

// 5秒後に呼び出す
//setTimeout(sayHello, 5000);
getClock()
setInterval(getClock, 1000);