#include <stdio.h>

/**
 * 指针与二维数组 
 */
int main(void){
  int array[3][3] = {{10,20,30},{40,50,60},{70,80,90}};
  int *p;
  // p = array;   // 这个绑定是错误的，因为 &array[0] 这相当于1行元素，而 p 只能绑定一个元素。
  p = &array[0][0];  
  // array，&array，array[0]，&array[0][0]，&array 四者是相等的，都是取 array 数组首元素地址
  printf("%d\n",array);  
  printf("%d\n",&array);    
  printf("%d\n",array[0]);
  printf("%d\n",&array[0][0]);
  printf("%d\n",&array);
  printf("%d\n",&array[0]);

  printf("%d",array[0][0]);   // 10
  printf("----------------------------\n");
  printf("%d\n",p);       // 地址
  printf("%d\n",p+1);
  printf("%d\n",p+2);
  printf("%d\n",p+3);
  printf("%d\n",p+4);
  printf("%d\n",p+5);
  printf("%d\n",p+6);
  printf("%d\n",p+7);
  printf("%d\n",p+8);
  printf("-------------------------------\n");
  printf("%d\n",*p);         // 值
  printf("%d\n",*(p+1));
  printf("%d\n",*(p+2));
  printf("%d\n",*(p+3));
  printf("%d\n",*(p+4));
  printf("%d\n",*(p+5));
  printf("%d\n",*(p+6));
  printf("%d\n",*(p+7));
  printf("%d\n",*(p+8));

  printf("-------------------------------\n");

  printf("%d\n",array[0]+0);     // 地址
  printf("%d\n",array[0]+1);
  printf("%d\n",array[0]+2);
  printf("%d\n",array[1]+0);
  printf("%d\n",array[1]+1);
  printf("%d\n",array[1]+2);
  printf("%d\n",array[2]+0);
  printf("%d\n",array[2]+1);
  printf("%d\n",array[2]+2);

  printf("-------------------------------\n");

  
  printf("%d\n",*(array+0)+0);     // 地址  ？？？？
  printf("%d\n",*(array+0)+1);
  printf("%d\n",*(array+0)+2);
  printf("%d\n",*(array+1)+0);
  printf("%d\n",*(array+1)+1);
  printf("%d\n",*(array+1)+2);
  printf("%d\n",*(array+2)+0);
  printf("%d\n",*(array+2)+1);
  printf("%d\n",*(array+2)+2);


  printf("-------------------------------\n");

  printf("%d\n",*(array[0]+0));    // 值
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