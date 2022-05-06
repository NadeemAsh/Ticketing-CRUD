# CRUD Tickets API 

### About
A basic Tickets CRUD API using Express JS. No database and no request body check integrated. Might switch it to MongoDB later.

### Features
+ Fetch All Tickets
+ Fetch a Ticket by ID
+ Create new Ticket
+ Delete a Ticket by ID
+ Edit a Ticket by ID


### Clone
````
git clone https://github.com/NadeemAsh/__TicketingCRUD.git
cd __TicketingCRUD
npm install
````

### Start
````
npm run dev
````

The API runs on port ````9999```` by default.


### Fetch all tickets
````
/tickets
````

### Fetch a Ticket by ID
````
/tickets/:id
````
Assuming you run it locally:  ````localhost:/tickets/123456```` 


### Create new Ticket
````
/ticket/create
````

### Delete a Ticket by ID
````
/ticket/delete/:id
````
Assuming you run it locally:  ````localhost:/ticket/delete/123456```` 

### Edit a Ticket by ID
````
/ticket/edit/:id
````
Assuming you run it locally:  ````localhost:/ticket/edit/123456```` 

### Author
[Mohd Nadeem Ashraf](https://github.com/NadeemAsh)