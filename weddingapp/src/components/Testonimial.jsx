import React, { useRef } from 'react'
import Slider from "react-slick";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import coupleImg from '../assets/coupleImg.jpg'
import Btntestinomial from './Btntestinomial';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            NEXT
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            BACK
        </div>
    );
}




const Testonimial = () => {
    const slider = useRef(null)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        // autoplay: true,
        // autoplaySpeed: 3000,
        // cssEase: "linear",
    };
    return (
        <div className='bg-[#585B56] px-[10px] w-full lg:py-12'>
            <div className=" px-[5px] xl:px-[50px]  w-full   ">
                <Slider ref={slider} {...settings} className='xl:px-14' >
                    {
                        data.map((d) => {
                            return (
                                <div className=" w-full flex flex-col py-2  items-center justify-center space-y-[20px]  ">
                                    <div className="flex flex-col items-center justify-center ">
                                        <h1 className='literata text-[15px] xs:text-[20px] sm:text-[25px] xl:text-[28px] 2xl:text-[30px] 2xl:tracking-normal font-extrabold tracking-tighter text-white   '>Testimonials</h1>
                                        <h1 className='text-[#B8C1B2] text-[10px] xs:text-[13px] sm:text-[17px] xl:text-[16px]'>from happy, delighted couples</h1>
                                    </div>
                                    <div className="flex flex-row items-start justify-center  text-center lg:gap-[40px] xl:gap-8">
                                        <div className=" mt-[80px]   flex flex-col justify-center items-center pr-2 xl:pr-10"
                                            onClick={() => slider?.current?.slickPrev()}>
                                            <Btntestinomial ><IoIosArrowRoundBack size={25} className=''  /></Btntestinomial>
                                        </div>

                                        <RiDoubleQuotesL className='text-[#464D43] pb-[70px]' size={100} />
                                        <div className=" text-[10px] xs:text-[14px] sm:text-[16px] xl:text-[20px] 2xl:text-[22px] text-white roboto tracking-wide flex flex-col gap-[45px] ">
                                            <h1 >Lorem ipsum sit ac suspendisse adipiscing eget aliquam fermentum rutrum tempus aenean. Suspendisse nascetur vulputate viverra varius eu ullamcorper. Cursus pellentesque erat eget eget ullamcorper id in. Nullam scelerisque varius viverra augue quis. Laoreet eget curabitur vitae sed at facilisis purus convallis imperdiet.</h1>
                                            <h1>Penatibus auctor diam vivamus amet a vehicula ultrices. Volutpat arcu in amet praesent nisl mattis etiam cras orci. Ut urna elementum sapien orci lacus!</h1>
                                        </div>
                                        <RiDoubleQuotesR className='text-[#464D43] pb-[70px]' size={100} />
                                        <div className=" mt-[80px]   flex flex-col justify-center items-center pr-2 xl:pr-10" onClick={() => slider?.current?.slickNext()} >
                                            <Btntestinomial ><IoIosArrowRoundForward size={25} className='' /></Btntestinomial>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-3 ">
                                        <div className="rounded-full">
                                            <img src={coupleImg} alt="couple Image" className='w-[60px] h-[60px] rounded-full bg-cover' />
                                        </div>
                                        <h1 className='font-medium text-[14px] tracking-wide text-white'>{d.men} & {d.lady}</h1>
                                    </div>
                                </div>
                            )

                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

const data = [
    {
        men: "joy",
        lady: "jordan"

    },
    {
        men: "james",
        lady: "lily"

    }
]

export default Testonimial