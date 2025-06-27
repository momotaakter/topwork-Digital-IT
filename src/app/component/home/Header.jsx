import React from 'react'
import SectionWrapper from '../common/SectionWrapper'

function Header() {
  return (

<div>
<section className="w-full bg-black text-white py-12">
  <h2 className="text-3xl text-center">এইটা পুরোপুরি Full Width Section</h2>
</section>




<section className="w-full bg-black text-white py-12 px-0">
  <p className="text-center">Left & Right একদম স্ক্রিনের সঙ্গে লাগানো</p>
</section>




<section className="left-0 right-0 bg-black text-white py-12 container">
  <h2 className="text-center text-3xl">Full width black section</h2>
</section>






</div>

  )
}

export default Header