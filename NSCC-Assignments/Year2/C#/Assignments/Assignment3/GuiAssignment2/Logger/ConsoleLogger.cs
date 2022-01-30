using System.Diagnostics;

namespace Logger
{
    public class ConsoleLogger : ILoggable
    {
        /// <summary>
        /// write to debug
        /// </summary>
        /// <param name="message"></param>
        public void Log(string message)
        {
            Debug.WriteLine(message);
        }
    }
}
