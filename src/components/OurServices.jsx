import React from 'react'

const OurServices = () => {
  return (
    <div className="mt-10 font-kufi">
        <h1 className="text-center text-2xl font-bold text-green-600">خدماتنا</h1>
        <div className="flex  justify-around mt-5">
        <div>
            <div className="flex justify-between w-[290px] h-[80px] mt-10">
                
                <div className="text-end mr-4">
                    <h1 className="text-xl font-bold text-green-600" > تأجير شقق</h1>
                    <p> استمتع بالرفاهية والخصوصية بأفضل المواقع والتجهيزات</p>
                </div>
                <img src="src\images\house.png" alt="" className="w-[25px] h-[25px]" />
            </div>
            <div className="flex justify-between w-[290px] h-[80px] mt-10">
                
                <div className="text-end  mr-4">
                    <h1 className="text-xl font-bold text-green-600">تأجير فلل</h1>
                    <p> مساحات مكتبية مجهزة مرنة ودعم إداري متكامل.</p>
                </div>
                <img src="src\images\bank.png" alt="" className="w-[25px] h-[25px]" />
            </div>
            <div className="flex justify-between w-[290px] h-[80px] mt-10">
                
                <div className="text-end  mr-4">
                   <h1 className="text-xl font-bold text-green-600" > تأجير مكاتب</h1>
                   <p>  خدمات استشارية لمساعدتك سواء كنت تبحث عن استثمار، بيع، أو شراء عقار مناسب</p>
                </div>
                <img src="src\images\building-4.png" alt="" className="w-[25px] h-[25px]" />
            </div>
            <div className="flex justify-between w-[290px] h-[80px] mt-10">
                
                <div className="text-end  mr-4">
                    <h1 className="text-xl font-bold text-green-600" > استشارات قانونية</h1>
                    <p> نوفر شققًا سكنية بمختلف المساحات والمواقع،مع عقود مرنة وأسعار تنافسية</p>
                </div>
                <img src="src\images\user.png" alt="" className="w-[25px] h-[25px]" />
            </div>
        
         </div>
         <div className="flex justify-center items-center ">
         <div className="relative w-[300px] h-[400px]">
         <img src="src\images\image1.png" className="absolute top-0 left-[100px] w-[250px] h-[180px] rounded-lg shadow-lg" alt="صورة 1"/>
        
         <img src="src\images\image2.png" className="absolute top-[60px] left-[-30px] w-[250px] h-[180px] rounded-lg shadow-lg" alt="صورة 2"/>
        
         <img src="src\images\image3.png" className="absolute top-[220px] left-[100px] w-[250px] h-[180px] rounded-lg shadow-lg" alt="صورة 3"/>
        
         <img src="src\images\image4.png" className="absolute top-[300px] left-[-30px] w-[250px] h-[180px] rounded-lg shadow-lg" alt="صورة 4"/>
         </div>
         </div>
        </div>
        <div className="justify-self-center mt-32">
        <button className="rounded-lg border-solid bg-green-700 w-32 h-10 text-white  ">اطلب الخدمة</button>

        </div>


    </div>
  )
}

export default OurServices