const discounts = {
  1: 1,
  2: 0.95,
  3: 0.90,
  4: 0.80,
  5: 0.75
};

module.exports = class Basket {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getSets() {
    const sets = [new Set()];
    const volumes = this.books.map(b => b.volume);
    volumes.forEach(volume => {
      if(sets[0].has(volume)) {
        if(!sets[1]) {
          sets.push(new Set([volume]));
        } else {
          sets[1].add(volume);
        }
      } else {
        sets[0].add(volume);
      }
    });
    return sets;
  }

  getPrice() {
    return this.getSets()
    .reduce((sum, bookSet) => sum + bookSet.size * 8 * discounts[bookSet.size], 0);
  }
}
