import { View, Text } from 'react-native';
import { TWColors, TWStyles } from 'twrn-styles';

export default function App() {
  return (
    <View style={TWStyles.container}>
      <Text style={{ color: TWColors.BLUE }}>Test 123</Text>
    </View>
  );
}
