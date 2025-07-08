import { useEffect, useRef } from "react";

export default function Donut() {
  const preRef = useRef(null);

  useEffect(() => {
    let x = 1760,
      z = 0,
      y = 0;
    let running = true;

    const render = () => {
      if (!running) return;
      z += 0.07;
      y += 0.03;
      const a = [...new Array(x)].map((_, r) => (r % 80 === 79 ? "\n" : " "));
      const r = new Array(x).fill(0);
      const t = Math.cos(z),
        e = Math.sin(z),
        n = Math.cos(y),
        o = Math.sin(y);
      for (let s = 0; s < 6.28; s += 0.07) {
        const c = Math.cos(s),
          h = Math.sin(s);
        for (let s2 = 0; s2 < 6.28; s2 += 0.02) {
          const v = Math.sin(s2),
            M = Math.cos(s2),
            i = c + 2,
            l = 1 / (v * i * e + h * t + 5),
            p = v * i * t - h * e,
            d = 0 | (40 + 30 * l * (M * i * n - p * o)),
            m = 0 | (12 + 15 * l * (M * i * o + p * n)),
            f =
              0 |
              (8 * ((h * e - v * c * t) * n - v * c * e - h * t - M * c * o)),
            y2 = d + 80 * m;
          if (m < 22 && m >= 0 && d >= 0 && d < 79 && l > r[y2]) {
            r[y2] = l;
            a[y2] = ".,-~:;=!*#$@"[f > 0 ? f : 0];
          }
        }
      }
      if (preRef.current) {
        preRef.current.innerText = a.join("");
      }
    };

    const interval = setInterval(render, 50);

    return () => {
      running = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <pre
      ref={preRef}
      style={{
        color: "#fff",
        background: "transparent",
        fontFamily: "monospace",
        fontSize: "4px",
        lineHeight: "4px",
        margin: 0,
        padding: 0,
        userSelect: "none",
        pointerEvents: "none",
      }}
    />
  );
}
