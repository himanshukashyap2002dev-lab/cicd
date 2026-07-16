"use client";
import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import {
  Bot,
  Sparkles,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const INK = "#11183B";
const MUTED = "#5B6478";
const ACCENT = "#047857";
const ACCENT_SOFT = "#E1F3EA";
const BORDER = "#E2E7E2";

interface AgentItem {
  title: string;
  desc: string;
}

interface ApiItem {
  method: "GET" | "POST";
  path: string;
  title: string;
  desc: string;
}

interface SolutionItem {
  title: string;
  desc: string;
  from: string;
  to: string;
}

const AGENTS: AgentItem[] = [
  { title: "Scoring Agent", desc: "Real-time credit scoring" },
  { title: "Verification Agent", desc: "Instant document validation" },
  { title: "Underwriting Agent", desc: "Automated decisions" },
  { title: "Fraud Detection Agent", desc: "Advanced pattern recognition" },
  { title: "Compliance Agent", desc: "Automated regulatory checks" },
  { title: "Collections Agent", desc: "Recovery automation" },
  { title: "Drop-off Recovery Agent", desc: "Re-engaging lost leads" },
  { title: "Supervisory Agent", desc: "Cross-agent orchestration" },
];

const APIS: ApiItem[] = [
  {
    method: "GET",
    path: "/v1/mobilegator",
    title: "MobileGator",
    desc: "Device & app behavior analysis for risk profiling.",
  },
  {
    method: "POST",
    path: "/v1/fraudgator",
    title: "FraudGator",
    desc: "Real-time fraud scoring across data points.",
  },
  {
    method: "GET",
    path: "/v1/bureaugator",
    title: "BureauGator",
    desc: "Seamless multi-bureau data integration.",
  },
];

const SOLUTIONS: SolutionItem[] = [
  {
    title: "CredForge",
    desc: "A complete, deployed decision engine tailored for institutional requirements.",
    from: "#0B1530",
    to: "#15264A",
  },
  {
    title: "MobileForge",
    desc: "White-labeled mobile application stack for instant lending presence.",
    from: "#047857",
    to: "#0E9F6E",
  },
];

interface ColumnHeaderProps {
  icon: LucideIcon;
  label: string;
  tone: "neutral" | "accent";
}

const ColumnHeader: FC<ColumnHeaderProps> = ({ icon: Icon, label, tone }) => (
  <div
    className="mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
    style={{
      backgroundColor: tone === "accent" ? ACCENT_SOFT : "#EDEFEC",
    }}
  >
    <Icon
      className="h-3.5 w-3.5"
      style={{ color: tone === "accent" ? ACCENT : "#5B6478" }}
      strokeWidth={2}
    />
    <span className="text-[12.5px] font-semibold" style={{ color: INK }}>
      {label}
    </span>
  </div>
);

interface RevealProps {
  visible: boolean;
  delay: number;
  children: ReactNode;
  className?: string;
}

const Reveal: FC<RevealProps> = ({ visible, delay, children, className }) => (
  <div
    className={`motion-safe:transition-all motion-safe:duration-500 ${className ?? ""}`}
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(14px)",
      transitionDelay: visible ? `${delay}ms` : "0ms",
    }}
  >
    {children}
  </div>
);

const AgentCard: FC<{ item: AgentItem; index: number; visible: boolean }> = ({
  item,
  index,
  visible,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <Reveal visible={visible} delay={260 + index * 55}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative overflow-hidden rounded-xl bg-white px-4 py-3.5 motion-safe:transition-all motion-safe:duration-300"
        style={{
          boxShadow: hover
            ? "0 8px 20px -10px rgba(4,120,87,0.22)"
            : "0 1px 2px rgba(17,24,57,0.04)",
          transform: hover ? "translateX(3px)" : "translateX(0)",
        }}
      >
        <span
          className="absolute left-0 top-0 h-full w-[3px] motion-safe:transition-transform motion-safe:duration-300"
          style={{
            backgroundColor: ACCENT,
            transform: hover ? "scaleY(1)" : "scaleY(0)",
          }}
        />
        <h4 className="text-[13.5px] font-semibold" style={{ color: INK }}>
          {item.title}
        </h4>
        <p className="mt-0.5 text-[12.5px]" style={{ color: MUTED }}>
          {item.desc}
        </p>
      </div>
    </Reveal>
  );
};

