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
	int linenum;
	linenum=0;
	line="";
	x=0;
	ofstream of;
	ifstream is;

	is.open ("Calendar.txt");
	b.write("<ul><li>",8);
	while (is.good())
	{
		data=is.get();
		if (data== '\n')
		{
		b.put(data);
		linenum=linenum+1;
		b.write("</li><li>",9);
		}
		if (is.good())
		{
		b.put(data);
		}
	}	
		stringnum << "</li><li id='Number'>" << linenum;
		for (int z=0; z<23; z++)
		{
			stringnumd=stringnum.get();
			b.put(stringnumd);
		}
		cout<<endl;
		b.write("</li></ul>",10);
		//test=b.str(); //Testing purposes only
		//cout<<test<<endl; //Testing purposes only
	is.close();
	//Part2
	is.open("TPACTemplate.htm");
	of.open("TPAC.htm");
	do {
		data=is.get();
		if (data=='`')
		{stop=1;}
		a.put(data);
		} while (stop != 1);
	//test=a.str(); //Testing purposes only
	//cout<<test<<endl; //Testing purposes only
	while (is.good())
	{	data=is.get();
		c.put(data);
	}
	//test=c.str(); //Testing purposes only
	//cout<<test<<endl; //Testing purposes only
	cake=a.str();
	counting=cake.length();
	for (int count=0; count<counting-1; count++)
	{	data=a.get();
		output.put(data);
	}
	cake=b.str();
	counting=cake.length();
	for (int count=0; count<counting; count++)
	{	data=b.get();
		output.put(data);
	}
	cake=c.str();
	counting=cake.length();
	for (int count=0; count<counting; count++)
	{	data=c.get();
		output.put(data);
	}
	//test=output.str(); //Testing purposes only
	//cout<<test<<endl; //Testing purposes only
	cake=output.str();
	counting=cake.length();
	for (int count=0; count<counting-1; count++)
	{	data=output.get();
		of.put(data);
	}
	
	is.close();
	of.close();
	cout<<"Process Complete!";
	return 0;
}