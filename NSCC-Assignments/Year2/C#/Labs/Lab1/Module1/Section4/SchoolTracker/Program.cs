using System;

namespace SchoolTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("How many students in your class?");
            var studentColumn = int.Parse(Console.ReadLine());

            int studentRow = 2;
            
            var StudentArray = new string[studentColumn, studentRow];

            int bob = 0;

            for (int i = 0; i < studentColumn; i++)
            {
                for (int j = 0; j < studentRow; j++)
                {
                    
                    if (bob == 0)
                    {
                        Console.Write("Student Name: [{0},{1}] : ", i, j);
                        StudentArray[i, j] = Console.ReadLine();
                        bob++;
                    }
                    else if (bob == 1)
                    {
                        Console.Write("Student Grade: [{0},{1}] : ", i, j);
                        StudentArray[i, j] = Console.ReadLine();
                        bob--;
                    }

                } 
            }

            int fEach = 0;
            foreach (string nG in StudentArray)

            {
                if (fEach == 0)
                {
                    Console.Write("Name ");
                    Console.Write(nG);
                    fEach++;
                }
                else if (fEach == 1)
                {
                    Console.Write(" Grade ");
                    Console.WriteLine(nG);
                    fEach--;
                }

            }

        }
    }
}
