import styled from "@emotion/styled";

const getBorderColor = (mode: "light" | "dark" | undefined) => {
  if (mode === "light") {
    return "#cbcbcb";
  }
  return "#5d5d5d";
};

export const StyledBlock = styled.div<{
  mode: "light" | "dark" | undefined;
}>`
  border: 1px solid ${({ mode }) => getBorderColor(mode)};

  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export const StyledTable = styled.table<{
  mode: "light" | "dark" | undefined;
}>`
  thead {
    tr {
      border-bottom: 1px solid ${({ mode }) => getBorderColor(mode)};
    }
  }

  tbody {
    tr:not(:last-child) {
      border-bottom: 1px solid ${({ mode }) => getBorderColor(mode)};
    }
  }

  tr > th {
    position: relative;
    padding: 10px;
    text-align: start;
  }

  tr .table_name {
    text-align: center;
  }

  tr > td {
    padding: 10px;
  }

  .hidden_item {
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
`;

export const StyledContainer = styled.div`
  padding: 30px;
  display: flex;
  gap: 340px;
`;
