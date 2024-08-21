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
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const searchApi = async (e) => {
        const query = e.target.value;
        setLoading(true);
        const data = await getData(query);
        setLoading(false);
        setResults(data);
    };
    return (
        <div className="App">
            <p>Search npm packages on blur</p>
            <input onBlur={searchApi} />
            <div>
                {loading && <div>Loading</div>}
                {!loading && results &&
                    results.map((o) => {
                        const { name, description, version, date } = o.package;
                        return (
                            <div key={name} className="searchBox">
                                <a className="boldLink" href={o.package.links.npm}>{name}</a>
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
