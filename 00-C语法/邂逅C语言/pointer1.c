#include <stdio.h>
void pointer();
void pointer1();
void pointer2();

/**
 * ָ��ƫ��
 * 
 * int * ���� �� 4 ���ֽ�
 * char * ���� �� 1 ���ֽ�
 * double * ���� �� 8 ���ֽ�
 * float * ���� �� 4 ���ֽ� 
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
  // ������Կ��� char��int��float��double ָ�����ȫ��ռ 8 �ֽڣ���ʵ��ַռ8���ֽھ͹���
  // ������ vs2010��������ռ 4 ���ֽڵ�
  // 32λϵͳ��ָ�����32λ��Ҳ����4���ֽڡ�
  // 64λϵͳ��ָ�����64λ��Ҳ����8���ֽڡ�
  printf("%d\n",sizeof(p1));   // 8
  printf("%d\n",sizeof(p2));   // 8
  printf("%d\n",sizeof(p3));   // 8
  printf("%d\n",sizeof(p4));   // 8


  printf("----------------------\n");
}

/**
 * ָ�����ƫ�� 
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
  printf("2:%d\n",&ch+1);   // ��1�൱���ڴ��ַָ���ƫ������1�����ֽ��й�ϵchar��1���ֽ�
  printf("2:%d\n",&a+1);    // intƫ��һ��λ��ռ 4 ���ֽڣ����Լ�4
  printf("2:%d\n",&b+1);    // float ƫ��һ��λ��ռ 4 ���ֽڣ����Լ�4
  printf("2:%d\n",&d+1);    // double ƫ��һ��λ��ռ 8 ���ֽڣ����Լ�8

  printf("----------------------------\n");
}

// ע�⣺*p ��*����������ĸ������ĵ�ַ��*p����ľ����ĸ���������
void pointer2(){
  int a = 10;
  int *p;
  p = &a;

  printf("a��ֵ��%d\n",a);
  printf("a�ĵ�ַ��%d\n",&a);
  printf("p��ֵ��%d\n",p);
  printf("*p��ֵ��%d\n",*p);

  printf("*p��ֵ��%d\n",(*p)++);   // �൱�� a++��10
  printf("a��ֵ��%d\n",a);   // 11
  printf("a�ĵ�ַ��%d\n",&a);  // a �ĵ�ַ
  printf("p��ֵ��%d\n",p);     
  printf("*p��ֵ��%d\n",*p);  // 11

  printf("*p��ֵ��%d\n",++(*p));   // �൱�� ++a��12

  printf("*p��ֵ��%d\n",++*p);   // �൱�� ++a��13��*�Ǻź�++�Ӽ۵����ȼ���һ���ģ����ȼ�һ�����������㣩

  printf("*p��ֵ��%d\n",*p++);   //13������ p++,�ӵ��ǵ�ַ���� a ��ַ�Ļ����ϼ�1��ƫ������
  printf("a��ֵ��%d\n",a);   // 13
  printf("a�ĵ�ַ��%d\n",&a);  // a �ĵ�ַ 6421988
  printf("p��ֵ��%d\n",p);  // p �ĵ�ֵ 6421988 ���������õ�a��ַ��ƫ������
  printf("*p��ֵ��%d\n",*p);  // �൱�ڣ�&a+1����ֵ�����ʱ�� p �����Ұָ�롣

    printf("*p��ֵ��%d\n",*(p++));  // *p++ ���� *(p++)
}