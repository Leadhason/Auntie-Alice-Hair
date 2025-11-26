
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  duration?: string;
  productsUsed?: string[];
  preparation?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
