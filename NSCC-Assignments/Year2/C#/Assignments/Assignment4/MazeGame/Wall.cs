using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tutorial_Snake
{
    public class Wall
    {
        public static void BuildVerticalWall(int [,] matrix, int sizeMatrix, int position)
        {
            for (int i = position; i < sizeMatrix; i++)
            {
                matrix[i, position] = 3;
            }
        }
        public static void BuildHorizontalWall(int[,] matrix, int sizeMatrix, int position)
        {
            for (int i = position; i < sizeMatrix; i++)
            {
                matrix[position, i] = 3;
            }
        }
    }
}
