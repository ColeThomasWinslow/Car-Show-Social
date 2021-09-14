import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

function ProfileComp() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <ProfileBox>
        <ImgWrap>
          <img src="/images/Profile-Icon.png " alt="Profile" />
        </ImgWrap>
        {currentUser && <h4> Email : {currentUser.email} </h4>}
      </ProfileBox>
    </div>
  );
}

export default ProfileComp;
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
  padding-top: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
