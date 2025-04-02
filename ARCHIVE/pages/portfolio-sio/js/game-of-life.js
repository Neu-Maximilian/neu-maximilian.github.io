// Obtenez le canvas et le contexte
let canvas = document.getElementById("game-of-life-banner");
let context = canvas.getContext("2d");

// Définir la taille du canvas pour qu'il s'adapte à l'écran
canvas.width = document.body.scrollWidth;
canvas.height = document.body.scrollHeight;
// Si la taille de l'écran est plus grande que celle du body, on prend la taille de l'écran
if (canvas.height < window.innerHeight) {
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
let cellSize = 10;
let cols = Math.floor(canvas.width / cellSize);
let rows = Math.floor(canvas.height / cellSize);

// Définir la couleur de cellule par défaut
let defaultColor = "#e4e3e6";
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  defaultColor = "#5b5b5c";
}

// Initialiser le plateau de jeu en tant que tableau 2D contenant mort (0) et vivant (1) ainsi que la couleur de chaque cellule
let board = new Array(cols);
for (let i = 0; i < cols; i++) {
  board[i] = new Array(rows);
  for (let j = 0; j < rows; j++) {
    board[i][j] = new Array(2);
    board[i][j][0] = 0;
    board[i][j][1] = "default";
  }
}

// Initialiser le plateau de jeu avec des cellules vivantes aléatoires
function init() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      board[i][j] = [Math.floor(Math.random() * 2), "default"];
    }
  }
}

// Dessiner le plateau de jeu sur le canvas
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Dessiner le fond du canvas
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j][0] == 1) {
        if (board[i][j][1] == "default") {
          context.fillStyle = defaultColor;
        } else {
          context.fillStyle = board[i][j][1];
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
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // console.log("checking cell", i, j);
      let state = board[i][j][0];
      let color = board[i][j][1];
      let neighbors = countNeighbors(i, j);

      // Règles du jeu de la vie
      if (state == 0 && neighbors == 3) {
        next[i][j] = [1, mixColors(i, j)];
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = [0, color];
      } else {
        next[i][j] = [state, color];
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
      sum += board[col][row][0];
    }
  }
  sum -= board[x][y][0];
  return sum;
}

// Mélanger les couleurs des voisins
function mixColors(x, y) {
  // Récupérer les couleurs des voisins (cellules en bas, en haut, à gauche et à droite)
  let neighbors = [];
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      if (board[col][row][0] == 1) {
        if (board[col][row][1] == "default") {
          neighbors.push(defaultColor);
        } else {
          neighbors.push(board[col][row][1]);
        }
      }
    }
  }

  // Mélanger les couleurs des voisins
  let mixedColor = "#";
  for (let i = 1; i < 7; i += 2) {
    let sum = 0;
    for (let j = 0; j < neighbors.length; j++) {
      sum += parseInt(neighbors[j].slice(i, i + 2), 16);
    }
    mixedColor += Math.floor(sum / neighbors.length).toString(16);
  }

  return mixedColor;
}

// Générer une couleur aléatoire
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Initialiser et mettre à jour continuellement le plateau de jeu
window.onload = function () {
  init();
  setInterval(function () {
    draw();
    update();
  }, 100);
};

// Ajouter une cellule vivante autour du curseur de la souris
document.addEventListener("mousemove", function (event) {
  let x = Math.floor(event.clientX / cellSize);
  let y = Math.floor(event.clientY / cellSize);
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    board[x][y] = [1, getRandomColor()];
  }
});

// Ajouter plusieurs cellules vivantes multicolores après un clic
document.addEventListener("click", function (event) {
  let x = Math.floor(event.pageX / cellSize);
  let y = Math.floor(event.pageY / cellSize);
  // Sous forme de cercle (non rempli)
  for (let i = -3; i < 4; i++) {
    for (let j = -3; j < 4; j++) {
      if ( 4 < (i*i + j*j) && (i*i + j*j) < 10) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        board[col][row] = [1, getRandomColor()];
      }
    }
  }
});
