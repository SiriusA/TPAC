var dTableElem = new Array;
var tableDeflator = new Array;
var tableInflator = new Array;
var currentRows = 14;




function formAddition()
{
		/*
		<tr>
		<td><input type="text" id="Course1Id"/></td>
		<td class="tr1c1"></td>
		<td class="tr1c2"></td>
		<td class="tr1c3"></td>
		<td class="tr1c4"></td>
		<td class="tr1c5"></td>
		<td class="tr1c6"></td>
		<td class="tr1c7"></td>
		</tr>
		*/
		
}
function deflateTable()
{
	if(currentRows > 0)
	{
	tableRows = tableRows - 1;
	}
	if((currentRows +1) != tableRows) {
		dTableElem[currentRows] = eval(tableDeflator[currentRows]);
		if(currentRows > 0)
		{
		currentRows = currentRows - 1;
		}
	}
}
function expandTable()
{
	if(currentRows < 14)
	{
	currentRows = currentRows + 1;
	}
	$("div.autumnTemplate table").append(dTableElem[currentRows]);
}
function expTableSetup()
{
	tableDeflator[0] = '$(".row1").detach();'
	tableDeflator[1] = '$(".row2").detach();'
	tableDeflator[2] = '$(".row3").detach();'
	tableDeflator[3] = '$(".row4").detach();'
	tableDeflator[4] = '$(".row5").detach();'
	tableDeflator[5] = '$(".row6").detach();'
	tableDeflator[6] = '$(".row7").detach();'
	tableDeflator[7] = '$(".row8").detach();'
	tableDeflator[8] = '$(".row9").detach();'
	tableDeflator[9] = '$(".row10").detach();'
	tableDeflator[10] = '$(".row11").detach();'
	tableDeflator[11] = '$(".row12").detach();'
	tableDeflator[12] = '$(".row13").detach();'
	tableDeflator[13] = '$(".row14").detach();'
	tableDeflator[14] = '$(".row15").detach();'
	if((currentRows +1) != tableRows) {
		while ((currentRows +1) != tableRows)
		{
			dTableElem[currentRows] = eval(tableDeflator[currentRows]);
			if((currentRows + 1) == tableRows)
			{
				break;
			}
			currentRows = currentRows - 1;
		}
	}
}
function tableOutputSetup()
{
	tableOutput[0] = '$("input #Course1Id").val(courseDataArray[c][0]);$("td.tr1c1").text(courseDataArray[c][1]);$("td.tr1c2").text(courseDataArray[c][2]);$("td.tr1c3").text(courseDataArray[c][3]);$("td.tr1c4").text(courseDataArray[c][4]);$("td.tr1c5").text(courseDataArray[c][5]);$("td.tr1c6").text(courseDataArray[c][6]);';
	tableOutput[1] = '$("input #Course2Id").val(courseDataArray[c][0]);$("td.tr2c1").text(courseDataArray[c][1]);$("td.tr2c2").text(courseDataArray[c][2]);$("td.tr2c3").text(courseDataArray[c][3]);$("td.tr2c4").text(courseDataArray[c][4]);$("td.tr2c5").text(courseDataArray[c][5]);$("td.tr2c6").text(courseDataArray[c][6]);';
	tableOutput[2] = '$("input #Course3Id").val(courseDataArray[c][0]);$("td.tr3c1").text(courseDataArray[c][1]);$("td.tr3c2").text(courseDataArray[c][2]);$("td.tr3c3").text(courseDataArray[c][3]);$("td.tr3c4").text(courseDataArray[c][4]);$("td.tr3c5").text(courseDataArray[c][5]);$("td.tr3c6").text(courseDataArray[c][6]);';
	tableOutput[3] = '$("input #Course4Id").val(courseDataArray[c][0]);$("td.tr4c1").text(courseDataArray[c][1]);$("td.tr4c2").text(courseDataArray[c][2]);$("td.tr4c3").text(courseDataArray[c][3]);$("td.tr4c4").text(courseDataArray[c][4]);$("td.tr4c5").text(courseDataArray[c][5]);$("td.tr4c6").text(courseDataArray[c][6]);';
	tableOutput[4] = '$("input #Course5Id").val(courseDataArray[c][0]);$("td.tr5c1").text(courseDataArray[c][1]);$("td.tr5c2").text(courseDataArray[c][2]);$("td.tr5c3").text(courseDataArray[c][3]);$("td.tr5c4").text(courseDataArray[c][4]);$("td.tr5c5").text(courseDataArray[c][5]);$("td.tr5c6").text(courseDataArray[c][6]);';
	tableOutput[5] = '$("input #Course6Id").val(courseDataArray[c][0]);$("td.tr6c1").text(courseDataArray[c][1]);$("td.tr6c2").text(courseDataArray[c][2]);$("td.tr6c3").text(courseDataArray[c][3]);$("td.tr6c4").text(courseDataArray[c][4]);$("td.tr6c5").text(courseDataArray[c][5]);$("td.tr6c6").text(courseDataArray[c][6]);';
	tableOutput[6] = '$("input #Course7Id").val(courseDataArray[c][0]);$("td.tr7c1").text(courseDataArray[c][1]);$("td.tr7c2").text(courseDataArray[c][2]);$("td.tr7c3").text(courseDataArray[c][3]);$("td.tr7c4").text(courseDataArray[c][4]);$("td.tr7c5").text(courseDataArray[c][5]);$("td.tr7c6").text(courseDataArray[c][6]);';
	tableOutput[7] = '$("input #Course8Id").val(courseDataArray[c][0]);$("td.tr8c1").text(courseDataArray[c][1]);$("td.tr8c2").text(courseDataArray[c][2]);$("td.tr8c3").text(courseDataArray[c][3]);$("td.tr8c4").text(courseDataArray[c][4]);$("td.tr8c5").text(courseDataArray[c][5]);$("td.tr8c6").text(courseDataArray[c][6]);';
	tableOutput[8] = '$("input #Course9Id").val(courseDataArray[c][0]);$("td.tr9c1").text(courseDataArray[c][1]);$("td.tr9c2").text(courseDataArray[c][2]);$("td.tr9c3").text(courseDataArray[c][3]);$("td.tr9c4").text(courseDataArray[c][4]);$("td.tr9c5").text(courseDataArray[c][5]);$("td.tr9c6").text(courseDataArray[c][6]);';
	tableOutput[9] = '$("input #Course10Id").val(courseDataArray[c][0]);$("td.tr10c1").text(courseDataArray[c][1]);$("td.tr10c2").text(courseDataArray[c][2]);$("td.tr10c3").text(courseDataArray[c][3]);$("td.tr10c4").text(courseDataArray[c][4]);$("td.tr10c5").text(courseDataArray[c][5]);$("td.tr10c6").text(courseDataArray[c][6]);';
	tableOutput[10] = '$("input #Course11Id").val(courseDataArray[c][0]);$("td.tr11c1").text(courseDataArray[c][1]);$("td.tr11c2").text(courseDataArray[c][2]);$("td.tr11c3").text(courseDataArray[c][3]);$("td.tr11c4").text(courseDataArray[c][4]);$("td.tr11c5").text(courseDataArray[c][5]);$("td.tr11c6").text(courseDataArray[c][6]);';
	tableOutput[11] = '$("input #Course12Id").val(courseDataArray[c][0]);$("td.tr12c1").text(courseDataArray[c][1]);$("td.tr12c2").text(courseDataArray[c][2]);$("td.tr12c3").text(courseDataArray[c][3]);$("td.tr12c4").text(courseDataArray[c][4]);$("td.tr12c5").text(courseDataArray[c][5]);$("td.tr12c6").text(courseDataArray[c][6]);';
	tableOutput[12] = '$("input #Course13Id").val(courseDataArray[c][0]);$("td.tr13c1").text(courseDataArray[c][1]);$("td.tr13c2").text(courseDataArray[c][2]);$("td.tr13c3").text(courseDataArray[c][3]);$("td.tr13c4").text(courseDataArray[c][4]);$("td.tr13c5").text(courseDataArray[c][5]);$("td.tr13c6").text(courseDataArray[c][6]);';
	tableOutput[13] = '$("input #Course14Id").val(courseDataArray[c][0]);$("td.tr14c1").text(courseDataArray[c][1]);$("td.tr14c2").text(courseDataArray[c][2]);$("td.tr14c3").text(courseDataArray[c][3]);$("td.tr14c4").text(courseDataArray[c][4]);$("td.tr14c5").text(courseDataArray[c][5]);$("td.tr14c6").text(courseDataArray[c][6]);';
	tableOutput[14] = '$("input #Course15Id").val(courseDataArray[c][0]);$("td.tr15c1").text(courseDataArray[c][1]);$("td.tr15c2").text(courseDataArray[c][2]);$("td.tr15c3").text(courseDataArray[c][3]);$("td.tr15c4").text(courseDataArray[c][4]);$("td.tr15c5").text(courseDataArray[c][5]);$("td.tr15c6").text(courseDataArray[c][6]);';
}

$(document).ready(function(){
	expTableSetup();
});