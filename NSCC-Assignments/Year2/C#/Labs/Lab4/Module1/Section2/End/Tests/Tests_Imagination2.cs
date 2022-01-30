using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace Tests
{
    [TestClass]
    public class Tests_Imagination2
    {
        [TestMethod]
        public void Test_Imagination_02()
        {
            var sweeper = new Sweepable();
            var gallery = new ArtExhibit();
            var add = new AddNum();
            var printString = new OutputString();

            var wallart = new Carpet(sweeper, gallery, add, printString);
            /*var wallart = new Carpet(sweeper, gallery);*/

            foreach (var action in wallart.Actions)
            {
                action.PerformAction();
            }
        }
    }
    public class Carpet
    {
        public List<IAction> Actions = new List<IAction>();

        public Carpet(params IAction[] possibleActions)
        {
            this.Actions.AddRange(possibleActions);
        }
    }
    public interface IAction
    {
        void PerformAction();
    }
    public class Sweepable : IAction
    {
        public void Sweep()
        {
            // TODO
            System.Console.WriteLine("Hoovering the carpet!");
        }
        public void PerformAction()
        {
            this.Sweep();
        }
    }
    public class ArtExhibit : IAction
    {
        public void Exhibit()
        {
            // TODO
        }
        public void PerformAction()
        {
            this.Exhibit();
        }
    }

    public class AddNum : IAction
    {
        public void Add()
        {
            System.Console.WriteLine(2 + 2);
        }
        public void PerformAction()
        {
            this.Add();
        }
    }

    public class OutputString : IAction
    {
        public void String()
        {
            System.Console.WriteLine("This is a string");
        }
        public void PerformAction()
        {
            this.String();
        }
    }
}