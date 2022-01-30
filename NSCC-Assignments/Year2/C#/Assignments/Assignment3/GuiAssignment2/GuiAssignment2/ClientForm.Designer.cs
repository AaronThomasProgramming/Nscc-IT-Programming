namespace GuiAssignment2
{
    partial class ClientForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.ClientServerOuputTextBox = new System.Windows.Forms.TextBox();
            this.BlackPanel = new System.Windows.Forms.Panel();
            this.GameLabel = new System.Windows.Forms.Label();
            this.ConversationLabel = new System.Windows.Forms.Label();
            this.SendMessageLabel = new System.Windows.Forms.Label();
            this.SendButton = new System.Windows.Forms.Button();
            this.ClientInputTextBox = new System.Windows.Forms.TextBox();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.GameToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.ExitToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.NetworkToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.ConnectToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.DisconnectToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.BlackPanel.SuspendLayout();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // ClientServerOuputTextBox
            // 
            this.ClientServerOuputTextBox.Location = new System.Drawing.Point(12, 600);
            this.ClientServerOuputTextBox.Multiline = true;
            this.ClientServerOuputTextBox.Name = "ClientServerOuputTextBox";
            this.ClientServerOuputTextBox.Size = new System.Drawing.Size(819, 314);
            this.ClientServerOuputTextBox.TabIndex = 13;
            this.ClientServerOuputTextBox.TextChanged += new System.EventHandler(this.ClientServerOuputTextBox_TextChanged);
            // 
            // BlackPanel
            // 
            this.BlackPanel.BackColor = System.Drawing.Color.Black;
            this.BlackPanel.Controls.Add(this.GameLabel);
            this.BlackPanel.Location = new System.Drawing.Point(12, 66);
            this.BlackPanel.Name = "BlackPanel";
            this.BlackPanel.Size = new System.Drawing.Size(840, 387);
            this.BlackPanel.TabIndex = 12;
            // 
            // GameLabel
            // 
            this.GameLabel.AutoSize = true;
            this.GameLabel.Font = new System.Drawing.Font("Comic Sans MS", 30F, System.Drawing.FontStyle.Bold);
            this.GameLabel.ForeColor = System.Drawing.Color.White;
            this.GameLabel.Location = new System.Drawing.Point(144, 132);
            this.GameLabel.Name = "GameLabel";
            this.GameLabel.Size = new System.Drawing.Size(521, 84);
            this.GameLabel.TabIndex = 6;
            this.GameLabel.Text = "Game Goes Here";
            // 
            // ConversationLabel
            // 
            this.ConversationLabel.AutoSize = true;
            this.ConversationLabel.Location = new System.Drawing.Point(22, 566);
            this.ConversationLabel.MinimumSize = new System.Drawing.Size(10, 0);
            this.ConversationLabel.Name = "ConversationLabel";
            this.ConversationLabel.Size = new System.Drawing.Size(102, 20);
            this.ConversationLabel.TabIndex = 11;
            this.ConversationLabel.Text = "Conversation";
            // 
            // SendMessageLabel
            // 
            this.SendMessageLabel.AutoSize = true;
            this.SendMessageLabel.Location = new System.Drawing.Point(22, 489);
            this.SendMessageLabel.MinimumSize = new System.Drawing.Size(100, 0);
            this.SendMessageLabel.Name = "SendMessageLabel";
            this.SendMessageLabel.Size = new System.Drawing.Size(190, 20);
            this.SendMessageLabel.TabIndex = 10;
            this.SendMessageLabel.Text = "Type your messages here";
            // 
            // SendButton
            // 
            this.SendButton.Location = new System.Drawing.Point(740, 512);
            this.SendButton.Name = "SendButton";
            this.SendButton.Size = new System.Drawing.Size(112, 32);
            this.SendButton.TabIndex = 8;
            this.SendButton.Text = "Send";
            this.SendButton.UseVisualStyleBackColor = true;
            this.SendButton.Click += new System.EventHandler(this.SendButton_Click);
            // 
            // ClientInputTextBox
            // 
            this.ClientInputTextBox.Location = new System.Drawing.Point(26, 518);
            this.ClientInputTextBox.Name = "ClientInputTextBox";
            this.ClientInputTextBox.Size = new System.Drawing.Size(695, 26);
            this.ClientInputTextBox.TabIndex = 7;
            this.ClientInputTextBox.TextChanged += new System.EventHandler(this.ClientInputTextBox_TextChanged);
            // 
            // menuStrip1
            // 
            this.menuStrip1.GripMargin = new System.Windows.Forms.Padding(2, 2, 0, 2);
            this.menuStrip1.ImageScalingSize = new System.Drawing.Size(24, 24);
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.GameToolStripMenuItem,
            this.NetworkToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(867, 33);
            this.menuStrip1.TabIndex = 9;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // GameToolStripMenuItem
            // 
            this.GameToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.ExitToolStripMenuItem});
            this.GameToolStripMenuItem.Name = "GameToolStripMenuItem";
            this.GameToolStripMenuItem.Size = new System.Drawing.Size(74, 29);
            this.GameToolStripMenuItem.Text = "Game";
            // 
            // ExitToolStripMenuItem
            // 
            this.ExitToolStripMenuItem.Name = "ExitToolStripMenuItem";
            this.ExitToolStripMenuItem.Size = new System.Drawing.Size(141, 34);
            this.ExitToolStripMenuItem.Text = "Exit";
            this.ExitToolStripMenuItem.Click += new System.EventHandler(this.ExitToolStripMenuItem_Click);
            // 
            // NetworkToolStripMenuItem
            // 
            this.NetworkToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.ConnectToolStripMenuItem,
            this.DisconnectToolStripMenuItem});
            this.NetworkToolStripMenuItem.Name = "NetworkToolStripMenuItem";
            this.NetworkToolStripMenuItem.Size = new System.Drawing.Size(95, 29);
            this.NetworkToolStripMenuItem.Text = "Network";
            // 
            // ConnectToolStripMenuItem
            // 
            this.ConnectToolStripMenuItem.Name = "ConnectToolStripMenuItem";
            this.ConnectToolStripMenuItem.Size = new System.Drawing.Size(201, 34);
            this.ConnectToolStripMenuItem.Text = "Connect";
            this.ConnectToolStripMenuItem.Click += new System.EventHandler(this.ConnectToolStripMenuItem_Click);
            // 
            // DisconnectToolStripMenuItem
            // 
            this.DisconnectToolStripMenuItem.Name = "DisconnectToolStripMenuItem";
            this.DisconnectToolStripMenuItem.Size = new System.Drawing.Size(201, 34);
            this.DisconnectToolStripMenuItem.Text = "Disconnect";
            this.DisconnectToolStripMenuItem.Click += new System.EventHandler(this.DisconnectToolStripMenuItem_Click);
            // 
            // ClientForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(867, 1189);
            this.Controls.Add(this.ClientServerOuputTextBox);
            this.Controls.Add(this.BlackPanel);
            this.Controls.Add(this.ConversationLabel);
            this.Controls.Add(this.SendMessageLabel);
            this.Controls.Add(this.SendButton);
            this.Controls.Add(this.ClientInputTextBox);
            this.Controls.Add(this.menuStrip1);
            this.Name = "ClientForm";
            this.Text = "ClientGui";
            this.Load += new System.EventHandler(this.ClientForm_Load);
            this.BlackPanel.ResumeLayout(false);
            this.BlackPanel.PerformLayout();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox ClientServerOuputTextBox;
        private System.Windows.Forms.Panel BlackPanel;
        private System.Windows.Forms.Label GameLabel;
        private System.Windows.Forms.Label ConversationLabel;
        private System.Windows.Forms.Label SendMessageLabel;
        private System.Windows.Forms.Button SendButton;
        private System.Windows.Forms.TextBox ClientInputTextBox;
        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem GameToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem ExitToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem NetworkToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem ConnectToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem DisconnectToolStripMenuItem;
    }
}

