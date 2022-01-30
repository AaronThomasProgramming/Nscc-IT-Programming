using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Threading;

namespace MP3
{
	/// <summary>
	/// Interaction logic for MainWindow.xaml
	/// </summary>
	public partial class MainWindow : Window
	{
		private bool mp3Playing = false;
		private bool moveSlider = false;

		TagLib.File currentFile;

		public MainWindow()
		{
			InitializeComponent();
            //timer controls
			DispatcherTimer timer = new DispatcherTimer();
			timer.Interval = TimeSpan.FromSeconds(1);
			timer.Tick += timer_Tick;
			timer.Start();
            editHidden();
            playingHidden();

        }
        /// <summary>
        /// show song progress in a timer
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
		private void timer_Tick(object sender, EventArgs e)
		{
			if ((mp3Player.Source != null) && (mp3Player.NaturalDuration.HasTimeSpan) && (!moveSlider))
			{
                //start timer at 0
				sliderProgress.Minimum = 0;
                //get maximum time from current song
				sliderProgress.Maximum = mp3Player.NaturalDuration.TimeSpan.TotalSeconds;
                //silder progress is equal to progress in mp3 song
				sliderProgress.Value = mp3Player.Position.TotalSeconds;
			}
		}
        /// <summary>
        /// open mp3 file
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
		private void Open_CanExecute(object sender, CanExecuteRoutedEventArgs e)
		{
			e.CanExecute = true;
		}

		private void Open_Executed(object sender, ExecutedRoutedEventArgs e)
		{
            //hide both user controls
            editHidden();
            playingHidden();
            OpenFileDialog openFileDialog = new OpenFileDialog();
			openFileDialog.Filter = "Media files (*.mp3;*.mpg;*.mpeg)|*.mp3;*.mpg;*.mpeg|All files (*.*)|*.*";
            //catch any invalid files
            try
            {
                if (openFileDialog.ShowDialog() == true)
                {
                    //Example of creating a TagLib file object, for accessing mp3 metadata
                    currentFile = TagLib.File.Create(openFileDialog.FileName);

                    //Set the source of the media player element.
                    mp3Player.Source = new Uri(openFileDialog.FileName);
                    //list of id3 tag
                    var title = currentFile.Tag.Title;
                    var artist = currentFile.Tag.Performers[0];
                    var album = currentFile.Tag.Album;
                    var year = currentFile.Tag.Year;
                    //id3 tags for edit menu
                    titleTextBox.Text = title.ToString();
                    artistTextBox.Text = artist.ToString();
                    albumTextBox.Text = album.ToString();
                    yearTextBox.Text = year.ToString();
                    //id3 tags for what is playing now
                    titleBox.Text = title;
                    artistBox.Text = artist;
                    albumYearBox.Text = album + " (" + year + ")";

                }
            }
            //catch should trigger if file doesnt have all id3 tags needed
            catch (Exception)
            {
                playingVisable();
                titleBox.Text = "Error has occured";
                artistBox.Text = "Use a different file";
                albumYearBox.Text = "Please try Again";
            }
		}
        /// <summary>
        /// save changes to id3 tags
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Save_CanExecute(object sender, CanExecuteRoutedEventArgs e)
        {
            e.CanExecute = (mp3Player != null) && (mp3Player.Source != null);
        }

        private void Save_Executed(object sender, ExecutedRoutedEventArgs e)
        {
            //current textbox values will overwrite the current file tags
            currentFile.Tag.Title = titleTextBox.Text;
            currentFile.Tag.Performers[0] = artistTextBox.Text;
            currentFile.Tag.Album = albumTextBox.Text;
            try
            {
                currentFile.Tag.Year = uint.Parse(yearTextBox.Text);
            }
            //if year not in unit get the current year from date time
            catch (FormatException)
            {
                DateTime now = DateTime.Today;
                currentFile.Tag.Year = uint.Parse(now.ToString("yyyy"));
            }
            //save and hide menu
            currentFile.Save();
            editHidden();
        }
        /// <summary>
        /// start listening to mp3 player
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Play_CanExecute(object sender, CanExecuteRoutedEventArgs e)
		{
			e.CanExecute = (mp3Player != null) && (mp3Player.Source != null);
		}

		private void Play_Executed(object sender, ExecutedRoutedEventArgs e)
		{
			mp3Player.Play();
			mp3Playing = true;
		}
        /// <summary>
        /// pause audio for mp3
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
		private void Pause_CanExecute(object sender, CanExecuteRoutedEventArgs e)
		{
			e.CanExecute = mp3Playing;
		}

