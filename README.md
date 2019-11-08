# Data Structures in Javascript

This repository is a collection of data structures built in JavaScript.

A data structure is a collection of values, the relationships among them and the oprataions that can be applied to the data. Different data structures excel at different things and some of them are highly specialized, while others are much more common like an Array, or an Object.

## Singly Linked List
Ordered list of nodes where each node has a reference to the next item in the list. Linked List also keeps track of the 'head', 'tail' and 'length' properties. Linked Lists do not have indexes and random access is not allowed, you must traverse to get to the 10th item for example. Linked Lists are good for inserting at the start and the end because they dont require the reindexing of the entire structure like an array would.

## Doubly Linked List
Ordered lsit of nodes where each node stores a reference to its next AND previous nodes. This gives us improved flexibility in performing operations like removing the last node or iterating throught the list backwards at the cost of more memory.