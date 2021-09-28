import React from 'react';
import {SafeAreaView, StyleSheet, NativeModules, Text} from 'react-native';
import RNShake from 'react-native-shake';

const {ReactToast} = NativeModules;

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {text: 'salam', color: 'lightblue'};
  }
  componentDidMount() {
    RNShake.addListener(() => {
      console.log('here 2');
      this.setState({
        text: 'amin',
        color: 'lightpink',
      });
      ReactToast.showToast('device shaken');
    });
  }

  componentWillUnmount() {
    RNShake.removeListener();
  }

  render() {
    return (
      <SafeAreaView
        style={[styles.container, {backgroundColor: this.state.color}]}>
        <Text>{this.state.text}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
