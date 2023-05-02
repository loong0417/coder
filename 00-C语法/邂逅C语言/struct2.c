#include <stdio.h>

struct student{
  int num;
  int score[3];
  double avg;
};

int main(void){
   struct student stu1 = {10000,{90,80,70},80.5};
   stu1.num = 10001;
   printf("学号：%d\n",stu1.num);
   printf("成绩1：%d\n",stu1.score[0]);
   printf("成绩2：%d\n",stu1.score[1]);
   printf("成绩3：%d\n",stu1.score[2]);
   printf("平均分：%.2f\n",stu1.avg);
}



