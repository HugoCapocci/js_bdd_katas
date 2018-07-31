module.exports = class Basket {
  constructor() {
    this.books = [];
    this.sets = [new Set()];
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
    const volumes = this.books.map(b => b.volume);
    volumes.forEach(volume => {
      if(this.sets[0].has(volume)) {
        if(!this.sets[1]) this.sets.push(new Set([volume]));
        else this.sets[1].add(volume);
      } else {
        this.sets[0].add(volume);
      }
    });
    return this.sets.filter(set => set.size > 1);
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
