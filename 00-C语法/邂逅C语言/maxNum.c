#include <stdio.h>

int main(void){
  int a = 0;
  int b = 0;
  int max = 0;

  printf("请输入a和b的值：\n");
  scanf("%d%d",&a,&b);
  if(a>b){
    max = a;
    printf("最大值 max ：%d",max);
  }else{
    max = b;
    printf("最大值 max ：%d",max);
  }

 
  return 0;
}