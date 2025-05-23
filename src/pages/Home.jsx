import React from 'react'
import News from '../component/News'
import Weather from '../component/Weather'

function Home() {
  return (
    <div className="h-screen p-4 bg-gray-100">
      <div className="flex h-full gap-6">
        
        {/* Scrollable News Section */}
        <div className="flex-1 overflow-y-auto bg-white rounded-xl shadow-md p-4">
          <News />
        </div>

        {/* Static Weather Section */}
        <div className="w-1/3 hidden md:block">
          <div className="bg-white rounded-xl shadow-md p-4 h-full">
            <Weather />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;
