#include <stdio.h>

/**
 * �����ļ�����ʽ��
 *  1. �޲����޷���ֵ
 *  2. ���κ����޷���ֵ 
 *  3. �������з���ֵ
 */
void printNum();
void printNums(int n);
int printSum(int num);
int main(void){
  printNum();
  int n = 0;
  printf("������n��ֵ��");
  scanf("%d",&n);
  printNums(n);
  
  int num = 0;
  int return_num=0;
  printf("������num��ֵ��");
  scanf("%d",&num);
  return_num=printSum(num);
  if(return_num==-1){
    printf("ʵ��ֵ����С��0");
  }else{
    printf("sum��ֵ���ڣ�%d",return_num);
  }

 
  return 0;
}

/**
 *  1. �޲����޷���ֵ
 */
void printNum(){
  for (int i = 1; i <= 10; i++){
    printf("%d\n",i);
  }
}

/**
 * 2. ���κ����޷���ֵ 
 */
void printNums(int n){
  for (int i = 1; i <= n; i++)
  {
    printf("%d\n",i);
  }
}

/**
 * 3. �������з���ֵ
 */
int printSum(int num){
  long int sum = 1;
  if(num<1){
    return -1;
  }
  for (int i = 1; i <= num; i++)
  {
    sum+=i;
  }
  return sum;
}
