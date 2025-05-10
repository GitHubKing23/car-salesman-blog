import axios from 'axios';

// OpenAI API endpoint
const openaiEndpoint = 'https://api.openai.com/v1/completions';

// Load the API key from the .env file
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// Log the API key to ensure it is correctly loaded
console.log("API Key:", apiKey);

export const getOpenAIResponse = async (prompt) => {
  // Ensure the API key is being passed in the Authorization header
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,  // Ensure the API key is correctly loaded here
  };

  // Request data to be sent to OpenAI
  const data = {
    model: 'text-davinci-003',  // You can also use 'gpt-3.5-turbo' or 'gpt-4' if available
    prompt: prompt,
    max_tokens: 150,  // Adjust this based on the length of the response you need
    temperature: 0.7,  // Adjust the creativity of the response (between 0 and 1)
  };

  try {
    // Make the POST request to the OpenAI API
    const response = await axios.post(openaiEndpoint, data, { headers });
    
    // Return the response text from OpenAI
    return response.data.choices[0].text;
  } catch (error) {
    // Enhanced error logging
    if (error.response) {
      // Error with the response from OpenAI
      console.error('OpenAI Error Response:', {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
      });
    } else if (error.request) {
      // No response was received
      console.error('No response received from OpenAI:', error.request);
    } else {
      // Error setting up the request
      console.error('Error setting up the request to OpenAI:', error.message);
    }

    // Throw the error to be handled elsewhere
    throw error;
  }
};
