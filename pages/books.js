import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import categories from '../data/books'

export async function getStaticProps() {
  const meta = {
    title: 'Books // Samuel Ironkwe',
    description:
      "",
    tagline: 'Fiction. Self Improvement. Startups.',
    image: '/static/images/books-bw.jpg',
    primaryColor: 'yellow',
    secondaryColor: 'pink',
  }

  return { props: meta }
}

function Books(props) {
  const { title, description, image } = props

  const renderAll = () => {
    return categories.map((category, index) => {
      return (
        <div key={index}>
          <ul>
            {category.items.map((item) => {
              return (
                <li >
                  {item.title}
                </li>
              )
            })}

          </ul>
        </div>
      )
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://ironkwe.pro/books" property="og:url" />
        <meta content={`https://ironkwe.pro${image}`} property="og:image" />
      </Head>

      <Paragraph>
        Below are some books that I have read and I think are <strong> worth sharing. </strong>
        I plan on doing a lot more reading in 2024 so feel free to send me suggestions by <a href='/contact'> email. </a>  </Paragraph>
      {renderAll()}
    </>
  )
}

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

Books.Layout = Base

export default Books