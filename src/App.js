import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import axios from 'axios';
import { JsonWebTokenError } from 'jsonwebtoken';

const App = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = () => {
        axios.get(`${process.env.REACT_APP_API}/posts`)
        .then((response) => {
            setPosts(response.data);
        })
        .catch();
    };

      useEffect(() => {
        fetchPosts();

     }, []);


return(
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>MERN CRUD</h1>
        </div>
    );
};
 

export default App;
