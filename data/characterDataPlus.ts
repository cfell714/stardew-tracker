import { includes } from "lodash/fp";
import characterData from "@/data/characterData.json";

export const newCharData = characterData.map((item) => {
  // Loves
  if (!includes(item.User, ["Haley"])) item.Loves.push("Prismic Shard");
  // Likes
  if (!includes(item.User, ["Sebastian", "Jas", "Vincent"]))
    item.Likes.push("All Artisan Goods");
  if (!includes(item.User, ["Krobus", "Leo", "Willy"]))
    item.Likes.push("All Cooking");
  if (!includes(item.User, ["Sebastian", "Clint", "George"]))
    item.Likes.push("All Flowers");
  if (!includes(item.User, ["Leah", "Linus", "Pierre"]))
    item.Likes.push("All Foraged Minerals");
  if (!includes(item.User, ["Leah", "Linus", "Pierre"]))
    item.Likes.push("All Gems");
  if (!includes(item.User, ["Sam", "Abigail", "Haley", "Jas", "Vincent"]))
    item.Likes.push("All Vegetables");
  if (!includes(item.User, ["Willy", "Krobus", "Leo"]))
    item.Likes.push("Life Eilixr");
  if (!includes(item.User, ["Maru"])) item.Likes.push("Maple Syrup");
  if (
    !includes(item.User, [
      "Sebastian",
      "Penny",
      "Jas",
      "Kent",
      "Leo",
      "Pam",
      "Vincent",
    ])
  )
    item.Likes.push("Pina Colada");
  if (!includes(item.User, ["Elliott", "Leo", "Harvey"]))
    item.Likes.push("Rainbow Shell");
  if (!includes(item.User, ["Linus"])) item.Likes.push("Treasure Chest");

  // Neutral
  if (!includes(item.User, ["Alex", "Elliot", "Penny"]))
    item.Neutral.push("All Books");
  if (!includes(item.User, ["Harvey", "Leah", "Krobus"]))
    item.Neutral.push("Bread");
  if (!includes(item.User, ["Harvey", "Evelyn"])) item.Neutral.push("Coral");
  if (!includes(item.User, ["Elliot", "Harvey", "Penny", "Leo"]))
    item.Neutral.push("Duck Feather");
  if (!includes(item.User, ["Leah"])) item.Neutral.push("Fried Egg");
  if (!includes(item.User, ["Penny", "Leo"])) item.Neutral.push("Hops");
  if (!includes(item.User, ["Haley"])) item.Neutral.push("Mystic Syrup");
  if (!includes(item.User, ["Harvey", "Evelyn", "Leo"]))
    item.Neutral.push("Nautilus Shell");
  if (!includes(item.User, ["Elliot"])) item.Neutral.push("Squid Ink");
  if (!includes(item.User, ["Caroline"])) item.Neutral.push("Tea Leaves");
  if (!includes(item.User, ["Leah", "Maru", "Gus"]))
    item.Neutral.push("Truffle");
  if (!includes(item.User, ["Emily", "Penny", "Sandy"]))
    item.Neutral.push("Wool");

  // Dislikes
  if (!includes(item.User, ["Alex", "Elliot", "Penny"]))
    item.Dislikes.push("All Books");
  if (
    !includes(item.User, [
      "Willy",
      "Pam",
      "Leo",
      "Evelyn",
      "Haley",
      "Elliot",
      "Demetrius",
    ])
  )
    item.Dislikes.push("All Fish");
  if (!includes(item.User, ["Wizard"]))
    item.Dislikes.push("All Geodes", "All Trinkets");
  if (!includes(item.User, ["Wizard", "Dwarf"]))
    item.Dislikes.push("Solar Essence", "Void Essence");
  if (!includes(item.User, ["Linus", "Leah", "Harvey"]))
    item.Dislikes.push("Spring Onion");
  if (!includes(item.User, ["Sebastian", "Krobus"]))
    item.Dislikes.push("Void Egg");

  // Hates
  if (!includes(item.User, ["Wizard", "Dwarf"]))
    item.Hates.push("All Monster Loot");
  if (!includes(item.User, ["Elliot", "Evelyn", "Leo"]))
    item.Hates.push("Sea Urchin");
  if (!includes(item.User, ["Willy", "Krobus"]))
    item.Hates.push("Seafoam Pudding");
  if (!includes(item.User, ["Krobus", "Shane"])) item.Hates.push("Strange Bun");
  if (!includes(item.User, ["Krobus"]))
    item.Hates.push("Void Mayonnaise", "Monster Musk");
  if (!includes(item.User, ["Penny"])) item.Hates.push("Poppy");
  if (!includes(item.User, ["Maru"]))
    item.Hates.push("Radioactive Ore", "Radioactive Bar");
  return {
    ...item,
    Loves: [
      ...item.Loves,
      "Golden Pumpkin",
      "Magic Rock Candy",
      "Pearl",
      "Rabbit's Foot",
      "Stardrop Tea",
    ],
    Likes: [...item.Likes, "All Fruit Tree Fruit"],
    Neutral: [...item.Neutral, "Roe", "Sweet Gem Berry"],
    Dislikes: [
      ...item.Dislikes,
      "All Building Materials",
      "All Artifacts",
      "All Bombs",
      "All Crafted Floors and Paths",
      "All Fences",
      "All Fertilizer",
      "All Geode Minerals",
      "All Seeds",
      "All Sprinklers",
      "All Tackle",
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
      "Tea Set",
      "Unmilled Rice",
      "Vinegar",
      "Wheat Flour",
    ],
    Hates: [
      ...item.Hates,
      "All Bait",
      "All Fossils",
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
      "Seaweed",
      "Secret Note",
      "Slime Egg",
      "Snail",
      "Sugar",
      "Tent Kit",
      "Torch",
      "Warp Totems",
      "White Algae",
      "Golden Coconut",
      "Golden Mystery Box",
      "Golden Tag",
      "Hay",
      "Iron Ore",
      "Journal Scrap",
      "Muscle Remedy",
      "Mystery Box",
      "Oil of Garlic",
      "Qi Seasoning",
      "Rain Totem",
      "Red Mushroom",
      "Sap",
    ],
  };
});
