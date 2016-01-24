
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*
//Te iubesc mocofanica mea :*


console.log("Hello from engine.js");

var Game = {
	userItem: "",
	calcItem: "",
	table: [ [-1,-1,-1],[-1,-1,-1],[-1,-1,-1] ],
	activePlayer: "",
	countingMoves: 0,
	line: "",
	column: ""

};

//This is the method which starts the game
Game.start = function() {
	var answer = prompt("Would you like to start the game?");
	answer = answer.toLowerCase();
	if (answer === "yes"){
		return true;
	}
	return false;
}

//This is the method where you chose your item
Game.setUserItem = function () {
	var choice;
	choice = prompt("Would you like to be X or 0?");
	choice = choice.toLowerCase();
	if (choice === 'x' || choice === '0'){
		return choice;
	}
	return "This is not an option!";;
}

//This is the method which calculates the computer item
Game.setCalcItem = function() {
	switch (Game.userItem){
		case 'x':
			Game.calcItem = "0";
			break;
		case '0':
			Game.calcItem = "x";
			break;
		default :
			console.log("This is not an option!");
			break;
	}
}

Game.userChoseCheck = function() {
	var ok = 0;
	while (ok === 0){
		Game.line = prompt(  "Which line would you like to point?");
		if ( Game.line < 0 || Game.line > 2){
			continue;
		}
		Game.column = prompt( "Which column would you like to point?");
		if(Game.column < 0 || Game.column > 2){
			continue;
		}
		if ( Game.table[Game.line][Game.column] === -1){
			ok=1;
		}
		else {
			console.log("That check is taken. Please choose another line and column!");
		}
	}
	return true;
}

Game.calcChoseCheck = function (){
	var ok =0;
	while (ok === 0){
		Game.line = Math.random();
		if(Game.line <= 0.33){
				Game.line = 0;
		}

		if(Game.line > 0.33 && Game.line <= 0.66){
				Game.line = 1;
		}

		if(Game.line > 0.66 ){
				Game.line = 2;
		}

		Game.column = Math.random();
		if(Game.column <= 0.33){
				Game.column = 0;
		}

		if(Game.column > 0.33 && Game.column <= 0.66){
				Game.column = 1;
		}

		if(Game.column > 0.66 ){
				Game.column = 2;
		}
		if ( Game.table[Game.line][Game.column] === -1){
			ok = 1;
		}
	}
	return true;
}

Game.setFirstPlayer = function() {
	if(Game.userItem === 'x'){
		Game.activePlayer = "user";
	}
	else {
		Game.activePlayer = "comp";
	}
}

Game.userActivePlayer = function (){
	if( Game.activePlayer === "user" ){
		if( Game.userChoseCheck() === true){
			Game.table[Game.line][Game.column] = Game.userItem;
			console.log("user: " + Game.line + " " + Game.column);
			Game.checkWinnerUser();
		}
	}
}

Game.compActivePlayer = function () {
	if(Game.activePlayer === "comp"){
		if (Game.calcChoseCheck() === true){
				Game.table[Game.line][Game.column] = Game.calcItem;
				console.log("comp: " + Game.line + " " + Game.column);
				Game.checkWinnerComp();
		}


	}
}

Game.setActivePlayer = function(){
	if (Game.activePlayer === "user"){
		Game.activePlayer = "comp";
	}
	else if( Game.activePlayer === "comp"){
		Game.activePlayer = "user";
	}
}

Game.showItem = function() {
	console.log("This is your item : " + Game.userItem);
	Game.setCalcItem();
	console.log("This is yours computer item : " + Game.calcItem);
}

Game.checkWinnerComp = function () {
	var ok = 1;
	for( var i in Game.table){
		if (Game.table[i][Game.column] === Game.userItem || Game.table[i][Game.column] === -1){
			ok = 0;
		}
	}
	if (ok === 1){
		Game.countingMoves = 9;
		console.log("Computer wins!coloana");
		return true;
	}

	ok = 1;

	for( var i in Game.table){
		if(Game.table[Game.line][i] === Game.userItem || Game.table[Game.line][i] === -1){
			ok = 0;
		}
	}

	if(ok === 1){
		Game.countingMoves = 9;
		console.log("Computer wins!linie");
		return true;
	}

	ok = 1;

	for ( var p in Game.table){
		if ( Game.table[p][p] === Game.userItem || Game.table[p][p] === -1)
			ok=0;
	}
	if (ok === 1){
		Game.countingMoves = 9;
		console.log("Computer wins!diagonala");
		return true;
	}

	return false;
}


Game.checkWinnerUser = function () {
	var ok = 1;
	for( var i in Game.table){
		if (Game.table[i][Game.column] === Game.calcItem || Game.table[i][Game.column] === -1){
			ok = 0;
		}
	}
	if (ok === 1){
		Game.countingMoves = 9;
		console.log("User wins!coloana");
		return true;
	}
 	
 	ok = 1;

	for( var i in Game.table){
		if(Game.table[Game.line][i] === Game.calcItem || Game.table[Game.line][i] === -1){
			ok = 0;
		}
	}

	if(ok === 1){
		Game.countingMoves = 9;
		console.log("User wins!linie");
		return true;
	}

	ok = 1;

	for ( var p in Game.table){
		if ( Game.table[p][p] === Game.calcItem || Game.table[p][p] === -1)
			ok=0;
	}
	if (ok === 1){
		Game.countingMoves = 9;
		console.log("User wins!diagonala");
		return true;
	}

	return false;
}


Game.play = function () {
	while (Game.countingMoves < 9){
	Game.userActivePlayer();
	Game.compActivePlayer();
	Game.setActivePlayer();
	Game.countingMoves++;
	}
}



if(Game.start() === true){

	//Here you chose your entry item
	Game.userItem = Game.setUserItem().toLowerCase();	

	//If you don't chose the right item, you can try again
	while (Game.userItem === "this is not an option!" ){
		console.log(Game.userItem);
		Game.userItem = Game.setUserItem().toLowerCase();

	}
	//Here you can see how plays with which item
	Game.showItem();

	//This set the first player (the one with x)
	Game.setFirstPlayer();

	//The game starts
	Game.play();


}

