import React, { useEffect, useState } from "react";
import Main from "../../components/Main";
import { Button, Card, Collapse } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, listNotes } from "../../actions/noteActions";
import DeletePrompt from "../../components/DeletePrompt";

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  // More dependencies
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: appendNote } = noteCreate;
  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;
  const noteDelete = useSelector((state) => state.noteDelete);
  const { success: successDelete } = noteDelete;
  //

  const navigate = useNavigate();
  useEffect(() => {
    console.log("note fetch");
    dispatch(listNotes());
  }, [dispatch, appendNote, userInfo, successUpdate, successDelete, navigate]);

  const [openNoteId, setOpenNoteId] = useState(null);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  const deleteHandler = (id) => {
    setNoteToDelete(id);
    setShowDeletePrompt(true);
  };

  const handleClose = () => setShowDeletePrompt(false);

  const handleConfirm = () => {
    dispatch(deleteNote(noteToDelete));
    setShowDeletePrompt(false);
  };

  const toggleHandler = (id) => {
    setOpenNoteId(openNoteId === id ? null : id);
  };

  // Reverse the notes array once
  const reversedNotes = notes ? [...notes].reverse() : [];

  return (
    <Main title={`Hello, ${userInfo?.name || "User"}`}>
      <Link to="/create">
        <Button size="lg" className="ml-10 mb-6">
          New Note +
        </Button>
      </Link>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {reversedNotes
        .filter((filteredNote) =>
          filteredNote.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
          <Card key={note._id} style={{ marginBottom: 10, marginTop: 20 }}>
            <Card.Header
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={() => toggleHandler(note._id)}
                aria-controls={`note-collapse-${note._id}`}
                aria-expanded={openNoteId === note._id}
                variant="dark"
              >
                <span>{note.title}</span>
              </Button>
              <div>
                <Button
                  href={`/note/${note._id}`}
                  variant="primary"
                  className="mx-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            <Collapse in={openNoteId === note._id}>
              <div id={`note-collapse-${note._id}`}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    Category: {note.category}
                    <hr />
                    Content:
                  </Card.Subtitle>
                  <Card.Text>{note.content}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {note.updatedAt
                    ? `Updated on: ${note.updatedAt.substring(0, 10)}`
                    : `Created on: ${note.createdAt.substring(0, 10)}`}
                </Card.Footer>
              </div>
            </Collapse>
          </Card>
        ))}
      <DeletePrompt
        show={showDeletePrompt}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
    </Main>
  );
};

export default MyNotes;
