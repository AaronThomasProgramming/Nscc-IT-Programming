using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Sockets;
using System.Windows.Forms;
using ChatLibrary;
using System.IO;
using System.Net;
using System.Threading;
using CustomEventArgs = ChatLibrary.CustomEventArgs;
using System.Text.RegularExpressions;
using Logger;

namespace GuiAssignment2
{

    public partial class ClientForm : Form
    {
        private TcpClient client;
        public StreamWriter STW;
        public StreamReader STR;
        public string message;
        private NetworkStream stream;
        Thread serverThread;
        Thread clientThread;
        //dateTime for file name 
        string logFileName = DateTime.Now.ToString("MM/dd/yyyy h:mm:ss tt");

        private IChatLog chatLog;

        /// <summary>
        /// initialize events and component
        /// </summary>
        public ClientForm(IChatLog chatLog)
        {
            this.chatLog = chatLog;
            
            Executor.ProgressCustom += new ChatLibrary.ProgressCustomEventHandler(Executor_ServerText);
            Executor.ClientText += new ChatLibrary.ClientChatEventHandler(Executor_ClientText);
            InitializeComponent();

        }
        /// <summary>
        /// Connect to server
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ConnectToolStripMenuItem_Click(object sender, EventArgs e)
        {
            

            System.Net.IPAddress ipAddress = System.Net.IPAddress.Parse("127.0.0.1");
            client = new TcpClient();
            IPEndPoint iPEnd = new IPEndPoint(IPAddress.Parse("127.0.0.1"), 13000);
            try
            {
                client.Connect(iPEnd);
                if (client.Connected)
                {
                    //call create logging txt file from library
                    //logFileName = Executor.LoggingFile(logFileName);
                    chatLog.MakeLog(" Client Connected");
                    ClientServerOuputTextBox.AppendText("Client Connected " + Executor.LineBreak());
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString());
            }
        }

        private void ClientForm_Load(object sender, EventArgs e)
        {

        }
        /// <summary>
        /// Close threads and quit gui from exit button
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ClientForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            if(clientThread != null & serverThread != null)
            {
                clientThread.Join();
                serverThread.Join();
            }
        }
        /// <summary>
        /// Close threads and quit gui from drop down list
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ExitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (clientThread != null & serverThread != null)
            {
                clientThread.Join();
                serverThread.Join();
                this.Close();
            }
            this.Close();
        }
        /// <summary>
        /// Disconnect from server
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void DisconnectToolStripMenuItem_Click(object sender, EventArgs e)
        {

            if (client.Connected)
            {
                message = "Client has left";
                stream = client.GetStream();
                Byte[] data = System.Text.Encoding.ASCII.GetBytes(message);

                // Get a client stream for reading and writing.

                stream = client.GetStream();

                // Send the message to the connected TcpServer.
                stream.Write(data, 0, data.Length);
                stream.Close();
                client.Close();
                chatLog.MakeLog(" - Client Disconnected. Chat session ended");
                //Executor.LoggingText(logFileName, " - Client Disconnected. Chat session ended " + Executor.LineBreak());
                ClientServerOuputTextBox.AppendText("Client Disconnected" + Executor.LineBreak());
            }

        }
        /// <summary>
        /// send message to server and output to clientServerTextBox
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void SendButton_Click(object sender, EventArgs e)
        {
            //thread(delegate)
            clientThread = new Thread(Executor.SendText);
            clientThread.Name = "CLient Thread";
            clientThread.Start();
            SendButton.Enabled = false;
        }


        /// <summary>
        /// empty function
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ClientInputTextBox_TextChanged(object sender, EventArgs e)
        {

        }

        /// <summary>
        /// Thread for recieving messages from server
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ClientServerOuputTextBox_TextChanged(object sender, EventArgs e)
        {
            //
            serverThread = new Thread(Executor.RecieveText);
            serverThread.Name = "Server Thread";
            
            serverThread.Start();
            
        }
        /// <summary>
        /// event listener for client textbox in chatlib or executor
        /// </summary>
        /// <param name="clientText"></param>
        private void Executor_ClientText(string clientText)
        {
            clientText = ClientInputTextBox.Text;
            stream = client.GetStream();
            Byte[] data = System.Text.Encoding.ASCII.GetBytes(clientText);

            // Get a client stream for reading and writing.

            stream = client.GetStream();

            // Send the message to the connected TcpServer.
            stream.Write(data, 0, data.Length);

            if (ClientServerOuputTextBox.InvokeRequired)
            {
                MethodInvoker invoker = new MethodInvoker(delegate () {
                    //Executor.LoggingText(logFileName, " - Client: " + ClientInputTextBox.Text);
                    chatLog.MakeLog(" - Client: " + ClientInputTextBox.Text);
                    ClientServerOuputTextBox.AppendText("Client: " + ClientInputTextBox.Text + Executor.LineBreak());
                    ClientInputTextBox.Clear();
                    
                });
                ClientServerOuputTextBox.Invoke(invoker);
            }
            else
            {
                //Executor.LoggingText(logFileName, " - Client: " + ClientInputTextBox.Text);
                chatLog.MakeLog(" - Client: " + ClientInputTextBox.Text);
                ClientServerOuputTextBox.AppendText("Client: " + ClientInputTextBox.Text + Executor.LineBreak());
                ClientInputTextBox.Clear();
                
            }
            //Responding to the end of the task.
            if(SendButton.Enabled == false)
            {
                if (SendButton.InvokeRequired)
                {
                    MethodInvoker invoker = new MethodInvoker(delegate () {

                        SendButton.Enabled = true;
                    });
                    SendButton.Invoke(invoker);
                }
                else
                {
                    SendButton.Enabled = true;
                }
            }
        }
        /// <summary>
        /// event listener for server textbox in chatlib or executor
        /// </summary>
        /// <param name="serverText"></param>
        /*private void Executor_ServerText(object sender, CustomEventArgs e)*/
        private void Executor_ServerText(object sender, CustomEventArgs e)
        {
            while (client.Connected)
            {

                Byte[] responseByte = new Byte[256];
                stream = client.GetStream();
                //String to store the response ASCII representation.
                String responseData = String.Empty;
                //fill parameter with server text

                /*e.Text = responseData;*/
                e.Text = responseData;
                // if server sent message
                try
                {
                    if (stream.DataAvailable == true)
                    {
                        //Read the first batch of the TcpServer response bytes.
                        Int32 bytes = stream.Read(responseByte, 0, responseByte.Length);
                        responseData = System.Text.Encoding.ASCII.GetString(responseByte, 0, bytes);

                        if (ClientServerOuputTextBox.InvokeRequired)
                        {
                            MethodInvoker invoker = new MethodInvoker(delegate ()
                            {

                                //Executor.LoggingText(logFileName, " - Server: " + responseData);
                                chatLog.MakeLog(" - Server: " + responseData);
                                ClientServerOuputTextBox.AppendText("Server: " + responseData + Executor.LineBreak());
                            });
                            ClientServerOuputTextBox.Invoke(invoker);
                            
                        }
                        else
                        {
                            //Executor.LoggingText(logFileName, " - Server: " + responseData);
                            chatLog.MakeLog(" - Server: " + responseData);
                            ClientServerOuputTextBox.AppendText("Server: " + responseData + Executor.LineBreak());
                        }


                    }
                }
                catch (Exception)
                {

                }
            }
        }
    }
}
