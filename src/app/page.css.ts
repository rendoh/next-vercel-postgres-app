import { globalStyle, style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '6rem',
  minHeight: '100vh',
});

export const description = style({
  display: 'inherit',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  fontSize: '.85rem',
  maxWidth: 'var(--max-width)',
  width: '100%',
  zIndex: 2,
  fontFamily: 'var(--font-mono)',
  '@media': {
    '(max-width: 700px)': {
      fontSize: '.8rem',
    },
  },
});

globalStyle(`${description} a`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.5rem',
  '@media': {
    '(max-width: 700px)': {
      padding: '1rem',
    },
  },
});

globalStyle(`${description} p`, {
  position: 'relative',
  margin: 0,
  padding: '1rem',
  backgroundColor: 'rgba(var(--callout-rgb), 0.5)',
  border: '1px solid rgba(var(--callout-border-rgb), 0.3)',
  borderRadius: 'var(--border-radius)',
  '@media': {
    '(max-width: 700px)': {
      alignItems: 'center',
      inset: '0 0 auto',
      padding: '2rem 1rem 1.4rem',
      borderRadius: '0',
      border: 'none',
      borderBottom: '1px solid rgba(var(--callout-border-rgb),0.25)',
      background:
        'linear-gradient(tobottom,rgba(var(--background-start-rgb),1),rgba(var(--callout-rgb),0.5))',
      backgroundClip: 'padding-box',
      backdropFilter: 'blur(24px)',
    },
  },
});

globalStyle(`${description} p, ${description} div`, {
  '@media': {
    '(max-width: 700px)': {
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      width: '100%',
    },
  },
});

globalStyle(`${description} div`, {
  '@media': {
    '(max-width: 700px)': {
      alignItems: 'flex-end',
      pointerEvents: 'none',
      inset: 'auto 0 0',
      padding: '2rem',
      height: '200px',
      background:
        'linear-gradient(tobottom,transparent0%,rgb(var(--background-end-rgb))40%)',
      zIndex: '1',
    },
  },
});

export const code = style({
  fontWeight: 700,
  fontFamily: 'var(--font-mono)',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(25%, auto))',
  width: 'var(--max-width)',
  maxWidth: '100%',
  '@media': {
    '(max-width: 700px)': {
      gridTemplateColumns: '1fr',
      marginBottom: '120px',
      maxWidth: '320px',
      textAlign: 'center',
    },
    '(min-width: 701px) and (max-width: 1120px)': {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
  },
});

export const card = style({
  padding: '1rem 1.2rem',
  borderRadius: 'var(--border-radius)',
  background: 'rgba(var(--card-rgb),0)',
  border: '1px solid rgba(var(--card-border-rgb),0)',
  transition: 'background 200ms , border 200ms',
  '@media': {
    '(max-width: 700px)': {
      padding: '1rem 2.5rem',
    },
  },
});

globalStyle(`${card} span`, {
  display: 'inline-block',
  transition: 'transform 200ms',
});

globalStyle(`${card} h2`, {
  fontWeight: '600',
  marginBottom: '0.7rem',
  '@media': {
    '(max-width: 700px)': {
      marginBottom: '.5rem',
    },
  },
});

globalStyle(`${card} p`, {
  margin: '0',
  opacity: '0.6',
  fontSize: '0.9rem',
  lineHeight: '1.5',
  maxWidth: '30ch',
});

globalStyle(`${card}:hover`, {
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      background: 'rgba(var(--card-rgb),0.1)',
      border: '1px solid rgba(var(--card-border-rgb),0.15)',
    },
  },
});

globalStyle(`${card}:hover span`, {
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      transform: 'translateX(4px)',
    },
    '(prefers-reduced-motion)': {
      transform: 'none',
    },
  },
});

export const center = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '4rem 0',
  '::after': {
    background: 'var(--primary-glow)',
    width: '240px',
    height: '180px',
    zIndex: '-1',
    content: '',
    left: '50%',
    position: 'absolute',
    filter: 'blur(45px)',
    transform: 'translateZ(0)',
  },
  '::before': {
    background: 'var(--secondary-glow)',
    borderRadius: '50%',
    width: '480px',
    height: '360px',
    marginLeft: '-400px',
    content: '',
    left: '50%',
    position: 'absolute',
    filter: 'blur(45px)',
    transform: 'translateZ(0)',
  },
  '@media': {
    '(max-width: 700px)': {
      padding: '8rem 0 6rem',
      '::before': {
        transform: 'none',
        height: 300,
      },
    },
  },
});

export const logo = style({
  position: 'relative',
  '@media': {
    '(prefers-color-scheme: dark)': {
      filter: `invert(1) drop-shadow(0 0 0.3rem #ffffff70)`,
    },
  },
});

export const content = style({
  '@media': {
    '(max-width: 700px)': {
      padding: '4rem',
    },
  },
});

export const vercelLogo = style({
  '@media': {
    '(prefers-color-scheme: dark)': {
      filter: 'invert(1)',
    },
  },
});
