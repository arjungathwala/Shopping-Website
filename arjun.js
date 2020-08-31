const toggleModal = () => {
	document.querySelector('.modal')
		.classList.toggle('modal--hidden')
};

document.querySelector('#show-modal')
	.addEventListener('click',toggleModal);