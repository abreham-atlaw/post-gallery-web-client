import React, { useState } from 'react'

function DashBoardView() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
  

  return (
    <div className="relative min-h-screen bg-gray-100">
        <SideNavBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div className="flex flex-col w-full">
            <TopNavBar onMenuClick={toggleSidebar} />
            {/* The rest of your application goes here */}
        </div>
        {!isSidebarOpen && (
            <button onClick={toggleSidebar} className="text-white absolute top-0 left-0 m-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
        )}
        </div>
  )
}

export default DashBoardView



interface NavItem {
    name: string;
    isSelected: boolean;
  }
  
  const initialNavItems: NavItem[] = [
    { name: "Page 1", isSelected: false },
    { name: "Page 2", isSelected: false },
    { name: "Page 3", isSelected: false },
    { name: "Page 4", isSelected: false },
  ];
  
  interface SideNavBarProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const SideNavBar: React.FC<SideNavBarProps> = ({ isOpen, onClose }) => {
    const [navItems, setNavItems] = useState(initialNavItems);
  
    const selectNavItem = (index: number) => {
      setNavItems(navItems.map((item, i) => ({ ...item, isSelected: i === index })));
    };
  
    return (
      <nav className={`w-64 min-h-screen flex flex-col bg-gray-800 p-4 absolute transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-2 mb-5">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="logo.svg" alt="Logo" className="w-14 h-14" />
            <span className="text-2xl text-white font-semibold">Logo</span>
          </div>
          {/* Close button */}
          {isOpen && (
            <button onClick={onClose} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <div className="mb-4">
          {/* Nav Items */}
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => selectNavItem(index)}
              className={`flex w-full mb-2 px-4 py-2 rounded text-white ${item.isSelected ? 'bg-blue-500' : 'hover:bg-gray-600'}`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    );
  };
  

  interface TopNavBarProps {
    onMenuClick: () => void;
  }
  
  const TopNavBar: React.FC<TopNavBarProps> = ({ onMenuClick }) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <header className="flex justify-between items-center bg-gray-800 px-4 py-2 lg:pl-64 text-white">
        <div className="flex items-center space-x-4">
          {/* Menu Button */}
          <button onClick={onMenuClick} className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
  
          {/* Search Bar */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-64 px-3 py-2 rounded bg-gray-600 text-white"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center space-x-4">
          {/* Profile Avatar */}
          <img src="avatar.svg" alt="Avatar" className="w-10 h-10 rounded-full" />
        </div>
      </header>
    );
  };