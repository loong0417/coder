#include <stdio.h>

/**
 * 空指针
 * 野指针 
 * 空指针和野指针都是不能访问的。
 */
// int main(void){
//   int a = 0;
//   // 空指针
//   int *p = NULL;   // 和 int *p = 0 是一样的（#define Null 0）
//   *p = 20;   // 错误，p是空指针，无法访问
//   printf("%d",*p);

//   return 0;
// }



int main(void){
  int a = 0;
  int *p = NULL;
  p = &a;   // 将 &a 的地址赋值给 p
  *p = 20;
  {
    int b = 30;
    p = &b;   // 这个位置改变 p ，将 &b 的地址赋值给 p，代码块作用域结束后 b 就销毁了
  }
  *p = 50; // p 是野指针
  printf("%d\n",a);  // 20
  printf("%d\n",*p);  // 50
  
  return 0;
}