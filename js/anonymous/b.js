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
const attrs = [...Object.getOwnPropertyNames(jsDontKnow), ...Object.getOwnPropertyNames(Book.prototype)];
console.log(attrs);