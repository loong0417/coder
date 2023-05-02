#include <stdio.h>

/**
 * 函数的集中形式：
 *  1. 无参数无返回值
 *  2. 带参函数无返回值 
 *  3. 带参数有返回值
 */
void printNum();
void printNums(int n);
int printSum(int num);
int main(void){
  printNum();
  int n = 0;
  printf("请输入n的值：");
  scanf("%d",&n);
  printNums(n);
  
  int num = 0;
  int return_num=0;
  printf("请输入num的值：");
  scanf("%d",&num);
  return_num=printSum(num);
  if(return_num==-1){
    printf("实参值不能小于0");
  }else{
    printf("sum的值等于：%d",return_num);
  }

 
  return 0;
}

/**
 *  1. 无参数无返回值
 */
void printNum(){
  for (int i = 1; i <= 10; i++){
    printf("%d\n",i);
  }
}

/**
 * 2. 带参函数无返回值 
 */
void printNums(int n){
  for (int i = 1; i <= n; i++)
  {
    printf("%d\n",i);
  }
}

/**
 * 3. 带参数有返回值
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
