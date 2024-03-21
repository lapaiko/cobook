<!DOCTYPE html>
<html>
<body>

<?php

/*
function odd($var)
{
    // является ли переданное число нечётным
    return $var & 1;
}

function even($var)
{
    // является ли переданное число чётным
    return !($var & 1);
}*/
/*
function array_column($array,$column_name)
    {

        return array_map(function($element) use($column_name){return $element[$column_name];}, $array);

    }
*/
$ch= [
 "2024-02-12"=> [
        "fiz"=> [
        	"status"=> "Done",
            "task"=> ["Форма"],
            "check"=> ["ok"]       ],
        "prog"=> [
            "status"=> "Done",
            "task"=> ["Стор. 155 завд.8"],
            "check"=> ["ok"]       ],
        "eng"=> [
            "status"=> "Set",
            "task"=> ["2024-02-09 Немає за"],
            "check"=> ["no"]       ],
        "nat"=> [
            "status"=> "Done",
            "task"=> ["Параг. 25-"],
            "check"=> ["ok"]	],
        "uklen"=> [
            "status"=> "Done",
            "task"=> ["Впр. 445"],
            "check"=> ["ok"]      ]
    ],
    "2024-02-13"=> [
        "pain"=> [
            "status"=> "None",
            "task"=> ["2024-02-06 Немає зав"],
            "check"=> ["no"]  	],
        "geog"=> [ 
        	"status"=> "Done",
            "task"=> ["Параг.32"],
            "check"=> ["ok"]    ],
        "uklen"=> [
            "status"=> "None",
            "task"=> ["-"],
            "check"=> ["no"] ],
        "hist"=> [
            "status"=> "Done",
            "task"=> ["Параг. 37,38"],
            "check"=> ["ok"]],
        "mat"=> [
            "status"=> "Done",
            "task"=> ["№1097"],
            "check"=> ["ok"]],
        "eng"=> [
            "status"=> "None",
            "task"=> ["-"],
            "check"=> ["no"] ],
        "fiz"=> [
        	"status"=> "Done",
            "task"=> ["Форма"],
            "check"=> ["ok"] ]  ] ];

function cube($n)
{
    return array_column($n, key($n));;
}
$b = array_map('cube', $ch);
foreach ($b as $k=>$av)
foreach ($av as $ak=>$s)echo "$k=>$ak=>$s<br>";
echo "<br>";
$c = array_map('cube', $b);
foreach ($c as $k=>$v) echo "$k=>$v<br>";

//print_r($c);
//$key=array_search("Set", array_column($c, 'status'));
//echo $key; // Выведет 0, первое совпадение

//foreach ($b as $k=>$v) echo "$k=>$v<br>";

//$last_names = array_column($ch, key($ch));
//print_r($last_names);
//echo count($last_names);

//$key = array_search("Set", array_column($ch, 'status'));
//echo $key; // Выведет 0, первое совпадение


//$key = array_search('Set', array_column($ch, 'status'));
//echo $key; // Выведет 0, первое совпадение

  
//$arr = array_filter($ch,function($a,$d,$p){
//  return $a[$d][$d]["status"]=="Set";});            
//echo count($arr);    
    
/*
$array1 = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5];
$array2 = [6, 7, 8, 9, 10, 11, 12];

echo "Нечётные:<br>";
$arr = array_filter($array1, "odd");
foreach($arr as $k=>$v) echo "$k=>$v";


echo "<br>Чётные:<br>";
print_r(array_filter($array2, "even"));
*/
?>

</body>
</html>
