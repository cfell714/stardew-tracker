import { CheckboxInput, CheckboxWrapper } from "./Checkbox.style";

export const Checkbox = ({
  text,
  preferences,
  setPreferences,
}: {
  text: string;
  preferences: string[];
  setPreferences: (preferences: string[]) => void;
}) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        checked={preferences.includes(text)}
        onChange={() => {
          if (preferences.includes(text)) {
            setPreferences(preferences.filter((item) => item !== text));
          } else {
            setPreferences([...preferences, text.toString()]);
          }
        }}
      />
      {text}
    </CheckboxWrapper>
  );
};
