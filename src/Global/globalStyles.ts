import { ViewStyle, StyleSheet } from "react-native";

interface Styles {
  screen: ViewStyle,
  button: ViewStyle,
}

const globalStyles: Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { globalStyles }