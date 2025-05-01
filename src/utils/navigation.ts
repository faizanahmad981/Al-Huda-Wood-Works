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
    children: [
      {
        label: 'About Us',
    path: '/about-us',
      },
      {
        label: 'Our Process',
        path: '/our-process',
      },
      {
        label: 'Why Choose Shaze',
        path: '/why-shaze',
      },
    ],
  },
  {
    label: 'Services',
    path: '/services',
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
  },
  {
    label: 'Products',
    path: '/products',
    children: [
      {
        label: 'Kitchen',
        path: '/kitchen',
        children: [
          {
            label: 'Fotile Kitchen',
            path: '/fotile-kitchen',
          },
         
        ],
      },
      {
        label: 'Furniture',
        path: '/furniture',
        children: [
          {
            label: 'Door',
            path: '/doors',
          },
         
        ],
      },
    ],
  },
];