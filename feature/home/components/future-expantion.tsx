"use client";
import { useEffect, useRef, useState, type FC } from "react";
import {
  ArrowRight,
  Briefcase,
  Sprout,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

interface Stat {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix: string;
  desc: string;
}

const ACCENT = "#047857";
const ACCENT_SOFT = "#EAFAF1";

const STATS: Stat[] = [
  {
    icon: Briefcase,
    label: "MSME Lending",
    value: 1.2,
    suffix: "T",
    desc: "Unlocking capital for millions of small businesses through automated cash-flow analysis.",
  },
  {
    icon: Sprout,
    label: "Agri-Credit",
    value: 400,
    suffix: "B",
    desc: "Using alternative data and satellite imagery to provide credit to the rural economy.",
  },
  {
    icon: GraduationCap,
    label: "Edu-Finance",
    value: 150,
    suffix: "B",
    desc: "Funding the future through smart student loans and vocational training credit lines.",
  },
];

function formatValue(value: number): string {
  return value < 10 ? value.toFixed(1) : Math.round(value).toString();
}

function useCountUp(target: number, start: boolean, delayMs: number): number {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const timeout = window.setTimeout(() => {
      const duration = 1100;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(target * eased);
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delayMs);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [start, target, delayMs]);

  return current;
}

interface StatColumnProps {
  stat: Stat;
  index: number;
  visible: boolean;
}

const StatColumn: FC<StatColumnProps> = ({ stat, index, visible }) => {
  const [hover, setHover] = useState<boolean>(false);
  const Icon = stat.icon;
  const count = useCountUp(stat.value, visible, 250 + index * 150);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative px-0 py-2 first:pl-0 md:px-9 md:first:pl-0 motion-safe:transition-all motion-safe:duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: visible ? `${index * 120}ms` : "0ms",
      }}
    >
      <div
        className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg motion-safe:transition-transform motion-safe:duration-500"
        style={{
          backgroundColor: ACCENT_SOFT,
          transform: hover
            ? "rotate(-6deg) scale(1.1)"
            : "rotate(0deg) scale(1)",
        }}
      >
        <Icon
          className="h-4.5 w-4.5"
          style={{ color: ACCENT }}
          strokeWidth={2}
        />
      </div>

      <div className="mb-3 flex items-center gap-3">
        <h3 className="text-[14px] font-semibold text-[#11183B]">
          {stat.label}
        </h3>
        <span
          className="h-px motion-safe:transition-all motion-safe:duration-500"
          style={{
            backgroundColor: ACCENT,
            width: hover ? "28px" : "14px",
          }}
        />
      </div>

      <p
        className="mb-1 text-[42px] font-bold leading-none tracking-tight tabular-nums sm:text-[46px]"
        style={{ color: ACCENT, fontFamily: "'Space Grotesk', sans-serif" }}
      >
        ₹{formatValue(count)}
        {stat.suffix}
      </p>

      <p className="mb-3 text-[14px] font-semibold text-[#11183B]">Potential</p>

      <p className="max-w-[15rem] text-[13.5px] leading-relaxed text-[#5B6478]">
        {stat.desc}
      </p>
    </div>
  );
};

const FutureExpansion: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [btnHover, setBtnHover] = useState<boolean>(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-20 bg-white">
      <div className="relative mx-auto max-w-5xl">
        {/* header */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div
            className="motion-safe:transition-all motion-safe:duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
            }}
          >
            <p
              className="mb-3  text-[11px] font-medium tracking-[0.18em]"
              style={{ color: ACCENT }}
            >
              FUTURE EXPANSION &amp; MARKET SIZE
            </p>
            <h2
              className="max-w-md text-[36px] font-bold leading-[1.1] tracking-tight text-[#11183B] sm:text-[45px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Future Expansion &amp; Market Size
            </h2>
          </div>

          <div
            className="flex flex-col items-start gap-5 md:items-end motion-safe:transition-all motion-safe:duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transitionDelay: "100ms",
            }}
          >
            <p className="max-w-xs text-[14.5px] leading-relaxed text-[#5B6478] md:text-right">
              Built for scale with massive addressable markets across multiple
              lending verticals.
            </p>
            <button
              type="button"
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium text-white outline-none
                motion-safe:transition-all motion-safe:duration-300 focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                backgroundColor: ACCENT,
                boxShadow: btnHover
                  ? `0 10px 24px -8px ${ACCENT}66`
                  : `0 4px 12px -6px ${ACCENT}40`,
                transform: btnHover ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              See More
              <ArrowRight
                className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-300"
                style={{
                  transform: btnHover ? "translateX(3px)" : "translateX(0)",
                }}
              />
            </button>
          </div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:divide-x md:divide-[#E7E8F1]">
          {STATS.map((stat, i) => (
            <StatColumn
              key={stat.label}
              stat={stat}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureExpansion;
