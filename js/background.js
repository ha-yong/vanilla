const imgages = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
];

const chosenImage = imgages[Math.floor(Math.random() * imgages.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);