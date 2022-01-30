using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyWall
{
    public class TheWall
    {
        /// <summary>
        /// draw horizontal walls for maze
        /// </summary>
        /// <param name="matrix"></param>
        /// <param name="sizeMatrix"></param>
        /// <param name="position"></param>
        /// <param name="length"></param>
        public static void BuildHorizontalWall(int[,] matrix, int sizeMatrix, int position, int length)
        {
            for (int i = length; i < sizeMatrix; i++)
            {
                matrix[i, position] = 3;
            }
        }
        /// <summary>
        /// draw vertical walls for maze
        /// </summary>
        /// <param name="matrix"></param>
        /// <param name="sizeMatrix"></param>
        /// <param name="position"></param>
        /// <param name="length"></param>
        public static void BuildVerticalWall(int[,] matrix, int sizeMatrix, int position, int length)
        {
            for (int i = length; i < sizeMatrix; i++)
            {
                matrix[position, i] = 3;
            }
        }
    }
}
