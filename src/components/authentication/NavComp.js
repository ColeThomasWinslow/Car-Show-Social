import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoginComp } from "./LoginComp";
import { RegisterComp } from "./RegisterComp";
import styled from "styled-components";
export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <NavCont>
      <div>
        <img src="/images/Logo.png" alt="logo" height="105" />
      </div>
      <div>
        <div>
          {currentUser ? (
            <>
              <UserBox>
                <p>SIGNED IN AS : {currentUser.email}</p>
              </UserBox>
              <LogoutBtn onClick={() => logout()}>Logout</LogoutBtn>
            </>
          ) : (
            <>
              <LoginComp />
              <RegisterComp />
            </>
          )}
        </div>
      </div>
      {currentUser ? (
        <LinkBox>
          <a href="/">
            <img src="/images/Home-Icon.png" alt="Home-Icon" height="20px" />
            Home
          </a>
          <a href="/Profile">
            {" "}
            <img
              src="/images/Profile-Icon.png"
              alt="Profile-Icon"
              height="20px"
            />
            Profile
          </a>
          <a href="/Explore">
            {" "}
            <img
              src="/images/Explore-Icon.png"
              alt="Explore-Icon"
              height="20px"
            />
            Explore
          </a>
        </LinkBox>
      ) : (
        <LinkBox></LinkBox>
      )}
    </NavCont>
  );
};
const UserBox = styled.div`
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
const LinkBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
  background: #709b99;
  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    transition: all 0.03s;

    img {
      margin-right: 10px;
    }
    &:hover {
      font-weight: bold;

      opacity: 40%;
    }
  }
`;
const NavCont = styled.nav`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 10px;

  border-bottom: 10px solid #56c0bd;
  img {
    flex: 1;
  }
`;
const LogoutBtn = styled.div`
  background: #709b99;
  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
  transition: all 0.5s;
  &:hover {
    background: #b7ded5;
    color: #709b99;
  }
`;
