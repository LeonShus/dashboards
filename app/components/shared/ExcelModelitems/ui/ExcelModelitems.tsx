import React from "react";
import { IDataFromExcel } from "@/app/types/types";
import { StyledContainer, StyledTable } from "./styles";
import { Stack } from "@mui/material";
import { TableItem } from "./TableItem";
import { mainTableKeys, secondaryTableKeys } from "./constants";
import { ITableConf } from "./types";

interface IProps {
  data: IDataFromExcel[];
}

export const ExcelModelitems = ({ data }: IProps) => {
  const firstTableConf: ITableConf = {
    title: data[0].source_table_name,
    header_keys: mainTableKeys,
    rows: data,
  };

  const secondTableConf: ITableConf = {
    title: data[0].receiver_table_name,
    header_keys: secondaryTableKeys,
    rows: data,
  };

  const arr = [firstTableConf, secondTableConf];

  return (
    <StyledContainer>
      {arr.map((config, index) => (
        <div key={index}>
          <TableItem config={config} />
        </div>
      ))}
    </StyledContainer>
  );
};
