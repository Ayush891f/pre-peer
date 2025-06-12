import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header
  className={cn(
    "w-full border-b border-white/10 bg-gradient-to-r from-[#141035] via-[#625bb2] to-[#0a0a44] text-white z-50  transition-all duration-500"
  )}
>
      <Container>
        <div className="flex items-center justify-between">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-lg md:text-xl font-bold tracking-wide transition duration-300 transform hover:scale-110",
                    isActive
                      ? "text-yellow-400 underline underline-offset-4"
                      : "text-white-300 hover:text-white"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          <div className="flex items-center gap-4 ">
            {/* profile section */}
            <ProfileContainer />

            {/* mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
