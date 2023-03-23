/* => Advices
- Always Check The Console
- Take Your Time To Name The Identifiers
- DRY
Steps To Create The Project
[01] Create HTML Markup
[02] Add Styling And Separate From Logic
[03] Create The App Logic
---- [01] Add Levels
---- [02] Show Level And Seconds
---- [03] Add Array Of Words
---- [04] ِAdd Start Game Button
---- [05] Generate Upcoming Words
---- [06] Disable Copy Word And Paste Event + Focus On Input
---- [07] Start Play Function
---- [08] Start The Time And Count Score
---- [09] Add The Error And Success Messages
[04] Your Trainings To Add Features
---- [01] Save Score To Local Storage With Date
---- [02] Choose Levels From Select Box
---- [03] Break The Logic To More Functions
---- [04] Choose Array Of Words For Every Level
---- [05] Write Game Instruction With Dynamic Values
---- [06] Add 3 Seconds For The First Word
*/ 
/* => Benefits From Project
    1. input.onpaste => scr:94
    2. Getting RANDOM item from array => scr:106
*/

const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Globalization",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing",
    "Survive",
    "Surprizing",
    "Amazing",
    "Connected",
    "Computer",
    "cold",
    "ugly",
    "beautiful",
    "Algorithm",
    "Suii",
    "propaganda",
    "preservatives",
];

const lvls = {
    "Baby": 7,
    "Easy": 5,
    "Normal": 3,
    "Hard": 3,
    "Extreme": 3
}

let defaultLevel;
let defaultLevelSeconds;
let Word;



let startBtn = document.querySelector(`.start`)
let lvlNameSpan = document.querySelector(`.message .lvl`)
let secondsSpan = document.querySelector(`.message .seconds`)
let theWord = document.querySelector(`.the-word`)
let upcomingWords = document.querySelector(`.upcoming-words`)
let input = document.querySelector(`.input`)
let timeLeftDiv = document.querySelector(`.time`)
let timeLeftSpan = document.querySelector(`.time span`)
let scoreGot = document.querySelector(`.score .got`)
let scoreTotal = document.querySelector(`.score .total`)
let finishMessage = document.querySelector(`.finish`)
let levelsContainer = document.querySelector(`.levels`)
let baby = document.querySelector(`#baby`)
let easy = document.querySelector(`#easy`)
let normal = document.querySelector(`#normal`)
let hard = document.querySelector(`#hard`)
let extreme = document.querySelector(`#extreme`)

let levelWords=[]


