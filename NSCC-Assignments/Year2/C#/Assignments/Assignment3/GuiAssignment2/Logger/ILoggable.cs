using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logger
{
    /// <summary>
    /// interface for .log and write to debug 
    /// </summary>
    public interface ILoggable
    {
        void Log(string message);
    }
}
