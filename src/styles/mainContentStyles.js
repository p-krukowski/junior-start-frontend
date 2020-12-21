import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import {colors} from "./colors";
import InputBase from "@material-ui/core/InputBase";

export const StyledSearchPanel = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 2px 5px 2px 20px;
  background: ${colors.lightgray};
`
export const InputBaseLayout = styled(InputBase)`
  flex: 1
`