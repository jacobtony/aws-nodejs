const express = require('express')

const app = express();

app.get( '/awsServices', ( req, res, next ) => {

    console.log( 'awsServices requested' )
    res.json( ['ec', '2s3'] )
} )
console.log("Hello World")

app.listen(8080)

