#include <stdio.h>

/**
 * 结构体指针
 *  结构体指针访问成员变量的方式：
 *    1. 结构体指针->成员变量
 *    2. (*结构体指针).成员变量
 */

# if 0
typedef struct  student{
  int num;
  int score;
}STU;
  
int main(void){
  STU stu = {10000,90};
  STU *p;      // 定义结构体指针
  p = &stu;    // 将结构变量赋值给结构体指针
  p->score = 95;
  (*p).score = 98;
  printf("学号：%d\n",p->num);
  printf("成绩：%d\n",(*p).score);
  return 0;
}

# endif


# if 1

typedef struct  student{
  int num;
  int score[3];
}STU;


int main(void){
  STU stu = {10000,{80,90,70}};
  STU *p;
  p = &stu;

  p->score[0] = 90;
  p->score[1] = 100;
  p->score[2] = 110;

  printf("学号：%d\n",p->num);
  printf("成绩1：%d\n",p->score[0]);
  printf("成绩2：%d\n",p->score[1]);
  printf("成绩3：%d\n",p->score[2]);

  return 0;
}

# endif