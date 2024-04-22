// import React from 'react'
// import galleryImg1 from '../assets/gallery1.png'
// import galleryImg2 from '../assets/gallery2.png'
// import galleryImg3 from '../assets/gallery3.png'
// import galleryImg4 from '../assets/gallery4.png'
// import galleryImg5 from '../assets/gallery5.png'
// import galleryImg6 from '../assets/gallery6.png'
// import { FaLongArrowAltRight } from "react-icons/fa";
// import Button from './Button'

// const Gallery = () => {
//   return (
//     <div  className='flex flex-col items-center justify-center gap-5 sm:gap-14' >
//       <div className="px-10">
//         <h1 className='cinzel text-[20px] text-[#576250] text-center xs:text-[25px] sm:text-[30px] ' >Our Galley</h1>
//         <h1 className=' scope-one-regular text-center text-[15px]' >Welcome to our wedding gallery, where every moment captured tells the story of our love, cherished forever in timeless elegance and beauty</h1>
//       </div>

//       <div className="">
//         <div className="flex flex-col gap-5  ">
//           <div className="flex flex-row gap-2 sm:justify-center sm:items-center sm:gap-3 ">
//             {/* First Row */}
//             <div className="col-span- ">
//               <img src={galleryImg1} alt="Photo 1" className="w-[120px] h-[80px] object-cover rounded-lg  xs:h-[100px] sm:h-[150px] sm:w-[195px]" />
//             </div>
//             <div className="col-span-1">
//               <img src={galleryImg2} alt="Photo 1" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[190px] xs:h-[100px] sm:h-[150px] sm:w-[290px]" />
//             </div>
//             <div className="col-span-1">
//               <img src={galleryImg3} alt="Photo 3" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[130px]  xs:h-[100px] sm:h-[150px] sm:w-[195px] " />
//             </div>
//           </div>


//           <div className="flex flex-row gap-2 sm:gap-3">
//             {/* Second Row */}
//             <div className="col-span-1">
//               <img src={galleryImg4} alt="Photo 4" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[170px] xs:h-[100px] sm:h-[150px] sm:w-[280px]" />
//             </div>
//             <div className="col-span-1">
//               <img src={galleryImg5} alt="Photo 5" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[120px] xs:h-[100px] sm:h-[150px] sm:w-[170px] " />
//             </div>
//             <div className="col-span-1">
//               <img src={galleryImg6} alt="Photo 6" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[150px] xs:h-[100px] sm:h-[150px] sm:w-[240px] " />
//             </div>
//           </div>
//         </div>

//       </div>

//       <div className="">
//       <Button className=" w-[100px]  py-2 text-[13px] xl:w-[186px] 2xl:w-[160px]  md:w-[125px] lg:w-[156px] xl:h-[50px] 2xl:h-[50px] lg:h-[49px] md:h-[42px] bg-[#576250] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px] rounded-[5px] text-white scope-one-regular tracking-wide text-center flex flex-row gap-2 items-center justify-center" >View More <span>  <FaLongArrowAltRight /></span></Button>

//       </div>
//     </div >
//   )
// }

// export default Gallery






