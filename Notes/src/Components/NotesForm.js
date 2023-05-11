import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../Redux/Action";
import "./Notelist_style.css";

export default function NotesForm() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmission(e) {
    e.preventDefault();
    dispatch(addNote(title, content));
    setTitle("");
    setContent("");
    navigate("/allNotes");
  }

  return (
    <>
      <div class="d-flex justify-content-around" id="banner">
        <div id="App_intro">
          <h4>Simplest way to keep notes</h4>
          <h6>
            Organize your notes, Checklists and tasks
            <br />
            all in one place. Quickly jot down notes <br />
            and update any time.
          </h6>
        </div>
        <div id="form">
          <centre>
            <h3>Quick note</h3>
          </centre>
          <form onSubmit={handleSubmission}>
            Title
            <input
              type="text"
              name="title"
              className="fillbox"
              value={title}
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            Content
            <input
              type="text"
              name="content"
              className="fillbox"
              value={content}
              placeholder="Enter content"
              onChange={(e) => setContent(e.target.value)}
              required
            />{" "}
            <br />
            <br />
            <button class="button-74">Add note</button>
            <button
              className="button-74"
              id="notebtn"
              onClick={() => navigate("/allNotes")}
            >
              Notelist
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
