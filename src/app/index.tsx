import React from 'react';
import {SafeAreaView, ScrollView, Text, useColorScheme} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'light';

  const Colors = {
    darker: 'black',
    lighter: 'white',
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      />
      <Text>Hello Car Market</Text>
    </SafeAreaView>
  );
}

export default App;
