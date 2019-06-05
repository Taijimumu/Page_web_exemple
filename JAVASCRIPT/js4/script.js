// $(document).ready(function() {



// });



// function recupMail(){
// 	alert('ok');
// }
// var bout = document.getElementById('bout');
$('#bout').click(function(){

// var test = $('.email').val('string');


	// var test = $('#email1').val();
	// var test2 = $('#email2').val();
	// var test3 = $('#email3').val();
	// var test4 = $('#email4').val();
	// console.log(test);
	// console.log(test2);
	// console.log(test3);
	// console.log(test4);


// solution internet
	var str = '';
	$("input").each(function() {
	str = str + ' ' + $(this).val();

	});

	console.log(str);

})
// var bout2 = document.querySelector('.mail');
// bout.addEventListener("click", recupMail);

//Montrer/cacher

$("#hide").click(function(){
	$("#test").hide();
});

$("#show").click(function(){
	$("#test").show();
});
