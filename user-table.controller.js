/**
 * Created by lonelydawn on 2017-05-25.
 */

var app = angular.module("app", []);

app.controller("testCtrl", function($scope){
    // 用户名、性别、年龄、学历、手机、邮箱、所在城市
    // $scope.arr = {
    //     filter : [
    //         {
    //             index: 1,
    //             options: ["全部", "男", "女"]
    //         },{
    //             index: 6,
    //             options: ["全部", "北京", "上海", "深圳", "广州", "南京", "合肥", "济南", "青岛"]
    //         }
    //     ],
    //     field : ["用户名", "性别", "年龄", "学历", "手机", "邮箱", "所在城市"],
    //     data : [{
    //         "username" : "朱成龙",
    //         "sex" : "男",
    //         "age" : "26",
    //         "education" : "专科",
    //         "phone" : "15052997869",
    //         "email" : "chenglong@sina.com",
    //         "city" : "上海"
    //     },{
    //         "username" : "朱成凤",
    //         "sex" : "女",
    //         "age" : "24",
    //         "education" : "本科",
    //         "phone" : "15052997896",
    //         "email" : "chengfeng@sina.com",
    //         "city" : "上海"
    //     },{
    //         "username" : "卜成西",
    //         "sex" : "男",
    //         "age" : "25",
    //         "education" : "本科",
    //         "phone" : "15950695188",
    //         "email" : "chengxi@sina.com",
    //         "city" : "南京"
    //     },{
    //         "username" : "李佳楠",
    //         "sex" : "男",
    //         "age" : "24",
    //         "education" : "本科",
    //         "phone" : "18270366617",
    //         "email" : "jianan@sina.com",
    //         "city" : "青岛"
    //     },{
    //         "username" : "何炳龙",
    //         "sex" : "男",
    //         "age" : "27",
    //         "education" : "硕士",
    //         "phone" : "18054788191",
    //         "email" : "binglong@sina.com",
    //         "city" : "济南"
    //     },{
    //         "username" : "朱莉",
    //         "sex" : "女",
    //         "age" : "28",
    //         "education" : "博士",
    //         "phone" : "18051362345",
    //         "email" : "zhuli@sina.com",
    //         "city" : "广州"
    //     },{
    //         "username" : "王三虎",
    //         "sex" : "男",
    //         "age" : "26",
    //         "education" : "本科",
    //         "phone" : "15950478902",
    //         "email" : "sanhu@sina.com",
    //         "city" : "合肥"
    //     },{
    //         "username" : "李大庆",
    //         "sex" : "男",
    //         "age" : "25",
    //         "education" : "本科",
    //         "phone" : "15050575859",
    //         "email" : "daqing@sina.com",
    //         "city" : "深圳"
    //     },{
    //         "username" : "李茂才",
    //         "sex" : "男",
    //         "age" : "26",
    //         "education" : "本科",
    //         "phone" : "15325487966",
    //         "email" : "maocai@sina.com",
    //         "city" : "深圳"
    //     },{
    //         "username" : "朱曦怡",
    //         "sex" : "女",
    //         "age" : "24",
    //         "education" : "本科",
    //         "phone" : "15983035665",
    //         "email" : "xiyi@sina.com",
    //         "city" : "北京"
    //     }]
    // };

    $scope.arr = {
        filter : {
            1: ["全部", "男", "女"],
            6: ["全部", "北京", "上海", "深圳", "广州", "南京", "合肥", "济南", "青岛"]
        },
        field : ["用户名", "性别", "年龄", "学历", "手机", "邮箱", "所在城市"],
        data : [[
            "朱成龙",
            "男",
            "26",
            "专科",
            "15052997869",
            "chenglong@sina.com",
            "上海"
        ],[
            "朱成凤",
            "女",
            "24",
            "本科",
            "15052997896",
            "chengfeng@sina.com",
            "上海"
        ],[
            "卜成西",
            "男",
            "25",
            "本科",
            "15950695188",
            "chengxi@sina.com",
            "南京"
        ],[
            "李佳楠",
            "男",
            "24",
            "本科",
            "18270366617",
            "jianan@sina.com",
            "青岛"
        ],[
            "何炳龙",
            "男",
            "27",
            "硕士",
            "18054788191",
            "binglong@sina.com",
            "济南"
        ],[
            "朱莉",
            "女",
            "28",
            "博士",
            "18051362345",
            "zhuli@sina.com",
            "广州"
        ],[
            "王三虎",
            "男",
            "26",
            "本科",
            "15950478902",
            "sanhu@sina.com",
            "合肥"
        ],[
            "李大庆",
            "男",
            "25",
            "本科",
            "15050575859",
            "daqing@sina.com",
            "深圳"
        ],[
            "李茂才",
            "男",
            "26",
            "本科",
            "15325487966",
            "maocai@sina.com",
            "深圳"
        ],[
            "朱曦怡",
            "女",
            "24",
            "本科",
            "15983035665",
            "xiyi@sina.com",
            "北京"
        ]]
    };
});