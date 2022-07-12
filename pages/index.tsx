import type { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div>
      <h1>Next.js Issue #38306</h1>
      <ul>
        <li>
          <Link href="/blog/test">Go to test post</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
