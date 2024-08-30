const threshold = 800;
let lastState = window.innerWidth > threshold;

function detectChange() {
    let currentState = window.innerWidth > threshold;

    if (currentState !== lastState) {
        if (currentState) {
            console.log(`Jeg ligger lavt!`);
        } else {
            console.log(`Jeg er høy!`);
        }
        lastState = currentState;
    }
}

window.addEventListener('resize', detectChange);

detectChange();