function generate()
		{
			var textValue=document.all("nme").value.toUpperCase()
			if(textValue=="")
			{
				alert('Please give your name');
				return false;
			}
			else
			{
				n_window("http://images.optin.com.au/optusxmas/flash/penguin_tebe.swf?msg="+ document.all("nme").value);
			}
			return true;
		}
		
		
function dementia(){
var textValue=document.all("txt1").value.toUpperCase()
if(textValue=="VEDAMOORTHY NAMASIVAYAM"){
alert("CORRECT: You know the PwC family well. Congratulations!")
}else if(textValue==""){
alert("You cannot leave it blank !!")
}else if(textValue!="LATHA RAMANATHAN"){
alert("INCORRECT: Try again... All the best!")
}else
alert("Enter a proper word !!")}

function dementia1(){
var textValue=document.all("txt1").value.toUpperCase()
if(textValue=="WATER"){
n_window1('dementia/ans2.htm',"EditPlan","")
}else if(textValue==""){
alert("You cannot leave it blank !!")
}else if(textValue=="MILK"){
n_window1('dementia/anstwo.htm',"EditPlan","")
}else
alert("Enter a proper word !!")}

function dementia2(){
var textValue=document.all("txt2").value.toUpperCase()
if(textValue=="GLASS"){
n_window1('dementia/ans3.htm',"EditPlan","")
}else if(textValue==""){
alert("You cannot leave it blank !!")
}else if(textValue=="GREEN BRICKS"){
n_window1('dementia/ansthree.htm',"EditPlan","")
}else
alert("Enter a proper word !!")}

function dementia3(){
var textValue=document.all("txt3").value.toUpperCase()
if(textValue=="YOU DONT BURY SURVIVORS"){
n_window1('dementia/ans4.htm',"EditPlan","")
}else if(textValue==""){
alert("You cannot leave it blank !!")
}else
n_window1('dementia/ansfour.htm',"EditPlan","")}

function dementia4(){
var textValue=document.all("txt4").value.toUpperCase()
if(textValue=="ME"){
n_window1('dementia/ansfive.htm',"EditPlan","")
}else if(textValue==""){
alert("You cannot leave it blank !!")
}else
n_window1('dementia/ansfive.htm',"EditPlan","")}
