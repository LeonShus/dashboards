import styled from "@emotion/styled";

export const StyledTable = styled.table`
  border: 1px solid #515151;

  tr {
    border-bottom: 1px solid #515151;
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

  .hidden_item{
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
`;


export const StyledContainer = styled.div`
    display: flex;
    gap: 100px;
`