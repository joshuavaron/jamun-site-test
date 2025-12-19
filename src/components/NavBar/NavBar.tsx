import { useCallback, useEffect, useRef, useState } from "react";
import Search from "../Search/Search";
import styles from "./NavBar.module.css";

export interface NavBarButton {
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface NavBarProps {
  title: string;
  exploreItems?: NavBarButton[];
  searchValue: string;
  onSearchChange: (value: string) => void;
  rightButtons?: NavBarButton[];
  grantsHref?: string;
}

function NavButton({ label, onClick, href }: NavBarButton) {
  if (href) {
    return (
      <a className={styles.button} href={href}>
        {label}
      </a>
    );
  }
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${styles.hamburgerIcon} ${isOpen ? styles.hamburgerOpen : ""}`}>
      <span />
      <span />
      <span />
    </div>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ""}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function NavBar({
  title,
  exploreItems = [],
  searchValue,
  onSearchChange,
  rightButtons = [],
  grantsHref = "/grants",
}: NavBarProps) {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const exploreRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const closeAllMenus = useCallback(() => {
    setExploreOpen(false);
    setMobileMenuOpen(false);
    setMobileExploreOpen(false);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (exploreOpen && exploreRef.current && !exploreRef.current.contains(target)) {
        setExploreOpen(false);
      }

      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
        setMobileExploreOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [exploreOpen, mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
        setMobileExploreOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeAllMenus();
        setSearchExpanded(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeAllMenus]);

  // Detect scroll for collapsible search
  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (scrolled && !searchValue) {
        setSearchExpanded(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [searchValue]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleExploreItemClick = () => {
    setExploreOpen(false);
    setMobileMenuOpen(false);
    setMobileExploreOpen(false);
  };

  const showCollapsedSearch = isScrolled && !searchExpanded && !searchValue;

  return (
    <>
      <nav className={styles.navbar}>
        {/* Left Section: Explore + Search */}
        <div className={styles.leftSection}>
          {/* Explore Dropdown */}
          {exploreItems.length > 0 && (
            <div className={styles.exploreContainer} ref={exploreRef}>
              <button
                className={styles.exploreButton}
                onClick={() => setExploreOpen((prev) => !prev)}
                aria-expanded={exploreOpen}
                aria-haspopup="true"
              >
                Explore
                <ChevronIcon isOpen={exploreOpen} />
              </button>

              {exploreOpen && (
                <div className={styles.dropdownMenu} role="menu">
                  {exploreItems.map((item, i) => (
                    <a
                      key={i}
                      className={styles.dropdownItem}
                      href={item.href}
                      role="menuitem"
                      onClick={handleExploreItemClick}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Search */}
          <Search
            value={searchValue}
            onChange={onSearchChange}
            collapsed={showCollapsedSearch}
            onExpand={() => setSearchExpanded(true)}
          />
        </div>

        {/* Center: Logo */}
        <a href="/" className={styles.logoLink}>
          <img src={`/images/${title}.webp`} alt={`${title} logo`} />
        </a>

        {/* Right Section: Grants + Login */}
        <div className={styles.rightSection}>
          <a href={grantsHref} className={styles.textLink}>
            Grants
          </a>
          {rightButtons.map((btn, i) => (
            <NavButton key={i} {...btn} />
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          ref={hamburgerRef}
          className={styles.hamburgerButton}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <HamburgerIcon isOpen={mobileMenuOpen} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        {/* Mobile Search */}
        <div className={styles.mobileSearchContainer}>
          <Search value={searchValue} onChange={onSearchChange} />
        </div>

        {/* Mobile Explore */}
        {exploreItems.length > 0 && (
          <div className={styles.mobileExplore}>
            <button
              className={styles.mobileExploreButton}
              onClick={() => setMobileExploreOpen((prev) => !prev)}
              aria-expanded={mobileExploreOpen}
            >
              Explore
              <ChevronIcon isOpen={mobileExploreOpen} />
            </button>

            {mobileExploreOpen && (
              <div className={styles.mobileExploreItems}>
                {exploreItems.map((item, i) => (
                  <a
                    key={i}
                    className={styles.mobileExploreItem}
                    href={item.href}
                    onClick={handleExploreItemClick}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Mobile Buttons */}
        <div className={styles.mobileButtons}>
          <a
            className={styles.mobileButton}
            href={grantsHref}
            onClick={() => setMobileMenuOpen(false)}
          >
            Grants
          </a>
          {rightButtons.map((btn, i) => (
            <a
              key={i}
              className={styles.mobileButton}
              href={btn.href}
              onClick={() => {
                btn.onClick?.();
                setMobileMenuOpen(false);
              }}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
