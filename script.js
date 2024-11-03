const input = document.querySelector("input")
const button = document.querySelector("button")
const taskList = document.querySelector(".list-task")
const removeItemDiv = document.querySelector(".removeItem")

// Cria um Array
let myTask = []


// Quando clica no button adiciona um evento
button.addEventListener("click", (event) => {
    event.preventDefault()
    // Chama o Array para adicionar o valor que é digitado no input
    myTask.push({
        task: input.value,
        checked: false
    })
    // Limpa o que esta escrito no input quando adiciona a lista
    input.value = ""
    
    taskView()
})

// Cria uma função para visualizar o input adicionado
function taskView() {
    let taskNew = ""

    myTask.forEach((item, index) => {
        const checkboxSrc = item.checked ? "img/checkbox-checked.svg" : "img/checkbox.svg"

        taskNew += `
                    <li class="task">
                        <div class="task-container">
                            <img src="${checkboxSrc}" alt="Checkbox" onclick="taskChecked(${index})">
                            <span>${item.task}</span>
                        </div>
                        <img src="img/garbage-icon.svg" alt="Lixeira para excluir" onclick="removeTask(${index})">
                    </li>
        `
    })

    taskList.innerHTML = taskNew
}

function taskChecked(index) {
    myTask[index].checked = !myTask[index].checked

    taskView()
}


function removeTask(index) {
    // Remove o item da lista
    myTask.splice(index, 1)

    // Atualiza a lista
    taskView()

    // Exige mensagem de remoção de item da lista
    removeItemDiv.classList.add("opacity-off")

    setTimeout(() => {
        removeItemDiv.classList.remove("opacity-off")

    }, 3500)

}

