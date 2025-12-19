import { useRef, useState, useEffect } from "react";
import { getSearchSuggestions, SearchResult } from "../../data/searchDictionary";
import styles from "./Search.module.css";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  collapsed?: boolean;
  onExpand?: () => void;
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

export default function Search({ value, onChange, collapsed = false, onExpand }: SearchProps) {
  const [focused, setFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = getSearchSuggestions(value, 5);
  const showDropdown = focused && value.length > 0 && suggestions.length > 0;

  // Reset selection when suggestions change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [value]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  const handleSelect = (suggestion: SearchResult) => {
    onChange("");
    setFocused(false);
    setSelectedIndex(-1);
    window.location.href = suggestion.href;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
        break;
      case "Enter":
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          e.preventDefault();
          handleSelect(suggestions[selectedIndex]);
        }
        break;
      case "Escape":
        setFocused(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleContainerClick = () => {
    if (collapsed && onExpand) {
      onExpand();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleBlur = () => {
    // Delay to allow clicking suggestions
    setTimeout(() => setFocused(false), 150);
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${collapsed ? styles.collapsed : ""} ${showDropdown ? styles.open : ""}`}
      onClick={handleContainerClick}
    >
      <div className={styles.inputWrapper}>
        <span className={styles.searchIcon}>
          <SearchIcon />
        </span>

        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          tabIndex={collapsed ? -1 : 0}
          aria-label="Search"
          aria-autocomplete="list"
          aria-expanded={showDropdown}
        />

        {collapsed && <span className={styles.collapsedLabel}>Search</span>}

        {value && !collapsed && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear search"
          >
            <ClearIcon />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className={styles.dropdown} role="listbox">
          {suggestions.map((suggestion, i) => (
            <button
              key={suggestion.href}
              type="button"
              className={`${styles.suggestion} ${selectedIndex === i ? styles.selected : ""}`}
              onClick={() => handleSelect(suggestion)}
              onMouseEnter={() => setSelectedIndex(i)}
              role="option"
              aria-selected={selectedIndex === i}
            >
              <span className={styles.suggestionIcon}>
                <SearchIcon />
              </span>
              <span className={styles.suggestionLabel}>{suggestion.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
