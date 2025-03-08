
import D3CanvasNetworkgraph from "https://lutiaskokopelli.github.io/stories/outerwilds/owhtml/src/js-nodegraph.js"
var tags=[],rels=[]
for(i=0;i<tagselect.length;i++){
    const name=tagselect[i].value.split("#")[1]
    var r=5,b='royalblue',ls=1,c=[29,74,148]
    // What other tags this tag’s ASTERISK toggles:
    if(tagselect[i].previousSibling){if(tagselect[i].previousSibling.tagName=='M'){
        b='orange'
        inputs=document.querySelectorAll('input[n*="'+name+'"]')
        for(n=0;n<inputs.length;n++){
            r+=.2
            ls+=1
            c=[c[0]+3,c[1]+1,c[2]-2]
            if((inputs[n].getAttribute('n').split('#').filter((m)=>m)).includes(name)){
                rels.push({
                    source:name,
                    target:inputs[n].value.split('#')[1],
                    color:'royalblue',
                    width:10
                })
            }
        }
    }}
    // What other tags selecting this tag will PASSIVELY show (orange):
    if(tagselect[i].hasAttribute('n')){
        const ntgs=tagselect[i].getAttribute('n').replace('!','').replace('@','').split('#').filter((m)=>m)
        for(n=0;n<ntgs.length;n++){
            rels.push({
                source: name,
                target: ntgs[n],
                color: "orange",
                width:1
            })
        }
    }
    tags.push({
        id:name,
        tooltip:name,
        label:true,
        labelFontSize:ls,
        color:'rgb('+c[0].toString()+','+c[1].toString()+','+c[2].toString()+')',
        radius:r,
        border:b
    })
}
let networkgraph=D3CanvasNetworkgraph(document.querySelector('canvas'),{nodes:tags,links:rels},{
    sticky:false,
    drag:true,
    simulation:null,
    zoom:true,
    events:{
        onZoom:null,
        onResize:null,
    },
    node:{
        // color:null,
        // border:true,
        // radius:10,
        borderWidth:1,
        label:null,
        labelFontSize:5,
        labelColor:"#fff",
        labelFontFamily:"Consolas",
        // tooltip:null,
        // tooltipFontSize:20,
        // onClick:null,
        // onHover:null,
        // onDrag:null,
    },link:{color:"#fff"}
})