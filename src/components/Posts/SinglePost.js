import React, { useContext } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";
function SinglePost() {
  const URL = window.location;
  const ID = URL.toString().split("/")[4];
  const { docs } = useFirestore("Posts");
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      {docs
        .filter((value) => {
          if (value.id.toLowerCase().includes(ID.toLowerCase())) {
            return value;
          } else if (value.id.toLowerCase().includes(ID.toLowerCase())) {
            return value;
          }
        })
        .map((value) => {
          return (
            <PostBox>
              {" "}
              <p className="user">Posted By: {value.email}</p>
              <h4>{value.title}</h4>{" "}
              <Container>
                <ImgBox>
                  {" "}
                  <p className="likes">Likes: {value.likes}</p>
                  <img src={`${value.imgUrl}`} alt={value.id} />
                </ImgBox>
                <p className="desc">{value.desc}</p>{" "}
                {currentUser.email === value.email ? (
                  <DeletePostBtn>Delete Post</DeletePostBtn>
                ) : (
                  <DeletePostBtn></DeletePostBtn>
                )}
              </Container>
            </PostBox>
          );
        })}
    </div>
  );
}

export default SinglePost;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 50px;
`;
const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: base-line;
  margin-top: 40px;
  h4 {
    width: 100%;
    padding: 20px;
    color: white;
    background: black;
    text-transform: uppercase;
    margin: 0px;
  }
  p.desc {
    border: 5px solid black;
    box-shadow: black 2px 2px 10px;
    font-size: 15px;
    color: #2b2b2b;
    padding: 18px;
    background: white;
    margin: 10px;
    margin-top: 20px;
    text-align: center;
    width: 400px;
    height: 100%;
    @media only screen and (max-width: 600px) {
      width: 350px;
    }
  }
  p.likes {
    padding-top: 10px;
    padding-bottom: 10px;
    background: #ff8178;
    font-size: 14px;
    display: flex;
    font-weight: bold;
    width: 100%;
    justify-content: center;
    text-transform: uppercase;
    margin: 0px;
  }
  p.user {
    font-size: 15px;

    background: #2b2b2b;
    margin: 0px;
    width: 100%;
    padding: 10px;
    color: white;
    padding-right: 40px;
    text-align: right;
  }
`;
const DeletePostBtn = styled.div`
  width: 100%;
  font-weight: bold;
  display: flex;
  margin-top:50px;
  padding: 5px;
  justify-content: center;
  background: black;
  color: #434343;
  &:hover {cursor pointer;
    opacity: 50%;
  }
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: black 2px 2px 25px;
  height: 400px;
  @media only screen and (max-width: 600px) {
    width: 270px;
    height: 270px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
