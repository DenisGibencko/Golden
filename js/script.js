"use strict"

function ibg(){

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

let headerIcon = document.querySelector('.menu-header__icon');
let headerBody = document.querySelector('.menu-header__body');
let body = document.querySelector('body');
let headerLinks = document.querySelectorAll('.menu-header__link');


headerIcon.addEventListener("click", function(e){
	headerIcon.classList.toggle('_active');
	headerBody.classList.toggle('_active');
	body.classList.toggle('_lock');
})

headerLinks.forEach(headerLink => 
 headerLink.addEventListener("click", function(e){
	headerIcon.classList.remove('_active');
	headerBody.classList.remove('_active');
	body.classList.remove('_lock');
}))


