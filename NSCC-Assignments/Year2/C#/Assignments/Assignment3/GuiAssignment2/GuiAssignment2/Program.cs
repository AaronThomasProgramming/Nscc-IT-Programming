using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using Logger;
using Unity;
using Castle.MicroKernel.Registration;
using Castle.Windsor;
using Castle;
using ChatLibrary;

namespace GuiAssignment2
{
    internal class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        private static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            //Unity container
            /*            UnityContainer container = new UnityContainer();
                        //container.RegisterType<ILoggable, ConsoleLogger>();
                        container.RegisterType<ILoggable, TextFileLogger>();
                        container.RegisterType<IChatLog, ChatBoxLog>();*/

            //Castle Windsor container
            var container = new WindsorContainer();
            container.Register(Classes.FromThisAssembly().BasedOn<Form>());
            container.Register(Component.For<ILoggable>().ImplementedBy<ConsoleLogger>());
            //container.Register(Component.For<ILoggable>().ImplementedBy<TextFileLogger>());
            container.Register(Component.For<IChatLog>().ImplementedBy<ChatBoxLog>());

            Application.Run(container.Resolve<ClientForm>());
        }
    }
}
