
var qrData=document.getElementById("dataInput");
var qrImage=document.getElementById("imageInput");
var qrColor=document.getElementById("colorInput");
var qrColor1=document.getElementById("colorInput1");
var qrColor2=document.getElementById("colorInput2");
var qrType=document.getElementById("typeInput");
var qrType1=document.getElementById("typeInput1");
var qrType2=document.getElementById("typeInput2");
var colorc1=document.querySelector(".colorc1");
var colorc2=document.querySelector(".colorc2");
var colorc3=document.querySelector(".colorc3");
var sdbar1img=document.querySelector(".sdbar1-img");
var whatsapp_cls=document.querySelector(".whatsapp_Cls");
var phno=document.getElementById("phno");
var msg=document.getElementById("msg");
var wok=document.getElementById("wok");
var whatsapp=document.getElementById("whatsapp");

var sms_cls=document.querySelector(".sms_Cls");
var sphno=document.getElementById("sphno");
var smsg=document.getElementById("smsg");
var sok=document.getElementById("sok");
var sms=document.getElementById("sms");

var contact_cls=document.querySelector(".contact_Cls");
var cid=document.getElementById("cid");
var cok=document.getElementById("cok");
var phone=document.getElementById("phone");

var mail_cls=document.querySelector(".mail_Cls");
var mid=document.getElementById("mid");
var mmsg=document.getElementById("mmsg");
var sub=document.getElementById("sub");
var mok=document.getElementById("mok");
var mail=document.getElementById("mail");

var wifi_cls=document.querySelector(".wifi_Cls");
var wifiid=document.getElementById("wifiid");
var wifipass=document.getElementById("wifiPass");
var wiok=document.getElementById("wiok");
var wifi=document.getElementById("wifi");

var url_cls=document.querySelector(".url_Cls");
var urlx=document.getElementById("urlx");
var uok=document.getElementById("uok");


var text_cls=document.querySelector(".text_Cls");
var txtx=document.getElementById("txtx");
var tok=document.getElementById("tok");

var vcard_cls=document.querySelector(".vcard_Cls");
var vfn=document.getElementById("vfn");
var vln=document.getElementById("vln");
var vphno=document.getElementById("vphno");
var vmail=document.getElementById("vemail");
var vok=document.getElementById("vok");
var vcard1=document.getElementById("vcard");
var btn=document.getElementById("d");
var txtxurl,urlxurl,whatsappURL,smsURL,mailURL,URL,contact,vcard,wifiURL;
const wifiEncryption="WPA";

function navigate(select){
    const nav = select.value;
    if (nav) {
      window.location.href = nav;
}}

const qrCode=new QRCodeStyling({
    width:300,
    height:300,
    margin:10,
    data: "http://google.co.in",
    image:"",
    dotsOptions: {
        color:"Black",
        type: "square"
    },
    backgroundOptions: {
        color:"White"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin:3,
        imageSize:0.4
    },
    cornersSquareOptions:{
        type:"square"
    }
});

function reset ()
{
    qrCode.update({
        
    width:300,
    height:300,
    margin:10,
    data: "http://google.co.in",
    image:"",
    dotsOptions: {
        color:"Black",
        type: "square"
    },
    backgroundOptions: {
        color:"White"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin:3,
        imageSize:0.4
    },
    cornersSquareOptions:{
        type:"square"
    },
    cornersDotOptions:{
        type:"square"
    },
    })

    colorc1.value="#000";
    colorc2.value="#000";
    colorc3.value="#FFFFFF";
    sdbar1img.src="images/github.svg";
}

function typedatabtn(a) {
    text_cls.style.display="none";
    url_cls.style.display="none";
    whatsapp_cls.style.display="none";
    sms_cls.style.display="none";
    mail_cls.style.display="none";
    contact_cls.style.display="none";
    vcard_cls.style.display="none";
    wifi_cls.style.display="none";
    
    if(a==1){ url_cls.style.display="block"; }
    if(a==2){ text_cls.style.display="block"; }
    if(a==3){ whatsapp_cls.style.display="block"; }
    if(a==4){ contact_cls.style.display="block"; }
    if(a==5){ vcard_cls.style.display="block"; }
    if(a==6){ sms_cls.style.display="block"; }
    if(a==7){ mail_cls.style.display="block"; }
    if(a==8){ wifi_cls.style.display="block"; }
}

function updateQrDataz1() {
    urlxurl='https://'+urlx.value;
    qrCode.update({
        data:urlxurl
    });
}

function updateQrDataz2() {
    txtxurl=txtx.value;
    qrCode.update({
        data:txtxurl
    });
}

