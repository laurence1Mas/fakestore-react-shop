import React, { createContext, useState } from "react";

// 🔹 On met null pour éviter les erreurs silencieuses
export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Optionnel : fonction pour reset proprement
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
