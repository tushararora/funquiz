var count=0;
var countcheck=0; 
//jQuery to determine flow control
$(document).ready(function(){
	$('#correct').hide();
	$('#select').hide();
	$("#questionslevel1").hide();
	$("#questionslevel2").hide();
	$("#questionslevel3").hide();
	$('#levels').hide();
	$('#instructions').hide();
	$('[data-high="level"]').hide();
	$("header").click(function()
	{
		homesweethome();
		$('.selectpage').hide();
		$("#questionslevel1").hide();
		$("#questionslevel2").hide();
		$("#questionslevel3").hide();
		$("#instructions").hide();
		$('[data-high="level"]').hide();
		count=0;
		countcheck=0;

	});


	$('#homepage section').click(function(){

		$('[data-role="page"]').hide();
	});

	$('[data-title="instructions"]').click(function(){

		$('#instructions').show();
	});
	$('[data-title="highscore"]').click(function(){

		$('[data-high="level"]').show();
	});
	$('#instructionclose').click(function(){

		$('#instructions').slideUp();
		homesweethome();
	});
	$("#high2").data("foo",0);
});
function homesweethome(){
	$('#homepage').slideDown();
}
//Function to be executed when Play button is clicked
function playclick(){
	var x=document.getElementById("select");
	x.innerHTML="Select Level";
	$('#select, #levels').slideDown();

}
//Function to redirect to the selected level
function levelclick(type)
{
	var y=document.getElementById("select");
	countcheck=0;
	count=0;
	if(type=="level1")
	{

		y.innerHTML="Level 1";
		$("#questionslevel1").show();
		$('.showlevel1').show();
		$(".finalpage1").hide();
		$('#nextlevel1').hide();
		
	}
	else if(type=="level2")
	{
		y.innerHTML="Level 2";
		$("#questionslevel2").show();
		$('.showlevel2').show();
		$(".finalpage1").hide();
		$('#nextlevel1').hide();
		$(".finalpage2").hide();
		$('#nextlevel2').hide();
		
	}
	else
	{
		y.innerHTML="Level 3";
		$('#questionslevel3').show();
		$('.showlevel3').show();
		$(".finalpage2").hide();
		$('#nextlevel2').hide();
		$(".finalpage3").hide();
		$('#nextlevel3').hide();
	}
	$('#levels').hide();
	var xxx1=document.getElementById('statementlevel1');
	xxx1.innerHTML="New Delhi is the Capital of India";
	var xxx2=document.getElementById('statementlevel2');
	xxx2.innerHTML="Geneva is the headquarters of World Trade Organization";
	var xxx3=document.getElementById('statementlevel3');
	xxx3.innerHTML="Won is the currency of North Korea";
	var x1=document.getElementById('score1');
	x1.innerHTML="0";
	var x2=document.getElementById('score2');
	x1.innerHTML="0";
	var x3=document.getElementById('score3');
	x1.innerHTML="0";
	countcheck=0;
}
//Level 1 Quiz
function level1click(type)
{
	var xx=document.getElementById('statementlevel1');
	if(countcheck==0)
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Grand Central Terminal, New York is the world's largest railway station";
	}
	else if(countcheck==1)
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Amazon is the longest river in the world";
	}
	else if(countcheck==2)
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			setTimeout(function(){alert("Wrong!"+"\n"+"Nile is the longest river in the world")},10);
			incorrect();
		}
		else{
			countcheck++;
		}
		xx.innerHTML="China is the world's largest country";
	}
	else if(countcheck==3)
	{
		
		if(type=='false'){
			correct(); 
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Russia is the world's largest country")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Football is the national game of United States";
	}
	else if(countcheck==4)
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Baseball is the national game of United States")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Asia is the world's largest continent";
	}
	else if(countcheck==5) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Pacific Ocean is the world's largest Ocean";
	}
	else if(countcheck==6) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Monaco is the world's smallest country";
	}
	else if(countcheck==7) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Vatican city is the world's smallest country")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Sahara desert is the world's largest desert";
	}
	else if(countcheck==8) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="BBC is an abbreviation for British Broadcasting Corporation";
	}
	else if(countcheck==9) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Valentine's day is celebrated on 14th february";
	}
	else
	{
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Level 1 Complete";
		var x1=document.getElementById('showscore1');
		x1.innerHTML="Your Score is "+count;
		$('.showlevel1').hide();
		$('.finalpage1').show();
		if(count>8)
		{
			$('#nextlevel1').show();
		}
	}

	var score=document.getElementById("score1");
	score.innerHTML=count;
	var value = $("#high2").data("foo");
	if(count>value){

 // Store
  localStorage.setItem("lastname", count);
  // Retrieve
  document.getElementById("high2").innerHTML=localStorage.getItem("lastname");
	}
	
}
//Function to be executed when Play again button is clicked
function playagain1()
{
	var xxx=document.getElementById('statementlevel1');
	xxx.innerHTML="New Delhi is the Capital of India";
	var x12=document.getElementById('score1');
	x12.innerHTML="0";
	countcheck=0;
	$('[data-role="page"]').slideDown();
	$('.finalpage1').hide();
	$('#nextlevel1').hide();
	$('#select').hide();
	count=0;
}

