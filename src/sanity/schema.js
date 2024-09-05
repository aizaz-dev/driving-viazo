import hero from "./schemas/hero";
import features from "./schemas/features";
import page from "./schemas/page";
import drivers from "./schemas/drivers";
import driversHero from "./schemas/driversHero";
import pricingPlan from "./schemas/pricingPlan";
import pricingSection from "./schemas/pricingSection";
import faqItem from "./schemas/faqItem";
import faqSection from "./schemas/faqSection";
import blogSection from "./schemas/blogSection";
import blogPost from "./schemas/blogPost";
import footer from "./schemas/footer";
import driversFeatures from "./schemas/driversFeatures";

export const schema = {
  types: [
    hero,
    features,
    drivers,
    page,
    driversHero,
    driversFeatures,
    pricingPlan,
    pricingSection,
    faqItem,
    faqSection,
    blogPost,
    blogSection,
    footer,
  ],
};
