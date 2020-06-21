import Head from 'next/head'
import fetch from 'node-fetch'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'
import { useState, useEffect } from 'react'
import FauxBlock from '../components/FauxBlock'
import Paging from '../components/Paging'
import List from '../components/List'
import Footer from '../components/Footer'
import Links from '../components/Links'
import { baseUrl } from '../utils'

export async function getServerSideProps() {
  let p1Data
  let allData
  try {
    const res = await fetch(`${baseUrl}askstories.json`)
    allData = await res.json()

    const p1 = allData.slice(0, 30)

    const promise = p1.map(async (item) => {
      const a = await fetch(`${baseUrl}item/${item}.json`)
      return await a.json()
    })

    p1Data = await Promise.all(promise)
  } catch (e) {
    console.log(e)
  }

  return {
    props: { data: p1Data, allData },
  }
}

const MAIN_COLOR = '#624ed0'
const Title = styled.h1`
  padding: 10px 10px 0;
  text-align: left;
  color: ${MAIN_COLOR};
`

export default function Home({ data, allData }) {
  const [currentData, setCurrentData] = useState(data)
  const [page, setPage] = useState(1)
  const [renderNumber, setRenderNumber] = useState(true)
  const [loading, setLoading] = useState(true)

  const getDataPage = async () => {
    try {
      setLoading(true)
      setCurrentData([])
      const limit = 30
      const start = (page - 1) * limit // - 1 to start with 0
      const pageData = allData.slice(start, start + limit)

      const promiseData = pageData.map(async (item) => {
        const a = await fetch(`${baseUrl}item/${item}.json`)
        return await a.json()
      })

      const newData = await Promise.all(promiseData)
      setCurrentData(newData)
      setRenderNumber(true)
      setLoading(false)
      console.log(newData)
    } catch (e) {
      console.log(e)
    }
  }

  const handlePrev = () => {
    console.log('Prev')
    setPage(page - 1)
    setRenderNumber(false)
  }

  const handleNext = () => {
    console.log('Next')
    setPage(page + 1)
    setRenderNumber(false)
  }

  useEffect(() => {
    getDataPage(page)
  }, [page])

  return (
    <div className="container">
      <Head>
        <title>Hacker News | Ask</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Hacker News | Ask</Title>

      <Links active="ask" />

      <Paging
        page={page}
        allData={allData}
        handlePrev={handlePrev}
        handleNext={handleNext}
        loading={loading}
      />

      <List
        currentData={currentData}
        renderNumber={renderNumber}
        page={page}
        noLink={true}
        loading={loading}
      />

      <Paging
        page={page}
        allData={allData}
        handlePrev={handlePrev}
        handleNext={handleNext}
        loading={loading}
      />

      <Footer />
    </div>
  )
}
