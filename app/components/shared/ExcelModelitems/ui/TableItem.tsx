import { StyledTable } from "./styles";
import { ITableConf } from "./types";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface IProps {
  config: ITableConf;
}

export const TableItem = ({ config }: IProps) => {
  const [hiden, setHiden] = useState(true);

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

  console.log("currentConfig", currentConfig);

  return (
    <StyledTable>
      <thead>
        <tr>
          <th colSpan={currentConfig.header_keys.length} className="table_name">
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
                // eslint-disable-next-line
                //@ts-ignore
                return <td key={index}>{item[e] ?? "—"}</td>;
              })}
            </tr>
          );
        }, [])}
      </tbody>
    </StyledTable>
  );
};
