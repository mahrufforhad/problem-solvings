#include <bits/stdc++.h>
using namespace std;

int main(){
  int weight;

  cin >> weight;

  if(weight%2 != 1 && weight>2){
    cout << "YES";
  }
  else {
    cout << "NO";
  }
}