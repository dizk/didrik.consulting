import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'

class DidrikConsultingDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head/>
                <body className="bg-black">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default DidrikConsultingDocument