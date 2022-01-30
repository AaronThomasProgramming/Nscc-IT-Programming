using System;

namespace PassCode
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What is the pass code?");
            var Code = Console.ReadLine();

            var Password = "secret";

            if(Code == Password)
            {
                Console.WriteLine("Authenticated");

                Console.WriteLine("Pick a new password");
                var NewPassword = Console.ReadLine();

                Password = NewPassword;

                Console.WriteLine("Confirm password change");
                var ConfirmPassword = Console.ReadLine();


                if(Password == ConfirmPassword)
                {
                    Console.WriteLine("New password authenticated");
                }
                else
                {
                    Console.WriteLine("New password not authenticated");
                }

            }
            else 
            {
                Console.WriteLine("Not Authenticated");
            }
        }
    }
}
