import React from "react";

type HomeProps = {title: string, count: number};
const Home = ({title, count}: HomeProps) => {
    return (<div>
        <h3>{title}</h3>
        <p>{count}</p>
    </div>)
}

export default Home;
