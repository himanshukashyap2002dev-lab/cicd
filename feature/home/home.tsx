import LuminaEcosystem from "./components/eco-system";
import FaqSection from "./components/faq";
import FutureExpansion from "./components/future-expantion";
import Hero from "./components/hero";
import InfraFeatures from "./components/infrastructure";
import LendingFlowSection from "./components/lending-flow";
import LendingPartners from "./components/lending-partners";
import MarketOpportunity from "./components/market-opportunity";
import Partners from "./components/partners";
import PricingPlans from "./components/price-plans";
import SmartSecureScalable from "./components/security";
import Testimonials from "./components/testimonials";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <Partners />
      <LendingPartners />
      <LendingFlowSection />
      <MarketOpportunity />
      <InfraFeatures />
      <FutureExpansion />
      <LuminaEcosystem />
      <SmartSecureScalable />
      <PricingPlans />
      <Testimonials />
      <FaqSection />
    </div>
  );
}
