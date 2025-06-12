import React from "react";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition duration-300 hover:scale-125 ${hoverColor}`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline text-gray-400 hover:text-white transition duration-300"
      >
        {children}
      </Link>
    </li>
  );
};

export const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-black via-[#1a1a1a] to-black text-gray-300 py-12 shadow-inner">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* First Column: Links */}
          <div>
            <h3 className="font-extrabold text-xl text-white mb-5 border-b border-white pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Second Column: About Us */}
          <div>
            <h3 className="font-extrabold text-xl text-white mb-5 border-b border-white pb-2">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              We are committed to helping you unlock your full potential with
              AI-powered tools. Our platform offers a wide range of resources to
              improve your interview skills and chances of success.
            </p>
          </div>

          {/* Third Column: Services */}
          <div>
            <h3 className="font-extrabold text-xl text-white mb-5 border-b border-white pb-2">Services</h3>
            <ul className="space-y-3">
              <FooterLink to="/">
                Interview Preparation
              </FooterLink>
              <FooterLink to="/">
                Career Coaching
              </FooterLink>
              <FooterLink to="/">
                Resume Building
              </FooterLink>
            </ul>
          </div>

          {/* Fourth Column: Address and Social Media */}
          <div>
            <h3 className="font-extrabold text-xl text-white mb-5 border-b border-white pb-2">Contact Us</h3>
            <p className="text-sm text-gray-400 mb-4">123 AI Street, Tech City, 12345</p>
            <div className="flex gap-6">
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook size={28} />}
                hoverColor="hover:text-blue-500"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={28} />}
                hoverColor="hover:text-blue-400"
              />
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram size={28} />}
                hoverColor="hover:text-pink-500"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin size={28} />}
                hoverColor="hover:text-blue-700"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-10">© {new Date().getFullYear()} Interview Copilot. All rights reserved.</p>
      </Container>
    </div>
  );
};
