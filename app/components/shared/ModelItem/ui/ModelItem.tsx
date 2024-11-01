import { Box, Stack } from "@mui/material";

interface IProps {
  // eslint-disable-next-line
  item: any;
  index: number;
}

export const ModelItem = ({ item, index }: IProps) => {
  return (
    <Box sx={{ border: "1px solid gray", borderRadius: "3px" }}>
      {index === 0 && <div>{item.Naimenovanie_v_sisteme_istochnike}</div>}

      <Stack direction="row" justifyContent={"space-between"}>
        <Stack direction="row" spacing={"20px"} border={1} borderColor={"red"}>
          <div>{item.sheet ?? "-"}</div>
          <div>{item.Kod_atributa ?? "-"}</div>
          <div>{item.Naimenovanie ?? "-"}</div>
          <div>{item.Naimenovanie_ ?? "-"}</div>
          <div>{item.Tip_atributa ?? "-"}</div>
        </Stack>

        <Stack direction="row" spacing={"20px"} border={1} borderColor={"blue"}>
          <div>{item.naimenovanie_analitiki_v_istochnike ?? "-"}</div>
          <div>{item.istochnik_dannyh ?? "-"}</div>
          <div>{item.tip ?? "-"}</div>
        </Stack>
      </Stack>
    </Box>
  );
};
