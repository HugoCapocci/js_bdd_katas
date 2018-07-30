Feature: Kata Potter 

  Scenario: One copy of any of the five books costs 8 EUR
    Given One book
    Then The book price is 8 euros

  Scenario: Discount of 0% for 1 book
    Given A basket
    When I add a book to basket
    Then The basket price is 8 euros
