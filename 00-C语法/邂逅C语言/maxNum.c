#include <stdio.h>

int main(void){
  int a = 0;
  int b = 0;
  int max = 0;

  printf("������a��b��ֵ��\n");
  scanf("%d%d",&a,&b);
  if(a>b){
    max = a;
    printf("���ֵ max ��%d",max);
  }else{
    max = b;
    printf("���ֵ max ��%d",max);
  }

 
  return 0;
}