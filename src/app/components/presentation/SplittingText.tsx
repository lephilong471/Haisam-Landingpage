// components/SplittingText.js
import useIntersectionObserver from "@/app/config/hooks/useIntersectionObserver";
import React, { useEffect, useRef, forwardRef } from "react";
import Splitting from "splitting";
import styled from "styled-components";

const StyledSplittingWrapper = styled.div`
   .splitting .char {
      animation: slide-in 1s cubic-bezier(0.5, 0, 0.5, 1) both;
      animation-delay: calc(60ms * var(--char-index));
   }

   .animate.splitting .char {
      animation-play-state: running;
   }

   @keyframes slide-in {
      from {
         transform: translateX(100px);
         opacity: 0;
      }
   }
`;

const SplittingText = forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => {
   const innerRef = useRef<HTMLDivElement>(null);
   const targetRef = ref || innerRef;
   const isIntersecting = useIntersectionObserver(targetRef, { threshold: 0.1 });

   useEffect(() => {
      if (isIntersecting) {
         Splitting();
      }
   }, [isIntersecting]);

   return (
      <StyledSplittingWrapper
         ref={targetRef}
         data-splitting={isIntersecting ? "chars" : ""}
         className={isIntersecting ? "splitting chars animate" : ""}
      >
         {children}
      </StyledSplittingWrapper>
   );
});

SplittingText.displayName = "SplittingText";

export default SplittingText;
