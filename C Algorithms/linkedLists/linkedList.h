#include <stdlib.h>
#include <stddef.h>
#include <stdio.h>

// typedef  Node;

struct Node
{
    int val;
    struct Node *next_p;
};
typedef struct Node Node;

struct LinkedList
{
    Node *head_p;
};

Node *initializeList(int data);
