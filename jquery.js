$(document).ready(function() {
	for (i = 0; i < 800; i++) {
		$(".container").append('<div class="indi"></div>');
	};
	$("#populate").click(function() {
		var newrows = document.getElementById('count').value;
		for (i = 0; i < newrows; i++) {
			var j = 0;
			while (j < 20) {
				$(".container").append('<div class="indi"></div>');
				j++;
			};
		};
	});
	$("#reset").click(function() {
		$(".indi").remove();
		for (i = 0; i < 800; i++) {
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
			$(this).addClass("green");
		}
	});
	$(".container").on("mouseleave", ".indi", function() {
		var radio = $('input[name= "option"]:checked').val();
		if (radio === "1") {
			$(this).fadeTo("fast", 1);
			$(this).removeClass("blue green");
		}
	});
});