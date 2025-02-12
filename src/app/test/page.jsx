import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>Page</h1>
      <Link href="/">
        Go back to Home
      </Link>
      <Image src="/next.svg" alt="Next js logo" width={128} height={128}/>

      <Image src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589960306i/35605167.jpg" alt="Moon Knight"  width={128} height={128}/>
    </div>
  )
}

export default page