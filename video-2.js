//HTTP Requests
//Make HTTP requests to get data from another server
//We make these requests to API endpoints
//Using JSONplaceholder API for the test data


//Create request object - XML Represents the old data format that was used before JSON
//This built in method will be used to send a request
const request = new XMLHttpRequest();

//How to track progress of request - By adding event listner
//This will log out any ready state change on the console
request.addEventListener('readystatechange', () => {

    // console.log(request, request.readyState)
    //We want to wait until the readyState is 4 because that is the point that we can do something with the data
    //Returns the JSON Data to the console once we reach step 4
    if (request.readyState === 4) {

        console.log(request.responseText)
    }

})

//Take request variable and use a property/method that is within

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')

//To send the request we actually have to send the request
request.send()

