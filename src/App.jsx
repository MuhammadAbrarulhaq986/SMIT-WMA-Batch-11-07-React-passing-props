// Import React and its hooks (useState, useEffect) from the "react" library
import React, { useState, useEffect } from "react";

// Import the axios library for making HTTP requests
import axios from "axios";

// Define a functional component called CardList
const CardList = () => {
  // Initialize a state variable "cards" with an empty array as its initial value
  const [cards, setCards] = useState([]);

  // Use the useEffect hook to fetch data from the API when the component mounts
  useEffect(() => {
    // Make a GET request to the dummy JSON API to fetch data
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Set the "cards" state to the first 5 posts from the API response
        setCards(response.data.slice(0, 5));
      })
      .catch((error) => {
        // Log any errors that occur during the data fetch
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array means this effect will only run once, when the component mounts

  // Return a JSX element that renders a list of cards
  return (
    <div>
      {cards.map((card) => (
        // Render a single card component for each item in the "cards" array
        <div key={card.id} style={styles.card}>
          <h2>{card.title}</h2>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
};

// Define an object "styles" that contains CSS styles for the card component
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "-1px 5px 10px gold",
    backgroundColor: "black",
    color: "white",
  },
};

// Export the CardList component as the default export
export default CardList;
