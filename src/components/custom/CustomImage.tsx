import Image from "next/image";

interface Props {
    width?: number;
    height?: number;
    alt: string;
    src: string;
    priority?: boolean;
    sizes?: string;
    className: string;
}

const CustomImage = ({
    width,
    height,
    alt,
    src,
    priority,
    sizes,
    className,
}: Props) => {
    return (
        <Image
            className={className}
            width={width ?? 0}
            height={height ?? 0}
            alt={alt}
            src={src}
            priority={!!priority}
            sizes={sizes}
        />
    );
};

export default CustomImage;
