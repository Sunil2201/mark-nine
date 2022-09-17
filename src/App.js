import { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./styles.css";

const bookDB = require("./DB.json");
var genres = Object.keys(bookDB);

export default function App() {
  const [genre, setGenre] = useState("historical-fiction");

  function genreClickHandler(genre) {
    // console.log(genre)
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Sunil's Book Recommendation</h1>
      <p>Check out my favorite books! Pick a genre to get started </p>
      <ul className="genres">
        {genres.map((genre) => {
          return (
            <li onClick={() => genreClickHandler(genre)} className="genreItem">
              {genre}
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="bookContainer">
        <ul className="list">
          {bookDB[genre].map((book) => {
            return (
              <li className="bookItem">
                <img className="bookImage" src={book.photoURL} alt="" />
                <div className="bookDetails">
                  <div className="bookName">{book.Name}</div>
                  <div className="bookAuthor">{book.Author}</div>
                  <div className="bookRatings">{book.Rating}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <footer>
        <h3>
          Developed with
          <span role="img" aria-label="heart">
            ❤️
          </span>
          by <span>Sunil Ballani</span>
        </h3>
        <li className="list-item-inline">
          <a
            className="link"
            target="_blank"
            href="https://github.com/Sunil2201"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link"
            target="_blank"
            href="https://twitter.com/imsunilballani"
          >
            <FaTwitter size={30} />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/sunil-ballani-17b31b200/"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
      </footer>
    </div>
  );
}
