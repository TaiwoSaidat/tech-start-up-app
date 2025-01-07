
import { StaticImageData } from "next/image";

export type ClientCardProps = {
  icon: string | StaticImageData;
  title: string;
  description: string;
  // span: string;
};