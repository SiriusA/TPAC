//use www.cplusplus.com as a reference
#include<iostream>
#include<fstream>
#include<string>
#include<sstream>
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
	stringstream stringnum;
	stringstream output;
	int totalLineNum = 0;
	line="";
	x=0;
	ofstream of;
	ifstream is;
	string dataArray1[90];
	char prArray[150];
	

	is.open ("Calendar.txt");	
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
	while (a.good())
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
//	debug
	
	
	return 0;
}