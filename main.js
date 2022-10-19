const form = document.getElementById('form')
const buttom = document.getElementById('button')
const input = document.getElementById('input')
const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


buttom.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value == '') {
        form.classList.add('active');
        form.classList.remove('verified')
    } else if (input.value.match(email)) {
        form.classList.remove('active');
        form.classList.add('verified')
    } else {
        form.classList.remove('verified');
        form.classList.add('active');
    }
})
