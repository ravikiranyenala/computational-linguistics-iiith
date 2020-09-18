//---------------1st button--------------
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
//------------1st-------------ans----------------

function getAns(){
	var anslen = document.getElementById("clickedWords").textContent;
	anslen = anslen.trim().length;
	if (anslen==34){
		document.getElementById("correctSentences").style.display="block";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="none";
		document.getElementById("correctSentences3").style.display="none";
		document.getElementById("correctSentences4").style.display="none";
		document.getElementById("correctSentences5").style.display="none";
		document.getElementById("correctSentences6").style.display="none";
		document.getElementById("correctSentences7").style.display="none";
		document.getElementById("correctSentences8").style.display="none";
		document.getElementById("correctSentences9").style.display="none";
		document.getElementById("correctSentences10").style.display="none";
	}
	else if(anslen==40){
		document.getElementById("correctSentences").style.display="none";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="block";
		document.getElementById("correctSentences3").style.display="none";
		document.getElementById("correctSentences4").style.display="none";
		document.getElementById("correctSentences5").style.display="none";
		document.getElementById("correctSentences6").style.display="none";
		document.getElementById("correctSentences7").style.display="none";
		document.getElementById("correctSentences8").style.display="none";
		document.getElementById("correctSentences9").style.display="none";
		document.getElementById("correctSentences10").style.display="none";
	}
	else if(anslen==29){
		document.getElementById("correctSentences").style.display="none";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="none";
		document.getElementById("correctSentences3").style.display="block";
		document.getElementById("correctSentences4").style.display="none";
		document.getElementById("correctSentences5").style.display="none";
		document.getElementById("correctSentences6").style.display="none";
		document.getElementById("correctSentences7").style.display="none";
		document.getElementById("correctSentences8").style.display="none";
		document.getElementById("correctSentences9").style.display="none";
		document.getElementById("correctSentences10").style.display="none";
	}
	else if(anslen==32){
		document.getElementById("correctSentences").style.display="none";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="none";
		document.getElementById("correctSentences3").style.display="none";
		document.getElementById("correctSentences4").style.display="block";
		document.getElementById("correctSentences5").style.display="none";
		document.getElementById("correctSentences6").style.display="none";
		document.getElementById("correctSentences7").style.display="none";
		document.getElementById("correctSentences8").style.display="none";
		document.getElementById("correctSentences9").style.display="none";
		document.getElementById("correctSentences10").style.display="none";
	}
	else if(anslen==19){
		document.getElementById("correctSentences").style.display="none";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="none";
		document.getElementById("correctSentences3").style.display="none";
		document.getElementById("correctSentences4").style.display="none";
		document.getElementById("correctSentences5").style.display="block";
		document.getElementById("correctSentences6").style.display="none";
		document.getElementById("correctSentences7").style.display="none";
		document.getElementById("correctSentences8").style.display="none";
		document.getElementById("correctSentences9").style.display="none";
		document.getElementById("correctSentences10").style.display="none";
	}
	else if(anslen==46){
		document.getElementById("correctSentences").style.display="none";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="none";
		document.getElementById("correctSentences3").style.display="none";
		document.getElementById("correctSentences4").style.display="none";
		document.getElementById("correctSentences5").style.display="none";
		document.getElementById("correctSentences6").style.display="block";
		document.getElementById("correctSentences7").style.display="none";
		document.getElementById("correctSentences8").style.display="none";
		document.getElementById("correctSentences9").style.display="none";
		document.getElementById("correctSentences10").style.display="none";
	}
	else if(anslen==36){
		document.getElementById("correctSentences").style.display="none";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="none";
		document.getElementById("correctSentences3").style.display="none";
		document.getElementById("correctSentences4").style.display="none";
		document.getElementById("correctSentences5").style.display="none";
		document.getElementById("correctSentences6").style.display="none";
		document.getElementById("correctSentences7").style.display="block";
		document.getElementById("correctSentences8").style.display="none";
		document.getElementById("correctSentences9").style.display="none";
		document.getElementById("correctSentences10").style.display="none";
	}
	else if(anslen==28){
		document.getElementById("correctSentences").style.display="none";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="none";
		document.getElementById("correctSentences3").style.display="none";
		document.getElementById("correctSentences4").style.display="none";
		document.getElementById("correctSentences5").style.display="none";
		document.getElementById("correctSentences6").style.display="none";
		document.getElementById("correctSentences7").style.display="none";
		document.getElementById("correctSentences8").style.display="block";
		document.getElementById("correctSentences9").style.display="none";
		document.getElementById("correctSentences10").style.display="none";
	}
	else if(anslen==57){
		document.getElementById("correctSentences").style.display="none";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="none";
		document.getElementById("correctSentences3").style.display="none";
		document.getElementById("correctSentences4").style.display="none";
		document.getElementById("correctSentences5").style.display="none";
		document.getElementById("correctSentences6").style.display="none";
		document.getElementById("correctSentences7").style.display="none";
		document.getElementById("correctSentences8").style.display="none";
		document.getElementById("correctSentences9").style.display="block";
		document.getElementById("correctSentences10").style.display="none";
	}
	else if(anslen==41){
		document.getElementById("correctSentences").style.display="none";
		document.getElementById("resultBtn").style.display="none";
		document.getElementById("resultBtnHide").style.display="block";
		document.getElementById("correctSentences2").style.display="none";
		document.getElementById("correctSentences3").style.display="none";
		document.getElementById("correctSentences4").style.display="none";
		document.getElementById("correctSentences5").style.display="none";
		document.getElementById("correctSentences6").style.display="none";
		document.getElementById("correctSentences7").style.display="none";
		document.getElementById("correctSentences8").style.display="none";
		document.getElementById("correctSentences9").style.display="none";
		document.getElementById("correctSentences10").style.display="block";
	}


};

