#include <stdio.h>
#include <string.h>


# if 0
int main(void){
  printf("%s\n","��С��������Ȧ��������");
  // sizeof()�������ڽ�����ʱ���Լ��ں��������һ�� \0 ����ռ��8���ֽ�
  printf("ռ���ֽ�����%d\n",sizeof("abc\0efg"));    // 8

  // �ַ�������Ϊ 3 ������Ϊstrlen()���������� \0 �ͽ����ˡ�
  printf("�ַ���a�ĳ��ȣ�%d\n",strlen("abc\0efg"));  // 3
  return 0;
}

# endif

# if 0
/**
 * �ַ������� 
 */
int main(void){
  char str[5] = {'A','B','C','D','E'};

  // ������ ABCDE? ����Ϊ���鳤�Ȳ������ַ���%s�ڽ�����ʱ����Զ����һ��\0��Ϊ��������
  printf("%s\n",str);  // ABCDE? 

  char arr[5] = "ABCD";
  printf("%s\n",arr);  // ABCD 

  char strs[] = "ABCDEFG";
  printf("%s\n",strs); 

  // ����ͨ���ַ�������±���ַ���������޸�
  strs[0] = 'P';
  printf("%s\n",strs); 

  // ��������Ӧ����������Ԫ�ص�ֵ��������������һ�����������ܸ�������ֱ�����¸�ֵ��
  // strs = "SDFGH";
  printf("%s\n",strs); 
}

# endif


# if 0
/**
 * �ַ���ָ�� 
 */
int main(void){
  char str[10] = "ABCD";
  char *p;
  p = str;   // p=&str[0]
  printf("%s\n",str);  // ABCD ���׵�ַ��ʼ����ַ���

  // �ӵڶ�����ʼ����ַ���
  p = &str[2];
  printf("%s\n",p);   // CD


  char *p1;
  // p1 ָ���ַ����������׵�ַ
  p1 = "ZXCV";
  printf("%s\n",p1);

  // *p1 = "W";  ERROR �ַ���������ֵ�����޸�
  printf("%s\n",p1);
}
# endif


# if 1
/**
 * �ַ���������
 */
int main(void){

}
# endif