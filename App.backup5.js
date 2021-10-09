import React from 'react';
import {View, Text, StyleSheet, NativeModules} from 'react-native';

const {ShakeDetectionModule} = NativeModules;

function App() {
  return <AppContent />;
}

const AppContent = () => {
  React.useEffect(() => {
    ShakeDetectionModule.shakeDetection();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Shake device</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
});
('');
