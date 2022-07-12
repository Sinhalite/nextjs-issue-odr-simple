import type { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div>
      <h1>Next.js Issue #38306</h1>
      <ul>
        <li>
          <Link href="/blog/dynamic">Go to dynamic route</Link>
        </li>
        <li>
          <Link href="/static">Go to static route</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
