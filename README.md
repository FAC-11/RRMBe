# letme . in by RRMBa

See it in action: http://floating-lake-56828.herokuapp.com/

## What is *let me . in*?

Would you like to know if your password is good enough? Is it easy to hack your accounts or do you have the right security in place?  

Our password detector can protect you against any Fraudsters! It will be able to tell you if your password is among the 100,000 most used passwords and advise you to change it if that is the case.  


## Why did we create *let me . in*?

After all the cyber attacks that have happened recently, we believe we should protect you against your lack of imagination when deciding your passwords! Go to our RRMBe page and check if you are using the right passwords!  

## How did we create *let me . in*?

### Software Architecture

[Our Architecture](https://github.com/FAC-11/RRMBe/blob/master/readme-images/IMG_2948.jpg?raw=true![](https://i.imgur.com/doH7X2y.jpg))

### File structure

1. Public
* Index.HTML: Basic Datalist form where the user will introduce the password to be checked
* Main.CSS
* Index.js
    2 eventListeners:  
    - One for when the user starts typing the passwords, so that our autocomplete dropdown appears!  
    - One for when the user submits his/her passwords to check if it is a good/bad one!  
* Request.js  

2. Src
* Handlers.js
* Router.js
* Search.js: In this file, we filter our PasswordsArray by the input introduced by the user.
* Server.js
* Test.js: We test our pure function.



### What we learnt

#### Bart
#### Max
#### Rachael
* While trying out different user inputs, we discovered that characters such as letters with accents were not being passed into our endpoint string. We used [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) so they could be passed into the server.
* `console.log()` and `Cmd + F` are your friends when you are trying to find a specific output from an event listener. For example, when running an event listener, on submitting the form, we found that the attempted password string could be found via `e.target["0"].form["0"].value`. (This is a tip I learnt from [this](https://www.futurelearn.com/courses/electronic-music-tools) online course.)
* To create the favicon, we found a 16px icon from [icon monstr](https://iconmonstr.com/) and converted it [here](http://www.favicon-generator.org/).

#### Rebeca

### Like this project?
To run this project on your local server, run...
>`git clone https://github.com/FAC-11/RRMBe.git`
>`cd RRMBe`
>`npm init`
>`npm run nodemon`

...and visit `localhost:4000` in your browser.


## Useful Links
* [Heroku](https://github.com/FAC-11/research/blob/master/week4/Deployment.md)  
* [Linter-eslint](https://atom.io/packages/linter-eslint)  
*
