import React, { Component } from "react";
import Head from "../../components/Head/Head";
import Link from "next/link";
import "./Home.scss";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Head title="Home" />
                <h1>Hello, home page!</h1>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <br />
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <br />
                <Link href="/">
                    <a>Home</a>
                </Link>
                <img src="/upload/cart.png" />
            </div>
        );
    }
}

export default Home;
