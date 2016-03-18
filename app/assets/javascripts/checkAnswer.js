$( document ).ready(function () { 
	var seed = window.seed;
	var quiz = window.quiz;
	var url = window.url;

	var i = 0;
	while($("#q" + i + "_button").length !== 0) {
		$("#q" + i + "_button").click({questionNum: i}, function (event) {
			
			var qNum = event.data.questionNum;
			var answer = quiz["question"]["questions"][qNum]["answer"];
			var questionType = quiz["question"]["questions"][qNum]["format"].toString();
			
			if(questionType === "multiple-choice") {
				var selectedAnswer =  $('[name="q' + qNum + '"]:checked').attr('data-question-num');
				if(answer.toString() === selectedAnswer) {
					alert("You are correct!");
					console.log("Correct!");
				} else {
					alert("Please try again");
					console.log("Incorrect!");
				}
			} else if(questionType === "free-response") {
				console.log($('[name="q' + qNum + '"]').data("type"));
				var inputAnswer =  $('[name="q' + qNum + '"]').val().toString();
				console.log(inputAnswer.toUpperCase());
				console.log(answer.toUpperCase());

				if(answer.toUpperCase() === inputAnswer.toUpperCase()) {
					alert("You are correct!");
					console.log("Correct!");

				} else {
					alert("Please try again");
					console.log("Incorrect!");
				}
			}
		});
		
		i++;
	}
});		


function activateDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
