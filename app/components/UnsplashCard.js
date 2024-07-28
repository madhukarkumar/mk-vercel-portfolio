import Link from 'next/link'
import Image from 'next/image'

export default function UnsplashCard() {
    return (
        <div className="bg-card h-[640px] text-card-foreground shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full" style={{paddingTop: '75%'}}>
                <Image 
                    src="https://photos.smugmug.com/Portfolio/i-jZBn2Xw/0/8M7RqwJs67DhCBC4X6K2c7J3JBN8QGBSdfHWbZgP/4K/_DSC2077-4K.jpg"
                    alt="Diwali night"
                    fill
                    style={{objectFit: 'cover'}}
                />
            </div>
            <div className="relative w-full top-2" style={{paddingTop: '75%'}}>
                <Image 
                    src="https://photos.smugmug.com/Travel/i-GZktvhw/0/L7TXgtTHxSdV2DfqHqMQNztRsShb6Zn7KZm9k7Jks/4K/_ARV2233-4K.jpg"
                    alt="Turtle"
                    fill
                    style={{objectFit: 'cover'}}
                />
            </div>
            <div className="p-4">
                <h2 className="text-primary h-3/4 font-sans text-2xl font-medium mb-2">My Pictures on Unsplash</h2>
                
                    <Link 
                        href="https://unsplash.com/@madhukarkumar" 
                        target="_blank" 
                        className="inline-block bg-primary text-primary-foreground font-sans font-medium px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                    >
                        Browse
                    </Link>
            </div>
        </div>
    )
}