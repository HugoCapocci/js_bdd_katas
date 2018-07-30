module.exports = class Basket {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getPrice() {
    const volumes = this.books.map(b => b.volume);
    const uniqueVolumes = volumes.filter((volume, pos) => volumes.indexOf(volume) == pos);
    const sum = this.books.reduce((sum, book) =>
      sum + book.getPrice()
    , 0);
    if (uniqueVolumes.length === 2)
      return 0.95 * sum;
    else if (uniqueVolumes.length === 3)
      return 0.90 * sum;
    else if (uniqueVolumes.length === 4)
      return 0.80 * sum;
    else if (uniqueVolumes.length === 5)
      return 0.75 * sum;
    return sum;
  }
}
