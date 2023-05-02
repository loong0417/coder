#include <stdio.h>

/**
 * �ṹ��ָ��
 *  �ṹ��ָ����ʳ�Ա�����ķ�ʽ��
 *    1. �ṹ��ָ��->��Ա����
 *    2. (*�ṹ��ָ��).��Ա����
 */

# if 0
typedef struct  student{
  int num;
  int score;
}STU;
  
int main(void){
  STU stu = {10000,90};
  STU *p;      // ����ṹ��ָ��
  p = &stu;    // ���ṹ������ֵ���ṹ��ָ��
  p->score = 95;
  (*p).score = 98;
  printf("ѧ�ţ�%d\n",p->num);
  printf("�ɼ���%d\n",(*p).score);
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

  printf("ѧ�ţ�%d\n",p->num);
  printf("�ɼ�1��%d\n",p->score[0]);
  printf("�ɼ�2��%d\n",p->score[1]);
  printf("�ɼ�3��%d\n",p->score[2]);

  return 0;
}

# endif