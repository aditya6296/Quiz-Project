import { Link, useNavigate } from "react-router";
import "./Home.css";
import { useState } from "react";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Please Enter Your Name.");
    } else {
      navigate("/quiz");
      console.log("Form submitted with:", inputValue);
    }
  };


  
  return (
    <>
      <div className="Main-home">
        <div className="home-page">
          <h1>Programming Pathshala Quiz Platform</h1>
          <p>Contestant Name:</p>
          <div className="Input-home">
            <input
              type="text"
              placeholder="Please enter your name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div id="link">
            <Link to="/quiz" onClick={handleClick}>
              Start Quiz{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
