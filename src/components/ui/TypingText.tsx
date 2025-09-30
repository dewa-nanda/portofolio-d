import React, { useEffect, useState, useRef } from "react";

/**
 * TypingTextComponent
 * Props:
 *  - texts: string[] (required) -> the texts to type one by one
 *  - speed: number (ms per char) default 50
 *  - pause: number (ms) pause after finishing each text before moving to next. default 1200
 *  - cursor: boolean default true
 *  - loop: boolean default false (if true, cycle through texts forever)
 *  - className: string extra classes for the wrapper
 *
 * Usage:
 *  <TypingTextComponent texts={["Hello world", "Welcome!"]} speed={40} loop />
 */

export default function TypingTextComponent({
  texts = [""],
  speed = 50,
  pause = 1200,
  cursor = true,
  loop = false,
  className = "",
}) {
  const [display, setDisplay] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const indexRef = useRef(0);
  const directionRef = useRef(1); // 1 typing, -1 deleting
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!texts.length) return;
    indexRef.current = 0;
    directionRef.current = 1;
    setDisplay("");

    function tick() {
      const currentText = texts[textIndex];
      if (directionRef.current === 1) {
        // typing forward
        const nextIndex = indexRef.current + 1;
        setDisplay(currentText.slice(0, nextIndex));
        indexRef.current = nextIndex;

        if (indexRef.current >= currentText.length) {
          // finished typing
          timeoutRef.current = setTimeout(() => {
            if (loop || textIndex < texts.length - 1) {
              directionRef.current = -1;
              tick();
            }
          }, pause);
          return;
        }
      } else {
        // deleting
        const nextIndex = indexRef.current - 1;
        setDisplay(currentText.slice(0, nextIndex));
        indexRef.current = nextIndex;

        if (indexRef.current <= 0) {
          // finished deleting -> move to next text
          timeoutRef.current = setTimeout(() => {
            directionRef.current = 1;
            setTextIndex((prev) => {
              const next = prev + 1;
              if (next >= texts.length) {
                return loop ? 0 : prev; // stay if not looping
              }
              return next;
            });
          }, pause / 2);
          return;
        }
      }
      timeoutRef.current = setTimeout(tick, speed);
    }

    timeoutRef.current = setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [texts, textIndex, speed, pause, loop]);

  return (
    <span className={`inline-block items-center gap-2 ${className}`}>
      <span className="whitespace-normal break-words ">{display}</span>
      {cursor && (
        <span
          aria-hidden
          className="ms-1 ml-0 inline-block h-[1.1em] w-[1px] animate-[blink_1s_steps(2,end)_infinite] bg-current"
        />
      )}
      <style>{`@keyframes blink{50%{opacity:0}} .animate-\[blink_1s_steps\(2,end\)_infinite\]{animation:blink 1s steps(2,end) infinite;}`}</style>
    </span>
  );
}
