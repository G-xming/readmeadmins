function x() {
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
/*  iframe.src = "https://example.com"; */
    iframe.src = "js";
    win.document.body.appendChild(iframe);
/*  win.document.title = "alphabet"
    var abtitle = win.document.createElement('title');
    abtitle.innerHTML = "Home | ";
    win.document.body.appendChild(abtitle);
*/
}

function f(){
    window.location.assign("https://google.com")
}