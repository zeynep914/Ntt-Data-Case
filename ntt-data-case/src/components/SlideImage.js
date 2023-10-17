import React,{useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

export default function SlideImage() {
    const slides = [
        {
          url: "https://nttdata-solutions.com/wp-content/usermedia/Image-picture-Teamwork-20220420-GLO-EN.jpg",
        },
        {
          url: "https://nttdata-solutions.com/wp-content/usermedia/ITE102101_Website_Header_HR_Interaktion_Arbeitsplatz_1530x750-1.jpg",
        },
        {
          url: "https://nttdata-solutions.com/wp-content/usermedia/Kariyer-sayfasi-OneTalent-930x456.png",
        },
        {
          url: "https://nttdata-solutions.com/wp-content/usermedia/HR_working_situation.jpg",
        },
        {
          url: "https://nttdata-solutions.com/wp-content/usermedia/Header_LoB_Information_Technology_1530x750.jpg",
        },
      ];
    
      const [currentIndex, SetCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        SetCurrentIndex(newIndex);
      }
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        SetCurrentIndex(newIndex);
      }
    
      const goToSlide = (slideIndex) => {
        SetCurrentIndex(slideIndex);
      }
  return (
    <div className='max-w-[2000px] h-[800px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[%50] -translate-x-0 translate-y-[-750%] lef-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
        {/* Right Arrow */}
        <div className='idden group-hover:block absolute top-[%50] -translate-x-0 translate-y-[-750%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) =>(
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
  )
}
