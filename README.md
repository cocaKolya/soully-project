
# Soully Project
![soully](https://github.com/cocaKolya/soully-project/blob/main/public/images/screenshots/Screenshot%20from%202021-09-19%2015-18-20.png)

This is a web application about mental health. It helps to know your personality, become better version of yourself and succeed in life. It has all-in-one personality tests, action plan with implementation steps and all the stats.

## Start
To _start_ **soully** you need run the following command:

```
npm run start
```
also you need to create database on your computer and run the following commands:
```
npx secuelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## Current stage

- MVP website with a basic tests to collect stats about personalities
![enter image description here](https://github.com/cocaKolya/soully-project/blob/main/public/images/screenshots/Screenshot%20from%202021-09-19%2015-08-31.png)
- All the answers save to Local Storage until user register to Soully.
![enter image description here](https://github.com/cocaKolya/soully-project/blob/main/public/images/screenshots/Screenshot%20from%202021-09-19%2015-12-19.png)
- ability to log in/register and session  for users
![enter image description here](https://github.com/cocaKolya/soully-project/blob/main/public/images/screenshots/Screenshot%20from%202021-09-19%2015-09-38.png)
- all the data goes to database 
- current statistics based on the answers of are displayed on the home page
![enter image description here](https://github.com/cocaKolya/soully-project/blob/main/public/images/screenshots/Screenshot%20from%202021-09-19%2015-10-05.png)
- horoscope, based on the user info from the first page is displayed via API


## Technologies
- javascript
- express
- express-sessions
- sequelize-cli
- postgres
- redis
- handlebars
- css

