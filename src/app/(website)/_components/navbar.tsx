import { MenuIcon } from "lucide-react";
import Image from "next/image";

const LandingPageNavBar = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <MenuIcon className="w-6 h-6" />
        <Image src="/image/opal-logo.svg" alt="logo" width={40} height={40} />
        Alpha
      </div>
      LandingPageNavBar
    </div>
  );
};

export default LandingPageNavBar;
