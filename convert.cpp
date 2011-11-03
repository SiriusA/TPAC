//use www.cplusplus.com as a reference
#include<iostream>
#include<fstream>

using namespace std;

int main(){
	//retrieve data
	char Mv;
	char Tv;
	char Wv;
	char Fv;
	cout<<"Due to limitations in the program, please type the letters M,T,W, and F, pressing enter after each.";
	cin>>Mv;
	cin>>Tv;
	cin>>Wv;
	cin>>Fv;
	char line1;

	ifstream is;

	is.open ("Calendar.txt");

	while (is.good())
	{
		if(is.get()=Fv)
		{line1= is.getline ("F",256);}
		if(is.get()=Mv)
		{line1= is.getline ("M",256);}

		if (is.good())
		cout<<line1;
	}

	is.close();
	return 0;
	//begin conversion
}