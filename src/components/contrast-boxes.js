/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import namer from 'color-namer'

const ContrastBox = ({ color, backgroundColor }) => (
  <div
    sx={{
      mt: [3, 4, 5],
      color,
      backgroundColor,
      p: [3, 4, 5],
      width: ['100%', '50%', '50%']
    }}
  >
    <Styled.h4
      sx={{
        m: 0,
        fontSize: 3
      }}
    >
      {namer(color).pantone[0].name}
    </Styled.h4>
    <Styled.h3
      sx={{
        m: 0,
        fontSize: [4, 6, 7],
        fontWeight: 800
      }}
    >
      {color}
    </Styled.h3>
  </div>
)

const ContrastBoxes = ({ colorPair }) => (
  <div
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    }}
  >
    <ContrastBox
      color={colorPair[0]}
      backgroundColor={colorPair[1]}
    />
    <ContrastBox
      color={colorPair[1]}
      backgroundColor={colorPair[0]}
    />
  </div>
)

export default ContrastBoxes
