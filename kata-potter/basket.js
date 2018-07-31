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
    this.booksByVolume = {};
  }

  addBook(book) {
    this.books.push(book);
    if (this.booksByVolume[book.volume]) {
      this.booksByVolume[book.volume].push(book)
    } else {
      this.booksByVolume[book.volume] = [book];
    }
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
    return sets.filter(set => set.size > 1);
  }

  getPrice() {
    const bookSets = this.getSets();
    if (bookSets.length > 1) {
      let setSum = 0;
      console.log('bookSets: ', bookSets);
      for (let bookSet of bookSets) {
        setSum += bookSet.size * 8 * discounts[bookSet.size];
      }
      return setSum;
    }
    const volumes = this.books.map(b => b.volume);
    const uniqueVolumes = volumes.filter((volume, pos) => volumes.indexOf(volume) == pos);
    const sum = this.books.reduce((sum, book) =>
      sum + book.getPrice()
    , 0);
    return sum * discounts[uniqueVolumes.length];
  }
}
