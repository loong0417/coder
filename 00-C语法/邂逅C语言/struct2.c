#include <stdio.h>

struct student{
  int num;
  int score[3];
  double avg;
};

int main(void){
   struct student stu1 = {10000,{90,80,70},80.5};
   stu1.num = 10001;
   printf("ѧ�ţ�%d\n",stu1.num);
   printf("�ɼ�1��%d\n",stu1.score[0]);
   printf("�ɼ�2��%d\n",stu1.score[1]);
   printf("�ɼ�3��%d\n",stu1.score[2]);
   printf("ƽ���֣�%.2f\n",stu1.avg);
}



