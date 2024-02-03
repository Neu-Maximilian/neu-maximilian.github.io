// Obtenez le canvas et le contexte
let canvas = document.getElementById("game-of-life-banner");
let context = canvas.getContext("2d");

// Définir la taille du canvas pour qu'il s'adapte à l'écran
canvas.width = document.body.scrollWidth;
canvas.height = document.body.scrollHeight;
// Si la taille de l'écran est plus grande que celle du body, on prend la taille de l'écran
if (canvas.width < window.innerWidth || canvas.height < window.innerHeight) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
// Redimensionner le canvas si la taille de l'écran change
window.addEventListener("resize", function () {
  canvas.width = document.body.scrollWidth;
  canvas.height = document.body.scrollHeight;
  if (canvas.width < window.innerWidth || canvas.height < window.innerHeight) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

// Définir la taille du plateau de jeu en fonction de la taille du canvas
let cellSize = 5;
let cols = Math.floor(canvas.width / cellSize);
let rows = Math.floor(canvas.height / cellSize);

// Initialiser le plateau de jeu en tant que tableau 2D
let board = new Array(cols);
for (let i = 0; i < cols; i++) {
  board[i] = new Array(rows);
}

// Initialiser le plateau de jeu avec des valeurs aléatoires
function init() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Chaque cellule a 50% de chances d'être vivante ou morte
      board[i][j] = Math.floor(Math.random() * 2);
    }
  }
}

// Dessiner le plateau de jeu sur le canvas
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j] == 1) {
        // Vérifiez si l'utilisateur a sélectionné un thème sombre
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          context.fillStyle = "#5b5b5c";
        } else {
          context.fillStyle = "#e4e3e6";
        }
        context.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  }
}

// Calculer la prochaine génération du plateau de jeu
function update() {
  let next = new Array(cols);
  for (let i = 0; i < cols; i++) {
    next[i] = new Array(rows);
  }

  // Calculer le prochain état de chaque cellule
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let neighbors = countNeighbors(x, y);
      if (board[x][y] == 1 && (neighbors < 2 || neighbors > 3)) {
        next[x][y] = 0;
      } else if (board[x][y] == 0 && neighbors == 3) {
        next[x][y] = 1;
      } else {
        next[x][y] = board[x][y];
      }
    }
  }

  board = next;
}

// Compter le nombre de voisins vivants pour une cellule
function countNeighbors(x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += board[col][row];
    }
  }
  sum -= board[x][y];
  return sum;
}

// Initialiser et mettre à jour continuellement le plateau de jeu
window.onload = function () {
  init();
  setInterval(function () {
    draw();
    update();
  }, 100);
};

// Ajouter plusieurs cellules vivantes autour du curseur de la souris
canvas.addEventListener("mousemove", function (event) {
  let x = Math.floor(event.clientX / cellSize);
  let y = Math.floor(event.clientY / cellSize);
  for (let i = -2; i < 3; i++) {
    for (let j = -2; j < 3; j++) {
      if (Math.random() > 0.5) {
        board[(x + i + cols) % cols][(y + j + rows) % rows] = 1;
      }
    }
  }
});
