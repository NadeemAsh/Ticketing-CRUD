const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = (process.env.PORT, "9999");

// Local Storage for our Tickets
let tickets = [
    {
        "id": "123456789A",
        "priority": "3",
        "client_name": "reed",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789B",
        "priority": "2",
        "client_name": "compass",
        "team_name": "Fiji",
        "tree_name": "lb_tp_walmart",
        "timeline": "Open for past 2 days and 3 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789C",
        "priority": "2",
        "client_name": "compass",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789D",
        "priority": "2",
        "client_name": "utopia",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 2 days and 3 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789E",
        "priority": "2",
        "client_name": "utopia",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789F",
        "priority": "2",
        "client_name": "reed",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 2 days and 3 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789G",
        "priority": "1",
        "client_name": "reed",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789H",
        "priority": "2",
        "client_name": "ace",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 2 days and 3 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789I",
        "priority": "1",
        "client_name": "coast",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789J",
        "priority": "2",
        "client_name": "utopia",
        "team_name": "Tahiti",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 2 days and 3 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Cannot submit bid after first run",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789K",
        "priority": "1",
        "client_name": "compass",
        "team_name": "Cayman",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Cannot submit bid after first run",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789L",
        "priority": "2",
        "client_name": "coast",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 2 days and 3 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789M",
        "priority": "2",
        "client_name": "coast",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 2 days and 3 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789N",
        "priority": "2",
        "client_name": "coast",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789O",
        "priority": "2",
        "client_name": "coast",
        "team_name": "Cayman",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 2 days and 3 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789P",
        "priority": "2",
        "client_name": "reed",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 2 days and 3 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789Q",
        "priority": "3",
        "client_name": "reed",
        "team_name": "Cayman",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789R",
        "priority": "2",
        "client_name": "reed",
        "team_name": "Fiji",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789S",
        "priority": "2",
        "client_name": "reed",
        "team_name": "Tahiti",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }, {
        "id": "123456789T",
        "priority": "3",
        "client_name": "utopia",
        "team_name": "Tahiti",
        "tree_name": "lb_ns_oceanspray",
        "timeline": "Open for past 18 hours",
        "current_asignee": "engineer@company.com",
        "current_status": "not yet started",
        "last_update": "XPATH Issues resolved, waiting for loads to test",
        "issue": "2",
        "attachments": "reed_screenshot_02.jpg",
        "notes_on_this_ticket": "XPATH Issues resolved, waiting for loads to test",
        "ticket_creator": "projectmanager@company.com",
        "resolution_notes": "",
        "resolution_reason": "",
        "ticket_title": "Bot stuck at Login Page",
        "ticket_issue_description": "I was trying to run the bot this morning and found that it's not able to login. Could be some XPATH Issue",
        "when_started": "Started 6 hours ago"
    }
];

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


app.listen(PORT, () => {
    console.log('Server running on :', PORT);
})