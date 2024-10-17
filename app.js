const express = require('express')

const app = express();

app.get( '/awsServices', ( req, res, next ) => {

    console.log( 'awsServices requested' )
    res.status(200).json( ['ec', 's3', 'I am', "Billing"] )
} )

app.get( '/', ( req, res, next ) => {

    res.send(`<h1>Welcome to my EC2 Server -Jacob Tony Jacob!!!!</h1>`)
} )
console.log("Hello World, i'm there")

app.listen(8080)

/*

rsync -avz --exclude 'node_modules' --exclude '.gitignore' \
-e "ssh -i ~/AWS/awsdemo1.pem" \
. ubuntu@ec2-54-166-238-252.compute-1.amazonaws.com:~/efs
*/


