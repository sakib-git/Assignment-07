import React from 'react';
import smsImg from '../../Components/../assets/sms.png';
import faImg from '../../Components/../assets/facebook.png';
import LiImg from '../../Components/../assets/Linkin.png';
import TwImg from '../../Components/../assets/Tw.png';

const Footer = () => {
  return (
    <div className="mt-10 bg-black text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-5 gap-8 py-10 max-lg:grid-cols-1 max-lg:px-3">
        <div className="">
          <span className="text-2xl font-bold">CS — Ticket System</span>
          <p>Ticket System is a platform where customer issues are tracked and managed by creating “tickets.” It helps support teams resolve problems quickly and efficie</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold">Company</span>
          <a href="#">About Us</a>
          <a href="#">Our Mission</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold">Services</span>
          <a href="#">Products & Services</a>
          <a href="#">Customer Stories</a>
          <a href="#">Download Apps</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold">Information</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Join Us</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold">"Social Links</span>
          <a className="flex items-center gap-2" href="#">
            <img className="h-4" src={LiImg} alt="" />
            @CS — Ticket System
          </a>
          <a className="flex items-center gap-2" href="#">
            <img className="h-4" src={faImg} alt="" />
            @CS — Ticket System
          </a>
          <a className="flex items-center gap-2" href="#">
            <img className="h-4" src={TwImg} alt="" />
            @CS — Ticket System
          </a>

          <a className="flex items-center gap-2" href="#">
            <img className="h-4" src={smsImg} alt="" />
            support@cst.com
          </a>
        </div>
      </div>
      <hr className="mx-auto max-w-7xl text-gray-500" />
      <div className="border-t-red-400 py-10 text-center">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
