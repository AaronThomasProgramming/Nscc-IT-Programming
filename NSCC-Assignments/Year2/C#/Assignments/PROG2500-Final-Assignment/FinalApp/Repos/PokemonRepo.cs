using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
// get pkmn card, classes and models
using PokemonTcgSdk;
using PokemonTcgSdk.Models;

namespace FinalApp.Repos
{
    public class PokemonRepo
    {
        /// <summary>
        /// Get list of all pkmn cards from the base set
        /// </summary>
        /// <returns></returns>
        public static List<PokemonCard> GetAllPokemonCards()
        {
            // https://github.com/PokemonTCG/pokemon-tcg-sdk-csharp
            // No async methods on out of date version so limit all cards to base set.
            Dictionary<string, string> query = new Dictionary<string, string>()
            {
                //set repo to only pkmn from the base set
                { "set", "Base" },
                { "supertype", "Pokemon" }
            };

            return Card.Get<Pokemon>(query).Cards;
        }
        /// <summary>
        /// Get name of pkmn card
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public static PokemonCard GetPokemonCard(string name)
        {
            Dictionary<string, string> query = new Dictionary<string, string>()
            {
                { "name", name },
                { "set", "Base" }
            };

            return Card.Get<PokemonCard>(query);
        }
    }
}
