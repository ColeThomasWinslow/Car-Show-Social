import React, { useState } from "react";
import styled from "styled-components";
import { useFirestore } from "../hooks/useFirestore";
import { Link } from "react-router-dom";
function Explore() {
  const [Search, setSearch] = useState("");
  const { docs } = useFirestore("Posts");

  return (
    <div>
      <SearchContainer>
        <SearchBox>
          <input
            placeholder="Search A type Of Car"
            onChange={(event) => setSearch(event.target.value)}
          />

          <div>
            {docs
              .filter((value) => {
                if (Search === "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(Search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((value) => {
                return (
                  <Link to={`/posts/${value.id}`}>
                    <ListBox>
                      <ImgWrap>
                        <img src={value.imgUrl} alt={value.id} />
                      </ImgWrap>
                      <Info>
                        <p className="title">{value.title}</p>
                        <p>{value.email}</p>
                        <p>Go To Post</p>
                      </Info>
                    </ListBox>
                  </Link>
                );
              })}
          </div>
        </SearchBox>
      </SearchContainer>
    </div>
  );
}

export default Explore;
const Info = styled.div`
  display: flex;

  height: 70px;
  width: 50vw;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin: 8px;
    margin-top: 0px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    @media only screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
  p.title {
    color: #b7ded5;
    font-size: 20px;
    width: 200px;
    @media only screen and (max-width: 600px) {
      font-size: 15px;
    }
  }
`;
const ImgWrap = styled.div`
  display: flex;
  width: 90px;
  height: 90px;

  align-items: center;
`;
const ListBox = styled.div`
  display: flex;
  align-items: center;
  border-top: solid #b7ded5 10px;
  justify-content: center;
  margin: 15px;
  margin-bottom: 30px;
  background: #709b99;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &:hover {
    opacity: 90%;
    cursor: pointer;
  }
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  input {
    border: 4px solid #709b99;
    text-align: center;
    margin-top: 10px;
    padding: 5px;
    border-radius: 4px;
    width: 90vw;
    max-width: 500px;
    text-transform: uppercase;
    min-width: 200px;
  }
`;
const SearchContainer = styled.div`
  display: flex;

  width: 100%;
  justify-content: center;
`;
