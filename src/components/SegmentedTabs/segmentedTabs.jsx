import React, { useRef, useCallback } from "react";
import "./segmentedTabs.css";

function CheckIcon() {
  return (
    <svg
      className="segmented-tab-check"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SegmentedTabs({ tabs, value, onChange, className }) {
  const tabsRef = useRef([]);

  const findNextEnabled = useCallback(
    (startIndex, direction) => {
      const len = tabs.length;
      for (let i = 1; i <= len; i++) {
        const idx = (startIndex + direction * i + len) % len;
        if (!tabs[idx].disabled) return idx;
      }
      return startIndex;
    },
    [tabs],
  );

  const handleKeyDown = useCallback(
    (e) => {
      const currentIndex = tabs.findIndex((t) => t.id === value);
      let nextIndex = currentIndex;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextIndex = findNextEnabled(currentIndex, 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        nextIndex = findNextEnabled(currentIndex, -1);
      } else if (e.key === "Home") {
        e.preventDefault();
        nextIndex = findNextEnabled(-1, 1);
      } else if (e.key === "End") {
        e.preventDefault();
        nextIndex = findNextEnabled(tabs.length, -1);
      } else {
        return;
      }

      onChange(tabs[nextIndex].id);
      tabsRef.current[nextIndex]?.focus();
    },
    [tabs, value, onChange, findNextEnabled],
  );

  return (
    <div
      className={`segmented-tabs${className ? ` ${className}` : ""}`}
      role="tablist"
      aria-label="Navigation"
    >
      {tabs.map((tab, index) => {
        const isSelected = tab.id === value;
        const isDisabled = !!tab.disabled;
        return (
          <button
            key={tab.id}
            ref={(el) => (tabsRef.current[index] = el)}
            role="tab"
            aria-selected={isSelected}
            aria-disabled={isDisabled}
            disabled={isDisabled}
            tabIndex={isSelected ? 0 : -1}
            className={`segmented-tab${isDisabled ? " segmented-tab-disabled" : ""}`}
            onClick={() => !isDisabled && onChange(tab.id)}
            onKeyDown={handleKeyDown}
          >
            {isSelected && <CheckIcon />}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default SegmentedTabs;

