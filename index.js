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

const userDeleteOptions = {
    method: 'DELETE',
    uri: baseUri+'user/5de50c4872042670ff076432'
};

const updateUserOptions = {
    method: 'PUT',
    uri: baseUri+'user/5de6ba3e72042670ff076453',
    body: {
        name: "Lord Johnny"
    },
    json: true
}


//GET all users

rp(baseUri+'user')
    .then((users) => console.log(JSON.parse(users)))
    .catch(err => console.log(err));

//POST a user

rp(usersPostOptions)
    .then((postedUser) => {
        console.log('User POST successful!');
        console.log(postedUser);
    })
    .catch(err => console.log(err));

//GET user by id

rp(baseUri+'user/5de4ed1372042670ff076424')
    .then(foundUser => {
        console.log('User found!');
        console.log(JSON.parse(foundUser));
    })
    .catch(err => console.log(err));

//DELETE user by id

rp(userDeleteOptions)
    .then(deletedUser => {
        console.log('User deleted!')
        console.log(deletedUser)
    })
    .catch(err => console.log(err));

//UPDATE (put) user by id

rp(updateUserOptions)
    .then(updatedUser => {
        console.log('User updated!');
        console.log(updatedUser);
    })
    .catch(err => console.log('error'));