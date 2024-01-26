const newBtn = document.getElementById("new-note");
const notes = document.querySelector(".notes");

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
}

notes.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})