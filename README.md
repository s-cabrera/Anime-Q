<div id="top"></div>

# Anime Q
<!-- Deployed Website on Heroku -->
<!-- https://anime-q-list.herokuapp.com/ -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#disclaimer">Disclaimer</a></li>
  </ol>
</details>

## About the Project
[![Anime-Q Demo][demo]](https://anime-q-list.herokuapp.com/)

An interactive site to discover anime, sign up to begin discovering series based off category and add them to a "watchlist" for later. Your information will be saved with your login. Once a series has been saved you can remove it afterwards and continue to discover and add more.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Technologies used in app -->
### Built With
* [CSV to JSON](https://www.npmjs.com/package/csvtojson)
* [Express](https://www.npmjs.com/package/express)
* [Express-Session](https://www.npmjs.com/package/express-session)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

To get a copy of this project on your local computer up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
1. If you don't have an account already, create a [Heroku](https://www.heroku.com/) account.

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/s-cabrera/Anime-Q.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Deploy to Heroku following these steps

   a. Open up a terminal in your project's root folder and install Heroku. If already installed, skip this step and go to step _b_
     ```sh
      npm install -g heroku
      ```
   b. Login to Heroku. Type the following demand in the terminal: 
    ```sh
    heroku login
    ```
   This will open up a browser for you to login to your Heroku account.
   
   c. Create an empty app to deploy on Heroku
     ```sh
        heroku create
      ```
   d. Deploy to Heroku by typing this command in the terminal
      ```sh
        git push heroku main
      ```
   e. If you encounter any errors, follow these link for guidance: [Installing](https://devcenter.heroku.com/articles/heroku-cli) & [Deploying to Heroku](https://devcenter.heroku.com/articles/git)
   
   f. Now that your application has been deployed, go to your account on Heroku and follow these steps below:
   
    * Look for your app and double-click it. Heroku will redirect you to your app's Overview section.
    
    * Click on the Resources tab on the navigation bar, look for the _Find more add-ons_ button.
    
    * Heroku will redirect you to the add-ons page. Search and install the JawsDB MySQL.
    
   ![JawsDB][jawsDB]
   
   g. If you check out the app on Heroku, it should have none of the animes displayed. Don't despair. You just need to seed the JawsDB by running this command in your terminal: 
   ```sh
   heroku npm run seeds/Anime_500.js
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledements
* [Kaggle](https://www.kaggle.com/azathoth42/myanimelist)
* [Heroku](https://www.heroku.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- DISCLAIMER -->
## Disclaimer
Adblock Chrome Extension may cause the application's page redirection to not work properly.

<!-- MARKDOWN LINKS & IMAGES -->
[demo]: Anime-Q.gif
[jawsDB]: jawsDB.PNG
  
  
