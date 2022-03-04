import { Text, View } from 'dripsy'
import { TextLink } from 'solito/link'

import Button from 'ui/components/Button'

const About: React.FC = () => {
  return (
    <View
      sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextLink href="/home">
        <Text>Go back Home</Text>
      </TextLink>

      <Text>This is the about screen.</Text>

      <Button>Some button component</Button>
    </View>
  )
}

export default About