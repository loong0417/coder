#include <stdio.h>

int fun(int n);
int main(void){

  printf("%d", fun(5));
}
/**
 * 递归 
 */
int fun(int n){
  if(n<1){
    return -1;
  }else if(n==1){
    return 1;
  }else{
    return n*fun(n-1);
  }
}