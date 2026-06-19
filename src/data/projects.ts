export interface Project {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  url?: string;
}

// Order here controls display order on Home (first 4) and Work (all) pages.
export const projects: Project[] = [
  {
    slug: "curry-mile",
    name: "Curry Mile",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "curry-mile.png",
  },
  {
    slug: "lice-expert-salon",
    name: "Lice Expert Salon",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "lice-expert.png",
  },
  {
    slug: "sinova-advisory",
    name: "SinovaAdvisory",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "sinova.png",
  },
  {
    slug: "vinifinds",
    name: "Vinifinds",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "vinifinds.png",
  },
  {
    slug: "momena-autos",
    name: "Momena Autos",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "momena-autos.png",
  },
  {
    slug: "uae-fix-care",
    name: "UAE Fix Care",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "uae-fix-care.png",
  },
  {
    slug: "uae-iptv-subscription",
    name: "UAE IPTV Subscription",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "uae-iptv.png",
  },
  {
    slug: "hs-real-estate-dubai",
    name: "H&S Real Estate Dubai",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "hs-real-estate.png",
  },
  {
    slug: "mmic",
    name: "MMIC",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "mmic.png",
  },
  {
    slug: "familiacurtainx",
    name: "FamiliaCurtainX",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "familia-curtainx.png",
  },
  {
    slug: "autoscrap-uae",
    name: "AutoScrap UAE",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "autoscrap-uae.png",
  },
  {
    slug: "ig-ads-agency",
    name: "IG Ads Agency",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "ig-ads-agency.png",
  },
  {
    slug: "ays-eva",
    name: "Ays Eva",
    tagline: "Brand Identity, Brand Guidelines, Website Design",
    image: "ays-eva.png",
  },
];

export const homeProjects = projects.slice(0, 4);
