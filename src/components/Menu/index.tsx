"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { HiX } from "react-icons/hi";
import MenuItem from './menuItem';

const DialogBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (
      (event.key === 'k' && (event.metaKey || event.ctrlKey)) || // Cmd+K or Ctrl+K
      (event.key === 'Escape' && isOpen) // ESC to close
    ) {
      event.preventDefault();
      toggleDialog();
    }
  }, [isOpen, toggleDialog]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <button onClick={toggleDialog}>Menu</button>
      
      {isOpen && (
        <div id='menu-component-wrapper' className="fixed top-0 left-0 w-dvw h-dvh flex justify-center items-center z-10">

          <div id='menu-overlay' className="absolute top-0 left-0 w-dvw h-dvh bg-black bg-opacity-5 backdrop-blur" onClick={toggleDialog}/>

          <div id='menu-container' className="bg-white rounded-xl border  max-w-xl max-h-96 w-full z-10 overflow-hidden flex flex-col">

            <div id='menu-header' className='flex flex-row justify-between items-center p-4 border-b'>
                <div>
                </div>

                <div>
                  <button className="px-2 py-1 border rounded-md text-xs" onClick={toggleDialog}>
                    Esc
                  </button>
                </div>
            </div>

            <div id='menu-middle-container' className='px-2 py-6 border-b overflow-scroll'>
              <div className='mb-6 x-full'>
                <p className='pl-3 text-xs text-gray-500 mb-2'>Pages</p>
                <ul className='flex flex-col w-full'>
                    <MenuItem name="Home" slug="" />
                    <MenuItem name="Feed" slug="feed" />
                    <MenuItem name="About" slug="about" />
                    <MenuItem name="Contact" slug="contact" />
                </ul>
              </div>

              <div>
                <p className='pl-3 text-xs text-gray-500 mb-2'>Collections</p>
                <ul className='flex flex-col w-full'>
                    <MenuItem name="Things" slug="things" />
                    <MenuItem name="Stack" slug="stack" />
                    <MenuItem name="Reading" slug="reading" />
                </ul>
              </div>
            </div>

            <div id='menu-footer' className='p-4'>
              <p>poo</p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default DialogBox;
