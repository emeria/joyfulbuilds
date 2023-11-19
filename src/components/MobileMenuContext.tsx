import { createContext, useState, FC, ReactNode } from 'react';

interface MobileMenuContextType {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    closeMenu: () => void;
  }
  
  export const MobileMenuContext = createContext<MobileMenuContextType>({
    isMobileMenuOpen: false, // initial value
    toggleMobileMenu: () => {}, // placeholder function
    closeMenu: () => {}, // placeholder function
  });

 
interface MobileMenuProviderProps {
    children: ReactNode;
  }
  
  export const MobileMenuProvider: FC<MobileMenuProviderProps> = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMobileMenuOpen(false);
    };
  
    return (
      <MobileMenuContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu, closeMenu }}>
        {children}
      </MobileMenuContext.Provider>
    );
  };