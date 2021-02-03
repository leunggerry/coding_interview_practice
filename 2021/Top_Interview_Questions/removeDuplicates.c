
// Given a sorted array nums, remove the duplicates in-place such
// that each element appears only once and returns the new length.
//
// Do not allocate extra space for another array, you must do this
// by modifying the input array in-place with O(1) extra memory.
int removeDuplicates(int* nums, int numsSize)
{
    int prev_num, total;

    // if array is 0, no dups
    if (numsSize < 1)
        return 0;

    // set the initial values
    prev_num = nums[0];
    total = 1;

    for (int i = 1; i < numsSize; i++)
    {
        // if the current value is not equal previous values
        // remove it
        if (nums[i] != prev_num)
        {
            //increment the total number of values
            nums[total++] = nums[i];
            prev_num = nums[i];
        }
    }
    return total;
}
