import { StaticImageData } from "next/image";

export type ServiceProps = {
  icon: string | StaticImageData;
  title?: string;
  description?: string;
  more?: string;
  icon2?: string | StaticImageData;
};

export type ClientProps = {
  icon: string | StaticImageData;
}

export type HomePageProps = {
  span: string;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
  withWidth?: boolean;
}

export type WorksProps = {
  icon: string | StaticImageData;
  subtitle: string;
  year: string;
  title: string;
  description: string;
};

export type ButtonProps = {
  text?: string;
  variant?: 'light' | 'dark';
}

export type OfficesProps = {
  title?: string;
  description?: string;
};

export type PortfolioProps = {
  title?: string;
  icon?: string | StaticImageData;
}

export type CompanyProps = {
  title?: string; 
}

export type SocialProps = {
  icon?: string | StaticImageData;
};