baby.onclick = ()=> {
    let levelName = baby
    let l = levelName.innerHTML
    defaultLevel = l
    defaultLevelSeconds = lvls[`${levelName.innerHTML}`]
    lvlNameSpan.innerHTML=defaultLevel
    secondsSpan.innerHTML=defaultLevelSeconds
    timeLeftSpan.innerHTML=defaultLevelSeconds
    levelsContainer.remove()
    for (i=0;i<words.length;i++) {
        if (words[i].length >3 && words[i].length <5 ) {
            Word = words[i]
            levelWords.push(Word)
        }
    }
    console.log(levelWords)
    scoreTotal.innerHTML = levelWords.length
}
easy.onclick = ()=> {
    let levelName = easy
    let l = levelName.innerHTML
    defaultLevel = l
    defaultLevelSeconds = lvls[`${levelName.innerHTML}`]
    lvlNameSpan.innerHTML=defaultLevel
    secondsSpan.innerHTML=defaultLevelSeconds
    timeLeftSpan.innerHTML=defaultLevelSeconds
    levelsContainer.remove()
    for (i=0;i<words.length;i++) {
        if (words[i].length >3 && words[i].length <6 ) {
            Word = words[i]
            levelWords.push(Word)
        }
    }
    console.log(levelWords)
    scoreTotal.innerHTML = levelWords.length
}
normal.onclick = ()=> {
    let levelName = normal
    let l = levelName.innerHTML
    defaultLevel = l
    defaultLevelSeconds = lvls[`${levelName.innerHTML}`]
    lvlNameSpan.innerHTML=defaultLevel
    secondsSpan.innerHTML=defaultLevelSeconds
    timeLeftSpan.innerHTML=defaultLevelSeconds
    levelsContainer.remove()
    for (i=0;i<words.length;i++) {
        if (words[i].length >5 && words[i].length <8 ) {
            Word = words[i]
            levelWords.push(Word)
        }
    }
    console.log(levelWords)
    scoreTotal.innerHTML = levelWords.length
}
hard.onclick = ()=> {
    let levelName = hard
    let l = levelName.innerHTML
    defaultLevel = l
    defaultLevelSeconds = lvls[`${levelName.innerHTML}`]
    lvlNameSpan.innerHTML=defaultLevel
    secondsSpan.innerHTML=defaultLevelSeconds
    timeLeftSpan.innerHTML=defaultLevelSeconds
    levelsContainer.remove()
    for (i=0;i<words.length;i++) {
        if (words[i].length >7 && words[i].length <10 ) {
            Word = words[i]
            levelWords.push(Word)
        }
    }
    console.log(levelWords)
    scoreTotal.innerHTML = levelWords.length
}
extreme.onclick = ()=> {
    let levelName = extreme
    let l = levelName.innerHTML
    defaultLevel = l
    defaultLevelSeconds = lvls[`${levelName.innerHTML}`]
    lvlNameSpan.innerHTML=defaultLevel
    secondsSpan.innerHTML=defaultLevelSeconds
    timeLeftSpan.innerHTML=defaultLevelSeconds
    levelsContainer.remove()
    for (i=0;i<words.length;i++) {
        if (words[i].length >10 && words[i].length <18) {
            Word = words[i]
            levelWords.push(Word)
        }
    }
    console.log(levelWords)
    scoreTotal.innerHTML = levelWords.length
}


input.onpaste = ()=> {
    return false
}

startBtn.onclick = ()=> {
    if (startBtn.innerHTML === `Restart`) {
        window.location.reload()
    } else {
        defaultLevelSeconds = lvls[defaultLevel]
        startBtn.style.display=`none`
        input.focus()
        GenerateWord()
    }
}

function GenerateWord() {
    let randomItem= levelWords[Math.floor(Math.random()*levelWords.length)]
    let randomItemIndex = levelWords.indexOf(randomItem)
    levelWords.splice(randomItemIndex,1)
    upcomingWords.innerHTML= ``;
    for (i=0; i<levelWords.length; i++) {
        let newDiv = document.createElement(`div`)
        newDiv.innerHTML= levelWords[i]
        upcomingWords.appendChild(newDiv)
    }
    theWord.innerHTML=randomItem
    startPlay()
}

function startPlay(){
    timeLeftSpan.innerHTML=defaultLevelSeconds
    timeLeftDiv.style.cssText = `
    animation-name: Chang;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    `
    let start = setInterval(()=>{
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0" || theWord.innerHTML.toLocaleUpperCase()===input.value.toLocaleUpperCase()) {
            clearInterval(start)
            timeLeftDiv.style.cssText=``
            if(theWord.innerHTML.toLocaleUpperCase()===input.value.toLocaleUpperCase()) {
                input.value=``
                scoreGot.innerHTML++;
                if (levelWords.length>0) {
                    GenerateWord()
                } else {
                    theWord.innerHTML=`CONGRATULATION`
                    upcomingWords.remove()
                }
            } else {
                // let span = document.createElement(`span`)
                // span.className=`bad`
                // span.innerHTML=`Game Over`
                // finishMessage.appendChild(span)
                theWord.innerHTML=`GAME OVER`
                startBtn.style.display=`block`
                startBtn.innerHTML=`Restart`

            }
        }
    }, 1000)
} 





