import { useState, useEffect, useRef } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { toast } from "react-hot-toast";
import { Client } from "../components";

export default function EditorPage() {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const location = useLocation();
  const codeRef = useRef(null);
  const [clients, setClients] = useState([
    { socketID: "1", username: "Krathish" },
  ]);

  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success("RoomID copied to clipboard");
    } catch (error) {
      toast.error("Could not copy the room id");
    }
  }

  function leaveRoom() {
    navigate("/");
  }

  if (!location.state) {
    return <Navigate to="/" />;
  }

  return (
    <main className="mainWrap">
      <section className="aside">
        <div className="asideInner">
          <div className="logo">
            <img
              src="/CodeNow-Logo.png"
              alt="CodeNow-Logo"
              className="logoImage"
            />
          </div>
          <h3>On Air</h3>
          <div className="clientList">
            {clients.map((client) => (
              <Client key={client.socketID} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn" onClick={copyRoomId}>
          Copy Room ID
        </button>
        <button className="btn leaveBtn" onClick={leaveRoom}>
          Leave Room
        </button>
      </section>
      <section className="editorWrap">
        {/* Here goes editor component */}
      </section>
    </main>
  );
}
