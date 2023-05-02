#include <stdio.h>
void pointer();
void pointer1();
void pointer2();

/**
 * 指针偏移
 * 
 * int * —— 绑定 4 个字节
 * char * —— 绑定 1 个字节
 * double * —— 绑定 8 个字节
 * float * —— 绑定 4 个字节 
 */
int main(){
  // pointer();
  pointer1();
  // pointer2();
}

void pointer(){
  char ch = 0;
  int a = 0;
  float b = 0;
  double d = 0;

  char *p1;
  int *p2;
  float *p3;
  double *p4;

  printf("%d\n",sizeof(ch));   // 1
  printf("%d\n",sizeof(a));    // 4
  printf("%d\n",sizeof(b));    // 4
  printf("%d\n",sizeof(d));    // 8

  printf("----------------------\n");
  // 这里可以看到 char，int，float，double 指针变量全部占 8 字节，其实地址占8个字节就够了
  // 但是在 vs2010里面它是占 4 个字节的
  // 32位系统的指针就是32位，也就是4个字节。
  // 64位系统的指针就是64位，也就是8个字节。
  printf("%d\n",sizeof(p1));   // 8
  printf("%d\n",sizeof(p2));   // 8
  printf("%d\n",sizeof(p3));   // 8
  printf("%d\n",sizeof(p4));   // 8


  printf("----------------------\n");
}

/**
 * 指针变量偏移 
 */
void pointer1(){
  char ch = 0;
  int a = 0;
  float b = 0;
  double d = 0;

  char *p1 = &ch;
  int *p2 = &a;
  float *p3 = &b;
  double *p4 = &d;

  printf("1:%d\n",&ch);
  printf("1:%d\n",&a);
  printf("1:%d\n",&b);
  printf("1:%d\n",&d);
  printf("----------------------------\n");
  printf("2:%d\n",&ch+1);   // 加1相当于内存地址指针的偏移量加1，和字节有关系char加1个字节
  printf("2:%d\n",&a+1);    // int偏移一个位置占 4 个字节，所以加4
  printf("2:%d\n",&b+1);    // float 偏移一个位置占 4 个字节，所以加4
  printf("2:%d\n",&d+1);    // double 偏移一个位置占 8 个字节，所以加8

  printf("----------------------------\n");
}

// 注意：*p ，*后面跟的是哪个变量的地址，*p代表的就是哪个变量本身
void pointer2(){
  int a = 10;
  int *p;
  p = &a;

  printf("a的值：%d\n",a);
  printf("a的地址：%d\n",&a);
  printf("p的值：%d\n",p);
  printf("*p的值：%d\n",*p);

  printf("*p的值：%d\n",(*p)++);   // 相当于 a++，10
  printf("a的值：%d\n",a);   // 11
  printf("a的地址：%d\n",&a);  // a 的地址
  printf("p的值：%d\n",p);     
  printf("*p的值：%d\n",*p);  // 11

  printf("*p的值：%d\n",++(*p));   // 相当于 ++a，12

  printf("*p的值：%d\n",++*p);   // 相当于 ++a，13（*星号和++加价的优先级是一样的，优先级一样从右往左算）

  printf("*p的值：%d\n",*p++);   //13，先算 p++,加的是地址（在 a 地址的基础上加1个偏移量）
  printf("a的值：%d\n",a);   // 13
  printf("a的地址：%d\n",&a);  // a 的地址 6421988
  printf("p的值：%d\n",p);  // p 的地值 6421988 （这里是拿的a地址的偏移量）
  printf("*p的值：%d\n",*p);  // 相当于（&a+1）的值，这个时候 p 变成了野指针。

    printf("*p的值：%d\n",*(p++));  // *p++ 等于 *(p++)
}