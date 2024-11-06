import React, { useMemo } from "react";
import { IDataFromExcel } from "@/app/types/types";
import { StyledContainer } from "./styles";
import { TableItem } from "./TableItem";
import { mainTableKeys, secondaryTableKeys } from "./constants";
import { ITableConf } from "./types";
import { ArcherContainer } from "react-archer";

interface IItem {
  mainItem: IDataFromExcel[];
  children?: IItem;
}
interface IProps {
  data: IItem;
}

const makeItems = (data: IItem): ITableConf[] => {
  const firstTableConf: ITableConf = {
    title: data.mainItem[0].source_table_name,
    header_keys: mainTableKeys,
    rows: data.mainItem,
  };

  const secondTableConf: ITableConf = {
    title: data.mainItem[0].receiver_table_name,
    header_keys: secondaryTableKeys,
    rows: data.mainItem,
  };

  let childData: ITableConf[] = [];

  if (data.children) {
    childData = makeItems(data.children);
  }

  return [firstTableConf, secondTableConf, ...childData];
};

export const ExcelModelitems = ({ data }: IProps) => {

  const items = useMemo(() => {
    return makeItems(data);
  }, [data]);

  return (
    <ArcherContainer style={{ width: "fit-content" }} strokeColor="#515151">
      <StyledContainer>
        {items.map((config, index) => (
          <div key={index}>
            <TableItem
              archerConfig={{
                id: index === 0 ? "root" : `element${index}`,
                relations: [
                  {
                    targetId: `element${index + 1}`,
                    // targetAnchor: index % 2 ? "middle" : "left",
                    targetAnchor: "left",
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
