const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

// Local Storage for our Tickets
let tickets = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    //Code here
    res.json({
        "status": "welcome",
        "message": "There's no place like home"
    })
})

// ALl Tickets
app.get('/tickets', (req, res) => {
    res.send(tickets);
})

// Ticket by ID
app.get('/tickets/:id', (req, res) => {
    const id = req.params.id;
    for (let ticket of tickets) {
        if (ticket.id === id) {
            res.json(ticket);
            return
        }
    }

    res.json({
        "status": "failed",
        "message": "No such ticket"
    })
})

// Create Ticket
app.post('/ticket/create', (req, res) => {
    //Code here
    const ticket = req.body;

    console.log(ticket);
    tickets.push(ticket);
    let response = {
        "status": "ok",
        "message": "Ticket Created"
    }
    res.send(response);
})

//Delete
app.post('/ticket/delete/:id', (req, res) => {
    const id = req.params.id;

    tickets = tickets.filter(item => {
        if (item.id !== id) {
            return true
        }
        return false
    })

    res.json({
        "status": "ok",
        "message": "Ticket Closed"
    })
})

//Edit
app.post('/ticket/edit/:id', (req, res) => {
    const id = req.params.id;
    const newTicket = req.body;

    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        if (ticket.id === id) {
            tickets[i] = newTicket;
        }
    }

    res.json({
        "status": "ok",
        "message": "Ticket Updated"
    })
})


app.listen(port, () => {
    console.log('Server running on :', port);
})