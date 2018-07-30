module.exports = class Basket {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getPrice() {
    return this.books.reduce((sum, book) => {
      return sum + book.getPrice();
    }, 0);
  }
}
