export const spinnerAnimation = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 0 },
  transition: { duration: 2, delay: 0.5 },
};

export const navbarAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

export const fadeIn = {
  initial: { y: "50%", opacity: 0 },
  whileInView: { y: "0%", opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.6, delay: 0.5 },
};

export const projectAnimation = (index) => {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.9 },
    transition: { duration: 0.5, delay: 0.4 * index },
  };
};

export const fadeInOpacity = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 1, delay: 0.5 },
};
