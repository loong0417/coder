#include <stdio.h>
/**
 * ʹ����Ԫ������ķ�ʽ 
 */
int main(void){
  int a = 0;
  int b = 0;
  int max = 0;
  printf("������a��b��ֵ��\n");
  scanf("%d%d",&a,&b);
  max = a>b?a:b;

  printf("���ֵ�ǣ�%d",max);
  return 0;
}