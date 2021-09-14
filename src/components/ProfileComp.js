import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";
import { useFirestore } from "../hooks/useFirestore";
import { Link } from "react-router-dom";
function ProfileComp() {
  const { currentUser } = useContext(AuthContext);
  const { docs } = useFirestore("Posts");
  return (
    <ProfileCont>
      <ProfileBox>
        <ImgWrap>
          <img src="/images/Profile-Icon.png " alt="Profile" />
        </ImgWrap>
        <InfoBox>
          {currentUser && <h4> Username : {currentUser.email} </h4>}
        </InfoBox>
        <InfoBox>
          {currentUser && <h4> Email : {currentUser.email} </h4>}
        </InfoBox>
        <InfoBox>
          <h4> Password : ************ </h4>
        </InfoBox>
        <ChangeBtn>Change Info </ChangeBtn>
      </ProfileBox>

      {docs
        .filter((value) => {
          if (
            value.email.toLowerCase().includes(currentUser.email.toLowerCase())
          ) {
            return value;
          } else if (
            value.email.toLowerCase().includes(currentUser.email.toLowerCase())
          ) {
            return value;
          }
        })
        .map((value) => {
          return (
            <PostBox>
              <Link to={`/posts/${value.id}`}>
                <CardCont>
                  <TopCard>
                    <p>User: {value.email}</p>
                    <h4>{value.title}</h4>
                  </TopCard>

                  <ImgBox>
                    <img src={`${value.imgUrl}`} alt={value.id} />
                  </ImgBox>
                  <CardBox>
                    <LikeBox>
                      <p>LIKES: {value.likes}</p>
                    </LikeBox>
                    <DescriptionBox>
                      <p className="Label">Description:</p>
                      <p className="description">{value.desc}</p>
                    </DescriptionBox>{" "}
                    {currentUser.email === value.email && (
                      <DeletePostBtn>Delete Post</DeletePostBtn>
                    )}
                  </CardBox>
                </CardCont>
              </Link>
            </PostBox>
          );
        })}
    </ProfileCont>
  );
}

export default ProfileComp;
const ProfileCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const ChangeBtn = styled.div`
  background: #709b99;
  width: 200px;
  margin-top: 40px;
  padding: 5px;
  text-align: center;
  color: white;
`;
const InfoBox = styled.div`
  border: solid #b7ded5 5px;
  width: 300px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    background: #709b99;
    color: white;
    width: 100%;
    padding: 10px;
    font-size: 15px;
    font-weight: bold;
  }
`;
const ImgWrap = styled.div`
  border: solid #b7ded5 5px;
  height: 100px;
  width: 100px;

  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: fit;

    width: 70%;
    height: 70%;
  }
`;
const ProfileBox = styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const DeletePostBtn = styled.div`
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  background: #709b99;
  color: #434343;
`;
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
