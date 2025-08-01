import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import heroImage from "@/public/banner.jpeg";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 px-10">
      <div className="text-center space-y-6">
        <div className="space-y-6 mx-auto">
          <h1 className="bg-gradient-to-b from-primary to-primary text-transparent bg-clip-text animate-pulse text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Welcome to Namma AI
            <br />
            Your AI Career Coach
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground">
            Start your AI career with personalized guidance and curated
            resources.
            <br />
            Unlock your potential and stay ahead in AI.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Link href={"/dashboard"}>
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button size="lg" variant="outline">
              Explore Resources
            </Button>
          </Link>
        </div>
        <div className="mt-5 md:mt-0 hero-image-wrapper">
          <Image
            src={heroImage}
            alt="banner namma ai"
            width={1280}
            height={720}
            className="mt-8 rounded-lg shadow-2xl mx-auto"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
