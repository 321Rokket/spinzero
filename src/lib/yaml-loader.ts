import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { join } from 'path';

export interface SiteStructure {
  site: {
    name: string;
    description: string;
    version: string;
  };
  navigation: {
    main_menu: MenuItem[];
  };
  footer: {
    menu: FooterMenuItem[];
    social_links: SocialLink[];
  };
  contact_info: ContactInfo;
  company_info: CompanyInfo;
}

export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  type?: 'dropdown';
  children?: MenuItem[];
}

export interface FooterMenuItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface CompanyInfo {
  footer_phone: string;
  footer_email: string;
  footer_address: string;
  copyright: string;
}

export interface ContentSections {
  sections: {
    hero_slider: HeroSliderSection;
    brands: BrandSection;
    about: AboutSection;
    services: ServicesSection;
    gallery: GallerySection;
    counters: CountersSection;
    testimonials: TestimonialsSection;
    awards: AwardsSection;
    team: TeamSection;
    blog: BlogSection;
    cta: CtaSection;
  };
}

export interface HeroSliderSection {
  type: string;
  slides: Array<{
    id: number;
    background_image: string;
    hero_image: string;
    title: string;
    social_links: Array<{ platform: string; label: string }>;
  }>;
}

export interface BrandSection {
  type: string;
  brands: Array<{
    id: number;
    name: string;
    logo: string;
    url: string;
  }>;
}

export interface AboutSection {
  type: string;
  tagline: string;
  title: string;
  cta: {
    text: string;
    url: string;
  };
}

export interface ServicesSection {
  type: string;
  tagline: string;
  title: string;
  description: string;
  items: Array<{
    id: number;
    icon: string;
    title: string;
    description: string;
    number: string;
  }>;
}

export interface GallerySection {
  type: string;
  tagline: string;
  title: string;
  items: Array<{
    id: number;
    type: 'image' | 'content';
    image?: string;
    title?: string;
    description?: string;
    number?: string;
    url: string;
  }>;
}

export interface CountersSection {
  type: string;
  items: Array<{
    value: number;
    suffix: string;
    label: string;
  }>;
}

export interface TestimonialsSection {
  type: string;
  tagline: string;
  title: string;
  cta: {
    text: string;
    url: string;
  };
  items: Array<{
    id: number;
    name: string;
    position: string;
    content: string;
    rating: number;
    avatar: string;
  }>;
}

export interface AwardsSection {
  type: string;
  tagline: string;
  title: string;
  items: Array<{
    id: number;
    icon: string;
    year: string;
    title: string;
    organization: string;
    number: string;
  }>;
}

export interface TeamSection {
  type: string;
  tagline: string;
  title: string;
  cta: {
    text: string;
    url: string;
  };
  members: Array<{
    id: number;
    name: string;
    position: string;
    image: string;
    offset_class: string;
  }>;
}

export interface BlogSection {
  type: string;
  tagline: string;
  title: string;
  description: string;
  articles: Array<{
    id: number;
    date: string;
    title: string;
    category: string;
    author: string;
    url: string;
  }>;
}

export interface CtaSection {
  type: string;
  title: string;
  button: {
    text: string;
    url: string;
  };
}

function loadYamlFile<T>(filename: string): T {
  const filePath = join(process.cwd(), 'schemas', filename);
  const fileContents = readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as T;
}

export function getSiteStructure(): SiteStructure {
  return loadYamlFile<SiteStructure>('site-structure.yaml');
}

export function getContentSections(): ContentSections {
  return loadYamlFile<ContentSections>('content-sections.yaml');
}

interface PageTemplates {
  page_templates: Record<string, {
    layout: string;
    sections: string[];
  }>;
}

interface ComponentDefinitions {
  components: Record<string, unknown>;
}

export function getPageTemplate(template: string) {
  const templates = loadYamlFile<PageTemplates>('page-templates.yaml');
  return templates.page_templates[template];
}

export function getComponentDefinitions() {
  return loadYamlFile<ComponentDefinitions>('component-definitions.yaml');
}