using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsSolution
{
    class BalanceArgs : EventArgs
    {
        public string balance;

/*        public void balance(decimal amount)
        {
            if (amount < 0)
                Console.WriteLine("Balance is negative");
        }*/
    }
}
