#include <stdio.h>


#define ROW 2
#define COL 3


int inputArr();
int inputArray();
int ArrayMax();
void main(void){
  inputArr();
  printf("---------------------\n");
  inputArray();
  printf("---------------------\n");
  ArrayMax();
}

/**
 * 按行遍历数组
 */
int inputArr(){
  // 定义数组 2 行 3 列
  int arr[ROW][COL] = {{10,20,30},{40,50,60}};
  for (int i = 0; i < ROW; i++){
    for (int j = 0; j < COL; j++){
      printf("%d\t",arr[i][j]);
    }
    printf("\n");
  }
  return 0;
}

/**
 *  案列遍历数组
 */
int inputArray(){
  // 定义数组 2 行 3 列
  int arr[ROW][COL] = {{10,20,30},{40,50,60}};
   for(int j=0;j<COL;j++){
    for(int i=0;i<ROW;i++){
      printf("%d\t",arr[i][j]);
    }
    printf("\n");
  }
  return 0;
}

/**
 * 求二维数组中的最大数字 
 */
int ArrayMax(){
  int arr[ROW][COL] = {{10,20,60},{40,50,30}};
  int max = arr[0][0];   //假设0是最大值
  int row = 0;
  int col = 0;
  for(int i=0;i<ROW;i++){
    for(int j=0;j<COL;j++){
      if(arr[i][j]>max){
        max= arr[i][j];
        row = i;
        col = j;
      }
    }
  }
  printf("max=%d,row=%d,col=%d",max,row,col);
  return 0;
}

/**
 * 定义二行三列的数组 
 */
void defineArray(){
  // 按行的方式赋值
  // int arr[ROW][COL] = {{10,20,30},{40,50,60}};

  // 按存储顺序的方式赋值
  // int array[ROW][COL] = {100,200,300,400,500,600};

  // 定义数组的时候行数可以省略，列数不能省略
  // int arrays[][COL] = {100,200,300,400,600};

  // 行括号里面的值不能省略，无数据用 0 填充
  //int num[ROW][COL] = {{100,200,300},{}};

  // int num[ROW][COL] = {{100,200,300},{0}};
  
}