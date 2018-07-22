![git hub ](https://github.com/thisismrsanjay/MERN-fullstack-basic/blob/master/MERN.PNG)


npm run dev
*   "client-install":"npm install --prefix client",         // Client Script to install client dependencies
*   "server":"nodemon server.js",                           // Server Script
*   "client":"npm start --prefix client",                   // Client Script 
*   "dev":"concurrently \"npm run server\" \"npm run client\"" //Run both


*   "proxy": "http://localhost:5000"                        //to directly use end point in react without using complete domain


*   concurrently to run both server and client
*   react-transition-group , uuid
*   redux react-redux redux-thunk

step1: create store
step2: reducers 
step3: action
step4: connect (mapStateToProps)   //this.props. is not a function 
step5: dispatch (wierd)

// How to serve static assets if in production 
//POST build script package.json
