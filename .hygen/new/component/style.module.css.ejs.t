---
to: <%= absPath %>/<%= component_name %>.styles.ts
---
import { Styles } from "react-native-use-styles";

export default Styles({
  reused: "bg:color:green",
  namespaced: ".global .reused color:purple",
});
