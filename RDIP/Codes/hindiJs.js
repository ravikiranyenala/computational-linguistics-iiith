
function iBtn(){
	document.getElementById("clickedWordsHindi").innerHTML += " कुत्ता";
	var x = document.getElementById("iHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtnH");
	y.style.display="block";
	var anslen = document.getElementById("clickedWordsHindi").textContent;
	anslen = anslen.trim().length;
	console.log(anslen);
	if (anslen==32){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function iiBtn(){
	document.getElementById("clickedWordsHindi").innerHTML += " को";
	var x = document.getElementById("iiHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtnH");
	y.style.display="block";
	var anslen = document.getElementById("clickedWordsHindi").textContent;
	anslen = anslen.trim().length;
	console.log(anslen);
	if (anslen==32){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function iiiBtn(){
	document.getElementById("clickedWordsHindi").innerHTML += " गया";
	var x = document.getElementById("iiiHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtnH");
	y.style.display="block";
	var anslen = document.getElementById("clickedWordsHindi").textContent;
	anslen = anslen.trim().length;
	console.log(anslen);
	if (anslen==32){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function ivBtn(){
	document.getElementById("clickedWordsHindi").innerHTML += " मारकर";
	var x = document.getElementById("ivHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtnH");
	y.style.display="block";
	var anslen = document.getElementById("clickedWordsHindi").textContent;
	anslen = anslen.trim().length;
	console.log(anslen);
	if (anslen==32){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function vBtn(){
	document.getElementById("clickedWordsHindi").innerHTML += " सो";
	var x = document.getElementById("vHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtnH");
	y.style.display="block";
	var anslen = document.getElementById("clickedWordsHindi").textContent;
	anslen = anslen.trim().length;
	console.log(anslen);
	if (anslen==32){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function viBtn(){
	document.getElementById("clickedWordsHindi").innerHTML += " बिल्लियों";
	var x = document.getElementById("viHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtnH");
	y.style.display="block";
	var anslen = document.getElementById("clickedWordsHindi").textContent;
	anslen = anslen.trim().length;
	console.log(anslen);
	if (anslen==32){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function getAnsH(){
	document.getElementById("correctSentencesH").style.display="block";
	document.getElementById("resultBtnH").style.display="none";
	document.getElementById("resultBtnHHide").style.display="block";
};



function getAnsHHide(){
	document.getElementById("correctSentencesH").style.display="none";
	document.getElementById("resultBtnH").style.display="block";
	document.getElementById("resultBtnHHide").style.display="none";

};



function checkAnsH(){
	var ans = document.getElementById("clickedWordsHindi").textContent;
	ans = ans.trim();
	console.log(ans.length);
	var ans1 = "बिल्लियों को मारकर कुत्ता सो गया";
	var ans2 = "मारकर बिल्लियों को कुत्ता सो गया";
	var ans3 = "बिल्लियों को मारकर सो गया कुत्ता";
	var ans4 = "मारकर बिल्लियों को सो गया कुत्ता";
	var ans5 = "कुत्ता सो गया बिल्लियों को मारकर";
	var ans6 = "कुत्ता सो गया मारकर बिल्लियों को";
	var ans7 = "सो गया कुत्ता बिल्लियों को मारकर";
	var ans8 = "सो गया कुत्ता मारकर बिल्लियों को";

	if (ans==ans1 || ans==ans2 || ans==ans3 ||ans==ans4 || ans==ans5 || ans==ans6||ans==ans7 || ans==ans8){
		document.getElementById("rightAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="none";
	}
	else{
		document.getElementById("wrongAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="block";
	}
};

function reformFnH(){
	document.getElementById("hindiSelected").reset();
};

