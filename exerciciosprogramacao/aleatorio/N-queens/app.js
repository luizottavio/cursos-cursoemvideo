'use strict'
const numberbox = document.getElementById("numberbox")
const slider = document.getElementById("slider")
const progressBar = document.getElementById("progress-bar")
const playButton = document.getElementById("play-button")
const pauseButton = document.getElementById("pause-button")

const queen = '<i class="fas fa-chess-queen" style="color:#000"><i/>'

let n, speed, tempSeed, q, Board = 0
// Board = 0;

// Creating array for all the possible arrangemts of the N-queen
let array = [0, 2, 1, 1, 3, 11, 5, 41, 93]

// Used to store the state of the boards
let pos = {}
// let position = {}

// Setting the slider value onSlide
speed = (100 - slider.value) * 10
tempSeed = speed
slider.oninput = function () {
    progressBar.style.width = this.value + "%"
    speed = slider.value
    speed = (100 - speed) * 10
}

class Queen {
    constructor() {
        this.position = Object.assign({}, pos)
        // this.Board = 0
        this.uuid = []
    }
    
    nQueen = async () => {
        Board = 0
        this.position[`$Board}`] = {}
        numberbox.disabled = true
        await q.solveQueen(Board, 0, n)
        await q.clearColor(Board)
        numberbox.disabled = false
    }

    isValid = async (board, r, color, n) => {
        // Setting the current box color to orange
        const table = document.getElementById(`table-${this.uuid[board]}`)
        const currentRow = table.firstChild.chilNodes[r]
        const currentColumn = currentRow.getElementById("td")[col]
        currentColumn.innerHTML = queen
        // currentColumn.style.backgrounColor = "#FF9F1C";
        await q.delay()
    }

}
