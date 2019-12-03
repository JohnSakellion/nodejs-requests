const rp = require('request-promise');
const baseUri = 'http://code-school-workshop.ir-e1.cloudhub.io/api/';


const postRequestBody = {
    name: "Lord",
    surname: "Johnny",
    email: "john@thelord.com",
    team: "British row",
    project: "Tea and Crumpets"
};

const usersPostOptions = {
    method: 'POST',
    uri: baseUri+'user',
    body: postRequestBody,
    json: true
};


//GET all users

//rp(baseUri+'user').then((users) => console.log(JSON.parse(users))).catch(err => console.log(err));

//POST a user

//rp(usersPostOptions).then((postedUser) => console.log(postedUser)).catch(err => console.log(err));

rp(baseUri+'user/5de4ed1372042670ff076424').then(foundUser => console.log(JSON.parse(foundUser))).catch(err => console.log(err));


/*
//todo /user, get, post, /user/{id} get, put, delete
*/