using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using Windows.UI.Xaml.Media.Imaging;
using FinalApp.ViewModels;
using PokemonTcgSdk.Models;

namespace FinalApp
{
    public sealed partial class MainPage : Page
    {
        public PokemonViewModel PMViewModel { get; set; }

        public MainPage()
        {
            this.InitializeComponent();
            this.PMViewModel = new PokemonViewModel();
            //get pkmn imgae for view model
            PMViewModel.ImageChanged += PMViewModel_ImageChanged;
        }

        /// <summary>
        /// Get images for PKMN by using event because setting source 
        /// on image element didn't work.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void PMViewModel_ImageChanged(object sender, EventArgs e)
        {
            try
            {
                PokemonImage.Source = new BitmapImage(new Uri(PMViewModel.PokemonImage));
            }
            catch (UriFormatException ex) {}
        }
        /// <summary>
        /// Navigate to Discription
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void DescriptionButton_Click(object sender, RoutedEventArgs e)
        {
            //bring data of selected pokemon to description
            Frame.Navigate(typeof(Description), PMViewModel.SelectedPokemon);
        }
        /// <summary>
        /// Navigate to the AboutPage
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void About_Click(object sender, RoutedEventArgs e)
        {
            Frame.Navigate(typeof(AboutPage));
        }
    }
}
