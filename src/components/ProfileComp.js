import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

function ProfileComp() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <ProfileBox>
        <img src="/images/Profile-Icon.png " alt="Profile" height="100px" />
        {currentUser && <h4> Email : {currentUser.email} </h4>}
      </ProfileBox>
    </div>
  );
}

export default ProfileComp;
const ProfileBox = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    margin: 20px;
  }
`;
