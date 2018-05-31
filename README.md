### TRANSPLANTCENTRAL

TransplantCentral is a web application that allows you to review your favorite US metropolitan cities based of a variety of categories and share your living/travel experiences.

![alt text](https://media.giphy.com/media/fGR0LotJlmSk1R4jG8/giphy.gif)

### Live Site: https://transplantcentral.herokuapp.com/#/

### Features:

Technologies used: Ruby on Rails, Ruby, Javascript (ES5/ES6), ReactJS, Redux, PostgreSQL, HTML, CSS, MVC,Webpack, NPM

1. Login/SignUp Page:
Log in to an existing account, or sign up using a username and password combination, which allows you to write posts on each city you want.

2. Greeting Page:
First, you are brought to the home gretting page, which will welcome you and then display the website's highlights: (Most reviewed city, highest rated city, lowest rated city). 

3. Home Page:
Here, you get to browse through the top 20 major US cities that people are moving to and be directed right to the city's show page.

4. City Show Page:
Where all the good stuff happens: the city's profile picture, total rating based on 4 categories: food, culture, nightlife, economy. Then, an average rating PER category. (You must be logged in to post something).

5. City Post Form:
Create a review based on 4 categories, star highlight rating for intuitive and creative user experience. 

### Code Highlights:

### Creating Reviews

Reviews on cities are created using `Rails MVC` architecture blended with `React` for UI. Rails controller action creates a post and sends it to the `PostgreSQL` database.

<div>
    <img src="/screenshots/screen1.png" width="500px" height="200px"</img> 
</div>

Using a `React` component's local state, being updated as user fills out the post form and submits it, an `AJAX` request is made to connect with `Rails` controller and post to the database.

<div>
    <img src="/screenshots/screen2.png" width="500px" height="200px"</img> 
</div>

A `thunk` action creator is used to successfully link `React` with `Rails`.

<div>
    <img src="/screenshots/screen3.png" width="500px" height="200px"</img> 
</div>

### Updating Reviews

'Edit Post' button only reveals if the current user is the same as the post's user he/she wants to edit.

<div>
    <img src="/screenshots/screen4.png" width="500px" height="200px"</img> 
</div>

### Star Hover UI Rating

<div>
    <img src="https://media.giphy.com/media/7OWL4RSNanqyw49MEK/giphy.gif" width="300px" height="400px"</img> 
</div>

`Vanilla JS` and `DOM Manipulation` used to implement Star UI rating system,

<div>
    <img src="/screenshots/screen7.png" width="560px" height="320px"</img> 
</div>

Clicking on a star will highlight all the previous stars, and stay highlighted unless you click on another star, and change the `React` component's local state.

<div>
    <img src="/screenshots/screen8.png" width="560px" height="320px"</img> 
</div>

Hovering over a star with highlight all the previous stars of the one that is currently being hovered over...

<div>
    <img src="/screenshots/screen9.png" width="560px" height="320px"</img> 
</div>

And then hovering away from a star with highlight all the previous stars of the one that is currently been selected. If no selection has been made yet, all stars are unhighlighted.