$(document).ready(function(){
	//hides the main page so it can be toggles back on later
	$("#main_page").toggle();

	//on click of the overlay make it disappear!!
	$("#main_overlay").one("click",function(){
		removeOverlay();
	});

	$("#footer").localScroll({duration:800});

	$("#header").localScroll({duration:800});

	$("#more_button").localScroll({duration:800});
});

function removeOverlay(){
	$("#main_overlay").attr("class", "animated fadeOut");
	//after 1 sec delay remove the div
	setTimeout(function(){
		$("#main_overlay").remove();
		renderPage();
	}, 1000);
}

function renderPage(){
	$("#main_page").toggle();
};