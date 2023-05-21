import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Tata Cara Penggunaan Antibiotik",
};

export default function Home() {
    const eleaflets = [
        {
            title: "E-Leaflet 1",
            description: "Tata Cara Penggunaan Antibiotik 1",
            image: "e-leaflet-1.jpg",
        },
        {
            title: "E-Leaflet 2",
            description: "Tata Cara Penggunaan Antibiotik 2",
            image: "e-leaflet-2.jpg",
        },
        {
            title: "E-Leaflet 3",
            description: "Tata Cara Penggunaan Antibiotik 3",
            image: "e-leaflet-3.jpg",
        },
        {
            title: "E-Leaflet 4",
            description: "Tata Cara Penggunaan Antibiotik 4",
            image: "e-leaflet-4.jpg",
        },
        {
            title: "E-Leaflet 5",
            description: "Tata Cara Penggunaan Antibiotik 5",
            image: "e-leaflet-5.jpg",
        },
        {
            title: "E-Leaflet 6",
            description: "Tata Cara Penggunaan Antibiotik 6",
            image: "e-leaflet-6.jpg",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeSCpcfIuZaRH2pYUEh6F0WhCwemGJ6wa-CGMFCrg8Jya507Q/viewform?usp=sf_link",
        },
    ];
    return (
        <>
            <div className="h-screen w-screen max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {eleaflets.map((eleaflet, index) => (
                        <Link href={eleaflet.link || "#"} key={index} target={eleaflet.link && "_blank"}>
                            <Image
                                src={`/${eleaflet.image}`}
                                className="w-full"
                                width={500}
                                height={500}
                                alt={eleaflet.description}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
