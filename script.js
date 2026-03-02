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

let currentTasks = []


if (localStorage.getItem('currentTasks')) {
    currentTasks = JSON.parse(localStorage.getItem('currentTasks'))
} else {
    console.log("Task list is empty")
}


function renderTasks() {

    let sum = ''

    currentTasks.forEach(function (elem, idx) {
        sum += `        <div class="task">
                        <div class="task-top">
                            <h3 class="task-title">${elem.task}</h3>
                            <span class="important-tag ${elem.imp}">important</span>
                        </div>

                        <p class="task-desc">
                            ${elem.description}
                        </p>

                        <div class="task-actions">
                            <button class="complete-btn" id=${idx}>Mark as Completed</button>
                        </div>
                    </div>`
    })

    allTasks.innerHTML = sum

    localStorage.setItem('currentTasks', JSON.stringify(currentTasks))


    let markTaskCompletedButton = document.querySelectorAll('.complete-btn')

    markTaskCompletedButton.forEach(function (btn) {

        btn.addEventListener('click', function () {

            currentTasks.splice(btn.id, 1)

            renderTasks();

        })


    })
}

renderTasks()

form.addEventListener('submit', function (e) {
    e.preventDefault()

    // console.log(formInput.value , formDescriptionInput.value)
    // console.log(checkBox.checked)

    currentTasks.push({ task: formInput.value, description: formDescriptionInput.value, imp: checkBox.checked })



    formInput.value = ''
    formDescriptionInput.value = ''
    checkBox.checked = false

    renderTasks()

})





