const express = require('express');
const fs = require('fs');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/contacts', (req,res)=>{

    const contacts = JSON.parse(
        fs.readFileSync('./contacts.json')
    );

    res.json(contacts);
});

app.post('/contacts', async (req,res)=>{

    const contacts = JSON.parse(
        fs.readFileSync('./contacts.json')
    );

    contacts.push(req.body);

    fs.writeFileSync(
        './contacts.json',
        JSON.stringify(contacts,null,2)
    );

    await axios.post(
        'http://localhost:3002/notifications',
        {
            message:
            `New contact created: ${req.body.name}`
        }
    );

    res.json({
        success:true
    });

});

app.listen(3001,()=>{
    console.log("Contacts Service");
});