// hatena bookmark count
function hatebTxt(count){
    if(count == 0){
        return;
    }
    else {
        document.write("<a href=http://b.hatena.ne.jp/entry/");
        document.write(url);
        if  (count < 10){
            document.write(" class='hatenaA'");
        }
        else{
            document.write(" class='hatenaB'");
        }
        document.write(" target='_blank'>");
        if (count == 1){
            document.write(count+' user');
        }
        else{
            document.write(count+' users');
        }
        document.write("</a>");
    }
}
