#include <stdio.h>

// extern void func();

# if 0
void main(){
  // printf("我是扩展文件函数\n");
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
  int num = 1001;    // 家里的门牌号码
  int *home = &num;  // 家里门牌号码地址写在小纸条上，存放起来

  printf("%d\n",home);   
  printf("%d\n",*home);  // 通过查看小纸条，知道地址（门牌号码）间接访问

  printf("%d\n",num);    // 我自己记在脑袋里面了（记住门牌号码）直接访问
  printf("%d\n",&num);   
  return 0;
}

# endif


