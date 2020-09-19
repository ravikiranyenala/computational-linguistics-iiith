
function showDiv(select){
	var selectedCrps = select.value;
	console.log(selectedCrps);
	if(selectedCrps=="selectNone"){
		window.open("unSelect_TT.html","_self");
	}
	else if(selectedCrps=="corpus_1"){
		window.open("corpus_1.html","_self");
	}
	else if(selectedCrps=="corpus_2"){
		window.open("corpus_2.html","_self");
	}
	else if(selectedCrps=="corpus_3"){
		window.open("corpus_3.html","_self");
	}
};

function tokenCntCheck1(){
	var line = document.getElementById("passage_1").textContent;
	line = line.trim().toLowerCase();
	line =  line.replace(/[^a-zA-Z 0-9]+/g,'');
	line = line.split(" ");
	var line_length = line.length;
	var tokens_count = 0;
	var type_count = 0;
	var words = [];
	var tokens = 0;
	for (var i=0; i<line_length; i++ ){
		tokens = line[i];
		words.push(tokens);
		tokens_count += 1;
		//console.log(tokens);
	}
	console.log(tokens_count);
	
	var uniqueArray = [];
    for(var j=0; j < words.length; j++){

	    if(uniqueArray.indexOf(words[j]) === -1) {

	        uniqueArray.push(words[j]);
	        type_count += 1;
	        console.log(words[j])

	    }
	}
	console.log(type_count);
	var tokenEntrdVal = document.getElementById("tokensData").value;
	var typesEntrdVal = document.getElementById("typesData").value;
	if (tokenEntrdVal==tokens_count && typesEntrdVal==type_count){
		document.getElementById("tokensData").style.backgroundColor="green";
		document.getElementById("typesData").style.backgroundColor="green";
		document.getElementById("rightAnsToken").style.display="block";
		document.getElementById("wrongAnsToken").style.display="none";
		document.getElementById("continueBtn").style.display="block"

	}
	else if(tokenEntrdVal!=tokens_count && typesEntrdVal!=type_count){
		document.getElementById("tokensData").style.backgroundColor="red";
		document.getElementById("typesData").style.backgroundColor="red";
		document.getElementById("rightAnsToken").style.display="none";
		document.getElementById("wrongAnsToken").style.display="block";

	}
	else if(tokenEntrdVal==tokens_count)	{
		document.getElementById("tokensData").style.backgroundColor="green";
		document.getElementById("typesData").style.backgroundColor="red";
		document.getElementById("rightAnsToken").style.display="none";
		document.getElementById("wrongAnsToken").style.display="block";
	}
	else if(typesEntrdVal==type_count){
		document.getElementById("typesData").style.backgroundColor="green";
		document.getElementById("tokensData").style.backgroundColor="red";
		document.getElementById("rightAnsToken").style.display="none";
		document.getElementById("wrongAnsToken").style.display="block";
	}



};

function newTypeEnable(){
	document.getElementById("rightAnsToken").style.display="none";
	document.getElementById("wrongAnsToken").style.display="none";
	document.getElementById("continueBtn").style.display="none";
	document.getElementById("tokenSubmitBtn").style.display="none";
	document.getElementById("newType").style.display="block";
};

function newTypeCheck(){
	var checkEntrdVal = document.getElementById("newTypeData").value;
	if (checkEntrdVal==73){
		document.getElementById("newTypeData").style.backgroundColor="green";
		document.getElementById("rightAnsNewType").style.display="block";
		document.getElementById("wrongAnsNewType").style.display="none";
	}
	else{
		document.getElementById("newTypeData").style.backgroundColor="red";
		document.getElementById("rightAnsNewType").style.display="none";
		document.getElementById("wrongAnsNewType").style.display="block";	
	}
};

//--#####------------------corpus-1 cmpltd------------
//-----####---------------corpus-2 start----------

function tokenCntCheck2(){
	var line = document.getElementById("passage_2").textContent;
	console.log(line);
	line = line.trim().toLowerCase();
	line =  line.replace(/[^a-zA-Z 0-9]+/g,'');
	line = line.split(" ");
	var line_length = line.length;
	var tokens_count = 0;
	var type_count = 0;
	var words = [];
	var tokens = 0;
	for (var i=0; i<line_length; i++ ){
		tokens = line[i];
		words.push(tokens);
		tokens_count += 1;
		//console.log(tokens);
	}
	console.log("tokens:"+tokens_count);
	
	var uniqueArray = [];
    for(var j=0; j < words.length; j++){

	    if(uniqueArray.indexOf(words[j]) === -1) {

	        uniqueArray.push(words[j]);
	        type_count += 1;
	        console.log(words[j])

	    }
	}
	console.log("type : "+type_count);
	var tokenEntrdVal = document.getElementById("tokensData2").value;
	var typesEntrdVal = document.getElementById("typesData2").value;
	if (tokenEntrdVal==tokens_count && typesEntrdVal==type_count){
		document.getElementById("tokensData2").style.backgroundColor="green";
		document.getElementById("typesData2").style.backgroundColor="green";
		document.getElementById("rightAnsToken2").style.display="block";
		document.getElementById("wrongAnsToken2").style.display="none";
		document.getElementById("continueBtn2").style.display="block"

	}
	else if(tokenEntrdVal!=tokens_count && typesEntrdVal!=type_count){
		document.getElementById("tokensData2").style.backgroundColor="red";
		document.getElementById("typesData2").style.backgroundColor="red";
		document.getElementById("rightAnsToken2").style.display="none";
		document.getElementById("wrongAnsToken2").style.display="block";

	}
	else if(tokenEntrdVal==tokens_count)	{
		document.getElementById("tokensData2").style.backgroundColor="green";
		document.getElementById("typesData2").style.backgroundColor="red";
		document.getElementById("rightAnsToken2").style.display="none";
		document.getElementById("wrongAnsToken2").style.display="block";
	}
	else if(typesEntrdVal==type_count){
		document.getElementById("typesData2").style.backgroundColor="green";
		document.getElementById("tokensData2").style.backgroundColor="red";
		document.getElementById("rightAnsToken2").style.display="none";
		document.getElementById("wrongAnsToken2").style.display="block";
	}
};

