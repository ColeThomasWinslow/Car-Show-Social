import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <NavCont>
      <DevImg src="/images/Dev-Tag.png" alt="Dev" />
      <div className="LogoBox">
        <img className="logo" src="/images/logo.png" alt="logo" />

        <div>
          <div>
            {currentUser ? (
              <>
                <UserBox>
                  <p>SIGNED IN AS : {currentUser.email}</p>
                </UserBox>
                <Link to={"/"}>
                  <LogoutBtn onClick={() => logout()}>Logout</LogoutBtn>
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>{" "}
        </div>
      </div>
      {currentUser ? (
        <LinkBox>
          <a href="/">
            <svg
              id="SvgjsSvg1001"
              width="35"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs id="SvgjsDefs1002"></defs>
              <g id="SvgjsG1008" transform="matrix(1,0,0,1,0,0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
                    fill="#ff8178"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </a>
          <a href="/Profile">
            <svg
              id="SvgjsSvg1012"
              width="35"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs id="SvgjsDefs1013"></defs>
              <g id="SvgjsG1014" transform="matrix(1,0,0,1,0,0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="35"
                  height="48"
                >
                  <path
                    d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"
                    fill="#ff8178"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </a>
          <a href="/Explore">
            <svg
              id="SvgjsSvg1017"
              width="35"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs id="SvgjsDefs1018"></defs>
              <g id="SvgjsG1019" transform="matrix(1,0,0,1,0,0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    fill="#ff8178"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </a>
        </LinkBox>
      ) : (
        <LinkBox></LinkBox>
      )}
    </NavCont>
  );
};
const DevImg = styled.img`
  width: 200px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 20;
`;
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
  background: #2b2b2b;
  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
    color: #ff8178;
    text-decoration: none;
    transition: all 0.03s;
    font-weight: bold;
    img {
      margin-right: 10px;
    }
    &:hover {
      cursor: pointer;
      opacity: 50%;
    }
  }
`;
const NavCont = styled.nav`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 50px;
  box-shadow: black 0px 10px 20px;
  .LogoBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  img {
    width: 200px;
  }
`;
const LogoutBtn = styled.div`
  background: #2b2b2b;
  color: white;
  box-shadow: black 2px 2px 5px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
  transition: all 0.5s;
  &:hover {
    background: black;
    color: white;
  }
`;
