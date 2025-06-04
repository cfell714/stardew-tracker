import Link from "next/link";
import {
  ContentWrapper,
  HeaderComponent,
  SectionDescription,
  SectionTitle,
} from "./mainContent.style";

export const MainContent = () => {
  return (
    <ContentWrapper>
      <HeaderComponent>Chelsea Fell</HeaderComponent>
      <SectionTitle>About</SectionTitle>
      <SectionDescription>
        Currently working as a Software Engineer II at National Grid, an energy
        company based in New England. I work on multiple internal projects
        supporting frontend development. Most of my work involves displaying
        data in a quicker, more consumable, and organized fashion than excel
        sheets that our users currently rely on.
      </SectionDescription>
      <SectionTitle>Education</SectionTitle>
      <SectionDescription>
        <div>Occidental College</div>
        <div>BA in Computer Science and Economics</div>
      </SectionDescription>
      <SectionTitle>Experience</SectionTitle>

      <SectionTitle>Links</SectionTitle>
      <Link href={"https://github.com/cfell714"}>My github!</Link>
      <Link href={"https://www.linkedin.com/in/chelsea-fell/"}>
        My LinkedIn!
      </Link>

      <SectionTitle>Fun Facts!</SectionTitle>
      <SectionDescription>
        <div>I love jigsaw puzzles ** insert some of them **</div>
        <div>
          I enjoy sports and grew up playing/watching basketball and have
          recently been learning how to golf.
        </div>
      </SectionDescription>
    </ContentWrapper>
  );
};
