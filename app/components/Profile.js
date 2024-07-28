import { Text } from '@/components/text'
import Image from "next/image"

export default function Profile() {
    return (
        <div className="text-justify lg:text-left w-auto">
            <Text>
                <figure className="mb-4">
                    <Image
                        src="/images/mk-casual.jpeg"
                        alt="Madhukar Kumar profile picture"
                        width={208}
                        height={208}
                        className="rounded-full mx-auto lg:mx-0"
                        style={{ borderRadius: '50%' }}
                    />
                </figure>
                <h1 className="text-primary mb-4 font-sans text-3xl font-medium">Madhukar Kumar</h1>
                <p className=" text-xl font-medium font-sans mb-2">
                    Dev turned Marketer
                </p>
                <hr className="w-16 mx-auto lg:mx-0 border-t-2 border-muted my-4"/>
                <p className="text-muted-foreground text-lg font-sans text-justify">
                    Currently: CMO @SingleStore <br/>
                    Previously: Redis, Nutanix, Oracle <br/>
                    About Me: I started my career as a journalist then found my way pursuing a Masters in Software Engineering and Mass Communications 
                    and became a software engineer. A few years later, I became a product manager and then turned into a marketer working in several small
                    and large tech companies in the Silicon Valley. <br/> 
                    I love building stuff that is at the intersection of technology and creativity and write about and build applications
                    aimed at helping startup founders, growth marketers and anyone looking to combine product management, product marketing and 
                    engineering to make things that matter.<br/>
                    Feel free to connect with me on Twitter and LinkedIn.</p>
            </Text>
        </div>
    )
}