import NavBar from "@/lib/components/navBar/navBar";
import React from "react";
import { Link } from "react-router-dom";
import exhibition from '@/assets/mikiyas/Portrait.jpg'
import share from '@/assets/share.png'
import TheFooter from "@/lib/components/footer/footer";
import collection from "@/assets/collection.png"
import face from "@/assets/Facebook.png"
import youtube from "@/assets/YouTube.png"
import insta from '@/assets/insta.png'
import twitter from '@/assets/twitter.png'
import Artwork from "@/Models/Core/artwork";
import Arexhibition from '@/assets/ArExhibition.png'
import { list } from "firebase/storage";


export default function ArtistDetailView() {
  return (
    <div>
        <div className='lg:pr-10 lg:pl-20 '>
            <NavBar isDark={true} />
        </div>
        <div className="max-w-[1280px] m-auto px-6 lg:p-4 lg:px-16">
            <p className="text-4xl font-light lg:text-6xl my-6 lg:my-10 ">Behind the canvas</p>
            <div className="flex flex-col max-w-[1000px] m-auto lg:flex-row items-center justify-between">
                <Link
                    to={`/`}
                    className={`relative  flex flex-col items-center justify-end text-white shadow-sm text-center  bg-no-repeat bg-contain object-cover`}
                    //   style={{ backgroundImage: `url(${artworks[activeIndex].images[0]})`, height: `${calcHeight(artworks[activeIndex].dimension)*(window.innerWidth * 0.75)}px`}}
                    
                    >
                        <div className="h-min max-h-min lg:h-80 lg:max-h-[500px]">
                            <img src={exhibition} className="h-full rounded-3xl"/>
                        </div>


                        <div className="absolute w-full h-full flex flex-col pl-8 items-start justify-end pb-8 lg:pb-6 pt-6 rounded-3xl" style={{ 
                            background: `linear-gradient(360deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%)`
                            
                        }}>
                        
                            <p className="text-xl lg:text-3xl ">Mikiyas Sintayehu</p>
                            <p className="text-xl  lg:text-2xl leading-4">Ethiopian</p>
                            
                        </div>
                    </Link>

                    <div className="hidden lg:inline w-[2px] h-60 bg-[#E9E9E9]"></div>

                    <div className="flex flex-col items-center mt-7 lg:mt-0 w-full lg:w-5/12 px-4">
                        <p className="text-3xl">Mikiyas Sintayehu</p>
                        <p className="text-xl mt-2 mb-4 lg:mt-5 lg:mb-10 text-center">“My work is about capturing moments of everyday life.”</p>
                        <div className="w-3/2 lg:w-5/12 flex flex-row items-center justify-between text-2xl font-medium text-center space-x-3">
                            <div><p>1</p> <p>collection</p></div>
                            <div className="w-[2px] h-16 bg-[#E9E9E9]"></div>
                            <div><p>5</p> <p>InStock</p></div>
                        </div>
                        <div className="w-11/12 max-w-sm lg:w-9/12 flex flex-row items-center justify-between mt-10">
                            <div className={` border-black flex flex-row justify-center items-center px-4 py-5 h-10 border-2 rounded-md `}>
                                <Link to="/auth/login" className="text-xl mr-3">Share</Link>
                                <img src={share} className="w-4 object-contain"/>
                            </div>
                            <div>
                                <p className="text-lg">Find me at:</p>
                                <div className='flex flex-row items-center space-x-3 '>
                                    <img className='w-5 h-4 object-contain' src={face} />
                                    <img className='w-5 h-5 object-contain' src={twitter} />
                                    <img className='w-5 h-5 object-contain' src={insta} />
                                    <img className='w-6 h-6 object-contain' src={youtube} />
                                </div>
                            </div>
                        </div>  
                    </div>

            </div>

            <p className="text-4xl font-light lg:text-6xl mt-8 mb-4 lg:mt-16 lg:mb-10 ">Available arts</p>
            <Grid />

            <p className="text-4xl font-light lg:text-6xl mt-8 mb-4 lg:mt-16 lg:mb-10 font-Mulish">Biography</p>
            <p className="text-[3.45 rem] font-extralight font-Mulish mb-8 lg:mb-4">I use acrylic paint combined with marker drawings. These series depicts the scenes from
my studio in everyday life routine, which is a continuous of the series I used to do before, which
shows everyday life in Addis Ababa, outdoor scenes of fleeting moments. My paintings drive from
my quick sketches. I am interested in motion and stillness, I'm intrigued by the thoughts, feelings
and emotions of the subjects. It is a means through which (portraits and figures) I question my own
socio-cultural and political beliefs as well as reflect on humanity's existence at large.  </p>
            <ul className="text-[3.45 rem] font-extralight font-Mulish pl-8 lg:pl-20 list-disc mb-8 lg:mb-16">
                <li>Mikiyas Sintayehu was born in 1998 in Addis Ababa, Ethiopia. He holds a Diploma
in Fine Arts from Entoto Polytechnic College (2018) and degree from Ale School
of Fine Arts and Design in Interdisciplinary Visual Arts (2023) .</li>
                <br />
                <li>Mikiyas has so far participated in one solo exhibition Titled Reflection in 2022,
December at The Atmosphere Gallery Addis Ababa, and several group exhibitions
including in “cube”, Brazil in Addis Cultural Space, 2023 Ethiopia. Impression of
Time, Alliance_ethio-française 2023, Faces, Hyatt Regency, Ethiopia, 2021; The
Tales of Rodari, Addis Ababa University, Ale School of Fine Arts and Design,
2020; Class of 2018 Graduation Exhibition, Entoto Polytechnic College, 2018;
Yetesfa Qelemoch, Ethiopian National Theatre Gallery, 2011, 2008 and 2007.</li>
            </ul>
            
            <Link to={`/`} >
                <div className="relative w-full text-white mb-8 lg:mb-16">
                    <img className='w-full h-52 lg:h-min shadow-sm object-cover rounded-2xl lg:object-contain' src={collection} />
                    <div className="absolute top-1  text-start px-5 lg:pl-16 lg:pr-28 flex flex-col items-start justify-center h-full">
                        <p className="text-3xl  lg:text-5xl lg:mb-4">Collections</p>
                        <p className="text-sm  lg:text-2xl leading-5 lg:leading-9 ">It is a painting that depicts the artist's own childhood home. The painting is dominated by warm colors, which create a sense of nostalgia and comfort. The artist's use of light and shadow suggests the passage of time and the artist's memories of the home.</p>
                    </div>
                </div>
            </Link>

            <Link to={`/exhibitions`} >
                <div className="relative w-full text-white lg:mb-16">
                    <img className='w-full h-52 lg:h-min shadow-sm object-cover rounded-2xl lg:object-contain' src={Arexhibition} />
                    <div className="absolute top-1  text-start px-5 lg:pl-16 lg:pr-28 flex flex-col items-start justify-center h-full">
                        <p className="text-3xl  lg:text-5xl lg:mb-4">Exhibition</p>
                        <p className="text-sm  lg:text-2xl leading-5 lg:leading-9 ">It is a painting that depicts the artist's own childhood home. The painting is dominated by warm colors, which create a sense of nostalgia and comfort. The artist's use of light and shadow suggests the passage of time and the artist's memories of the home.</p>
                    </div>
                </div>
            </Link>

        </div>
        <TheFooter />
    </div>
  )
}



