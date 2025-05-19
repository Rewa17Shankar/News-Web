import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-white shadow-inner text-gray-700 text-center py-4">
      <p className="text-sm">© {new Date().getFullYear()} Headliner. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer;