function level2click(type)
{
	var xx=document.getElementById('statementlevel2');
	if(countcheck==0)
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Human body is a good conductor of electricity";
	}
	else if(countcheck==1)
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="February 1st is celebrated as World Peace Day";
	}
	else if(countcheck==2)
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			setTimeout(function(){alert("Wrong!"+"\n"+"January 1st is celebrated as World Peace Day")},10);
			incorrect();
		}
		else{
			countcheck++;
		}
		xx.innerHTML="The first Olympiad was held in Greece in the year 766 BC";
	}
	else if(countcheck==3)
	{
		
		if(type=='false'){
			correct(); 
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"The first Olympiad was held in Greece in the year 776 BC")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="	The acid found in soil is Humic acid";
	}
	else if(countcheck==4)
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="The Nobel prize is awarded in 7 fields";
	}
	else if(countcheck==5) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"The Nobel prize is awarded in 6 fields")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Venus is the brighest planet as seen from the earth";
	}
	else if(countcheck==6) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Alcoholic drinks contain Methyl alcohol ";
	}
	else if(countcheck==7) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Alcoholic drinks contain Ethyl alcohol")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Steamboat was invented by James Watt";
	}
	else if(countcheck==8) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Steamboat was invented by Robert Fulton")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Cairo is the largest city in Africa";
	}
	else if(countcheck==9) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Thomas cup is associated with Tennis";
	}
	else if(countcheck==10) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Thomas cup is associated with Badminton")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="UNICEF was established in the year 1936";
	}
	else if(countcheck==11) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"UNICEF was established in the year 1946")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Bat is the only mammal that flies";
	}
	else if(countcheck==12) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Pride and Prejudice is written by Edward Gibbon";
	}
	else if(countcheck==13) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Pride and Prejudice is written by Jane Austen")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="The most ancient Veda is Atharva Veda";
	}
	else
	{
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Level 2 Complete";
		var x2=document.getElementById('showscore2');
		x2.innerHTML="Your Score is "+count;
		$('.showlevel2').hide();
		$('.finalpage2').show();
		if(count>10)
		{
			$('#nextlevel2').show();
		}
	}

	var score=document.getElementById("score2");
	score.innerHTML=count;
}
function playagain2()
{
	var xxx=document.getElementById('statementlevel2');
	xxx.innerHTML="Geneva is the headquarters of World Trade Organization";
	var x12=document.getElementById('score2');
	x12.innerHTML="0";
	countcheck=0;
	$('[data-role="page"]').slideDown();
	$('.finalpage2').hide();
	$('#nextlevel2').hide();
	$('#select').hide();
	count=0;
}
function level3click(type)
{
	var xx=document.getElementById('statementlevel3');
	if(countcheck==0)
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="The first batsman to score 10,000 runs in test cricket was Vivian Richards";
	}
	else if(countcheck==1)
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"The first batsman to score 10,000 runs in test cricket was Sunil Gavaskar")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Study of insects is called Entomology";
	}
	else if(countcheck==2)
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			setTimeout(function(){alert("Wrong!")},10);
			incorrect();
		}
		else{
			countcheck++;
		}
		xx.innerHTML="North Pole was explored by Amundsen";
	}
	else if(countcheck==3)
	{
		
		if(type=='false'){
			correct(); 
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"North Pole was explored by Robert Edwin Peary")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Deepest canyon in the world is The Grand Canyon(U.S.A.)";
	}
	else if(countcheck==4)
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Deepest Canyon in the world is Hell's Canyon (U.S.A.), 7900 ft.deep")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="The Congo river flows in Angola";
	}
	else if(countcheck==5) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="The Commonwealth is an association of 52 countries ";
	}
	else if(countcheck==6) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="It is widely believed that Ostrich buries its head in sand which is";
	}
	else if(countcheck==7) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Dr.Jonak Salk discovered the Polio Vaccine";
	}
	else if(countcheck==8) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Long sightedness is corrected by using Concave lens";
	}
	else if(countcheck==9) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Long sightedness is corrected by using Convex lens")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Storting is the parliament of Poland";
	}
	else if(countcheck==10) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Sejin is the parliament of Poland")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Sri Lanka is the largest tea exporting country in the world";
	}
	else if(countcheck==11) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Oxford University is the largest university building in the world";
	}
	else if(countcheck==12) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Lomonosov University (Moscow) is the largest university building in the world")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Othello was written by Shakespeare";
	}
	else if(countcheck==13) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Galileo's first scientific discovery was Telescope";
	}
	else if(countcheck==14) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Galileo's first scientific discovery was Pendulum")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="The country which ranks second in terms of land area is Canada";
	}
	else if(countcheck==15) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Eratosthenes was the first to measure the distance round the earth";
	}
	else if(countcheck==16) 
	{
		
		if(type=='true'){
			correct();
		}
		else if(type=='false'){
			incorrect();
			setTimeout(function(){alert("Wrong!")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Chess is the oldest game in the world";
	}
	else if(countcheck==17) 
	{
		
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Polo is the oldest game in the world")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="New Guinea is the largest island in the world";
	}
	else
	{
		if(type=='false'){
			correct();
		}
		else if(type=='true'){
			incorrect();
			setTimeout(function(){alert("Wrong!"+"\n"+"Greenland is the largest island in the world")},10);
		}
		else{
			countcheck++;
		}
		xx.innerHTML="Level 3 Complete";
		var x3=document.getElementById('showscore3');
		x3.innerHTML="Your Score is "+count;
		$('.showlevel3').hide();
		$('.finalpage3').show();
	}

	var score=document.getElementById("score3");
	score.innerHTML=count;
}
function playagain3()
{
	var xxx=document.getElementById('statementlevel3');
	xxx.innerHTML="Geneva is the headquarters of World Trade Organization";
	var x13=document.getElementById('score3');
	x13.innerHTML="0";
	countcheck=0;
	$('[data-role="page"]').slideDown();
	$('.finalpage3').hide();
	$('#nextlevel3').hide();
	$('#select').hide();
	count=0;
}
//Function to be executed when answer is correct
function correct()
{
	setTimeout(function(){alert("Correct! ")},10);
	countcheck++;
	count+=2;
}
//Function to be executed when answer is incorrect
function incorrect()
{
	countcheck++;
	count--;
}