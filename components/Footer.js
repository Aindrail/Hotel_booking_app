import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10  px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            
            <p>How HF works</p>
            <p>Newsroom</p>
            <p>HF 2021</p>
            <p>Investors</p>
            <p>HF Plus</p>
            <p>HF Luxe</p>


        </div>
        <div className='space-y-4 md:pl-2 text-xs text-gray-800'>

            <h5 className='font-bold'>
            
                COMMUNITY
            </h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>It's a pretty awesome frontend</p>
            <p>Referrals accepted</p>
            

            
        </div>
        <div className='space-y-4 md:pl-5 text-xs text-gray-800'>
            <h5 className='font-bold'>
                HOST
            </h5>
            <p>HF for Business</p>
            <p>Host your home</p>
            <p>Host an Online Experience</p>
            <p>Responsible hosting</p>
            

            
        </div>
        <div className='space-y-4 md:pl-3 text-xs text-gray-800'>
            <h5 className='font-bold'>
                SUPPORT
            </h5>
            <p>Our COVID-19 Response</p>
            <p>Help Centre</p>
            <p>Cancellation options</p>
            <p>Neighbourhood Support</p>
            <p>Trust & Safety</p>

            
        </div>
        
    </div>
  )
}

export default Footer