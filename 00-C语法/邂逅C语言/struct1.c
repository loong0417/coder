#include <stdio.h>


struct student{
  int num;
  int age;
  float score;
  double avg;
};


int main(void){
    struct student stu1 = {10,20,14.5,20};
    stu1.num = 10000;
    printf("%d",stu1.num);
}



