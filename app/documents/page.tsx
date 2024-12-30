import Link from 'next/link'
import React from 'react'

const DocumentPage = () => {
    return (
        <Link href="/documents/1">
            <span className='text-blue-500 underline'>Go to Document 1</span>
        </Link>
    )
}

export default DocumentPage