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
            description: "Petunjuk Penggunaan Obat Antibiotik",
            image: "eleaflet_1.jpg",
        },
        {
            title: "E-Leaflet 2",
            description: "Apa itu Antibiotik?",
            image: "eleaflet_2.jpg",
        },
        {
            title: "E-Leaflet 3",
            description: "Apa itu Resistensi?",
            image: "eleaflet_3.jpg",
        },
        {
            title: "E-Leaflet 4",
            description: "Ayo gunakan antibiotik secara bijak dan tepat",
            image: "eleaflet_4_1.jpg",
        },
        {
            title: "E-Leaflet 5",
            description: "Waktu pemakaian obat",
            image: "eleaflet_5.jpg",
        },
        {
            title: "E-Leaflet 6",
            description: "Tanyakan Apoteker",
            image: "eleaflet_6.jpg",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeSCpcfIuZaRH2pYUEh6F0WhCwemGJ6wa-CGMFCrg8Jya507Q/viewform?usp=sf_link",
        },
    ];
    return (
        <>
            <div className="min-h-screen w-screen max-w-5xl mx-auto my-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {eleaflets.map((eleaflet, index) => (
                        <Link href={eleaflet.link || "#"} key={index} target={eleaflet.link && "_blank"}>
                            <Image
                                src={`/eleaflet_image/${eleaflet.image}`}
                                className="w-full"
                                width={330}
                                height={695}
                                alt={eleaflet.description}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
