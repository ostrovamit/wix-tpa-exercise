# WUT Exercise

- [Overview](#overview)
- [Guidelines](#guidelines)
  - [General](#general)
  - [Application Behavior](#application-behavior)
- [How to Start](#how-to-start)

## Overview

The exercise is to implement a gallery inside OOI application with a basic grid including items:

<p align="center">
  <img src="https://github.com/wix-private/wut-exercise/blob/master/images/demo.gif?raw=true" width="800">
</p>

Notice the "Load More" button at the bottom, which loads more items after clicking and then disappears.

## Guidelines

### General

- You should use both components and testkits from wix-ui-tpa.
- You **don't** need to add additional CSS (all needed styles are already implemented), but you do need to wire the style params.
- You **don't** need to create an application nor widget in the dev center, this repository is already connected to such.
- You **don't** need to implement any data for the items but simply use [it](https://github.com/wix-private/wut-exercise/blob/master/src/components/Gallery/controller.ts#L15).
- All tests should be completed and pass.
- Consider starting with going over the tests so they would instruct you what to implement next (you'll find in the code parts that you need to complete).

### Application Behavior

You should implement the missing view according the following instructions.

1. The widget title should appear at the top of the page and below a grid of items:

<p align="center">
  <img src="https://github.com/wix-private/wut-exercise/blob/master/images/1.png?raw=true" width="600">
</p>

Each row contains 3 items and on startup should appear 4 rows at most.

2. An item should have a title and appropriate image:

<p align="center">
  <img src="https://github.com/wix-private/wut-exercise/blob/master/images/2.png?raw=true" width="400">
</p>

3. After scrolling down to the edge, there is a button called "Load More":

<p align="center">
  <img src="https://github.com/wix-private/wut-exercise/blob/master/images/3.png?raw=true" width="600">
</p>

The button should be style correctly using [the style params](https://github.com/wix-private/wut-exercise/blob/master/src/components/Gallery/stylesParams.ts) (they're already implemented, you just need to use them). Remember, you're not supposed to use vanilla CSS but rather style variables that simulate wiring through the settings panel.

4. Clicking the button loads the rest of the items that we're not rendered on startup:

<p align="center">
  <img src="https://github.com/wix-private/wut-exercise/blob/master/images/4.png?raw=true" width="600">
</p>

Note that the button should disappear thereafter.

## How to Start

1. Clone this project.
2. Run `npm install` which will already install for you wix-ui-tpa.
3. Run `npm start` and click on `1` in order to navigate to a viewer URL and see the initial OOI application containing inside a premade Wix live site.
4. Run `npm test` to run the tests (they should fail, so don't panic). You can run `npm run test:watch` if you prefer testing in interactive watch mode.

Good luck! 🙃
