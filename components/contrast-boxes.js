/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import namer from 'color-namer'

const Sparkline = () => {
  return (
<article sx={{ mt: 4, borderRadius: '0px', py: 2, px: 3, boxShadow: '0 0 0 1px currentColor' }}><div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><dl><dt sx={{ fontSize: 1 }}>Label</dt><dd sx={{ ml: 0, pl: 0, fontWeight: 700, fontSize: '40px' }}>9,173</dd></dl><svg width="160" height="60"><path d="M0 45C5.145 45 9.555 20.4 14.7 20.4C19.845 20.4 24.255 35.400000000000006 29.4 35.400000000000006C34.544999999999995 35.400000000000006 38.955 6.600000000000001 44.099999999999994 6.600000000000001C49.245 6.600000000000001 53.654999999999994 22.200000000000003 58.8 22.200000000000003C63.945 22.200000000000003 68.355 45 73.5 45C78.645 45 83.05499999999999 33.6 88.19999999999999 33.6C93.34499999999998 33.6 97.755 52.8 102.89999999999999 52.8C108.04499999999999 52.8 112.455 38.400000000000006 117.6 38.400000000000006C122.74499999999999 38.400000000000006 127.15499999999999 54.6 132.29999999999998 54.6C137.445 54.6 141.855 27.6 147 27.6C147 27.6 147 27.6 147 27.6 " fill="none" fillOpacity="1" stroke="currentColor" strokeOpacity="1" strokeLinecap="butt" strokeWidth="2" strokeDasharray="0"></path></svg></div></article>
  )
}

