import { CheckboxInput, CheckboxWrapper } from "@/app/page.style";

export const Checkbox = ({
  text,
  preferences,
  setPreferences,
}: {
  text: string;
  preferences: string[];
  setPreferences: (preferences: string[]) => void;
}) => {
  console.log(text);
  console.log([...preferences, ...text]);
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
