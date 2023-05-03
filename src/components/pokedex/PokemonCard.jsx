import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const bordersByType = {
  grass: "border-gray-300",
  fire: "border-red-300",
  water: "border-blue-300",
  bug: "border-green-300",
  normal: "border-red-300",
  poison:"border-green-300",
  flying:"border-orange-300",
  fighting:"border-gray-300",
  electric:"border-yellow-300",
  steel :"border-green-300",
  dark :"border-gray-300",
  psychic:"border-yellow-300",
  dragon :"border-yellow-300",
  ground:"border-yellow-300",
  ice :"border-blue-100",
  rock :"border-gray-300",
  ghost :"border-purple-300",
  
}

const backgroundByType = {
  grass: "from-green-300 to-green-100",
  fire: "from-red-300 to-red-100",
  water: "from-blue-300 to-blue-100",
  bug: "from-green-300 to-green-100",
  normal: "from-red-300 to-red-100",
  poison:"from-green-300 to-green-100",
  flying:"from-orange-500 to-black",
  fighting:"from-gray-500 to-black",
  electric:"from-yellow-500 to-yellow-100",
  steel :"from-green-300 to-green-100",
  dark :"from-gray-300 to-gray-100",
  psychic:"from-yellow-500 to-yellow-100",
  dragon :"from-yellow-500 to-yellow-100",
  ground:"from-yellow-300 to-yellow-200",
  ice :"from-blue-100 to-black",
  rock :"from-gray-300 to-gray-100 ",
  ghost :"from-purple-300 to-purple-300",
 
}
const PokemonCard = ({ pokemonUlr }) => {
  const [pokemon, setPokemons] = useState();
  const types = pokemon?.types.slice(0, 2).map(type => type.type.name).join(" | ")
  console.log(types)
  useEffect(() => {
    axios
      .get(pokemonUlr)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  }, []); 

  return (
    <Link to={`/pokedex/${pokemon?.id}`} className={`text-center border-8 rounded-md mx-2
     ${bordersByType[pokemon?.types[0].type.name]}` }>
      {/* Parte superior*/}
      <section className={`h-[150px] relative bg-gradient-to-b ${backgroundByType[pokemon?.types[0].type.name]}` }>
        <div className="absolute  -bottom-12  w-[200px] left-1/2 -translate-x-1/2">
          <img src={pokemon?.sprites.other["official-artwork"].front_default}
           alt="" />
        </div>
      </section>
      {/* Parte Inferior*/}
      <section>
        <h3 className="mt-10">{pokemon?.name}</h3>
        <h4>{types}</h4>
        <span>Type</span>

        <hr />

        <section className="grid grid-cols-3 gap-2 p-2">
          {
            pokemon?.stats.map((stat) => (
              <div key={stat.stat.name}>
                  <h5>{stat.stat.name}</h5>
                  <span>{stat.base_stat}</span>
              </div>
            ))
          }
        </section>
      </section>
    </Link>
  );
};

export default PokemonCard;
