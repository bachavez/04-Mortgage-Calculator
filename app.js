//alert('Angular is working');
angular.module('mortgageApp', [])
  .controller('mortgageCtrl', function() {
    var vm = this;
    vm.changeCalc = function () {
      //alert('Angular is working');
        
      var $P = parseFloat(vm.arrayData.principalAmt);
      var $period = parseFloat(vm.arrayData.period);
      var $r = parseFloat(vm.arrayData.interestRate) /100 / $period;
      var $n = parseFloat(vm.arrayData.loanTerm) * $period;

        if (!isNaN($P) && !isNaN($r) && !isNaN($period) && !isNaN($n)){
        var $monthlyPay = $P * (($r*((1+$r)^$n)) / (((1+$r)^$n)-1));
        //$('#output').text($monthlyPay);
        vm.$monthlyPay = $monthlyPay;
        }
        
    }
    vm.arrayData = {
          principalAmt:"" ,
          interestRate:"" ,
          loanTerm:"",
          period:""
        };
  });