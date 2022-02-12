#include "linkedList.h"

/** Global Variables */
/*****************************************************************************/

/** Local Functions Declarations */
/*****************************************************************************/
Node *initializeList(int data);
void printList(Node *head_p);

/** Local Functions Definitions */
/*****************************************************************************/
Node *initializeList(int data)
{
    Node *head_p = (Node *)malloc(sizeof(Node));
    head_p->next_p = NULL;
    head_p->val = data;
    return head_p;
}
void printList(Node *head_p)
{
    Node *cur_p = head_p;
    while (cur_p != NULL)
    {
        printf("%d \n", cur_p->val);
        cur_p = cur_p->next_p;
    }
}

void insertAtTail(Node *head_p, int val)
{
    Node *cur_p = head_p;

    // move to the end of the list but dont lose the tail of the Node
    while (cur_p->next_p != NULL)
    {
        cur_p = cur_p->next_p;
    }

    // add the new node ot the end of the list
    Node *node_p = (Node *)malloc(sizeof(Node));
    node_p->val = val;
    node_p->next_p = NULL;

    // connect the node to the tail of list
    cur_p->next_p = node_p;
}

Node *insertAtHead(Node *head_p, int val)
{
    Node *newHead_p = (Node *)malloc(sizeof(Node));

    // assign new node val and old head to the newHead
    newHead_p->val = val;
    newHead_p->next_p = head_p;

    return newHead_p;
}

void insertAtMiddle(Node *head_p, int position, int val)
{
    // create and assign the new node value
    Node *newNode_p = (Node *)malloc(sizeof(Node));
    newNode_p->val = val;

    // traverse the list to the correct position
    Node *cur_p = head_p;
    for (int i = 1; i < position; i++)
    {
        if (cur_p->next_p != NULL)
        {
            cur_p = cur_p->next_p;
        }
    }

    newNode_p->next_p = cur_p->next_p;
    cur_p->next_p = newNode_p;
}
/** Main Runner */
/*****************************************************************************/
/**
 * @brief Main
 *
 * @return int
 */
int main(void)
{
    printf("hello world\n");

    Node *head_p = insertAtHead(NULL, 1);

    insertAtTail(head_p, 2);
    insertAtTail(head_p, 3);
    head_p = insertAtHead(head_p, 0);

    insertAtMiddle(head_p, 2, 5);

    printList(head_p);
    return 0;
}
