
function Book(isbn,name,author){
    this.isbn= isbn;
    this.name =name;
    this.author=author;
}
let theHabbit = new Book("0-395-12235-56","The Habbit","j.ajsijj");
console.log(theHabbit.isbn);