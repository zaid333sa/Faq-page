let questions = document.querySelectorAll('.question-element')
let answers = document.querySelectorAll('#answer')
let showMore = document.querySelectorAll('#show-info')

questions.forEach(function(e) {
    e.addEventListener('click', function() {
        e.classList.toggle('show')
    })
})

// question.addEventListener('click', function() {
//     // answer.classList.toggle('show')
//     console.log('clicked')
// })