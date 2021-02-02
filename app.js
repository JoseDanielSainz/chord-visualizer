let rootNote = document.getElementById("root-note")
const triad = document.getElementById("triad")
const seventh = document.getElementById("seventh")
const extension = document.getElementById("extension")

let C1 = document.getElementById('C1')
let Db1 = document.getElementById('Db1')
let D1 = document.getElementById('D1')
let Eb1 = document.getElementById('Eb1')
let E1 = document.getElementById('E1')
let F1 = document.getElementById('F1')
let Gb1 = document.getElementById('Gb1')
let G1 = document.getElementById('G1')
let Ab1 = document.getElementById('Ab1')
let A1 = document.getElementById('A1')
let Bb1 = document.getElementById('Bb1')
let B1 = document.getElementById('B1')
let C2 = document.getElementById('C2')
let Db2 = document.getElementById('Db2')
let D2 = document.getElementById('D2')
let Eb2 = document.getElementById('Eb2')
let E2 = document.getElementById('E2')
let F2 = document.getElementById('F2')
let Gb2 = document.getElementById('Gb2')
let G2 = document.getElementById('G2')
let Ab2 = document.getElementById('Ab2')
let A2 = document.getElementById('A2')
let Bb2 = document.getElementById('Bb2')
let B2 = document.getElementById('B2')

// Note arrays

let notes = [C1, Db1, D1, Eb1, E1, F1, Gb1, G1, Ab1, A1, Bb1, B1, C2, Db2, D2, Eb2, E2, F2, Gb2, G2, Ab2, A2, Bb2, B2]

let whiteNotes = [C1, D1, E1, F1, G1, A1, B1, C2, D2, E2, F2, G2, A2, B2]

let blackNotes = [Db1, Eb1, Gb1, Ab1, Bb1, Db2, Eb2, Gb2, Ab2, Bb2]

// Set keys to their original color

function whiteBg() {
  for (i = 0; i < whiteNotes.length; i++){
    whiteNotes[i].style.background = 'white'
  }
}

function blackBg() {
  for (i = 0; i < blackNotes.length; i++){
    blackNotes[i].style.background = '#222'
  }
}

function selectRoot() {
  let rootInput = rootNote.options[rootNote.selectedIndex].value

  if (rootInput === '0') {
    whiteBg()
    blackBg()
  } else {

    let intRootInput = parseInt(rootInput)

    for (i = 0; i < intRootInput; i++) {
      notes[i].style.background = 'red'
    
    }
  }
  
}

selectRoot()


// for (i = 0; i < rootNote.value; i++) {
//   notes[i].style.background = 'red'

//   if (triad.value === '1') {
//     notes[i+4].style.background = 'red'
//     notes[i+7].style.background = 'red'
//   } else if (triad.value === '2') {
//     notes[i+3].style.background = 'red'
//     notes[i+7].style.background = 'red'
//   } else if (triad.value === '3') {
//     notes[i+3].style.background = 'red'
//     notes[i+6].style.background = 'red'
//   } else if (triad.value === '4') {
//     notes[i+4].style.background = 'red'
//     notes[i+8].style.background = 'red'
//   } else if (triad.value === '5') {
//     notes[i+2].style.background = 'red'
//     notes[i+7].style.background = 'red'
//   } else if (triad.value === '6') {
//     notes[i+5].style.background = 'red'
//     notes[i+7].style.background = 'red'
//   } else if (triad.value === '7') {
//     notes[i+7].style.background = 'red'
//   }
// }



