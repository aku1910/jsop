//TASK 1

// class products {
//     constructor(count, name, price) {
//         this.count = count
//         this.name = name
//         this.price = price
//     }
// }
// function hesabla(...product){
//     let totalprice=0
//     for (let i = 0; i < product.length; i++){
//    const products=product[i]
//    totalprice+=products.count*products.price
//     }
//     console.log("Total Price",totalprice,"AZN")
//     }
//     const coffee=new products(5,"coffee",3)
//     const tea=new products(2,"tea",0.5)
//     const fanta=new products(1,"fanta",2)
//     hesabla(coffee,tea,fanta)



//task2
// function minimum(arr,callback){
//     let min=arr[0]
//     for (let i = 0; i< arr.length; i++){
//         if(arr[i]<min){
//            min=arr[i]
//         }
//     }  
//     return callback(min)
//     }
//     function Output(output){
//         console.log(output)
//     }
//     let arr=[32,1,3,4,66,5]
//     let bollean=Array.isArray(arr)
//     if(bollean){
//         minimum(arr,Output)
//     }else{
//     console.log("array deyil");
//     }



//task3
// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.eat = "";
//         this.walk = "";
//     }

//     Eat(food) {
//         this.eat = `yeyir ${food}`;
//     }

//     Walk(distance) {
//         this.walk = `walking ${distance}`;
//     }

//     GetInfo() {
//         return `${this.name} ${this.eat} ${this.walk}`;
//     }
// }

// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     Fly(distance) {
//         this.walk = `ucur ${distance}`;
//     }

//     GetInfo() {
//         return `${this.name} ${this.eat} ${this.walk}`;
//     }
// }

// let bird1 = new Bird("serce");
// bird1.Eat("ot");
// bird1.Walk("50m");
// bird1.Fly("1km");

// console.log(bird1.GetInfo());





