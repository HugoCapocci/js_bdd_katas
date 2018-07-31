Feature: Kata Potter 

  Scenario: One copy of any of the five books costs 8 EUR
    Given One book
    Then The book price is 8 euros

  Scenario: Discount of 0% for 1 book
    Given A basket
    When I add a book to basket
    Then The basket price is 8 euros

  Scenario: Discount of 5% for 2 books different books
    Given A basket
    When I add a book of volume 1 to basket
      And I add a book of volume 2 to basket
    Then The basket price is 15.20 euros

  Scenario: Discount of 0% for 2 same books
    Given A basket
    When I add a book of volume 1 to basket
    And I add a book of volume 1 to basket
    Then The basket price is 16 euros

  Scenario: Discount of 10% for 3 different books
    Given A basket
    When I add a book of volume 1 to basket
    And I add a book of volume 2 to basket
    And I add a book of volume 3 to basket
    Then The basket price is 21.60 euros

  Scenario: Discount of 20% for 4 different books
    Given A basket
    When I add a book of volume 1 to basket
    And I add a book of volume 2 to basket
    And I add a book of volume 3 to basket
    And I add a book of volume 4 to basket
    Then The basket price is 25.60 euros

  Scenario: Discount of 25% for 5 different books
    Given A basket
    When I add a book of volume 1 to basket
    And I add a book of volume 2 to basket
    And I add a book of volume 3 to basket
    And I add a book of volume 4 to basket
    And I add a book of volume 5 to basket
    Then The basket price is 30.00 euros

  Scenario: Discount of 1 set of 3 books and 1 set to 2 books
    Given A basket
    When I add 1 books of volume 1 to basket
    And I add 2 books of volume 2 to basket
    And I add 2 books of volume 3 to basket
    Then The basket price is 36.80 euros
