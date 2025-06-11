"use client";
import {
  AppContent,
  AppWrapper,
  SearchBarWrapper,
  SearchResultsWrapper,
  UserDisplay,
} from "./page.style";
import characterData from "@/data/characterData.json";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useMemo, useState } from "react";
import { HighlightText } from "../components/HighlightText";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: string) => {
    setSearchValue(event);
  };

  const filteredSearch = useMemo(
    () =>
      characterData.filter((character) => {
        if (
          character.Loves.some((value) =>
            value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
          ) ||
          character.Likes.some((value) =>
            value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
          ) ||
          character.Neutral.some((value) =>
            value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
          ) ||
          character.Dislikes.some((value) =>
            value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
          ) ||
          character.Hates.some((value) =>
            value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
          ) ||
          character.User.toLocaleLowerCase().includes(
            searchValue.toLocaleLowerCase()
          )
        )
          return character;
      }),
    [searchValue]
  );
  return (
    <AppWrapper>
      <AppContent>
        <SearchBarWrapper>
          <Icon path={mdiMagnify} size={0.9} />
          <input
            type="text"
            value={searchValue}
            onChange={(event) => handleSearch(event.target.value)}
          />
        </SearchBarWrapper>
        <SearchResultsWrapper>
          {filteredSearch.map((character) => (
            <UserDisplay key={character.User}>
              <div>
                <strong>User: </strong>
                {character.User}
              </div>
              <HighlightText
                arr={character.Loves}
                searchValue={searchValue}
                header="Loves"
              />
              <HighlightText
                arr={character.Likes}
                searchValue={searchValue}
                header="Likes"
              />
              <HighlightText
                arr={character.Neutral}
                searchValue={searchValue}
                header="Neutral"
              />
              <HighlightText
                arr={character.Dislikes}
                searchValue={searchValue}
                header="Dislikes"
              />
              <HighlightText
                arr={character.Hates}
                searchValue={searchValue}
                header="Hates"
              />
            </UserDisplay>
          ))}
        </SearchResultsWrapper>
      </AppContent>
    </AppWrapper>
  );
}
