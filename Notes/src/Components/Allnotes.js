import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notelist from "./Notelist";
import Updateform from "./Updateform";
import "./Notelist_style.css";
export default function AllNotes() {
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex flex-row">
        <button className="button-74" id="home" onClick={() => navigate("/")}>
          Home
        </button>
        <div className="header">
          <h2>Notes Dashboard</h2>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {notes.map((note, index) => (
          <div>
            {note.edit ? (
              <Updateform note={note} index={index} />
            ) : (
              <Notelist index={index} note={note} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
