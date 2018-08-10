window.menuVisible = false;
window.hideMenu = function(){
	let sheets = [
		'action-sheet-top',
		'action-sheet-right',
		'action-sheet-bottom',
		'action-sheet-left'
	];
	for (var i = sheets.length - 1; i >= 0; i--) {
		let sheet = document.getElementById(sheets[i]);
		sheet.classList.remove('active');
	};

	let slide_classes = [
		'slide-down',
		'slide-left',
		'slide-up',
		'slide-right',
	];
	let pageContent = document.getElementById('page-content');
	for (var i = slide_classes.length - 1; i >= 0; i--) {
		let slide_class = slide_classes[i];
		pageContent.classList.remove(slide_class);
	};
	let modal_blur = document.getElementById('modal-blur');
	modal_blur.classList.remove('active');
}
window.showTop = function(){
	let element = document.getElementById('action-sheet-top');
	element.classList.add('active');

	let pageContent = document.getElementById('page-content');
	pageContent.classList.add('slide-down');

	let modal_blur = document.getElementById('modal-blur');
	modal_blur.classList.add('active');
}
window.showRight = function(){
	let element = document.getElementById('action-sheet-right');
	element.classList.add('active');

	let pageContent = document.getElementById('page-content');
	pageContent.classList.add('slide-left');

	let modal_blur = document.getElementById('modal-blur');
	modal_blur.classList.add('active');
}
window.showBottom = function(){
	let element = document.getElementById('action-sheet-bottom');
	element.classList.add('active');

	let pageContent = document.getElementById('page-content');
	pageContent.classList.add('slide-up');

	let modal_blur = document.getElementById('modal-blur');
	modal_blur.classList.add('active');
}
window.showLeft = function(){
	let element = document.getElementById('action-sheet-left');
	element.classList.add('active');

	let pageContent = document.getElementById('page-content');
	pageContent.classList.add('slide-right');

	let modal_blur = document.getElementById('modal-blur');
	modal_blur.classList.add('active');
}