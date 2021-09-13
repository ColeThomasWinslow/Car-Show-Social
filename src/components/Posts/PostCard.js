import React from "react";

import styled from "styled-components";

export const PostCard = ({ props }) => {
  return (
    <PostBox>
      <CardCont>
        {/* <button onClick={AddLike}>Add Like </button> */}
        <TopCard>
          <p>User: {props.email}</p>
          <h4>{props.title}</h4>
        </TopCard>

        <ImgBox>
          <img src={`${props.imgUrl}`} alt={props.id} />
        </ImgBox>
        <CardBox>
          <LikeBox>
            {/* <input
              type="radio"
              onClick={washingtonRef.update({
                likes: firebase.firestore.FieldValue.increment(50),
              })}
            /> */}
            <p>LIKES: {props.likes}</p>
          </LikeBox>
          <DescriptionBox>
            <p className="Label">Description:</p>
            <p className="description">{props.desc}</p>
          </DescriptionBox>
        </CardBox>
      </CardCont>
    </PostBox>
  );
};
const TopCard = styled.div`
  width: 100%;

  p {
    border-radius: 5px 5px 0px 0px;
    color: #709b99;
    background: #b7ded5;
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
  background: #b7ded5;
  p.Label {
    border-top: solid #709b99 10px;
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
  p.Top {
    width: 100%;
    margin: 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
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
  border-radius: 5px;
  box-shadow: grey 0px 0px 10px;
  border: 5px solid white;
  align-items: center;
  transition: all 0.5s;
  h4 {
    color: white;
    background: #709b99;
    font-size: 15px;
    width: 100%;
    text-align: left;
    margin: 0px;
    padding-top: 10px;
    padding-left: 20px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }

  &:hover {
    cursor: pointer;
    opacity: 90%;
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
`;
const CardBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
