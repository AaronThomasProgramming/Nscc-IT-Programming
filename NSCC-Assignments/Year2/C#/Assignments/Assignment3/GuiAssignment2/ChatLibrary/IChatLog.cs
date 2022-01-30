namespace ChatLibrary
{
    /// <summary>
    /// get text from chatbox for either .log or print to debug
    /// </summary>
    public interface IChatLog
    {
        void MakeLog(string fileText);
    }
}