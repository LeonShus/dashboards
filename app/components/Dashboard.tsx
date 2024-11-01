"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as XLSX from "xlsx";
import { IDataFromExcel } from "../types/types";
import { ExcelModelitems } from "./shared/ExcelModelitems";

// interface IProps {
//   data?: any[];
// }

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const Dashboard = () => {
  const [file, setFile] = useState<File | null>(null);
  const [excelData, setExcelData] = useState<IDataFromExcel[]>([]);

  const [dashboardItems, setDashboardItems] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof dashboardItems>) => {
    const {
      target: { value },
    } = event;
    setDashboardItems(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      if (e.target) {
        const data = e.target.result;
        const readedData = XLSX.read(data, { type: "binary" });
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];

        /* Convert array to json*/
        const dataParse = XLSX.utils.sheet_to_json(ws);

        setExcelData(dataParse as IDataFromExcel[]);
      }
    };
    reader.readAsBinaryString(file);
  };

  useEffect(() => {
    if (file) {
      readFile(file);
    }
  }, [file]);

  const dataBySourceTableName = useMemo(() => {
    // eslint-disable-next-line
    return excelData.reduce((data: any, item) => {
      if (data[item.source_table_name]) {
        data[item.source_table_name].push(item);
      } else {
        data[item.source_table_name] = [item];
      }

      return data;
    }, {});
  }, [excelData]);

  const options = Object.keys(dataBySourceTableName);

  return (
    <Paper>
      <Box padding={"20px"}>
        <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              accept=".xlsx"
              onChange={(event) => {
                if (event.target.files) {
                  setFile(event.target.files[0]);
                }
              }}
              multiple
            />
          </Button>

          {file && file.name}

          {/* <Button
            onClick={() => {
              if (file) {
                readFile(file);
              }
            }}
            variant="contained"
          >
            Read
          </Button> */}

          <FormControl disabled={!options.length} sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-checkbox-label">Items</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={dashboardItems}
              onChange={handleChange}
              input={<OutlinedInput label="Items" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {options.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={dashboardItems.includes(name)} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Box>

      {Boolean(dashboardItems.length) && (
        <Stack padding={"20px 50px"} gap={"50px"}>
          {dashboardItems.map((item, index) => {
            return (
              <ExcelModelitems
                key={`${index}_${index}`}
                data={dataBySourceTableName[item]}
              />
            );
          })}
        </Stack>
      )}
    </Paper>
  );
};
