/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = ({ color, backgroundColor, borderColor, ...props }) => (
  <button
    sx={{
      whiteSpace: 'nowrap',
      color,
      backgroundColor,
      cursor: 'pointer',
      border: 'thin solid',
      borderColor,
      borderRadius: '0px',
      px: 3,
      py: 2,
      fontSize: [1,1,2],
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
