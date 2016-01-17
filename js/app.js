$(document).ready(function(){
	//on click of the overlay make it disappear!!
	$("#main_overlay").on("click",function(){
		removeOverlay();
	});


});

function removeOverlay(){
	$("#main_overlay").attr("class", "animated fadeOut");
	//after 1 sec delay remove the div
	setTimeout(function(){
		$("#main_overlay").remove();
		createPage();
	}, 1000);
}

function createPage(){
	var newDiv = $("<div>");
	newDiv.attr({"class":"animated fadeIn","id":"header"})
	$("body").append(newDiv);
}