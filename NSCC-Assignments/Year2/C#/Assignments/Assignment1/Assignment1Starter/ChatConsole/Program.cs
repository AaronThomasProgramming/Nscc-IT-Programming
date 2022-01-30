using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ChatLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace ChatConsole
{
    class Program
    {
        //listening to key events and responding to them and then it
        //send that behavior back and forth to the server client server objects
        static void Main(string[] args)
        {

            if(args.Contains("-server"))
            {
                TcpListener server = null;
                try
                {
                    
                    Int32 port = 13000;
                    IPAddress localAddr = IPAddress.Parse("127.0.0.1");

                    
                    server = new TcpListener(localAddr, port);

                    // Start listening for client requests.
                    server.Start();

                    // Buffer for reading data
                    Byte[] bytes = new Byte[256];
                    String data = null;
                   
                    Console.Write("Starting Server... ");

                    // Perform a blocking call to accept requests.
                    TcpClient client = server.AcceptTcpClient();
                    Console.WriteLine("Ready");
                    // Get a stream object for reading and writing
                    NetworkStream stream = client.GetStream();
                    // Enter the listening loop.
                    Console.WriteLine("Listening for messages. ");
                    while (true)
                    {
                        //Display incoming messages

                        //User Input Mode: The "I" Key
                        if (Console.KeyAvailable)
                        {


                            ConsoleKeyInfo userKey = Console.ReadKey();//blocking call


                            if (userKey.Key == ConsoleKey.I)
                            {
                                //entered input mode
                                Console.Write(">>");
                                String message = Console.ReadLine();
                                if (message == "quit")
                                {                //quit message
                                    Byte[] ServerData = System.Text.Encoding.ASCII.GetBytes(message);

                                    // Get a client stream for reading and writing.
                                    stream = client.GetStream();

                                    message = "The server has disconnected. Goodbye";
                                    // Translate the passed message into ASCII and store it as a Byte array.
                                    ServerData = System.Text.Encoding.ASCII.GetBytes(message);

                                    // Get a client stream for reading and writing.
                                    stream = client.GetStream();

                                    // Send the message to the connected TcpServer.
                                    stream.Write(ServerData, 0, ServerData.Length);
                                    /*Console.WriteLine("Sent: {0}", message);*/
                                    Console.WriteLine("Session ended");

                                    break;
                                }

                                else
                                {
                                    // Translate the passed message into ASCII and store it as a Byte array.
                                    Byte[] ServerData = System.Text.Encoding.ASCII.GetBytes(message);

                                    // Get a client stream for reading and writing.
                                    stream = client.GetStream();

                                    // Send the message to the connected TcpServer.
                                    stream.Write(ServerData, 0, ServerData.Length);
                                    Console.WriteLine("Sent: {0}", message);

                                }


                            }

                        }
                        // Receive the TcpServer.response.

                        // Buffer to store the response bytes.
                        Byte[] responseByte = new Byte[256];

                        // String to store the response ASCII representation.
                        String responseData = String.Empty;

                        // Read the first batch of the TcpServer response bytes.

                        //if server sent message
                        if (stream.DataAvailable == true)
                        {
                            // Read the first batch of the TcpServer response bytes.
                            Int32 ServerBytes = stream.Read(responseByte, 0, responseByte.Length);
                            responseData = System.Text.Encoding.ASCII.GetString(responseByte, 0, ServerBytes);
                            //hardcoded disconnect if server disconnected
                            if (responseData == "Client has left")
                            {
                                Console.WriteLine("Received: {0}", responseData);
                                Console.WriteLine("Client ended");
                                break;
                            }
                            Console.WriteLine("Received: {0}", responseData);
                        }

                    }
                    client.Close();
                }
                catch (SocketException e)
                {
                    Console.WriteLine("SocketException: {0}", e);
                }
                finally
                {
                    server.Stop();

                }

                Console.WriteLine("\nHit enter to continue...");
                Console.Read();

            } else
            {
                Console.WriteLine("Starting Client");
                try
                {
                    String server = "127.0.0.1";
                    Int32 port = 13000;
                    TcpClient client = new TcpClient(server, port);
                    NetworkStream stream = client.GetStream();

                    Console.WriteLine("Listening for messages. ");
                    while (true)
                    {
                        //User Input Mode: The "I" Key
                        if (Console.KeyAvailable)
                        {


                            ConsoleKeyInfo userKey = Console.ReadKey();


                            if (userKey.Key == ConsoleKey.I)
                            { 
                                //entered input mode
                                Console.Write(">>");
                                String message = Console.ReadLine();
                                if (message == "quit")
                                {                
                                    Byte[] data = System.Text.Encoding.ASCII.GetBytes(message);

                                    // Get a client stream for reading and writing.
                                    stream = client.GetStream();

                                    message = "Client has left";
                                    // Translate the passed message into ASCII and store it as a Byte array.
                                    data = System.Text.Encoding.ASCII.GetBytes(message);

                                    // Get a client stream for reading and writing.
                                    stream = client.GetStream();

                                    // Send the message to the connected TcpServer.
                                    stream.Write(data, 0, data.Length);
                                    Console.WriteLine("Sent: {0}", message);
                                    //break out of loop and quit
                                    break;
                                }

                                else
                                {
                                    // Translate the passed message into ASCII and store it as a Byte array.
                                    Byte[] data = System.Text.Encoding.ASCII.GetBytes(message);

                                    // Get a client stream for reading and writing.

                                    stream = client.GetStream();

                                    // Send the message to the connected TcpServer.
                                    stream.Write(data, 0, data.Length);
                                    Console.WriteLine("Sent: {0}", message);

                                }


                            }

                        }
                        // Receive the TcpServer.response.
                        // Buffer to store the response bytes.
                        Byte[] responseByte = new Byte[256];

                        // String to store the response ASCII representation.
                        String responseData = String.Empty;
                        //if server sent message
                        if (stream.DataAvailable == true)
                        {
                            // Read the first batch of the TcpServer response bytes.
                            Int32 bytes = stream.Read(responseByte, 0, responseByte.Length);
                            responseData = System.Text.Encoding.ASCII.GetString(responseByte, 0, bytes);
                            if (responseData == "The server has disconnected. Goodbye")
                            {
                                //hardcoded disconnect if client left
                                Console.WriteLine("Received: {0}", responseData);
                                Console.WriteLine("Client ended");
                                break;
                            }
                            Console.WriteLine("Received: {0}", responseData);
                        }


                    }
                    //end session
                    stream.Close();
                    client.Close();



                }
                catch (ArgumentNullException e)
                {
                    Console.WriteLine("ArgumentNullException: {0}", e);
                }
                catch (SocketException e)
                {
                    Console.WriteLine("No Server avaliable");
                }

                Console.WriteLine("\n Press Enter to continue...");
                Console.Read();
            }


        }
    }
}
