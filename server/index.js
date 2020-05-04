const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio');
const app = express();  
const PORT = process.env.PORT || 4000;



//twilio requirements -- Texting API 
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = new twilio(accountSid, authToken);


app.use(cors()); //Blocks browser from restricting any data

// ----------------------------- HTML ENDPOINT ----------------------------- //
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server => My first time use API from Twilio')
})

// -----------------------------Twilio  API ENDPOINT ----------------------------- //
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+16413293062' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})


// ----------------------------- START SERVER ----------------------------- //

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));