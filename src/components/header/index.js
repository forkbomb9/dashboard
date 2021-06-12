import React from "react"
import styled from "styled-components"
import { Flex } from "@netdata/netdata-ui"
import Item from "./item"
import Node from "./node"
import Options from "./options"
import DateTimePicker from "./dateTimePicker"
import Alarms from "./alarms"

const Wrapper = styled(Flex).attrs({
  as: "header",
  position: "relative",
  justifyContent: "between",
  background: "panel",
  zIndex: 20,
  width: "100%",
  padding: [2, 4, 2, 4],
})`
  pointer-events: all;
`

const Header = () => (
  <Wrapper>
    <Flex alignItems="center" gap={3}>
      <Node />
    </Flex>
    <Flex justifyContent="end" alignItems="center" gap={3}>
      <Item hasBorder>
        <Options />
      </Item>
      <DateTimePicker />
      <Alarms />
    </Flex>
  </Wrapper>
)

export default Header
