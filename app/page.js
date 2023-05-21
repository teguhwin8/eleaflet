import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen w-screen max-w-3xl mx-auto">
            <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeSCpcfIuZaRH2pYUEh6F0WhCwemGJ6wa-CGMFCrg8Jya507Q/viewform?usp=sf_link"
                target="_blank"
            >
                <Image
                    src={"/eleaflet.jpg"}
                    className="w-full"
                    width={768}
                    height={768}
                    alt={"E Leaflet Tata Cara Penggunaan Antibiotik"}
                />
            </Link>
        </div>
    );
}
