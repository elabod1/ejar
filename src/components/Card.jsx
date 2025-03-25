import React from 'react'
import buildings4 from '../images/buildings4.png';
import buildings3 from '../images/buildings3.png';
import buildings2 from '../images/buildings2.png';
import buildings1 from '../images/buildings1.png';



const Card = () => {
  return (
    <div className="h-80 flex gap-10 pt-10 justify-center font-kufi">
        <div className="rounded-lg border border-gray-200 w-[200px] h-[180px] text-center ">
            <img src={buildings4} alt="" className="w-[34px] h-[34px] flex justify-self-center m-3" />
            <h2 className="font-semibold">
            معاينة متكاملة قبل الحجز
            </h2>
            <p>استكشف العقار قبل حجزه من خلال مشاهدة التفاصيل بتقنية ثلاثية الأبعاد 360°.</p>
        </div>
        <div className="rounded-lg border border-gray-200 w-[200px] h-[180px] text-center ">
            <img src={buildings3} alt="" className="w-[34px] h-[34px] flex justify-self-center m-3" />
            <h2 className="font-semibold">
            خيارات دفع مرنة تناسبك            </h2>
            <p>تضم مجموعتنا أفضل الخيارات لك حيث تختوي على خيارات عدة ومزايا
            متنوعة لك ولعائلتك</p>
        </div>
        <div className="rounded-lg border border-gray-200 w-[200px] h-[180px] text-center ">
            <img src={buildings2} alt="" className="w-[34px] h-[34px] flex justify-self-center m-3" />
            <h2 className="font-semibold">
            ابحث بسهولة عن العقارات           </h2>
            <p>يمكنك الوصول الى العقارات القريبة منك عبر البحث بأستخدام موقعك</p>
        </div>
        <div className="rounded-lg border border-gray-200 w-[200px] h-[180px] text-center ">
            <img src={buildings1} alt="" className="w-[34px] h-[34px] flex justify-self-center m-3" />
            <h2 className="font-semibold">
            تنوع يلبي احتياجاتك           </h2>
            <p>تضم مجموعتنا أفضل الخيارات لك حيث تختوي على خيارات عدة ومزايا
            متنوعة لك ولعائلتك
           </p>
        </div>
    </div>
  )
}

export default Card