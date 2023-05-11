import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../Redux/Action";
import "./Updatestyle.css";
import "./Notelist_style.css";
export default function Updateform(props) {
  const dispatch = useDispatch();
  let getTitle = useRef("");
  let getMessage = useRef("");
  function handleUpdate(e) {
    e.preventDefault();
    const newTitle = getTitle.value;
    const newMessage = getMessage.value;
    const data = {
      newTitle,
      newMessage,
    };

    dispatch(updateNote(props.index, data));
  }
  return (
    <>
      <div id="form2">
        <form onSubmit={handleUpdate}>
          <input
            required
            type="text"
            className="fillbox"
            ref={(input) => (getTitle = input)}
            defaultValue={props.note.title}
            placeholder="Enter Note Title"
          />
          <br />
          <br />
          <textarea
            required
            className="fillbox"
            rows="5"
            cols="28"
            ref={(input) => (getMessage = input)}
            defaultValue={props.note.content}
            placeholder="Enter Note"
          />
          <br />
          <br />
          <button className="button-74">Update</button>
        </form>
      </div>
    </>
  );
}
