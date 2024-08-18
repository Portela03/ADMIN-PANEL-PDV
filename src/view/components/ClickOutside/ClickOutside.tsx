import { useRef, useEffect, ReactNode, RefObject } from 'react';

interface Props {
  children: ReactNode;
  exceptionRef?: RefObject<HTMLElement>;
  onClick: () => void;
  className?: string;
}

export function ClickOutside({
  children,
  exceptionRef,
  onClick,
  className,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickListener = (e: MouseEvent) => {
      let clickedInside: null | boolean = false;
      if (exceptionRef) {
        clickedInside =
          (wrapperRef.current &&
            wrapperRef.current.contains(e.target as Node)) ||
          (exceptionRef.current && exceptionRef.current === e.target) ||
          (exceptionRef.current &&
            exceptionRef.current.contains(e.target as Node));
      } else {
        clickedInside =
          wrapperRef.current &&
          wrapperRef.current.contains(e.target as Node);
      }

      if (!clickedInside) onClick();
    };

    document.addEventListener('mousedown', handleClickListener);

    return () => {
      document.removeEventListener('mousedown', handleClickListener);
    };
  }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={`${className || ''}`}>
      {children}
    </div>
  );
}
