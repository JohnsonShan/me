
 
// javascript program to find out maximum
// profit by buying and selling a
// share atmost k times given
// stock price of n days 
 
// Function to find out
// maximum profit by
// buying & selling a
// share atmost k times
// given stock price of n days
function maxProfit(price,n, k)
{
     
    // table to store results
    // of subproblems
    // profit[t][i] stores
    // maximum profit using
    // atmost t transactions up
    // to day i (including day i)
    var profit = Array(k+1).fill(0).map
    (x => Array(n+1).fill(0));
 
    // For day 0, you can't
    // earn money irrespective
    // of how many times you trade
    for (i = 0; i <= k; i++)
        profit[i][0] = 0;
 
    // profit is 0 if we don't
    // do any transaction
    // (i.e. k =0)
    for (j = 0; j <= n; j++)
        profit[0][j] = 0;
 
    // fill the table in
    // bottom-up fashion
    for (i = 1; i <= k; i++)
    {
        for (j = 1; j < n; j++)
        {
            var max_so_far = 0;
 
            for (m = 0; m < j; m++)
            max_so_far = Math.max(max_so_far, price[j] -
                         price[m] + profit[i - 1][m]);
 
            profit[i][j] = Math.max(profit[i] [j - 1],
                                          max_so_far);
        }
    }
 
    return profit[k][n - 1];
}
 
// Driver code
var k = 2;
var price = [ 10, 22, 5, 75, 65, 80 ];
var n = price.length;
console.log("Maximum profit is: " +maxProfit(price, n, k));
 
 
// This code contributed by shikhasingrajput
