import React, { useRef, useState } from "react";
import "./dashboard.css";
import img from "../../../img/imgdog.jpg";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Register from "./Register";

function Dashboard() {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <div className="dog">
      <div className="content">
        <div className="dog-image" style={{ backgroundImage: `url(${img})` }}>
          <h2>Food & Accessories</h2>
          <button
            type="button"
            className=""
            onClick={togglePopover}
            ref={popoverRef}
          >
            30% Discount
          </button>

          {showPopover && (
            <div id="register" className="register-container">
              <span>
                {" "}
                <Register />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
