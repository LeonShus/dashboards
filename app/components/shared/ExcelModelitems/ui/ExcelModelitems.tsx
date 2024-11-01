import { IDataFromExcel } from "@/app/types/types";
import { StyledTable } from "./styles";
import { Stack } from "@mui/material";

interface IProps {
  data: IDataFromExcel[];
}

const mainTableKeys = [
  "index",
  "source_table_attribute",
  "source_table_data_type",
  "primary_key",
];
const secondaryTableKeys = [
  "receiver_table_attribute",
  "receiver_table_data_type",
];

export const ExcelModelitems = ({ data }: IProps) => {
  return (
    <Stack direction={"row"} gap={"100px"}>
      <StyledTable>
        <thead>
          <tr>
            <th colSpan={3} className="table_name">
              {data[0].source_table_name}
            </th>
          </tr>
          <tr>
            {mainTableKeys.map((item, index) => {
              return <th key={`${item}_tr_${index}`}>{item}</th>;
            }, [])}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                {mainTableKeys.map((e, index) => {
                  //@ts-ignore
                  return <td key={index}>{item[e] ?? "—"}</td>;
                })}
              </tr>
            );
          }, [])}
        </tbody>
      </StyledTable>

      <StyledTable>
        <thead>
          <tr>
            <th colSpan={3} className="table_name">
              {data[0].receiver_table_name}
            </th>
          </tr>
          <tr>
            {secondaryTableKeys.map((item, index) => {
              return <th key={index}>{item}</th>;
            }, [])}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                {secondaryTableKeys.map((e, index) => {
                  //@ts-ignore
                  return <td key={index}>{item[e] ?? "—"}</td>;
                })}
              </tr>
            );
          }, [])}
        </tbody>
      </StyledTable>
    </Stack>
  );
};
