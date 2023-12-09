import React, { useState } from "react";
import SearchBar from "./search-bar";

const Header = () => {
  return (
    <div className="bg-black flex justify-center py-3">
      <SearchBar />
    </div>
  );
};

export default Header;
