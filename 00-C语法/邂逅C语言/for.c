#include <stdio.h>

int main(void){
  int n = 0;
  int sum = 0;

  printf("ÇëÊäÈënµÄÖµ£º");
  scanf("%d",&n);
  for (int i = 0; i <= n; i++){
    sum+=i;
  }
  printf("%d\n",sum);
  return 0;
}