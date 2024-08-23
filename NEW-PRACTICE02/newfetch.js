const apiURL = 'https://swapi.dev/api/people/'


// Define the API URL for the first page
const apiUrl = 'https://swapi.dev/api/people/';

// Define an async function to fetch and process data
async function fetchThreePeopleNames() {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    
    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the JSON from the response
    const data = await response.json();

    // Use the map method to extract names from the first 3 people
    // Ensure that we do not access more data than available
    const names = data.results.slice(0, 3).map(person => person.name);

    // Log the names to the console
    console.log(names);
  } catch (error) {
    // Handle any errors that occurred during fetch or processing
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the async function
fetchThreePeopleNames();