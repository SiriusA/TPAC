//Jake, your impact variable is found. Use this to figure out how the impact affects your math.
//The Impacts section starts at Line 215.
//Global Variables
var hoursRequired=600;
var hoursDay=6;
var linum=0;
var stringd="0";
var impactstring="";
var numing;
var dateData="";
var anImpact=0;
//The next four variables will eventually take data from the form.
var illNumD=0;
var startDateM;
var startDateD;
var startDateY;
var hoursCompleted;
var hoursRemaining;
var tableRows = 7;
var row = 0;
var number;
var startDay;
var dateYear;
var dateDay;
var dateMonth;
var fusionStart;
var fusionImpact;
var found=0;
var foundExport=0;
var tableOutput = new Array();
//Xml variables
var programId= "B0780000";
var courseId= new Array();
var programDataArray=new Array(); 
var courseDataArray=new Array();
 //0 is the ID, don't use it. 1: Course name. 2: OCP. 3: Hours.



//Index
/*
Functions:
docready
{
getNum()
classify()
retrieval()
	{
	retrieve()
	impact()
	}
dateBreak()
	{
	monthBreak()
	}
}
run()
{
entryForm()
findWeekDay()
algorithm()
	{
	getValues()
	}
hourTicker()
	{
		advance()
		{
		dateFind()
			{
			fuseDateA()
			fuseDateB()
			}
		advanceMonth()
		advanceYear()
		checkFound()
		}
	}
}
*/


//Load Programs.xml
function loadXml(){
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET","programs.xml", false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML;
  
  }

function retrieveCourseDX(){
var searchIndex;
var idFound=0;
var xIA=0; //The program.
var xIB=0; //The course.
var xIC=0; //Used to return data.
//output: programDataArray[]
//output: courseDataArray[]
//Find the Program
do
{

searchIndex=xmlDoc.getElementsByTagName("program")[xIA].attributes[0].textContent;


if(searchIndex==programId)
{	
	idFound=1;
	break;
}
if(searchIndex=="END")
{
	programDataArray.push(xmlDoc.getElementsByTagName("program")[xIA].attributes[0].textContent);
	programDataArray.push(xmlDoc.getElementsByTagName("program")[xIA].attributes[1].textContent);
	idFound = -1;
	break;
}

xIA=xIA+1;
}while (idFound==0);
if(idFound==1)
{
	programDataArray.push(xmlDoc.getElementsByTagName("program")[xIA].attributes[0].textContent);
	programDataArray.push(xmlDoc.getElementsByTagName("program")[xIA].attributes[1].textContent);
	programDataArray.push(xmlDoc.getElementsByTagName("program")[xIA].attributes[2].textContent);
	programDataArray.push(xmlDoc.getElementsByTagName("program")[xIA].attributes[3].textContent);
}
do
{
idFound=0;
do
{


searchIndex=xmlDoc.getElementsByTagName("program")[xIA].children[xIB].attributes[0].textContent;

if(searchIndex==courseId[row])
{
	idFound=1;
	break;
}
if(searchIndex == "END")
{
	idFound = -1;
	break;
}
xIB=xIB+1;
}while(idFound==0);
if(idFound==1)
{
	courseDataArray[row].push(xmlDoc.getElementsByTagName("program")[xIA].children[xIB].attributes[0].textContent);
	courseDataArray[row].push(xmlDoc.getElementsByTagName("program")[xIA].children[xIB].attributes[1].textContent);
	courseDataArray[row].push(xmlDoc.getElementsByTagName("program")[xIA].children[xIB].attributes[2].textContent);
	courseDataArray[row].push(xmlDoc.getElementsByTagName("program")[xIA].children[xIB].attributes[3].textContent);
}
if(idFound == -1)
{
	courseDataArray[row].push(xmlDoc.getElementsByTagName("program")[xIA].children[xIB].attributes[0].textContent);
	courseDataArray[row].push(xmlDoc.getElementsByTagName("program")[xIA].children[xIB].attributes[1].textContent);
}
writeData();
row = row + 1;
idFound = 0;
}while(row < tableRows);
xIA = 0;
xIB = 0;
row = 0;
}

