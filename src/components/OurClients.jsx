import React from 'react'
import perimage1 from '../images/perimage1.png';
import perimage2 from '../images/perimage2.png';
import perimage3 from '../images/perimage3.png';
import perimage4 from '../images/perimage4.png';
import perimage5 from '../images/perimage5.png';
import arrowleft from '../images/arrow-left.png';
import arrowright from '../images/arrow-right.png';
import magicstar from '../images/magic-star.png';


const OurClients = () => {
  return (
    <div className="mt-20 mb-40 font-kufi">
        <h1 className="text-center text-2xl font-bold text-green-600 ">رأي عملائنا</h1>
        <div className="flex justify-center my-10 items-center gap-20">
            <img src={arrowleft} alt="" className="w-[30px] h-[30px]" />
            <img src={perimage1} alt="" className="w-[73px] h-[73px]" />
            <img src={perimage2} alt="" className="w-[85px] h-[85px]" />
            <img src={perimage3} alt="" className="w-[120px] h-[120px]"/>
            <img src={perimage4} alt="" className="w-[85px] h-[85px]"/>
            <img src={perimage5} alt="" className="w-[73px] h-[73px]" />
            <img src={arrowright} alt="" className="w-[30px] h-[30px]" />
        </div>
        <div className="">
            <h1 className="text-center text-2xl font-bold">uiux احمد - مصمم</h1>
            <div className="flex justify-center my-2">
            <img src={magicstar} alt="" className="w-[25px] h-[25px]" />
            <img src={magicstar} alt="" className="w-[25px] h-[25px]" />
            <img src={magicstar} alt="" className="w-[25px] h-[25px]" />
            <img src={magicstar} alt="" className="w-[25px] h-[25px]" />
            <img src={magicstar} alt="" className="w-[25px] h-[25px]" />

            </div >
            <div className="text-center place-items-center">
            <p className="w-[400px] h-[100px]  ">بحكم طبيعة عملي التي تتطلب التنقل المستمر، كنت أواجه صعوبة في العثور على السكن المناسب في كل مرة أنتقل فيها، خاصة عبر المواقع المختلفة. لكن بعد استخدامي لموقع إيجار، تمكنت من إيجاد ما أبحث عنه بسهولة وراحة، مما وفر علي الكثير من الجهد والوقت.</p>
            </div>
        </div>

    </div>
  )
}

export default OurClients