		private void Pause_Executed(object sender, ExecutedRoutedEventArgs e)
		{
			mp3Player.Pause();
		}
        /// <summary>
        /// stop mp3 that is currently playing
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
		private void Stop_CanExecute(object sender, CanExecuteRoutedEventArgs e)
		{
			e.CanExecute = mp3Playing;
		}

		private void Stop_Executed(object sender, ExecutedRoutedEventArgs e)
		{
			mp3Player.Stop();
			mp3Playing = false;
		}
        /// <summary>
        /// move slider to another position in song length
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void sliderProgressStarted(object sender, DragStartedEventArgs e)
		{
			moveSlider = true;
		}
        /// <summary>
        /// current song progress is equal to slider value
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
		private void sliderProgressStopped(object sender, DragCompletedEventArgs e)
		{
			moveSlider = false;
			mp3Player.Position = TimeSpan.FromSeconds(sliderProgress.Value);
		}
        /// <summary>
        /// textBlock showing current playback status
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
		private void sliderProgressCurrentValue(object sender, RoutedPropertyChangedEventArgs<double> e)
		{ 
			textBlockSongProgress.Text = TimeSpan.FromSeconds(sliderProgress.Value).ToString(@"hh\:mm\:ss");
		}

        /// <summary>
        /// Hide playing now & show the edit menu
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Edit_CanExecute(object sender, CanExecuteRoutedEventArgs e)
        {
            e.CanExecute = true;
        }

        private void Edit_Executed(object sender, ExecutedRoutedEventArgs e)
        {
            //close mp3 to avoid crashing for editing tags
            mp3Player.Close();
            playingHidden();
            editVisable();
        }
        /// <summary>
        /// exit application
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Close_CanExecute(object sender, CanExecuteRoutedEventArgs e)
        {
            e.CanExecute = true;
        }

        private void Close_Executed(object sender, ExecutedRoutedEventArgs e)
        {
            //close app
            System.Windows.Application.Current.Shutdown();
        }

        private void Playing_CanExecute(object sender, CanExecuteRoutedEventArgs e)
        {
            e.CanExecute = true;
        }
        /// <summary>
        /// Hide the edit menu & show what is now playing
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Playing_Executed(object sender, ExecutedRoutedEventArgs e)
        {
            editHidden();
            playingVisable();
        }
        /// <summary>
        /// keep edit menu hidden
        /// </summary>
        private void editHidden()
        {
            editRectangle.Visibility = Visibility.Hidden;
            tagEditorLabel.Visibility = Visibility.Hidden;
            titleTextBox.Visibility = Visibility.Hidden;
            artistTextBox.Visibility = Visibility.Hidden;
            albumTextBox.Visibility = Visibility.Hidden;
            yearTextBox.Visibility = Visibility.Hidden;
            saveBtn.Visibility = Visibility.Hidden;
        }

        /// <summary>
        /// make edit menu visable
        /// </summary>
        private void editVisable()
        {
            editRectangle.Visibility = Visibility.Visible;
            tagEditorLabel.Visibility = Visibility.Visible;
            titleTextBox.Visibility = Visibility.Visible;
            artistTextBox.Visibility = Visibility.Visible;
            albumTextBox.Visibility = Visibility.Visible;
            yearTextBox.Visibility = Visibility.Visible;
            saveBtn.Visibility = Visibility.Visible;
        }
        /// <summary>
        /// hide now playing
        /// </summary>
        private void playingHidden()
        {
            playingRectangle.Visibility = Visibility.Hidden;
            titleBox.Visibility = Visibility.Hidden;
            artistBox.Visibility = Visibility.Hidden;
            albumYearBox.Visibility = Visibility.Hidden;
        }
        /// <summary>
        /// show what is now playing
        /// </summary>
        private void playingVisable()
        {
            playingRectangle.Visibility = Visibility.Visible;
            titleBox.Visibility = Visibility.Visible;
            artistBox.Visibility = Visibility.Visible;
            albumYearBox.Visibility = Visibility.Visible;
        }
    }
}

//images
/*https://stackoverflow.com/questions/25714085/wpf-import-image-as-resource*/
//slider
/*https://stackoverflow.com/questions/24108094/control-time-using-trackbar*/
//timer
/*https://www.wpf-tutorial.com/misc/dispatchertimer/*/
