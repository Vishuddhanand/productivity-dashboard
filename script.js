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


function todoList() {
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

}

todoList()

let hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`)

var dayPlanner = document.querySelector('.day-planner')



var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}

let dailyHours = ''

hours.forEach(function (elem, idx) {
    var savedData = dayPlanData[idx] || ''
    dailyHours += ` <div class="day-planner-time">
    <p>${elem}</p>
    <input type="text" placeholder="..." id=${idx} value = ${savedData}>
    </div>`
})

dayPlanner.innerHTML = dailyHours


var dayPlannerInput = document.querySelectorAll('.day-planner input')

dayPlannerInput.forEach(function (elem, idx) {
    elem.addEventListener("input", function () {

        dayPlanData[elem.id] = elem.value


        localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
        console.log(dayPlanData)
    })

})

