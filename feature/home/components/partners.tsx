/* eslint-disable @next/next/no-img-element */
"use client";

export default function Partners() {
  const imageDetails = [
    { imageName: "JP", imageUrl: "/home/jp.svg", serialNo: "1" },
    { imageName: "HDFC", imageUrl: "/home/hdfc.svg", serialNo: "2" },
    { imageName: "HSBC", imageUrl: "/home/hsbc.svg", serialNo: "3" },
    { imageName: "SBI", imageUrl: "/home/sbi.svg", serialNo: "4" },
    { imageName: "ICIC", imageUrl: "/home/icic.svg", serialNo: "5" },
  ];

  // Repeat enough times so the strip is always wider than the viewport
  const repeated = [
    ...imageDetails,
    ...imageDetails,
    ...imageDetails,
    ...imageDetails,
    ...imageDetails,
    ...imageDetails,
  ];

  return (
    <section
      style={{ padding: "29px 0", background: "#fff", overflow: "hidden" }}
    >
      <p
        style={{
          textAlign: "center",
          fontWeight: 600,
          marginBottom: 24,
          opacity: 0.9,
        }}
      >
        TRUSTED BY
      </p>

      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: 120,
            background: "linear-gradient(to right, #fff 0%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: 120,
            background: "linear-gradient(to left, #fff 0%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Single scrolling row — repeated array guarantees no empty space ever */}
        <div className="scroll-row">
          {repeated.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={image.imageName}
              className="scroll-img"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroll-row {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scroll-left 60s linear infinite;
          will-change: transform;
        }

        .scroll-img {
          height: 28px;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
          margin: 0 32px;
          opacity: 0.65;
          filter: grayscale(100%);
          transition:
            filter 0.3s,
            opacity 0.3s;
        }

        .scroll-img:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        @keyframes scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
