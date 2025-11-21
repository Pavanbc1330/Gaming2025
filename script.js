let players = [];
let currentPlayer = 0;

function showPlayerForm() {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("player-setup").classList.remove("hidden");
}

function addPlayer() {
    if (players.length >= 4) {
        alert("Maximum 4 players allowed");
        return;
    }

    const div = document.getElementById("players-input");
    const id = players.length;

    div.innerHTML += `
        <div>
            <input type="text" id="player${id}" placeholder="Player Name">
            <input type="color" id="color${id}" value="#${Math.floor(Math.random()*16777215).toString(16)}">
        </div>
    `;

    players.push({ name: "", color: "", position: 1 });
}

function startGame() {
    players = players.map((p, index) => ({
        name: document.getElementById(`player${index}`).value || `Player ${index+1}`,
        color: document.getElementById(`color${index}`).value,
        position: 1
    }));

    if (players.length === 0) {
        alert("Add at least 1 player");
        return;
    }

    document.getElementById("player-setup").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");

    createBoard();
    updatePlayerList();
}

function createBoard() {
    const board = document.getElementById("board");

    for (let i = 100; i >= 1; i--) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.id = `cell-${i}`;
        div.innerHTML = i;
        board.appendChild(div);
    }
}

const snakes = {
    97: 78,
    95: 56,
    88: 24,
    62: 18,
    48: 26
};

const ladders = {
    3: 22,
    10: 32,
    28: 55,
    44: 95,
    70: 92
};

function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-result").innerText = `Dice: ${dice}`;

    let player = players[currentPlayer];
    player.position += dice;

    if (player.position > 100) player.position = 100;

    if (snakes[player.position]) {
        player.position = snakes[player.position];
    }

    if (ladders[player.position]) {
        player.position = ladders[player.position];
    }

    renderPawns();

    if (player.position === 100) {
        alert(`${player.name} wins!`);
        location.reload();
        return;
    }

    currentPlayer = (currentPlayer + 1) % players.length;
    document.getElementById("turn-info").innerText = `${players[currentPlayer].name}'s turn`;
}

function renderPawns() {
    document.querySelectorAll(".pawn").forEach(p => p.remove());

    players.forEach(p => {
        const cell = document.getElementById(`cell-${p.position}`);
        const pawn = document.createElement("div");
        pawn.classList.add("pawn");
        pawn.style.background = p.color;
        cell.appendChild(pawn);
    });
}

function updatePlayerList() {
    const ul = document.getElementById("players-list");
    players.forEach(p => {
        const li = document.createElement("li");
        li.innerText = p.name;
        ul.appendChild(li);
    });

    document.getElementById("turn-info").innerText = `${players[0].name}'s turn`;
}
