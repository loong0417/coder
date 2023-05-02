#include <stdio.h>

// 相当于给 int 类型定义了一个别名 I
typedef int I;

typedef struct student{
  int num;
  int score[3];
  float avg;
}STU;

int main(void){
  I num = 10;
  printf("%d\n",sizeof(I));   // 4 个字节
  struct student stu1 = {10000,{70,80,90},80.5};
  STU stu2 = {20000,{60,70,80},70.5}; 
  
  printf("学号：%d,",stu1.num);
  for (int i = 0; i < 3; i++){
    printf("成绩%d的分数是：%d,",i+1,stu1.score[i]);
  }
  printf("平均分：%.2f\n",stu1.avg);

  printf("学号：%d,成绩1：%d,成绩2：%d,成绩3：%d,平均分：%.2f\n",stu2.num,stu2.score[0],stu2.score[1],stu2.score[2],stu2.avg);
  return 0;
}