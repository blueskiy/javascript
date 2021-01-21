const keys = document.querySelectorAll('.key')

function playNote(event) {
    let audioKeyCode = getKeyCode(event)
    const key = document.querySelector(`.key[data-key='${audioKeyCode}']`)
    const isKeyExists = key

    if(!isKeyExists) {
        return
    }

    playAudio(audioKeyCode)
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === 'keydown'
    
    if(isKeyboard) {
        keyCode = event.keyCode
    } else{ 
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key='${audioKeyCode}']`)
    audio.currentTime = 0
    audio.play()
}

keys.forEach(function(key) {
    key.addEventListener('click', playNote)
})

window.addEventListener('keydown', playNote)