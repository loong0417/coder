#include <stdio.h>
void pointer();
void pointer1();

/**
 * 什么是指针？
 *  1. 指针是变量存储的地址 
 *  2. 怎么获取变量地址：&（取地址符号）
 */
void main(void){
  // pointer();

  pointer1();
}

void pointer(){
  int a = 100;
  /*
    1. 不能将变量的地址赋值给一个普通变量，在编译的时候会报错；
      int b = &a;
      printf("%d",b);
  */

  /*
    2. 不能给指针变量赋普通变量值，只能将普通变量地址赋值给指针变量
      int *b; // 声明一个指针变量
      b = &a;
      printf("%d",b);

      b = a;
      b = 100;
      printf("%d",b);
  */

    
  printf("输出a的值是：%d\n",a);
  printf("十进制输出a的地址：%d\n",&a);
  printf("十六进制输出a的地址：%x\n",&a);
  printf("以十六进制输出a的地址：%p\n",&a);
}


void pointer1(){
  int a = 0;
  int b = 0;
  int *p;
  a = 10;
  p = &a;  // p存放a的地址（p指向a的内存块）
  
  printf("a的值：%d\n",a);       // a的值：10
  printf("a的地址：%d\n",&a);    // a的地址，十进制输出
  printf("p的值：%d\n",p);       // p的值存放的是 a 的地址
  printf("p的地址：%d\n",&p);    // p自己开辟的内存地址
  printf("*p的值：%d\n",*p);     // *p 是 a 的值 10（*星号属于间接访问地址）

  *p = 20; // *（星号）在这里是间接访问修饰符，间接访问 a 存放的地址
  printf("a的值：%d\n",a);       // a的值：20
  printf("*p的值：%d\n",*p);       // p的值：20

  p = &b;
  *p = 50;    // 将b的地址赋值给p，这时候 p 和 a 没啥关系了。
  printf("a的值：%d\n",a);       // a的值：20
  printf("b的值：%d\n",b);        // b的值：50
  printf("*p的值：%d\n",*p);       // *p的值：50
}