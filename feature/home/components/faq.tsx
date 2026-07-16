"use client";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
} from "react";
import { Plus } from "lucide-react";

const INK = "#11183B";
const MUTED = "#5B6478";
const ACCENT = "#047857";
const BORDER = "#E2E7E2";

interface RingStyle extends CSSProperties {
  "--tw-ring-color"?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How does OneTone improve lending?",
    answer:
      "OneTone automates onboarding, verification, credit decisioning, and monitoring to help lenders process loans faster and more accurately.",
  },
  {
    question: "Can OneTone integrate with existing systems?",
    answer:
      "Yes. OneTone connects with your existing lending stack, APIs, KYC providers, bureau services, and core banking systems.",
  },
  {
    question: "Is OneTone secure?",
    answer:
      "Absolutely. Enterprise-grade encryption, audit trails, role-based access, and compliance-ready infrastructure protect every transaction.",
  },
  {
    question: "Who can use OneTone?",
    answer:
      "OneTone is built for banks, NBFCs, fintechs, and digital lending platforms looking to modernize their lending operations.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Deployment is fast and modular. Our team helps integrate OneTone into your existing workflow with minimal disruption.",
  },
];

const FaqRow: FC<{
  item: FaqItem;
  index: number;
  open: boolean;
  visible: boolean;
  onToggle: () => void;
}> = ({ item, index, open, visible, onToggle }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative overflow-hidden rounded-xl border bg-white motion-safe:transition-all motion-safe:duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: visible ? `${index * 90}ms` : "0ms",
        borderColor: open || hover ? "rgba(4,120,87,0.35)" : BORDER,
        boxShadow: open
          ? "0 12px 26px -14px rgba(4,120,87,0.22)"
          : "0 1px 2px rgba(17,24,57,0.04)",
      }}
    >
      <span
        className="absolute left-0 top-0 h-full w-[3px] motion-safe:transition-transform motion-safe:duration-300"
        style={{
          backgroundColor: ACCENT,
          transform: open || hover ? "scaleY(1)" : "scaleY(0)",
        }}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{ "--tw-ring-color": "rgba(4,120,87,0.4)" } as RingStyle}
      >
        <span
          className="text-[14.5px] font-medium motion-safe:transition-colors motion-safe:duration-300"
          style={{ color: open ? ACCENT : INK }}
        >
          {item.question}
        </span>
        <Plus
          className="h-4 w-4 shrink-0 motion-safe:transition-transform motion-safe:duration-300"
          style={{
            color: ACCENT,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
          strokeWidth={2.25}
        />
      </button>

      <div
        className="grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className="px-5 pb-4 text-[13.5px] leading-relaxed"
            style={{ color: MUTED }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
      className="relative overflow-hidden px-6 py-20 bg-custom-gradient"
    >
      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[minmax(0,260px)_1fr] md:gap-14">
        {/* left header */}
        <div
          className="motion-safe:transition-all motion-safe:duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
          }}
        >
          <h2
            className="mb-3 text-[28px] sm:text-[45px] font-bold leading-[1.15] tracking-tight"
            style={{ color: INK, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            FAQs
          </h2>
          <p className="text-[13.5px] leading-relaxed" style={{ color: MUTED }}>
            Find answers to the most common questions about using OneTone for
            modern lending operations.
          </p>
        </div>

        {/* faq list */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <FaqRow
              key={item.question}
              item={item}
              index={i}
              visible={visible}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
