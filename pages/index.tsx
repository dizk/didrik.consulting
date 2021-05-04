import 'tailwindcss/tailwind.css'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="container ml-5 md:ml-20">
            <div className="mt-20 flex items-end">
                <Image src="/didrik_white.svg" height={95} width={250}/>
            </div>
            <div className="mt-24 sm:ml-32 flex">
                <div className="relative w-72 md:w-96">
                    <Image src="/portrait.jpg" layout="responsive" className="object-top object-cover rounded-full"
                           height={1} width={1}/>
                </div>
            </div>
            <div className="mt-32">
                <h1 className="text-3xl md:text-7xl text-white font-display">Restful APIs written in Java</h1>
            </div>
            <div className="mt-2">
                <h1 className="text-3xl md:text-7xl text-white font-display">Docker, Kubernetes</h1>
            </div>
            <div className="mt-24">
                <h1 className="text-4xl md:text-9xl text-white font-display">Interested?</h1>
                <p className="text-white">Sling an email to didrik@didrik.consulting</p>
            </div>
        </div>
    )
}