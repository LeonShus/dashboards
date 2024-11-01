import { IDataFromExcel } from "@/app/types/types";

export interface ITableConf {
    title: string
    header_keys: string[],
    rows: IDataFromExcel[],
  };