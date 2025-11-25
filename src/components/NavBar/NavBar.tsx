import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";

export interface NavBarButton {
  label: string;
  onClick?: () => void;
  // Use 'href' for navigation paths
  href?: string; 
}

export interface NavBarProps {
  title: string;

  // CHANGED: exploreItems now uses the NavBarButton interface to include 'href'
  exploreItems?: NavBarButton[];
  // REMOVED: onExploreSelect is no longer needed since navigation is handled by href

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

export default function NavBar({
  title,
  exploreItems = [],
  // REMOVED: onExploreSelect
  searchValue,
  onSearchChange,
  rightButtons = [],
}: NavBarProps) {
  const [open, setOpen] = useState(false); // explore dropdown
  
  // New state for focused search
  const [searchFocused, setSearchFocused] = useState(false); 

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus the input when we focus the search bar
  useEffect(() => {
    if (searchFocused) {
      // Small timeout to allow layout/CSS to settle before focusing
      const t = window.setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [searchFocused]);

  // Close dropdown on search focus
  useEffect(() => {
    if (searchFocused) {
      setOpen(false);
    }
  }, [searchFocused]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
        if (!open) return;
        const el = document.getElementById("explore-menu-container");
        if (!el) return;
        // If click is outside the explore container, close
        if (!el.contains(e.target as Node)) {
          setOpen(false);
        }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <nav className={styles.navbar}>
      {/* 1. LEFT SECTION: Logo */}
      <div className={styles.logoContainer}>
        <a href="/" className={styles.logoLink}>
            <img src={"/images/" + title + ".webp"} alt={`${title} logo`} />
        </a>
      </div>

      {/* 2. CENTER SECTION: Modern Search Bar */}
      <div className={`${styles.centerSection} ${searchFocused ? styles.searchExpanded : ''}`}>
        <div className={styles.searchWrapper}>
          <svg
            className={styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            ref={inputRef}
            className={styles.searchInput}
            type="text"
            placeholder="Search documents, pages, and more..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            aria-label="Search"
          />
          {searchValue && (
            <button
              className={styles.clearSearch}
              onClick={() => {
                onSearchChange("");
              }}
              aria-label="Clear search"
              title="Clear Search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 3. RIGHT SECTION: Explore + Buttons */}
      <div className={styles.right}>
        {/* Explore Button and Dropdown */}
        <div className={styles.exploreContainer} id="explore-menu-container">
          {exploreItems.length > 0 && (
            <button
              className={styles.exploreButton}
              onClick={() => setOpen((p) => !p)}
              aria-expanded={open}
              aria-controls="explore-menu"
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{
                  marginLeft: "6px",
                  height: "1em",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.18s ease",
                }}
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {open && (
            <div className={styles.dropdownMenu} id="explore-menu" role="menu">
              {exploreItems.map((item, i) => (
                // CHANGED: Use <a> tag and item.href for navigation
                <a
                  key={i}
                  className={styles.dropdownItem}
                  role="menuitem"
                  href={item.href} // Navigation path
                  tabIndex={0}
                  onClick={() => {
                    // Close dropdown on click
                    setOpen(false);
                  }}
                  onKeyDown={(ev) => {
                    if (ev.key === "Enter" || ev.key === " ") {
                      ev.preventDefault();
                      // Close dropdown on Enter/Space
                      setOpen(false);
                      // Let the default <a> behavior handle navigation
                      if (item.href) {
                        window.location.href = item.href; 
                      }
                    }
                  }}
                >
                  {item.label} {/* Use item.label for the text */}
                </a>
              ))}
            </div>
          )}
        </div>
        
        {/* Right Buttons */}
        {rightButtons.map((btn, i) => (
          <NavButton key={i} {...btn} />
        ))}
      </div>
    </nav>
  );
}