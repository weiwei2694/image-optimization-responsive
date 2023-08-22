import CustomImage from "@/components/custom/CustomImage";

const HomePage = () => {
    return (
        <>
            {/* Heading */}
            <h1 className="text-xl sm:text-5xl font-bold">
                Image Opmization | Responsive
            </h1>

            {/* Section of Images */}
            <section className="mt-8 sm:mt-16 flex flex-col gap-6 sm:gap-8">
                {/* Not Responsive */}
                <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-gray-800 text-lg sm:text-4xl">Not Responsive</h5>

                    <CustomImage
                        src="/img.jpg"
                        alt="Contoh Image"
                        width={3840}
                        // sizes="(min-width: 960px) 848px, calc(93.13vw - 27px)" // to be responsive and stable
                        className="w-full h-fit object-contain rounded-xl"
                    />
                </div>

                {/* Responsive */}
                <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-gray-800 text-lg sm:text-4xl">Responsive</h5>

                    <CustomImage
                        src="/img0.jpg"
                        alt="Contoh Image"
                        className="w-full h-fit object-contain rounded-xl"
                        sizes="(min-width: 960px) 848px, calc(93.13vw - 27px)" // to be responsive and stable
                        priority={true}
                    />
                </div>
            </section>
        </>
    );
};

export default HomePage;
