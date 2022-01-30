using Moq;
using System;
using System.Collections.Generic;

namespace Polymorphism
{

    public class Employee : IWorker
    {
        public string CalculateWeeklySalary(int weeklyHours, int wage)
        {
            var salary = 40 * wage;
            string result = $"This ANGRY EMPLOYEE worked {weeklyHours} hrs. " +
                            $"Paid for 40 hrs at $ {wage}" +
                            $"/hr = ${salary}";
            Console.WriteLine("\n" + result + " \n");
            Console.WriteLine("---------------------------------------------\n");
            return result;
        }

    }

    public class Contractor : IWorker
    {
        public string CalculateWeeklySalary(int weeklyHours, int wage)
        {
            var salary = weeklyHours * wage;
            string result = $"This HAPPY CONTRACTOR worked {weeklyHours} hrs. " +
                            $"Paid for {weeklyHours} hrs at $ {wage}" +
                            $"/hr = ${salary} ";
            Console.WriteLine("\n" + result + " \n");
            return result;
        }

    }



    public class Program
    {
        private static void Main(string[] args)
        {
            const int hours = 55, wage = 70;

            /*            List<IWorker> allWorkers = new List<IWorker>();
                        allWorkers.Add(new Employee());
                        allWorkers.Add(new Contractor());
                        foreach(var e in allWorkers)
                        {
                            e.CalculateWeeklySalary(hours, wage);
                        }*/

            List<IWorker> workers = Utils.GetAllWorkers();

            var mock = new Mock<Utils>();
            mock.Setup(m => m.GetMockEmployees()).Returns(() =>
             new List<Employee> { new Contractor(), new Employee() });

            List<Employee> employees = mock.Object.GetMockEmployees();

            foreach (var e in employees)
            {
                e.CalculateWeeklySalary(hours, wage);
            }

            List<IWorker> workers = Utils.GetMockWorkers();
        }        
    }

    public static List<IWorker> GetAllWorkers()
    {
        var someEmployee = new Employee();
        var someContractor = new Contractor();
        var allWorkers = new List<IWorker> { someEmployee, someContractor };
        return allWorkers;
    }

    public class Utils
    {
        public static List<Employee> GetEmployees()
        {
            var someEmployee = new Employee();
            var someContractor = new Contractor();
            var everyone = new List<Employee> { someEmployee, someContractor };
            return everyone;
        }

/*        public virtual List<Employee> GetMockEmployees()
        {
            throw new NotImplementedException();
        }*/

        public virtual List<IWorker> GetMockWorkers()
        {
            throw new NotImplementedException();
        }
/*
        public static string GetWorkers()
        {
            List<IWorker> allWorkers = new List<IWorker>();
            allWorkers.Add(new Employee());
            allWorkers.Add(new Contractor());
        return allWorkers;
        }*/
    public static List<Employee> GetAllWorkers()
    {
        var someEmployee = new Employee();
        var someContractor = new Contractor();
        var allWorkers = new List<IWorker> { someEmployee, someContractor };
        return allWorkers;
    }
}
}
