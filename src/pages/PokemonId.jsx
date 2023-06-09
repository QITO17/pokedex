import React, { useEffect, useState } from "react";
import Header from "../components/pokedex/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonId = () => {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();

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

   
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getPercentStatBar = (base_stat) => {
    const PercentStatBar = Math.round((base_stat * 100) / 255);
    return `${PercentStatBar}%`;
  };
  return (
    <section>
      <Header />
      <section className="px-2 py-14">
        <article className="max-w-[900px] mx-auto shadow-xl p-2">
          {/* Seccion superior */}
          <section className={`h-[150px] relative bg-gradient-to-b ${backgroundByType[pokemon?.types[0].type.name]}` }>
            <div className="absolute w-[200px] mx-auto left-1/2 -translate-x-1/2 -top-14">
              <img
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </div>
          </section>

          {/*Informacion general*/}
          <section>
            <div>
              <h3>#{pokemon?.id}</h3>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr items-center gap-2">
              <hr />
              <h2 className="capitalize font-bold">{pokemon?.name}</h2>
              <hr />
            </div>
            <div className="flex justify-center text-center font-bold  gap-6 ">
              <div className="">
                <h5>Weight</h5>
                <span>{pokemon?.weight}</span>
              </div>
              <div className="">
                <h5>Height</h5>
                <span>{pokemon?.height}</span>
              </div>
            </div>
            <section className="grid md: grid-cols-2 gap-4">
              {/*tipos*/}
              <section className="text-center">
                <h3>Types</h3>

                <section className="grid grid-cols-2 gap-4 mt-4">
                  {pokemon?.types.map((type) => (<article className="p-2 px-8 border-[1px] border-gray-300 capitalize"key={type.type.name}>{type.type.name}</article>))
                  }
                </section>

              </section>
              <section className="text-center">
                <h3>Abilities</h3>

                <section className="grid grid-cols-2 gap-4 mt-4">
                  {pokemon?.abilities.map((ability) => (
                    <article className="p-2 px-8 border-[1px] border-gray-300 capitalize truncate"key={ability.ability.name}> {ability.ability.name}</article>))
                  }
                </section>

              </section>
            </section>
          </section>
          <section>
            <h2>Stats</h2>
            <section className="capitalize">
              {pokemon?.stats.map((stat) => (
                <article key={stat.stat.name}>
                  <section className="flex justify-between">
                    <h5 className="Capitalize">{stat.stat.name}</h5>
                    <span>{stat.base_stat}/255</span>
                  </section>
                  <div className="bg-gray-100 h-6 roundes-md">
                    <div
                      style={{ width: getPercentStatBar(stat.base_stat) }}
                      className={`h-full bg-gradient-to-r ${backgroundByType[pokemon?.types[0].type.name]}`}
                    ></div>
                  </div>
                </article>
              ))}
            </section>
          </section>
        </article>
      </section>
    </section>
  );
};

export default PokemonId;
