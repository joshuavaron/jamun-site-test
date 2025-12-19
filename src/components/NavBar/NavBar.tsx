import { useCallback, useEffect, useRef, useState } from "react";
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

function SearchIcon() {
  return (
    <svg
      className={styles.searchIcon}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
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
}: NavBarProps) {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
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

      // Close explore dropdown if clicked outside
      if (exploreOpen && exploreRef.current && !exploreRef.current.contains(target)) {
        setExploreOpen(false);
      }

      // Close mobile menu if clicked outside (but not on hamburger)
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

  // Close mobile menu on escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeAllMenus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeAllMenus]);

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

  const handleClearSearch = () => {
    onSearchChange("");
    inputRef.current?.focus();
  };

  const handleExploreItemClick = () => {
    setExploreOpen(false);
    setMobileMenuOpen(false);
    setMobileExploreOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo */}
        <a href="/" className={styles.logoLink}>
          <img src={`/images/${title}.webp`} alt={`${title} logo`} />
        </a>

        {/* Desktop Search Bar */}
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <SearchIcon />
            <input
              ref={inputRef}
              className={styles.searchInput}
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search"
            />
            {searchValue && (
              <button
                className={styles.clearSearch}
                onClick={handleClearSearch}
                aria-label="Clear search"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
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

          {/* Right Buttons */}
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
        <div className={styles.mobileSearchWrapper}>
          <SearchIcon />
          <input
            className={styles.mobileSearchInput}
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search"
          />
          {searchValue && (
            <button
              className={styles.clearSearch}
              onClick={handleClearSearch}
              aria-label="Clear search"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          )}
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
