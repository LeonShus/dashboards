"use client";

import { useColorScheme } from "@mui/material";
import { StyledScrollContainer } from "./styles";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

// import 'react-indiana-drag-scroll/dist/style.css'

interface IProps {
  children: JSX.Element;
}

export const ScrollContainer = ({ children }: IProps) => {
  const { mode } = useColorScheme();

  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  // eslint-disable-next-line
  //@ts-ignore
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    // eslint-disable-next-line
    //@ts-ignore
    <StyledScrollContainer ref={ref} mode={mode} {...events}>
      {children}
    </StyledScrollContainer>
  );
};
