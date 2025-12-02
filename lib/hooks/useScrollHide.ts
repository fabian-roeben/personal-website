import { useEffect, useRef, RefObject } from "react";

interface UseScrollHideOptions {
  /** Minimum scroll distance to trigger hide (default: 5) */
  threshold?: number;
  /** Minimum scroll position before hiding is enabled (default: 100) */
  minScrollPosition?: number;
  /** CSS class to add when hidden (default: "header-hidden" which accounts for safe areas) */
  hiddenClass?: string;
}

/**
 * Hook to show/hide an element based on scroll direction.
 * Returns a ref to attach to the element.
 */
export function useScrollHide<T extends HTMLElement>({
  threshold = 5,
  minScrollPosition = 100,
  hiddenClass = "header-hidden",
}: UseScrollHideOptions = {}): RefObject<T | null> {
  const elementRef = useRef<T>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY.current;

          if (elementRef.current) {
            // Hide when scrolling down and past minimum position
            if (
              scrollDifference > threshold &&
              currentScrollY > minScrollPosition
            ) {
              elementRef.current.classList.add(hiddenClass);
            }
            // Show when scrolling up or near top
            else if (
              scrollDifference < -threshold ||
              currentScrollY < minScrollPosition
            ) {
              elementRef.current.classList.remove(hiddenClass);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, minScrollPosition, hiddenClass]);

  return elementRef;
}

