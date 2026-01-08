(() => {
  const themes = {
    fruits: ["🍎","🍌","🍇","🍒","🍓","🍍","🥝","🥑","🍉","🥥","🍋","🍊","🍐","🍏","🥭","🍈"],
    animals: ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔"],
    science: ["⚛️","🔬","🧬","💡","🔭","🧪","🛰️","🌡️","🧲","🔋","💻","📡","📱","🔧","⚙️","🔌"]
  };

  const DIFF_CONF = {
    easy:  { cols: 4, rows: 4, pairs: 8,  cardSize: 90 },
    medium:{ cols: 6, rows: 6, pairs: 18, cardSize: 84 },
    hard:  { cols: 8, rows: 8, pairs: 32, cardSize: 72 }
  };

  const board = document.getElementById("gameBoard");
  const movesEl = document.getElementById("moves");
  const matchesEl = document.getElementById("matches");
  const timerEl = document.getElementById("timer");
  const resetBtn = document.getElementById("resetBtn");
  const backBtn = document.getElementById("backBtn");
  const difficultySel = document.getElementById("difficulty");
  const themeSel = document.getElementById("theme");

  let flipped = [];
  let moves = 0;
  let matches = 0;
  let totalPairs = 0;
  let lock = false;
  let timer = 0;
  let timerId = null;

  function initGame() {
    clearInterval(timerId);
    const diff = DIFF_CONF[difficultySel.value] || DIFF_CONF.easy;
    const theme = themes[themeSel.value] || themes.fruits;

    const deckSymbols = theme.slice(0, diff.pairs);
    totalPairs = deckSymbols.length;

    flipped = [];
    moves = 0;
    matches = 0;
    lock = false;
    timer = 0;

    movesEl.textContent = "0";
    matchesEl.textContent = "0";
    timerEl.textContent = "0s";

    board.style.gridTemplateColumns = `repeat(${diff.cols}, ${diff.cardSize}px)`;
    board.style.gridAutoRows = `${diff.cardSize}px`;
    board.innerHTML = "";

    const deck = shuffle([...deckSymbols, ...deckSymbols]);
    deck.forEach((symbol, idx) => board.appendChild(createCard(symbol, idx)));

    timerId = setInterval(() => {
      timer++;
      timerEl.textContent = `${timer}s`;
    }, 1000);
  }

  function createCard(symbol, id) {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.type = "button";
    btn.dataset.symbol = symbol;
    btn.dataset.id = id;
    btn.textContent = "";
    btn.addEventListener("click", () => onFlip(btn));
    return btn;
  }

  function onFlip(card) {
    if (lock) return;
    if (card.classList.contains("flipped") || card.classList.contains("matched")) return;

    card.classList.add("flipped");
    card.textContent = card.dataset.symbol;
    flipped.push(card);

    if (flipped.length === 2) {
      moves++;
      movesEl.textContent = moves;
      checkMatch();
    }
  }

  function checkMatch() {
    const [a, b] = flipped;
    lock = true;

    if (a.dataset.symbol === b.dataset.symbol) {
      a.classList.add("matched");
      b.classList.add("matched");
      matches++;
      matchesEl.textContent = matches;
      flipped = [];
      lock = false;

      if (matches === totalPairs) {
        clearInterval(timerId);
        setTimeout(() => {
          alert(`🎉 You matched all ${totalPairs} pairs!\nMoves: ${moves}\nTime: ${timer}s`);
        }, 250);
      }
    } else {
      setTimeout(() => {
        a.classList.remove("flipped");
        b.classList.remove("flipped");
        a.textContent = "";
        b.textContent = "";
        flipped = [];
        lock = false;
      }, 800);
    }
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  resetBtn.addEventListener("click", initGame);
  backBtn.addEventListener("click", () => window.history.back());
  difficultySel.addEventListener("change", initGame);
  themeSel.addEventListener("change", initGame);

  window.addEventListener("DOMContentLoaded", initGame);
})();