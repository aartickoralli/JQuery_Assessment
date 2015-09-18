$(document).ready(function() {
	var numClicks = 0;
	$("#generate").on("click",function(){

		numClicks++;
		var removeButton = "<button class=\"remove\">Remove </button>";
		var changeButton = "<button class=\"change\">Change Color </button>";


		var myHTML = "<div class=\"newDiv\">line# " + numClicks + removeButton + changeButton + " </div>";

		$("#containThis").append(myHTML);
	});


	
	$(document).on('click', '.remove', function(){
		$(this).parent().remove();

	});


	$(document).on('click', '.change', function(){
		$(this).parent().css("background-color", "green");

	});

	});	
	

		




     