import React from 'react';
import styled, { keyframes, css } from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from './Button';
import galleryImg1 from '../assets/gallery1.png';
import galleryImg2 from '../assets/gallery2.png';
import galleryImg3 from '../assets/gallery3.png';
import galleryImg4 from '../assets/gallery4.png';
import galleryImg5 from '../assets/gallery5.png';
import galleryImg6 from '../assets/gallery6.png';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const row1 = [
    galleryImg1,
    galleryImg2,
    galleryImg3,

  ];

  const row2 = [
    galleryImg4,
    galleryImg5,
    galleryImg6
  ];
  return (
    // <div className='flex flex-col items-center justify-center gap-5 sm:gap-14 overflow-x-hidden'>
    //   <div className="px-10">
    //     <h1 className='cinzel text-[20px] text-[#576250] text-center xs:text-[25px] sm:text-[30px]'>Our Gallery</h1>
    //     <h1 className='scope-one-regular text-center text-[15px]'>Welcome to our wedding gallery, where every moment captured tells the story of our love, cherished forever in timeless elegance and beauty</h1>
    //   </div>

    //   <div className="   ">
    //     <div className="flex flex-row gap-5 overflow-hidden w-[800px] bg-black">        
    //     <div className="flex flex-row gap-2 sm:justify-center sm:items-center sm:gap-3 animate-gallery-left shrink-0">
    //       {/* First Row */}
    //       {[galleryImg1, galleryImg2, galleryImg3].map((img, index) => (
    //         <div key={index} className="col-span-1">
    //           <img src={img} alt={`Photo ${index + 1}`} className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[190px] xs:h-[100px] sm:h-[150px] sm:w-[290px]" />
    //         </div>
    //       ))}
    //     </div>
    //     <div className="flex flex-row gap-2 sm:justify-center sm:items-center sm:gap-3 animate-gallery-left">
    //       {/* First Row */}
    //       {[galleryImg1, galleryImg2, galleryImg3].map((img, index) => (
    //         <div key={index} className="col-span-1">
    //           <img src={img} alt={`Photo ${index + 1}`} className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[190px] xs:h-[100px] sm:h-[150px] sm:w-[290px]" />
    //         </div>
    //       ))}
    //     </div>
    //     </div>


    //     <div className="flex flex-row gap-2 sm:gap-3 animate-gallery-right">
    //       {/* Second Row */}
    //       {[galleryImg4, galleryImg5, galleryImg6].map((img, index) => (
    //         <div key={index} className="col-span-1">
    //           <img src={img} alt={`Photo ${index + 4}`} className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[170px] xs:h-[100px] sm:h-[150px] sm:w-[280px]" />
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="">
    //     <Button className="w-[100px] py-2 text-[13px] xl:w-[186px] 2xl:w-[160px] md:w-[125px] lg:w-[156px] xl:h-[50px] 2xl:h-[50px] lg:h-[49px] md:h-[42px] bg-[#576250] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px] rounded-[5px] text-white scope-one-regular tracking-wide text-center flex flex-row gap-2 items-center justify-center">View More <span><FaLongArrowAltRight /></span></Button>
    //   </div>
    // </div>

    <AppContainer className='py-[20px] ' >
      <Wrapper className='flex flex-col gap-[30px]  w-full md:gap-[45px] md:w-[1000px] xl:w-[1350px] ' >
        <div className="px-10 flex flex-col items-center justify-center md:px-[20px] ">
          <h1 className='cinzel text-[32px] text-[#576250] text-center xs:text-[25px] sm:text-[30px] lg:text-[35px]'>Our Gallery</h1>
          <h1 className='scope-one-regular text-center text-[11px] xs:text-[12px] sm:text-[14px] md:text-[13px] md:pl-[100px] lg:text-[15px] lg:leading-[25px] '>Welcome to our wedding gallery, where every moment captured tells the story of our love, cherished forever in timeless elegance and beauty</h1>
        </div>
        <Marquee className='flex gap-[15px] md:gap-[25px]' >
          <MarqueeGroup className='flex gap-[15px] md:gap-[25px]'>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup className='flex gap-[15px] md:gap-[25px]' >
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee className='flex gap-[15px]  md:gap-[25px] ' >
          <MarqueeGroup2 className='flex gap-[15px] md:gap-[25px]' >
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2 className='flex gap-[15px] md:gap-[25px]' >
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
       
      </Wrapper>
    </AppContainer>

  );
}

export default Gallery;
const AppContainer = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  /* width: 100%; */
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  /* width: 1200px; */
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  
  margin: 0; /* Remove margin */
  padding: 0; /* Remove padding */
  
  /* width: clamp(10rem, 1rem + 40vmin, 30rem); */
  /* padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10); */
`;

// const Image = styled.img`
//   object-fit: contain;
//   width: 100%;
//   height: 100%;
//   /* border: 1px solid black; */
//   border-radius: 0.5rem;
//   aspect-ratio: 16/9;
//   /* padding: 5px 20px; */
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// `;

const Image = styled.img`
  /* object-fit: cover; */
  width: 120px; 
  height: 80px;
  margin-left: 5px;
  margin-right : 5px;
  
  border-radius: 0.5rem;
  /* aspect-ratio: 16/9; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;



  @media (min-width: 480px) {
    width: 300px; 
    height: 120px;
  }
  @media (min-width: 640px) {
    width: 200px; 
    height: 120px;
  }

  @media (min-width: 768px) {
    width: 300px; 
    height: 150px;    
  }

  @media (min-width: 1024px) {
    width: 4cqmin;
    height: 170px;
  }

  @media (min-width: 1280px) {
    width: 450px;
    height: 250px 
  }
`;
