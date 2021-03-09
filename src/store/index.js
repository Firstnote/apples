import { makeAutoObservable } from "mobx";
const ajax = () => {
  //模拟摘苹果请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
};

class Apple {
  //模拟苹果
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    this.has_eat = false;
  }
  static newapple(name) {
    const weight = 200 + Math.floor(Math.random() * 10);
    return new this(name, weight);
  }
}
class AppleBasketClass {
  // store
  basket = [];
  length = 0;
  isgetting = false; //正在摘苹果
  constructor() {
    makeAutoObservable(this);
  }
  getApple = async () => {
    //摘苹果
    if (this.isgetting) {
      return;
    }
    try {
      this.isgetting = true;
      await ajax();
      this.length += 1;
      const apple = Apple.newapple(this.length);
      this.basket.push(apple);
      this.isgetting = false;
    } catch (error) {
      this.isgetting = false;
    }
  };
  eatApple = (payload) => {
    //吃苹果
    let index = this.basket.findIndex((item) => item.name === payload);
    let item = this.basket[index];
    item.has_eat = true;
    this.basket.splice(index, 1, item);
  };
  get has_eat_apples() {
    //已经吃掉的苹果
    return this.basket.filter((item) => item.has_eat === true);
  }
  get not_eat_apples() {
    //还没吃掉的苹果
    return this.basket.filter((item) => item.has_eat === false);
  }
  get has_eat_weight() {
    //已经吃掉的重量
    return this.has_eat_apples.reduce((a = 0, b) => a + b.weight, 0);
  }
  get has_eat_number() {
    //已经吃掉的数量
    return this.has_eat_apples.length;
  }
  get not_eat_weight() {
    //还没吃掉的重量
    return this.not_eat_apples.reduce((a = 0, b) => a + b.weight, 0);
  }
  get not_eat_number() {
    //还没吃掉的数量
    return this.not_eat_apples.length;
  }
}

const AppleBasket = new AppleBasketClass();
export default AppleBasket;
