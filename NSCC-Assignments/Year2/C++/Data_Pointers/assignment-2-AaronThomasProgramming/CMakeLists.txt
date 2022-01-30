cmake_minimum_required(VERSION 3.16.5)
project(Assignment_2)

set(CMAKE_CXX_STANDARD 14)

add_executable(Assignment_2
        src/main.cpp src/Node.cpp src/Node.h src/MazePosition.cpp src/MazePosition.h src/MazeStack.cpp src/MazeStack.h)
