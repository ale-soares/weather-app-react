import React from "react";

const Input = () => {
  return (
    <form>
      <input type="text" className="inputText" placeholder="City name here" />
      <input type="submit" value="sumbit" className="inputSubmit" />
    </form>
  );
};

export default Input;
