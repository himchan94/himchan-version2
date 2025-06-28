"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import "./TypingEffect.css";

const RELOAD_DELAY_MS = 500;

interface TypingEffectProps {
  className?: string;
}

export default function TypingEffect({ className }: TypingEffectProps = {}) {
  const [isAnimating, setIsAnimating] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleReload = useCallback(() => {
    setIsAnimating(false);

    // 기존 timeout이 있다면 정리
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
      timeoutRef.current = null;
    }, RELOAD_DELAY_MS);
  }, []);

  // 컴포넌트 언마운트 시 timeout 정리
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={className}>
      {isAnimating ? (
        <div className='body'>
          <h1>HELLO MY NAME IS HIMCHAN</h1>
          <p className='subtitle'>I&apos;M A WEB DEVELOPER</p>
        </div>
      ) : (
        <div className='loading' role='status' aria-live='polite'>
          LOADING
        </div>
      )}
      {isAnimating && (
        <button
          onClick={handleReload}
          aria-label='타이핑 애니메이션 다시 시작'
          type='button'>
          RELOAD
        </button>
      )}
    </div>
  );
}
