#include <stdio.h>

// extern void func();

# if 0
void main(){
  // printf("������չ�ļ�����\n");
  int a=1;  
  printf("%d, %d, %d\n", a, ++a, a++);
}

# endif


# if 0
int main(void){
  int a[][4] = {1,2,3,4,5,6,7,8};
  printf("%d",sizeof(a[0][1]));   // 4
}
# endif


# if 0
int main(void){
 int m = 7,n = 4;
 float x = 3.0,y = 8.0,k;

 k = m/2+n*x/y;
 printf("%f",k);    // 4.5
}
# endif


# if 0
int main(void){
 int m = 7;
 float k = 5.5;
 printf("%f",k+m%2/4);   // 5.5
}
# endif



# if 1
int main(void){
  int num = 1001;    // ��������ƺ���
  int *home = &num;  // �������ƺ����ַд��Сֽ���ϣ��������

  printf("%d\n",home);   
  printf("%d\n",*home);  // ͨ���鿴Сֽ����֪����ַ�����ƺ��룩��ӷ���

  printf("%d\n",num);    // ���Լ������Դ������ˣ���ס���ƺ��룩ֱ�ӷ���
  printf("%d\n",&num);   
  return 0;
}

# endif


