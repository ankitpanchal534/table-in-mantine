import { Table } from "@mantine/core";
import cropdata from "./fake_data.json";
import { processCropData } from "./logic";

export function Table1() {
  const cropDataNew = processCropData(cropdata);

  const rows = cropDataNew.map((element) => (
    <Table.Tr key={element.year}>
      <Table.Td>{element.year}</Table.Td>
      <Table.Td align="center">{element.maxProductionCrop}</Table.Td>
      <Table.Td align="center">{element.minProductionCrop}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div style={tablesStyles}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>
              Crop with Maximum Production in that Year
            </Table.Th>
            <Table.Th style={{ textAlign: "center" }}>
              Crop with Minimum Production in that Year
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}

export const tablesStyles = {
  maxWidth: 600,
  border: "1px solid",
  boxShadow: "0px 0px 10px lightgray",
  background: "white",
  borderRadius: 7,
};
