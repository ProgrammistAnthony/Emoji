import { data } from "./data.js";

const input = document.querySelector(`.emoji__finder`);
const divEmoji = document.querySelector(`.emoji__cards`);

data.forEach((e) => {
    const card = document.createElement(`div`);
    card.className = `emoji__card`;
    card.innerHTML = `
    <p class="emoji__smile">${e.symbol}</p>
    <h3 class="emoji__name">${e.title}</h3>
    <p class="emoji__about">${[...new Set(e.keywords.split(" "))].join(" ")}</p>`;
    divEmoji.append(card);
});

let inputHandler = (evt) => {
    let value = evt.target.value;
    const findName = data.filter((el) => el.title.toLowerCase().includes(value.toLowerCase()).trim());
    const findAbout = data.filter((el) => el.keywords.toLowerCase().includes(value.toLowerCase()).trim());
    const result = [...new Set([...findName, ...findAbout])];
    buttonHandler(result);
};  


input.addEventListener('input', inputHandler);

function buttonHandler(data) {
    divEmoji.innerHTML = ``;
    data.forEach((e) => {

    const card = document.createElement(`div`);
    card.className = `emoji__card`;
    card.innerHTML = `
    <p class="emoji__smile">${e.symbol}</p>
    <h3 class="emoji__name">${e.title}</h3>
    <p class="emoji__about">${[...new Set(e.keywords.split(" "))].join(" ")}</p>`;
    divEmoji.append(card);
    })
    };
