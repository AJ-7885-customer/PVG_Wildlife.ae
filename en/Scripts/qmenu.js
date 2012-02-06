//Design & Develop by (www.AliJamali.com)

//Compressed CSS Styles
document.write('<!--%%%%%%%%%%%% QuickMenu Styles [Keep in head for full validation!] %%%%%%%%%%%--><style type="text/css">/*!!!!!!!!!!! QuickMenu Core CSS [Do Not Modify!] !!!!!!!!!!!!!*/.qmmc .qmdivider{display:block;font-size:1px;border-width:0px;border-style:solid;}.qmmc .qmdividery{float:left;width:0px;}.qmmc .qmtitle{display:block;cursor:default;white-space:nowrap;}.qmclear {font-size:1px;height:0px;width:0px;clear:left;line-height:0px;display:block;float:none !important;}.qmmc {position:relative;zoom:1;}.qmmc a, .qmmc li {float:left;display:block;white-space:nowrap;}.qmmc div a, .qmmc ul a, .qmmc ul li {float:none;}.qmsh div a {float:left;}.qmmc div{visibility:hidden;position:absolute;}/*!!!!!!!!!!! QuickMenu Styles [Please Modify!] !!!!!!!!!!!*//* QuickMenu 0 */#qm0{padding:0px 10px 0px 40px;margin:0px;border-width:0px;border-style:solid;border-color:#09181E;}#qm0 a{padding:3px 20px 3px 3px;margin:0px;background-color:#000E3C;color:#256982;font-family:Verdana;font-size:12px;text-decoration:none;border-width:0px 0px 1px 0px;border-style:solid;border-color:#081321;}#qm0 a:hover{color:#FFFFFF;border-color:#000926;}body #qm0 .qmactive, body #qm0 .qmactive:hover{background-color:#306FBC;color:#FFFFFF;border-color:#000926;}#qm0 div{padding:3px;border-width:1px;border-style:none;border-color:#306FBC;}#qm0 div a{padding:3px 20px 3px 5px;color:#50ABCD;font-size:9px;border-width:0px;border-color:#FFFEFA;}#qm0 div a:hover{color:#FFFEFA;text-decoration:none;}body #qm0 div .qmactive, body #qm0 div .qmactive:hover{background-color:#00114A;color:#50ABCD;text-decoration:none;}#qm0 .qmritem span{border-color:#666666;background-color:#EEEEEE;}#qm0 .qmritemcontent{padding:0px 0px 0px 4px;}#qm0 div .qmritem span{border-color:#666666;background-color:#EEEEEE;}#qm0 div .qmritemcontent{padding:0px 0px 0px 4px;}</style>');

//Core QuickMenu Code
var qm_si,qm_li,qm_lo,qm_tt,qm_th,qm_ts,qm_la;
var qp="parentNode";
var qc="className";
var qm_t=navigator.userAgent;
var qm_o=qm_t.indexOf("Opera")+1;
var qm_s=qm_t.indexOf("afari")+1;
var qm_s2=qm_s&&window.XMLHttpRequest;
var qm_n=qm_t.indexOf("Netscape")+1;
var qm_v=parseFloat(navigator.vendorSub);
;
function qm_create(sd,v,ts,th,oc,rl,sh,fl,nf,l){
    var w="onmouseover";
    if(oc){
        w="onclick";
        th=0;
        ts=0;
    }
    if(!l){
        l=1;
        qm_th=th;
        sd=document.getElementById("qm"+sd);
        if(window.qm_pure)sd=qm_pure(sd);
        sd[w]=function(e){
            qm_kille(e)
            };

        document[w]=qm_bo;
        sd.style.zoom=1;
        if(sh)x2("qmsh",sd,1);
        if(!v)sd.ch=1;
    }else  if(sh)sd.ch=1;
    if(sh)sd.sh=1;
    if(fl)sd.fl=1;
    if(rl)sd.rl=1;
    sd.style.zIndex=l+""+1;
    var lsp;
    var sp=sd.childNodes;
    for(var i=0;i<sp.length;i++){
        var b=sp[i];
        if(b.tagName=="A"){
            lsp=b;
            b[w]=qm_oo;
            b.qmts=ts;
            if(l==1&&v){
                b.style.styleFloat="none";
                b.style.cssFloat="none";
            }
        }
        if(b.tagName=="DIV"){
        if(window.showHelp&&!window.XMLHttpRequest)sp[i].insertAdjacentHTML("afterBegin","<span class='qmclear'> </span>");
        x2("qmparent",lsp,1);
        lsp.cdiv=b;
        b.idiv=lsp;
        if(qm_n&&qm_v<8&&!b.style.width)b.style.width=b.offsetWidth+"px";
        new qm_create(b,null,ts,th,oc,rl,sh,fl,nf,l+1);
    }
    }
};

