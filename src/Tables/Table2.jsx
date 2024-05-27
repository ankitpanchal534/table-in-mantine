import { Table } from "@mantine/core";
import cropdata from "./fake_data.json";
import { aggregateCropData } from "./logic";
import { tablesStyles } from "./Table1";

export function Table2() {
  const cropDataNew = aggregateCropData(cropdata);

  const rows = cropDataNew.map((element) => (
    <Table.Tr key={element.year}>
      <Table.Td>{element.cropName}</Table.Td>
      <Table.Td align="center">{element.averageYield}</Table.Td>
      <Table.Td align="center">{element.averageArea}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div style={tablesStyles}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crop</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>
              Average Yield of the Crop between 1950-2020
            </Table.Th>
            <Table.Th style={{ textAlign: "center" }}>
              Average Cultivation Area of the Crop between 1950-2020
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}
