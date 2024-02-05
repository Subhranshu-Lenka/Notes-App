const newBtn = document.getElementById("new-note");
const notes = document.querySelector(".notes");
const textarea = document.querySelector(".note-area");

newBtn.addEventListener("click", createNote);

function createNote() {

    let wrapper = document.createElement("div");

    let txt = document.createElement("textarea");
    txt.classList.add("note-area");
    txt.setAttribute("cols", "60");
    txt.setAttribute("rows", "7");

    let span = document.createElement("span");
    span.innerHTML = "DELETE";
    span.classList.add("delete");

    notes.appendChild(wrapper);
    wrapper.appendChild(txt);
    wrapper.appendChild(span);

    saveData();
}

notes.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    else if (e.target.tagName == "TEXTAREA") {

        console.log("target kiya re");

        content = document.querySelectorAll(".notes");
        content.forEach(element => {
            element.onkeyup = function () {
                console.log("dakha laga re! ")
                saveData();
            }
        });
    }

    saveData();
})


// save the data to browser
function saveData() {
    localStorage.setItem("data", notes.innerHTML);
    console.log(`ye lo ${textarea.value}`);
}

function reloadData() {
    notes.innerHTML = localStorage.getItem("data");
    // document.querySelectorAll(".note-area").value = localStorage.getItem("txtContent");
}

reloadData();


// on reload the html structure remains but the data is absent.