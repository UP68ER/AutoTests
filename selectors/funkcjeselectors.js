var countingObj = {

    count: function(a, b){
        let result = a + b;
        console.log(result);
        return result
    },

    getSum: function(c, d){
        console.log('sumX ' + this.count(c, d));

    }
}

    countingObj.count(3,7);
    countingObj.getSum(23,99);
