using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using ChatLibrary;
using System.IO;
using System.Net;
using System.Threading;

namespace ChatLibrary
{
    public class Executor
    {

        //event for informing server listeners of incoming messages
        public static event ServerChatEventHandler ServerText;
        //event for informing client listeners of incoming messages
        public static event ClientChatEventHandler ClientText;
        //event for informing client sent text
        public static event ProgressFinishedEventHandler ProgressFinished;

        public static event ProgressCustomEventHandler ProgressCustom;

        /// <summary>
        /// send text to server
        /// </summary>
        public static void SendText()
        {
            string clientMessages = String.Empty;

            if (ClientText != null)
            {
                ClientText(clientMessages);
            }
            //Alert client listener of the end of the task
            if (ProgressFinished != null)
            {
                ProgressFinished();
            }
            


        }
        /// <summary>
        /// Revieve text from server
        /// </summary>
        public static void RecieveText()
        {
            string serverMessages = String.Empty;

            if (ProgressCustom != null)
            {
                ProgressCustom(null, new CustomEventArgs(serverMessages));

            }


        }
        /// <summary>
        /// Create logging txt file
        /// </summary>
        public static string LoggingFile(string fileName)
        {
            string logFileDate = DateTime.Now.ToString("MM/dd/yyyy h:mm:ss tt");
            string dateTime = logFileDate;
            //replace dateTime characters to for valid name
            logFileDate = logFileDate.Replace("-", "_").Replace(" ", "_").Replace(":", "_");
            fileName = @"C:\Temp\" + logFileDate + ".txt";
         
            FileStream stream = null;

            stream = new FileStream(fileName, FileMode.OpenOrCreate);
            // Create a StreamWriter from FileStream  
            using (StreamWriter writer = new StreamWriter(stream, Encoding.UTF8))
            {
                writer.WriteLine(dateTime + " - Client connected to server at 127.0.0.1 port 13000");

            }

            return fileName;

        }


        /// <summary>
        /// write to logging file
        /// </summary>
        /// <param name="filePath"></param>
        /// <param name="fileText"></param>
        public static void LoggingText(string filePath, string fileText)
        {     
            File.AppendAllText(filePath, DateTime.Now.ToString("MM/dd/yyyy h:mm:ss tt") + fileText + LineBreak());
        }
        /// <summary>
        /// line breaks for conversation textbox and logger txt 
        /// </summary>
        /// <returns></returns>
        public static string LineBreak()
        {
            string lineBreak = Environment.NewLine;
            return lineBreak;
        }

    }
}
