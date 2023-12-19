# Ticket Generation Server

This Node.js server generates tickets with a QR code and serves them to clients upon request.

## Prerequisites

Before running the server, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>

Install dependencies- npm install

Running the Server
Once you have completed the setup, you can run the server using the following command: npm start

API Endpoint
POST /generate-ticket

Generates a ticket based on the provided JSON payload.

Example payload:

{
    "experienceName": "Racing",
    "date": "01/08/2001",
    "numberOfPersons": 10,
    "customerName": "Nikhil B"
}
The response will be a downloadable image of the generated ticket.

Live link for api- https://passport-api-tsjq.onrender.com/generate-ticket
Codesandbox link to frontend code (Reactjs) check working of api- https://codesandbox.io/p/sandbox/passport-task-fgl8rl?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqc429nq0006356k847ibs5l%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqc429np0002356kaphgs59p%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqc429nq0003356k6utirvyy%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqc429nq0005356kb70o7t9b%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqc429np0002356kaphgs59p%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqc429no0001356kebrcq6pe%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%257D%255D%252C%2522id%2522%253A%2522clqc429np0002356kaphgs59p%2522%252C%2522activeTabId%2522%253A%2522clqc429no0001356kebrcq6pe%2522%257D%252C%2522clqc429nq0005356kb70o7t9b%2522%253A%257B%2522id%2522%253A%2522clqc429nq0005356kb70o7t9b%2522%252C%2522activeTabId%2522%253A%2522clqc8tlpp0099356kbeyspas3%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522clqc8tlpp0099356kbeyspas3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clqc429nq0003356k6utirvyy%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clqc429nq0003356k6utirvyy%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D
