import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        slug: "test",
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

const Post: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Link href="/">Go back</Link>
      <h1>{data?.slug}</h1>
      <p>{data.now}</p>
    </div>
  )
}

export default Post
