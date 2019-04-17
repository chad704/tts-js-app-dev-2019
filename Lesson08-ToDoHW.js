const ul = document.querySelector('ul');
console.log(ul);


const newChore = document.getElementById('button').addEventListener('click', function(){
	let textBoxInput = document.getElementById('input').value; //sets a variable for value we enter in to input box
	let newLI = document.createElement('li'); //creates a new 'LI' element
	newLI.innerHTML = textBoxInput;			//assigns the value we put in the input box as the value for our new 'LI' item we create w/ the orevious variable
	ul.appendChild(newLI);					//adds the new 'LI' element we create to our 'ul' query/tag
	document.getElementById('input').value='';	//clears our input box after we have submitted the new chore
})

const removeItem = document.addEventListener("click", function(e){	//parameter 'e' identifies everything the function entails
	if (e.target.tagName=='LI') {		//since logging is inside IF statement, e only targets 'LI' elements	
		e.target.remove();		//removes our targeted 'e' items, which are 'LI' elements
		//console.log(e);
	}
})
