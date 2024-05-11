import FullImageCard from "@/components/fullimagecard";
import Link from "next/link";
const MyLinkedInPosts = () => {
    return (
        <div className="conainer w-fit p-4 bordered">
            <Link href="/"
                  className="fixed left-20 top-20 transform -translate-y-1/2 p-2 bg-white text-black rounded-r">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                </svg>
            </Link>

            <div className="grid-cols-1 justify-center text-center text-[32px] font-semibold m-10">LinkedIn Rants</div>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-2 p-4 m-10">
            <FullImageCard imageUrl="/images/liposts/lipost1.jpeg" buttonUrl="https://www.linkedin.com/posts/madhukarkumar_legend-has-it-that-when-the-first-engineered-activity-7180279981518852096-sTZ0?utm_source=share&utm_medium=member_desktop"/>
                <FullImageCard imageUrl="/images/liposts/lipost2.jpeg" buttonUrl="https://www.linkedin.com/posts/madhukarkumar_ai-marketing-activity-7178035422608912384-ZCGB?utm_source=share&utm_medium=member_desktop"/>
                <FullImageCard imageUrl="/images/liposts/lipost3.jpeg" buttonUrl="https://www.linkedin.com/posts/madhukarkumar_marketing-databases-billboards-activity-7164052709719879680-0byQ?utm_source=share&utm_medium=member_desktop" />
                <FullImageCard imageUrl="/images/liposts/lipost4.jpeg" buttonUrl="https://www.linkedin.com/posts/madhukarkumar_is-the-vision-pro-a-consumption-device-or-activity-7162483503354372096-m-F7?utm_source=share&utm_medium=member_desktop"/>
                <FullImageCard imageUrl="/images/liposts/lipost5.jpeg" buttonUrl="https://www.linkedin.com/posts/madhukarkumar_davos-diaries-2024a-tale-of-badges-bollywood-activity-7154088699733917696-DM83?utm_source=share&utm_medium=member_desktop"/>
                <FullImageCard imageUrl="/images/liposts/lipost6.jpeg" buttonUrl="https://www.linkedin.com/posts/madhukarkumar_attention-is-all-you-need-choice-is-all-activity-7149524405285453824-pyyz?utm_source=share&utm_medium=member_desktop"/>
                <FullImageCard imageUrl="/images/liposts/lipost7.jpeg" buttonUrl="https://www.linkedin.com/posts/madhukarkumar_yesterday-evening-i-was-lucky-enough-to-experience-activity-7128842421035044864-v6BH?utm_source=share&utm_medium=member_desktop"/>
                <FullImageCard imageUrl="/images/liposts/lipost8.jpeg" buttonUrl="https://www.linkedin.com/posts/madhukarkumar_plg-codegrowth-plg-activity-7125883979504705537-v7Ge?utm_source=share&utm_medium=member_desktop"/>
            </div>
        </div>
    );

}

export default MyLinkedInPosts;