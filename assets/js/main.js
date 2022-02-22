// lev1_2

let allElements = document.getElementsByClassName("style");
let elements = document.getElementsByClassName("example");

console.log(allElements, elements[4]);

let myFunction = () => {

    console.log("test for if");
    for (let i = 0; i < elements.length; i++) {
        console.log("test for Loop");
        elements[i].style.backgroundColor = "#000";
        elements[4].style.color = "#fff";
        elements[i].classList.toggle("toggler")

        // if (elements[4].style.color == "#fff") {
        //     console.log("test if");
        // }
        // else {
        //     console.log("Test else");
        //     for (let items of elements) {
        //         items.style.backgroundColor = "#666";
        //         items.style.color = "#fff";
        //         items.classList.remove("toggler")
        //     }
        //     //         // }
        //     //     }
    }
}




elements[4].addEventListener("click", myFunction);

// allElements[0].style.background = "#000";
// clickButton[4];


//lev2_3
//Farben: #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333

let nav = document.getElementsByTagName("li");
console.log(nav);
let change = document.getElementById("changeme");
console.log(change);

let changeMe = () => {
    nav[0].style.backgroundColor = "#f6c89f";
    nav[1].style.backgroundColor = "#ffe7d1";
    nav[2].style.backgroundColor = "#4b8e8d";
    nav[3].style.backgroundColor = "#666";
    nav[4].style.backgroundColor = "#333";
}

change.addEventListener("click", changeMe);


//lev2_4

let buttonClick = document.getElementById("button");
let selectEl = document.getElementById("farbeAuswahlen");
let fieldset = document.querySelector("fieldset");
console.log(selectEl, buttonClick, fieldset);

buttonClick.addEventListener("click", () => {
    let colorChange = selectEl.value;
    colorChange = colorChange.toLowerCase().replace(" ", "");
    console.log(colorChange);
    event.preventDefault();
    fieldset.style.backgroundColor = colorChange;
});