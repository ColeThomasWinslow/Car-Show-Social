import React, { useContext } from "react";

import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
export const PostCard = ({ props }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <PostBox>
      <CardCont>
        <TopCard>
          <p>User: {props.email}</p>
          <h4>{props.title}</h4>
        </TopCard>
        <Link className="Linked" to={`/posts/${props.id}`}>
          <ImgBox>
            <img src={`${props.imgUrl}`} alt={props.id} />
          </ImgBox>{" "}
        </Link>
        <CardBox>
          <LikeBox>
            <p>LIKES: {props.likes}</p>
          </LikeBox>
          <DescriptionBox>
            <p className="Label">Description:</p>
            <p className="description">{props.desc}</p>
          </DescriptionBox>{" "}
          {currentUser.email === props.email && (
            <DeletePostBtn>Delete Post</DeletePostBtn>
          )}
        </CardBox>
      </CardCont>
    </PostBox>
  );
};
const DeletePostBtn = styled.div`
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  background: black;
  color: #434343;
`;
const TopCard = styled.div`
  width: 100%;

  h4 {
    text-align: center;
    width: 100%;
  }
  p {
    border-bottom: 2px solid #ff8178;
    border-radius: 5px 5px 0px 0px;
    color: white;
    background: #2b2b2b;
    text-align: right;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    font-size: 14px;
    margin: 0px;
  }
`;
const LikeBox = styled.div`
  position: relative;
  margin: 0px;
  right: -100px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  p {
    width: 100%;
    display: flex;
    text-align: right;
    padding: 8px;
    margin: 0px;
  }
`;
const DescriptionBox = styled.div`
  color: white;

  width: 100%;
  background: #ff8178;
  p.Label {
    border-top: solid black 10px;
    width: 100%;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: -20px;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
  }
  p.description {
    margin-top: -10px;
    padding: 10px;
    text-align: center;
    background: white;
    color: black;
    font-size: 12px;
  }
`;

const PostBox = styled.div`
  display: flex;
  object-fit: fit;
  justify-content: space-evenly;
  flex-wrap: wrap;
  span.check {
    margin-right: 12px;
  }

  div.btn {
    text-transform: uppercase;
    font-size: 15px;
    margin: 20px;
    &:hover {
      opacity: 100%;
      font-weight: bold;
      background-color: #1f4825;
    }
  }
`;
const CardCont = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin: 20px;
  border-radius: 10px;
  box-shadow: black 0px 0px 35px;
  align-items: center;
  transition: all 0.5s;
  h4 {
    color: white;
    background: black;
    font-size: 15px;
    width: 100%;
    font-weight: bold;
    text-align: center;
    margin: 0px;
    padding-top: 10px;
    padding-left: 20px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  .Linked {
    width: 100%;
  }
`;
const ImgBox = styled.div`
  display: flex;

  width: 100%;
  height: 250px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;
const CardBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
