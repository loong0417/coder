const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:"《算法导论》",
        date:"2021-11",
        price:'100',
        count:1,
      },
      {
        id:2,
        name:"《HTML+CSS》",
        date:"2021-12",
        price:'92.5',
        count:1,
      },
      {
        id:3,
        name:"《你不知道的javascript》",
        date:"2021-09",
        price:'200',
        count:1,
      },
      {
        id:4,
        name:"《破茧成蝶》",
        date:"2021-08",
        price:'100',
        count:1,
      },
      {
        id:5,
        name:"《计算机网络》",
        date:"2021-01",
        price:'89',
        count:1,
      }
    ],
  },
  methods:{
    increment(index){
      return this.books[index].count++;
    },
    decrement(index){
      return this.books[index].count--;
    },
    removeHandler(index){
      return this.books.splice(index,1);
    }
  },

  computed:{
    totalPrice(){
      let total = 0;
      for(let i=0;i<this.books.length;i++){
        total+=this.books[i].count*this.books[i].price;
      }
      return total;
    }
  },

  filters:{
    /**
     * price handler
     */
    showPrice(price){
      // TypeError: price.toFixed is not a function
      // return '￥'+ price.toFixed(2);
      
      // toFixed只能针对数字类型才能使用，所以对于字符类型的要用parseFloat或者parseInt函数先转一下再调用
      return '￥'+  parseFloat(price).toFixed(2);
    }
  }
});