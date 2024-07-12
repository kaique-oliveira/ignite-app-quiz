import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  history: {
    flexGrow: 1,
    padding: 32,
  },
  swipeableRemove: {
    width: 90,
    height: 90,
    borderRadius: 6,
    backgroundColor: "#EF506B",
    alignItems: "center",
    justifyContent: "center",
  },
  swipeableContainer: {
    width: "100%",
    height: 89,
    marginBottom: 12,
    backgroundColor: "#EF506B",
    borderRadius: 6,
  },
});
