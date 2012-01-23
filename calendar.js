var calendar = new Array();

var c = 0;
var d = 0;
do
{
	courseDataArray[c]=new Array();
	d = 0;
	do
	{
	calendar[c][d] = new Array();
	d = d+1;
	}while(d < 2);
	c = c+1;
	
}while(c < 12);

calendar[12][25][2012] = 2