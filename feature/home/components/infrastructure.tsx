"use client";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
} from "react";
import {
  Workflow,
  AudioLines,
  ShieldCheck,
  Check,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  tag: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
  accent: string;
  accentSoft: string;
}

interface RingStyle extends CSSProperties {
  "--tw-ring-color"?: string;
}

const FEATURES: Feature[] = [
  {
    tag: "GOV INFRA",
    icon: Workflow,
    title: "Indistack Integration",
    desc: "Seamless government infrastructure connectivity — Aadhaar, eKYC, UPI, and DigiLocker, wired in for compliant onboarding at scale.",
    points: [
      "Seamless eKYC flow",
      "Real-time UPI linkage",
      "DigiLocker document pull",
    ],
    accent: "#0D9488",
    accentSoft: "#EAFAF7",
  },
  {
    tag: "BHARAT AI",
    icon: AudioLines,
    title: "Voice + Vernacular AI",
    desc: "Conversational interfaces built for Bharat. 12+ Indian languages, tuned for Tier 2 and Tier 3 users who think out loud.",
    points: [
      "12+ Indian languages",
      "Tier 2 & 3 focused",
      "Voice-first onboarding",
    ],
    accent: "#0D9488",
    accentSoft: "#EAFAF7",
  },
  {
    tag: "WEB3 SECURITY",
    icon: ShieldCheck,
    title: "Datashield Z+ Security",
    desc: "A next-gen Web3 security stack with end-to-end encryption and on-chain logs — tamper-proof protection across every layer.",
    points: [
      "Zero-trust architecture",
      "Tamper-proof on-chain logs",
      "End-to-end encryption",
    ],
    accent: "#047857",
    accentSoft: "#EAFAF1",
  },
];

function hexToRgba(hex: string, alpha: number): string {
  const v = hex.replace("#", "");
  const r = parseInt(v.substring(0, 2), 16);
  const g = parseInt(v.substring(2, 4), 16);
  const b = parseInt(v.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface CardProps {
  feature: Feature;
  index: number;
  visible: boolean;
}

const Card: FC<CardProps> = ({ feature, index, visible }) => {
  const [hover, setHover] = useState<boolean>(false);
  const Icon = feature.icon;

  const cardStyle: RingStyle = {
    borderColor: hover ? hexToRgba(feature.accent, 0.35) : "#E7E8F1",
    transform: visible
      ? hover
        ? "translateY(-6px)"
        : "translateY(0)"
      : "translateY(24px)",
    opacity: visible ? 1 : 0,
    transitionDelay: visible ? `${index * 120}ms` : "0ms",
    boxShadow: hover
      ? `0 18px 40px -12px ${hexToRgba(feature.accent, 0.28)}, 0 0 0 1px ${hexToRgba(feature.accent, 0.08)}`
      : "0 1px 2px rgba(17,24,57,0.04)",
    "--tw-ring-color": hexToRgba(feature.accent, 0.45),
  };

  return (
    <div
      tabIndex={0}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="group relative rounded-2xl border bg-white p-7 outline-none
        motion-safe:transition-all motion-safe:duration-500
        focus-visible:ring-2 focus-visible:ring-offset-2"
      style={cardStyle}
    >
      {/* icon badge */}
      <div
        className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl
          motion-safe:transition-transform motion-safe:duration-500"
        style={{
          backgroundColor: feature.accentSoft,
          transform: hover
            ? "rotate(-6deg) scale(1.08)"
            : "rotate(0deg) scale(1)",
        }}
      >
        <Icon
          className="h-6 w-6 motion-safe:transition-transform motion-safe:duration-500"
          style={{
            color: feature.accent,
            transform: hover ? "rotate(6deg)" : "rotate(0deg)",
          }}
          strokeWidth={2}
        />
      </div>

      <p
        className="mb-2 font-mono text-[11px] font-medium tracking-[0.18em]"
        style={{ color: feature.accent }}
      >
        {feature.tag}
      </p>

      <h3
        className="mb-2.5 text-[19px] font-semibold tracking-tight text-[#11183B]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {feature.title}
      </h3>

      <p className="mb-6 text-[14.5px] leading-relaxed text-[#5B6478]">
        {feature.desc}
      </p>

      <div
        className="mb-5 h-px w-full motion-safe:transition-all motion-safe:duration-500"
        style={{
          background: hover
            ? `linear-gradient(90deg, ${feature.accent}, transparent)`
            : "#EDEEF4",
        }}
      />

      <ul className="space-y-2.5">
        {feature.points.map((point, i) => (
          <li
            key={point}
            className="flex items-center gap-2.5 text-[13.5px] text-[#2C3252] motion-safe:transition-all motion-safe:duration-300"
            style={{
              transform: hover ? "translateX(3px)" : "translateX(0)",
              transitionDelay: hover ? `${i * 60}ms` : "0ms",
            }}
          >
            <span
              className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full motion-safe:transition-colors motion-safe:duration-300"
              style={{
                backgroundColor: hover ? feature.accent : feature.accentSoft,
              }}
            >
              <Check
                className="h-3 w-3 motion-safe:transition-colors motion-safe:duration-300"
                style={{ color: hover ? "#fff" : feature.accent }}
                strokeWidth={3}
              />
            </span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const InfraFeatures: FC = () => {
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
      className="relative overflow-hidden bg-custom-gradient px-6 py-20"
    >
      <div className="relative mx-auto max-w-5xl">
        <h2
          className="mx-auto mb-4 max-w-2xl text-center text-[34px] font-bold leading-[1.15] tracking-tight text-[#11183B] sm:text-[45px] motion-safe:transition-all motion-safe:duration-700"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
          }}
        >
          Smarter Infrastructure for Modern Lending
        </h2>

        <p
          className="mx-auto mb-16 max-w-lg text-center text-[15px] leading-relaxed text-[#5B6478] motion-safe:transition-all motion-safe:duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transitionDelay: "80ms",
          }}
        >
          Built to scale. Designed for trust. Our core features are engineered
          to solve high-volume lending friction points.
        </p>

        {/* signature: connector rail */}
        <div className="relative mx-auto mb-[17px] hidden h-3 max-w-5xl grid-cols-3 md:grid">
          <svg
            className="absolute left-[16.6%] right-[16.6%] top-1/2 h-px w-[66.8%] -translate-y-1/2"
            preserveAspectRatio="none"
            viewBox="0 0 100 1"
          >
            <line
              x1={0}
              y1={0.5}
              x2={100}
              y2={0.5}
              stroke="#D7D9E6"
              strokeWidth={1}
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: visible ? 0 : 1,
                transition: "stroke-dashoffset 1.1s ease-out 0.3s",
              }}
            />
          </svg>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="relative flex items-center justify-center"
            >
              <span
                className="h-2 w-2 rounded-full ring-4 ring-[#F6F7FB] motion-safe:transition-all motion-safe:duration-500"
                style={{
                  backgroundColor: visible ? f.accent : "#D7D9E6",
                  transitionDelay: `${400 + i * 150}ms`,
                  transform: visible ? "scale(1)" : "scale(0.4)",
                }}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Card
              key={feature.title}
              feature={feature}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfraFeatures;
