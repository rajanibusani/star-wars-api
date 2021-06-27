# Star Wars Character API
App built with React and bootstrap that using axios to pull data from the swapi.co Star Wars Character API.  

## Summary

The Star Wars Character api 

There's an initial api call when the app component mounts and it loads data from swapi.co which is rendered in a table with the name, birth date, heigh, mass, home world and species of each character throughout the Star Wars movie and story catalog. After the 1st api call which is made through axios, the api data loads based on paginated results that swapi.co has limited to 10 results per "page". 
Click one of the pagination sqaures and it makes an api get request to the relevant page number and it loads the results for the next 10 characters. Click on any Charcters Name, which redirects the browser, to specific character page, where i rendered th charcters name and hair, skin and eye colors, And I tried to generate react Avatar based on gender but i was not succeded fully.

## Next Steps
As a next Step, I want to use Cache to improve api performace, for that i want to store the api data in local storage as per the pages in paginations,So that i can use data from local storage instead of api requests.



See my deployed version on Netlify : https://starwars-rajani.netlify.app/

Then to run the app on your system use the command:

```
npm start
```

## Tech Stack Used
    * React.js
    * Axios
    * SWAPI API
    * Bootstrap/React-Bootstrap
    * react-avataaars

## Author 

* **Rajani Busani** - *Front-End Developer* - 
[Website](https://portfolio-rajani.netlify.app/) 