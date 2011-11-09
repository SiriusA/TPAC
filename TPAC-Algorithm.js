var hoursRequired=600;
var hoursDay=6;
var totalDays=hoursRequired/hoursDay;

function getValues(){
	var hoursRequired=document.getElementById("hoursRequired");
	var hoursDay=document.getElementById("hoursDay");
}

function algorithm() {
	getValues();
	totalDays=hoursRequired/totalDays;
	alert(totalDays);
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



$(document).ready(function(){
	algorithm();
});