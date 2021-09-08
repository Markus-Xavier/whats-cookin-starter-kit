# What's Cookin
## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Code Architecture](#code-architecture)
  - [Contributors](#contributors)
	- [Wins](#wins)
	- [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Abstract
  Create an application that allows user to browse, search, favorite, and save recipes to cook while fetching data from an API.

## Technologies
  - Javascript
  - eslint
  - node
  - VSCode
	- WebPack

## Code Architecture
  - FormHandler and FormManager classes: handle the user inputs and returns an object of arrays to be used to filter the recipes
  - DataManager class: Gets and sets data, filters recipes based on user input
  - Recipe class: creates Ingredient instances and calculates total cost of recipes
  - RecipeManager class: gets the filtered recipes and creates Recipe instances
  - User class: gets and sets User data, stores favorites/want to cook recipes
  - Ingredient class: gets and sets cost/unit and name of ingredient from the database

## Contributors
  - [Carlos Gomez](https://github.com/karmacarlos)
  - [Phil Than](https://github.com/pthan1)
  - [Markus Rossio](https://github.com/Markus-Xavier)

## Wins
  - TDD process went very well
  - Robust testing suite
	- Code is modular and follows SRP
	- Git workflow went well in the beginning

## Challenges + Improvements
	- Difficult to debug with WebPack
  - Unexpected problems didn't allow us to stay on schedule throughout whole project
  - Git workflow
  - Fixing bugs that arose when merging code

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/whats-cookin-part-one.html)

```