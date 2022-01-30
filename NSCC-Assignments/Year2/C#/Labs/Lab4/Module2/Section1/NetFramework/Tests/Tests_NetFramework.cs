using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Diagnostics;

namespace Tests
{
    [TestClass]
    public class Tests_NetFramework
    {
        [TestMethod]
        public void Test_001()
        {
            var numbers = new List<int> { 1, 3, 5, 7, 11 };

            Assert.IsTrue(numbers is IEnumerable<int>);

            var e = numbers.GetEnumerator();
            Assert.IsTrue(e is IEnumerator<int>);

            bool hasData = e.MoveNext();
            Assert.IsTrue(hasData);

            int i = e.Current;
            Assert.IsTrue(i == 1);
        }
        [TestMethod]
        public void Test_002()
        {
            var numbers = new List<int> { 1, 3, 5, 7, 11 };

            Assert.IsTrue(numbers is IEnumerable<int>);

            var e = numbers.GetEnumerator();
            Assert.IsTrue(e is IEnumerator<int>);

            while (e.MoveNext())
            {
                int i = e.Current;
                Debug.WriteLine($"{nameof(Test_002)}::{nameof(i)}::{i}");
            }
        }
        [TestMethod]
        public void Test_003()
        {
            var numbers = new List<int> { 1, 3, 5, 7, 11 };

            Assert.IsTrue(numbers is IEnumerable<int>);

            foreach (var i in numbers)
            {
                Debug.WriteLine($"{nameof(Test_003)}::{nameof(i)}::{i}");
            }
        }
        [TestMethod]
        public void Test_004()
        {
            var a = new int[] { 1, 3, 5, 7, 11 };
            Assert.IsTrue(a is IEnumerable<int>);
            Assert.IsTrue(a is IList<int>);

            var l = new List<int>() { 1, 3, 5, 7, 11 };
            Assert.IsTrue(l is IEnumerable<int>);
            Assert.IsTrue(l is IList<int>);
        }
        [TestMethod]
        public void Test_005()
        {
            var numbers = new List<string> { "1", "3", "5", "7", "11" };

            Assert.IsTrue(numbers is IEnumerable<string>);

            var e = numbers.GetEnumerator();
            Assert.IsTrue(e is IEnumerator<string>);

            while (e.MoveNext())
            {
                string i = e.Current;
                Debug.WriteLine($"{nameof(Test_005)}::{nameof(i)}::{i}");
            }
        }
    }
}
