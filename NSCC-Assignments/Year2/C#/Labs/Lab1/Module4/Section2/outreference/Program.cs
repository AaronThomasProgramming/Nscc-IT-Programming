using System;

namespace outreference
{
    class Program
    {
        static void Main(string[] args)
        {

            bool IsDouble;

            var adding = true;
            while(adding) {
                try
                {
                    string question;
                    Console.WriteLine("Enter a string or double");
                    TryDouble(out IsDouble, out question);
                    Console.WriteLine("Is the string a double: {0}", IsDouble);
                    Console.WriteLine("Test value is: {0} ", question);
                    Console.WriteLine("Add another? y/n");

                    if (Console.ReadLine() != "y")
                        adding = false;
                }
                catch (Exception)
                {
                    Console.WriteLine("Error adding student, Please try again");
                }
            }
        }

        public static void TryDouble(out bool IsDouble, out string question)
        {
            IsDouble = true;
            double num;
            question = Console.ReadLine();
            if (double.TryParse(question, out num))
            {
                IsDouble = true;
            }
            else
            {
                IsDouble = false;
            }
        }
    }
}
