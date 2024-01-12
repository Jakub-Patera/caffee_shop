import Logo from '../assets/Logo.png';

//TODO: Add links to the navigation
//TODO: Add hover effect to the links
//TODO: Add active link effect to the links
//TODO: Add responsive design to the navigation

function Navigation() {
  const links = [
    {
      name: 'Home',
      url: '#',
    },
    {
      name: 'About',
      url: '#',
    },
    {
      name: 'Types',
      url: '#',
    },
    {
      name: 'Shopping',
      url: '#',
    },
    {
      name: 'Memeber',
      url: '#',
    },
    {
      name: 'Blog',
      url: '#',
    },
    {
      name: 'Event',
      url: '#',
    },
    {
      name: 'Contact',
      url: '#',
    },
  ];

  return (
    <>
      {' '}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '99999',
        }}
      >
        <nav className='navbar navbar-expand-lg navbar-dark px-16 mt-12 '>
          <div className=' flex justify-center items-center uppercase font-light'>
            <ul className='flex justify-center items-center space-x-10 mx-20'>
              {links.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className={`transition-colors duration-100 hover:text-[#c21e51] hover:underline text-inline `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <img
              src={Logo}
              alt=''
              height={512}
              width={512}
              className='h-32 w-32'
            />
            <ul className='flex justify-center items-center space-x-10 mx-20'>
              {links.slice(4, 8).map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
