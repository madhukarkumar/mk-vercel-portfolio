import { Text } from '@/components/text'
import Image from "next/image"

export default function Profile() {
    return (
        <div className="text-center lg:text-left">
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
                <p className="text-muted-foreground text-lg font-sans">
                    Currently: CMO @SingleStore <br/>
                    Previously: Redis, Nutanix, Oracle
                </p>
            </Text>
        </div>
    )
}