interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    path: '/about-us',
   
  },
    {
        label: 'Why Choose ALHuda',
        path: '/why-AlHuda',
      },
  {
    label: 'Services',
    path: '/services',
    /* 
    children: [
      {
        label: 'Kitchen Design',
        path: '/kitchen-design',
      },
      {
        label: 'Interior Design',
        path: '/interior-design',
      },
     
    ],
    */
  },
  
];