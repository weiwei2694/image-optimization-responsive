# Image Optimization Responsive

```js
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
```

So that your images can perform well and be responsive, use the sizes property from Next.js.

## Source
- [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Linter for Responsive Images](https://ausi.github.io/respimagelint/)
- [CSS Tricks: A Guide to Responsive Images Syntax](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/)

So that you can better understand how to use Image from Next.js, you can visit the video that was made by Dave Gray

# [Next.js Image Optimization with Image Component | Responsive Images](https://youtu.be/gpJKj45AikY)