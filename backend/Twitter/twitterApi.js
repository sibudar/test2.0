const Twitter = require("twitter")
const dotenv = require("dotenv")
const Twit = require('twit')
const fs = require('fs')
dotenv.config()

let options = {
    CONSUMER_KEY: "RCVxsA9VrDipIoaOKNsSlvDbC",
    CONSUMER_SECRET:"5KMm9GuzkFMVDe0GOFcveBF4oiLOquSQ0WNfhE0Lr30scV9Ge8",
    ACCESS_TOKEN_KEY:"884055064079421444-QCl3fBX9QNAdoiglizCibaV6mTh29jl",
    ACCESS_TOKEN_SECRET:"5JEwSIlON00BUHfEcobVccyReSteapjCidF5VlPEzfoE1"
}

 
var twitApp = new Twit({
  consumer_key:         options.CONSUMER_KEY,
  consumer_secret:      options.CONSUMER_SECRET,
  access_token:         options.ACCESS_TOKEN_KEY,
  access_token_secret:  options.ACCESS_TOKEN_SECRET
})

// Publish a Tweet with Text
// twitApp.post('statuses/update', { status: "Hey, I tweeted from Node.js!.Its fun working with twitter API." }, (err, data, response)=> {
//   if (error) {
//       console.log(error)
//     } else {
//       console.log(data)
//     }
// })

//Publish a Tweet with Text & an Image

//const imageData = fs​.​readFileSync​(​'./images.jpeg', {encoding:'base64'}
 let img = fs
twitApp.post("media/upload", {media: imageData}, (error, media, response) =>{
  if (error) {
    console.log(error)
  } else {
    const status = {
      status: "uploaded from nodejs project",
      media_ids: media.media_id_string
    }
 
    twitApp.post("statuses/update", status, function(error, data, response) {
      if (error) {
        console.log(error)
      } else {
        console.log("Successfully tweeted an image!")
      }
    })
  }
})
 
// Retweet
// var retweet = function () {
//   var params = {
//       q: '#21DaysOfCode',
//       result_type: 'recent',
//       lang: 'en'
//   }
//   twitApp.get('search/tweets', params, (err, data) => {
//       if (!err) {
//               var retweetId = data.statuses[0].id_str;
//               twitApp.post('statuses/retweet/:id', {
//                   id: retweetId
//               }, function (err, response) {
//                   if (response) {
//                       console.log('Retweeted!!!');
//                   }
//                   if (err) {
//                         console.log(err);
//                       console.log('Problem when retweeting. Possibly already retweeted this tweet!');
//                   }
//               });
//       }
//       else {
//           console.log('Error during tweet search');
//       }
//   });
// };