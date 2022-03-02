import { View, Text } from "dripsy";
import { TextLink } from "solito/link";
import { MotiView } from 'moti'

const ScreenOne = () => (
  <MotiView
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'timing' }}
  >
    <View sx={{
      backgroundColor: ['red', 'blue', 'green'],
      paddingX: '$2',
      paddingY: '$4',
    }}>
      <TextLink href="/screen-two">
        <Text>To Screen 2</Text>
      </TextLink>
    </View>
  </MotiView>
);

export default ScreenOne;
