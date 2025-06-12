import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to="/">
      <img
        src="/assets/svg/image.png"
        alt="Logo"
        className="h-24 w-auto object-contain"
      />
    </Link>
  );
};
