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

let notes = [C1, Db1, D1, Eb1, E1, F1, Gb1, G1, Ab1, A1, Bb1, B1, C2, Db2, D2, Eb2, E2, F2, Gb2, G2, Ab2, A2, Bb2, B2]

let whiteNotes = document.querySelectorAll('.white-key')
let blackNotes = document.querySelectorAll('.black-key')

whiteNotes[0].classList.add('set')
console.log(whiteNotes[0])

function selectRoot() {
  let rootInput = rootNote.options[rootNote.selectedIndex].value
  console.log(rootInput)

  if (rootInput === '1') {
    
  } else if (rootInput ==='2') {
    notes[0].style.background = 'white'
    notes[1].style.background = 'red'
  } else if (rootInput ==='3') {
    notes[0].style.background = 'white'
    notes[1].style.background = '#222'
    notes[2].style.background = 'red'
  } else if (rootInput ==='4') {
    notes[0].style.background = 'white'
    notes[1].style.background = '#222'
    notes[2].style.background = 'white'
    notes[3].style.background = 'red'
  } else if (rootInput === '5') {

  }
  return false
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



