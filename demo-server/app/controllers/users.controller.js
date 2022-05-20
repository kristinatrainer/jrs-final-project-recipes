const db = require('../index')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const { v4: uuid } = require('uuid')

exports.login = (req, res) => {
    // check for correct email and pw > then select the user in DB >send back the account

    const {email, password} = req.body; 
    // check to make sure user provided un and pw
    if (!email || !password) {
        res.status(400)
        .send({
            message: 'Could not login: You must provide a email and password'
        })
        return; //so fx stops running after this 
    }
    const query =
        `SELECT * FROM users
            WHERE email= ?;`;
    const placeholders = [email]

    db.query(query, placeholders, async (err, results) => {
        //      this executes when DB responds
        //       return appopriate response to client
        //           3 cases: success, 404-User error, error 
            // 1)check for valid email
        if(err) {
            // case #3: Tell client there was a problem
            res.status(500)
                .send({
                    message: "There was an error logging in. Please try again",
                    error: err
                })
        } else if (results.length == 0) {
            //      case #2 if there's no data, then 404 error
            res.status(404)
                .send({
                    message: "email or password is incorrect"
                })
        } else {
            // 2) they provded a good email, now we check if pw is correct
            let encryptedPassword = results[0].password
            const passwordMatched = await bcrypt.compare(password, encryptedPassword)

            if(passwordMatched) {

                let user= results[0]

                const token =jwt.sign( // inside we're passing in 3 parameters
                    {
                        userId: user.id,    //Param 1
                        email: user.email
                    },
                    'ABC123', // Param 2. then provide Secret key for API (user does not know it)
                    {
                        expiresIn: '2h'     //Param 3. 
                    }
                   )
                   user.token = token;
                res.send({
                    message: "you have successfully logged in",
                    user
                })
            } else {
                res.status(404)
                    .send({
                        message: "email or pw is incorrect"
                    })            }
        }

    } );
}

exports.createNewUser = async (req, res) => {
    // create an account
    let { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
            .send({
                message: 'Could not Create Account: You must provide a login and password'
            })
        return; //so fx stops running after this 
    }
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    const query = `
        INSERT INTO users (id, email, password)
        VALUES (?,?,?);
    `;
    const placeholders = [uuid(), email, encryptedPassword]
    //encrypted password

    // send a response back to client
    db.query(query, placeholders, (err, results) => {
        if (err) {
            if (err.errno == 1062) {
                res.status(400)
                    .send({
                        message: "Please provide unique email",
                        error: err
                    })
            } else {
                res.status(500)
                    .send({
                        message: "There was an error creating your account",
                        error: err
                    })
            }
        }
        else {
            // this will succeed bc idk why... 
            this.login(req, res)
        }
    })

}

exports.updateUser = (req, res) => {
// fx tied to route. 1) define route 
}
exports.deleteUserById = (req, res) => {
    // req.body because POST/PUT
    let { id } = req.params;
    // same as: let id = req.params.id
    // can check if it's a Number using typecast or if it's defined with !id
    //      id = Number(id)
    //      if (NaN (id) ) {
    //     res.status(400)
    //     .send({
    //         message: 'Could not Create Book: You must provide title, id, author, and cover image'
    //     })
    //     return;
    // }
    const query = `
            DELETE FROM users 
            WHERE (id = ?);
            `;
    const placeholders = [id]
    // tell the DB to execute that script
    // pass in placeholder param
    db.query(query, placeholders, (err, results) => {
        //      this executes when DB responds
        //       return appopriate response to client
        // 3 cases: success, 404-User error in body(title, author or CI not defined), error 
        if (err) {
            // case #3: Tell client there was a problem
            res.status(500)
                .send({
                    message: "There was an error deleting your account.",
                    error: err
                })
        } else if (results.affectedRows == 0) {
            //      case #2 if there's no data, then 404 error
            res.status(404)
                .send({
                    message: "404 - No account deleted :("
                })
        } else {
            console.log(results)
            // case #1
            res.send({
                message: 'Your account was deleted successfully.'
            });
        }

    });

}