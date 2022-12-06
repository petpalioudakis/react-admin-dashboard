import React, { useEffect } from 'react';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor = null }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" style={{ backgroundColor: dotColor }} />{icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu((prev) => !prev);
        }}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        />
      </div>
      <div className="flex">
        <NavButton
          title="Chat"
          customFunc={() => handleClick('chat')}
          color="blue"
          icon={<BsChatLeft />}
          dotColor="#03C9D7"
        />
      </div>
      <div className="flex">
        <NavButton
          title="Notifications"
          customFunc={() => handleClick('notification')}
          color="blue"
          icon={<RiNotification3Line />}
          dotColor="#03C9D7"
        />
      </div>
      <TooltipComponent content="Profile" position="BottomCenter">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
          <img src={avatar} className="rounded-full w-8 h-8" alt="" />
          <p>
            <span className="text-gray-400 text-14">Hi, </span> {' '}
            <span className="text-gray-400 font-bold ml-1 text-14">Petros</span>
          </p>
          <MdKeyboardArrowDown />
        </div>
      </TooltipComponent>
      {isClicked.cart && <Cart /> }
      {isClicked.chat && <Chat /> }
      {isClicked.notification && <Notification /> }
      {isClicked.userProfile && <UserProfile /> }

    </div>
  );
};

export default Navbar;
