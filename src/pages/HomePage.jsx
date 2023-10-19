import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";

export default function HomePage() {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  function createNewRoom(e) {}

  function joinRoom() {}

  return (
    <div className="homePageWrapper">
      <main className="formWrapper">
        <img
          src="CodeNow-Logo.png"
          alt="CodeNow-Logo"
          className="homePageLogo"
        />
        <form onSubmit={joinRoom} className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Enter room ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="btn joinBtn" type="submit">
            Code Now
          </button>
          <span className="createInfo">
            No room ID ? <span className="createNewBtn">Create room</span>
          </span>
        </form>
      </main>
      <footer>
        <h4>
          Built with ❤️ &nbsp; by &nbsp;{" "}
          <a href="https://github.com/Krathish-sk/CodeNow">KK</a>
        </h4>
      </footer>
    </div>
  );
}
