import { Feedback } from '../App'; // Import the Feedback type from App.tsx

let responses: Feedback[] = []; // Initialize an empty array

export const addResponse = (response: Feedback) => {
  responses.push(response);
  // Consider using localStorage or a database for persistent storage in a real app
  console.log("Responses:", responses);
};

export const getResponses = () => responses; // Function to retrieve all responses