function writeData() {
//	document.getElementById("tr1c2").innerHTML=programDataArray[1];
//	document.getElementById("tr1c3").innerHTML=programDataArray[2];
//	document.getElementById("tr1c4").innerHTML=programDataArray[3];
var c = 0;
do
{
eval(tableOutput[c]);
c = c + 1;
}while(c < tableRows);
}

function setArray() {
var c = 0;
do
{
	courseDataArray[c]=new Array();
	c = c+1;
}while(c < tableRows);
}

function tagIDs() {
	$("input.courseID").addClass("Loading");
}

function loadIDs() {
var loadID;
var c = 1;
do
{
	loadID = $("input.Loading:first").val();
	$("input.Loading:first").removeClass("Loading");
	courseId.push(loadID);
	c = c+1;
}while(c < tableRows);
}

function test(){
tableOutputSetup();
setArray();
tagIDs();
loadXml();
loadIDs();

retrieveCourseDX();

}
//ExpandableTable

//Goes Here.

//Algorithm
/*
function getValues(){
	hoursRequired=$("#hoursRequired").val();
	hoursDay=$("#hoursDay").val();
	hoursCompleted=$("#hoursCompleted").val()
	hoursRequired=parseInt(hoursRequired);
	hoursDay=parseInt(hoursDay);
	hoursCompleted=parseInt(hoursCompleted);
	if (isNaN(hoursRequired)==true)
	{	illNumD=1;}
	if (isNaN(hoursDay)==true)
	{	illNumD=1;}
	if (isNaN(hoursCompleted)==true)
	{	illNumD=1;}
}

function algorithm() {
	getValues();
	if (illNumD==1)
	{	alert("Error: One of the numbers input was not a number.");return;}
	totalDays=hoursRequired/hoursDay;
}
function checkFound() {
	if (foundExport == 1)
	{
		totalDays=totalDays +1;
		anImpact=1;
	}
	if (foundExport == 2)
	{
		totalDays=totalDays +1;
		anImpact=1;
	}
	if (foundExport == 3)
	{
		totalDays=totalDays +1;
		anImpact=1;
	}
	if (foundExport == 5)
	{	
		totalDays=totalDays +1;
		anImpact=1;
	}
}

//Retrieval Program
function getNum(){
	number=$("ul li#number").text();
	number=parseInt(number)+2;
}

function entryForm(){
	//this parses the form data. RUN THIS FIRST
	startDateM=$("#startDateM").val();
	startDateD=$("#startDateD").val();
	startDateY=$("#startDateY").val();
	startDateM=parseInt(startDateM);
	startDateD=parseInt(startDateD);
	startDateY=parseInt(startDateY);
	if (isNaN(startDateM)==true)
	{	illNumD=1;}
	if (isNaN(startDateD)==true)
	{	illNumD=1;}
	if (isNaN(startDateY)==true)
	{	illNumD=1;}
}

function classify(){
$("ul li").addClass("notReadI").addClass("notReadDate").addClass("notNumdDate");
}
function retrieve(){
	stringd=$("ul li.notReadI:first").text();
	$("ul li.notReadI:first").addClass("readI").removeClass("notReadI");
}
function retrieval(){
	linum=0;
	while (linum!=number)
	{
	retrieve();
	impact();
	linum=linum+1;
	}
}

function monthBreak(){
		if (numing.search("January")!=-1)
			{numing=numing.replace("January","m01");}
		if (numing.search("February")!=-1)
			{numing=numing.replace("February","m02");}
		if (numing.search("March")!=-1)
			{numing=numing.replace("March","m03");}
		if (numing.search("April")!=-1)
			{numing=numing.replace("April","m04");}
		if (numing.search("May")!=-1)
			{numing=numing.replace("May","m05");}
		if (numing.search("June")!=-1)
			{numing=numing.replace("June","m06");}
		if (numing.search("July")!=-1)
			{numing=numing.replace("July","m07");}
		if (numing.search("August")!=-1)
			{numing=numing.replace("August","m08");}
		if (numing.search("September")!=-1)
			{numing=numing.replace("September","m09");}
		if (numing.search("October")!=-1)
			{numing=numing.replace("October","m10");}
		if (numing.search("November")!=-1)
			{numing=numing.replace("November","m11");}
		if (numing.search("December")!=-1)
			{numing=numing.replace("December","m12");}
}
function dateBreak(){
	linum=0;
	while (linum!=65)
	{
		numing=$("ul li.notNumdDate:first").text();
		monthBreak()
		$("ul li.notNumdDate:first").html(numing);
		numing="";
		$("ul li.notNumdDate:first").addClass("NumdDate").removeClass("notNumdDate");
		linum=linum+1;
	}
}

function findWeekDay(){
	var d=new Date();
	d.setDate(startDateD)
	d.setFullYear(startDateY)
	d.setMonth(startDateM-1);
	startDay=d.getDay();
	startDay=parseInt(startDay);
	console.log("original startDay " + startDay);
	if (startDay==0)
	{alert("No School on Sunday!");}
	if (startDay==6)
	{alert("No School on Saturday!");}
}
function advance(){
	dateFind();
	if (startDay==0)
	{found=5;}
	if (startDay==6)
	{found=5;}
	foundExport=parseInt(found);
	checkFound();
	startDay=startDay+1;
	console.log("advance's startDay " + startDay);
	if (startDay > 6)
		{startDay=0;}
	startDateD=startDateD+1;
	advanceMonth();
	advanceYear();
}

function advanceMonth(){
	//January, March, May, July, August, October, December
	//April, June, September, November
	//Febuary
	if (startDateM==1)
	{
		if (startDateD==32)
		{startDateD=1; startDateM=2;}
	}
	if (startDateM==2)
	{	
		if (startDateY%4==0)
		{	if (startDateD==30)
			{startDateD=1; startDateM=3;}
		}
		if (startDateD==29)
		{startDateD=1; startDateM=3;}
	}
	if (startDateM==3)
	{
		if (startDateD==32)
		{startDateD=1; startDateM=4;}
	}
	if (startDateM==4)
	{
		if (startDateD==31)
		{startDateD=1; startDateM=5;}
	}
	if (startDateM==5)
	{
		if (startDateD==32)
		{startDateD=1; startDateM=6;}
	}
	if (startDateM==6)
	{
		if (startDateD==31)
		{startDateD=1; startDateM=7;}
	}
	if (startDateM==7)
	{
		if (startDateD==32)
		{startDateD=1; startDateM=8;}
	}
	if (startDateM==8)
	{
		if (startDateD==32)
		{startDateD=1; startDateM=9;}
	}
	if (startDateM==9)
	{
		if (startDateD==31)
		{startDateD=1; startDateM=10;}
	}
	if (startDateM==10)
	{
		if (startDateD==32)
		{startDateD=1; startDateM=11;}
	}
	if (startDateM==11)
	{
		if (startDateD==31)
		{startDateD=1; startDateM=12;}
	}
	if (startDateM==12)
	{
		if (startDateD==32)
		{startDateD=1; startDateM=13;}
	}
}

function advanceYear(){
	if (startDateM==13)
		{startDateM=1; startDateY=startDateY+1;}
}
function fuseDateA(){
	if ((startDateM.toString()).length=1)
		{fusionStart="m0"+startDateM+" "+startDateD+" "+startDateY;}
	else
		{fusionStart="m0"+startDateM+" "+startDateD+" "+startDateY;}
}

function fuseDateB(){
	fusionImpact=dateMonth+" "+dateDay+" "+dateYear;
}
function dateFind(){
	//This will require input from the other Javascript file. For now, we will use a theorized scenario.
	//The other .js file will call this function.
	//This could be done using a string, or could be calculated numerically.
	//It could be done as such: If the program finds a match for a date in the output, the program will find the corresponding impact.
	//This could be done by using the linum variable. This will require the linum variable to be reset prior to beginning the process.
	//The form will require three inputs.
	linum=0;
		fuseDateA();
		$("ul li.ReadDate").addClass("notReadDate").removeClass("ReadDate");
		while (linum!=65)
		{
			dateData=$("ul li.notReadDate:first").text();
			//Find Values of Date and Year.
			if(dateData.indexOf("m0")!=-1)
			{dateDay=dateData.substr((dateData.indexOf("m0")+4),2);}
			if(dateData.indexOf("m1")!=-1)
			{dateDay=dateData.substr((dateData.indexOf("m1")+4),2);}
			dateYear=dateData.substr((dateData.indexOf(", 2")+2),4);
			if(dateData.indexOf("m0")!=-1)
			{dateMonth=dateData.substr((dateData.indexOf("m0")),3);}
			if(dateData.indexOf("m1")!=-1)
			{dateMonth=dateData.substr((dateData.indexOf("m1")),3);}
			fuseDateB();
			if(fusionStart==fusionImpact)
			{
				found=(impactstring.charAt(linum));
				return;
			}
			{found=0;}
			$("ul li.notReadDate:first").addClass("ReadDate").removeClass("notReadDate");
			linum=linum+1;
			
		}
	
	}

function impact(){
	var impacttype=0;
	if (stringd.search("Employee Planning")!=-1)
		{impacttype=1;}	
	if (stringd.search("Holiday")!=-1)
		{impacttype=2;}
	if (stringd.search("Day Off")!=-1)
		{impacttype=3;}
	if (stringd.search("Early Release")!=-1)
		{impacttype=4;}
	if (stringd.search("Start 1st Quarter")!=-1)
		{impacttype=6;}
	if (stringd.search("End 1st 9 weeks")!=-1)
		{impacttype=7;}
	if (stringd.search("Start 2nd Quarter")!=-1)
		{impacttype=8;}
	if (stringd.search("End 2nd 9 weeks")!=-1)
		{impacttype=9;}
	if (stringd.search("Start 3rd Quarter")!=-1)
		{impacttype=10;}
	if (stringd.search("End 3rd 9 weeks")!=-1)
		{impacttype=11;}
	if (stringd.search("Start 4th Quarter")!=-1)
		{impacttype=12;}
	if (stringd.search("Last Day of School")!=-1)
		{impacttype=13;}
	impactstring=impactstring + impacttype;
}

function hourTicker(){
	hoursRemaining=hoursRequired - hoursCompleted;
	var daycount=0;
	while (hoursRemaining >0)
	{
		advance();
		if (anImpact==1)
		{	hoursRemaining=hoursRemaining - 0;}
		if (anImpact==0)
		{	hoursRemaining=hoursRemaining - hoursDay;}
		anImpact=0;
		daycount=daycount+1;
		console.log(startDay);
	}
	if (startDay==6)
	{
		advance();
		advance();
		console.log("Trying to end on a Saturday, huh?");
	}
	if (startDay==0)
	{
		advance();
		console.log("Trying to end on a Sunday, huh?");
	}
	alert(daycount);
}

function truncateYear(){
	startDateY=startDateY.toString();
	startDateY=startDateY.substr(2);
}

$(document).ready(function(){
	getNum();
	classify();
	retrieval();
	dateBreak();
});

function run()
{	
	
	entryForm();
	if (illNumD==1)
	{	alert("Error: One of the numbers input was not a number.");return;}
	findWeekDay();
	algorithm();
	hourTicker();
	truncateYear();
	alert(startDateM + "/" + startDateD + "/" + startDateY);
	
}

*/