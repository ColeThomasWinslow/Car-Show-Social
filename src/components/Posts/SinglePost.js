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
              <h4>{value.title}</h4>{" "}
              <p className="user">Posted By: {value.email}</p>
              <p className="likes">Likes: {value.likes}</p>
              <Container>
                <ImgBox>
                  <img src={`${value.imgUrl}`} alt={value.id} />
                </ImgBox>

                <p className="desc">{value.desc}</p>
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

  h4 {
    border-top: 5px solid white;
    width: 100%;
    padding: 20px;
    color: white;
    background: #709b99;
    text-transform: uppercase;

    margin-bottom: 0px;
  }
  p.desc {
    border: 5px solid #709b99;
    font-size: 15px;
    background: #b7ded5;
    padding: 18px;
    color: white;
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
    font-size: 17px;
    display: flex;
    font-weight: bold;
    width: 90%;
    justify-content: flex-end;
    text-transform: uppercase;
    margin: 0px;
  }
  p.user {
    font-size: 20px;
    background: #b7ded5;
    margin-top: 0px;
    width: 100%;
    padding: 0px;
    color: #709b99;
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
  background: #709b99;
  color: #434343;
  &:hover {cursor pointer;
    opacity: 50%;
  }
`;
const ImgBox = styled.div`
  display: flex;

  width: 400px;
  border: 10px solid #b7ded5;
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
