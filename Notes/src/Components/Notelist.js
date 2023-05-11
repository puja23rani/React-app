import "./cardstyle.css";
import { useDispatch } from "react-redux";
import { removeNote, editNote } from "../Redux/Action";

export default function Notelist(props) {
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  return (
    <div className="card" id="note" style={{ width: "18rem", margin: "2rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.note.title}</h5>
        <p className="card-text">{props.note.content}</p>

        <button
          className="button-34"
          onClick={() => dispatch(removeNote(props.index))}
        >
          Delete
        </button>

        <button
          style={{ marginLeft: 6 }}
          className="button-35"
          onClick={() => dispatch2(editNote(props.index))}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
