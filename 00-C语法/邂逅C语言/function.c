#include <stdio.h>

/**
 * C语言的函数使用却别与其它语言：
 *  1. C语言函数使用步骤：先定义函数，再声明函数，最后调用函数；
 *  2. 函数声明的作用是扩展函数的作用域；
 *  3. 在C语言中函数的调用依赖函数的顺序，被调函数一定得在主调函数前定义，否则就需要声明函数；
 *  4. 为了扩展函数得作用域，只能使用函数声明的方式；
 */

// 声明函数
void fun(void);
int add(int a,int b);

int main(){
  int sum = 0;
  // 调用函数
  fun();
  sum = add(20,30);
  printf("%d",sum);
  printf("helloworld!!!");
  return 0;
}

// 定义函数 fun
void fun(void){
  printf("杨小样的朋友圈！！！");
}

// 定义函数 add
int add(int a,int b){
  int c = 0;
  return c = a + b;
}