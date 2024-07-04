import React, { useEffect, useState } from "react";
import { Button, Form, FloatingLabel, Card } from "react-bootstrap";
import Main from "../../components/Main";
import { useDispatch, useSelector } from "react-redux";
import { createNote, resetNoteCreate } from "../../actions/noteActions";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./CreateNote.css";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, success: noteCreated } = noteCreate;

  useEffect(() => {
    if (noteCreated) {
      navigate("/mynotes");
      dispatch(resetNoteCreate());
    }
  }, [noteCreated, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) {
      return;
    }
    dispatch(createNote(title, content, category));
  };
  return (
    <Main title="Create a Note">
      <div className="createContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Card className="p-4 shadow-sm darkCard">
          <Card.Body>
            <Card.Title>Create a New Note</Card.Title>
            <Form onSubmit={submitHandler}>
              <FloatingLabel
                controlId="floatingTitle"
                label="Title"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter the title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingContent"
                label="Content"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Enter the content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingCategory"
                label="Category"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter the category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </FloatingLabel>

              <Button
                size="lg"
                variant="primary"
                className="my-3"
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Note"}
              </Button>
            </Form>
          </Card.Body>
          <Card.Footer
            className="bg-primary "
            style={{ padding: "2%", borderRadius: "8px" }}
          >
            <Card.Title style={{ textAlign: "center" }}>Preview</Card.Title>
            <Card.Text as="div">
              <ReactMarkdown>{content}</ReactMarkdown>
            </Card.Text>
          </Card.Footer>
        </Card>
      </div>
    </Main>
  );
};

export default CreateNote;
