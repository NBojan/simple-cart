import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);

    const handleDel = id => setData(data.filter(item => item.id !== id));

    const fetching = async (url, forAbort) => {
        const response = await fetch(url, forAbort);
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        const data = await response.json();
        return data;
    }

    const postMethod = async (link, item) => {
        const response = await fetch(link, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
    }

    useEffect(() => {
        const abortCtrl = new AbortController();
        fetching(url, {signal: abortCtrl.signal})
        .then(data => {
            setData(data);
            setLoading(false);
            setErr(false);
        })
        .catch(err => {
            if(err.name !== "AbortError"){
                setErr(err.message);
                setLoading(false);
            }
        })

        return () => abortCtrl.abort();
    }, [url])

    return {data, loading, err, handleDel, postMethod};
}
 
export default useFetch;