import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';

const App = () => {
  const activemenu = true;

  return (

    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">

          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  background: 'blue',
                  borderRadius: '50%',
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activemenu ? <div className="w-72 fixed sidebar dark:bg-secondary-bg bg:white">Sidebar</div> : <div className="w-0 dark: bg-secondary-dark-bg">Sidebar w-0</div>}
          <div className={`dark:bg-main-bg min-h-screen w-full ${activemenu ? 'md:ml-72' : 'flex-2'}`}>na</div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
