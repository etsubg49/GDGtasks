import { useEffect, useState } from "react";

function useCharacterCount(inputText) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(inputText.length);
  }, [inputText]);

  return count; // Return only the count since the text is managed externally
}

export default useCharacterCount;