function getAnsHide(){
	document.getElementById("correctSentences").style.display="none";
	document.getElementById("resultBtn").style.display="block";
	document.getElementById("resultBtnHide").style.display="none";
	document.getElementById("correctSentences2").style.display="none";
	document.getElementById("correctSentences3").style.display="none";
	document.getElementById("correctSentences4").style.display="none";
	document.getElementById("correctSentences5").style.display="none";
	document.getElementById("correctSentences6").style.display="none";
	document.getElementById("correctSentences7").style.display="none";
	document.getElementById("correctSentences8").style.display="none";
	document.getElementById("correctSentences9").style.display="none";
	document.getElementById("correctSentences10").style.display="none";

};

function checkAns(){
	var ans = document.getElementById("clickedWords").textContent;
	ans = ans.trim();
	console.log(ans.length);
	var ans1a = "John ate an apple before afternoon";
	var ans1b = "before afternoon John ate an apple";
	var ans1c = "John before afternoon ate an apple";

	var ans2a = "some students like to study in the night";
    var ans2b = "at night some students like to study";

	var ans3a = "John and Merry went to church";
    var ans3b = "Merry and John went to church";

    var ans4a = "John went to church after eating";	
    var ans4b = "after eating John went to church";
    var ans4c = "John after eating went to church";
 
	var ans5a = "did he go to market";
    var ans5b = "he did go to market";
 
	var ans6a = "the woman who called my sister sells cosmetics";
    var ans6b = "the woman who sells cosmetics called my sister";
    var ans6c = "my sister who sells cosmetics called the woman";
    var ans6d = "my sister who called the woman sells cosmetics";

	var ans7a = "John goes to the library and studies";
    var ans7b = "John studies and goes to the library";

	var ans8a = "John ate an apple so did she";
    var ans8b = "she ate an apple so did John";
 
	var ans9a = "the teacher returned the book after she noticed the error";
    var ans9b = "the teacher noticed the error after she returned the book";
    var ans9c = "after the teacher returned the book she noticed the error";
    var ans9d = "after the teacher noticed the error she returned the book";
    var ans9e = "she returned the book after the teacher noticed the error";
    var ans9f = "she noticed the error after the teacher returned the book";
    var ans9g =  "after she returned the book the teacher noticed the error";
    var ans9h = "after she noticed the error the teacher returned the book";

	var ans10a = "I told her that I bought a book yesterday";
    var ans10b = "I told her yesterday that I bought a book";
    var ans10c = "yesterday I told her that I bought a book";
    var ans10d = "I bought a book that I told her yesterday";
    var ans10e = "I bought a book yesterday that I told her";	
    var ans10f = "yesterday I bought a book that I told her";



	if (ans==ans1a || ans==ans1b || ans==ans1c){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else if(ans==ans2a || ans==ans2b){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else if(ans==ans3a || ans==ans3b){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else if(ans==ans4a || ans==ans4b || ans==ans4c){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else if(ans==ans5a || ans==ans5b){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else if(ans==ans6a || ans==ans6b || ans==ans6c || ans==ans6d){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else if(ans==ans7a || ans==ans7b){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else if(ans==ans8a || ans==ans8b){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else if(ans==ans9a || ans==ans9b || ans==ans9c || ans==ans9d || ans==ans9e || ans==ans9f || ans==ans9g || ans==ans9h){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else if(ans==ans10a || ans==ans10b || ans==ans10c || ans==ans10d || ans==ans10e || ans==ans10f){
		document.getElementById("rightAns").style.display="block";
		document.getElementById("resultBtn").style.display="none";
	}
	else{
		document.getElementById("wrongAns").style.display="block";
		document.getElementById("resultBtn").style.display="block";
	}
	
};
//--------------select language function-----------
function showDiv(select){
	var x = select.value;
    console.log(x);
    if (x == "selectNone"){
    	window.open("unSelect.html","_self");
    	//document.getElementById('selectLanguage').style.display = "block";
    	//document.getElementById('engSelected').style.display = "none";
    	//document.getElementById('hindiSelected').style.display = "none";
    	}
    else if(x=="english_task"){
    	window.open("english_htm.html","_self");
    	
    	}
    else if(x=="hindi_task"){
    	window.open("hindi_htm.html","_self");
    	//document.getElementById('hindiSelected').style.display = "block";
    	//document.getElementById('selectLanguage').style.display = "none";
    	//document.getElementById('engSelected').style.display = "none";  
    }

	//document.getElementById(divId).style.display = element.value == 1 ? 'block' : 'none';
};

//----------------reform fn-----------
function reformFn(){
	window.open("english_htm.html","_self");
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

//---------------------2nd sentence--------------
function someBtn2(){	
	document.getElementById("clickedWords").innerHTML += " some";
	var x = document.getElementById("someHide2");
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
	if (anslen==40){
		document.getElementById("correctBtn").style.display="block";
	}
};

function likeBtn2(){	
	document.getElementById("clickedWords").innerHTML += " like";
	var x = document.getElementById("likeHide2");
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
	if (anslen==40){
		document.getElementById("correctBtn").style.display="block";
	}
};

function studentsBtn2(){	
	document.getElementById("clickedWords").innerHTML += " students";
	var x = document.getElementById("studentsHide2");
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
	if (anslen==40){
		document.getElementById("correctBtn").style.display="block";
	}
};

function studyBtn2(){	
	document.getElementById("clickedWords").innerHTML += " study";
	var x = document.getElementById("studyHide2");
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
	if (anslen==40){
		document.getElementById("correctBtn").style.display="block";
	}
};

function toBtn2(){	
	document.getElementById("clickedWords").innerHTML += " to";
	var x = document.getElementById("toHide2");
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
	if (anslen==40){
		document.getElementById("correctBtn").style.display="block";
	}
};

function theBtn2(){	
	document.getElementById("clickedWords").innerHTML += " the";
	var x = document.getElementById("theHide2");
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
	if (anslen==40){
		document.getElementById("correctBtn").style.display="block";
	}
};

function nightBtn2(){	
	document.getElementById("clickedWords").innerHTML += " night";
	var x = document.getElementById("nightHide2");
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
	if (anslen==40){
		document.getElementById("correctBtn").style.display="block";
	}
};

function inBtn2(){	
	document.getElementById("clickedWords").innerHTML += " in";
	var x = document.getElementById("inHide2");
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
	if (anslen==40){
		document.getElementById("correctBtn").style.display="block";
	}
};

//-------------------3rd sentence--------------------
function andBtn3(){	
	document.getElementById("clickedWords").innerHTML += " and";
	var x = document.getElementById("andHide3");
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
	if (anslen==29){
		document.getElementById("correctBtn").style.display="block";
	}
};

function churchBtn3(){	
	document.getElementById("clickedWords").innerHTML += " church";
	var x = document.getElementById("churchHide3");
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
	if (anslen==29){
		document.getElementById("correctBtn").style.display="block";
	}
};

function johnBtn3(){	
	document.getElementById("clickedWords").innerHTML += " John";
	var x = document.getElementById("johnHide3");
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
	if (anslen==29){
		document.getElementById("correctBtn").style.display="block";
	}
};

function wentBtn3(){	
	document.getElementById("clickedWords").innerHTML += " went";
	var x = document.getElementById("wentHide3");
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
	if (anslen==29){
		document.getElementById("correctBtn").style.display="block";
	}
};

function maryBtn3(){	
	document.getElementById("clickedWords").innerHTML += " Merry";
	var x = document.getElementById("maryHide3");
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
	if (anslen==29){
		document.getElementById("correctBtn").style.display="block";
	}
};

function toBtn3(){	
	document.getElementById("clickedWords").innerHTML += " to";
	var x = document.getElementById("toHide3");
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
	if (anslen==29){
		document.getElementById("correctBtn").style.display="block";
	}
};

//--------------------4th sentence------------------
function johnBtn4(){	
	document.getElementById("clickedWords").innerHTML += " John";
	var x = document.getElementById("johnHide4");
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
	if (anslen==32){
		document.getElementById("correctBtn").style.display="block";
	}
};

function churchBtn4(){	
	document.getElementById("clickedWords").innerHTML += " church";
	var x = document.getElementById("churchHide4");
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
	if (anslen==32){
		document.getElementById("correctBtn").style.display="block";
	}
};

function eatingBtn4(){	
	document.getElementById("clickedWords").innerHTML += " eating";
	var x = document.getElementById("eatingHide4");
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
	if (anslen==32){
		document.getElementById("correctBtn").style.display="block";
	}
};

function wentBtn4(){	
	document.getElementById("clickedWords").innerHTML += " went";
	var x = document.getElementById("wentHide4");
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
	if (anslen==32){
		document.getElementById("correctBtn").style.display="block";
	}
};

function afterBtn4(){	
	document.getElementById("clickedWords").innerHTML += " after";
	var x = document.getElementById("afterHide4");
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
	if (anslen==32){
		document.getElementById("correctBtn").style.display="block";
	}
};

function toBtn4(){	
	document.getElementById("clickedWords").innerHTML += " to";
	var x = document.getElementById("toHide4");
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
	if (anslen==32){
		document.getElementById("correctBtn").style.display="block";
	}
};

//-------------------------5th sentence-----------------

function goBtn5(){	
	document.getElementById("clickedWords").innerHTML += " go";
	var x = document.getElementById("goHide5");
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
	if (anslen==19){
		document.getElementById("correctBtn").style.display="block";
	}
};

function toBtn5(){	
	document.getElementById("clickedWords").innerHTML += " to";
	var x = document.getElementById("toHide5");
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
	if (anslen==19){
		document.getElementById("correctBtn").style.display="block";
	}
};

function didBtn5(){	
	document.getElementById("clickedWords").innerHTML += " did";
	var x = document.getElementById("didHide5");
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
	if (anslen==19){
		document.getElementById("correctBtn").style.display="block";
	}
};

function marketBtn5(){	
	document.getElementById("clickedWords").innerHTML += " market";
	var x = document.getElementById("marketHide5");
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
	if (anslen==19){
		document.getElementById("correctBtn").style.display="block";
	}
};

function heBtn5(){	
	document.getElementById("clickedWords").innerHTML += " he";
	var x = document.getElementById("heHide5");
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
	if (anslen==19){
		document.getElementById("correctBtn").style.display="block";
	}
};

//------------------6th sentence----------------

function theBtn6(){	
	document.getElementById("clickedWords").innerHTML += " the";
	var x = document.getElementById("theHide6");
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
	if (anslen==46){
		document.getElementById("correctBtn").style.display="block";
	}
};

function cosmeticsBtn6(){	
	document.getElementById("clickedWords").innerHTML += " cosmetics";
	var x = document.getElementById("cosmeticsHide6");
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
	if (anslen==46){
		document.getElementById("correctBtn").style.display="block";
	}
};

function womanBtn6(){	
	document.getElementById("clickedWords").innerHTML += " woman";
	var x = document.getElementById("womanHide6");
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
	if (anslen==46){
		document.getElementById("correctBtn").style.display="block";
	}
};

function sellsBtn6(){	
	document.getElementById("clickedWords").innerHTML += " sells";
	var x = document.getElementById("sellsHide6");
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
	if (anslen==46){
		document.getElementById("correctBtn").style.display="block";
	}
};

function whoBtn6(){	
	document.getElementById("clickedWords").innerHTML += " who";
	var x = document.getElementById("whoHide6");
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
	if (anslen==46){
		document.getElementById("correctBtn").style.display="block";
	}
};

function sisterBtn6(){	
	document.getElementById("clickedWords").innerHTML += " sister";
	var x = document.getElementById("sisterHide6");
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
	if (anslen==46){
		document.getElementById("correctBtn").style.display="block";
	}
};

function calledBtn6(){	
	document.getElementById("clickedWords").innerHTML += " called";
	var x = document.getElementById("calledHide6");
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
	if (anslen==46){
		document.getElementById("correctBtn").style.display="block";
	}
};

function myBtn6(){	
	document.getElementById("clickedWords").innerHTML += " my";
	var x = document.getElementById("myHide6");
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
	if (anslen==46){
		document.getElementById("correctBtn").style.display="block";
	}
};

//-------------7th sentence------------------

function johnBtn7(){	
	document.getElementById("clickedWords").innerHTML += " John";
	var x = document.getElementById("johnHide7");
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
	if (anslen==36){
		document.getElementById("correctBtn").style.display="block";
	}
};

function studiesBtn7(){	
	document.getElementById("clickedWords").innerHTML += " studies";
	var x = document.getElementById("studiesHide7");
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
	if (anslen==36){
		document.getElementById("correctBtn").style.display="block";
	}
};

function goesBtn7(){	
	document.getElementById("clickedWords").innerHTML += " goes";
	var x = document.getElementById("goesHide7");
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
	if (anslen==36){
		document.getElementById("correctBtn").style.display="block";
	}
};

function andBtn7(){	
	document.getElementById("clickedWords").innerHTML += " and";
	var x = document.getElementById("andHide7");
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
	if (anslen==36){
		document.getElementById("correctBtn").style.display="block";
	}
};

function toBtn7(){	
	document.getElementById("clickedWords").innerHTML += " to";
	var x = document.getElementById("toHide7");
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
	if (anslen==36){
		document.getElementById("correctBtn").style.display="block";
	}
};

function libraryBtn7(){	
	document.getElementById("clickedWords").innerHTML += " library";
	var x = document.getElementById("libraryHide7");
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
	if (anslen==36){
		document.getElementById("correctBtn").style.display="block";
	}
};

function theBtn7(){	
	document.getElementById("clickedWords").innerHTML += " the";
	var x = document.getElementById("theHide7");
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
	if (anslen==36){
		document.getElementById("correctBtn").style.display="block";
	}
};

//----------------------8th sentence----------------

function johnBtn8(){	
	document.getElementById("clickedWords").innerHTML += " John";
	var x = document.getElementById("johnHide8");
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
	if (anslen==28){
		document.getElementById("correctBtn").style.display="block";
	}
};

function sheBtn8(){	
	document.getElementById("clickedWords").innerHTML += " she";
	var x = document.getElementById("sheHide8");
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
	if (anslen==28){
		document.getElementById("correctBtn").style.display="block";
	}
};

function anBtn8(){	
	document.getElementById("clickedWords").innerHTML += " an";
	var x = document.getElementById("anHide8");
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
	if (anslen==28){
		document.getElementById("correctBtn").style.display="block";
	}
};

function soBtn8(){	
	document.getElementById("clickedWords").innerHTML += " so";
	var x = document.getElementById("soHide8");
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
	if (anslen==28){
		document.getElementById("correctBtn").style.display="block";
	}
};

function ateBtn8(){	
	document.getElementById("clickedWords").innerHTML += " ate";
	var x = document.getElementById("ateHide8");
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
	if (anslen==28){
		document.getElementById("correctBtn").style.display="block";
	}
};

function appleBtn8(){	
	document.getElementById("clickedWords").innerHTML += " apple";
	var x = document.getElementById("appleHide8");
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
	if (anslen==28){
		document.getElementById("correctBtn").style.display="block";
	}
};

function didBtn8(){	
	document.getElementById("clickedWords").innerHTML += " did";
	var x = document.getElementById("didHide8");
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
	if (anslen==28){
		document.getElementById("correctBtn").style.display="block";
	}
};

//----------------9th sentence---------------------

function theBtn9_1(){	
	document.getElementById("clickedWords").innerHTML += " the";
	var x = document.getElementById("theHide9_1");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

function errorBtn9(){	
	document.getElementById("clickedWords").innerHTML += " error";
	var x = document.getElementById("errorHide9");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

function returnedBtn9(){	
	document.getElementById("clickedWords").innerHTML += " returned";
	var x = document.getElementById("returnedHide9");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

function theBtn9_2(){	
	document.getElementById("clickedWords").innerHTML += " the";
	var x = document.getElementById("theHide9_2");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

function bookBtn9(){	
	document.getElementById("clickedWords").innerHTML += " book";
	var x = document.getElementById("bookHide9");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

function noticedBtn9(){	
	document.getElementById("clickedWords").innerHTML += " noticed";
	var x = document.getElementById("noticedHide9");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

function teacherBtn9(){	
	document.getElementById("clickedWords").innerHTML += " teacher";
	var x = document.getElementById("teacherHide9");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

function afterBtn9(){	
	document.getElementById("clickedWords").innerHTML += " after";
	var x = document.getElementById("afterHide9");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

function sheBtn9(){	
	document.getElementById("clickedWords").innerHTML += " she";
	var x = document.getElementById("sheHide9");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

function theBtn9_3(){	
	document.getElementById("clickedWords").innerHTML += " the";
	var x = document.getElementById("theHide9_3");
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
	console.log(anslen);
	if (anslen==57){
		document.getElementById("correctBtn").style.display="block";
	}
};

//---------------------10th sentence---------------------

function toldBtn10(){	
	document.getElementById("clickedWords").innerHTML += " told";
	var x = document.getElementById("toldHide10");
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
	if (anslen==41){
		document.getElementById("correctBtn").style.display="block";
	}
};

function iBtn10_1(){	
	document.getElementById("clickedWords").innerHTML += " I";
	var x = document.getElementById("iHide10_1");
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
	if (anslen==41){
		document.getElementById("correctBtn").style.display="block";
	}
};

function iBtn10_2(){	
	document.getElementById("clickedWords").innerHTML += " I";
	var x = document.getElementById("iHide10_2");
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
	if (anslen==41){
		document.getElementById("correctBtn").style.display="block";
	}
};

function herBtn10(){	
	document.getElementById("clickedWords").innerHTML += " her";
	var x = document.getElementById("herHide10");
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
	if (anslen==41){
		document.getElementById("correctBtn").style.display="block";
	}
};

function boughtBtn10(){	
	document.getElementById("clickedWords").innerHTML += " bought";
	var x = document.getElementById("boughtHide10");
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
	if (anslen==41){
		document.getElementById("correctBtn").style.display="block";
	}
};

function thatBtn10(){	
	document.getElementById("clickedWords").innerHTML += " that";
	var x = document.getElementById("thatHide10");
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
	if (anslen==41){
		document.getElementById("correctBtn").style.display="block";
	}
};

function aBtn10(){	
	document.getElementById("clickedWords").innerHTML += " a";
	var x = document.getElementById("aHide10");
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
	if (anslen==41){
		document.getElementById("correctBtn").style.display="block";
	}
};

function bookBtn10(){	
	document.getElementById("clickedWords").innerHTML += " book";
	var x = document.getElementById("bookHide10");
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
	if (anslen==41){
		document.getElementById("correctBtn").style.display="block";
	}
};

function yesterdayBtn10(){	
	document.getElementById("clickedWords").innerHTML += " yesterday";
	var x = document.getElementById("yesterdayHide10");
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
	if (anslen==41){
		document.getElementById("correctBtn").style.display="block";
	}
};//---------------------sentences completed-----------------