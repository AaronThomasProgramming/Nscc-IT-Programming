using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Logger;

namespace ChatLibrary
{
    /// <summary>
    /// create message for debug or .log
    /// </summary>
    public class ChatBoxLog :IChatLog
    {
        private ILoggable logger;
        public ChatBoxLog(ILoggable loggable)
        {
            this.logger = loggable;
        }

        public void MakeLog(string fileText)
        {
            logger.Log(DateTime.Now.ToString("MM/dd/yyyy h:mm:ss tt") + fileText);
        }
    }
}