function qm_bo(e){
    qm_la=null;
    clearTimeout(qm_tt);
    qm_tt=null;
    if(qm_li&&!qm_tt)qm_tt=setTimeout("x0()",qm_th);
};

function x0(){
    var a;
    if((a=qm_li)){
        do{
            qm_uo(a);
        }while((a=a[qp])&&!qm_a(a))
    }
    qm_li=null;
};

function qm_a(a){
    if(a[qc].indexOf("qmmc")+1)return 1;
};

function qm_uo(a,go){
    if(!go&&a.qmtree)return;
    if(window.qmad&&qmad.bhide)eval(qmad.bhide);
    a.style.visibility="";
    x2("qmactive",a.idiv);
};
;


function qm_oo(e,o,nt){
    if(!o)o=this;
    if(qm_la==o)return;
    if(window.qmad&&qmad.bhover&&!nt)eval(qmad.bhover);
    if(window.qmwait){
        qm_kille(e);
        return;
    }
    clearTimeout(qm_tt);
    qm_tt=null;
    if(!nt&&o.qmts){
        qm_si=o;
        qm_tt=setTimeout("qm_oo(new Object(),qm_si,1)",o.qmts);
        return;
    }
    var a=o;
    if(a[qp].isrun){
        qm_kille(e);
        return;
    }
    qm_la=o;
    var go=true;
    while((a=a[qp])&&!qm_a(a)){
        if(a==qm_li)go=false;
    }
    if(qm_li&&go){
        a=o;
        if((!a.cdiv)||(a.cdiv&&a.cdiv!=qm_li))qm_uo(qm_li);
        a=qm_li;
        while((a=a[qp])&&!qm_a(a)){
            if(a!=o[qp])qm_uo(a);else break;
        }
    }
    var b=o;
var c=o.cdiv;
if(b.cdiv){
    var aw=b.offsetWidth;
    var ah=b.offsetHeight;
    var ax=b.offsetLeft;
    var ay=b.offsetTop;
    if(c[qp].ch){
        aw=0;
        if(c.fl)ax=0;
    }else {
        if(c.rl){
            ax=ax-c.offsetWidth;
            aw=0;
        }
        ah=0;
    }
    if(qm_o){
        ax-=b[qp].clientLeft;
        ay-=b[qp].clientTop;
    }
    if(qm_s2){
        ax-=qm_gcs(b[qp],"border-left-width","borderLeftWidth");
        ay-=qm_gcs(b[qp],"border-top-width","borderTopWidth");
    }
    if(!c.ismove){
        c.style.left=(ax+aw)+"px";
        c.style.top=(ay+ah)+"px";
    }
    x2("qmactive",o,1);
    if(window.qmad&&qmad.bvis)eval(qmad.bvis);
    c.style.visibility="inherit";
    qm_li=c;
}else  if(!qm_a(b[qp]))qm_li=b[qp];else qm_li=null;
qm_kille(e);
};

function qm_gcs(obj,sname,jname){
    var v;
    if(document.defaultView&&document.defaultView.getComputedStyle)v=document.defaultView.getComputedStyle(obj,null).getPropertyValue(sname);
    else  if(obj.currentStyle)v=obj.currentStyle[jname];
    if(v&&!isNaN(v=parseInt(v)))return v;else return 0;
};

function x2(name,b,add){
    var a=b[qc];
    if(add){
        if(a.indexOf(name)==-1)b[qc]+=(a?' ':'')+name;
    }else {
        b[qc]=a.replace(" "+name,"");
        b[qc]=b[qc].replace(name,"");
    }
};

function qm_kille(e){
    if(!e)e=event;
    e.cancelBubble=true;
    if(e.stopPropagation&&!(qm_s&&e.type=="click"))e.stopPropagation();
}

//Add-On Core Code (Remove when not using any add-on's)
document.write('<style type="text/css">.qmfv{visibility:visible !important;}.qmfh{visibility:hidden !important;}</style><script type="text/JavaScript">var qmad = new Object();qmad.bvis="";qmad.bhide="";qmad.bhover="";</script>');


/*******  Menu 0 Add-On Settings *******/
var a = qmad.qm0 = new Object();

// Keep Subs In window Add On
a.subs_in_window_active = true;

// IE Over Select Fix Add On
a.overselects_active = true;


//Add-On Code: IE Over Select Fix
if(window.showHelp&&!window.XMLHttpRequest){
    if(qmad.bvis.indexOf("qm_over_select(b.cdiv);")==-1){
        qmad.bvis+="qm_over_select(b.cdiv);";
        qmad.bhide+="qm_over_select(a,1);";
    }
};

