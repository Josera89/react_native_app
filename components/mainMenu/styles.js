import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalText: {
    marginTop: 10,
    fontSize: 40
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  busIcon: {
    fontSize: 85,
  },
  busIconGreen: {
    // backgroundColor: "white",
    // padding: 22,
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: 4,
    // borderColor: "rgba(0, 0, 0, 0.1)",
    fontSize: 100,
    color: "#76FF03",
    marginTop: 10,
  },
  busIconRed: {
    fontSize: 100,
    color: "#F50057",
    marginTop: 10
  }
});
