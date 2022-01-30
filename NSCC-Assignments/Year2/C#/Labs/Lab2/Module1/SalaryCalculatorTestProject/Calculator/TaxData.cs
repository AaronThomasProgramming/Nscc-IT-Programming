using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SalaryCalculatorTestProject
{
    public class TaxData
    {
        public double ProvincialTaxWithheld { get; set; }
        public double FederalTaxWithheld { get; set; }
        public double DependentDeduction { get; set; }
        public double TotalWithheld { get; set; }
        public double TotalTakeHome { get; set; }

        //The IDE suggested this function to return taxData
        //on the SalaryCalculator.cs TacWithHeld function
        //line 53
/*        public static implicit operator double(TaxData v)
        {
            throw new NotImplementedException();
        }*/
    }


}
