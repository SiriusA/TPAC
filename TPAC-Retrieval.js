//Jake, your impact variable is found. Use this to figure out how the impact affects your math.
//The Impacts section starts at Line 215.

var linum=0;
var stringd="0";
var impactstring="";
var numing;
var dateData="";
//The next four variables will eventually take data from the form.
var startDateM=08;
var startDateD=22;
var startDateY=2011;
var hoursReq;

var startDay;
var dateYear;
var dateDay;
var dateMonth;
var fusionStart;
var fusionImpact;
var found=0;
var foundExport=0;
function entryForm(){
	//this parses the form data. RUN THIS FIRST
}
function classify(){
	$("ul li").addClass("notReadI").addClass("notReadDate").addClass("notNumdDate");
}
function retrieve(){
	stringd=$("ul li.notReadI:first").text();$("ul li.notReadI:first").addClass("readI").removeClass("notReadI");linum=linum+1;
}
function retrieval(){
	while (linum!=65)
	{
	retrieve();
	impact();
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
	alert(found);
	foundExport=parseInt(found);
	startDay=startDay+1;
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
		if (startDateYear%4==0)
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
		{startDateM=1; startDateYear=startDateYear+1;}
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
$(document).ready(function(){
	classify();
	retrieval();
	dateBreak();
	findWeekDay();
});
function test(){
	findWeekDay();
	advance();
}