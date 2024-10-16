const express = require('express')

const app = express();

app.get( '/awsServices', ( req, res, next ) => {
    res.json( [ 'ec2', 's3' ] )
} )
console.log("Hello World")

