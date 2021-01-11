let quotes = [
"change the world by being yourself", 
"every moment is a fresh beginning",
"never regret anything that made you smile",
"aspire to inspire before we expire",
"everything you can imagine is real",
"simplicity is the ultimate sophistication",
"tough times never last but tough people do",
"have enough courage to start and enough heart to finish",
"determine your priorities and focus on them",
"never let your emotions overpower your intelligence",
"nothing lasts forever but at least we got these memories",
"to live will be an awfully big adventure",
"there is no substitute for hard work",
"what consumes your mind controls your life",
"wanting to be someone else is a waste of who you are",
"the time is always right to do what is right",
"let the beauty of what you love be what you do",
"may your choices reflect your hopes not your fears",
"a happy soul is the best shield for a cruel world",
"white is not always light and black is not always dark",
"life becomes easier when you learn to accept the apology you never got",
"if the world was blind how many people would you impress",
"i will remember and recover, not forgive and forget",
"the meaning of life is to give life meaning",
"the true meaning of life is to plant trees under whose shade you do not expect to sit"
]
let text = ""
let passed = ""
let count = 0
let min = 0
let sec = 0
let begin = false

function Add() {
    console.log("add")
    passed = text[count]
    console.log(passed)
    document.querySelector('.text').innerHTML = ""
    for (let i = 0; i < count+1; i++) {
        if (i == count) {
            document.querySelector('.text').innerHTML += `<span id="part" class="active">${text[count]}</span>`
            return
        }
        document.querySelector('.text').innerHTML += text[i] + " "
    }
}


function Start() {
    text = quotes [Math.floor(Math.random() * quotes.length)]
    console.log(text);
    text = text.split(' ')
    document.querySelector('.test').style.display = "block"
    document.querySelector('#begin').style.display = "none"
    Add()
    begin = true
    setInterval(() => {
        if (begin) {
            sec += 1
            if (sec >= 60) {
                sec -= 60
                min += 1
            }
            
            document.querySelector('#sec').innerText = ("00" + sec).slice(-2)
            document.querySelector('#min').innerText = ("00" + min).slice(-2)
            console.log(sec);   
        }
    }, 1000)
}


function end() {
    document.querySelector('.test').style.display = "none"
    let time = (min * 60) + sec
    begin = false
    let speed = text.length / time
    document.querySelector('#speed').innerText = speed.toFixed(2) + " word/sec"
    document.querySelector('#timeOff').innerText = time + " sec"
    document.querySelector('.end').style.display = "block"
    document.querySelector('#begin').style.display = "none"
    document.querySelector('.time').style.display = "none"
    document.querySelector('#restart').style.display = "block"
    document.querySelector('#restart').addEventListener('click', ()=>{
        location.reload()
    })
}

document.querySelector('#textSpeed').addEventListener('input', (e)=>{
    let textInst = document.querySelector('#textSpeed').value.split(' ')
    textInst = textInst[textInst.length - 1]
    let error = false
    if (textInst == passed) {

        document.querySelector('#part').className = "active"
        if (document.querySelector('#textSpeed').value.split(' ').length == text.length) {
            end()
        } else {
            count += 1
            Add()   
        }

    } else if (textInst == ""){
        console.log("space")

    } else {
        document.querySelector('#part').className = "active"

        for (let i = 0; i < textInst.length; i++) {
            if (textInst[i] != passed[i]) {
                error = true
                console.log(textInst)
                console.log("passed : " + passed)
            }
        }
    
        if (error) {
            document.querySelector('#part').className = "error"
            console.log("error");
        }

    }
    
})

document.querySelector('#begin').addEventListener('click', Start)