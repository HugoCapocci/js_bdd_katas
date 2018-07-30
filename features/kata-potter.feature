Feature: Kata Potter 

  Scenario: One copy of any of the five books costs 8 EUR
    Given One book
    Then The book price is 8 euros

  Scenario: Discount of 0% for 1 book
    Given A basket
    When I add a book to basket
    Then The basket price is 8 euros

  Scenario: Discount of 5% for 2 books
    Given A basket
    When I add a book of volume 1 to basket
      And I add a book of volume 2 to basket
    Then The basket price is 15.20 euros