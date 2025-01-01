export const spinnerAnimation = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, delay: 0.5 },
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
  transition: { duration: 0.4, delay: 0.3 },
};

export const projectAnimation = (index) => {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.7 },
    transition: { duration: 0.5, delay: 0.3 * index },
  };
};
