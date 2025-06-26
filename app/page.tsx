"use client";
import {
  AppContent,
  SearchBar,
  FilterWrapper,
  SearchResultsWrapper,
  UserDisplay,
  SearchBarWrapper,
} from "./page.style";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useMemo, useState } from "react";
import { HighlightText } from "../components/HighlightText/HighlightText";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { newCharData } from "@/data/characterDataPlus";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [preferences, setPreferences] = useState([
    "Loves",
    "Likes",
    "Neutral",
    "Dislikes",
    "Hates",
  ]);
  const handleSearch = (event: string) => {
    setSearchValue(event);
  };

  const filteredSearch = useMemo(
    () =>
      newCharData.filter((character) => {
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
    <AppContent>
      <FilterWrapper>
        <SearchBarWrapper>
          <Icon path={mdiMagnify} size={0.9} />
          <SearchBar
            type="text"
            value={searchValue}
            onChange={(event) => handleSearch(event.target.value)}
          />
        </SearchBarWrapper>
        <Checkbox
          text="Loves"
          preferences={preferences}
          setPreferences={setPreferences}
        />
        <Checkbox
          text="Likes"
          preferences={preferences}
          setPreferences={setPreferences}
        />
        <Checkbox
          text="Neutral"
          preferences={preferences}
          setPreferences={setPreferences}
        />
        <Checkbox
          text="Dislikes"
          preferences={preferences}
          setPreferences={setPreferences}
        />
        <Checkbox
          text="Hates"
          preferences={preferences}
          setPreferences={setPreferences}
        />
      </FilterWrapper>
      <SearchResultsWrapper>
        {filteredSearch.map((character) => (
          <UserDisplay key={character.User}>
            <div>
              <strong>User: </strong>
              {character.User}
            </div>
            {preferences.includes("Loves") && (
              <HighlightText
                arr={character.Loves}
                searchValue={searchValue}
                header="Loves"
              />
            )}
            {preferences.includes("Likes") && (
              <HighlightText
                arr={character.Likes}
                searchValue={searchValue}
                header="Likes"
              />
            )}
            {preferences.includes("Neutral") && (
              <HighlightText
                arr={character.Neutral}
                searchValue={searchValue}
                header="Neutral"
              />
            )}
            {preferences.includes("Dislikes") && (
              <HighlightText
                arr={character.Dislikes}
                searchValue={searchValue}
                header="Dislikes"
              />
            )}
            {preferences.includes("Hates") && (
              <HighlightText
                arr={character.Hates}
                searchValue={searchValue}
                header="Hates"
              />
            )}
          </UserDisplay>
        ))}
      </SearchResultsWrapper>
    </AppContent>
  );
}
