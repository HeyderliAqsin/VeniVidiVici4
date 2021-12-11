var sliderWidth = document.querySelector(".main-menu").clientWidth;
var sliderLenght = document.querySelectorAll(".main-menu li").length;

var mySliderWidth = sliderWidth*sliderLenght;

var sliderUl = document.querySelector(".main-menu ul");
sliderUl.style.width = mySliderWidth;

var buttonBaslamaq = document.querySelector(".main-menu .start");

var c = 0;

buttonBaslamaq.onclick = function(){
	NextMenu()
}

function NextMenu(){
	c++;
	sliderUl.style.left = -(c*sliderWidth)+"px"
}


