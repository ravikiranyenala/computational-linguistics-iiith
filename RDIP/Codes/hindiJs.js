
//-------------##--------------1st sentence----------------------
function a1Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " कुत्ता";
	var x = document.getElementById("a1Hide");
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

function b1Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " को";
	var x = document.getElementById("b1Hide");
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

function c1Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " गया";
	var x = document.getElementById("c1Hide");
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

function d1Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " मारकर";
	var x = document.getElementById("d1Hide");
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

function e1Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " सो";
	var x = document.getElementById("e1Hide");
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

function f1Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " बिल्लियों";
	var x = document.getElementById("f1Hide");
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

//------#########----------------1st sentence cmpltd----------

function getAnsH(){
	var anslen = document.getElementById("clickedWordsHindi").textContent;    
	anslen = anslen.trim().length;
	if (anslen==32){
		document.getElementById("correctSentencesH").style.display="block";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("resultBtnHHide").style.display="block";
		document.getElementById("correctSentencesH2").style.display="none";
		document.getElementById("correctSentencesH3").style.display="none";
		document.getElementById("correctSentencesH4").style.display="none";
		document.getElementById("correctSentencesH5").style.display="none";
		document.getElementById("correctSentencesH6").style.display="none";
		document.getElementById("correctSentencesH7").style.display="none";
	}
	else if(anslen==22){
		document.getElementById("correctSentencesH").style.display="none";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("resultBtnHHide").style.display="block";
		document.getElementById("correctSentencesH2").style.display="block";
		document.getElementById("correctSentencesH3").style.display="none";
		document.getElementById("correctSentencesH4").style.display="none";
		document.getElementById("correctSentencesH5").style.display="none";
		document.getElementById("correctSentencesH6").style.display="none";
		document.getElementById("correctSentencesH7").style.display="none";
	}
	else if(anslen==19){
		document.getElementById("correctSentencesH").style.display="none";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("resultBtnHHide").style.display="block";
		document.getElementById("correctSentencesH2").style.display="none";
		document.getElementById("correctSentencesH3").style.display="block";
		document.getElementById("correctSentencesH4").style.display="none";
		document.getElementById("correctSentencesH5").style.display="none";
		document.getElementById("correctSentencesH6").style.display="none";
		document.getElementById("correctSentencesH7").style.display="none";
	}
	else if(anslen==33){
		document.getElementById("correctSentencesH").style.display="none";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("resultBtnHHide").style.display="block";
		document.getElementById("correctSentencesH2").style.display="none";
		document.getElementById("correctSentencesH3").style.display="none";
		document.getElementById("correctSentencesH4").style.display="block";
		document.getElementById("correctSentencesH5").style.display="none";
		document.getElementById("correctSentencesH6").style.display="none";
		document.getElementById("correctSentencesH7").style.display="none";
	}
	else if(anslen==13){
		document.getElementById("correctSentencesH").style.display="none";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("resultBtnHHide").style.display="block";
		document.getElementById("correctSentencesH2").style.display="none";
		document.getElementById("correctSentencesH3").style.display="none";
		document.getElementById("correctSentencesH4").style.display="none";
		document.getElementById("correctSentencesH5").style.display="block";
		document.getElementById("correctSentencesH6").style.display="none";
		document.getElementById("correctSentencesH7").style.display="none";
	}
	else if(anslen==20){
		document.getElementById("correctSentencesH").style.display="none";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("resultBtnHHide").style.display="block";
		document.getElementById("correctSentencesH2").style.display="none";
		document.getElementById("correctSentencesH3").style.display="none";
		document.getElementById("correctSentencesH4").style.display="none";
		document.getElementById("correctSentencesH5").style.display="none";
		document.getElementById("correctSentencesH6").style.display="block";
		document.getElementById("correctSentencesH7").style.display="none";
	}
	else if(anslen==23){
		document.getElementById("correctSentencesH").style.display="none";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("resultBtnHHide").style.display="block";
		document.getElementById("correctSentencesH2").style.display="none";
		document.getElementById("correctSentencesH3").style.display="none";
		document.getElementById("correctSentencesH4").style.display="none";
		document.getElementById("correctSentencesH5").style.display="none";
		document.getElementById("correctSentencesH6").style.display="none";
		document.getElementById("correctSentencesH7").style.display="block";
	}

};


function getAnsHHide(){
	document.getElementById("correctSentencesH").style.display="none";
	document.getElementById("resultBtnH").style.display="block";
	document.getElementById("resultBtnHHide").style.display="none";
	document.getElementById("correctSentencesH2").style.display="none";
	document.getElementById("correctSentencesH3").style.display="none";
	document.getElementById("correctSentencesH4").style.display="none";
	document.getElementById("correctSentencesH5").style.display="none";
	document.getElementById("correctSentencesH6").style.display="none";
	document.getElementById("correctSentencesH7").style.display="none";

};



