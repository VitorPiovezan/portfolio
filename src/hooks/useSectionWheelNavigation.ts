import { type RefObject, useLayoutEffect, useRef } from 'react';

/** Alinhado com scroll-padding-top em .portfolio-scroll-root */
const SNAP_PAD = 64;
const EDGE_PX = 14;
const LOCK_MS = 520;

function normalizeDeltaY(e: WheelEvent, clientHeight: number): number {
  if (e.deltaMode === 1) return e.deltaY * 16;
  if (e.deltaMode === 2) return e.deltaY * clientHeight;
  return e.deltaY;
}

/**
 * No fim da área rolável de uma seção, o próximo gesto de rolagem (eixo Y)
 * pula para a próxima/anterior `.portfolio-snap-section`.
 * Na última seção, a rolagem seguinte segue para o rodapé (scroll nativo).
 */
export function useSectionWheelNavigation(
  scrollRef: RefObject<HTMLElement | null>,
): void {
  const lockRef = useRef(false);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    const onWheel = (e: WheelEvent): void => {
      if (lockRef.current) return;

      const dy = normalizeDeltaY(e, el.clientHeight);
      if (Math.abs(dy) < 0.5) return;

      const sections = el.querySelectorAll<HTMLElement>('.portfolio-snap-section');
      if (sections.length === 0) return;

      const metrics = Array.from(sections).map((section) => {
        const top =
          section.getBoundingClientRect().top -
          el.getBoundingClientRect().top +
          el.scrollTop;
        return {
          el: section,
          top,
          bottom: top + section.offsetHeight,
        };
      });

      const st = el.scrollTop;
      const viewBottom = st + el.clientHeight;

      let active = 0;
      for (let k = 0; k < metrics.length; k += 1) {
        if (metrics[k].top - SNAP_PAD <= st + EDGE_PX) active = k;
      }

      const snapLine = metrics[active].top - SNAP_PAD;
      const atSectionTop = st <= snapLine + EDGE_PX;
      const atSectionBottom = viewBottom >= metrics[active].bottom - EDGE_PX;

      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth';

      if (dy > 0 && atSectionBottom) {
        if (active >= metrics.length - 1) return;
        e.preventDefault();
        lockRef.current = true;
        metrics[active + 1].el.scrollIntoView({ block: 'start', behavior });
        window.setTimeout(() => {
          lockRef.current = false;
        }, LOCK_MS);
        return;
      }

      if (dy < 0 && atSectionTop) {
        if (active <= 0) return;
        e.preventDefault();
        lockRef.current = true;
        metrics[active - 1].el.scrollIntoView({ block: 'start', behavior });
        window.setTimeout(() => {
          lockRef.current = false;
        }, LOCK_MS);
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [scrollRef]);
}
