import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function DetailPokemon(){

    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(()=>{
        fetchProduct()
    },[]);

    function fetchProduct(){
      axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${params.id}/`)
            .then((res)=>{
                console.log(res.data);
                setData(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });  
    };

    return(

                    <div className='product-container' key={params.id}>
                        <div>
                            <img className='prod-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${params.id}.png`} alt=''/>
                        </div>
                        <div>
                            <h1 className='brand'>{data.name}</h1>
                            <div className='desc'>
                                <h2><strong>Genus: </strong>
                                {data.habitat.name}</h2>
                            </div>
                            <div className='desc'>
                                <h2><strong>Color: </strong>
                                {data.color.name}</h2>
                            </div>
                            <div className='desc'>
                                <h2><strong>Shape: </strong>
                                {data.shape.name}</h2>
                            </div>
                            <Link className='btn back' to={'/'}>Back</Link>
                        </div>
                    </div>
                
    );
}
export default DetailPokemon;