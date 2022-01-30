using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolTracker
{
    interface IGraduate
    {
        void graduate();
    }
    class Graduate
    {
        List<IGraduate> grads = new List<IGraduate>();

        public Graduate()
        {
            grads.Add(new Student());
        }
        public void AllGrads()
        {
            foreach (var grad in grads)
            {
                grad.graduate();
            }
        }
    }
/*    class PayRoll
    {


        List<IPayee> payees = new List<IPayee>();

        public PayRoll()
        {
            payees.Add(new Teacher());
            payees.Add(new Teacher());
            payees.Add(new Principal());
        }

        public void PayAll()
        {
            foreach (var payee in payees)
            {
                payee.Pay();
            }
        }
    }*/
}
