const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

const Basket = require('../kata-potter/basket');
const Book = require('../kata-potter/book');

let basket;

Given('A basket', function () {
  // Write code here that turns the phrase above into concrete actions
  basket = new Basket();
});
When('I add a book to basket', function () {
  // Write code here that turns the phrase above into concrete actions
  basket.addBook(new Book());
});

Then('The basket price is {int} euros', function (int) {
  // Write code here that turns the phrase above into concrete actions
  expect(basket.getPrice()).to.equal(int);
});
