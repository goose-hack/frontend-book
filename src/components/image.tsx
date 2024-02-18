import NextImage, { ImageProps } from "next/image";

export function Image({ className, ...rest }: ImageProps) {
  return <NextImage className={`${className} max-w-lg`} {...rest} />;
}
