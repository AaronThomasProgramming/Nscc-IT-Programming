using SchoolTracker;
using System;
using System.Collections.Generic;
using System.Text;

namespace Util
{
    class MyCustomException : FormatException
    {
        //class constructor
        public MyCustomException(string msg) : base(msg)
        {
            //super(msg) the java way
        }
    }
    class Console
    {
        static public string Ask(string question)
        {
            System.Console.Write(question);
            return System.Console.ReadLine();
        }

        static public int AskInt(string question)
        {
            try
            {
                System.Console.Write(question);
                return int.Parse(System.Console.ReadLine());
            }
            catch (Exception)
            {
                throw new MyCustomException("Custom Exception: Input was not a number");
            }
        }
    }
}
