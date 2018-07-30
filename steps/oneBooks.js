const { Given, Then } = require('cucumber');
const { expect } = require('chai');

const Book = require('../kata-potter/book');

let book;
Given('One book', function () {
  // Write code here that turns the phrase above into concrete actions
  book = new Book();
});

Then('The book price is {int} euros', function (int) {
  // Write code here that turns the phrase above into concrete actions
  expect(book.getPrice()).to.equal(int);
});
