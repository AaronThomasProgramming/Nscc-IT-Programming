using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsSolution
{
    public delegate void BalanceEventHandler(decimal theValue);
    class PiggyBank
    {
        private decimal m_bankBalance;
        public event BalanceEventHandler balanceChanged;
        public System.EventHandler<BalanceArgs> negBalanceChanged;

        public decimal theBalance
        {
            set
            {
                m_bankBalance = value;
                balanceChanged(value);
                this.negBalanceChanged(this, new BalanceArgs() { balance = "Your balance is negative" });

            }
            get
            {
                return m_bankBalance;
            }
        }
    }
}
