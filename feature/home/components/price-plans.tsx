"use client";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
} from "react";
import { CheckCircle2 } from "lucide-react";

const INK = "#11183B";
const MUTED = "#5B6478";
const ACCENT = "#047857";
const ACCENT_SOFT = "#E1F3EA";
const BORDER = "#E7E8F1";

interface Plan {
  eyebrow: string;
  name: string;
  rate: string;
  rateLabel: string;
  rangeDesc: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const PLANS: Plan[] = [
  {
    eyebrow: "FOR STARTUPS",
    name: "Starter Plan",
    rate: "3%",
    rateLabel: "origination fee",
    rangeDesc: "Up to Rs. 500 Cr per month disbursement volume.",
    features: [
      "Access to core platform features",
      "Basic reporting & analytics",
      "Email & chat support",
    ],
    cta: "Start Growing",
    highlighted: false,
  },
  {
    eyebrow: "FOR SCALE",
    name: "Scale Plan",
    rate: "2.5%",
    rateLabel: "origination fee",
    rangeDesc: "Rs. 500 - 750 Cr per month disbursement volume.",
    features: [
      "White-label platform license",
      "Advanced AI automation",
      "Priority 24/7 support",
      "Dedicated account manager",
    ],
    cta: "Upgrade to Scale",
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    eyebrow: "INSTITUTIONAL",
    name: "Enterprise",
    rate: "2.0%",
    rateLabel: "origination fee",
    rangeDesc: "Above Rs. 750 Cr per month disbursement volume.",
    features: [
      "Custom B2B white-labeling",
      "AI-driven fraud detection",
      "On-site success team",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

interface RingStyle extends CSSProperties {
  "--tw-ring-color"?: string;
}

const PlanCard: FC<{ plan: Plan; index: number; visible: boolean }> = ({
  plan,
  index,
  visible,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const dark = plan.highlighted;

  const cardStyle: RingStyle = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? dark
        ? hover
          ? "translateY(-10px)"
          : "translateY(-6px)"
        : hover
          ? "translateY(-6px)"
          : "translateY(0)"
      : "translateY(24px)",
    transitionDelay: visible ? `${index * 120}ms` : "0ms",
    backgroundImage: dark
      ? "linear-gradient(150deg, #0B1530, #15264A)"
      : "#ffffff",
    borderColor: dark ? "transparent" : hover ? "rgba(4,120,87,0.3)" : BORDER,
    boxShadow: dark
      ? hover
        ? "0 30px 60px -20px rgba(11,21,48,0.45)"
        : "0 22px 46px -18px rgba(11,21,48,0.38)"
      : hover
        ? "0 16px 34px -16px rgba(4,120,87,0.22)"
        : "0 1px 2px rgba(17,24,57,0.04)",
    "--tw-ring-color": "rgba(4,120,87,0.4)",
  };

  return (
    <div
      tabIndex={0}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className={`relative flex flex-col rounded-2xl border p-7 outline-none motion-safe:transition-all bg-white motion-safe:duration-500 focus-visible:ring-2 focus-visible:ring-offset-2 ${
        dark ? "md:py-9" : ""
      }`}
      style={cardStyle}
    >
      {plan.badge && (
        <span
          className="absolute right-6 top-6 rounded-full px-3 py-1 text-[10.5px] font-semibold tracking-wide text-white motion-safe:transition-transform motion-safe:duration-300"
          style={{
            backgroundColor: ACCENT,
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        >
          {plan.badge}
        </span>
      )}

      <p
        className="mb-2 font-mono text-[11px] font-medium tracking-[0.18em]"
        style={{ color: dark ? "rgba(255,255,255,0.55)" : MUTED }}
      >
        {plan.eyebrow}
      </p>

      <h3
        className="mb-6 text-[20px] font-bold uppercase tracking-tight"
        style={{
          color: dark ? "#fff" : INK,
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {plan.name}
      </h3>

      <div className="mb-1 flex items-baseline gap-2">
        <span
          className="text-[34px] font-bold tracking-tight"
          style={{
            color: dark ? "#fff" : ACCENT,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {plan.rate}
        </span>
        <span
          className="text-[13px]"
          style={{ color: dark ? "rgba(255,255,255,0.6)" : MUTED }}
        >
          {plan.rateLabel}
        </span>
      </div>

      <p
        className="mb-6 text-[13px] leading-relaxed"
        style={{ color: dark ? "rgba(255,255,255,0.55)" : MUTED }}
      >
        {plan.rangeDesc}
      </p>

      <div
        className="mb-6 h-px w-full"
        style={{ backgroundColor: dark ? "rgba(255,255,255,0.12)" : "#EDEEF4" }}
      />

      <ul className="mb-8 flex flex-col gap-3">
        {plan.features.map((feature, i) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-[13.5px] motion-safe:transition-all motion-safe:duration-300"
            style={{
              color: dark ? "rgba(255,255,255,0.85)" : "#2C3252",
              transform: visible ? "translateX(0)" : "translateX(-6px)",
              opacity: visible ? 1 : 0,
              transitionDelay: visible
                ? `${index * 120 + 200 + i * 70}ms`
                : "0ms",
            }}
          >
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: dark ? ACCENT_SOFT : ACCENT }}
              strokeWidth={2}
            />
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-auto rounded-full px-5 py-2.5 text-[14px] font-semibold outline-none motion-safe:transition-all motion-safe:duration-300 focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          backgroundColor: dark ? ACCENT : hover ? ACCENT : "transparent",
          color: dark ? "#fff" : hover ? "#fff" : ACCENT,
          border: dark ? "none" : `1.5px solid ${ACCENT}`,
          boxShadow: dark && hover ? `0 10px 24px -8px ${ACCENT}77` : undefined,
        }}
      >
        {plan.cta}
      </button>
    </div>
  );
};

const PricingPlans: FC = () => {
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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative px-6 py-20 bg-custom-gradient"
    >
      <div className="relative mx-auto max-w-5xl">
        {/* header */}
        <div
          className="mb-14 text-center motion-safe:transition-all motion-safe:duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
          }}
        >
          <h2
            className="mb-3 text-[30px] font-bold tracking-tight sm:text-[45px]"
            style={{ color: INK, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Pricing Plans
          </h2>
          <p className="text-[14.5px]" style={{ color: MUTED }}>
            Progressive slab calculator applies to your disbursement volume.
          </p>
        </div>

        {/* plans */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} visible={visible} />
          ))}
        </div>

        {/* footer note */}
        <p
          className="mt-12 text-center text-[13px] italic motion-safe:transition-all motion-safe:duration-700"
          style={{
            color: MUTED,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transitionDelay: "500ms",
          }}
        >
          Our Promise: We are your growth partner. Whether you start small or
          scale big, our pricing aligns with your success.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
