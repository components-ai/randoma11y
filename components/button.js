/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = ({ color, backgroundColor, borderColor, ...props }) => (
  <button
    sx={{
      color,
      backgroundColor,
      cursor: 'pointer',
      border: 'thin solid',
      borderColor,
      borderRadius: '6px',
      px: 5,
      py: 3,
      fontSize: 3,
      fontWeight: 500,
      transition: 'filter .25s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      ':hover': {
        filter: 'brightness(120%)',
      }
    }}
    {...props}
  />
)

export default Button
