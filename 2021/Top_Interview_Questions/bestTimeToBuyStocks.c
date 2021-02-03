/**
 * Say you have an array prices for which the ith element is the
 * price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete
 * as many transactions as you like (i.e., buy one and sell one share
 * of the stock multiple times).
 *
 * Note: You may not engage in multiple transactions at the same time
 * (i.e., you must sell the stock before you buy again).
 */
int maxProfit(int* prices, int pricesSize)
{
    // initalize the values
    int buyPrice = -1, sellPrice = -1, maxProfit = 0;

    for (int day = 1; day < pricesSize; day++)
    {
        // if the price of the current day is smaller
        // than previous day, buy
        if (prices[day] < prices[day - 1])
        {
            buyPrice = prices[day];
        }
        else // price of yesterday less than today
        {
            buyPrice = prices[day - 1];
            sellPrice = prices[day];
        }

        // if sell price is set, add it to total
        if (sellPrice >= 0)
        {
            maxProfit = maxProfit + (sellPrice - buyPrice);
            sellPrice = -1;
        }
    }
    return maxProfit;
}
