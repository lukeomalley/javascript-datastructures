# Data Structures in Javascript

This repository is a collection of data structures built in JavaScript.

A data structure is a collection of values, the relationships among them and the oprataions that can be applied to the data. Different data structures excel at different things and some of them are highly specialized, while others are much more common like an Array, or an Object.

## Singly Linked List
Ordered list of nodes where each node has a reference to the next item in the list. Linked List also keeps track of the 'head', 'tail' and 'length' properties. Linked Lists do not have indexes and random access is not allowed, you must traverse to get to the 10th item for example. Linked Lists are good for inserting at the start and the end because they dont require the reindexing of the entire structure like an array would.

## Doubly Linked List
Ordered lsit of nodes where each node stores a reference to its next AND previous nodes. This gives us improved flexibility in performing operations like removing the last node or iterating throught the list backwards at the cost of more memory.

## Stack
Collection of data that follows the LIFO(last in first out) principle. A stack is a limited access data structure meaning that elements can only be added and removed from the top of the stack.
Applications of a stack:
- The call stack
- Application routing
- Reverse a word
- Undo mechanism in text editors
- Backtracking: think abou solving a maze, when you get to a dead end you need to backtrack

## Queue
A queue is a container of objects that are inserted and removed following the FIFO(first in first out) principle. New additions are made to the back of the queue(enqueue) and removals are made from the front of the queue(dequeue).
Applications of a stack:
- The JS message/callback queue
- Background tasks on a computer
- Printer queue

## Binary Search Tree
A collection of Nodes in a tree-like structure. Every Node has at most two children nodes. The children nodes msut satsify the BST property, where a the left node is less than the parent node and the right node is greater than the parent node.
Applications for BST's:
- SQL DB Indexing
- Dictionaries
