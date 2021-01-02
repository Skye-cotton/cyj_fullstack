- 将字符串转换为驼峰式大小写
    将-/_分隔的单词转换为驼峰式大写字母。
    仅当原始单词为大写时，输出中的第一个单词才应大写
    例如：
    toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
    toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

    1. 用正则表达式写
    - replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
    stringObject.replace(regexp/substr,replacement)
    返回值：一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。
    - toUpperCase() 方法用于把字符串转换为大写。