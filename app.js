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
let C3 = document.getElementById('C3')
let Db3 = document.getElementById('Db3')
let D3 = document.getElementById('D3')
let Eb3 = document.getElementById('Eb3')
let E3 = document.getElementById('E3')
let F3 = document.getElementById('F3')
let Gb3 = document.getElementById('Gb3')
let G3 = document.getElementById('G3')
let Ab3 = document.getElementById('Ab3')
let A3 = document.getElementById('A3')
let Bb3 = document.getElementById('Bb3')
let B3 = document.getElementById('B3')

// Note arrays

let notes = [C1, Db1, D1, Eb1, E1, F1, Gb1, G1, Ab1, A1, Bb1, B1, C2, Db2, D2, Eb2, E2, F2, Gb2, G2, Ab2, A2, Bb2, B2, C3, Db3, D3, Eb3, E3, F3, Gb3, G3, Ab3, A3, Bb3, B3]

let whiteNotes = [C1, D1, E1, F1, G1, A1, B1, C2, D2, E2, F2, G2, A2, B2, C3, D3, E3, F3, G3, A3, B3]

let blackNotes = [Db1, Eb1, Gb1, Ab1, Bb1, Db2, Eb2, Gb2, Ab2, Bb2, Db3, Eb3, Gb3, Ab3, Bb3]

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

// intervals 

let selectedRoot
let majorThird
let minorThird
let perfectFifth
let diminished
let augmented
let sustained2
let sustained4
let majorSeventh
let minorSeventh
let dimSeventh
let addNine
let addEleven
let addThirteen

// seventh note radio buttons

let maj7btn = document.getElementById('maj7')
let min7btn = document.getElementById('min7')
let dim7btn = document.getElementById('dim7')


// highlighting root note

const setRootBtn = document.getElementById('r-btn')

setRootBtn.onclzick = function () {
  const rootNotes = document.querySelectorAll('input[name="root-note"]')
  for (const rootNote of rootNotes) {
    if (rootNote.checked) {
      selectedRoot = rootNote.value

      whiteBg()
      blackBg()
      notes[selectedRoot].style.background = '#F0442B'
    }
  }
}

// highlighting triad

const setTriadBtn = document.getElementById('t-btn')

let selectedTriad

setTriadBtn.onclick = function () {
  const triads = document.querySelectorAll('input[name="triad"]')
  for (const triad of triads) {
    if (triad.checked) {
      selectedTriad = triad.value
      
      let majorThird = parseInt(selectedRoot) + 4
      let minorThird = parseInt(selectedRoot) + 3
      let perfectFifth = parseInt(selectedRoot) + 7
      let diminished = parseInt(selectedRoot) + 6
      let augmented = parseInt(selectedRoot) + 8
      let suspended2 = parseInt(selectedRoot) + 2
      let suspended4 = parseInt(selectedRoot) + 5

      if (selectedTriad === '0') {
        whiteBg()
        blackBg()
        notes[selectedRoot].style.background = '#F0442B'
        notes[majorThird].style.background = 'orange'
        notes[perfectFifth].style.background = 'orange'
        maj7btn.disabled = false
        min7btn.disabled = false
        dim7btn.disabled = true
      } else if (selectedTriad === '1') {
        whiteBg()
        blackBg()
        notes[selectedRoot].style.background = '#F0442B'
        notes[minorThird].style.background = 'orange'
        notes[perfectFifth].style.background = 'orange'
        maj7btn.disabled = false
        min7btn.disabled = false
        dim7btn.disabled = true
      } else if (selectedTriad === '2') {
        whiteBg()
        blackBg()
        notes[selectedRoot].style.background = '#F0442B'
        notes[minorThird].style.background = 'orange'
        notes[diminished].style.background = 'orange'
        maj7btn.disabled = true
        min7btn.disabled = false
        dim7btn.disabled = false
      } else if (selectedTriad === '3') {
        whiteBg()
        blackBg()
        notes[selectedRoot].style.background = '#F0442B'
        notes[majorThird].style.background = 'orange'
        notes[augmented].style.background = 'orange'
        maj7btn.disabled = false
        min7btn.disabled = true
        dim7btn.disabled = true
      } else if (selectedTriad === '4') {
        whiteBg()
        blackBg()
        notes[selectedRoot].style.background = '#F0442B'
        notes[suspended2].style.background = 'orange'
        notes[perfectFifth].style.background = 'orange'
        maj7btn.disabled = false
        min7btn.disabled = false
        dim7btn.disabled = true
      } else if (selectedTriad === '5') {
        whiteBg()
        blackBg()
        notes[selectedRoot].style.background = '#F0442B'
        notes[suspended4].style.background = 'orange'
        notes[perfectFifth].style.background = 'orange'
        maj7btn.disabled = false
        min7btn.disabled = false
        dim7btn.disabled = true
      } else if (selectedTriad === '6') {
        whiteBg()
        blackBg()
        notes[selectedRoot].style.background = '#F0442B'
        notes[perfectFifth].style.background ='orange'
        maj7btn.disabled = false
        min7btn.disabled = false
        dim7btn.disabled = true
      }
    }
  }
}

// highlight seventh

const setSeventhBtn = document.getElementById('seventh-btn')

setSeventhBtn.onclick = function () {
  const sevenths = document.querySelectorAll('input[name="seventh"]')
  for (const seventh of sevenths) {

    
    if (seventh.checked) {
      selectedSeventh = seventh.value

      let majorSeventh = parseInt(selectedRoot) + 11
      let minorSeventh = parseInt(selectedRoot) + 10
      let dimSeventh = parseInt(selectedRoot) + 9

      if (selectedSeventh === '0') {
        notes[majorSeventh].style.background = '#f2c129'
      } else if (selectedSeventh === '1') {
        notes[minorSeventh].style.background = '#f2c129'
      } else if (selectedSeventh === '2') {
        notes[dimSeventh].style.background = '#f2c129'
      }
    }
  }
}

