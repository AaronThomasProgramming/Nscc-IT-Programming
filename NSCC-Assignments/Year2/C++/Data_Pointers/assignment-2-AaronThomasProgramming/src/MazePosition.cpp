//
// Created by 98adt on 2021-03-01.
//

#include "MazePosition.h"
MazePosition::MazePosition() : row(-1), col(-1) {}
MazePosition::MazePosition(int row, int col) : row(row), col(col) {}
MazePosition::MazePosition(const MazePosition& pos) : MazePosition(pos.row, pos.col) {}