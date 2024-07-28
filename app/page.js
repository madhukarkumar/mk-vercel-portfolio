import Medium from "@/components/medium";
import Substack from "@/components/substack";
import Podcast from "@/components/podcast";
import Mywork from "@/components/mywork";
import Fullengthcard from "@/components/fullengthcard";
import Profile from "./components/Profile";
import UnsplashCard from "./components/UnsplashCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { Switch } from "@/components/ui/switch"

import './globals.css';

export default function Home() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="container mx-auto pt-10 px-4">
                <div className="flex justify-end mb-4">
                    <ThemeToggle />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                        <Profile />
                    </div>
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <Substack username="madhukarkumar" />
                                    </div>
                                    <div>
                                        <Medium username="madhukarkumar" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <Mywork username="madhukarkumar"/>
                                    </div>
                                    <div>
                                        <Podcast username="madhukarkumar"/>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-4">
                                <UnsplashCard />
                            </div>
                        </div>
                        <div className="mt-8">
                            <Fullengthcard username="madhukarkumar"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}