//use www.cplusplus.com as a reference
#include<iostream>
#include<fstream>
#include<string>

using namespace std;

int main(){
	//retrieve data
	char data;
	char x;

	ifstream is;

	is.open ("Calendar.txt");
		cout<<"<li>";
	while (is.good())
	{
		data=is.get();
		if (data== '\n')
		{cout<<data<<"</li><li>";}
		if (is.good())
		{cout<<data;}
	}
		cout<<"</li>";
	is.close();

	is.open ("Calendar.txt");
			cout<<"<li>";
		while (is.good())
		{
			data=is.get();
			if (data== '\n')
			{cout<<data<<"</li><li>";}
			if (is.good())
			{cout<<data;}
		}
			cout<<"</li>";
		is.close();

	return 0;
	//begin conversion
}