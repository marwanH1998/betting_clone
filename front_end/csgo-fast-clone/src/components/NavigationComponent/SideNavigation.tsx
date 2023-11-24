'use client';

import Link from 'next/link';

const SideNavigation = () => {
    // const  SIDENAV_ITEMS : SideNavItem[] = [
    //     {
    //       title: 'Home',
    //       path: '/',
    //       icon: <Icon icon="lucide:home" width="24" height="24" />,
    //     },
    //     {
    //       title: 'Projects',
    //       path: '/projects',
    //       icon: <Icon icon="lucide:folder" width="24" height="24" />,
    //       submenu: true,
    //       subMenuItems: [
    //         { title: 'All', path: '/projects' },
    //         { title: 'Web Design', path: '/projects/web-design' },
    //         { title: 'Graphic Design', path: '/projects/graphic-design' },
    //       ],
    //     },
    //     {
    //       title: 'Messages',
    //       path: '/messages',
    //       icon: <Icon icon="lucide:mail" width="24" height="24" />,
    //     },
    //     {
    //       title: 'Settings',
    //       path: '/settings',
    //       icon: <Icon icon="lucide:settings" width="24" height="24" />,
    //       submenu: true,
    //       subMenuItems: [
    //         { title: 'Account', path: '/settings/account' },
    //         { title: 'Privacy', path: '/settings/privacy' },
    //       ],
    //     },
    //     {
    //       title: 'Help',
    //       path: '/help',
    //       icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
    //     },
    //   ];
      
    return (
      <div className="md:w-60 bg-black mt-16 h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
        <div className="flex flex-col space-y-6 w-full">
  
          <div className="flex flex-col space-y-2  md:px-6 ">
            {/* {SIDENAV_ITEMS.map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })} */}
          </div>
        </div>
      </div>
    );
  };
  
  export default SideNavigation;