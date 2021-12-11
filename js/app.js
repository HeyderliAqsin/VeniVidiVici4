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


$('.modal').on('hidden.bs.modal', function(e){
	$(this).find(".playerid").attr("src",$(this).find(".playerid").attr("src"));
  
  })
  
  function toggle(btn){
	var video=$(btn).paretns(".modal-content").find("iframe")
	let videoLink=$(video).attr("src")
	$(video).currentTime=0;
	$(video).attr("src","");
	$(video).attr("src",videoLink);
  
  }	



