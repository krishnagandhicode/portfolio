import { useEffect, useRef, useState } from "react";

const useInViewOnce = (options) => {
  const targetRef = useRef(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const { root = null, rootMargin = "0px", threshold = 0 } = options || {};

  useEffect(() => {
    if (hasBeenVisible || !targetRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setHasBeenVisible(true);
      observer.disconnect();
    }, { root, rootMargin, threshold });

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [hasBeenVisible, root, rootMargin, threshold]);

  return { targetRef, hasBeenVisible };
};

export default useInViewOnce;
