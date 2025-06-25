"use client";
import {
  AppContent,
  AppWrapper,
  SearchBar,
  FilterWrapper,
  SearchResultsWrapper,
  UserDisplay,
  SearchBarWrapper,
} from "./page.style";
import characterData from "@/data/characterData.json";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useMemo, useState } from "react";
import { HighlightText } from "../components/HighlightText";
import { includes } from "lodash/fp";
import { Checkbox } from "@/components/Checkbox";

const newCharData = characterData.map((item) => ({
  ...item,
  Loves: [
    ...item.Loves,
    "Golden Pumpkin",
    "Magic Rock Candy",
    "Pearl",
    "Rabbit's Foot",
    "Stardrop Tea",
    item.User !== "Haley" ? "Prismic Shard" : "",
  ],
  Likes: [
    ...item.Likes,
    !includes(item.User, ["Sebastian", "Jas", "Vincent"])
      ? "All Artisan Goods"
      : "",
    !includes(item.User, ["Krobus", "Leo", "Willy"]) ? "All Cooking" : "",
    !includes(item.User, ["Sebastian", "Clint", "George"]) ? "All Flowers" : "",
    !includes(item.User, ["Leah", "Linus", "Pierre"])
      ? "All Foraged Minerals"
      : "",
    "All Fruit Tree Fruit",
    !includes(item.User, ["Leah", "Linus", "Pierre"]) ? "All Gems" : "",
    !includes(item.User, ["Sam", "Abigail", "Haley", "Jas", "Vincent"])
      ? "All Vegetables"
      : "",
    !includes(item.User, ["Willy", "Krobus", "Leo"]) ? "Life Eilixr" : "",
    !includes(item.User, ["Maru"]) ? "Maple Syrup" : "",
    !includes(item.User, [
      "Sebastian",
      "Penny",
      "Jas",
      "Kent",
      "Leo",
      "Pam",
      "Vincent",
    ])
      ? "Pina Colada"
      : "",
    !includes(item.User, ["Elliott", "Leo", "Harvey"]) ? "Rainbow Shell" : "",
    !includes(item.User, ["Linus"]) ? "Treasure Chest" : "",
  ],
  Neutral: [
    ...item.Neutral,
    !includes(item.User, ["Alex", "Elliot", "Penny"]) ? "All Books" : "",
    !includes(item.User, ["Harvey", "Leah", "Krobus"]) ? "Bread" : "",
    !includes(item.User, ["Harvey", "Evelyn"]) ? "Coral" : "",
    !includes(item.User, ["Elliot", "Harvey", "Penny", "Leo"])
      ? "Duck Feather"
      : "",
    !includes(item.User, ["Leah"]) ? "Fried Egg" : "",
    !includes(item.User, ["Penny", "Leo"]) ? "Hops" : "",
    !includes(item.User, ["Haley"]) ? "Mystic Syrup" : "",
    !includes(item.User, ["Harvey", "Evelyn", "Leo"]) ? "Nautilus Shell" : "",
    "Roe",
    !includes(item.User, ["Elliot"]) ? "Squid Ink" : "",
    "Sweet Gem Berry",
    !includes(item.User, ["Caroline"]) ? "Tea Leaves" : "",
    !includes(item.User, ["Leah", "Maru", "Gus"]) ? "Truffle" : "",
    "Wheat",
    !includes(item.User, ["Emily", "Penny", "Sandy"]) ? "Wool" : "",
  ],
  Dislikes: [
    ...item.Dislikes,
    !includes(item.User, ["Alex", "Elliot", "Penny"]) ? "All Books" : "",
    "All Building Materials",
    "All Artifacts",
    "All Bombs",
    "All Crafted Floors and Paths",
    "All Fences",
    "All Fertilizer",
    !includes(item.User, [
      "Willy",
      "Pam",
      "Leo",
      "Evelyn",
      "Haley",
      "Elliot",
      "Demetrius",
    ])
      ? "All Fish"
      : "",
    "All Geode Minerals",
    !includes(item.User, ["Wizard"]) ? "All Geodes" : "",
    "All Seeds",
    "All Sprinklers",
    "All Tackle",
    !includes(item.User, ["Wizard"]) ? "All Trinkets" : "",
    "Fireworks",
    "Cave Carrot",
    "Driftwood",
    "Field Snack",
    "Jack-O-Lantern",
    "Oak Resin",
    "Oil",
    "Pine Tar",
    "Price Catalogue",
    "Qi Fruit",
    "Rice",
    !includes(item.User, ["Wizard", "Dwarf"]) ? "Solar Essence" : "",
    !includes(item.User, ["Linus", "Leah", "Harvey"]) ? "Spring Onion" : "",
    "Tea Set",
    "Unmilled Rice",
    "Vinegar",
    !includes(item.User, ["Sebastian", "Krobus"]) ? "Void Egg" : "",
    !includes(item.User, ["Wizard", "Dwarf"]) ? "Void Essence" : "",
    "Wheat Flour",
  ],
  Hates: [
    ...item.Hates,
    "All Bait",
    "All Fossils",
    !includes(item.User, ["Wizard", "Dwarf"]) ? "All Monster Loot" : "",
    "All Trash",
    "Artifact Trove",
    "Blue Grass Starter",
    "Bug Steak",
    "Butterfly Powder",
    "Carp",
    "Cookout Kit",
    "Copper Ore",
    "Crab Pot",
    "Dragon Tooth",
    "Drum Block",
    "Energy Tonic",
    "Error Item",
    "Explosive Ammo",
    "Fairy Dust",
    "Flute Block",
    "Grass Starter",
    "Green Algae",
    !includes(item.User, ["Elliot", "Evelyn", "Leo"]) ? "Sea Urchin" : "",
    !includes(item.User, ["Willy", "Krobus"]) ? "Seafoam Pudding" : "",
    "Seaweed",
    "Secret Note",
    "Slime Egg",
    "Snail",
    "Strange Bun",
    !includes(item.User, ["Krobus", "Shane"]) ? "Strange Bun" : "",
    "Sugar",
    "Tent Kit",
    "Torch",
    !includes(item.User, ["Krobus"]) ? "Void Mayonnaise" : "",
    "Warp Totems",
    "White Algae",
    "Golden Coconut",
    "Golden Mystery Box",
    "Golden Tag",
    "Hay",
    "Iron Ore",
    "Journal Scrap",
    !includes(item.User, ["Krobus"]) ? "Monster Musk" : "",
    "Muscle Remedy",
    "Mystery Box",
    "Oil of Garlic",
    !includes(item.User, ["Penny"]) ? "Poppy" : "",
    "Qi Seasoning",
    !includes(item.User, ["Maru"]) ? "Radioactive Bar" : "",
    !includes(item.User, ["Maru"]) ? "Radioactive Ore" : "",
    "Rain Totem",
    "Red Mushroom",
    "Sap",
  ],
}));

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
    <AppWrapper>
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
    </AppWrapper>
  );
}
