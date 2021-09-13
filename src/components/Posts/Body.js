import React, { useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { AddPost } from "./AddPost";
import { PostCard } from "./PostCard";
import { ProgressBar } from "./ProgressBar";
import styled from "styled-components";
export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { docs } = useFirestore("Posts");
  // console.log("Docs", docs);
  return (
    <div>
      {" "}
      {currentUser ? (
        <Container className="container">
          {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

          {globalMsg && <Alert variant="info">{globalMsg}</Alert>}

          {currentUser && <AddPost setAuction={setAuction} />}

          {docs && (
            <AuctionCont>
              {docs.map((doc) => {
                return <PostCard props={doc} key={Math.random(0.5)} />;
              })}
            </AuctionCont>
          )}
        </Container>
      ) : (
        <NoUserBox>
          <h3>Show off your Sweet Ride with Car Show Social!</h3>
          <img
            src="images/Profile-Icon.png"
            alt="questionMark"
            height="150px"
          />
          <h4>doesn't Look Like your Logged In ...</h4>
          <p>Login or Register Now</p>
        </NoUserBox>
      )}
    </div>
  );
};
const NoUserBox = styled.div`
  display: flex;
  padding: 20px;
  padding-top: 50px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #709b99;
  text-align: center;
  h3 {
    text-transform: uppercase;
    max-width: 500px;
  }
  h4 {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
  }
  img {
    margin: 20px;
  }
`;
const Container = styled.div`
  margin-top: 20px;
  h3 {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    background: #dfe2e3;
    box-shadow: black 0px 0px 15px;
    outline: 2px solid #a7a7a7;
    margin-top: 20px;
    text-transform: uppercase;
    padding: 10px;
    align-items: flex-start;
  }
`;
const AuctionCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
