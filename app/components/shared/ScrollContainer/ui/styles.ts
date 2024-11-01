import styled from "@emotion/styled";

export const StyledScrollContainer = styled.div<{
  mode: "light" | "dark" | "system" | undefined;
}>`
  overflow-x: auto;

  overflow: auto;
  ${({ mode }) => mode === "dark" && "scrollbar-color: #515151 #121212"};

  scrollbar-width: thin;
`;
