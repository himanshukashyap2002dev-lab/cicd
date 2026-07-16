"use client";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
} from "react";
import {
  Bot,
  Send,
  Fingerprint,
  MailCheck,
  type LucideIcon,
} from "lucide-react";

interface RingStyle extends CSSProperties {
  "--tw-ring-color"?: string;
}

const INK = "#11183B";
const MUTED = "#5B6478";
const ACCENT = "#047857";
const ACCENT_SOFT = "#E1F3EA";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: Bot,
    title: "Modular AI Agent Stack",
    desc: "Independent agents for every stage, allowing for granular control and optimization.",
  },
  {
    icon: Send,
    title: "Comprehensive API Network",
    desc: "Connect seamlessly with hundreds of data sources via our pre-built gateway APIs.",
  },
  {
    icon: Fingerprint,
    title: "Privacy-First Design",
    desc: "Data is encrypted at rest and in transit, ensuring zero-trust security across the board.",
  },
  {
    icon: MailCheck,
    title: "Real-Time Decision Engine",
    desc: "Millisecond processing for high-frequency lending environments without lag.",
  },
];

const FeatureCard: FC<{
  item: FeatureItem;
  index: number;
  visible: boolean;
}> = ({ item, index, visible }) => {
  const [hover, setHover] = useState<boolean>(false);
  const Icon = item.icon;

  const cardStyle: RingStyle = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? hover
        ? "translateY(-4px)"
        : "translateY(0)"
      : "translateY(20px)",
    transitionDelay: visible ? `${index * 110}ms` : "0ms",
    boxShadow: hover
      ? "0 16px 34px -16px rgba(4,120,87,0.28)"
      : "0 1px 3px rgba(17,24,57,0.06), 0 1px 2px rgba(17,24,57,0.04)",
    "--tw-ring-color": "rgba(4,120,87,0.4)",
  };

  return (
    <div
      tabIndex={0}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="relative flex-1 min-w-0 rounded-2xl bg-white p-7 border border-[#16B364] outline-none motion-safe:transition-all motion-safe:duration-500 focus-visible:ring-2 focus-visible:ring-offset-2"
      style={cardStyle}
    >
      <div
        className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl motion-safe:transition-transform motion-safe:duration-500"
        style={{
          backgroundColor: ACCENT_SOFT,
          transform: hover
            ? "rotate(-6deg) scale(1.08)"
            : "rotate(0deg) scale(1)",
        }}
      >
        <Icon
          className="h-5 w-5 motion-safe:transition-transform motion-safe:duration-500"
          style={{
            color: ACCENT,
            transform: hover ? "rotate(6deg)" : "rotate(0deg)",
          }}
          strokeWidth={2}
        />
      </div>

      <h3
        className="mb-2 max-w-xs text-[18px] font-bold leading-snug tracking-tight"
        style={{ color: INK, fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {item.title}
      </h3>

      <span
        className="mb-3 block h-px motion-safe:transition-all motion-safe:duration-500"
        style={{ backgroundColor: ACCENT, width: hover ? "32px" : "16px" }}
      />

      <p
        className="max-w-sm text-[13.5px] leading-relaxed"
        style={{ color: MUTED }}
      >
        {item.desc}
      </p>
    </div>
  );
};

const SmartSecureScalable: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
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
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-6 md:px-14 py-20"
    >
      <div className="relative mx-auto ">
        {/* header */}
        <div
          className="mb-12 text-center motion-safe:transition-all motion-safe:duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
          }}
        >
          <h2
            className="mb-3 text-[30px] font-bold tracking-tight sm:text-[45px]"
            style={{ color: INK, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Smart, Secure, and Scalable
          </h2>
          <p className="text-[14px]" style={{ color: MUTED }}>
            Powered by AI-first architecture.
          </p>
        </div>

        {/* feature grid */}
        <div className="flex flex-col gap-5 w-full lg:flex-row  lg:justify-between">
          {FEATURES.map((item, i) => (
            <FeatureCard
              key={item.title}
              item={item}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartSecureScalable;
