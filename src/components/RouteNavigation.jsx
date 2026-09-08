import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Conserva posiciones por entrada del historial; las páginas nuevas empiezan arriba.
export default function RouteNavigation() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map());

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      main.id = "main-content";
      main.tabIndex = -1;
    }

    let anchor;
    try {
      anchor = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    } catch {
      // Una ancla mal codificada no debe interrumpir la navegación.
    }

    if (anchor) {
      anchor.scrollIntoView({ behavior: "instant" });
    } else {
      const [left, top] = navigationType === "POP"
        ? positions.current.get(location.key) || [0, 0]
        : [0, 0];
      window.scrollTo({ left, top, behavior: "instant" });
    }
    if (navigationType !== "POP") main?.focus({ preventScroll: true });

    const remember = () => positions.current.set(location.key, [window.scrollX, window.scrollY]);
    window.addEventListener("scroll", remember, { passive: true });
    return () => window.removeEventListener("scroll", remember);
  }, [location.key, location.hash, navigationType]);

  return null;
}
