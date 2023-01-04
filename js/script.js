// Elementos
const notesContainer = document.querySelector("#notes-container")

const noteinput = document.querySelector("#note-content")

const addNotebtn = document.querySelector(".add-note")

// Funções
function addNote() {
    const noteObject = {
        id: generateId(),
        content: noteinput.value,
        fixed: false,
    };
    console.log(noteObject);
}

function generateId() {
    return Math.floor(Math.random() * 5000);
}
// Eventos
addNotebtn.addEventListener("click", () => addNote());