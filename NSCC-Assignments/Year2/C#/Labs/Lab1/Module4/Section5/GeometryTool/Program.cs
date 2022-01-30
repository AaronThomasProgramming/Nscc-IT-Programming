using System;

namespace GeometryTool
{
    class Program
    {
        static void Main(string[] args)
        {
            var square = new Square() { Width = 2 };
            var triangle = new Triangle() { Height = 5, Base = 3 };
            var circle = new Circle() { pie = 3.14, radius = 2.2 };

            square.Display();
            triangle.Display();
            circle.Display();
        }
    }

    abstract class Shape
    {
        public abstract double GetArea();

        public void Display()
        {
            Console.WriteLine("The area is {0:.#}", GetArea());
        }
    }
    
    class Square : Shape 
    {
        public int Width;

        public override double GetArea()
        {
            return Width * Width;
        }
    }
    class Triangle : Shape
    {
        public int Base;
        public int Height;

        public override double GetArea()
        {
            return Base * Height / 2;
        }
    }
    class Circle : Shape
    {
        public double radius;
        public double pie = 3.14;

        public override double GetArea()
        {
            return pie * (radius * radius);
        }

    }
        
        
}
