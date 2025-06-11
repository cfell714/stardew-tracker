import { HighlightedText, ListContainer } from "./HighlightText.style";

export const HighlightText = ({
  arr,
  searchValue,
  header,
}: {
  arr: string[];
  searchValue: string;
  header: string;
}) => {
  return (
    <ListContainer>
      <strong>{header}:</strong>{" "}
      {arr.map((item, index) => {
        if (item.toLowerCase().includes(searchValue.toLowerCase())) {
          const regex = new RegExp(`(${searchValue})`, "gi");

          const parts = item.split(regex);
          return (
            <span key={item + index}>
              {parts.map((part, index) =>
                part.toLowerCase() === searchValue.toLowerCase() ? (
                  <HighlightedText key={index}>{part}</HighlightedText>
                ) : (
                  <span key={index}>{part}</span>
                )
              )}
              ,{" "}
            </span>
          );
        } else return <span key={item + index}>{item}, </span>;
      })}
    </ListContainer>
  );
};