function checkAnsH(){
	var ans = document.getElementById("clickedWordsHindi").textContent;
	ans = ans.trim();
	console.log(ans.length);
	var ans1a = "बिल्लियों को मारकर कुत्ता सो गया";
	var ans1b = "मारकर बिल्लियों को कुत्ता सो गया";
	var ans1c = "बिल्लियों को मारकर सो गया कुत्ता";
	var ans1d = "मारकर बिल्लियों को सो गया कुत्ता";
	var ans1e = "कुत्ता सो गया बिल्लियों को मारकर";
	var ans1f = "कुत्ता सो गया मारकर बिल्लियों को";
	var ans1g = "सो गया कुत्ता बिल्लियों को मारकर";
	var ans1h = "सो गया कुत्ता मारकर बिल्लियों को";

	var ans2a = "राम और शयाम बाजार गयें";
	var ans2b = "राम और शयाम गयें बाजार";
	var ans2c = "बाजार गयें राम और शयाम";
	var ans2d = "गयें बाजार राम और शयाम";

	var ans3a = "राम सोया और शयाम भी";
	var ans3b = "शयाम सोया और राम भी";
	var ans3c = "सोया शयाम और राम भी";
	var ans3d = "सोया राम और शयाम भी";

	var ans4a = "मैंने उसे बताया कि राम सो रहा है";
	var ans4b = "मैंने उसे बताया कि सो रहा है राम";
	var ans4c = "उसे मैंने बताया कि राम सो रहा है";
	var ans4d = "उसे मैंने बताया कि सो रहा है राम";
	var ans4e = "मैंने बताया उसे कि राम सो रहा है";
	var ans4f = "मैंने बताया उसे कि सो रहा है राम";
	var ans4g = "उसे बताया मैंने कि राम सो रहा है";
	var ans4h = "उसे बताया मैंने कि सो रहा है राम";
	var ans4i = "बताया मैंने उसे कि राम सो रहा है";
	var ans4j = "बताया मैंने उसे कि सो रहा है राम";
	var ans4k = "बताया उसे मैंने कि राम सो रहा है";
	var ans4l = "बताया उसे मैंने कि सो रहा है राम";

	var ans5a = "राम खाकर सोया";
	var ans5b = "खाकर राम सोया";
	var ans5c = "राम सोया खाकर";
	var ans5d = "खाकर सोया राम";
	var ans5e = "सोया राम खाकर";
	var ans5f = "सोया खाकर राम";

	var ans6a = "एक लाल किताब वहाँ है";
	var ans6b = "एक लाल किताब है वहाँ";
	var ans6c = "वहाँ है एक लाल किताब";
	var ans6d = "है वहाँ एक लाल किताब";

	var ans7a = "एक बड़ी सी किताब वहाँ है";
	var ans7b = "एक बड़ी सी किताब है वहाँ";
	var ans7c = "बड़ी सी एक किताब वहाँ है";
	var ans7d = "बड़ी सी एक किताब है वहाँ";
	var ans7e = "वहाँ है एक बड़ी सी किताब";
	var ans7f = "वहाँ है बड़ी सी एक किताब";
	var ans7g = "है वहाँ एक बड़ी सी किताब";
	var ans7h = "है वहाँ बड़ी सी एक किताब";


	if (ans==ans1a || ans==ans1b || ans==ans1c ||ans==ans1d || ans==ans1e || ans==ans1f||ans==ans1g || ans==ans1h){
		document.getElementById("rightAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("wrongAnsH").style.display="none";
	}
	else if (ans==ans2a || ans==ans2b || ans==ans2c ||ans==ans2d){
		document.getElementById("rightAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("wrongAnsH").style.display="none";
	}
	else if (ans==ans3a || ans==ans3b || ans==ans3c ||ans==ans3d){
		document.getElementById("rightAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("wrongAnsH").style.display="none";
	}
	else if (ans==ans4a || ans==ans4b || ans==ans4c ||ans==ans4d || ans==ans4e || ans==ans4f||ans==ans4g || ans==ans4h || ans==ans4i || ans==ans4j || ans==ans4k || ans==ans4l){
		document.getElementById("rightAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("wrongAnsH").style.display="none";
	}
	else if (ans==ans5a || ans==ans5b || ans==ans5c ||ans==ans5d || ans==ans5e || ans==ans5f){
		document.getElementById("rightAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("wrongAnsH").style.display="none";
	}
	else if (ans==ans6a || ans==ans6b || ans==ans6c ||ans==ans6d){
		document.getElementById("rightAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("wrongAnsH").style.display="none";
	}
	else if (ans==ans7a || ans==ans7b || ans==ans7c ||ans==ans7d || ans==ans7e || ans==ans7f||ans==ans7g || ans==ans7h){
		document.getElementById("rightAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="none";
		document.getElementById("wrongAnsH").style.display="none";
	}

	else{
		document.getElementById("wrongAnsH").style.display="block";
		document.getElementById("resultBtnH").style.display="block";
	}
};

function reformFnH(){
	window.open("hindi_htm.html","_self");
	//document.getElementById("hindiSelected").reset();
};


//----#########-------------2nd sentence------------

function a2Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " राम";
	var x = document.getElementById("a2Hide");
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
	if (anslen==22){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function b2Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " गयें";
	var x = document.getElementById("b2Hide");
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
	if (anslen==22){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function c2Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " शयाम";
	var x = document.getElementById("c2Hide");
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
	if (anslen==22){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function d2Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " बाजार";
	var x = document.getElementById("d2Hide");
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
	if (anslen==22){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function e2Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " और";
	var x = document.getElementById("e2Hide");
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
	if (anslen==22){
		document.getElementById("correctBtnH").style.display="block";
	}
};

//--------####----------------3rd sentense----------------

function a3Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " राम";
	var x = document.getElementById("a3Hide");
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
	if (anslen==19){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function b3Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " भी";
	var x = document.getElementById("b3Hide");
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
	if (anslen==19){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function c3Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " और";
	var x = document.getElementById("c3Hide");
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
	if (anslen==19){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function d3Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " शयाम";
	var x = document.getElementById("d3Hide");
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
	if (anslen==19){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function e3Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " सोया";
	var x = document.getElementById("e3Hide");
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
	if (anslen==19){
		document.getElementById("correctBtnH").style.display="block";
	}
};

//----------#########----------4th sentence-------------

function a4Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " रहा";
	var x = document.getElementById("a4Hide");
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
	if (anslen==33){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function b4Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " सो";
	var x = document.getElementById("b4Hide");
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
	if (anslen==33){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function c4Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " है";
	var x = document.getElementById("c4Hide");
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
	if (anslen==33){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function d4Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " मैंने";
	var x = document.getElementById("d4Hide");
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
	if (anslen==33){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function e4Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " बताया";
	var x = document.getElementById("e4Hide");
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
	if (anslen==33){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function f4Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " उससे";
	var x = document.getElementById("f4Hide");
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
	if (anslen==33){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function g4Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " कि";
	var x = document.getElementById("g4Hide");
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
	if (anslen==33){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function h4Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " राम";
	var x = document.getElementById("h4Hide");
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
	if (anslen==33){
		document.getElementById("correctBtnH").style.display="block";
	}
};

//----###--------------------5th sentence---------------

function a5Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " राम";
	var x = document.getElementById("a5Hide");
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
	if (anslen==13){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function b5Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " सोया";
	var x = document.getElementById("b5Hide");
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
	if (anslen==13){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function c5Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " खाकर";
	var x = document.getElementById("c5Hide");
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
	if (anslen==13){
		document.getElementById("correctBtnH").style.display="block";
	}
};

//-------#######----------------6th sentence---------------

function a6Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " एक";
	var x = document.getElementById("a6Hide");
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
	if (anslen==20){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function b6Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " है";
	var x = document.getElementById("b6Hide");
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
	if (anslen==20){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function c6Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " लाल";
	var x = document.getElementById("c6Hide");
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
	if (anslen==20){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function d6Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " वहाँ";
	var x = document.getElementById("d6Hide");
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
	if (anslen==20){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function e6Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " किताब";
	var x = document.getElementById("e6Hide");
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
	if (anslen==20){
		document.getElementById("correctBtnH").style.display="block";
	}
};

//-----######------------7th sentence-----------

function f7Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " है";
	var x = document.getElementById("f7Hide");
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
	if (anslen==23){
		document.getElementById("correctBtnH").style.display="block";
	}
};


function a7Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " बड़ी";
	var x = document.getElementById("a7Hide");
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
	if (anslen==23){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function b7Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " एक";
	var x = document.getElementById("b7Hide");
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
	if (anslen==23){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function c7Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " किताब";
	var x = document.getElementById("c7Hide");
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
	if (anslen==23){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function d7Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " वहाँ";
	var x = document.getElementById("d7Hide");
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
	if (anslen==23){
		document.getElementById("correctBtnH").style.display="block";
	}
};

function e7Btn(){
	document.getElementById("clickedWordsHindi").innerHTML += " सी";
	var x = document.getElementById("e7Hide");
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
	if (anslen==23){
		document.getElementById("correctBtnH").style.display="block";
	}
};




