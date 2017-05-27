/**
 * Created by lonelydawn on 2017-05-25.
 */

app.directive("columnFilter", function () {
    return {
        restrict: "AE",
        template:
            '<table class="table table-bordered">' +
            '<thead>' +
            '<tr>' +
            '<th class="relative cursor-pointer"  ng-repeat="item in tableData.field" ' +
            'ng-click="showModal($index);" ng-mouseleave="hideModal($index);">' +
            '<span class="thead-label" ng-bind="item"></span>' +
            '<span class="flg-icon-character select-flg" ' +
            'ng-show="tableData.filter[$index]!=undefined">&nbsp;^</span>'+
            '<ul class="select-ul bg-white">' +
            '<li ng-repeat="item in tableData.filter[$index]" ' +
            'ng-click="toggleItem($index, item);">' +
            '<span class="space-flg">&nbsp;&nbsp;&nbsp;</span>{{item}}</li>' +
            '</ul>' +
            '</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr ng-repeat="row in showData">' +
            '<td ng-repeat="item in row" ng-bind="item"></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>',
        replace: true,
        controller: function($scope){
            $scope.tableData = [];
            $scope.showData = [];
            $scope.flgArr = []; //保存筛选选择项的下标
            $scope.fieldIndex = 0;
            // 获取表格数据并初始化相关参数
            this.getTableData = function (tableData) {
                $scope.tableData = tableData;
                for(var i=0; i<tableData.data.length; i++)
                    $scope.showData.push(tableData.data[i]);

                // 初始化筛选项下标
                for(var t=0; t<tableData.field.length; t++)
                    $scope.flgArr.push(-1);
            };
        },
        link: function(scope, element) {
            // 显示模态框
            scope.showModal = function (index) {
                scope.fieldIndex = index;
                element.find(".select-ul")[index].style.display = "block";
                element.find(".flg-icon-character")[index].innerHTML = "&nbsp;v";
            };
            // 隐藏模态框
            scope.hideModal = function (index) {
                element.find(".select-ul")[index].style.display = "none";
                element.find(".flg-icon-character")[index].innerHTML = "&nbsp;^";
            };
            // 选择下拉菜单
            scope.toggleItem = function (index, item) {
                scope.flgArr[scope.fieldIndex] = index;
                // scope.hideModal(scope.fieldIndex);
                var els = $(element.find(".select-ul")[scope.fieldIndex]).find(".space-flg");

                // 清除所有相同元素的样式
                for (var i = 0; i < els.length; i++)
                    els[i].innerHTML = "&nbsp;&nbsp;&nbsp;";
                // 添加选中样式到点击对象上
                els[index].innerHTML = "&nbsp;&radic;&nbsp;";
                // 修改表头文字显示
                element.find(".thead-label")[scope.fieldIndex].innerHTML =
                    scope.tableData.field[scope.fieldIndex] + "(" + item + ")";

                /********* 筛选 **********/

                    // 最终数组
                var result = [];
                for (var t = 0; t < scope.tableData.data.length; t++)
                    result.push(scope.tableData.data[t]);

                /**
                 * 递归筛选出最终数组
                 * index 标识列项目
                 * flgArr[index]标识被选列详细条目的下标
                 */
                var recursive = function (index) {
                    if (index < scope.flgArr.length) {
                        if (scope.flgArr[index] > -1) {
                            // 获取被筛选项
                            var seed = scope.tableData.filter[index][scope.flgArr[index]];
                            if(seed != "全部"){
                                var tmpArr = [];
                                for (var i = 0; i < result.length; i++) {
                                    console.log(seed, result[i][index]);
                                    if (seed == result[i][index]) {
                                        tmpArr.push(result[i]);
                                    }
                                }
                                result = tmpArr;
                            }
                        }
                        recursive(++index);
                    }
                };
                recursive(0);
                scope.showData = result;
            }
        }
    }
});

// 定义column-filter上的属性指令, 将数据传入column-filter
app.directive("ngTableData", function () {
    return {
        require: "^columnFilter",
        link: function(scope, element, attrs, columnFilterCtrl){
            columnFilterCtrl.getTableData(scope[attrs.ngTableData]);
        }
    }
});