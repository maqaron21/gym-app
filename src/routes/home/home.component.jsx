import { Outlet } from "react-router-dom";
import { FiActivity, FiBookOpen, FiTrendingUp, FiZap } from "react-icons/fi";
import "./home.styles.scss";

const HomePage = () => {
  return (
    <div>
      <div className="home-container">
        <div className="welcome-container">
          <span className="welcome-text">WITAJ, USER</span>
        </div>
        <div className="sessions-container">
          <div className="session-item">
            <h1>+</h1>
          </div>
          <div className="session-item">
            <h1>28-12-2022</h1>
            <p>Sets in total: 4</p>
            <p>Reps in total: 32</p>
            <button>see more</button>
          </div>
          <div className="session-item">
            <h1>28-12-2022</h1>
            <p>Sets in total: 4</p>
            <p>Reps in total: 32</p>
            <button>see more</button>
          </div>
          <div className="session-item">
            <h1>28-12-2022</h1>
            <p>Sets in total: 4</p>
            <p>Reps in total: 32</p>
            <button>see more</button>
          </div>
          <div className="session-item">
            <h1>28-12-2022</h1>
            <p>Sets in total: 4</p>
            <p>Reps in total: 32</p>
            <button>see more</button>
          </div>
          <div className="session-item">
            <h1>28-12-2022</h1>
            <p>Sets in total: 4</p>
            <p>Reps in total: 32</p>
            <button>see more</button>
          </div>
          <div className="session-item">
            <h1>28-12-2022</h1>
            <p>Sets in total: 4</p>
            <p>Reps in total: 32</p>
            <button>see more</button>
          </div>
          <div className="session-item">
            <h1>28-12-2022</h1>
            <p>Sets in total: 4</p>
            <p>Reps in total: 32</p>
            <button>see more</button>
          </div>
        </div>
        <div className="additional-information-container">
          <div className="additional-information-item">
            <div className="additional-information-item-icon">
              <FiActivity color="red" size={125} />
            </div>
            <div className="additional-information-item-text">
              <h1>Burned Calories:</h1>
              <p>2423432423 kcal</p>
            </div>
          </div>
          <div className="additional-information-item">
            <div className="additional-information-item-icon">
              <FiTrendingUp color="red" size={125} />
            </div>
            <div className="additional-information-item-text">
              <h1>Your growth:</h1>
              <p>150%</p>
            </div>
          </div>
          <div className="additional-information-item">
            <div className="additional-information-item-icon">
              <FiZap color="red" size={125} />
            </div>
            <div className="additional-information-item-text">
              <h1>Rest days:</h1>
              <p>12 days</p>
            </div>
          </div>
          <div className="additional-information-item">
            <div className="additional-information-item-icon">
              <FiBookOpen color="red" size={125} />
            </div>
            <div className="additional-information-item-text">
              <h1>New Exercises:</h1>
              <p>242 exercises</p>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default HomePage;
