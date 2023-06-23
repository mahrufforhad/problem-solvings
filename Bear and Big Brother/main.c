#include <stdio.h>
#include <math.h>

int main(){
  double a, b;
  
  scanf("%lf %lf", &a, &b);
  
  double y = log10(b/a) / log10(1.5) + 1;

  printf("%d", (int)y);

  return 0;
}