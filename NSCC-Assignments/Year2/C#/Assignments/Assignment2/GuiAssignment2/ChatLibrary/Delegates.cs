// All delegates for chat events are held here
using System;
namespace ChatLibrary
{
    //initial server textbox event handler
    /*public delegate void ServerChatEventHandler(string serverText);*/
    public delegate void ServerChatEventHandler(object sender, EventArgs e);
    //initial client textbox event handler
    public delegate void ClientChatEventHandler(string clientText);
    //initial progres finished event handler
    public delegate void ProgressFinishedEventHandler();

    public delegate void ProgressCustomEventHandler(object sender, CustomEventArgs e);
}