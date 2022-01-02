# Pragmateam code challenge client (React)

Please refer to the provided document for the code challenge requirements. 

## Available scripts
- `npm install` - Install dependences
- `npm start` - Start the application (Port 3000)
- `npm test` - Runs available tests

## Relevant information about my solution

### Highlights of your improvements (tests and others you choose)
- I'm using the new endpoint "/" to be used. This new endpoint will return the list with all products instead of just one temperature.
  - The logic of to join the product and the temperature were being doing in the front end;
  - Moreover, the front end call the service once for each product is too heavy;
- I moved the url (http://localhost:8081) that we are using to the package so the page don't need to have this information

### What would you improve next if you had more time?
- I will create new components or add a library with some components;
- I created only one test in the front checking if we are rendering the table. I don't know if we need anything more.
- I also would like to create a css file instead of have css.

### Questions you would ask and your own answers and assumptions
- I asked on the backend project.

### Explanations of decisions or the approach you took
- I answered on the backend project.

### Any other notes you feel relevant to evaluate your test improvements.