#include <stdio.h>
/**
 * 使用三元运算符的方式 
 */
int main(void){
  int a = 0;
  int b = 0;
  int max = 0;
  printf("请输入a和b的值：\n");
  scanf("%d%d",&a,&b);
  max = a>b?a:b;

  printf("最大值是：%d",max);
  return 0;
}