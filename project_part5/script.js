//Claire Howard Project Part 5

function seeMore(){
	let blank = document.getElementById("blank");
	let moreText = document.getElementById("more");
	let clickMe = document.getElementById("click");

	if (blank.style.display === "none") {
		blank.style.display = "inline";
    		clickMe.innerHTML = "Read more";
    		moreText.style.display = "none";
  	} 
	else {
		blank.style.display = "none";
		clickMe.innerHTML = "Read less";
		moreText.style.display = "inline";
 	 }
}

function seeMoreAgain(){
	let blankAgain = document.getElementById("blank2");
	let moreTextAgain = document.getElementById("more2");
	let clickMeAgain = document.getElementById("click2");

	if (blankAgain.style.display === "none") {
		blankAgain.style.display = "inline";
    		clickMeAgain.innerHTML = "Read more";
    		moreTextAgain.style.display = "none";
  	} 
	else {
		blankAgain.style.display = "none";
		clickMeAgain.innerHTML = "Read less";
		moreTextAgain.style.display = "inline";
 	 }
}

function showQuizResults(){
	let score=0;
	let q1=document.getElementById("answers-one").value;
	let q2=document.getElementById("answers-two").value;
	let q3=document.getElementById("answers-three").value;
	let q4=document.getElementById("answers-four").value;
	let resultDiv=document.getElementById("result");

	if(q1=="1C"){resultDiv.innerHTML+="Question 1-Correct <br>"; score++;}
	else{resultDiv.innerHTML+="Question 1-Incorrect<br>";}
	
	if(q2=="2B"){resultDiv.innerHTML+="Question 2-Correct <br>"; score++;}
	else{resultDiv.innerHTML+="Question 2-Incorrect <br>";}
	
	if(q3=="3A"){resultDiv.innerHTML+="Question 3-Correct <br>"; score++;}
	else{resultDiv.innerHTML+="Question 3-Incorrect<br>";}
	
	if(q2=="4B"){resultDiv.innerHTML="Question 4-Correct<br>"; score++;}
	else{resultDiv.innerHTML+="Question 4-Incorrect <br>";}

	resultDiv.innerHTML+="Score: " +score+ "/4";
}

function mySlideshow() {
	let i;
	let slides = document.getElementsByClassName("showSlides");

	for (i = 0; i < slides.length; i++) {
   		 slides[i].style.display = "none";  
  	}
 
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}    

	slides[slideIndex-1].style.display = "block";  
	setTimeout(mySlideshow, 10000);
}

	let slideIndex = 0;
	mySlideshow(slideIndex);