function qm_over_select(a,hide){
    var z;
    if((z=window.qmv)&&(z=z.addons)&&(z=z.over_select)&&!z["on"+qm_index(a)])return;
    if(!a.settingsid){
        var v=a;
        while(!qm_a(v))v=v[qp];
        a.settingsid=v.id;
    }
    var ss=qmad[a.settingsid];
    if(!ss)return;
    if(!ss.overselects_active)return;
    if(!hide&&!a.hasselectfix){
        var f=document.createElement("IFRAME");
        f.style.position="absolute";
        f.style.filter="alpha(opacity=0)";
        f.src="javascript:false;";
        f=a.parentNode.appendChild(f);
        f.frameborder=0;
        a.hasselectfix=f;
    }
    var b=a.hasselectfix;
    if(b){
        if(hide)b.style.display="none";
        else {
            if(a.hasrcorner&&a.hasrcorner.style.visibility=="inherit")a=a.hasrcorner;
            var oxy=0;
            if(a.hasshadow&&a.hasshadow.style.visibility=="inherit")oxy=parseInt(ss.shadow_offset);
            if(!oxy)oxy=0;
            b.style.width=a.offsetWidth+oxy;
            b.style.height=a.offsetHeight+oxy;
            b.style.top=a.style.top;
            b.style.left=a.style.left;
            b.style.margin=a.currentStyle.margin;
            b.style.display="block";
        }
    }
}

//Add-On Code: Keep Subs In window
qmad.apsubs=new Object();
if(qmad.bvis.indexOf("qm_apsubs(b.cdiv,o);")==-1)qmad.bvis+="qm_apsubs(b.cdiv,o);";
;
function qm_apsubs(a){
    var z;
    if((z=window.qmv)&&(z=z.addons)&&(z=z.apsubs)&&!z["on"+qm_index(a)])return;
    if(!a.settingsid){
        var v=a;
        while(!qm_a(v))v=v[qp];
        a.settingsid=v.id;
    }
    var ss=qmad[a.settingsid];
    if(!ss)return;
    if(!ss.subs_in_window_active)return;
    var wh=qm_get_doc_wh();
    var sxy=qm_get_doc_scrollxy();
    var xy=qm_get_offset(a);
    var c1=a.offsetWidth+xy[0];
    var c2=wh[0]+sxy[0];
    if(c1>c2){
        a.style.left=(parseInt(a.style.left)-(c1-c2))+"px";
        if(a.hasrcorner)a.hasrcorner.style.left=(parseInt(a.hasrcorner.style.left)-(c1-c2))+"px";
        if(a.hasshadow)a.hasshadow.style.left=(parseInt(a.hasshadow.style.left)-(c1-c2))+"px";
        if(a.hasselectfix)a.hasselectfix.style.left=(parseInt(a.hasselectfix.style.left)-(c1-c2))+"px";
    }
    c1=a.offsetHeight+xy[1];
    c2=wh[1]+sxy[1];
    if(c1>c2){
        a.style.top=(parseInt(a.style.top)-(c1-c2))+"px";
        if(a.hasrcorner)a.hasrcorner.style.top=(parseInt(a.hasrcorner.style.top)-(c1-c2))+"px";
        if(a.hasshadow)a.hasshadow.style.top=(parseInt(a.hasshadow.style.top)-(c1-c2))+"px";
        if(a.hasselectfix)a.hasselectfix.style.top=(parseInt(a.hasselectfix.style.top)-(c1-c2))+"px";
    }
};

function qm_get_offset(obj){
    var x=0;
    var y=0;
    do{
        x+=obj.offsetLeft;
        y+=obj.offsetTop;
    }while(obj=obj.offsetParent)return new Array(x,y);
};

function qm_get_doc_scrollxy(){
    var sy=0;
    var sx=0;
    if((sd=document.documentElement)&&(sd=sd.scrollTop))sy=sd;
    else  if(sd=document.body.scrollTop)sy=sd;
    if((sd=document.documentElement)&&(sd=sd.scrollLeft))sx=sd;
    else  if(sd=document.body.scrollLeft)sx=sd;
    return new Array(sx,sy);
};

function qm_get_doc_wh(){
    db=document.body;
    var w=0;
    var h=0;
    if(tval=window.innerHeight){
        h=tval;
        w=window.innerWidth;
    }else  if((e=document.documentElement)&&(e=e.clientHeight)){
        h=e;
        w=document.documentElement.clientWidth;
    }else  if(e=db.clientHeight){
        if(!h)h=e;
        if(!w)w=db.clientWidth;
    }
    return new Array(w,h);
}

