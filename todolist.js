let input = document.querySelector("input");
let button = document.querySelector("button");
let form = document.querySelector("form");
let section = document.getElementById("container");

section.addEventListener("click", (eo) => {
    if (eo.target.className === "fa-solid fa-trash icon-2") {
        eo.target.parentElement.parentElement.remove();

    } else if (eo.target.className === "fa-regular fa-face-angry icon-3") {
        eo.target.style.display = "none";
        let heart = `<i class="fa-solid fa-heart icon-4"></i>`;

        eo.target.parentElement.parentElement.getElementsByClassName("taskt")[0].classList.add("finish");

        eo.target.parentElement.innerHTML += heart;

    } else if (eo.target.className === "fa-solid fa-heart icon-4") {
        eo.target.style.display = "none";
        let addAngry = `<i class="fa-regular fa-face-angry icon-3"></i>`;

        eo.target.parentElement.parentElement.getElementsByClassName("taskt")[0].classList.remove("finish");

        eo.target.parentElement.innerHTML += addAngry;

    } else if (eo.target.className === "fa-solid fa-star icon-1") {
        eo.target.classList.add("orange");
        section.prepend(eo.target.parentElement);

    } else if (eo.target.className === "fa-solid fa-star icon-1 orange") {
        eo.target.classList.remove("orange");
        section.append(eo.target.parentElement);

    }
})



button.addEventListener("click", (eo) => {
    eo.preventDefault();
   
    let task = `
    <div class="task">
    <i class="fa-solid fa-star icon-1"></i>
    <p class="taskt"> ${input.value}</p>
    <div>
        <i class="fa-solid fa-trash icon-2"></i>
        <i class="fa-regular fa-face-angry icon-3"></i>

    </div>
    </div>
    `;
    section.innerHTML += task;
    input.value = "";
});