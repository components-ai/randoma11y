/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = ({ color, backgroundColor, borderColor, ...props }) => (
  <button
    sx={{
      color,
      backgroundColor,
      border: 'thin solid',
      borderColor,
      borderRadius: 4,
      px: 5,
      py: 3,
      fontSize: 3,
      fontWeight: 500
    }}
    {...props}
  />
)

export default Button
