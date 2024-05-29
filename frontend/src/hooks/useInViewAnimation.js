// hooks/useInViewAnimation.js
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const useInViewAnimation = (initialProps, animationProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const animation = useSpring({
    ...animationProps,
    from: initialProps,
    reset: true,
    reverse: !inView,
    delay: 200,
    config: { duration: 1500 }, // Adjusted for slower and longer animation
  });

  return { ref, animation };
};

export default useInViewAnimation;
