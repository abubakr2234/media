import React from 'react'
import Feat from './feat.png';
import Art from './art.png';
import Art2 from './art-2.png';
import './styles.css';


const Media = () => {
    return (
        <div className="media">

        <div className="m1">
        <h1>Media Center</h1>
        <img src={Feat} alt="feat" />
        <p>25 September 2020</p>
        <h1>Why ESG Investing Offers the Best…</h1>
        <button>READ ARTICLE</button>
        </div>
        
            <div className="esg-2">
                <img src={Art} alt="art" />
                <p>25 September 2020</p>
                <h2>Article heading lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac turpis in mauris auctor dictum…</p>
                 
                 
                 <img src={Art2} alt="art2" />
                <p>25 September 2020</p>
                <h2>Article heading lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac turpis in mauris auctor dictum…</p>
                 

            </div>
        </div>
    )
}

export default Media;