const Scale = () => {
  return (
  <section sx={{ mt: 3, width: '100%', display: 'flex', alignItems: 'stretch', gap: '1px', height: '32px'}}>
     <div sx={{ opacity: '100%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
     <div sx={{ opacity: '90%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
     <div sx={{ opacity: '80%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
     <div sx={{ opacity: '70%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
     <div sx={{ opacity: '60%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
     <div sx={{ opacity: '50%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
     <div sx={{ opacity: '40%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
     <div sx={{ opacity: '30%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
     <div sx={{ opacity: '20%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
     <div sx={{ opacity: '10%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
  </section>
  )
}


const Symbols = ({ }) => {
  return (
    <div sx={{ display: 'grid', gap: '.5em', mt: 3, gridTemplateColumns: 'repeat(auto-fill, minmax(24px, 1fr))'}}>
    <div sx={{  aspectRatio: '1 / 1', bg: 'currentColor', borderRadius: '9999px'}}></div>
    <div sx={{  aspectRatio: '1 / 1', bg: 'transparent', 
        boxShadow: '0 0 0 1px currentColor',
        borderRadius: '9999px'}}></div>
    <div sx={{ 
         
        aspectRatio: '1 / 1', 
        boxShadow: '0 0 0 1px currentColor',
        backgroundImage: 'linear-gradient(currentColor 50%, transparent 50%, transparent 100%)', 
        borderRadius: '9999px'}}></div>
    <div sx={{ 
         
        aspectRatio: '1 / 1', 
        boxShadow: '0 0 0 1px currentColor',
        backgroundImage: 'linear-gradient(45deg, currentColor 50%, transparent 50%, transparent 100%)', 
        borderRadius: '9999px'}}></div>
    <div sx={{ 
         
        aspectRatio: '1 / 1', 
        boxShadow: '0 0 0 1px currentColor',
        backgroundImage: 'linear-gradient(90deg, currentColor 50%, transparent 50%, transparent 100%)', 
        borderRadius: '9999px'}}></div>
    <div sx={{ 
         
        aspectRatio: '1 / 1', 
        boxShadow: '0 0 0 1px currentColor',
        backgroundImage: 'linear-gradient(135deg, currentColor 50%, transparent 50%, transparent 100%)', 
        borderRadius: '9999px'}}></div>
    <div sx={{ 
         
        aspectRatio: '1 / 1', 
        boxShadow: '0 0 0 1px currentColor',
        backgroundImage: 'linear-gradient(180deg, currentColor 50%, transparent 50%, transparent 100%)', 
        borderRadius: '9999px'}}></div>
    <div sx={{ 
         
        aspectRatio: '1 / 1', 
        boxShadow: '0 0 0 1px currentColor',
        backgroundImage: 'linear-gradient(225deg, currentColor 50%, transparent 50%, transparent 100%)', 
        borderRadius: '9999px'}}></div>
    <div sx={{ 
         
        aspectRatio: '1 / 1', 
        boxShadow: '0 0 0 1px currentColor',
        backgroundImage: 'linear-gradient(270deg, currentColor 50%, transparent 50%, transparent 100%)', 
        borderRadius: '9999px'}}></div>
    <div sx={{ 
         
        aspectRatio: '1 / 1', 
        boxShadow: '0 0 0 1px currentColor',
        backgroundImage: 'linear-gradient(315deg, currentColor 50%, transparent 50%, transparent 100%)', 
        borderRadius: '9999px'}}></div>
    </div>
  )
}

const Badge = ({ }) => {
  return (
    <section sx={{ display: 'flex', gap: '.5em', alignItems: 'center', mt: 3,   }}>
      <div sx={{ 
        width: '44px', 
        boxShadow: '0 0 0 2px currentColor', 
        borderRadius: '9999px', p: 1 
      }}>
        <img src="https://components-ai.s3.amazonaws.com/avatars/ui-avatar-4.jpeg" 
             sx={{ display: 'block', maxWidth: '100%', borderRadius: '9999px', filter: 'grayscale(100%)' }} /></div> 
      <span sx={{
        borderRadius: '9999px', 
        boxShadow: '0 0 0 1px currentColor', 
        px: 3, py: 1, 
        fontSize: '12px' 
      }}>
        Badge
      </span>
    </section>
)}


const FormInput = ({label = 'Input Label', ...props}) => {
  return (
    <form>
    <label sx={{ display: 'block'}}>
      <span>
        {label}  
      </span>
      <input type='text' sx={{
        width: '100%',
        WebkitAppearance: 'none',
        appearance: 'none',
        borderWidth: '0px',
        boxShadow: '0 0 0 1px currentColor',
        borderStyle: 'solid',
        background: 'transparent',
        color: 'inherit',
        padding: '8px',
        fontWeight: 700,
        fontSize: 3,
        marginTop: '8px',
        transition: 'all .2s ease',
        ':focus-visible': {
          outline: 0,
          boxShadow: '0 0 0 2px currentColor',
          boxShadow: 'none',
        },
        ':focus': {
          outline: 0,
          border: 'none',
          boxShadow: '0 0 0 2px currentColor',
        }
      }} />
    </label>
    <fieldset sx={{ mt: 3, mx: 0, border: 0, padding: 0, accentColor: 'currentColor', display: 'flex', gap: '1em' }}>
      <legend sx={{ all: 'unset', mb: 2 }}>Do you have a favorite color?</legend>
      <label sx={{ gap: '4px', display: 'inline-flex', alignItems: 'center', lineHeight: 1, ':hover > input': { boxShadow: 'inset 0 0 0 2px currentColor', transition: 'all .2s ease' } }}>
        <input name='apples' type='radio' 
          checked
          sx={{ 
            appearance: 'none', 
            WebkitAppearance: 'none', 
            p: 0,
            m: 0,
            boxShadow: 'inset 0 0 0 1px currentColor', 
            height: '16px', width: '16px', 
            borderRadius: '9999px', 
            accentColor: 'currentColor',  
            backgroundPosition: 'center center',
            transition: 'all .2s ease',
            backgroundImage: 'radial-gradient(currentColor 0%, transparent 0%, transparent 100%)',
            ':checked': {
              boxShadow: 'inset 0 0 0 2px currentColor', 
              backgroundImage: 'radial-gradient(circle, currentColor 35%, transparent 35%, transparent 100%)',
              backgroundSize: '100%',
            }
          }} /> 
            <span>Yes</span>
          </label>
<label sx={{ gap: '4px', display: 'inline-flex', alignItems: 'center', lineHeight: 1, ':hover > input': { boxShadow: 'inset 0 0 0 2px currentColor', transition: 'all .2s ease' } }}>
        <input name='apples' type='radio' 
          sx={{ 
            appearance: 'none', 
            WebkitAppearance: 'none', 
            p: 0,
            m: 0,
            boxShadow: 'inset 0 0 0 1px currentColor', 
            height: '16px', width: '16px', 
            borderRadius: '9999px', 
            accentColor: 'currentColor',  
            backgroundPosition: 'center center',
            transition: 'all .2s ease',
            backgroundImage: 'radial-gradient(currentColor 0%, transparent 0%, transparent 100%)',
            ':checked': {
              boxShadow: 'inset 0 0 0 2px currentColor', 
              backgroundImage: 'radial-gradient(circle, currentColor 35%, transparent 35%, transparent 100%)',
              backgroundSize: '100%',
            }
          }} /> 
            <span>No</span>
          </label>
    </fieldset>

    </form>
  )
}

const Border = () => {
  return (
    <hr sx={{ backgroundColor: 'currentColor', padding: 0, height: '4px', border: 0, display: 'block', color: 'inherit' }} />
  )
}

const BorderStripe = () => {
  return (
    <hr sx={{ 
      backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent  8px, currentColor 8px, currentColor 10px)', 
      padding: 0, 
      aspectRatio: '6 / 1',
      border: 0, 
      display: 'block', 
      color: 'inherit' 
    }} />
  )
}

const Progress = () => {
  return (
    <label sx={{ display: 'block', my: 3, }}>
      <span sx={{ display: 'block', mb: '8px', }}>Progress</span>
    <div sx={{ height: '16px', boxShadow: '0 0 0 1px currentColor', color: 'inherit' }}>
      <div sx={{ width: '44%', height: '100%', backgroundColor: 'currentColor', }}></div>
    </div>
    </label>
  )
}

const Quote = () => {
  return (
    <blockquote sx={{ 
      borderLeft: '4px solid currentcolor',
      ml: 0,
      pl: 4,
      width: '100%',
    }}><p sx={{ fontWeight: 900, mb: 2, fontSize: '24px'}}>Color is my day-long obsession, <br />joy, and torment.</p><footer><i>Claude Monet</i></footer></blockquote>
  )
}

const Text = () => {
  return (
    <p sx={{ maxWidth: '80ch', lineHeight: '1.5', }}>
Color contrast is the difference in brightness between foreground and background colors. For accessibility purposes, aim for a 4.5:1 ratio between the foreground color (e.g. text, links, etc.) and the background color. This ratio ensures people with moderately low vision can tell the colors apart and see your content.
    </p>
  )
}

const ContrastBox1 = ({ color, backgroundColor }) => (
  <div
    sx={{
      mt: [3, 4, 5],
      color,
      backgroundColor,
      p: [3, 4, '80px'],
      outline: '1px solid currentColor',
    }}
  >
    <h4
      sx={{
        m: 0,
        fontSize: 3,
      }}
    >
      {namer(color).pantone[0].name}
    </h4>
      <h3
        sx={{
          m: 0,
          fontSize: [4, 6, 7],
          fontWeight: 900
        }}
      >
        {color}
      </h3>
    <Border />
    <BorderStripe />
<pre sx={{ mt: 3, borderRadius: '0px', py: 3, px: 3, boxShadow: '0 0 0 1px currentColor' }}>
      <code>
      {`.theme-alt {`}<br />
        &nbsp;&nbsp;color: {color};<br />
        &nbsp;&nbsp;background-color: {backgroundColor};<br />
      {`}`}
      </code>
    </pre>
    <Quote />
    <Text />
    <Progress />
    <FormInput />
    <Badge />
    <Symbols />
    <Scale />
    <Sparkline />
    
  </div>
)

const ContrastBox = ({ color, backgroundColor }) => (
  <div
    sx={{
      mt: [3, 4, 5],
      color,
      backgroundColor,
      p: [3, 4, '80px'],
      outline: '1px solid currentColor',
    }}
  >
    <h4
      sx={{
        m: 0,
        fontSize: 3
      }}
    >
      {namer(color).pantone[0].name}
    </h4>
    <h3
      sx={{
        m: 0,
        fontSize: [4, 6, 7],
        fontWeight: 800
      }}
    >
      {color}
    </h3>
    <Border />
    <BorderStripe />
    <pre sx={{ mt: 3, borderRadius: '0px', py: 3, px: 3, boxShadow: '0 0 0 1px currentColor' }}>
      <code>
      {`.theme {`}<br />
        &nbsp;&nbsp;color: {color};<br />
        &nbsp;&nbsp;background-color: {backgroundColor};<br />
      {`}`}
      </code>
    </pre>
    <Quote />
    <Text />
    <Progress />
    <FormInput />
    <Badge />
    <Scale />
    <Sparkline />
  </div>
)

const ContrastBoxes = ({ colorPair }) => (
  <div
    sx={{
      px: 4,
      display: 'grid',
      width: '100%',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 3,
      mx: 'auto',
      maxWidth: '96rem',
    }}
  >
    <ContrastBox
      color={colorPair[0]}
      backgroundColor={colorPair[1]}
    />
    <ContrastBox1
      color={colorPair[1]}
      backgroundColor={colorPair[0]}
    />
  </div>
)

export default ContrastBoxes
