using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatLibrary
{
    public class CustomEventArgs : EventArgs
    {
        
        public CustomEventArgs(string text)
        {
            this.Text = text;
        }
        public string Text { get; set; }
    }
}
