#include <stdio.h>

/**
 * 二维数组与指针 
 */
int main(void){
    int array[3][3] = {{10,20,30},{40,50,60},{70,80,90}};
    int (*p)[3];

    p = &array[0];
    printf("%d\n",p);
    printf("%d\n",p+1);


    int * p1[3];
    p1[3] = array[0];

    printf("%d\n",array[0]);
    printf("%d\n",array[0]+1);



    //int *(p1[5]);  //指针数组，可以去掉括号直接写作 int *p1[5];
    //int (*p2)[5];  //二维数组指针，不能去掉括号
}