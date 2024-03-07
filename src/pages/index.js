import { useState } from "react";

export default function Home() {
  const [apiResult, setApiResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickHelloButton = async () => {
    setIsLoading(true);

    console.log("handleClickHelloButton", "1");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("handleClickHelloButton", "2");
    if (response.ok) {
      console.log("handleClickHelloButton", "3");
      setApiResult(await response.json());
    }
    console.log("handleClickHelloButton", "4");

    setIsLoading(false);
  };

  return (
    <main>
      <button
        className="btn btn-neutral"
        type="button"
        onClick={() => handleClickHelloButton()}
      >
        Hello?
      </button>

      <div className="p-4">
        {isLoading ? (
          <div className="loading loading-spinner loading-md"></div>
        ) : (
          <pre>{apiResult ? JSON.stringify(apiResult) : ""}</pre>
        )}
      </div>
    </main>
  );
}
