#include <stdio.h>

// int fun(int b);
// int main(void)
// {
//   int a = 10;
//   fun(a);
//   printf("%d\n",a);
//   return 0;
// }

// int fun(int b){
//   b = 30;
// }

/**
 * 将指针变量作为函数参数使用 
 */

# if 0
int fun(int *b);
int main(void)
{
  int a = 10;
  fun(&a);
  printf("%d\n",a);
  return 0;
}
int fun(int *b){
  *b = 30;
}
# endif


# if 1
int fun(int *a, int *b);
int main(void)
{
  int a = 10;
  int b = 20;
  fun(&a,&b);
  printf("%d\n",a);
  printf("%d\n",b);
  return 0;
}
int fun(int *a,int *b){
  int temp = 0;
  temp = *a;
  *a = *b;
  *b = temp;
}
# endif