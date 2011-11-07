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
	string test;
	string cake;
	n=1;
	string line;
	stringstream a;
	stringstream b;
	stringstream c;
	stringstream stringnum;
	stringstream output;
	int linenum;
	linenum=0;
	line="";
	x=0;
	ofstream of;
	ifstream is;

	is.open ("Calendar.txt");
	of.open ("output.htm");
		of.write("<html><body><ul><li>",20);
		b.write("<ul><li>",8);
	while (is.good())
	{
		data=is.get();
		if (data== '\n')
		{
		of.put(data);
		b.put(data);
		linenum=linenum+1;
		of.write("</li><li>",9);
		b.write("</li><li>",9);
		}
		if (is.good())
		{
		of.put(data);
		b.put(data);
		}
	}	
		stringnum << "</li><li id='Number'>" << linenum;
		for (int z=0; z<23; z++)
		{
			stringnumd=stringnum.get();
			cout<<stringnumd;
			of.put(stringnumd);
			b.put(stringnumd);
		}
		cout<<endl;
		of.write("</li></ul></body></html>",24);
		b.write("</li></ul>",10);
		//test=b.str(); //Testing purposes only
		//cout<<test<<endl; //Testing purposes only
	is.close();
	of.close();
	//Part2
	is.open("TPAC.htm");
	of.open("TPACr.htm");
	do {
		data=is.get();
		a.put(data);
		if (data=='`')
		{stop=1;}
		} while (stop != 1);
	//test=a.str(); //Testing purposes only
	//cout<<test<<endl; //Testing purposes only
	while (is.good())
	{	data=is.get();
		c.put(data);
	}
	//test=c.str(); //Testing purposes only
	//cout<<test<<endl; //Testing purposes only
	while (a.good())
	{	data=a.get();
		output.put(data);
	}
	while (b.good())
	{	data=b.get();
		output.put(data);
	}
	while (c.good())
	{	data=c.get();
		output.put(data);
	}
	//test=output.str(); //Testing purposes only
	//cout<<test<<endl; //Testing purposes only
	while (output.good())
	{	data=output.get();
		of.put(data);
	}
	
	is.close();
	of.close();
	cout<<"Process Complete!";
	return 0;
}