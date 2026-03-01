function openFeatures() {

    let allElems = document.querySelectorAll('.elem')

    let fullElemPage = document.querySelectorAll('.fullElem')

    let fullElemPageBackBtn = document.querySelectorAll('.back')

    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            fullElemPage[elem.id].style.display = 'block'
        })
    })

    fullElemPageBackBtn.forEach(function (back) {
        // console.log(back.id)

        back.addEventListener('click', function () {
            fullElemPage[back.id].style.display = 'none'
        })
    })

}

openFeatures()

let form = document.querySelector('.addTask form')
let formInput = document.querySelector('.addTask form input')
let formDescriptionInput = document.querySelector('.addTask form textarea')
let checkBox = document.querySelector('.addTask form #check')

let allTasks = document.querySelector('.allTasks')




let currentTasks = [
    {
        task: "test tak 1",
        description: "test descriptionn 1",
        imp: false
    },
    {
        task: "test tak 1",
        description: "test descriptionn 1",
        imp: true
    },
    {
        task: "test tak 1",
        description: "test descriptionn 1",
        imp: true
    },
    {
        task: "test tak 1",
        description: "test descriptionn 1",
        imp: true
    },

]

function renderTasks() {
    let sum = ''

    currentTasks.forEach(function (elem) {
        sum += `        <div class="task">
                        <div class="task-top">
                            <h3 class="task-title">${elem.task}</h3>
                            <span class="important-tag ${elem.imp}">important</span>
                        </div>

                        <p class="task-desc">
                            ${elem.description}
                        </p>

                        <div class="task-actions">
                            <button class="complete-btn">Task Completed</button>
                        </div>
                    </div>`
    })

    allTasks.innerHTML = sum
}

renderTasks()

form.addEventListener('submit', function (e) {
    e.preventDefault()

    // console.log(formInput.value , formDescriptionInput.value)
    // console.log(checkBox.checked)

    currentTasks.push({ task: formInput.value, description: formDescriptionInput.value, imp: checkBox.checked })
    renderTasks()
})


