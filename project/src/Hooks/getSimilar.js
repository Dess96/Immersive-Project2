import {useState, useEffect} from 'react';

const GetSimilar = (search) => {
    const [sug, setSug] = useState([]);

    useEffect(() => {
        fetch(`https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction`)
        .then(resp => resp.json())
        .then(res => {
            setSug(res.Similar);
        }).catch(ex => {
            console.error(ex);
        })
    }, [search]);
    return sug;
}

export default GetSimilar;