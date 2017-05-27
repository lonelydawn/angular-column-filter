# angular-column-filter
This is a table column filter depending on jquery and angular.
You can use it to select needed data by toggle the thead field.

## dependencies
* jquery
* angular1.x

## npm install
You can get it by npm.
```javascript
npm install angular-column-filter
```
or clone it from [https://github.com/lonelydawn/angular-column-filter.git](https://github.com/lonelydawn/angular-column-filter.git) manually.

## usage
```html
<link rel="stylesheet" media="screen" href="angular-column-filter/dist/column-filter.css"/>
<column-filter ng-table-data="arr"></column-filter>
<script type="text/javascript" src="dist/column-filter.directive.js"></script>
```

This package just designed for program which ng-app = "app".
If u want to extend or change its apply, u can simply modify column-filter.directive.js.

## parameter
Currently, we have only parameter.
* ng-table-data
This parameter construct the table including of data and data's filter.

The parameter accepts a json array.
For example.

```javascript
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
```
#### filter
The key filter is a json array, its key indicates which column will be transformed to a filter and its value make up the filter options.

#### field
'field' is a array, it make up the thead.

#### data
'data' is a two-dimensional array, it make up the tbody.

## notice
You must notice that filter is used for transforming some column to be a filter, so its key can't out of index of data or field's length. Then you must know the data[i]'s length equals field's length.

## end
OK,that's all.Then u can take a try!
