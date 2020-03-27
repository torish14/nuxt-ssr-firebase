const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("こんにちは!");
// });

const nuxtServer = require('./nuxt-server')

exports.nuxtServer = functions.https.onRequest(nuxtServer)
