const db = require('../index')


// exports.getAllUrls = (req, res) => {
 


//     const query = `
//         SELECT *
//             FROM urls.urls
     
//     `;


//     db.query(query, (err, results) => {
//         // cases: Id is not provided, Id is not found, Server error
//         if (err) {
//             res.status(500)
//                 .send({
//                     message: "There was an error getting the URLs.",
//                     error: err
//                 })
//         } else if (results.length == 0) {
//             res.status(404)
//                 .send({
//                     message: "404 - That ID does not exist, provide a valid ID"
//                 })
//         } else {
//             res.send({
//                 urls: results
//             })
//         }
//     })


// }

// exports.getRouteById = (req, res) => {
//     let { id } = req.params;
//     console.log(req.params, id)

//     const query = `
//         SELECT id, longUrl
//             FROM urls.urls
//             WHERE id = ?;
//     `;

//     const placeholders = [id]

//     db.query(query, placeholders, (err, results) => {
//         // cases: Id is not provided, Id is not found, Server error
//         if (err) {
//             res.status(500)
//                 .send({
//                     message: "There was an error getting the URL.",
//                     error: err
//                 })
//         } else if (results.length == 0) {
//             res.status(404)
//                 .send({
//                     message: "404 - That ID does not exist, provide a valid ID"
//                 })
//         } else {
//             res.send({
//                 url: results[0]
//             })
//         }
//     })


// }

// exports.createNewRoute = (req, res) => {
//     let { id, longUrl } = req.body;
//     console.log('server accessed for createNewRoute function', req.body)
//     if (!longUrl || !id) {
//         res.status(400)
//             .send({
//                 message: 'Could not create short URL: You must provide a URL and ID'
//             })
//         return;
//     }

//     const query = `
//         INSERT INTO urls.urls (id, longUrl)
//         VALUES 
//             (?, ?);`;
//     const placeholders = [id, longUrl]
//     // placeholders are undefined?
//     console.log('query sent', query)
//     console.log('placeholders sent:', placeholders)

//     db.query(query, placeholders, (err, results) => {
//         console.log(results)
//         if (err) {
//             // case #3: Tell client there was a problem
//             res.status(500)
//                 .send({
//                     message: "There was an error creating a short URL.",
//                     error: err
//                 })
//         } else {
//             res.send({
//                 message: 'Your short URL was created successfully.'
//             });
//         }
//     })
// }

