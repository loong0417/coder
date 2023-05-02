#include <stdio.h>

#define COL 3

struct student{
 int num;
 int score;
 float avg;
};


int main(){
  // 结构体数组
  struct student class[COL]= {{10000,80,80.5},{20000,60,80.1},{30000,50,70.5}};

  for(int i=0; i<COL; i++){
    printf("学号：%d,成绩：%d,平均分：%.2f\n",class[i].num,class[i].score,class[i].avg);
  }
}



// struct book {
//     int amount;
//     double price;
//     char * name;
// };
// int main(){
//   struct book bo[3] = {
//             { 2, 53.2, "雾都孤儿" },
//             { 1, 53.2, "斗破苍穹" }, 
//             { 2, 53.2,"双城记" }
//                   };
//   //方法二
//   for (int i = 0; i < 3; i++) {
//     printf("%d , %.2lf , %s\n", bo[i].amount, bo[i].price, bo[i].name);
//   }
 
// }

