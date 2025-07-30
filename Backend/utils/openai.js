import 'dotenv/config';
import OpenAI from 'openai';

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getOpenAIAPIResponse = async (message) => {
  try {
    // Call the API using the library's create method
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: message }],
    });

    // Return the assistant's reply
    return completion.choices[0].message.content;

  } catch (err) {
    // The library provides detailed error objects
    console.error("Error calling OpenAI API:", err);
    // Throw the error so the route handler in chat.js can catch it
    throw err;
  }
};

export default getOpenAIAPIResponse;





// import "dotenv/config";

// const getOpenAIAPIResponse = async(message) => {
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-4o-mini",
//             messages: [{
//                 role: "user",
//                 content: message
//             }]
//         })
//     };

//     try {
//         const response = await fetch("https://api.openai.com/v1/chat/completions", options);
//         // Check if the API returned an error
//         if (!response.ok) {
//             const errorData = await response.json(); // Get the error details from OpenAI
//             console.error("OpenAI API Error:", errorData);
//             throw new Error(`OpenAI API returned an error: ${errorData.error.message}`);
//         }
//         const data = await response.json();
//         return data.choices[0].message.content; //reply
//     } catch(err) {
//         console.error("Error in getOpenAIAPIResponse:", err);
//         // Re-throw the error so the calling function knows something went wrong
//         throw err; 
//     }
// }

// export default getOpenAIAPIResponse;