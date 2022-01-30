using System;

namespace LoopCounting
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] arr = {"10", "9", "8", "7", "6", "5", "4", "3", "2", "1"};
            for (int x = 1; x <= 5; x++)
            {
                for (int i = 1; i <= 10; i++)
                {
                    Console.WriteLine(i);
                    if (i == 10)
                    {
                        Console.WriteLine(string.Join("\n",arr));
                
                    }
                }

            }
        }
    }
}
