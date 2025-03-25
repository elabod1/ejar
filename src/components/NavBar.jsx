import React from 'react'


const NavBar = () => {
  return (
    
    <div className='flex justify-around w-[696] h-14 my-6 font-kufi '>
        <div className='flex gap-4 '>
            <button className="rounded-lg border-solid bg-green-700 w-32 h-10 text-white">تواصل معنا</button>
            <input
                  type="text"
                  placeholder="بحث عن عقارك"
     className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none rounded-lg border border-gray-200 w-56 h-10"  />  
    
     </div>
     <div className=' '>
<button className="mx-4">من نحن</button>

<button className="mx-4">الخدمات</button>
<button className="mx-4">الرئيسية</button>

</div>     
        <div className='flex'>
        <div className='grid grid-cols-1 grid-rows-2'>
                <h3>ايجار</h3>
                <h3>EJAR</h3>
            </div>
            <img src="src\images\Group.png" alt="" className="w-9 h-9" />
           
        </div>
    </div>
  )
}

export default NavBar