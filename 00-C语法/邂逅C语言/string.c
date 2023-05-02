#include <stdio.h>
#include <string.h>


# if 0
int main(void){
  printf("%s\n","杨小样的朋友圈！！！！");
  // sizeof()函数是在结束的时候自己在后面再添加一个 \0 所以占了8个字节
  printf("占的字节数：%d\n",sizeof("abc\0efg"));    // 8

  // 字符串长度为 3 ，是因为strlen()函数遇上了 \0 就结束了。
  printf("字符串a的长度：%d\n",strlen("abc\0efg"));  // 3
  return 0;
}

# endif

# if 0
/**
 * 字符与数组 
 */
int main(void){
  char str[5] = {'A','B','C','D','E'};

  // 输出结果 ABCDE? 是因为数组长度不够，字符串%s在结束的时候会自动添加一个\0作为结束符。
  printf("%s\n",str);  // ABCDE? 

  char arr[5] = "ABCD";
  printf("%s\n",arr);  // ABCD 

  char strs[] = "ABCDEFG";
  printf("%s\n",strs); 

  // 可以通过字符数组的下标对字符数组进行修改
  strs[0] = 'P';
  printf("%s\n",strs); 

  // 数组名对应的是数组首元素的值，所以数组名是一个常量，不能给数组名直接重新赋值。
  // strs = "SDFGH";
  printf("%s\n",strs); 
}

# endif


# if 0
/**
 * 字符与指针 
 */
int main(void){
  char str[10] = "ABCD";
  char *p;
  p = str;   // p=&str[0]
  printf("%s\n",str);  // ABCD 从首地址开始输出字符串

  // 从第二个开始输出字符串
  p = &str[2];
  printf("%s\n",p);   // CD


  char *p1;
  // p1 指向字符串常量的首地址
  p1 = "ZXCV";
  printf("%s\n",p1);

  // *p1 = "W";  ERROR 字符串常量的值不能修改
  printf("%s\n",p1);
}
# endif


# if 1
/**
 * 字符串处理函数
 */
int main(void){

}
# endif