//Compressed Menu Structure
document.write('<div id="qm0" class="qmmc"><a href="http://www.wildlife.ae/en/index.php" title="HOME" style="width:50px;padding:15px;margin:1px;font-size:12px;font-weight:bold;text-align:center;">HOME</a><a href="http://www.wildlife.ae/en/birds/fauna.php" title="FAUNA" style="width:60px;padding:15px;margin:1px;font-size:12px;font-weight:bold;text-align:center;">FAUNA</a><a href="javascript:void(0);" style="width:70px;padding:15px;margin:1px;font-size:12px;font-weight:bold;text-align:center;">GALLERY</a><div><a href="http://www.wildlife.ae/en/stills/" title="STILLS" style="padding:8px;margin:1px;text-align:left;">STILLS</a><a href="http://www.wildlife.ae/en/360stills/" title="360 STILLS" style="padding:8px;margin:1px;text-align:left;">360 STILLS</a><a href="http://www.wildlife.ae/en/video/" title="VIDEO" style="padding:8px;margin:1px;text-align:left;">VIDEO</a><a href="http://www.wildlife.ae/en/360video/" title="360 VIDEO" style="padding:8px;margin:1px;text-align:left;">360 VIDEO</a><a href="http://www.wildlife.ae/en/live/" title="LIVE WEBCAM" style="padding:8px;margin:1px;text-align:left;">LIVE WEBCAM</a></div><a href="javascript:void(0);" style="width:120px;padding:15px;margin:1px;font-size:12px;font-weight:bold;text-align:center;">THE SANCTUARY</a><div><a href="http://www.wildlife.ae/en/sanctuary/dos-donts.php" title="DO`S & DONT`S" style="padding:8px;margin:1px;text-align:left;">DO`S & DONT`S</a><a href="http://www.wildlife.ae/en/sanctuary/rules.php" title="Rules & Regualtions" style="padding:8px;margin:1px;text-align:left;">RULES & REGUALTIONS</a><a href="http://www.wildlife.ae/en/sanctuary/management.php" title="MANAGMENT & HISTORY" style="padding:8px;margin:1px;text-align:left;">MANAGMENT & HISTORY</a><a href="http://www.wildlife.ae/en/sanctuary/factsheet.php" title="SANCTUARY FACTSHEET" style="padding:8px;margin:1px;text-align:left;">SANCTUARY FACTSHEET</a><a href="http://www.wildlife.ae/en/sanctuary/future.php" title="FUTURE OF THE SANCTUARY" style="padding:8px;margin:1px;text-align:left;">FUTURE OF THE SANCTUARY</a><a href="http://www.wildlife.ae/en/sanctuary/terrain.php" title="THE TERRAIN" style="padding:8px;margin:1px;text-align:left;">THE TERRAIN</a></div><a href="javascript:void(0);" style="width:100px;padding:15px;margin:1px;font-size:12px;font-weight:bold;text-align:center;">PLAN A VISIT</a><div><a href="http://www.wildlife.ae/en/visit/hides.php" title="HIDES" style="padding:8px;margin:1px;text-align:left;">HIDES</a><a href="http://www.wildlife.ae/en/visit/visitation.php" title="VISITATION" style="padding:8px;margin:1px;text-align:left;">VISITATION</a></div><a href="javascript:void(0);" style="width:120px;padding:15px;margin:1px;font-size:12px;font-weight:bold;text-align:center;">FANSITE FOR KIDS</a><div><a href="http://www.wildlife.ae/en/kids/jigsaw.php" title="JIGSAW GAME" style="padding:8px;margin:1px;text-align:left;">JIGSAW GAME</a><a href="http://www.wildlife.ae/en/kids/posters.php" title="POSTERS" style="padding:8px;margin:1px;text-align:left;">POSTERS</a><a href="http://www.wildlife.ae/en/kids/colouring.php" title="COLOURING" style="padding:8px;margin:1px;text-align:left;">COLOURING</a><a href="http://www.wildlife.ae/en/kids/screensaver.php" title="SCREENSAVER" style="padding:8px;margin:1px;text-align:left;">SCREENSAVER</a><a href="http://www.wildlife.ae/en/kids/discover.php" title="DISCOVER A FLAMINGO" style="padding:8px;margin:1px;text-align:left;">DISCOVER A FLAMINGO</a><a href="http://www.wildlife.ae/en/kids/hear.php" title="HEAR A FLAMINGO" style="padding:8px;margin:1px;text-align:left;">HEAR A FLAMINGO</a></div><span class="qmclear"> </span></div><script type="text/javascript">qm_create(0,false,100,500,false,false,false,false);</script>');