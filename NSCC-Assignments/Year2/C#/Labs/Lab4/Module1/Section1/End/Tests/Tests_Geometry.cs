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
        }
        [TestMethod]
        public void Tests_002_Geometry()
        {
            Square s = new Square();
            s.Width = 10;
            Assert.AreEqual(100u, s.Area);

            Rectangle r = new Rectangle();
            r.Width = 20;
            r.Height = 30;
            Assert.AreEqual(600u, r.Area);
        }
    }
    public class Polygon
    {
        // arbitrary number of edges
        public virtual uint Area { get; }
    }
    public class Rectangle : Polygon
    {
        public virtual uint Width { get; set; }
        uint bob;
        public uint Height { get; set; }

        public override uint Area { get { return Width * Height; } }
    }
    public class Square : Polygon// : Rectangle
    {
        public uint Width { get; set; } // new or override or ... 
        public override uint Area { get { return Width * Width; } }
    }
}
