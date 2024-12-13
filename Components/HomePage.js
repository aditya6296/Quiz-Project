import { Link } from "react-router";
import "./Home.css";


const HomePage = () => {
  return (
    <>
      <div className="Main-home">
        <div className="home-page">
          <h1>Programming Pathshala Quiz Platform</h1>
          <p>Contestant Name:</p>
          <div className="Input-home"><input
            type="text"
            placeholder="Please enter your name"
          /></div>
          <div id="link">
            <Link to="/quiz">Start Quiz</>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
