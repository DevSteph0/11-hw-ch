const express = require(`express`);
const checklistData = require(`./db/checklist.json`);
const api = require(`./routes/index`);


const PORT = 3001;


app.get(`/api`, (req, res) => res.send('visit http://localhost:3001/api'));

app.get(`/api`, (req,res) => res.json(checklistData));

app.listen(PORT, () =>
    console.log('db.json')
);