function updateQrDataz3() {
    whatsappURL=`https://wa.me/${phno.value}?text=${msg.value}`;
    qrCode.update({
        data:whatsappURL
    });
}

function updateQrDataz4() {
    contact=`tel:${cid.value}`;
    qrCode.update({
        data:contact
    });
}

function updateQrDataz5() {
    vcard=`BEGIN:VCARD
    VERSION:3.0
    N:${vln.value};${vfn.value}
    FN:${vfn.value} ${vln.value}
    TEL;TYPE=cell:${vphno.value}
    EMAIL:${vmail.value}
    END:VCARD`.trim();
    qrCode.update({
        data:vcard
    });
}

function updateQrDataz6() {
    smsURL=`sms:${sphno.value}?body=${smsg.value}`;
    qrCode.update({
        data:smsURL
    });
}

function updateQrDataz7() {
    mailURL=`mailto:${mid.value}?subject=${sub.value}&body=${mmsg.value}`;
    qrCode.update({
        data:mailURL
    });
}

function updateQrDataz8() {
    wifiURL=`WIFI:T:${wifiEncryption};S:${wifiid.value};P:${wifipass.value};`;
    qrCode.update({
        data:wifiURL
    });
}

/*qrData.addEventListener("click",()=>{
    imgbox1.style.display = "none";            
    imgbox2.style.display = "none";
});*/

const updateQrImg1=()=>{
    qrImage=URL.createObjectURL(qrImage. files[0]);
    qrCode.update({
        image: newQrImage
    });
    sdbar1img.src=newQrImage;
    imgbox1.style.display = "none";
}

var image;
const updateQrImg=(a)=>{
    image=a;
    qrCode.update({
        image: image
    });
    sdbar1img.src=image;
    imgbox1.style.display = "none";
}

var dotcolor;
var dot1color;
const updateQrColor1=()=>{
    dot1color=qrColor1.value;
    console.log(dot1color);
    newQrColor=qrColor1.value;
    qrCode.update({
    backgroundOptions: {
            color:newQrColor
        }
    });
};

var dot2color;
const updateQrColor2=()=>{
    dot2color=qrColor2.value;
    dot1color=qrColor1.value;
    dotcolor=qrColor.value;
    console.log(dotcolor,dot1color);
    qrCode.update({
    dotsOptions:{
        gradient:{
            type:"linear",
            colorStops:[
                {
                    offset:0,
                    color:dotcolor
                },
                {
                    offset:1,
                    color:dot2color
                }
            ]
        }
        }
    });
};

const updateQrType=(a)=>{
    newQrType=a;
    qrCode.update({
        dotsOptions: {
            type: newQrType
        }
    });
    imgbox2.style.display = "none";
}

const updateQrType1=(a)=>{
    newQrType1=a;
    qrCode.update({
        cornersSquareOptions: {
            type: newQrType1
        }
    });
    imgbox2.style.display = "none";
}

const updateQrType2=(a)=>{
    newQrType1=a;
    qrCode.update({
        cornersDotOptions: {
            type: newQrType1
        }
    });
    imgbox2.style.display = "none";
}

const downloadJPG=()=>{
    qrCode.download("jpg");
}
const downloadPNG=()=>{
    qrCode.download("png");
}
const downloadSVG=()=>{
    qrCode.download("svg");
}
const downloadPDF=()=>{
    qrCode.download("pdf");
}
qrCode.append(document.getElementById("canvas"));

document.querySelectorAll('.faq-item h2').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});

//icon div box open 
var infoBox = document.getElementById('info-box');
var img1 =document.getElementById("img1");
var img2 =document.getElementById("img2");
var imgbox1 =document.getElementById("img1-box");
var imgbox2 =document.getElementById("img2-box");
var body=document.getElementById("body");
var check=false;

img1.addEventListener("focusout",()=>{
    imgbox1.style.display = "none";
    imgbox2.style.display = "none"; 
});
function show1(a,c) {
    check=c;
    if(check==true){
        show(a);
    }
    else if(check==false){
        body();
    }
}
function show(a) {
    console.log(check);
    if(a==1)
    {
        if(imgbox1.style.display == "flex")
        {
            imgbox1.style.display = "none";
        }
        else
        {
            imgbox2.style.display = "none";
            imgbox1.style.display = "flex";
        }
    }
    else if(a==2)
    {
        if(imgbox2.style.display == "flex")
        {
            imgbox2.style.display = "none";
        }
        else
        {
            imgbox1.style.display = "none";
            imgbox2.style.display = "flex";
        }
    }
}

function body(){
    window.addEventListener("click",()=>{
        console.log(check);   
    });
}

console.log(qrImage.value);

