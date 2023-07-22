import TheFooter from '@/lib/components/footer/footer';
import NavBar from '@/lib/components/navBar/navBar';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ArtistListView extends Component {
  render() {
    return (
        <div>
            <div className='lg:pr-10 lg:pl-20 '>
                <NavBar isDark={true} />
            </div>
            <div className="max-w-[1280px] m-auto px-6 lg:p-4 lg:px-16">
                <p className='text-5xl my-10'>Artist</p>
                <Grid />
            </div>
            <TheFooter />
        </div>
    )
  }
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
        <div className="w-full mt-5" >
            <div className="text-black text-start">
                <h2 className="text-2xl leading-6 text-[#000000]"> {title} </h2>
                
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
        image: '/src/assets/mikiyas/Portrait.jpg',
        name: 'Mikiyas Sintayehu',
        date: 'asdf'
    },
    {
        image: '/src/assets/ribka/Ribka.jpg',
        name: 'Ribka Wendmagegn',
        date: 'asdf'
    },

]