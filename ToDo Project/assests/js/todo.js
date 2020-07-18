//Check off specific todos By Clicking
$('ul').on("click", "li",  function(){
	$(this).toggleClass("completed");
});

//Click on X to delte Todo

$('ul').on("click",  "span",  function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){
	if (event.which === 13) {
		//Grabbing New TODO Text from Input
		var todoText = $(this).val();
		//to clear out the input after a value
		$(this).val("");
		//Create a new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>")
	}
});

$('.fa-plus').click(function(){
	$('input[type="text"]').fadeToggle();
});