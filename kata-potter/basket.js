module.exports = class Basket {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getPrice() {
    const sum = this.books.reduce((sum, book) => {
      return sum + book.getPrice();
    }, 0);
    if (this.books.length === 2)
      return 0.95 * sum;
    return sum;
  }
}
