//这里有什么问题
function Book(isbn,title,author){
    this.setIsbn(isbn)
    // this.isbn=isbn;//public 属性
    // this.title=title;
    // this.author=author;
}
// Book.prototype是Book的一个属性
Book.prototype ={
    setIsbn(isbn){
        //isbn不能是this  但要可读
        //private 私有属性，对象的方法内this.调用， 但在外界不可访问
        //js内没有private，但约定：以_开头的就是私有属性
        if(!this.checkIsbn(isbn)) 
            throw new Error('ISBN格式有错误');

        this._isbn=isbn;
    },
    getIsbn(){
        return this._isbn
    },
    checkIsbn(isbn){
        if(!isbn) return false
        return /\d{3}-\d-\d{3}-\d{5}-\d/.test(isbn)
        

    }
}
// class 只是语法糖
// isbn应该是惟一的，private
const jsDontKnow = new Book('978-7-121-29899-8','React全栈','陈玉珏')
// console.log(jsDontKnow.__proto__==Book.prototype);
console.log(jsDontKnow instanceof Book);
console.log(Book.prototype.isPrototypeOf(jsDontKnow));
jsDontKnow.isbn='dddd'
console.log(jsDontKnow.getIsbn());