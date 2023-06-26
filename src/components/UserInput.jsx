import React from "react";

const UserInput = ({ handleUserInput, onKeyDown }) => {
  return (
    <div className="userInput">
      <input
        type="text"
        placeholder="your choice"
        onChange={handleUserInput}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default UserInput;
