#include <stdio.h>

// �൱�ڸ� int ���Ͷ�����һ������ I
typedef int I;

typedef struct student{
  int num;
  int score[3];
  float avg;
}STU;

int main(void){
  I num = 10;
  printf("%d\n",sizeof(I));   // 4 ���ֽ�
  struct student stu1 = {10000,{70,80,90},80.5};
  STU stu2 = {20000,{60,70,80},70.5}; 
  
  printf("ѧ�ţ�%d,",stu1.num);
  for (int i = 0; i < 3; i++){
    printf("�ɼ�%d�ķ����ǣ�%d,",i+1,stu1.score[i]);
  }
  printf("ƽ���֣�%.2f\n",stu1.avg);

  printf("ѧ�ţ�%d,�ɼ�1��%d,�ɼ�2��%d,�ɼ�3��%d,ƽ���֣�%.2f\n",stu2.num,stu2.score[0],stu2.score[1],stu2.score[2],stu2.avg);
  return 0;
}