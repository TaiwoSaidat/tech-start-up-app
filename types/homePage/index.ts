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
}

export type WorksProps = {
  icon: string | StaticImageData;
  subtitle: string;
  year: string;
  title: string;
  description: string;
};