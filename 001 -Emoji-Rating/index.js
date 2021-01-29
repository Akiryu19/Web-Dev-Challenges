const box = document.querySelector("#box")
const text = document.querySelector("#text")
const h2 = document.querySelector("h2")

box.addEventListener('focus', () => {
    box.addEventListener('keydown', (e) => {

        const key = e.keyCode;

        if (key === 49) {
            h2.textContent = '🤬';
        } else if (key === 50) {
            h2.textContent = '☹️';
        } else if (key === 51) {
            h2.textContent = '😐';
        } else if (key === 52) {
            h2.textContent = '🙂'
        } else if (key === 53) {
            h2.textContent = '😁'
        }
    })
})

box.addEventListener('focusout', () => {
    h2.textContent = ''
})
