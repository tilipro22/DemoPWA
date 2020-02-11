const container = document.querySelector(".container")
const bikinis = [
    { name: "Africa", image: "images/bk1.png" },
    { name: "Kauai", image: "images/bk2.png" },
    { name: "Santa Teresa", image: "images/bk3.png" },
    { name: "Bahia", image: "images/bk4.png" },
    { name: "Serena", image: "images/bk5.png" },
    { name: "Acapulco", image: "images/bk6.png" },
];

const showBikinis = () => {
    let output = ""
    bikinis.forEach(
        ({ name, image }) =>
            (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Ver</a>
              </div>
              `)
    )
    container.innerHTML = output
};

document.addEventListener("DOMContentLoaded", showBikinis);
