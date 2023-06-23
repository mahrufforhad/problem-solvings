#include <ext/pb_ds/assoc_container.hpp>
  using namespace __gnu_pbds;
  #define indexed_string_set tree<string,null_type,less<string>,rb_tree_tag,tree_order_statistics_node_update>
  #define indexed_int_set tree<int,null_type,less<int>,rb_tree_tag,tree_order_statistics_node_update>
  #define indexed_char_set tree<char,null_type,less<char>,rb_tree_tag,tree_order_statistics_node_update>
  //Variables
  const ll mod = 1e9+7;

  //functions
  int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int test_case;
    cin>>test_case;
    int k=1;
    while(test_case--){
      ll n,m;
      cin>>n>>m;
      vector<ll> v(n);
      for(ll i=0;i<n; i++){
        ll c;
        cin>>c;
        v[0]=c;
      }

      ll sum=0;
      for(ll i=0; i<n; i++){
        sum+=v[i];
      }

      ll ans;
      ans=sum%m;
      cout<<"Case "<<"#"<<k<<": "<<ans<<nl;
      k++;
    }
  }