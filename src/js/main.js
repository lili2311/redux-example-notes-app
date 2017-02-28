require('../scss/styles.scss');
console.log('========= REDUX APP EXAMPLE JS =========');

const newNoteButtonEl = document.querySelectorAll("input");
console.log(newNoteButtonEl);
console.log(newNoteButtonEl.length);

if (!newNoteButtonEl.forEach) {
	console.log('nope')
}
else {
	newNoteButtonEl.forEach( el => {
		el.addEventListener('click', clickedAddNewNoteButton(e));
	})
}

function clickedAddNewNoteButton(e) {
	console.log('CLICK');
	return false;
}