interface GridItemProps {
    imageUrl: string;
    title: string;
    subtitle: string;
	link: string;
}

const GridItem: React.FC<GridItemProps> = ({ imageUrl, title, subtitle, link }) => (
    <div className="flex flex-col ">
        <div className="w-full h-full flex items-start justify-center shadow-md">
            <Link 
                to={link}
                className="w-full h-96 lg:h-72  bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            >
            </Link>
        </div>
        <div className="w-full mt-3" >
            <div className="text-black text-start">
                <h2 className="text-xl leading-6 text-[#616161]"> {title} </h2>
                <p className="text-xl leading-6 mt-1">January 18 - February 25, 2021</p>
            </div>
        </div>

    </div>
);



const Grid: React.FC = () => (
    <div className="w-full px-2 lg:px-0 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-4 lg:gap-6 gap-4 gap-y-6 lg:gap-y-14">
        {thedata.map((item, index) => (
            <GridItem key={index} imageUrl={item.image} title={item.name} subtitle={item.date} link={`/`}/>
        ))}
    </div>
);

const thedata = [
    {
        image: '/src/assets/mikiyas/art1.jpg',
        name: 'Mikiyas Sintayehu, Reflection',
        date: 'asdf'
    },
    {
        image: '/src/assets/mikiyas/art2.jpg',
        name: 'Mikiyas Sintayehu, Reflection',
        date: 'asdf'
    },
    {
        image: '/src/assets/mikiyas/art3.jpg',
        name: 'Mikiyas Sintayehu, Reflection',
        date: 'asdf'
    },
    {
        image: '/src/assets/mikiyas/art4.webp',
        name: 'Mikiyas Sintayehu, Reflection',
        date: 'asdf'
    },
    {
        image: '/src/assets/mikiyas/art5.jpg',
        name: 'Mikiyas Sintayehu, Reflection',
        date: 'asdf'
    },
]