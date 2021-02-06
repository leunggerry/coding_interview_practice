/*
 * Write a function that reverses a string. The input string is given as an
 * array of characters char[].
 *
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * You may assume all the characters consist of printable ascii characters.
 *
 */

void reverseString(char* s, int sSize)
{
    char temp;
    // only interate through the array until half way through
    // either:
    // 1 - when there odd number of characters the middle character won't need
    //     to be reversed
    // 2 - when even once we reach the middle the front will have been reversed to the back
    for (int i = 0; i < (sSize / 2); i++)
    {
        temp = s[i];
        s[i] = s[sSize - 1 - i];
        s[sSize - 1 - i] = temp;
    }
}
