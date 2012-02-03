//use www.cplusplus.com as a reference
/* instructions for calendar CSV setup
Format:
MM, DD, YYYY, I

Impacts: 
		1: Teacher Planning
		2: Holiday
		3: Day Off
		4: Early Release
		
Make sure there is a empty line at the end of the calendar file.
		*/
#include<iostream>
#include<fstream>
#include<string>
#include<sstream>
#include<cstdlib>
using namespace std;
string convertInt(int linenum);

int main(){
	//retrieve data
	char data;
	char stringnumd;
	int x;
	int n;
	int stop;
	int counting;
	counting=0;
	string test;
	string cake;
	n=1;
	string line;
	stringstream a;
	stringstream b;
	stringstream c;
	stringstream validStream;
	stringstream monthstream;
	stringstream impactS;
	stringstream stringnum;
	stringstream output;
	int totalLineNum = 0;
	line="";
	x=0;
	ofstream of;
	ifstream is;
	char dataArray1[90][150];
	int impactDates[100][4];
	int calendar[12][31][2];

	is.open ("calendar2.txt");	
//	Check the amount of lines
	while (is.good())
	{
		data = is.get();
		if(data == '\n')
		{
			totalLineNum++;
		}
		if(a.good())
		{
			a.put(data);
		}
	}
	is.close();
	int lineNum = 0;
	bool lineEnd = false;
/*	while (a.good())
	{
		data = a.get();
		if(data == '\n' || data == '\0')
		{
			lineEnd = true;
		}
		b.put(data);
		dataArray1[lineNum] += data;
		if(lineEnd == true)
		{
			cout << dataArray1[lineNum];
			lineNum++;
			lineEnd = false;
		}
	}
	cout << dataArray1[lineNum];
*/
	for(lineNum = 0; lineNum < totalLineNum; lineNum++)
	{
		string dataString;
		for(int p = 0; p < 150; p++)
		{
			data = a.get();
//			dataArray1[lineNum][p] = data;
			dataString.append(1, data);
			if(data == '\n' || data == '\0')
			{
				break;
			}
		}
		cout<<dataString<<endl;
		char * mstr, * dstr, * ystr, * istr;
		string cake;
		mstr = new char [3];
		cake = dataString.substr(0, 2);
		strcpy(mstr, cake.c_str());
		dstr = new char [3];
		cake = dataString.substr(4, 2);
		strcpy(dstr, cake.c_str());
		ystr = new char [5];
		cake = dataString.substr(8, 4);
		strcpy(ystr, cake.c_str());
		istr = new char [2];		
		cake = dataString.substr(14, 1);
		strcpy(istr, cake.c_str());
		
		impactDates[lineNum][0] = atoi(mstr);
		impactDates[lineNum][1] = atoi(dstr);
		impactDates[lineNum][2] = atoi(ystr);
		impactDates[lineNum][3] = atoi(istr);
	}
	
	//debug
	for(int c = 0; c < totalLineNum; c++)
	{
		cout<<impactDates[c][0]<<" "<<impactDates[c][1]<<" "<<impactDates[c][2]<<" "<<impactDates[c][3]<<"\n";
	}

	int m1, d1, y1, i1;
	bool valid;
	

	//output
	of.open("calendar.js");
	of<<"var calendar = new Array();\nvar c = 0;\nvar d = 0;\ndo\n{\n	calendar[c]=new Array();\n	d = 0;\n	do\n	{\n	calendar[c][d] = new Array();\n	d = d+1;\n	}while(d < 2050);\n	c = c+1;\n	\n}while(c < 31);\n";
//	for(int i = 0; i < totalLineNum; i++)
//	{
//		of<<"calendar["<<impactDates[i][0]<<"]["<<impactDates[i][1]<<"]["<<impactDates[i][2]<<"] = "<<impactDates[i][3]<<";"<<endl;
//	}
	for(int c = impactDates[3][2]; c < 2 + impactDates[3][2] ; c++)
	{
		for(int a = 0; a < 12; a++)
		{
			for(int b = 0;((b < 28) && (a == 1) && (c%4 != 0) || (b < 29) && (a == 1) && (c%4 == 0)) || ((b < 30) && ((a == 3) || (a == 5) || (a == 8) || (a == 10))) || ((b < 31) && ((a == 0) || (a == 2) || (a == 4) || (a == 6) || (a == 7) || (a == 9) || (a == 11))); b++)
			{
				bool cakeLie = false;
				for(int d = 0;d < totalLineNum; d++)
				{
					if( (impactDates[d][0]-1 == a) && (impactDates[d][1]-1 == b) && (impactDates[d][2] == c))
					{
						cakeLie = true;
						of<<"calendar["<<a<<"]["<<b<<"]["<<c<<"] = "<<impactDates[d][3]<<";"<<endl;
						break;
					}
					if(a == 6 && b == 3)//Fourth of July Code
					{
						cakeLie = true;
						of<<"calendar["<<a<<"]["<<b<<"]["<<c<<"] = "<<2<<";"<<endl;
					}	
				}
				if(cakeLie == false)
				{
					of<<"calendar["<<a<<"]["<<b<<"]["<<c<<"] = "<<0<<";"<<endl;
				}
			}
		}
	}
	
	
	return 0;
}