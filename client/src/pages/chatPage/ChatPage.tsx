import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Conversation from "../../components/chat/Conversation";
import Chats from "../../components/chat/Chats";
import { Chat } from "../../types/chat";

const ChatPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="vh-100 py-5">
      <Container className="h-100">
        <Row className="h-100 gap-3">
          <Col xs lg="3">
            <Chats />
          </Col>
          <Col>
            <Conversation />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatPage;
