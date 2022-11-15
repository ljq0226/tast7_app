"use client"
import { TabBar, Button } from '@arco-design/mobile-react';
import { IconUser, IconHome, IconSetting, IconNotice } from '@arco-design/mobile-react/esm/icon';
import './page.css'
export default function TabBarDemo() {
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
    <TabBar fixed={false}>
      {tabs.map((tab, index) => (
        <TabBar.Item title={tab.title} icon={tab.icon} key={index} className="h-[30px]"></TabBar.Item>
      ))}
    </TabBar>
  );
}
