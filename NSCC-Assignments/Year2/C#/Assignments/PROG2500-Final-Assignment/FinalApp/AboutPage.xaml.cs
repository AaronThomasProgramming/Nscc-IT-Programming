using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Core;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=234238

namespace FinalApp
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class AboutPage : Page
    {
        public AboutPage()
        {
            this.InitializeComponent();
            AboutInformation();
        }
        /// <summary>
        /// Controls for back button
        /// </summary>
        /// <param name="e"></param>
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            //Display back button
            SystemNavigationManager.GetForCurrentView().AppViewBackButtonVisibility =
            AppViewBackButtonVisibility.Visible;

            //Call About_BackRequested function to navigate to Main Page
            SystemNavigationManager.GetForCurrentView().BackRequested += About_BackRequested;
        }

        /// <summary>
        /// return to MainPage from About Page
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
        /// <summary>
        /// Displaying information about the app such as the authors
        /// </summary>
        private void AboutInformation()
        {
            AboutPad.Text = "C# Final Assignment - PokeDex\nAuthors: Cole Rhyno-Wiedemann, Kingsly Cooper," +
                " Max Muir, Aaron Thomas\n\nAssembly Name: FinalApp\nDefault Namespace: FinalApp \n\nTarget:" +
                " Universal Windows\nTarget Version: Windows 10, version 1903 \nMinimum Version: Windows 10, version 1809";
        }
    }
}
