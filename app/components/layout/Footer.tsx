import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1220] text-gray-300 relative overflow-hidden">

      {/* Background Big Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] md:text-[180px] font-bold text-white/5">
          stellarRank
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo + Description */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/icons/logo-stellarrank-white.svg"
                alt="StellarRank"
                width={200}
                height={60}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              AI-driven development and marketing for hospitality, travel & leisure.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm text-gray-500 uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li><Link href="#">Branding</Link></li>
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">Content & Social</Link></li>
              <li><Link href="#">Performance Marketing</Link></li>
              <li><Link href="#">AI Optimization</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm text-gray-500 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm text-gray-500 uppercase mb-4">
              Get in touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>hello@stellarrank.com</li>
              <li>+1 (234) 567-890</li>
              <li className="text-gray-500">Los Angeles, California</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 border-t border-white/10 pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} stellarRank. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;