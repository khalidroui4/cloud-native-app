const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.post('/notifications',(req,res)=>{

    const notifications = JSON.parse(
        fs.readFileSync('./notifications.json')
    );

    notifications.push(req.body);

    fs.writeFileSync(
        './notifications.json',
        JSON.stringify(notifications,null,2)
    );

    res.json({
        success:true
    });

});

app.get('/notifications',(req,res)=>{

    const notifications = JSON.parse(
        fs.readFileSync('./notifications.json')
    );

    res.json(notifications);

});

app.listen(3002,()=>{
    console.log("Notification Service");
});