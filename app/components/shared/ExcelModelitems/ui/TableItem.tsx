import { StyledBlock, StyledTable } from "./styles";
import { ITableConf } from "./types";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ArcherElement } from "react-archer";
import { RelationType } from "react-archer/lib/types";
import { Tooltip, useColorScheme } from "@mui/material";

interface IProps {
  id?: string;
  config: ITableConf;
  archerConfig: { id: string; relations: RelationType[] };
}

export const TableItem = ({ id, config, archerConfig }: IProps) => {
  const [hiden, setHiden] = useState(true);

  const { mode, systemMode } = useColorScheme();
  const currentMode = mode === "system" ? systemMode : mode;

  const hidenConfig: ITableConf = {
    ...config,
    header_keys: [...config.header_keys].splice(0, 2),
    rows: [...config.rows]
      .sort((item) => {
        return item.primary_key ? -1 : 1;
      })
      .splice(0, 2),
  };

  const currentConfig = hiden ? hidenConfig : config;

  return (
    <ArcherElement {...archerConfig}>
      <StyledBlock mode={currentMode}>
        <StyledTable mode={currentMode} id={id}>
          <thead>
            <tr>
              <th
                colSpan={currentConfig.header_keys.length}
                className="table_name"
              >
                {currentConfig.title}

                <span
                  onClick={() => {
                    setHiden((e) => !e);
                  }}
                  className="hidden_item"
                >
                  {hiden && <VisibilityIcon />}
                  {!hiden && <VisibilityOffIcon />}
                </span>
              </th>
            </tr>
            <tr>
              {currentConfig.header_keys.map((item, index) => {
                return <th key={`${item}_tr_${index}`}>{item}</th>;
              }, [])}
            </tr>
          </thead>
          <tbody>
            {currentConfig.rows.map((item, index) => {
              return (
                <tr key={index}>
                  {currentConfig.header_keys.map((e, index) => {
                    return (
                      <td key={index}>
                        {/* eslint-disable-next-line */}
                        {/* @ts-ignore */}
                        <Tooltip placement="top" title={item[e] ?? null}>
                          <div className="table_td_content">
                            {/* eslint-disable-next-line */}
                            {/* @ts-ignore */}
                            {item[e] ?? "—"}
                          </div>
                        </Tooltip>
                      </td>
                    );
                  })}
                </tr>
              );
            }, [])}
          </tbody>
        </StyledTable>
      </StyledBlock>
    </ArcherElement>
  );
};
