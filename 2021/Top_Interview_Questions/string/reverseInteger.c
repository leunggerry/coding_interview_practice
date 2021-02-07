/**
 * Given a signed 32-bit integer x,
 * return x with its digits reversed. If reversing x causes the value to go
 * outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */
int reverse(int x)
{
    int digit;
    int remain = x;
    int num = 0;

    while (remain != 0)
    {
        printf("digit: %d num:%d remain:%d\n", digit, num, remain);
        // get the LSD (least significant digit)
        digit = remain % 10;
        // calculate the remain value with our 'digit'
        remain = (remain - digit) / 10;


        // check if we go in overflow situation
        if ((num > (INT_MAX / 10)) || (num == (INT_MAX / 10)) && (digit > 7))
            return 0;
        if ((num < (INT_MIN / 10)) || (num == (INT_MIN / 10)) && (digit < -8))
            return 0;

        num = (num * 10) + digit;
    }
    return num;
}
