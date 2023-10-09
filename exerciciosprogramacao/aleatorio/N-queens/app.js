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

        // Checking the queen in the same column
        for (let i = r - 1; i >= 0; --i){
            const row = table.firstChild.childNode[i]
            const column = row.getElementByTagName("td")[col]

            const value = column.innerHTML
            
            if (value == queen) {
                column.style.backgroundColor = "#FB5607"
                currentColumn.innerHTML = "-"
                return false
            }
            column.style.backgroundColor = "ffca3a"
            await q.delay()
        }

        // Checking the upper left diagonal
        for (let i = r -1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            const row = table.firstChild.childNodes[i]
            const column = row.getElementByTagName("td")[j]
            const value = column.innerHTML

            if(value == queen) {
                column.style.backgroundColor = "fb5607"
                currentColumn.innerHTML = "-"
                return false
            }
            column.style.backgroundColor = "#ffca3a"
            await q.delay()
        }

        // Checking the upper right diagonal
        for (let i = r - 1, j = col + 1; i >= 0 && j < n; --i, ++j) {
            const row = table.firstChild.childNodes[i]
            const column = row.getElementByTagName("td")[j]

            const value = column.innerHTML

            if(value == queen) {
                column.style.backgroundColor = "#FB5607"
                currentColumn.innerHTML = "-"
                return false
            }
            column.style.backgroundColor = "#ffca3a"
            await q.delay()
        }
        return true
    }

    clearColor = async (board) => {
        for (let j = 0; j < n; ++j) {
            const table = document.getElementById(`table-${this.uuid[board]}`) 
            const row = table.firstChild.childNodes[i]
            for (let k = 0; k < n; ++k)
                (j + k)  & 1
                    ? (row.getElementByTagName("td")[k].style.backgroundColor = "#FF9F1C")
                    : (row.getElementByTagName("td")[k].style.backgroundColor = "#FCCD90")
        }
    }

    delay = async () => {
        await new Promise((done) => setTimeout(() => done(), speed))
    }

    solveQueen = async (board, r, n) => {
        if (r == n) {
            ++Board
            let table = document.getElementById(`table-${this.uuid[Board]}`)
            for(let k = 0; k < n; ++k) {
                let row = table.firstChild.childNodes[k]
                row.getElementsByTagName("td")[this.position[board][k]].innerHTML = queen
            }
            this.position[Board] = this.position[board]
            return
        }

        for (let i = 0; i < n; i++) {
            await q.delay()
            // console.log("outside:" + board)
            await q.clearColor(board)
            if (await q.isValid(board, r, i, n)) {
                await q.delay()
                // console.log("inside:" + board)
                await q.clearColor(board)
                let table = document.getElementById(`table-${this.uuid[board]}`)
                let row = table.firstChild.chilNodes[r]
                row.getElementByTagName("td")[i].innerHTML = queen

                this.position[board][r] = i

                if (await q.solveQueen(board, r + 1, n))
                    await q.clearColor(board)
                    
                await q.delay()
                board = Board
                // console.log(this.Board)
                table = document.getElementById(`table-${this.uuid[board]}`)
                // console.log(JSON.parse(JSON.stringify(table)))
                row = table.firstChild.childNodes[r]
                row.getElementByTagName("td")[i].innerHTML = "-"

                delete this.position[`${board}`][`${r}`]    
            }
        }
    }
}
