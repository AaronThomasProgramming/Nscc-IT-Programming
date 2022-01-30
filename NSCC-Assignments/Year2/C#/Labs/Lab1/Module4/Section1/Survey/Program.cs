using System;

namespace Survey
{
    enum Month
    {
        Jan = 1,
        Feb = 2,
        Mar = 3,
        Apr = 4,
        May = 5,
        June = 6,
        July = 7,
        Aug = 8,
        Sept = 9,
        Oct = 10,
        Nov = 11,
        Dec = 12,
    }
    class Program
    {
        static void Main(string[] args)
        {

            var newPerson = new PersonalInfo();

            PersonalInfo personalInfo = new PersonalInfo();

            Console.WriteLine("What is your name?");
            personalInfo.Name = TryAnswer();

            Console.WriteLine("What is your age?");
            personalInfo.Age = int.Parse(TryIntAnswer());

            Console.WriteLine("Birth Month (type the corresponding number): " +
                " \n 1: Jan \n 2: Feb \n 3: Mar \n 4: Apr \n 5: May \n 6: June \n 7: July \n 8: Aug" +
                " \n 9: Sept \n 10: Oct \n 11: Nov \n 12: Dec");
            personalInfo.Month = (Month) int.Parse(TryIntAnswer());
            Console.WriteLine("What day were you born?");
            personalInfo.Day = int.Parse(TryIntAnswer());

            Console.WriteLine("Your name is: {0}", personalInfo.Name);
            Console.WriteLine("Your age is: {0}", personalInfo.Age);
            Console.WriteLine("Your birth month is: {0}", personalInfo.Month);
            Console.WriteLine("The day you were born is: {0}", personalInfo.Day);

            switch (personalInfo.Month)
            {
                case Month.Jan: //jan
                    if (personalInfo.Day >= 20)
                    {
                        Console.WriteLine("you are an Aquarius.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Capricorn.");
                    }
                    break;
                case Month.Feb: //feb
                    if (personalInfo.Day >= 19)
                    {
                        Console.WriteLine("you are a Pisces.");
                    }
                    else
                    {
                        Console.WriteLine("you are an Aquarius.");
                    }
                    break;
                case Month.Mar: //mar
                    if (personalInfo.Day >= 21)
                    {
                        Console.WriteLine("you are an Aries.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Pisces.");
                    }
                    break;
                case Month.Apr: //apr
                    if (personalInfo.Day >= 20)
                    {
                        Console.WriteLine("you are a Taurus.");
                    }
                    else
                    {
                        Console.WriteLine("you are an Aries.");
                    }
                    break;
                case Month.May: //may
                    if (personalInfo.Day >= 21)
                    {
                        Console.WriteLine("you are a Gemini.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Taurus.");
                    }
                    break;
                case Month.June: //june
                    if (personalInfo.Day >= 22)
                    {
                        Console.WriteLine("you are a Cancer.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Gemini.");
                    }
                    break;
                case Month.July: //july
                    if (personalInfo.Day >= 23)
                    {
                        Console.WriteLine("you are a Leo.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Cancer.");
                    }
                    break;
                case Month.Aug: //aug
                    if (personalInfo.Day >= 23)
                    {
                        Console.WriteLine("you are a Virgo.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Leo.");
                    }
                    break;
                case Month.Sept: //sept
                    if (personalInfo.Day >= 23)
                    {
                        Console.WriteLine("you are a Libra.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Virgo.");
                    }
                    break;
                case Month.Oct: //oct
                    if (personalInfo.Day >= 24)
                    {
                        Console.WriteLine("you are a Scorpio.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Libra.");
                    }
                    break;
                case Month.Nov: //nov
                    if (personalInfo.Day >= 23)
                    {
                        Console.WriteLine("you are a Sagittarius.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Scorpio.");
                    }
                    break;
                case Month.Dec: //dec
                    if (personalInfo.Day >= 22)
                    {
                        Console.WriteLine("you are a Capricorn.");
                    }
                    else
                    {
                        Console.WriteLine("you are a Sagittarius.");
                    }
                    break;

            }

        }

        static string TryAnswer()
        {
            var question = Console.ReadLine();
            if (question == "")
            {
                Console.WriteLine("You didn't type anything, please try again:");
                return Console.ReadLine();
            }
            return question;
        }
        //int validation
        static string TryIntAnswer()
        {
            int num;
            var question = Console.ReadLine();
            if (int.TryParse(question, out num))
            {
                return question;
            }
            else
            {
                Console.WriteLine("This is not a number, please try again:");
                return Console.ReadLine();
            }

        }
    }
    //private variables
    class PersonalInfo
    {
        private string name;
        private int age;
        private int month;
        private int day;

        public string Name { get; set; }
        public int Age { get; set; }
        public Month Month { get; set; }
        public int Day { get; set; }

        //getters
        /*        public string GetName()
                {
                    return Name;
                }*/
/*        public int GetAge()
        {
            return Age;
        }
        public int GetMonth()
        {
            return Month;
        }
        public int GetDay()
        {
            return Day;
        }
        //setters
*//*        public void SetName(string yourName)
        {
            Name = yourName;

        }*//*
        public void SetAge(int yourAge)
        {
            Age = yourAge;
        }
        public void SetMonth(int yourMonth)
        {
            Month = yourMonth;
        }
        public void SetDay(int yourDay)
        {
            Day = yourDay;
        }*/

    }
}
