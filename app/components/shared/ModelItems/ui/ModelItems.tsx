import { Box, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface IProps {
  item: any;
}

export const ModelItems = ({ item }: IProps) => {
  const blocks = item.map((e: any) => {
    const {
      naimenovanie_analitiki_v_istochnike,
      istochnik_dannyh,
      tip,
      sheet,
      Kod_atributa,
      Naimenovanie,
      Naimenovanie_v_sisteme_istochnike,
      Naimenovanie_,
      Tip_atributa,
    } = e;
    return [
      {
        sheet,
        Kod_atributa,
        Naimenovanie,
        Naimenovanie_v_sisteme_istochnike,
        Naimenovanie_,
        Tip_atributa,
      },
      { naimenovanie_analitiki_v_istochnike, istochnik_dannyh, tip },
    ];
  });

  const block1 = blocks.map((block: any) => block[0]);
  const block2 = blocks.map((block: any) => block[1]);



  const excludeKeys = [
    "Naimenovanie_v_sisteme_istochnike",
    // "naimenovanie_analitiki_v_istochnike",
  ];

  return (
    <Stack direction="row" spacing={'80px'}>
      <Box width={"fit-content"}>
        <Box
          border={"1px solid #e1e0e0"}
          display={"flex"}
          justifyContent={"center"}
        >
          {block1[0]["Naimenovanie_v_sisteme_istochnike"]}
        </Box>
        <Table
          // sx={{ maxWidth: 650 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}

              {Object.keys(block1[0]).reduce((arr: any[], item) => {
                if (!excludeKeys.includes(item)) {
                  arr.push(<TableCell key={item}>{item}</TableCell>);
                }

                return arr;
              }, [])}
            </TableRow>
          </TableHead>
          <TableBody>
            {block1.map((block: any, index: number) => (
              <TableRow
                key={index}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{block.sheet ?? "-"}</TableCell>
                <TableCell>{block.Kod_atributa ?? "-"}</TableCell>
                <TableCell>{block.Naimenovanie ?? "-"}</TableCell>
                <TableCell>{block.Naimenovanie_ ?? "-"}</TableCell>
                <TableCell>{block.Tip_atributa ?? "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Box width={"fit-content"}>
        <Box
          border={"1px solid #e1e0e0"}
          display={"flex"}
          justifyContent={"center"}
        >
          {block1[1]["naimenovanie_analitiki_v_istochnike"] ?? 'Data'}
        </Box>
        <Table
          // sx={{ maxWidth: 650 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}

              {Object.keys(block2[0]).reduce((arr: any[], item) => {
                if (!excludeKeys.includes(item)) {
                  arr.push(<TableCell key={item}>{item}</TableCell>);
                }

                return arr;
              }, [])}
            </TableRow>
          </TableHead>
          <TableBody>
            {block2.map((block: any, index: number) => (
              <TableRow
                key={index}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{block.naimenovanie_analitiki_v_istochnike ?? "-"}</TableCell>
                <TableCell>{block.istochnik_dannyh ?? "-"}</TableCell>
                <TableCell>{block.tip ?? "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Stack>
  );
};
