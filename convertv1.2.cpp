//use www.cplusplus.com as a reference
#include<iostream>
#include<fstream>
#include<string>
#include<sstream>
#include<cstring>
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
/*
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
	//is.close();
	//Part2
	//is.open("TPACTemplate.htm");
*/
	of.open("calTest.txt");
	/*
	do {
		data=is.get();
		if (data=='`')
		{stop=1;}
		a.put(data);
		} while (stop != 1);
	//test=a.str(); //Testing purposes only
	//cout<<test<<endl; //Testing purposes only
	*/
	while (is.good())
	{	data=is.get();
		c.put(data);
	}
	
	//test=c.str(); //Testing purposes only
	//cout<<test<<endl; //Testing purposes only
//	cake=a.str();
/*	
	counting=cake.length();
	for (int count=0; count<counting-1; count++)
	{	data=a.get();
		output.put(data);
	}
*/
	cake=c.str();
	bool m[12];
	for(int i = 0; i < 12; i++)
	{
		m[i] = false;
	}
	string mo[12];
	mo[0] = "January";
	mo[1] = "February";
	mo[2] = "March";
	mo[3] = "April";
	mo[4] = "May";
	mo[5] = "June";
	mo[6] = "July";
	mo[7] = "August";
	mo[8] = "September";
	mo[9] = "October";
	mo[10] = "November";
	mo[11] = "December";
	size_t found;
	while(m[1] == false && m[2] == false && m[3] == false && m[4] == false && m[5] == false && m[6] == false && m[7] == false && m[8] == false && m[9] == false && m[10] == false && m[11] == false)
	{
		for(int i = 0; i < 12; i++)
		{
			while(m[i] == false)
			{
				found = cake.find(mo[i]);
				if(found != string::npos)
				{
					stringstream x;
					string x2;
					x<<(i+1);
					x2 = x.str();
					cake.replace(found, mo[i].length(), x2);
					//cout<<cake<<endl;
				}
				if(found == string::npos)
				{
					m[i] = true;
					cout<<"bing\n";
				}
			}
		}	
	}
	cout<<cake;
	of<<cake;
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