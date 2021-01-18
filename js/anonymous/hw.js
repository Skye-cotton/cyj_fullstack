class Book{
    constructor(isbn,title,author){
        this.isbn = isbn;
        this.title =title;
        this.author = author;
    }
    display(){
        return `
            ISBN号：${this.isbn}
            TITLE: ${this.title}
            AUTHOR:${this.author}
        `
    }
}
// 作业 返回所有对象上可以调用的方法或属性 attrs
const jsDontKnow = new Book('111','aa','bbbb');
const n=jsDontKnow;
const arrs =[]
// while(Object.getOwnPropertyNames(n) != null){
    
    
//     // n=n.parent()
// }

// if(Object.getOwnPropertyNames(n) != null){
//     arrs.push(...Object.getOwnPropertyNames(n))
// }

function fn(){
   const a= Object.getOwnPropertyNames(jsDontKnow).__proto__
//    console.log(a);
return a
}

while(Object.getOwnPropertyNames(n).__proto__ != null){
   
    arrs.push(...Object.getOwnPropertyNames(n))
}