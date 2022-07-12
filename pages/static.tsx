import type { GetStaticProps, NextPage } from "next"
import Link from "next/link"

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const now = new Date().toLocaleString()
  return {
    props: {
      data: {
        now,
      },
    },
  }
}

type Props = {
  data: {
    now: string
  }
}

const Static: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Link href="/">Go back</Link>
      <h1>/static.tsx without getStaticPaths</h1>
      <p>{data.now}</p>
    </div>
  )
}

export default Static