const ApiCard: FC<{ item: ApiItem; index: number; visible: boolean }> = ({
  item,
  index,
  visible,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const isGet = item.method === "GET";
  return (
    <Reveal visible={visible} delay={320 + index * 90}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="rounded-xl border bg-white p-4 motion-safe:transition-all motion-safe:duration-300"
        style={{
          borderColor: hover ? "rgba(4,120,87,0.3)" : BORDER,
          transform: hover ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hover
            ? "0 10px 24px -12px rgba(4,120,87,0.25)"
            : "0 1px 2px rgba(17,24,57,0.04)",
        }}
      >
        <div className="mb-2.5 flex items-center justify-between">
          <span
            className="rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide"
            style={{
              backgroundColor: isGet ? ACCENT_SOFT : "#FEF3E2",
              color: isGet ? ACCENT : "#B45309",
            }}
          >
            {item.method}
          </span>
          <span
            className="font-mono text-[10.5px]"
            style={{ color: "#9CA3B4" }}
          >
            {item.path}
          </span>
        </div>
        <h4 className="mb-1 text-[14px] font-semibold" style={{ color: INK }}>
          {item.title}
        </h4>
        <p className="text-[12.5px] leading-relaxed" style={{ color: MUTED }}>
          {item.desc}
        </p>
      </div>
    </Reveal>
  );
};

const SolutionCard: FC<{
  item: SolutionItem;
  index: number;
  visible: boolean;
}> = ({ item, index, visible }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <Reveal visible={visible} delay={380 + index * 120}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative overflow-hidden rounded-2xl p-5 motion-safe:transition-all motion-safe:duration-300"
        style={{
          backgroundImage: `linear-gradient(135deg, ${item.from}, ${item.to})`,
          transform: hover ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hover
            ? `0 18px 36px -14px ${item.to}88`
            : "0 6px 16px -10px rgba(11,21,48,0.35)",
        }}
      >
        <span
          className="absolute -right-6 -top-10 h-28 w-28 rounded-full blur-2xl motion-safe:transition-transform motion-safe:duration-500"
          style={{
            backgroundColor: "rgba(255,255,255,0.16)",
            transform: hover
              ? "translate(-6px, 6px) scale(1.1)"
              : "translate(0,0) scale(1)",
          }}
        />
        <h4
          className="relative mb-1.5 text-[16px] font-bold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {item.title}
        </h4>
        <p className="relative mb-4 text-[12.5px] leading-relaxed text-white/75">
          {item.desc}
        </p>
        <span className="relative inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white">
          Deploy Now
          <ArrowRight
            className="h-3.5 w-3.5 motion-safe:transition-transform motion-safe:duration-300"
            style={{ transform: hover ? "translateX(3px)" : "translateX(0)" }}
          />
        </span>
      </div>
    </Reveal>
  );
};

const LuminaEcosystem: FC = () => {
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
      ref={ref}
      id="lumina"
      className="relative  overflow-hidden px-6 py-20 bg-custom-gradient"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* header */}
        <Reveal visible={visible} delay={0} className="mb-14 text-center">
          <h2
            className="mx-auto mb-4 max-w-xl text-[32px] font-bold leading-[1.15] tracking-tight sm:text-[45px]"
            style={{ color: INK, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A Unified Stack of Intelligence
          </h2>
          <p
            className="mx-auto max-w-md text-[14.5px] leading-relaxed"
            style={{ color: MUTED }}
          >
            From autonomous agents to plug-and-play APIs, we provide the full
            stack for modern finance.
          </p>
        </Reveal>

        {/* columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* AI Agents */}
          <div>
            <Reveal visible={visible} delay={140}>
              <ColumnHeader icon={Bot} label="AI Agents" tone="neutral" />
            </Reveal>
            <div className="flex flex-col gap-3">
              {AGENTS.map((item, i) => (
                <AgentCard
                  key={item.title}
                  item={item}
                  index={i}
                  visible={visible}
                />
              ))}
            </div>
          </div>

          {/* Lumina APIs */}
          <div>
            <Reveal visible={visible} delay={200}>
              <ColumnHeader icon={Sparkles} label="APIs" tone="accent" />
            </Reveal>
            <div className="flex flex-col gap-3">
              {APIS.map((item, i) => (
                <ApiCard
                  key={item.title}
                  item={item}
                  index={i}
                  visible={visible}
                />
              ))}
            </div>
          </div>

          {/* Deployable Solutions */}
          <div>
            <Reveal visible={visible} delay={260}>
              <ColumnHeader
                icon={Rocket}
                label="Deployable Solutions"
                tone="accent"
              />
            </Reveal>
            <div className="flex flex-col gap-4">
              {SOLUTIONS.map((item, i) => (
                <SolutionCard
                  key={item.title}
                  item={item}
                  index={i}
                  visible={visible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuminaEcosystem;
