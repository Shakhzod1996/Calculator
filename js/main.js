window.addEventListener('DOMContentLoaded', ()=> {
    let btns = document.querySelectorAll('.btn'),
    screen = document.querySelector('.screen'),
    equalBtn = document.querySelector('.btn-equal'),
    clearBtn = document.querySelector('.btn-clear');

    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            let number = btns[i].getAttribute('data-number')

            screen.value += number
        })
    }

    equalBtn.addEventListener('click', ()=> {
        if (screen.value === '') {
            alert('Input is empty')
        } else {
            let value = eval(screen.value);
            screen.value = value;
        }

    })

    clearBtn.addEventListener('click', ()=> {
        screen.value = ''
    })
})
