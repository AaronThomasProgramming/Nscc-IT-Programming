﻿using System;

namespace Survey
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What is your name?");
            var name = Console.ReadLine();

            Console.WriteLine("What is your age?");
            var age = Console.ReadLine();

            Console.WriteLine("What month were you born in?");
            var month = Console.ReadLine();

            //add two more questions
            Console.WriteLine("What is your favourite food?");
            var food = Console.ReadLine();

            Console.WriteLine("What is your favourite movie?");
            var movie = Console.ReadLine();

            Console.WriteLine("Your name is: {0}", name);
            Console.WriteLine("Your age is: {0}", age);
            Console.WriteLine("Your birth month is: {0}", month);

            Console.WriteLine("Your favorite food is: {0}", food);
            Console.WriteLine("Your favorite movie is: {0}", movie);
        }
    }
}
