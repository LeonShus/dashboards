import React from "react";
import { IDataFromExcel } from "@/app/types/types";
import { StyledContainer } from "./styles";
import { TableItem } from "./TableItem";
import { mainTableKeys, secondaryTableKeys } from "./constants";
import { ITableConf } from "./types";
import { ArcherContainer } from "react-archer";

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
    <ArcherContainer strokeColor="#515151">
      <StyledContainer>
        {arr.map((config, index) => (
          <div key={index}>
            <TableItem
              archerConfig={{
                id: index === 0 ? "root" : `element${index}`,
                relations: [
                  {
                    targetId: `element${index + 1}`,
                    targetAnchor: index % 2 ? "middle" : "left",
                    sourceAnchor: "right",
                    //   style: { strokeDasharray: "5,5" },
                  },
                ],
              }}
              config={config}
            />
          </div>
        ))}
      </StyledContainer>
    </ArcherContainer>
  );
};
