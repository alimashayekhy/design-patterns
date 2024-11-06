This README is for the adapter-2.js

Example: Adapting a Legacy API for User Data

Imagine you have a new application that fetches user data in a specific JSON format, but the server provides data in a legacy format that doesn’t match what your application expects. Using the Adapter pattern, we’ll create a wrapper to convert the data format from the server to the format expected by the application.

1- The application expects user data in this format:

{
"fullName": "John Doe",
"age": 30,
"email": "john@example.com"
}

2- However, the legacy server provides data in this format:

{
"first_name": "John",
"last_name": "Doe",
"birth_year": 1993,
"email_address": "john@example.com"
}

The Adapter pattern can help us bridge the gap by converting the server data to match the application’s expected format.
