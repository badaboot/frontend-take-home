import "./styles.css";
import { useState } from "react";

async function getData(query) {
  const url = `https://api.npms.io/v2/search/suggestions?q=${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}
export default function App() {
  const [results, setResults] = useState([]);
  const searchApi = async (e) => {
    const query = e.target.value;
    const data = await getData(query);
    if (data !== undefined) {
      setResults(data);
    }
  };
  return (
    <div className="App">
      <input onBlur={searchApi} />
      <div>
        {results &&
          results.map((o) => {
            const { name, description, version, date } = o.package;
            const { quality, popularity, maintenance } = o.score.detail;
            return (
              <div key={name} className="searchBox">
                <p className="bold">{name}</p>
                <div className="flex">
                  <div>
                    <p className="gray">{description}</p>
                    <p>
                      {o.package.publisher.username}{" "}
                      <span className="gray">
                        published {version} {date}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
