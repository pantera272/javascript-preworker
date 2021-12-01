function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId)
{
	if (argMoveId == '1'){
        return 'papier';
    } else if (argMoveId == '2'){
        return 'kamień';
    } else if (argMoveId =='3'){
        return 'nożyce';
    }
	
	printMessage('Nie znam takiego ruchu.');
	return 'nieznany ruch';
}

function displayResult (argComputerMove, argPlayerMove)
{
	if (argPlayerMove != 'nieznany ruch'){
		if ((argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'kamień' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')){
			printMessage('Remis!');	//remis
		} else if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
			printMessage('Komputer wygrywa!');
		} else {
			printMessage("Wygrałeś!");
		}
	} else {
		printMessage('Gracz nie zagrał');
	}
}

function playGame(playerClic)
{
	clearMessages();
    let randomFraction = Math.random();
    let calculation = randomFraction * 3 + 1;
    let roundNumber = Math.floor(calculation);

    console.log('Wybór komputera: ' + roundNumber);

    let computerMove = getMoveName(roundNumber);

    printMessage('Komputer zagrał ' + computerMove);

    //wybor gracza
    let playerInput = playerClic;
    console.log('Gracz wpisał ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Wybrałeś ' + playerMove);

    displayResult(computerMove, playerMove);
}

document.getElementById('papier').addEventListener('click', function(){playGame(1);});
document.getElementById('kamien').addEventListener('click', function(){playGame(2);});
document.getElementById('nozyce').addEventListener('click', function(){playGame(3);});
