import React from 'react'
import News from '../component/News'
import Weather from '../component/Weather'

function Home() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Scrollable News Section */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-4 max-h-screen overflow-y-auto">
          <News />
        </div>

        {/* Static Weather Section */}
        <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-4 h-fit">
          <Weather />
        </div>

      </div>
    </div>
  )
}

export default Home;
  