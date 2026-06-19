export interface Project {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  url?: string;
}

// Order here controls display order on Home (first 4) and Work (all) pages.
export const projects: Project[] = [
  {
    slug: "curry-mile",
    name: "Curry Mile",
    title: "Curry Mile UAE — Restaurant & Food Delivery Website",
    tagline: "Restaurant & Food Delivery Website",
    description:
      "A restaurant website designed to showcase menus, online ordering, and customer engagement while strengthening the restaurant's digital presence and local visibility.",
    image: "curry-mile.png",
    url: "https://currymile.ae",
  },
  {
    slug: "lice-expert-salon",
    name: "Lice Xpert Salon",
    title: "Lice Xpert Salon — Professional Lice Treatment Website",
    tagline: "Healthcare & Treatment Booking Website",
    description:
      "A modern healthcare-focused website designed for India's first professional lice removal salon. Built to showcase treatments, build trust, and simplify appointment booking for families seeking safe and chemical-free lice removal services.",
    image: "lice-expert.png",
    url: "https://licexpertsalon.com",
  },
  {
    slug: "sinova-advisory",
    name: "Sinova Advisory",
    title: "Sinova Advisory — Financial & Business Consulting Website",
    tagline: "Financial & Business Consulting Website",
    description:
      "A corporate consulting website designed to communicate expertise, professional services, and strategic advisory solutions for businesses and investors.",
    image: "sinova.png",
    url: "https://www.sinovaadvisory.com",
  },
  {
    slug: "vinifinds",
    name: "Vini Finds",
    title: "Vini Finds — Product Discovery & Affiliate Content Platform",
    tagline: "Product Discovery & Affiliate Content Platform",
    description:
      "A content-driven website built to showcase trending products, gadgets, home essentials, and lifestyle discoveries while supporting affiliate marketing and product promotion.",
    image: "vinifinds.png",
    url: "https://vinifinds.com",
  },
  {
    slug: "momena-autos",
    name: "Momena Autos",
    title: "Momena Autos — Premium Car Import & Dealership Platform",
    tagline: "Car Import & Dealership Platform",
    description:
      "A professional automotive website developed for a trusted car importer and wholesaler in Bangladesh, featuring vehicle listings, inventory management, and lead generation functionality.",
    image: "momena-autos.png",
    url: "https://momenaautos.com",
  },
  {
    slug: "uae-fix-care",
    name: "UAE Fix Care",
    title: "UAE Fix Care — Home Maintenance & Repair Services Website",
    tagline: "Home Maintenance & Repair Services Website",
    description:
      "A service-based website created for home maintenance and repair solutions, helping customers book technicians and request maintenance services online.",
    image: "uae-fix-care.png",
    url: "https://uaefixcare.com",
  },
  {
    slug: "uae-iptv-subscription",
    name: "UAE IPTV Subscription",
    title: "UAE IPTV Subscription — Streaming Service Website",
    tagline: "Streaming Subscription Service Website",
    description:
      "A conversion-focused website built for IPTV subscription services, featuring package presentation, subscription plans, and customer inquiry functionality.",
    image: "uae-iptv.png",
    url: "https://uaeiptvsubscription.com",
  },
  {
    slug: "hs-real-estate-dubai",
    name: "Eiendom i Dubai",
    title: "Eiendom i Dubai — Dubai Real Estate Website",
    tagline: "Real Estate Investment Website",
    description:
      "A real estate platform built for Norwegian investors and buyers interested in Dubai properties, featuring listings, investment information, and inquiry forms.",
    image: "hs-real-estate.png",
    url: "https://eiendomidubai.no",
  },
  {
    slug: "mmic",
    name: "Mahmud Maya",
    title: "Mahmud Maya — Digital Agency Website",
    tagline: "Digital Agency Website",
    description:
      "A modern agency website showcasing web development, digital marketing, SEO, and business growth services with a strong focus on credibility and client acquisition.",
    image: "mmic.png",
    url: "https://mahmudmaya.com",
  },
  {
    slug: "familiacurtainx",
    name: "Familia Curtain X",
    title: "Familia Curtain X — Interior & Curtain Solutions Website",
    tagline: "Interior & Curtain Solutions Website",
    description:
      "A visually appealing website developed for a curtain and interior solutions provider, highlighting custom products, services, and customer inquiries.",
    image: "familia-curtainx.png",
    url: "https://familiacurtainx.com",
  },
  {
    slug: "autoscrap-uae",
    name: "Auto Scrap UAE",
    title: "Auto Scrap UAE — Vehicle Recycling & Scrap Car Services",
    tagline: "Vehicle Recycling & Scrap Car Services",
    description:
      "A lead-generation website created for a UAE-based vehicle scrapping company, helping customers request car removal, recycling, and scrap vehicle services online.",
    image: "autoscrap-uae.png",
    url: "https://autoscrapuae.com",
  },
  {
    slug: "ig-ads-agency",
    name: "Instagram Ads Agency",
    title: "Instagram Ads Agency — Social Media Marketing Website",
    tagline: "Social Media Marketing Agency Website",
    description:
      "A lead-generation website designed for Instagram advertising services, focused on client acquisition, service presentation, and marketing conversions.",
    image: "ig-ads-agency.png",
    url: "https://instagramadsagency.com",
  },
  {
    slug: "ays-eva",
    name: "Ayseva",
    title: "Ayseva — Business & Digital Services Platform",
    tagline: "Business & Digital Services Platform",
    description:
      "A clean and professional corporate website designed to present services, build credibility, and generate business inquiries.",
    image: "ays-eva.png",
    url: "https://ayseva.com",
  },
];

export const homeProjects = projects.slice(0, 4);
