#include <stdio.h>
#include "test1.c"

#define ROW 2
#define COL 3
#define NUM 5
// void outputArray(int r,int c);
// void inputArray(int arr[ROW][COL]);
void inputArray(int arr[],int nums);
void main(void){
  func();
//  outputArray(ROW,COL);
  // int nums[ROW][COL] = {{10,20,30},{40,50,60}};
  // inputArray(nums);
  int arr[NUM] = {10,20,30,40,50};
  int nums = sizeof(arr)/4;
  inputArray(arr,nums);
}

void inputArray(int arr[],int nums){
  for (int i = 0; i < nums; i++){
    printf("%d\t",arr[i]);
  }
}

// void inputArray(int arr[ROW][COL]){
//   for (int i = 0; i < ROW; i++){
//     for (int j = 0; j < COL; j++){
//         printf("%d\t",arr[i][j]);   
//     }
//     printf("\n");
//   }
// }

// void outputArray(int r,int c){
//   for (int i = 1; i <=ROW; i++){
//     for (int j = i; j <=COL; j++){
//       printf("%d*%d=%d\t",i,j,i*j);
//     }
//     printf("\n");
//   }
// }