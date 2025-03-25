import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-around my-10 font-kufi">
      <div className="text-end">
        <h1 className="text-xl">الاشتراك في القائمة البريدية</h1>
        <div className='flex gap-4 my-7 '>
            <button className="rounded-lg border-solid bg-green-700 w-24 h-10 text-white">انضم الان</button>
            <input type="text" placeholder="  " className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none rounded-lg border border-gray-200 w-56 h-10"/>  
       </div>
       <div className="flex justify-end gap-4">
        <img src="src\images\face.png" alt="" className="w-[12px] h-[24px]" />
        <img src="src\images\insta.png" alt="" className="w-[24px] h-[24px]"/>
        <img src="src\images\link.png" alt="" className="w-[24px] h-[24px]"/>
       </div>
      </div>
      <div>
        <h1 className="font-bold text-xl">
        منصتنا
        </h1>
        <ul className="mt-4" >
         <li>الرئيسية</li>
         <li className="my-2">الخدمات</li>
         <li>من نحن</li>
         <li className="my-2">اتصل بنا</li>
       </ul>
      </div>
      <div>
      <div className='flex justify-end mb-4'>
        <div className='grid grid-cols-1 grid-rows-2'>
                <h3>ايجار</h3>
                <h3>EJAR</h3>
            </div>
            <img src="src\images\Group.png" alt="" className="w-9 h-9" />
           </div>
        <div>
        <div className="flex gap-2 justify-end">
          <p>ادلب - شارع الضبيط 22</p>
          <img src="src\images\location.png" alt="" className="w-[32px] h-[32px]" />
        </div>
        <div className="flex my-4 gap-2 justify-end">
          <p> user2002@gmail.com</p>
          <img src="src\images\sms-notification.png" alt="" className="w-[32px] h-[32px]" />
        </div>
        <div className="flex gap-2 justify-end">
          <p> 009644873756811</p>
          <img src="src\images\call-calling.png" alt="" className="w-[32px] h-[32px]"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer