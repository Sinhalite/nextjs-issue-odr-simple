import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        slug: "dynamic",
      },
    },
  ]
  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const now = new Date().toLocaleString()
  return {
    props: {
      data: {
        now,
        slug: params?.slug,
      },
    },
  }
}

type Props = {
  data: {
    now: string
    slug?: string
  }
}

const Dynamic: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Link href="/">Go back</Link>
      <h1>/blog/[slug].tsx with getStaticPaths</h1>
      <p>{data.now}</p>
    </div>
  )
}

export default Dynamic
