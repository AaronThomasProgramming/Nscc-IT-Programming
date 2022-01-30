using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SalaryCalculatorTestProject
{
    public class TaxData
    {
        public double ProvincialTaxWithheld;
        public double FederalTaxWithheld;
        public double DependentDeduction;
        public double TotalWithheld;
        public double TotalTakeHome;

        public static implicit operator double(TaxData v)
        {
            throw new NotImplementedException();
        }
    }


}
