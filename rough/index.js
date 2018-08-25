//MARK: --------------- REQUIRED OBJECTS

/* Create the port that we’re connecting to */
const port = 8080

/* Get a connection to the mySql database */
const mySqlConnection = require('./dbHelpers/mySqlWrapper')

/* The bearerTokenDBHelper handles all of the database operations
relating to saving and retrieving oAuth2 bearer tokens */
const bearerTokensDBHelper =
    require('./dbHelpers/bearerTokensDBHelper')
        (mySqlConnection)

/* The userDBHelper handles all of the database operations relating
to users such as registering and retrieving them */
const userDBHelper = require('./dbHelpers/userDBHelper')
    (mySqlConnection)

/* This is a library used to help parse the body of the api requests. */
const bodyParser = require('body-parser')

//Require express
const express = require('express')

//Initialise the express app
const expressApp = express()

//MARK: --------------- REQUIRED OBJECTS

//MARK: --------------- SET UP MIDDLEWARE

/* set the bodyParser to parse the urlencoded post data */
expressApp.use(bodyParser.urlencoded({ extended: true }))

//MARK: --------------- SET UP MIDDLEWARE

//MARK: --------------- INITIALISE THE SERVER

//init the server
expressApp.listen(port, () => {

    console.log(`listening on port ${port}`)
})

//MARK: --------------- INITIALISE THE SERVER