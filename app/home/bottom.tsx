'use client'
import React from 'react'
import { TabBar, Button } from '@arco-design/mobile-react';
import { IconUser, IconHome, IconSetting, IconNotice } from '@arco-design/mobile-react/esm/icon';
import '@arco-design/mobile-react/dist/style.css';
import './bottom.css'
const Bottom = () => {
  const tabs = [
    {
      title: 'Home',
      icon: <IconHome />,
    },
    {
      title: 'Mine',
      icon: <IconUser />,
    },
    {
      title: 'Notice',
      icon: <IconNotice />,
    },
    {
      title: 'Settings',
      icon: <IconSetting />,
    },
  ];
  return (
    <div className='flex justify-around pt-2 border-t-2 border-gray-200'>
      <TabBar fixed={false}>
        {tabs.map((tab, index) => (
          <TabBar.Item title={tab.title} icon={tab.icon} key={index} className="h-[50px]"></TabBar.Item>
        ))}
      </TabBar>



    </div>
  )
}

export default Bottom
