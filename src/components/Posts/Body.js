import React, { useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { AddPost } from "./AddPost";
import { PostCard } from "./PostCard";
import { ProgressBar } from "./ProgressBar";
import { LoginComp } from "../authentication/LoginComp";
import { RegisterComp } from "../authentication/RegisterComp";
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
          {" "}
          <h3>Show off your Sweet Ride with Car Show Social!</h3>
          <img src="images/TabIcon.png" alt="Logo" />
          <div className="NoUser">
            <h4>doesn't Look Like your Logged In</h4>
            <LoginComp />
            <RegisterComp />
          </div>
          <p className="Desc">
            Post Photos of your Car as well as check out Other car enthusiasts
            Vehicles!
          </p>
        </NoUserBox>
      )}
    </div>
  );
};
const NoUserBox = styled.div`
  display: flex;
  padding: 20px;
  padding-top: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  h3 {
    width: 100%;
    font-weight: bold;
    text-transform: uppercase;
  }
  h4 {
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  p.Desc {
    width: 70vw;
    max-width: 600px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .NoUser {
    width: 90vw;
    max-width: 700px;
    margin-bottom: 50px;
    border-radius: 10px;
    padding: 15px;
    padding-bottom: 40px;
    box-shadow: black 2px 2px 10px;
    background: #2b2b2b;
  }
  img {
    width: 180px;
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
