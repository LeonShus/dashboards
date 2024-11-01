"use client";

import { Box, Stack, useColorScheme } from "@mui/material";
import { ReactNode, useEffect } from "react";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import styled from "@emotion/styled";

interface IProps {
  children: JSX.Element | ReactNode;
}

const StyledIconWrapper = styled.div`
  cursor: pointer;
`;

export const MainLayout = ({ children }: IProps) => {
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    if (!mode) {
      setMode("dark");
    }
  }, [mode]);

  if (!mode) {
    return null;
  }

  // const switchHandler = (e: boolean) => {
  //   if (e) {
  //     setMode("dark");
  //   } else {
  //     setMode("light");
  //   }
  // };

  const switchHandler = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div>
      {/* <FormControlLabel
        checked={mode === "dark"}
        control={
          <Switch
            onChange={(e) => {
              switchHandler(e.target.checked);
            }}
          />
        }
        label="Label"
      /> */}
      <Stack
        padding={"20px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box fontSize={"20px"}>Dashboard</Box>

        <StyledIconWrapper onClick={switchHandler}>
          {mode === "light" && <Brightness5Icon />}
          {mode === "dark" && <BedtimeIcon />}
        </StyledIconWrapper>
      </Stack>

      {children}
    </div>
  );
};
