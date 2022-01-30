using System;
using System.Collections.Generic;
using System.Text;

namespace Survey
{
    class Marketing : Stats
    {
        public void Listen()
        {
            Program.Posted += Done;
        }

        private void HasPosted()
        {
            
        }

        void Done()
        {
            Console.WriteLine("Thank you for completing the survey. " +
                "You are now subscribed to ten of our newsletters.");
        }
    }
}
