import React, { useState } from 'react'
import { Link, Route, Router, useLocation } from 'react-router-dom';
import close from '@/assets/close.png'
import menu from '@/assets/menu.png'
import pg from '@/assets/PG.png'
import dashMenu from '@/assets/dashMenu.png'
import dashMenuDark from '@/assets/menuDark.png'
import dashAdd from '@/assets/dashAdd.png'
import dashOrder from '@/assets/dashOrder.png'
import logout from '@/assets/logout.png'
import dashGrid1 from '@/assets/dashGrid1.png'
import dashGrid2 from '@/assets/dashGrid2.png'
import dashGrid3 from '@/assets/dashGrid3.png'

function DashBoardView() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
  

  return (
    <div className="relative min-h-screen bg-gray-100">
      <App /> 

    </div>
  )
}

export default DashBoardView



type SidebarItemProps = {
  title: string;
  active: boolean;
  onClick: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ title, active, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex flex-row justify-start pl-4 items-center m-auto mt-4 h-10 bg-black rounded-md text-black font-medium  cursor-pointer ${active ? 'bg-black text-white' : 'bg-transparent'}`}
  >
    <img className='w-5 mr-2' src={title == "Dashboard" && active ? dashMenu : title == "Dashboard" && !active ? dashMenuDark : title == "Add" ? dashAdd : title == "Orders" ? dashOrder : menu} />
    {title}
  </div>
);

type SidebarProps = {
  activeItem: string;
  setActiveItem: (activeItem: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem, isOpen, setIsOpen }) => {
  const handleClick = (title: string) => {
    setActiveItem(title);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-[#F2F2F2] w-52 pt-16 p-4 px-8 absolute z-50 h-full">
      <button className='lg:hidden absolute right-6' onClick={() => setIsOpen(false)}><img className='w-4 h-4' src={close} /></button>
      <img src={pg} alt="logo" className="w-14 mb-20 mx-auto" />
      <SidebarItem 
        title="Dashboard" 
        active={activeItem === 'Page1'}
        onClick={() => handleClick('Page1')}
      />
      <SidebarItem 
        title="Add" 
        active={activeItem === 'Page2'}
        onClick={() => handleClick('Page2')}
      />
      <SidebarItem 
        title="Orders" 
        active={activeItem === 'Page3'}
        onClick={() => handleClick('Page3')}
      />
      <img className='w-32 absolute bottom-2' src={logout} />
    </div>
  );
};

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Page1');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <div className="h-screen flex">
      
      <Sidebar 
        activeItem={activeItem} 
        setActiveItem={setActiveItem} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
      />
      <div className="flex-grow bg-white">
        <button className="p-4" onClick={() => setIsSidebarOpen(true)}><img className='w-4' src={menu} /></button>
        {/* Your content here */}
        <div className='ml-64 w-1/2'>
          <SearchBar />
          <p className='text-lg mt-4 mb-10 font-semibold'>In the last 30 days,</p>
          <div className='w-full flex flex-row space-x-2'>
            <div className="w-full px-2.5 flex items-end rounded-[4px] h-16 text-white bg-[url('./assets/dashGridBg.png')] bg-no-repeat bg-cover">
              <div className='mb-1'>
                <p className='text-2xl font-semibold'>30</p>
                <p className='text-xs'>Total art work sold</p>
              </div>
            </div>
            <div className="w-full px-2.5 flex items-end rounded-[4px] h-16 text-white bg-[url('./assets/dashGridBg.png')] bg-no-repeat bg-cover">
              <div className='mb-1'>
                <p className='text-2xl font-semibold'>51</p>
                <p className='text-xs'>Artwork left to sell</p>
              </div>
            </div>
            <div className="w-full px-2.5 flex items-end rounded-[4px] h-16 text-white bg-[url('./assets/dashGridBg.png')] bg-no-repeat bg-cover">
              <div className='mb-1'>
                <p className='text-2xl font-semibold'>$400,000</p>
                <p className='text-xs'>Revenue generated</p>
              </div>
            </div>       
          </div>

          <div className='w-full flex flex-row space-x-2 mt-5'>
            <div className='w-full flex flex-row justify-start items-center h-16 px-3 text-base font-medium border-[3px] rounded-md border-[#D6D6D6]'>
              <img className='w-8 mr-3' src={dashGrid1} />
              <p>Add artist</p>
            </div>
            <div className='w-full flex flex-row justify-start items-center h-16 px-3 text-base font-medium border-[3px] rounded-md border-[#D6D6D6]'>
              <img className='w-8 mr-3' src={dashGrid2} />
              <p>Add art</p>
            </div>
            <div className='w-full flex flex-row justify-start items-center h-16 px-3 text-base font-medium border-[3px] rounded-md border-[#D6D6D6]'>
              <img className='w-8 mr-3' src={dashGrid3} />
              <p>Add exhibition</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};



const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can do something with the searchTerm, for example, send it to an API.
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative">
      <span className="absolute top-0 left-0 m-2 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search artists and works"
        className="pl-10 pr-4 py-2.5 rounded-md w-full bg-[#FAFAFA] border border-[#E6E6E6] focus:outline-none focus:border-blue-500"
      />
    </form>
  );
};