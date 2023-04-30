import { useState } from "react";

const Page1 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!", inputValue);
    // do something with the form data
  };

  return (
    <div>
      <h1>Page 1</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page1;
