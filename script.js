function changeStr(str_) {
    var str = str_.toLowerCase();
    var str2 = str.split(" ");
    var str3 = [];
    for (var i = 0; i < str2.length; i++){
        if (!str2[i]) return str2[i];
          str3[i] = str2[i][0].toUpperCase() + str2[i].slice(1);
    }
    str3 = str3.join(" ");
    return str3;
}

var str_User = prompt("Ваше ФИО полностью?");
alert(changeStr(str_User));

//changeStr("гайда денис сергеевич");
//changeStr("ГАЙДА ДЕНИС СЕРГЕЕВИЧ");
//changeStr("гайда ДЕНИС сергеевич");


