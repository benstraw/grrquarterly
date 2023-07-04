import { MetaTags } from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
      user {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ article }) => {
  return (
    <>
      <MetaTags title={article.title} author={article.user.name} />
      <Article article={article} />
    </>
  )
}
