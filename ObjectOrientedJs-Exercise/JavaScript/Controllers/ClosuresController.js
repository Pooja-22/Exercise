/**
 * Created by pooja on 13/2/16.
 */

//Exercise---Creating counter using closures, Solving problem of setTimeOut

angular.module('Ooj')

    .controller('ClosuresController',['$scope',
        function ($scope) {
        //    var num1 = document.getElementById("num").value;
        //    $scope.Counter = Counter;
        //
        //    function Counter() {
        //        console.log("LLLLLLLL", num1);
        //        function innerCounter(value) {
        //            return function () {
        //                    var num1 = ++value;
        //                console.log(num1);
        //                document.getElementById("val").innerHTML = num1;
        //            }
        //        }
        //
        //        var Count = innerCounter(num1);
        //        Count();
        //    }
        //Not working

            function counter (count) {
                return function(){
                    console.log(++count);
                }
            }
            var c1 = counter(10);
            var c2 = counter(20);
            c1();
            c2();


            //var a = ['first', 'second', 'third'];
            //var current, i;
            //for (i = 0; i < a.length; i++)
            //{
            //
            //    current = a[i];
            //    setTimeout(function () { console.log("hi",current); }, 1000);
            //}



//    var b = ['first', 'second', 'third'];
//    var current1, j;
//    for (j = 0; j < b.length; j++)
//    {
//        current1 = b[j];
//        console.log(current1);
//        setTimeout(
//
//                function (){
//                    console.log("Huh",current1);
//                }, 1000);
//
//        console.log("yo");
//    }
//    console.log(current1);
        }]);