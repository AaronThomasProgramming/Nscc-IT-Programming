using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PokemonTcgSdk.Models;
using FinalApp.Repos;
using FinalApp.ViewModels;

namespace FinalUnitTesting
{
    [TestClass]
    public class UnitTest
    {
        [TestMethod]
        //checks that we have pulled all cards from api
        public void GetAllPokemonCards_GetsAllCards()
        {
            var cards = PokemonRepo.GetAllPokemonCards();
            var firstCard = cards[0];
            var name = firstCard.Name;

            Assert.IsTrue(cards.Count > 20);
            Assert.IsNotNull(firstCard);
            Assert.IsNotNull(name);
        }

        [TestMethod]
        //checks that the search funcionality is working as expected
        public void TestFilteringCards()
        {
            PokemonViewModel pvm = new PokemonViewModel();
            var cards = PokemonRepo.GetAllPokemonCards();

            pvm.Filter = "Charizard";
            pvm.PerformFiltering();
            
            Assert.IsTrue(cards.Count == 2);
        }

        [TestMethod]
        //checks that when you select a name from the list it actually is selecting the care you chose
        public void TestSelectedCard()
        {
            var cards = PokemonRepo.GetAllPokemonCards();
            PokemonViewModel pvm = new PokemonViewModel();

            Assert.AreEqual("Growlithe", pvm.SelectedPokemon.Name);         
        }

        [TestMethod]
        //tests that the chosen pokemons attacks are actually that pokemons attacks
        public void TestAttack()
        {
            var cards = PokemonRepo.GetAllPokemonCards();
            PokemonViewModel pvm = new PokemonViewModel();

            pvm.SelectedPokemon = cards[0];

            Assert.AreEqual("Flare", pvm.SelectedPokemon.Attacks[0].Name);
        }
    }
}
