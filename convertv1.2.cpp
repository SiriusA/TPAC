//use www.cplusplus.com as a reference
#include<iostream>
#include<fstream>
#include<string>
#include<sstream>
#include<cstring>
#include<vector>

using namespace std;
string convertInt(int linenum);

struct flyingcakes
{
	vector<string> cake;
};

struct finals
{
	vector<string> str;
};

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
//	b.write("<ul><li>",8);
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
//	cout<<cake;
	string impacts[4];
	impacts[0] = "Employee Planning";
	impacts[1] = "Holiday";
	impacts[2] = "Day Off";
	impacts[3] = "Early Release";
	for(int i = 0; i < 4; i++)
	{
		bool iFound = false;
		while(iFound == false)
		{
			found = cake.find(impacts[i]);
			if(found != string::npos)
			{
				stringstream x;
				string x2;
				x<<(i+1);
				x2 = x.str();
				cake.replace(found, impacts[i].length(), x2);
			}
			if(found == string::npos)
			{
				iFound = true;
//				cout<<"bing2\n";
			}
		}
	}
	vector<string> flyingCake;
	vector<flyingcakes> flyingCakes;
	size_t found2[4];
	vector<char> d;
	b<<cake;
//	cout<<b;
	bool lastWasNew = false;
	streampos noreset = 0;
	char adsf;
	while(b.good())
	{
		b.seekg(noreset);
		char data = b.get();
		if(data== '\n' && lastWasNew == false)
		{
			d.push_back(' ');
			d.push_back('f');
			d.push_back('a');
			d.push_back(data);
			char dp[d.size()];
			for(int i = 0; i < d.size(); i++)
			{
				dp[i] = d[i];
			}
			string mixcake = dp;
			cout<<mixcake;
			flyingCake.push_back(mixcake);
			lastWasNew = true;
			noreset = b.tellg();
			d.erase(d.begin(), d.end());
		}
		if(data != '\n')
		{
			d.push_back(data);
			lastWasNew = false;
			noreset = b.tellg();
		}
		if(data == '\n' && lastWasNew == true)
		{
		//	cout<<"Wiiiieird formatting.\n";
			noreset = b.tellg();
		}
	}
	for(int i = 0; i < flyingCake.size(); i++)
	{
		//cout<<flyingCake[i]<<endl;
	}
	bool cakefound = false;
	for(int i = 0; i < flyingCake.size(); i++)
	{
		char xtracakes[28];
		strcpy(xtracakes, flyingCake[i].c_str() );
//		cout<<xtracakes;
		char * cakemix2;
		cakemix2 = strtok (xtracakes, " ,");
		if(cakemix2 != NULL)
		{
			while(cakemix2 != NULL)
			{
				stringstream f;
				f << cakemix2;
				string g = f.str();
				flyingcakes delivery;
				//cout<<g<<" ";
				delivery.cake.push_back(g);
				flyingCakes.push_back(delivery);
				//cout<<"f";
				cakemix2 = strtok(NULL, " ,");
			}
		}
	}
	//cout<<"cake1";
//	cout<<flyingCake.size();
	//int cx = flyingCakes.size();
//	cout<<flyingCakes.size();
	for(int i = 0; i < flyingCakes.size(); i++)
	{	
		//cout<<"cake";
		for(int j = 0; j < flyingCakes[i].cake.size(); j++)
		{
		//	cout<<flyingCakes[i].cake[j];
		}
		//cout<<'\n';
	}
	of<<cake;
	//token filtering 
	vector<flyingcakes> final;
	vector<int> finalLines;
	int b2 = 0;
	for(int i = 0; i < flyingCakes.size(); i++)
	{
		string x;
			
		x = flyingCakes[i].cake[0];
		//cin>>adsf;
		char x2[x.size() + 1];
		strcpy(x2, x.c_str());
		bool x3[x.size()];
		if(x2[2] == '\n' && b2 != 0)
		{
			finalLines.push_back(b2);
			b2 = 0;
		}
		for(int k = 0; k < x.size(); k++)
		{
			x3[k] = false;
		//	cin>>adsf;
			//cout<<"Here";
			x3[k] = isdigit(x2[k]);
		}
		bool xF = true;
		for(int k = 0; k < x.size(); k++)
		{
			xF = x3[k];
			if(xF == false)
			{
				break;
			}
		}
		//cout<<"asdf";
		if(xF)
		{
			flyingcakes cakemix3f;
//			cout<<flyingCakes[i].cake[0]<<endl;
			cakemix3f.cake.push_back(flyingCakes[i].cake[0]);
			final.push_back(cakemix3f);
			b2++;
		}
		if(i+1 == flyingCakes.size())
		{
			break;
		}
	}
	cout<<final.size();
	cout<<endl;
	vector<finals> final2(final.size() / 4);
	int j = 0;
	string check[4];
	int k = 0;
	//cout<<finalLines.size();
	for(int i = 0; i < finalLines.size(); i++)
	{
		cout<<finalLines[i]<<endl;
	}
	for(int i = 0, k = 0; i < final.size() && k < final.size() + 100; i++, k++)
	{
		//cout<<final[i].cake[0]<<"-";
		check[k % 4] = final[i].cake[0];
	//	cout<<"=="<<check[k % 4];
		if((k+ 1) % 4 == 0 && k != 0)
		{
			cout<<"=="<<check[0];
			cout<<"=="<<check[1];
			cout<<"=="<<check[2];
			cout<<"=="<<check[3];
			cout<<endl;
			int as = k % 4;
			int af = (k - as)/4;
			char x[check[3].size() + 1];
			char y[check[0].size() + 1];
			strcpy(x , check[3].c_str());
			strcpy(y , check[0].c_str());
			int x2 = atoi(x);
			int y2 = atoi(y);
			string z = final[i + 1].cake[0];
			stringstream xef;
			xef<<x2;
			string x3 = xef.str();
			//if(check[3] == "1" || check[3] == "2" || check[3] == "3" || check[3] == "4")
			
			if(x2 < 5)
			{
				finals cake234;
				for(int j = 0; j < 4; j++)
				{
					
					cake234.str.push_back(check[j]);
					
				}
				final2.push_back(cake234);
				check[3] = "asdf";
				if( (finalLines[k / 4] - 4) > 0 )
				{
					i = i + (finalLines[k / 4] - 4);
				}
			}
			else if(check[3] != "asdf")
			{	cout<<x2<<endl;
				string c = check[3];
				check[3] = "0";
				finals cake234;
				for(int j = 0; j < 4; j++)
				{
					
					cake234.str.push_back(check[j]);
					
				}
				final2.push_back(cake234);
				if(c != "9")
				{
					i--;
				}
				if(c == "9" && check[0] != "10" && check[0] != "1")
				{
					i--;
				}
				
			}
		}
	}
	
	for(int i = 0; i < final2.size(); i++)
	{
		for(int j = 0; j < final2[i].str.size(); j++)
		{
			cout<<final2[i].str[j]<<" ";
		}
		cout<<endl;
	}
	
	
	is.close();
	of.close();
	cout<<"Process Complete!"<<endl;
	
}