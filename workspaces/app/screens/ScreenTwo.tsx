import { View, Text } from "dripsy";
import { TextLink } from "solito/link";

const ScreenOne: React.FC = () => {
  return (
    <View sx={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <TextLink href="/screen-one">
        <Text>To Screen One</Text>
      </TextLink>
    </View>
  );
};

export default ScreenOne;
