var hoursRequired=600;
var hoursDay=6;

function getValues(){
	var hoursRequired=document.getElementById("hoursRequired");
	var hoursDay=document.getElementById("hoursDay");
}

function algorithm() {
	getValues();
	totalDays=hoursRequired/hoursDay;
	alert(totalDays);
}
function checkFound() {
	if (foundExport == 1)
	{
		totalDays=totalDays +1;
	}
	if (foundExport == 2)
	{
		totalDays=totalDays +1;
	}
	if (foundExport == 3)
	{
		totalDays=totalDays +1;
	} 
	alert(totalDays);
}

function run()
{
	entryForm();
	findWeekDay();
	algorithm();
	advance();
	
}