function newTypeEnable2(){
	document.getElementById("rightAnsToken2").style.display="none";
	document.getElementById("wrongAnsToken2").style.display="none";
	document.getElementById("continueBtn2").style.display="none";
	document.getElementById("tokenSubmitBtn2").style.display="none";
	document.getElementById("newType2").style.display="block";
};

function newTypeCheck2(){
	var checkEntrdVal = document.getElementById("newTypeData2").value;


	//var natural = require("natural");
	//console.log(natural.PorterStemmer.stem("running"));
	var stemmer = require('stemmer');
	//var stemmer = new Snowball('English');
	//stemmer.setCurrent('abbreviations');     
	//stemmer.stem();
	console.log(stemmer("consideration"));      


	if (checkEntrdVal==73){
		document.getElementById("newTypeData2").style.backgroundColor="green";
		document.getElementById("rightAnsNewType2").style.display="block";
		document.getElementById("wrongAnsNewType2").style.display="none";
	}
	else{
		document.getElementById("newTypeData2").style.backgroundColor="red";
		document.getElementById("rightAnsNewType2").style.display="none";
		document.getElementById("wrongAnsNewType2").style.display="block";	
	}
};

//--####--------------------corpus-3----------------------------------------


function tokenCntCheck3(){
	var line = document.getElementById("passage_3").textContent;
	console.log(line);
	line = line.trim().toLowerCase();
	line =  line.replace(/[^a-zA-Z 0-9]+/g,'');
	line = line.split(" ");
	var line_length = line.length;
	var tokens_count = 0;
	var type_count = 0;
	var words = [];
	var tokens = 0;
	for (var i=0; i<line_length; i++ ){
		tokens = line[i];
		words.push(tokens);
		tokens_count += 1;
		//console.log(tokens);
	}
	console.log("tokens:"+tokens_count);
	
	var uniqueArray = [];
    for(var j=0; j < words.length; j++){

	    if(uniqueArray.indexOf(words[j]) === -1) {

	        uniqueArray.push(words[j]);
	        type_count += 1;
	        console.log(words[j])

	    }
	}
	console.log("type : "+type_count);
	var tokenEntrdVal = document.getElementById("tokensData3").value;
	var typesEntrdVal = document.getElementById("typesData3").value;
	if (tokenEntrdVal==tokens_count && typesEntrdVal==type_count){
		document.getElementById("tokensData3").style.backgroundColor="green";
		document.getElementById("typesData3").style.backgroundColor="green";
		document.getElementById("rightAnsToken3").style.display="block";
		document.getElementById("wrongAnsToken3").style.display="none";
		document.getElementById("continueBtn3").style.display="block"

	}
	else if(tokenEntrdVal!=tokens_count && typesEntrdVal!=type_count){
		document.getElementById("tokensData3").style.backgroundColor="red";
		document.getElementById("typesData3").style.backgroundColor="red";
		document.getElementById("rightAnsToken3").style.display="none";
		document.getElementById("wrongAnsToken3").style.display="block";

	}
	else if(tokenEntrdVal==tokens_count)	{
		document.getElementById("tokensData3").style.backgroundColor="green";
		document.getElementById("typesData3").style.backgroundColor="red";
		document.getElementById("rightAnsToken3").style.display="none";
		document.getElementById("wrongAnsToken3").style.display="block";
	}
	else if(typesEntrdVal==type_count){
		document.getElementById("typesData3").style.backgroundColor="green";
		document.getElementById("tokensData3").style.backgroundColor="red";
		document.getElementById("rightAnsToken3").style.display="none";
		document.getElementById("wrongAnsToken3").style.display="block";
	}
};

function newTypeEnable3(){
	document.getElementById("rightAnsToken3").style.display="none";
	document.getElementById("wrongAnsToken3").style.display="none";
	document.getElementById("continueBtn3").style.display="none";
	document.getElementById("tokenSubmitBtn3").style.display="none";
	document.getElementById("newType3").style.display="block";
};

function newTypeCheck3(){
	var checkEntrdVal = document.getElementById("newTypeData3").value;
	if (checkEntrdVal==73){
		document.getElementById("newTypeData3").style.backgroundColor="green";
		document.getElementById("rightAnsNewType3").style.display="block";
		document.getElementById("wrongAnsNewType3").style.display="none";
	}
	else{
		document.getElementById("newTypeData3").style.backgroundColor="red";
		document.getElementById("rightAnsNewType3").style.display="none";
		document.getElementById("wrongAnsNewType3").style.display="block";	
	}
};
