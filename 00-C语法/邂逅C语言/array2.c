#include <stdio.h>

#define ROW 2
#define COL 3

void inputArray(int arr[ROW][COL]);
int arr[2][3] = {20,30,40,50,60,70};

int main(void){
  inputArray(arr);
}

/**
 * 将二维数组作为参数 
 */
void inputArray(int arr[ROW][COL]){
  for (int i = 0; i < ROW; i++){
    for (int j = 0; j < COL; j++){
      printf("%d\t",arr[i][j]); 
    }
    printf("\n");
  }
  
}


