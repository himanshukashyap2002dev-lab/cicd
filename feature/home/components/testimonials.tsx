"use client";
import { useEffect, useRef, useState, type FC } from "react";
import { Star, StarHalf } from "lucide-react";

const INK = "#11183B";
const MUTED = "#5B6478";
const ACCENT = "#047857";
const BORDER = "#E2E7E2";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  color: string;
}

const AVATAR_COLORS = [
  "#047857",
  "#11183B",
  "#0D9488",
  "#134E4A",
  "#065F46",
  "#0F766E",
];

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Mehta",
    role: "Head of Digital Lending, NovaFin NBFC",
    quote:
      "OneTone helped us reduce manual verification and significantly improve our loan processing speed. The platform integrated seamlessly with our existing systems.",
    rating: 5,
    color: AVATAR_COLORS[0],
  },
  {
    name: "Priya Sharma",
    role: "VP – Credit Operations, FinEdge Capital",
    quote:
      "The AI-powered verification workflows have improved both approval accuracy and customer experience. Implementation was smooth and our team adopted it quickly.",
    rating: 5,
    color: AVATAR_COLORS[1],
  },
  {
    name: "Amit Verma",
    role: "Chief Technology Officer, KreditSphere",
    quote:
      "From onboarding to decisioning, OneTone provides everything we needed in a single platform. It has become a core part of our lending infrastructure.",
    rating: 5,
    color: AVATAR_COLORS[2],
  },
  {
    name: "Neha Kapoor",
    role: "Product Head, SwiftLend Finance",
    quote:
      "The modular architecture allowed us to launch new lending products much faster without rebuilding our existing technology stack.",
    rating: 5,
    color: AVATAR_COLORS[3],
  },
  {
    name: "Arjun Nair",
    role: "AVP – Risk & Analytics, Aspire Finance",
    quote:
      "Real-time risk assessment and automated workflows have improved operational efficiency while maintaining compliance across every loan application.",
    rating: 5,
    color: AVATAR_COLORS[4],
  },
  {
    name: "Sneha Iyer",
    role: "Director – Lending Solutions, CredAxis Technologies",
    quote:
      "OneTone gave us the flexibility to scale rapidly while keeping security and governance at the center of every lending workflow.",
    rating: 5,
    color: AVATAR_COLORS[5],
  },
];

const TRUST_NAMES = [
  "Rachel Kim",
  "James Liu",
  "Tanya Shah",
  "Carlos Mendes",
  "Eli Turner",
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = rating - i >= 1;
        const half = !filled && rating - i >= 0.5;
        if (filled) {
          return (
            <Star
              key={i}
              className="h-3.5 w-3.5"
              fill={ACCENT}
              stroke={ACCENT}
              strokeWidth={1.5}
            />
          );
        }
        if (half) {
          return (
            <StarHalf
              key={i}
              className="h-3.5 w-3.5"
              fill={ACCENT}
              stroke={ACCENT}
              strokeWidth={1.5}
            />
          );
        }
        return (
          <Star
            key={i}
            className="h-3.5 w-3.5"
            fill="none"
            stroke="#D7D9E6"
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

const TestimonialCard: FC<{
  item: Testimonial;
  index: number;
  visible: boolean;
}> = ({ item, index, visible }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      tabIndex={0}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="flex flex-col rounded-2xl border bg-white p-6 outline-none motion-safe:transition-all motion-safe:duration-500 focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hover
            ? "translateY(-5px)"
            : "translateY(0)"
          : "translateY(20px)",
        transitionDelay: visible ? `${index * 90}ms` : "0ms",
        borderColor: hover ? "rgba(4,120,87,0.3)" : BORDER,
        boxShadow: hover
          ? "0 16px 32px -16px rgba(4,120,87,0.22)"
          : "0 1px 2px rgba(17,24,57,0.04)",
      }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12.5px] font-semibold text-white motion-safe:transition-transform motion-safe:duration-300"
          style={{
            backgroundColor: item.color,
            transform: hover ? "scale(1.08)" : "scale(1)",
          }}
        >
          {initials(item.name)}
        </div>
        <div>
          <p className="text-[14px] font-semibold" style={{ color: INK }}>
            {item.name}
          </p>
          <p className="text-[12px]" style={{ color: MUTED }}>
            {item.role}
          </p>
        </div>
      </div>

      <p
        className="mb-5 flex-1 text-[13.5px] leading-relaxed"
        style={{ color: "#2C3252" }}
      >
        "{item.quote}"
      </p>

      <div
        className="mb-3 h-px w-full"
        style={{ backgroundColor: "#EDEEF4" }}
      />

      <div className="flex items-center gap-2">
        <span className="text-[12.5px] font-semibold" style={{ color: INK }}>
          {item.rating % 1 === 0 ? item.rating : item.rating.toFixed(1)}/5
        </span>
        <Stars rating={item.rating} />
      </div>
    </div>
  );
};

const TrustStack: FC<{ visible: boolean }> = ({ visible }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="flex flex-col items-start gap-2.5 md:items-end motion-safe:transition-all motion-safe:duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transitionDelay: "120ms",
      }}
    >
      <div
        className="flex items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {TRUST_NAMES.map((name, i) => (
          <div
            key={name}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-semibold text-white motion-safe:transition-transform motion-safe:duration-300"
            style={{
              backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
              marginLeft: i === 0 ? 0 : -8,
              transform: hover ? `translateX(${i * 2}px)` : "translateX(0)",
              zIndex: TRUST_NAMES.length - i,
            }}
          >
            {initials(name)}
          </div>
        ))}
        <div
          className="z-0 flex h-8 items-center justify-center rounded-full border-2 border-white px-2 text-[10px] font-bold text-white"
          style={{ backgroundColor: INK, marginLeft: -8 }}
        >
          54K+
        </div>
      </div>
      <p
        className="max-w-[10.5rem] text-right text-[12.5px] leading-relaxed md:text-right"
        style={{ color: MUTED }}
      >
        We are trusted by more than{" "}
        <span style={{ color: INK, fontWeight: 600 }}>54K users</span> worldwide
      </p>
    </div>
  );
};

const Testimonials: FC = () => {
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
    <section ref={ref} className="relative overflow-hidden px-6 py-20 bg-white">
      <div className="relative mx-auto max-w-5xl">
        {/* header */}
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div
            className="max-w-md motion-safe:transition-all motion-safe:duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
            }}
          >
            <h2
              className="mb-3 text-[28px] whitespace-nowrap  font-bold tracking-tight sm:text-[45px]"
              style={{ color: INK, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              See Why People Love Us
            </h2>
            <p className="text-[14px] leading-relaxed" style={{ color: MUTED }}>
              From saving smarter to tracking every dollar — our users are
              seeing real change. Here's what they're saying about their
              journey.
            </p>
          </div>
        </div>

        {/* testimonial grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard
              key={item.name}
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

export default Testimonials;
