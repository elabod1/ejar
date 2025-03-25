import React from 'react'

const AboutUs = () => {
  return (
    <div className="flex justify-between justify-around font-kufi">

        <div className="">
            <img src="src\images\hand image.png" alt="" className="w-[420px] h-[350px]" />
        </div>
        <div className="grid row-span-2">
            <div className="text-right ">
                <h1 className="text-2xl font-bold text-green-600">من نحن</h1>
                <p className="font-normal text-lg">نحن في إيجار نهدف إلى تسهيل عملية البحث <br /> عن العقارات وتأجيرها بطريقة ذكية وسلسة. نوفر<br /> منصة متكاملة تجمع بين المستأجرين والمالكين، </p>

            </div>
            <div className="flex gap-9">
                <div className="rounded-lg border border-gray-200 w-[200px] h-[200px] text-right">
                <img src="src\images\buildings1.png" alt="" className="w-[34px] h-[34px] flex justify-self-end m-3" />
                <div className="px-2">
                <h2 className="text-xl font-bold ">
                   الرسالة 
                </h2>
                <p>أن نكون المنصة الرائدة في تأجير العقارات، بتجربة رقمية متطورة توفر الراحة والموثوقية.</p>
                </div>
                </div>
                <div className="rounded-lg border border-gray-200 w-[200px] h-[200px] text-right">
                <img src="src\images\buildings1.png" alt="" className="w-[34px] h-[34px] flex justify-self-end m-3" />
                <div className="px-2">
                <h2 className="text-xl font-bold ">
                    الرؤية
                </h2>
                <p>أن نكون المنصة الرائدة في تأجير العقارات، بتجربة رقمية متطورة توفر الراحة والموثوقية.</p>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutUs