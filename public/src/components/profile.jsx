import React from 'react';
import styled from 'styled-components';

export default function Profile({ user }) {
  const { username, email, bio } = user;

  return (
    <Container>
      <h1>User Profile</h1>
      <div>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
      {/* Additional section to check if it's working */}
      <CheckWorking>
        <h2>Checking if it's working</h2>
        <p>If you can see this text, then your Profile component is working properly!</p>
      </CheckWorking>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
`;

const CheckWorking = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;

  h2 {
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;
