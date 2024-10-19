import React, { useState } from "react";
import { cn } from "../utils/cn";

export function Switch({
  categories = ["", ""],
  selectedCategory,
  className = "",
  onCategorySelect,
}) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  const handleCategorySelect = (subcategory) => {
    setActiveCategory(subcategory);
    onCategorySelect(subcategory);
  };

  return (
    <div
      className={cn(`inline-flex overflow-hidden rounded-sm p-1`, className)}
    >
      {categories.map((subcategory) => (
        <SwitchE
          key={subcategory}
          isActive={activeCategory === subcategory}
          onClick={() => handleCategorySelect(subcategory)}
        >
          {subcategory}
        </SwitchE>
      ))}
    </div>
  );
}

function SwitchE({ isActive = false, children, onClick, className }) {
  return (
    <button
      className={cn(
        `rounded-sm px-[0.5rem] py-[0.25rem] text-center text-[1rem] font-semibold transition-colors duration-100 ${
          isActive
            ? "bg-[#141517] text-white"
            : "bg-white text-[#141517] hover:bg-gray-100"
        }`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
