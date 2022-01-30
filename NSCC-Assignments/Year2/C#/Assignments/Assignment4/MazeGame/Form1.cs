using System;
using System.Diagnostics;
using System.Drawing;
using System.Windows.Forms;
using MyWall;

namespace Maze
{
    public partial class Form1 : Form
    {
        /// <summary>
        /// start win form
        /// </summary>
        public Form1()
        {
            InitializeComponent();
        }

        Timer timer;
        Timer timer1;
        int sizeMatrix;
        int[,] matrix;
        PlayerDirection playerDirection;
        Point headPosition;
        int lastSegment;
        Random random;
        /// <summary>
        /// 
        /// </summary>
        enum MatrixObject
        {
            Exit = -1,
        }
        /// <summary>
        /// Player directions
        /// </summary>
        enum PlayerDirection
        {
            Up, 
            Right,
            Down,
            Left
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Form1_Load(object sender, EventArgs e)
        {
            random = new Random();
            timer = new Timer();
            timer.Interval = 200;
            timer.Start();
            timer.Tick += Timer_Tick;
            sizeMatrix = 10;
            //WinnerLabel.Visible = false;
            matrix = new int[sizeMatrix, sizeMatrix];

            Initialize();
        }
        /// <summary>
        /// 
        /// </summary>
        private void Initialize()
        {
            for (int i = 0; i < sizeMatrix; i++)
            {
                for (int j = 0; j < sizeMatrix; j++)
                {
                    matrix[i, j] = 0;
                }
            }
            GenerateExit();
            headPosition = new Point(1, 1);
            matrix[1, 1] = 1;
            playerDirection = PlayerDirection.Left;
        }
        /// <summary>
        /// update game every 200 miliseconds
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Timer_Tick(object sender, EventArgs e)
        {
            GameLogic();
            Draw();
        }
        /// <summary>
        /// Draw maze, player, trail, and exit
        /// </summary>
        private void Draw()
        {
            Bitmap bitmap = new Bitmap(pictureBox1.Width, pictureBox1.Height);
            Graphics graphics = Graphics.FromImage(bitmap);
            graphics.FillRectangle(Brushes.Gray, 0, 0, pictureBox1.Width, pictureBox1.Height);
            Image image;
            Image image2;
            image = Image.FromFile("images/exitSquare.png");
            image2 = Image.FromFile("images/playerSquare.png");
            SizeF sizeCell = new SizeF((float)pictureBox1.Width / sizeMatrix, (float)pictureBox1.Height / sizeMatrix);

            //map out maze with class function
            //draw edge walls
            //draw top
            TheWall.BuildVerticalWall(matrix, sizeMatrix, 0, 0);
            //draw bottom
            TheWall.BuildVerticalWall(matrix, sizeMatrix, 9, 0);
            //draw left
            TheWall.BuildHorizontalWall(matrix, sizeMatrix, 0, 0);
            //draw right
            TheWall.BuildHorizontalWall(matrix, sizeMatrix, 9, 0);
            //draw vertical walls
            TheWall.BuildVerticalWall(matrix, sizeMatrix / 2, 7, 2);
            TheWall.BuildVerticalWall(matrix, sizeMatrix / 2, 5, 2);
            TheWall.BuildHorizontalWall(matrix, sizeMatrix - 6, 5, 2);
            TheWall.BuildHorizontalWall(matrix, sizeMatrix - 6, 3, 2);
            TheWall.BuildHorizontalWall(matrix, sizeMatrix - 6, 2, 2);
            TheWall.BuildHorizontalWall(matrix, sizeMatrix - 6, 7, 2);
            //draw horizontal walls
            TheWall.BuildHorizontalWall(matrix, sizeMatrix - 1, 7, 5);
            TheWall.BuildHorizontalWall(matrix, sizeMatrix - 2, 5, 5);
            //draw 2d array
            for (int i = 0; i < sizeMatrix; i++)
            {
                for (int j = 0; j < sizeMatrix; j++)
                {
                    //fill grid with boxes
                    if (matrix[i, j] == 0)
                    {                        
                        graphics.FillRectangle(Brushes.White, i * sizeCell.Width + 1, j * sizeCell.Height + 1, sizeCell.Width - 2, sizeCell.Height - 2);                       
                    }
                    //draw exit
                    else if (matrix[i, j] == (int)MatrixObject.Exit)
                    {
                        graphics.DrawImage(image, i * sizeCell.Width + 1, j * sizeCell.Height + 1, sizeCell.Width - 2, sizeCell.Height - 2);
                    }
                    //draw player
                    else if (matrix[i, j] == 1)
                    {
                        graphics.DrawImage(image2, i * sizeCell.Width + 1, j * sizeCell.Height + 1, sizeCell.Width - 2, sizeCell.Height - 2);
                    }
                    //draw wall
                    else if (matrix[i, j] == 3)
                    {
                        graphics.FillRectangle(Brushes.Black, i * sizeCell.Width + 1, j * sizeCell.Height + 1, sizeCell.Width - 2, sizeCell.Height - 2);
                    }
                    //draw trail
                    else
                    {
                        graphics.FillRectangle(Brushes.Blue, i * sizeCell.Width + 1, j * sizeCell.Height + 1, sizeCell.Width - 2, sizeCell.Height - 2);                        
                    }
                }
            }
            //display game
            pictureBox1.Image = bitmap;
        }
        /// <summary>
        /// Movement, Collision detection, trail, restart
        /// </summary>
        private void GameLogic()
        {
            Point walkPosition;
            switch (playerDirection)
            {
                case PlayerDirection.Up:
                    walkPosition = new Point(headPosition.X, headPosition.Y - 1);
                    break;
                case PlayerDirection.Right:
                    walkPosition = new Point(headPosition.X + 1, headPosition.Y);
                    break;
                case PlayerDirection.Down:
                    walkPosition = new Point(headPosition.X, headPosition.Y + 1);
                    break;
                case PlayerDirection.Left:
                    walkPosition = new Point(headPosition.X - 1, headPosition.Y);
                    break;
                default:
                    throw new Exception("It is not possible for the snake to not have a direction");
            }
            if (walkPosition.X < 1 || walkPosition.Y < 1)
            {
                return;
            }

            //if maze exit
            if (matrix[walkPosition.X, walkPosition.Y] == (int)MatrixObject.Exit) //3
            {
                //display winner message and start timer
                WinnerLabel.Visible = true;
                Timer tm = new Timer();
                tm.Interval = 3000;
                tm.Tick += WinnerLabel_Click;            
                tm.Enabled = true;
                tm.Start();
                return;
            }
            //if player hits wall
            if (matrix[walkPosition.X, walkPosition.Y] == 3) //3
            {
                return;
            }
            //move and create path
            matrix[walkPosition.X, walkPosition.Y] = 1;
            matrix[headPosition.X, headPosition.Y]++;
            headPosition = walkPosition;
        }
        /// <summary>
        /// Change direction with WASD
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>d
        private void Form1_KeyPress(object sender, KeyPressEventArgs e)
        {
            switch(e.KeyChar)
            {
                case 'w':
                        playerDirection = PlayerDirection.Up;
                    break;
                case 'd':
                        playerDirection = PlayerDirection.Right;
                    break;
                case 's':
                        playerDirection = PlayerDirection.Down;
                    break;
                case 'a':
                        playerDirection = PlayerDirection.Left;
                    break;
            }
        }
        /// <summary>
        /// Generate maze exit on empty square
        /// </summary>
        private void GenerateExit()
        {
            Point exitPosition;

            do
            {
                //generate food not on path or wall
                exitPosition = new Point(random.Next() % sizeMatrix, random.Next() % sizeMatrix);
            } while (matrix[exitPosition.X, exitPosition.Y] == (int)MatrixObject.Exit && matrix[exitPosition.X, exitPosition.Y] != 0 
            && exitPosition.X == 0 && exitPosition.Y == 0 && exitPosition.X == sizeMatrix - 1 && exitPosition.Y == sizeMatrix - 1 
            && exitPosition.X != 3 && exitPosition.Y != 3 && matrix[exitPosition.X, exitPosition.Y] != 3);

            matrix[exitPosition.X, exitPosition.Y] = (int)MatrixObject.Exit;
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
        }
        /// <summary>
        /// start game over and hide message
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void WinnerLabel_Click(object sender, EventArgs e)
        {
            ((Timer)sender).Stop();
            if (WinnerLabel.Visible == true)
            {
                WinnerLabel.Visible = false;
                Initialize();
                return;
            }
            
            
        }
    }
}
