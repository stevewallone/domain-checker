# Domain Checker PoC

This repository is a proof-of-concept for a domain checker application created using the Windsurf IDE. This project was created by following the tutorial available on YouTube: [Windsurf AI Tutorial for Beginners](https://www.youtube.com/watch?v=x1VCmB__TDo)

## Initial Prompt

I want to build an application that helps me check domain names for availability. I want to be able to provide a name and check multiple tlds all at the same time using the whois api. Can you please help me choose the right technologies for this and give me a high level overview of the architecture

## Cascade Response
Of course! I can certainly help you with that. Building a domain availability checker is a great project. Here’s a breakdown of the technologies I recommend and a high-level overview of the architecture.

Technology Recommendations
For a simple yet powerful application like this, I suggest the following stack:

Backend: Python with Flask. Python is an excellent choice for its simplicity and the availability of powerful libraries. The python-whois library makes it easy to perform WHOIS lookups. Flask is a lightweight web framework that's perfect for creating the simple API we'll need.
Frontend: HTML, CSS, and vanilla JavaScript. For the user interface, we can create a clean and simple single-page application. We don't need a complex frontend framework for this, which will keep our project lightweight and easy to understand.
High-Level Architecture
Our application will have two main parts: a frontend that the user interacts with and a backend that does the heavy lifting.

Frontend (Client-Side):
A simple HTML page will serve as the user interface. It will have an input field for the domain name and a list of checkboxes for the TLDs you want to check (e.g., .com, .net, .org).
When the user clicks a "Check" button, JavaScript will gather the domain name and the selected TLDs.
It will then send this information to our backend API.
Finally, it will receive the results from the backend and display which domains are available and which are taken.
Backend (Server-Side):
We'll build a simple API using Flask. This API will have one endpoint, for example, /api/check.
This endpoint will accept the domain name and TLDs from the frontend.
For each domain (e.g., example.com, example.net), it will use the python-whois library to query the appropriate WHOIS server.
After getting the results, it will determine the availability of each domain and send a structured JSON response back to the frontend.
This architecture separates the user interface from the domain checking logic, which makes the application clean, scalable, and easy to maintain.

What do you think of this plan? If you're happy with it, I can start by setting up the project structure and creating the initial files for our backend.