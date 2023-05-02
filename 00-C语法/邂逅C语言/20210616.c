#include <stdio.h>
#include <string.h>
#define MUL(r)r*r   
extern void fun(int i);

# if 0
void main(void){
  int m = 7,n=5;
  fun(n);
  printf("%d\n",m);
}

void fun(int i){
  int m = 2;
  m = i++;
  printf("%d\n",m);
}

# endif

// void main(){
//   int m = 5,n=0;

//   n = m++;
//   printf("%d",n);   // 5
//   printf("%d",n);   // 5
// }



# if 0
void main(){
  int a[3] = {1,2,3};

  // printf("%d\n",&a[0]);
  // printf("%d",&a[1]);
  int *num[3];      // 定义指针数组，里面又3个元素
  int **p,i;
  for ( i = 0; i < 3; i++){
    num[i]=&a[i];
    p = num;
  }
  printf("%d",**p);    // 1
}

# endif


void main(){
  // int a = 1;
  // printf("%d,%d,%d\n",a,++a,a++);    // 3,3,1
 


//  int a[8]={1,2,3,4,5,6,7,8},i,x=0;
//     for(i=0;i<8;i++,i++){
//       x=x+a[i];
//     }

//     printf("%d",x);  // 16


// char str[80];
// strcpy(str,"computer");
// printf("%d",strlen(str));


  // 这是一个共用体，共用体变量的长度是共用体中最长成员的长度，即为float y[3]的长度4*3=12位

  // union u_type {
  //   int x;
  //   float y[3];
  //   char z; 
  //   }a;
  // printf("%d",sizeof(a));   // 12

  // char str = "a";
  // char str1 = 'a';

  // printf("%d,%d",sizeof(str),sizeof(str1));



    // int a = 1,b = 2, c = 3,d = 4,t = 2, k = 2;
    // if((t=a<b) || (k=c<d)){
    //   printf("%d",k);    // 2
    // }
  

  //  int a,b; 
  //  for(a=1,b=1;a<=100;a++){    
  //    if(b>=20) break; 
  //    if(b%3==1){ 
  //      b+=3; continue; 
  //      } 
  //      b-=5; 
  //  } 


  // char s[] = "info\0mis";
  // printf("%d",strlen(s));   // 4


  //   int a=2,b=3,c; 
  //   c=MUL(a+b)*2; 
  //   printf("%d",c);   



  // char a[]="abc";
  // char b[]="xyz";
  // char c[10]; 
  // strcpy(c,a);
  // strcat(c,b);  
  // printf("%s",c);

  

}
