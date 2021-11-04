## Overview

The home route will take you to a table showing your positions. You can add/remove columns to focus on specfic qualities, then sort to see the best and the worst performers

![table](https://github.com/trevorjohns/WealthsimplePortfolioAnalyzer/blob/main/table.PNG)

The /graph route will give you a pie chart breakdown of the sectors that you are invested in

![graph](https://github.com/trevorjohns/WealthsimplePortfolioAnalyzer/blob/main/graph.PNG)

## How to setup

clone/download the repo

run `npm install` to download the dependencies

The repo is set up with sample positions, if you wish to see your own please follow these steps:

naviagate to the login.js file at the root and update the email/password varibles with your wealthsimple login information, then
run `npm run setup` to initialize the server with your data, you'll be prompted for a one-time password from your email

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
