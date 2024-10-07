import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer'>
      <nav>
        <Link href="/aboutus">About us</Link>|
        <Link href="/contactus">Contact us</Link>|
      </nav>
      <p>Created by Javaid</p>
    </div>
  );
}

export default Footer;
