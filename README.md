# Front-End-Foodie-Fun

**Deployed website**:
[Foodie Fun](https://foodiefunapp.netlify.com)

## Description

The Foodie Fun React App is built for anyone who loves visiting different restaurants. Gone are the days where people forget what to order at a restaurants or order the wrong item. With the Foodie Fun App, client end users can Sign Up for their own account and record their own food experience at various restaurants. While looged in, the client end user can create a new review for a food item by documenting the restaurant's name, food, price, wait time, comments and more. The review feature includes a rating function for users to document their preferences. All reviews can be edited and deleted at any time by the client end user. To minimize the search time of any previous reviews, client end users can easily access their reviews by using the filter function that filters reviews by restaurant name, food item, price, rating and date of visit.

## Getting Started

To begin using the App as a client end user, follow the link and Sign Up for a new account with a username and password. User will be prompted to enter username and password again after the inital Sign Up to login to their profile.
<img width="600" height="400" src="https://raw.githubusercontent.com/build-week-foodie-fun/FE/development/src/img/sign-up.png" />

To login to the App, follow the link and login with the correct username and password.
<img width="600" height="400" src="https://raw.githubusercontent.com/build-week-foodie-fun/FE/development/src/img/Login.png" />

To view the profile, login with user creentials and the first page rendered after the login is the profile. On the profile page, there will be the user info, reviews and filter.
<img width="600" height="400" src="https://raw.githubusercontent.com/build-week-foodie-fun/FE/development/src/img/ReviewCard.png" />

To use the filter, enter the restaurant name, food item name, price, rating, or date of visit on the corresponding field and the corresponding reviews will be available to view.

To create a new review, click on the "+" button or the "Create Review" button, enter all the information such as restaurant name, restaurant type, and food item name. Click "Submit" to save the review.
<img width="600" height="400" src="https://raw.githubusercontent.com/build-week-foodie-fun/FE/development/src/img/CreateFormImg.png">

To edit the review, click on "More info" at the buttom of a review card. Doing so will redirect user to a page with the corresponding review. Click on "Edit" and that would redirect to the review form. User can edit any information on the form and click "Submit" to save all the edits.

To delete the review, click on "More info" at the buttom of a review card. Doing so will redirect user to a page with the corresponding review. Click on "Delete" and the review will be deleted. The page will render back to the Profile automatically.
<img width="600" height="400" src="https://raw.githubusercontent.com/build-week-foodie-fun/FE/development/src/img/SingleReview.png" />

## Prerequisites

All of the below dependencies can be installed using:
`yarn install` or `npm install`

Start development by creating a react app using:
`yarn start` or `npm start`

## Dependencies

This project was created using yarn and designed for react client side. Other dependencies include:

```
"dependencies": {
"@material-ui/core": "^4.3.3",
"@material-ui/icons": "^4.2.1",
"axios": "^0.19.0",
"formik": "^1.5.8",
"react": "^16.9.0",
"react-dom": "^16.9.0",
"react-redux": "^7.1.1",
"react-router-dom": "^5.0.1",
"react-scripts": "3.1.1",
"redux": "^4.0.4",
"redux-thunk": "^2.3.0",
"semantic-ui-css": "^2.4.1",
"semantic-ui-react": "^0.88.0",
"styled-components": "^4.3.2",
"yup": "^0.27.0"
}
```

## Examples of Tables

The "users" table looks like this:

```
"username": "Foodie,
"password": "123456",
```

The "restaurant_review" table look like this:

```
"restaurant_name": "Pizza Hut"
"restaurant_type": "Italian"
"created_at": "2019-08-29 15:51:49"
"item_name": "Pizza"
"photo_of_order": "food.png"
"food_rating":"5"
"comments": "The pizza was fresh with a lot of cheese"
"price": "7"
"wait_time": "10 minutes"
"date_of_visit": "2019-08-29"
```

## Endpoint Usage

**POST** - Register a new user
\*\*\* Requires a username, and password

https://buildweek-foodie1.herokuapp.com/auth/register

**POST** - Login a registered user. Also provides Web Token.
\*\*\* Requires username and password

https://buildweek-foodie1.herokuapp.com/auth/login

**GET** - Returns all posts/portfolios
\*\*\* Requires JSON Web Token
https://buildweek-foodie1.herokuapp.com/auth/api/

**POST** - Adds a new post
\*\*\* Requires JSON Web Token and a data object
https://buildweek-foodie1.herokuapp.com/auth/api/

**PUT** - Edits a post with the selected id
\*\*\* Requires JSON Web Token and a data object
https://buildweek-foodie1.herokuapp.com/auth/api/:id

**DELETE** - Deletes a post with the selected id
\*\*\* Requires JSON Web Token
https://buildweek-foodie1.herokuapp.com/auth/api/:id

## Support

There is currently no active support for this app

## Authors and acknowledgment

**UI Engineers**:
Liam Sutton (https://github.com/curm90)
Sandra Kimball (https://github.com/sandramkimball)
https://foodie-fun-app.netlify.com/index.html

**Front End Engineers**:
Jojo Zhang (https://github.com/nomadkitty)
Karen Li (https://github.com/karenjli)

**Front End Framework Engineer**:
Alex Foxman (https://github.com/AlexFox1777)
Kevin Tou (https://github.com/KevinTou)
Desiree Morris(https://github.com/desiquinn)

**Backend Engineer**:
Jason Aviles(https://github.com/Jason-Aviles)

**Full Repo**:
https://github.com/build-week-foodie-fun

## Project status

This project was completed for a Lambda School build week August 2019. There may be updates to the application periodically

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
