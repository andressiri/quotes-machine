import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = options => {
  const [observedElements, setObservedElements] = useState([]);
  const [entries, setEntries] = useState([]);
  const observer = useRef(null);
  const observerOptions = options || {};

  useEffect(() => {
    if (observedElements.length) {
      observer.current = new IntersectionObserver(observedEntries => {
        setEntries(observedEntries);
      }, observerOptions);
      observedElements.forEach(element => observer.current.observe(element));
    };
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [observedElements]);

  return [observer.current, setObservedElements, entries];
};

export default useIntersectionObserver;