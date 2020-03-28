import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  incident: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginTop: 48,
    padding: 24
  },
  incidentLabel: {
    color: "#41414d",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 24
  },
  incidentValue: {
    color: "#737380",
    fontSize: 15,
    marginTop: 8
  },
  contact: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 24,
    marginTop: 24,
    padding: 24
  },
  heroTitle: {
    color: "#13131a",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 30
  },
  heroDescription: {
    color: "#737380",
    fontSize: 15,
    marginTop: 16
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16
  },
  action: {
    backgroundColor: "#E02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default styles;
