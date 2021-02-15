export const colorHeaderVariants = {
  hidden: {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '100%',
    color: 'white',
    WebkitBackgroundImage:
      'linear-gradient(45deg, #ffffff 0%, #ffffff 0%, #000000 0%)',
    backgroundImage:
      'linear-gradient(45deg, #ffffff 0%, #ffffff 0%, #000000 0%)',
  },

  visible: {
    WebkitBackgroundImage:
      'linear-gradient(45deg, #4adede 0%, #1aa7ec 100%, #ffffff 50%)',
    backgroundImage:
      'linear-gradient(45deg, #4adede 0%, #1aa7ec 100%, #ffffff 50%)',
    transition: {
      duration: 1,
      delay: 0.1,
      ease: 'linear',
    },
  },
};
export const whiteHeaderVariants = {
  hidden: {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '100%',
    color: 'white',
    WebkitBackgroundImage:
      'linear-gradient(45deg, #4adede 0%, #1aa7ec 100%, #ffffff 50%)',
    backgroundImage:
      'linear-gradient(45deg, #4adede 0%, #1aa7ec 100%, #ffffff 50%)',
  },

  visible: {
    WebkitBackgroundImage:
      'linear-gradient(45deg, #ffffff 0%, #ffffff 0%, #ffffff 0%)',
    backgroundImage:
      'linear-gradient(45deg, #ffffff 0%, #ffffff 0%, #ffffff 0%)',

    transition: {
      duration: 0.9,
      delay: 0.1,
      ease: 'linear',
    },
  },
};
export const headerLineVariants = {
  hidden: {
    scale: 0,
    background: '#ffffff',
  },

  visible: {
    background: '#1e2f97',
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.1,
      ease: 'easeOut',
    },
  },
};
export const letterVariants = {
  hidden: { y: '-100%' },
  visible: i => ({
    y: '0',
    transition: {
      delay: (i + 10) * 0.1,
    },
  }),
};

export const iconVariants = {
  start: {
    opacity: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 0.8,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration: 0.2,
    },
  },
};

export const stackVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: i => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.1,
    },
  }),
};

// "easeIn", "easeOut", "easeInOut"
// "circIn", "circOut", "circInOut"
// "backIn", "backOut",
// "anticipate"
