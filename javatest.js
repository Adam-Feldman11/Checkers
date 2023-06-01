// This array will help us structure the board
var board = [
    [null, 'r', null, 'r', null, 'r', null, 'r'],
    ['r', null, 'r', null, 'r', null, 'r', null],
    [null, 'r', null, 'r', null, 'r', null, 'r'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null]
  ];
  
  var selValueElem = document.querySelector('#selectedSquare');
  
  function createBoard() {
    var theBoard = document.createElement('section');
    theBoard.id = 'checkerboard';
    document.body.appendChild(theBoard);
  
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        var square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute("id", "div" + i + j);
  
        if ((i + j) % 2 === 1) {
          square.classList.add('bg');
          square.addEventListener("click", movePiece);
        }
  
        theBoard.appendChild(square);
  
        if (board[i][j]) {
          createPiece("piece" + i + j, 'checker-' + board[i][j], square);
        }
      }
    }
  }
  

function createPiece(id, pieceClass, theSquare) {
    var newPiece = document.createElement('div');
    newPiece.setAttribute("id", id);    
    newPiece.classList.add('checker');
    newPiece.classList.add(pieceClass);
    newPiece.addEventListener("click", getPlayerPieces);
    theSquare.appendChild(newPiece);
  }
  
  function movePiece(event) {
    console.log("target square selected=" + event.target.id);
  
   var newSqaureId = event.target.id;
   newSqaureId = newSqaureId.replace("piece","");
   newSqaureId = newSqaureId.replace("div","");
  
   var selectedPieceId = selValueElem.dataset.value;
   
   if (selectedPieceId != newSqaureId){
    var oldSquare = document.getElementById("div" + selectedPieceId)
    var oldPiece = document.getElementById("piece" + selectedPieceId)
    var pieceClass = oldPiece.classList[1];
  
    oldSquare.removeChild(oldPiece);
  
    var newSqaure = document.getElementById("div" +  newSqaureId);
  
    createPiece("piece" + newSqaureId, pieceClass, newSqaure);
   }
  }
  
  
  
  function getPlayerPieces(event){
    console.log("target square selected =" + event.target.id);
  
    var selectedPieceId = event.target.id;
  selectedPieceId = selectedPieceId.replace("piece","");
  selectedPieceId = selectedPieceId.replace("div","");
  selValueElem.dataset.value = selectedPieceId
  }