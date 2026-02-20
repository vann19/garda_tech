
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export enum PageView {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Portfolio = 'portfolio',
  Contact = 'contact'
}
