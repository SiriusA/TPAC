//use www.cplusplus.com as a reference
#include<iostream>
#include<fstream>

using namespace std;

int main(){
	//retrieve data
	char data;
	int x;
	x=0;
	ofstream of;
	ifstream is;

	is.open ("Calendar.txt");
	of.open ("output.htm");
		of.write("<html><body><ul><li>",20);
	while (is.good())
	{
		data=is.get();
		if (data== '\n')
		{
		of.put(data);
		of.write("</li><li>",9);
		}
		if (is.good())
		{
		of.put(data);
		}
	}
		of.write("</li></ul></body></html>",24);
	is.close();
	of.close();
	cout<<"Process Complete!";
	return 0;
}