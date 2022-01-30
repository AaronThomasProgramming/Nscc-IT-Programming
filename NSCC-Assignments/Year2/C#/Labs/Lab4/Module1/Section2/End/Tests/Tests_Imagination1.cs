using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests
{
    [TestClass]
    public class Tests_Imagination1
    {
        [TestMethod]
        public void Test_Imagination_01()
        {
            var persian = new Carpet();
            persian.Sweep();
        }
        public class Carpet : VirtualRealityObject, ICleanable, IExhibition
        {
            public uint Length { get; set; }
            public uint Width { get; set; }
            public string Pattern { get; set; }
            public string Origin { get; set; }

            public void Exhibit()
            {
                throw new System.NotImplementedException();
            }

            public void Sweep() { }
        }
        public class Art
        {
            public decimal Valuation { get; set; }

            public void Exhibit() { }
        }
        public class VirtualRealityObject
        {
            // many supporting members go here...
        }
        public interface ICleanable
        {
            void Sweep();
        }
        public interface IExhibition
        {
            void Exhibit();
        }
    }
}