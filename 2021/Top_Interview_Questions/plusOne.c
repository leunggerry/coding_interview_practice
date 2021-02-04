/**
 * Given a non-empty array of decimal digits representing a
 * non-negative integer, increment one to the integer.
 *
 * The digits are stored such that the most significant digit is at
 * the head of the list, and each element in the array contains a single digit.
 *
 *You may assume the integer does not contain any leading zero, except the number 0 itself.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* plusOne(int* digits, int digitsSize, int* returnSize)
{
    int newDigSize = digitsSize;
    int temp[newDigSize];
    memcpy (temp, digits, sizeof(int) * newDigSize);

    for (int i = digitsSize - 1; i >= 0; i--)
    {
        if (digits[i] != 9)
        {
            digits[i] = ++temp[i];
            break;
        }
        else // == 9
        {
            temp[i] = 0;
            if (i == 0)
            {
                newDigSize++;
            }
        }
    }
    int* returnArr_p = (int*)malloc(sizeof(int) * newDigSize);
    if (newDigSize > digitsSize) //add element to array
    {
        returnArr_p[0] = 1;
        for (int i = 1; i < newDigSize - 1; ++i)
        {
            returnArr_p[i] = temp[i - 1];
        }
    }
    else //same array size
    {
        for (int i = 0; i < digitsSize; i++)
        {
            returnArr_p[i] = temp[i];
        }
    }
    *returnSize = newDigSize;
    return returnArr_p;
}
