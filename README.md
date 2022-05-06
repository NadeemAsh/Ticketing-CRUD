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
Example, assuming you run it locally so:  ````localhost:/tickets/123456```` 


### Create new Ticket
````
/ticket/create
````

### Delete a Ticket by ID
````
/ticket/delete/:id
````
Example, assuming you run it locally so:  ````localhost:/ticket/delete/123456```` 

### Edit a Ticket by ID
````
/ticket/edit/:id
````
Example, assuming you run it locally so:  ````localhost:/ticket/edit/123456```` 

### Author
[Mohd Nadeem Ashraf](https://github.com/NadeemAsh)