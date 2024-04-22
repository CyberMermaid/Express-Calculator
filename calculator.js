const express = require('express');

const app = express();

// Function to calculate the mean
    function calculateMean(nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0);
    return sum / nums.length;
   }
   
// Function to calculate the median
    function calculateMedian(nums) {
    nums.sort((a, b) => a - b);
    const middle = Math.floor(nums.length / 2);
    return nums.length % 2 !== 0 ? nums[middle] : (nums[middle - 1] + nums[middle]) / 2;
   }
   

    app.get('/mean', function(request, response) {
    const nums = request.query.nums.split(',').map(Number);
    const mean = calculateMean(nums);
    response.json({ operation: "mean", value: mean });
   });
   
   app.get('/median', function(request, response) {
    const nums = request.query.nums.split(',').map(Number);
    const median = calculateMedian(nums);
    response.json({ operation: "median", value: median });
   });
   
    app.get('/mode', function(request, response) {
        const nums = request.query.nums.split(',').map(Number);
        const mode = calculateMode(nums);
        response.json({ operation: "mode", value: mode });
  });

  app.listen(3000, function() {
    console.log('App on port 3000!');
   });