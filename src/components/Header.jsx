import React from 'react'
import background from '../images/image.png';

const Header = () => {
  return (
    <div className=" h-[700px] font-kufi" style={{ background: `url(${background})` }}>
        <div className='relative text-center pt-60'>
        <h1 className="text-4xl	text-white ">
        حقق حلمك بأمتلاك منزل رائع
        </h1>
        <h1 className="text-4xl text-white py-5	">
        من خلال موقع أيجار!!
        </h1>
        <p className="text-white">استأجر منزلك المثالي بأسعار تنافسية وبخطوات سهلة وسريعة! </p>
        <button className="rounded-lg border-solid bg-green-700 w-32 h-10 text-white mt-5">اطلب الخدمة</button>

        </div>
    </div>
  )
}

export default Header