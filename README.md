
# Tenzies

This is a simple dice game built in React. It was a project from the Scrimba Frontend Developer Career path. The basic functionality is to have a way to select dice to lock them in place and to keep rolling until all the dice are locked in and matching.

I implement a couple extra features. I changed the dice faces from using integers to using CSS divs to represent the number of dots an the dice. I also added a "Rolls" counter and the ability for your best score to be retained on your local computer.

<img src="/src/assets/tenzies_1200x630.png" alt="" />

## How It Works:

1. Select the dice that have the most matching faces they will turn green when selected. If you change your mind you can unselect them.
2. Press the roll dice button
3. Select the dice with the faces that match your already selected faces. They will also turn green.
4. Keep rolling until all the dice are green.
5. Confetti will drop when the dice are all the same and green.
6. If this was the lowest number of rolls ever on your computer the "Score To Beat" will be updated.

[View Live Project](https://tenzies-app-scrimba.netlify.app/)
