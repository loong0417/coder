#include <stdio.h>

/**
 * ָ�����ά���� 
 */
int main(void){
  int array[3][3] = {{10,20,30},{40,50,60},{70,80,90}};
  int *p;
  // p = array;   // ������Ǵ���ģ���Ϊ &array[0] ���൱��1��Ԫ�أ��� p ֻ�ܰ�һ��Ԫ�ء�
  p = &array[0][0];  
  // array��&array��array[0]��&array[0][0]��&array ��������ȵģ�����ȡ array ������Ԫ�ص�ַ
  printf("%d\n",array);  
  printf("%d\n",&array);    
  printf("%d\n",array[0]);
  printf("%d\n",&array[0][0]);
  printf("%d\n",&array);
  printf("%d\n",&array[0]);

  printf("%d",array[0][0]);   // 10
  printf("----------------------------\n");
  printf("%d\n",p);       // ��ַ
  printf("%d\n",p+1);
  printf("%d\n",p+2);
  printf("%d\n",p+3);
  printf("%d\n",p+4);
  printf("%d\n",p+5);
  printf("%d\n",p+6);
  printf("%d\n",p+7);
  printf("%d\n",p+8);
  printf("-------------------------------\n");
  printf("%d\n",*p);         // ֵ
  printf("%d\n",*(p+1));
  printf("%d\n",*(p+2));
  printf("%d\n",*(p+3));
  printf("%d\n",*(p+4));
  printf("%d\n",*(p+5));
  printf("%d\n",*(p+6));
  printf("%d\n",*(p+7));
  printf("%d\n",*(p+8));

  printf("-------------------------------\n");

  printf("%d\n",array[0]+0);     // ��ַ
  printf("%d\n",array[0]+1);
  printf("%d\n",array[0]+2);
  printf("%d\n",array[1]+0);
  printf("%d\n",array[1]+1);
  printf("%d\n",array[1]+2);
  printf("%d\n",array[2]+0);
  printf("%d\n",array[2]+1);
  printf("%d\n",array[2]+2);

  printf("-------------------------------\n");

  
  printf("%d\n",*(array+0)+0);     // ��ַ  ��������
  printf("%d\n",*(array+0)+1);
  printf("%d\n",*(array+0)+2);
  printf("%d\n",*(array+1)+0);
  printf("%d\n",*(array+1)+1);
  printf("%d\n",*(array+1)+2);
  printf("%d\n",*(array+2)+0);
  printf("%d\n",*(array+2)+1);
  printf("%d\n",*(array+2)+2);


  printf("-------------------------------\n");

  printf("%d\n",*(array[0]+0));    // ֵ
  printf("%d\n",*(array[0]+1));
  printf("%d\n",*(array[0]+2));
  printf("%d\n",*(array[1]+0));
  printf("%d\n",*(array[1]+1));
  printf("%d\n",*(array[1]+2));
  printf("%d\n",*(array[2]+0));
  printf("%d\n",*(array[2]+1));
  printf("%d\n",*(array[2]+2));


  int (*p2)[5];

  return 0;
}