import hero from "./schemas/hero";
import features from "./schemas/features";
import page from "./schemas/page";
import drivers from "./schemas/drivers";
import driversHero from "./schemas/driversHero";
import pricingPlan from "./schemas/pricingPlan";
import pricingSection from "./schemas/pricingSection";
import faqItem from "./schemas/faqItem";
import faqSection from "./schemas/faqSection";

export const schema = {
  types: [
    hero,
    features,
    drivers,
    page,
    driversHero,
    pricingPlan,
    pricingSection,
    faqItem,
    faqSection,
  ],
};
