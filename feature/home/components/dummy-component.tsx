import {
  useEffect,
  useRef,
  useState,
  type FC,
  type CSSProperties,
} from "react";
import {
  Inbox,
  ScanLine,
  IdCard,
  FileSignature,
  type LucideIcon,
} from "lucide-react";

const INK = "#11183B";
const MUTED = "#5B6478";
const ACCENT = "#047857";
const ACCENT_SOFT = "#E1F3EA";
const BORDER = "#E2E7E2";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: Inbox,
    title: "Lead & Eligibility",
    desc: "Instant profiling and soft-check for immediate feedback.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "Offer & KYC",
    desc: "Dynamic offer generation paired with seamless eKYC.",
  },
  {
    number: "03",
    icon: IdCard,
    title: "Mandate & Verification",
    desc: "Automated mandate setup and final risk verification.",
  },
  {
    number: "04",
    icon: FileSignature,
    title: "eSign & Disbursal",
    desc: "Digital signing and instant fund transfer to borrower.",
  },
];

const StepRow: FC<{
  step: Step;
  index: number;
  isLast: boolean;
  visible: boolean;
  active: boolean;
  onSelect: () => void;
}> = ({ step, index, isLast, visible, active, onSelect }) => {
  const [hover, setHover] = useState<boolean>(false);
  const Icon = step.icon;

  // The staggered entrance (fade/slide in on scroll) needs a delay so rows
  // reveal one after another. But once a row has revealed, that same delay
  // must NOT keep applying to hover/active changes, or every interaction
  // inherits up to ~670ms of dead time before anything visibly happens.
  // `settled` flips to true right after this row's entrance finishes, and
  // from then on transitions run immediately and faster.
  const [settled, setSettled] = useState<boolean>(false);
  const revealDelayMs = 250 + index * 140;

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => setSettled(true), revealDelayMs + 520);
    return () => clearTimeout(timeout);
  }, [visible, revealDelayMs]);

  const interactionDuration = settled ? "duration-200" : "duration-500";
  const transitionDelay = visible && !settled ? `${revealDelayMs}ms` : "0ms";

  const cardStyle: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? hover && !active
        ? "translateX(2px)"
        : "translateX(0)"
      : "translateX(-16px)",
    transitionDelay,
    backgroundColor: active ? ACCENT : "#FFFFFF",
    borderColor: active
      ? "transparent"
      : hover
        ? "rgba(4,120,87,0.35)"
        : BORDER,
    boxShadow: active
      ? "0 10px 22px -12px rgba(4,120,87,0.35)"
      : hover
        ? "0 12px 26px -14px rgba(4,120,87,0.2)"
        : "0 1px 2px rgba(17,24,57,0.04)",
  };

  return (
    <div className="flex gap-3 sm:gap-4">
      {/* badge + connector */}
      <div className="flex flex-col items-center">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold motion-safe:transition-all motion-safe:${interactionDuration}`}
          style={{
            backgroundColor: active ? ACCENT : "#FFFFFF",
            color: active ? "#FFFFFF" : MUTED,
            border: active ? "none" : `1px solid ${BORDER}`,
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.6)",
            transitionDelay: visible && !settled ? `${index * 140}ms` : "0ms",
          }}
        >
          {step.number}
        </div>
        {!isLast && (
          <div
            className="relative w-px flex-1 overflow-hidden"
            style={{ backgroundColor: BORDER }}
          >
            <div
              className="absolute left-0 top-0 w-full motion-safe:transition-all motion-safe:duration-700"
              style={{
                backgroundColor: ACCENT,
                height: visible ? "100%" : "0%",
                transitionDelay: visible ? `${320 + index * 140}ms` : "0ms",
              }}
            />
          </div>
        )}
      </div>

      {/* card */}
      <div
        role="button"
        tabIndex={0}
        aria-pressed={active}
        aria-label={`Show ${step.title} step`}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect();
          }
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`mb-4 sm:mb-5 flex-1 cursor-pointer rounded-2xl border p-4 sm:p-5 outline-none motion-safe:transition-all motion-safe:${interactionDuration} focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2`}
        style={cardStyle}
      >
        <div className="mb-2 flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg motion-safe:transition-transform motion-safe:duration-300"
            style={{
              backgroundColor: active ? "rgba(255,255,255,0.18)" : ACCENT_SOFT,
              transform: hover
                ? "rotate(-6deg) scale(1.06)"
                : "rotate(0deg) scale(1)",
            }}
          >
            <Icon
              className="h-4 w-4"
              style={{ color: active ? "#FFFFFF" : ACCENT }}
              strokeWidth={2}
            />
          </div>

          <h3
            className="text-[15px] sm:text-[15.5px] font-semibold"
            style={{
              color: active ? "#FFFFFF" : INK,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {step.title}
          </h3>
        </div>

        <p
          className="text-[13px] leading-relaxed"
          style={{ color: active ? "rgba(255,255,255,0.85)" : MUTED }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
};

interface LoanStepFlowProps {
  /** Index of the step that should render as active/highlighted. Defaults to 0. */
  activeIndex?: number;
  /** Called with the step index whenever a user clicks or keyboard-activates a row. */
  onStepSelect?: (index: number) => void;
}

const LoanStepFlow: FC<LoanStepFlowProps> = ({
  activeIndex = 0,
  onStepSelect,
}) => {
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
      className="relative mt-8 w-full max-w-[573px] overflow-hidden"
    >
      <div className="relative">
        {STEPS.map((step, i) => (
          <StepRow
            key={step.number}
            step={step}
            index={i}
            isLast={i === STEPS.length - 1}
            visible={visible}
            active={i === activeIndex}
            onSelect={() => onStepSelect?.(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default LoanStepFlow;
