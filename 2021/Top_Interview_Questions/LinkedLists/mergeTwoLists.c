/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2)
{
    struct ListNode* top_p;
    struct ListNode* head_p;

    // if either or both lists is null return the other list or null

    if (l1 == NULL || l2 == NULL)
    {
        if (l1 == NULL)
            head_p = l2;
        else
            head_p = l1;
        return head_p;
    }// code exits

    //set the top of the list
    //l1->value is smaller that l2->value
    // [1,2,4]   [1,3,4]
    // 1 <= 1 -> true
    // top = l1
    if (l1->val <= l2->val)
    {
        top_p = l1;
        l1 = l1->next;
    }
    else // else l2->value is smaller l1->value
    {
        top_p = l2;
        l2 = l2->next;
    }

    //initialze the head fo the list
    head_p = top_p;
    while (l1 != NULL && l2 != NULL)
    {
        if(l1->val <= l2->val)
        {
            head_p->next = l1;
            l1 = l1->next;
        }
        else
        {
            head_p->next = l2;
            l2 = l2->next;
        }
        head_p = head_p->next;
    }


    // the end
    // if the list still has elements
    if (l1 != NULL)
    {
        head_p->next = l1;
    }
    if (l2 != NULL)
    {
        head_p->next = l2;
    }
    return top_p;
}
