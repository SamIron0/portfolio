import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import categories from '../data/books'

export async function getStaticProps() {
  const meta = {
    title: 'Books // Samuel Ironkwe',
    description:
      "Below are some books that I have read and I think are <strong> worth sharing. </strong> I plan on doing a lot more reading in 2024 so feel free to send me suggestions by <strong> email. </strong>",
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
            <li key={iIndex}>
              {category.items.map((item, iIndex) => {
                return (
                  <p>
                    {item.title}
                  </p>
                )
              })}
            </li>

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

      <p dangerouslySetInnerHTML={{ __html: description }} />

      {renderAll()}
    </>
  )
}

Books.Layout = Base

export default Books