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

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: string) => {
    setSearchValue(event);
  };

  const filteredSearch = useMemo(
    () =>
      characterData.filter((character) => {
        console.log(character);
        console.log(
          character.Loves.some((value) => value.includes(searchValue))
        );

        if (
          character.Loves.some((value) => value.includes(searchValue)) ||
          character.Likes.some((value) => value.includes(searchValue)) ||
          character.Neutral.some((value) => value.includes(searchValue)) ||
          character.Dislikes.some((value) => value.includes(searchValue)) ||
          character.Hates.some((value) => value.includes(searchValue)) ||
          character.User.includes(searchValue)
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
              <div>User: {character.User}</div>
              <div>
                Loves:{" "}
                {character.Loves.filter((value) =>
                  value.includes(searchValue)
                ).join(", ")}
              </div>
              <div>
                Likes:{" "}
                {character.Likes.filter((value) =>
                  value.includes(searchValue)
                ).join(", ")}
              </div>
              <div>
                Neutral:{" "}
                {character.Neutral.filter((value) =>
                  value.includes(searchValue)
                ).join(", ")}
              </div>
              <div>
                Dislikes:{" "}
                {character.Dislikes.filter((value) =>
                  value.includes(searchValue)
                ).join(", ")}
              </div>
              <div>
                Hates:{" "}
                {character.Hates.filter((value) =>
                  value.includes(searchValue)
                ).join(", ")}
              </div>
            </UserDisplay>
          ))}
        </SearchResultsWrapper>
      </AppContent>
    </AppWrapper>
  );
}
