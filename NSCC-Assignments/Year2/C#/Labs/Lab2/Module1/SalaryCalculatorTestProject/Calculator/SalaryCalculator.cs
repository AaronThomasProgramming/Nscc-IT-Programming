using SalaryCalculatorTestProject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    /*    public class Class1*/
    public class SalaryCalculator
    {
        const int HoursInYear = 2080;
        public decimal GetAnnualSalary(decimal hourlyWage)
        {
            /*            const int HoursInYear = 2080;*/
            if (hourlyWage <= 0)
            {
                throw new InvalidOperationException("Hourly wage must be greater than zero.");
            }
            decimal annualSalary = hourlyWage * HoursInYear;
            return annualSalary;
        }

        public decimal GetHourlyWage(int annualSalary)
        {
            if (annualSalary <= 0)
            {
                throw new InvalidOperationException("Yearly salary must be greater than zero.");
            }
            return annualSalary / HoursInYear;
        }

        public TaxData TaxWithheld(double weeklySalary, int numDependents)
        {
            if (numDependents < 0)
            {
                throw new InvalidOperationException("Number dependents cannot be negative.");
            }
            else if (weeklySalary <= 0)
            {
                throw new InvalidOperationException("Weekly salary must be greater than zero.");
            }

            /*            var taxData = new TaxData();
                        {
                            taxData.ProvincialTaxWithheld = weeklySalary * 0.06;
                            taxData.FederalTaxWithheld = weeklySalary / 25;
                            taxData.DependentDeduction = weeklySalary * 0.02;
                            taxData.TotalWithheld = (weeklySalary * 0.06) + (weeklySalary / 25) + (weeklySalary * 0.02);
                            taxData.TotalTakeHome = weeklySalary - (weeklySalary * 0.06) + (weeklySalary / 25) + (weeklySalary * 0.02);
                            return taxData;

                        };*/

            var taxData = new TaxData();

            taxData.ProvincialTaxWithheld = weeklySalary * 0.06;
            taxData. ProvincialTaxWithheld = weeklySalary * 0.06;
            taxData.FederalTaxWithheld = weeklySalary / 25;
            taxData.DependentDeduction = weeklySalary * 0.02;
            taxData.TotalWithheld = (weeklySalary * 0.06) + (weeklySalary / 25) + (weeklySalary * 0.02);
            taxData.TotalTakeHome = weeklySalary - (weeklySalary * 0.06) + (weeklySalary / 25) + (weeklySalary * 0.02);
            return taxData;
        }
    }



}

