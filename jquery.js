$(document).ready(function() {
	for (i = 0; i < 561; i++) {
		$(".container").append('<div class="indi"></div>');
	};
	$("#populate").click(function() {
		var boxes = document.getElementById('count').value;
		for (i = 0; i < boxes; i++) {
			$(".container").append('<div class="indi"></div>');
		};
	});
	$("#reset").click(function() {
		$(".indi").remove();
		for (i = 0; i < 561; i++) {
			$(".container").append('<div class="indi"></div>');
		};
		radiobtn = document.getElementById("opt1");
		radiobtn.checked = true;
	});
	$(".container").on("mouseenter", ".indi", function() {
		var radio = $('input[name= "option"]:checked').val();
		if (radio === "1") {
			$(this).fadeTo("fast", .1);
		} else if (radio === "2") {
			$(this).addClass("blue");
		} else {
			$(this).css('background-color', "#C9C9C9");
		}
	});
	$(".container").on("mouseleave", ".indi", function() {
		var radio = $('input[name= "option"]:checked').val();
		if (radio === "1") {
			$(this).fadeTo("slow", 1);
		} else if (radio === "2") {
		//	$(this).removeClass("blue");
		} else {
			$(this).css('background-color', "#4B4B4B");
		}
	});
});