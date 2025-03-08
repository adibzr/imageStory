import React from "react";

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

interface TouchHandlers {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
  onTouchMove?: (e: React.TouchEvent) => void;
}

const useSwipeHandler = ({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: SwipeHandlers): TouchHandlers => {
  const startXRef = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent): void => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent): void => {
    if (startXRef.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;

    if (Math.abs(diff) < threshold) return;

    if (diff > 0 && onSwipeLeft) {
      onSwipeLeft();
    } else if (diff < 0 && onSwipeRight) {
      onSwipeRight();
    }

    startXRef.current = null;
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
};

export default useSwipeHandler;
