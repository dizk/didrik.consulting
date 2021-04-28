import 'tailwindcss/tailwind.css'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="container ml-20">
            <div className="mt-20 flex items-end">
                <Image src="/didrik_white.svg" height={95} width={250}/>
            </div>
            <div className="mt-40">
                <h1 className="text-7xl text-white font-display">Restful APIs written in Java</h1>
            </div>
            <div className="mt-2">
                <h1 className="text-7xl text-white font-display">Docker, Kubernetes</h1>
            </div>
            <div className="mt-16">
                <h1 className="text-9xl text-white font-display">Interested?</h1>
                <p className="text-white">Sling an email to didrik@didrik.consulting</p>
            </div>
        </div>
    )
}

