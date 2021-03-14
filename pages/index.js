import Head from 'next/head'
import InfoCard from '../components/home/InfoCard'
import NewsListItem from '../components/home/NewsListItem'
import StatsCard from '../components/home/StatsCard'

import {info, latestNews, stats} from './api/data'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="w-full bg-black h-80">
          
        </div>
        <div className="w-full bg-gray-200 p-4">
          <h2 className="border-b-2 border-gray-600 text-2xl font-bold uppercase">Latest News</h2>
          <div className="flex flex-col lg:flex-row w-full lg:space-x-6 pt-2">
            {latestNews.map((item, nindx) => (
              <NewsListItem key={nindx} {...item} />
            ))}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row w-full p-6 lg:space-x-6">
          {/* Badges will most likely be passed in dynamically */}
          {stats.map((item, sindx) => (
            <StatsCard key={sindx} {...item} />
          ))}
        </div>

        <div className="flex flex-row p-4 justify-center bg-green-700 shadow-lg">
          <div className="w-full lg:w-1/2">
            <input type="text" name="searchTxt" className="w-3/4 p-2" placeholder="Can't find what your looking for?"></input>
            <button name="searchBtn" className="w-1/4 p-2 bg-green-600 text-white" type="submit">Search</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:space-x-6 p-6">
          {info.map((item, iindx) => (
            <InfoCard key={iindx} {...item} />
          ))}
        </div>
      </main>
    </div>
  )
}
