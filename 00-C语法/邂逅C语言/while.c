#include <stdio.h>

int main(){
   
   int a = 0;
   int sum = 0;
   while(a <= 10)
   {
      printf("a:%d\n", a);
      sum+=a;
      a++;
   }
   printf("sum:%d\n",sum);
   return 0;
}