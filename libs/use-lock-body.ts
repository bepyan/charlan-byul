import { useEffect, useLayoutEffect, useState } from 'react';

type UseLockedBodyOutput = [boolean, (locked: boolean) => void];

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * @see https://usehooks-ts.com/react-hook/use-locked-body
 */
export default function useLockedBody(
  initialLocked = false,
  rootSelector = 'body',
): UseLockedBodyOutput {
  const [locked, setLocked] = useState(initialLocked);

  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';

    const root = document.getElementById(rootSelector); // or root
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);

  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return [locked, setLocked];
}
