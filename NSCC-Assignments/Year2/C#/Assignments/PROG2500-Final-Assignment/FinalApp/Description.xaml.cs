using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.ApplicationModel;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using Windows.UI.Core;
using FinalApp.ViewModels;
using PokemonTcgSdk.Models;

namespace FinalApp
{
    public sealed partial class Description : Page
    {
        public PokemonViewModel PMViewModel { get; set; }
        public PokemonCard SelectedCard;

        public Description()
        {
            this.InitializeComponent();
            this.PMViewModel = new PokemonViewModel();
        }
        /// <summary>
        /// Display pkmn info and Controls for back button
        /// </summary>
        /// <param name="e"></param>
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            if (e.Parameter is PokemonCard && e.Parameter != null)
            {
                SelectedCard = (PokemonCard)e.Parameter;
            }
            base.OnNavigatedTo(e);
            //Display back button
            SystemNavigationManager.GetForCurrentView().AppViewBackButtonVisibility =
            AppViewBackButtonVisibility.Visible;
            //Call About_BackRequested function to navigate to Main Page
            SystemNavigationManager.GetForCurrentView().BackRequested += About_BackRequested;

            //Display info of the selected pkmn
            DescriptiontBox.Text = DescriptionString();
        }
        /// <summary>
        /// Return any info from the selected pokemon if it's not null
        /// </summary>
        /// <returns></returns>
        public string DescriptionString()
        {
            string descriptionString = "National Pokedex #: " + SelectedCard.NationalPokedexNumber + " - " + SelectedCard.Name + " - HP: " + SelectedCard.Hp + "\n\n";
            //list all attacks the pokemon has
            descriptionString += "Attacks:";
            if (SelectedCard.Attacks[0] != null)
            {
                for (int i = 0; i < SelectedCard.Attacks.Count(); i++)
                {
                    if (SelectedCard.Attacks[i].Text == null)
                    {
                        descriptionString += "\n" + (i + 1).ToString() + " - " + SelectedCard.Attacks[i].Name + "\n" + SelectedCard.Attacks[i].Text;
                    }
                    else
                    {
                        descriptionString += "\n" + (i + 1).ToString() + " - " + SelectedCard.Attacks[i].Name;
                    }
                }
            }
            //list the pkmn's ability and the effect it does
            descriptionString += "\nAbilities: ";
            if (SelectedCard.Ability != null)
            {
                descriptionString += "\n" + SelectedCard.Ability.Name + " - " + SelectedCard.Ability.Text;
            }
            //return how rare of a card it is 
            if (SelectedCard.Rarity != null)
            {
                descriptionString += "\n\nRarity: " + SelectedCard.Rarity;
            }
            //show what types the pkmn 
            descriptionString += "\n\nResistances: ";
            if (SelectedCard.Resistances != null)
            {

                for (int i = 0; i < SelectedCard.Resistances.Count(); i++)
                {
                descriptionString += "\n" + SelectedCard.Resistances[i].Type;
                }
            }
            //show what types the pkmn is weak against
            descriptionString += "\n\nWeaknesses: ";
            if (SelectedCard.Weaknesses != null)
            {
                for (int i = 0; i < SelectedCard.Weaknesses.Count(); i++)
                {
                    descriptionString += "\n" + SelectedCard.Weaknesses[i].Type;
                }
            }

            return descriptionString;
        }
        /// <summary>
        /// Request return to main page
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void About_BackRequested(object sender, BackRequestedEventArgs e)
        {
            if (Frame.CanGoBack)
            {
                Frame.GoBack();
            }
            e.Handled = true;
        }
    }
}
