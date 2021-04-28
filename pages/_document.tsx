import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Roboto&display=swap"
                          rel="stylesheet"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <title>didrik.consulting</title>
                </Head>
                <body className="bg-black">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument