import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const storedUser = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
        if (storedUser) {
          const { username } = JSON.parse(storedUser);
          setUserName(username);
        }
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <Container>
      <RobotImage src={Robot} alt="Robot" />
      <WelcomeText>
        Welcome, <UserName>{userName || "User"}!</UserName>
      </WelcomeText>
      <Instruction>Please select a chat to start messaging.</Instruction>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #4ed16434;
`;

const RobotImage = styled.img`
  height: 20rem;
  transition: 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

const WelcomeText = styled.h1`
  margin-top: 1rem;
  font-size: 2rem;
  color:black;
`;

const UserName = styled.span`
  color: #4e0eff; /* Purple */
`;

const Instruction = styled.h3`
  margin-top: 1rem;
  font-size: 1.2rem;
  text-align: center;
  color: black;
`;
