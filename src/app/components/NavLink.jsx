const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li>
      <a 
        href={href} 
        onClick={handleClick}
        className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer'
      >
        {title}
      </a>
    </li>
  )
}

export default NavLink;
