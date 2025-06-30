"use client";

import { newCharData } from "@/data/characterDataPlus";

export default function CharacterView() {
  const character = newCharData.filter(
    (character) => character.User === "Alex"
  );
  console.log(character);

  return (
    <table
      style={{ display: "flex", flexDirection: "row", overflow: "scroll" }}
    >
      <tbody style={{ display: "flex", flexDirection: "row" }}>
        <tr style={{ display: "flex", flexDirection: "column" }}>
          <th>Loves</th>
          {character[0].Loves.map((item) => {
            return <td key={item}>{item}</td>;
          })}
        </tr>
        <tr style={{ display: "flex", flexDirection: "column" }}>
          <th>Likes</th>
          {character[0].Likes.map((item) => {
            return <td key={item}>{item}</td>;
          })}
        </tr>
        <tr style={{ display: "flex", flexDirection: "column" }}>
          <th>Neutral</th>
          {character[0].Neutral.map((item) => {
            return <td key={item}>{item}</td>;
          })}
        </tr>
        <tr style={{ display: "flex", flexDirection: "column" }}>
          <th>Dislikes</th>
          {character[0].Dislikes.map((item) => {
            return <td key={item}>{item}</td>;
          })}
        </tr>
        <tr style={{ display: "flex", flexDirection: "column" }}>
          <th>Hates</th>
          {character[0].Hates.map((item) => {
            return <td key={item}>{item}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
}
