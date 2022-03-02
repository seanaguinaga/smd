import { Pressable, Text } from 'dripsy'

type Props = {
  children: React.ReactNode
}

const Button: React.FC = ({ children }: Props) => (
  <Pressable
    sx={{
      backgroundColor: '$primary',
      color: 'white',
      paddingX: '$2',
      paddingY: '$4',
      fontFamily: '$body',
    }}
    onPress={() => {
      alert('You pressed the button!')
    }}
  >
    <Text>{children}</Text>
  </Pressable>
)

export default Button
