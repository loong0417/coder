#include <stdio.h>

// 宏定义后面不需要加分号
#define SIZE 5

void input(int arr[], int len);
void output(int a[],int len);
int arr[SIZE]={};

int main(void){
  input(arr,SIZE);
  output(arr,SIZE);
} 

/**
 * 给数组添加数据（数组作为参数）
 */
void input(int arr[], int len){
  for (int i = 0; i < len; i++){
    printf("请输入数字%d的值:",i+1);
    scanf("%d",&arr[i]);
  }
}

/**
 * 输出数组中的数据（数组作为参数）
 */
void output(int a[],int len){
  for(int i=0;i<len;i++){
    printf("输出数字%d的值:",i+1);
    printf("%d\n",a[i]);
  }
}