#include <stdio.h>

// �궨����治��Ҫ�ӷֺ�
#define SIZE 5

void input(int arr[], int len);
void output(int a[],int len);
int arr[SIZE]={};

int main(void){
  input(arr,SIZE);
  output(arr,SIZE);
} 

/**
 * ������������ݣ�������Ϊ������
 */
void input(int arr[], int len){
  for (int i = 0; i < len; i++){
    printf("����������%d��ֵ:",i+1);
    scanf("%d",&arr[i]);
  }
}

/**
 * ��������е����ݣ�������Ϊ������
 */
void output(int a[],int len){
  for(int i=0;i<len;i++){
    printf("�������%d��ֵ:",i+1);
    printf("%d\n",a[i]);
  }
}