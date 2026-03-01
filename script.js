function openFeatures() {

    var allElems = document.querySelectorAll('.elem')

    var fullElemPage = document.querySelectorAll('.fullElem')

    var fullElemPageBackBtn = document.querySelectorAll('.back')

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
