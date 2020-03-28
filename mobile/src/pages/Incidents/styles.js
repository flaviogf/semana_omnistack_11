import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight + 20
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    color: "#737380",
    fontSize: 15
  },
  headerTextBold: {
    fontWeight: "bold"
  },
  title: {
    color: "#13131a",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 48
  },
  description: {
    color: "#737380",
    fontSize: 16,
    lineHeight: 24
  },
  incidentList: {
    marginTop: 32
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16
  },
  incidentLabel: {
    color: "#41414d",
    fontSize: 14,
    fontWeight: "bold"
  },
  incidentValue: {
    color: "#737380",
    fontSize: 15,
    marginBottom: 24,
    marginTop: 8
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonText: {
    color: "#E02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default styles;
