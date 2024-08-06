import { createGlobalStyle } from "styled-components";
import Font_B from "../font/WantedSans-SemiBold.woff"
import Font_R from "../font/WantedSans-Regular.woff"
import Font_M from "../font/WantedSans-Medium.woff"

export default createGlobalStyle`
  @font-face {
    font-family: "Bold";
    src: local("Bold") url(${Font_B}) format('woff');
  }
  @font-face {
    font-family: "Regular";
    src: local("Regular") url(${Font_R}) format('woff');
  }
  @font-face {
    font-family: "Medium";
    src: local("Medium") url(${Font_M}) format('woff');
  }
`