/*
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Follow up:
 * Try to come up as many solutions as you can, there are at least 3
 * different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 *
 */
 
// Test case pass 35/35
// Failed due to too slow
// O(n^2)
void rotate(int* nums, int numsSize, int k)
{
    int tempIdx, tmpArr0[numsSize];
    int * dest_p,* src_p;
    if ((k <= 0) || (numsSize == 1))
        return;
    //copy to workspace
    //memcpy(tmpArr0, nums, sizeof(int) * numsSize);

    for (int i = 0; i < k; i++)
    {
        dest_p = ((i % 2) == 0) ? tmpArr0 : nums; // get the destination wehere we want to copy to
        src_p = ((i % 2) == 0) ? nums : tmpArr0; // get the src where we want ot copy from
        tempIdx = numsSize - 1; // get the start idx
        for (int j = 0; j < numsSize; j++)
        {
            dest_p[j] = src_p[tempIdx++];
            if (tempIdx == numsSize)
                tempIdx = 0;
        }
    }
    if ((k % 2) != 0)
        memcpy(nums, dest_p, sizeof(int) * numsSize);

}
