import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExperApp = () => {

    //const categories = ['One Punch','Samurai x','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories ( [ ...categories, 'Vegueta'] );
    //     setCategories ( cats => [ ...cats, 'Vegueta'] );
    // };

    return ( 
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            

            <ol>
                {
                    categories.map( category => (                        
                        <GifGrid
                        key={ category }
                        category={ category } />                        
                    ))
                }
            </ol>
        </>         
    );
}

export default GifExperApp;