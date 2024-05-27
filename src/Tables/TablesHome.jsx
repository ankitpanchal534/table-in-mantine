import { Box, Button, Flex } from "@mantine/core";
import React, { useState } from "react";
import { Table1 } from "./Table1";
import { Table2 } from "./Table2";

export default function TablesHome() {
  const [showTable1, setShowTable] = useState(true);

  return (
    <Flex my={10} justify={"center"} direction={"column"} align={"center"}>
      <Box my={10}>
        <Button
          onClick={() => setShowTable(true)}
          variant={showTable1 ? "filled" : "outline"}
        >
          Table 1
        </Button>
        <Button
          ml={20}
          onClick={() => setShowTable(false)}
          variant={showTable1 ? "outline" : "filled"}
        >
          Table 2
        </Button>
      </Box>
      {showTable1 ? <Table1 /> : <Table2 />}
    </Flex>
  );
}
