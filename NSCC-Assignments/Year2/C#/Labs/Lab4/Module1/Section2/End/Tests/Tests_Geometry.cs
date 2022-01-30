using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests
{
    [TestClass]
    public class Test_Geometry
    {
        [TestMethod]
        public void Tests_001_Geometry()
        {
            Square s = new Square();
            s.Width = 10;

            Rectangle r = new Rectangle();
            r.Width = 20;
            r.Height = 30;

            //Rectangle rs = new Square();
            //rs.Width = 50;
        }
    }

    public class Rectangle
    {
        public uint Width { get; set; }
        public uint Height { get; set; }
    }
    public class Square : Rectangle
    {
        //public uint Width { get;set;} // new or override or ... ?
    }
}
