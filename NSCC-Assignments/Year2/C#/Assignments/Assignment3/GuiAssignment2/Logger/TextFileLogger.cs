using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logger
{
    public class TextFileLogger : ILoggable
    {
        private string filePath = "Log_" + DateTime.Now.ToString("yyyyMMdd") + ".log";
        /// <summary>
        /// Log to the text file
        /// </summary>
        /// <param name="message"></param>
        public void Log(string message)
        {
            if (!File.Exists(filePath))
            {
                using (StreamWriter sw = File.CreateText(filePath))
                {
                    sw.WriteLine(message);
                }

            }
            else
            {
                using (StreamWriter sw = File.AppendText(filePath))
                {
                    sw.WriteLine(message);
                }
            }
        }
    }
}
