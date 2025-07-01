"use client";

import { newCharData } from "@/data/characterDataPlus";
import {
  CharacterColumn,
  CharacterList,
  CharacterTable,
  CharacterTableBody,
  CharDropDown,
  CharSearchListContainer,
  SearchBarWrapper,
} from "./page.style";
import { SearchBar } from "../page.style";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useMemo, useState } from "react";

export default function CharacterView() {
  const [searchValue, setSearchValue] = useState("");
  const [char, setChar] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const handleSearch = (event: string) => {
    setSearchValue(event);
  };

  const filteredCharList = useMemo(() => {
    return newCharData
      .filter((item) => {
        return item.User.toLocaleLowerCase().includes(
          searchValue.toLocaleLowerCase()
        );
      })
      .map((item) => item.User);
  }, [searchValue]);
  console.log(filteredCharList);
  const character = newCharData.filter((character) => character.User === char);

  return (
    <>
      <CharSearchListContainer>
        <SearchBarWrapper onClick={() => setDropDown(!dropDown)}>
          <Icon path={mdiMagnify} size={0.9} />
          <SearchBar
            type="text"
            value={searchValue}
            onChange={(event) => handleSearch(event.target.value)}
          />
        </SearchBarWrapper>
        {dropDown && (
          <CharacterList>
            {filteredCharList.map((char) => (
              <CharDropDown
                key={char}
                onClick={() => {
                  setDropDown(false);
                  setChar(char);
                  setSearchValue(char);
                }}
              >
                {char}
              </CharDropDown>
            ))}
          </CharacterList>
        )}
      </CharSearchListContainer>
      {character.length !== 0 ? (
        <CharacterTable>
          <CharacterTableBody>
            <CharacterColumn>
              <th>Loves</th>
              {character[0].Loves.map((item) => {
                return <td key={item}>{item}</td>;
              })}
            </CharacterColumn>
            <CharacterColumn>
              <th>Likes</th>
              {character[0].Likes.map((item) => {
                return <td key={item}>{item}</td>;
              })}
            </CharacterColumn>
            <CharacterColumn>
              <th>Neutral</th>
              {character[0].Neutral.map((item) => {
                return <td key={item}>{item}</td>;
              })}
            </CharacterColumn>
            <CharacterColumn>
              <th>Dislikes</th>
              {character[0].Dislikes.map((item) => {
                return <td key={item}>{item}</td>;
              })}
            </CharacterColumn>
            <CharacterColumn borderRight="yep">
              <th>Hates</th>
              {character[0].Hates.map((item) => {
                return <td key={item}>{item}</td>;
              })}
            </CharacterColumn>
          </CharacterTableBody>
        </CharacterTable>
      ) : (
        <div
          style={{
            paddingLeft: "20px",
          }}
        >
          enter a character to view
        </div>
      )}
    </>
  );
}
