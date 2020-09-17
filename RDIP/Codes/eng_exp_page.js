function anBtn(){
	
	document.getElementById("clickedWords").innerHTML += " an";
	var x = document.getElementById("anHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtn");
	y.style.display="block";
	var anslen = document.getElementById("clickedWords").textContent;
	anslen = anslen.trim().length;
	//console.log(anslen);
	if (anslen==34){
		document.getElementById("correctBtn").style.display="block";
	}
};

function beforeBtn(){
	document.getElementById("clickedWords").innerHTML += " before";
	var x = document.getElementById("beforeHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtn");
	y.style.display="block";
	var anslen = document.getElementById("clickedWords").textContent;
	anslen = anslen.trim().length;
	//console.log(anslen);
	if (anslen==34){
		document.getElementById("correctBtn").style.display="block";
	}

};

function afternoonBtn(){
	document.getElementById("clickedWords").innerHTML += " afternoon";
	var x = document.getElementById("afternoonHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtn");
	y.style.display="block";
	var anslen = document.getElementById("clickedWords").textContent;
	anslen = anslen.trim().length;
	//console.log(anslen);
	if (anslen==34){
		document.getElementById("correctBtn").style.display="block";
	}

};

function ateBtn(){
	document.getElementById("clickedWords").innerHTML += " ate";
	var x = document.getElementById("ateHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtn");
	y.style.display="block";
	var anslen = document.getElementById("clickedWords").textContent;
	anslen = anslen.trim().length;
	//console.log(anslen);
	if (anslen==34){
		document.getElementById("correctBtn").style.display="block";
	}

};

function appleBtn(){
	document.getElementById("clickedWords").innerHTML += " apple";
	var x = document.getElementById("appleHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtn");
	y.style.display="block";
	var anslen = document.getElementById("clickedWords").textContent;
	anslen = anslen.trim().length;
	//console.log(anslen);
	if (anslen==34){
		document.getElementById("correctBtn").style.display="block";
	}

};

function johnBtn(){
	document.getElementById("clickedWords").innerHTML += " John";
	var x = document.getElementById("johnHide");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } 
	else {
	    x.style.display = "none";
	  }
	var y = document.getElementById("reformBtn");
	y.style.display="block";
	var anslen = document.getElementById("clickedWords").textContent;
	anslen = anslen.trim().length;
	//console.log(anslen);
	if (anslen==34){
		document.getElementById("correctBtn").style.display="block";
	}

};

function getAns(){
	document.getElementById("correctSentences").style.display="block";
	document.getElementById("resultBtn").style.display="none";
	document.getElementById("resultBtnHide").style.display="block";
};

function getAnsHide(){
	document.getElementById("correctSentences").style.display="none";
	document.getElementById("resultBtn").style.display="block";
	document.getElementById("resultBtnHide").style.display="none";

};

function checkAns(){
	var ans = document.getElementById("clickedWords").textContent;
	ans = ans.trim();
	console.log(ans.length);
	var ans1 = "John ate an apple before afternoon";
	var ans2 = "before afternoon John ate an apple";
	var ans3 = "John before afternoon ate an apple";
	if (ans==ans1 || ans==ans2 || ans==ans3){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else{
		document.getElementById("wrongAns").style.display="block";
		document.getElementById("resultBtn").style.display="block";
	}
};


function showDiv(select){
	var x = select.value;
    console.log(x);
    if (x == "selectNone"){
    	document.getElementById('selectLanguage').style.display = "block";
    	document.getElementById('engSelected').style.display = "none";
    	document.getElementById('hindiSelected').style.display = "none";
    	}
    else if(x=="english_task"){
    	document.getElementById('engSelected').style.display = "block";
    	document.getElementById('selectLanguage').style.display = "none";
    	document.getElementById('hindiSelected').style.display = "none";
    }
    else if(x=="hindi_task"){
    	document.getElementById('hindiSelected').style.display = "block";
    	document.getElementById('selectLanguage').style.display = "none";
    	document.getElementById('engSelected').style.display = "none";  
    }

	//document.getElementById(divId).style.display = element.value == 1 ? 'block' : 'none';
};

function reformFn(){
	//document.getElementById("buttondiv1").style.display="block";
	//document.getElementById("engSelected").reset();
	//document.getElementById('buttondiv').empty();
	//document.getElementById('buttondiv').style.display = "none";
	//document.getElementById('clickedWords').innerHTML = "";

	//document.getElementById('buttondiv').style.display = "block";
	//document.getElementById('formedSentence').style.display = "block";

	//document.getElementById('engSelected').style.display = "none";
	//document.getElementById('selectLanguage').style.display = "none";
	//document.getElementById('hindiSelected').style.display = "none";
	//document.getElementById('engSelected').style.display = "block";
}