import { useEffect, useRef, useState } from "react";

const useInViewOnce = (options) => {
  const targetRef = useRef(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (hasBeenVisible || !targetRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setHasBeenVisible(true);
      observer.disconnect();
    }, options);

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [hasBeenVisible, options]);

  return { targetRef, hasBeenVisible };
};

export default useInViewOnce;
