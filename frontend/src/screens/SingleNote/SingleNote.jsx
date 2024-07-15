import React, { useEffect, useState } from "react";
import { Button, Form, FloatingLabel, Card } from "react-bootstrap";
import Main from "../../components/Main";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../../actions/noteActions";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./SingleNote.css";

const SingleNote = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error, success } = noteUpdate;

  useEffect(() => {
    const fetchNote = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/notes/${id}`);
      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updatedAt);
    };
    fetchNote();
  }, [id]);

  useEffect(() => {
    if (success) {
      navigate("/mynotes");
    }
  }, [success, navigate]);

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNote(id, title, content, category));
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Main title="Edit Note">
      <div className="createContainer">
        <Card className="p-4 shadow-sm darkCard">
          <Card.Header>Edit your Note</Card.Header>
          <Card.Body>
            {loading ? (
              <Loading />
            ) : error ? (
              <ErrorMessage variant="danger">{error}</ErrorMessage>
            ) : (
              <Form onSubmit={updateHandler}>
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
                >
                  Update Note
                </Button>
              </Form>
            )}
          </Card.Body>
          <Card.Footer className="text-muted">
            Updated on: {formatDate(date)}
          </Card.Footer>
        </Card>
        <Card className="p-4 shadow-sm darkCard mt-3">
          <Card.Header>Note Preview</Card.Header>
          <Card.Body>
            <h5>{title}</h5>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Card.Body>
        </Card>
      </div>
    </Main>
  );
};

export default SingleNote;
