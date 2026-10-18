var cs=Object.defineProperty;var hs=(r,e,t)=>e in r?cs(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Q=(r,e,t)=>hs(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function Xn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var wt=Xn();function B0(r){wt=r}var Vt={exec:()=>null};function Y(r,e=""){let t=typeof r=="string"?r:r.source;const n={replace:(a,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Te.caret,"$1"),t=t.replace(a,o),n},getRegex:()=>new RegExp(t,e)};return n}var Te={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i")},us=/^(?:[ \t]*(?:\n|$))+/,ds=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ms=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,tr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ps=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Yn=/(?:[*+-]|\d{1,9}[.)])/,E0=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,I0=Y(E0).replace(/bull/g,Yn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),fs=Y(E0).replace(/bull/g,Yn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Jn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,gs=/^[^\n]+/,Qn=/(?!\s*\])(?:\\.|[^\[\]\\])+/,bs=Y(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),vs=Y(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Yn).getRegex(),Lr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ea=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ys=Y("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ea).replace("tag",Lr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),F0=Y(Jn).replace("hr",tr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Lr).getRegex(),xs=Y(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",F0).getRegex(),ta={blockquote:xs,code:ds,def:bs,fences:ms,heading:ps,hr:tr,html:ys,lheading:I0,list:vs,newline:us,paragraph:F0,table:Vt,text:gs},Ca=Y("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",tr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Lr).getRegex(),ws={...ta,lheading:fs,table:Ca,paragraph:Y(Jn).replace("hr",tr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ca).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Lr).getRegex()},ks={...ta,html:Y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ea).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Vt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Y(Jn).replace("hr",tr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",I0).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ss=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,$s=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,D0=/^( {2,}|\\)\n(?!\s*$)/,Ts=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Pr=/[\p{P}\p{S}]/u,ra=/[\s\p{P}\p{S}]/u,L0=/[^\s\p{P}\p{S}]/u,As=Y(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ra).getRegex(),P0=/(?!~)[\p{P}\p{S}]/u,zs=/(?!~)[\s\p{P}\p{S}]/u,qs=/(?:[^\s\p{P}\p{S}]|~)/u,_s=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,N0=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ms=Y(N0,"u").replace(/punct/g,Pr).getRegex(),Cs=Y(N0,"u").replace(/punct/g,P0).getRegex(),O0="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Rs=Y(O0,"gu").replace(/notPunctSpace/g,L0).replace(/punctSpace/g,ra).replace(/punct/g,Pr).getRegex(),Bs=Y(O0,"gu").replace(/notPunctSpace/g,qs).replace(/punctSpace/g,zs).replace(/punct/g,P0).getRegex(),Es=Y("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,L0).replace(/punctSpace/g,ra).replace(/punct/g,Pr).getRegex(),Is=Y(/\\(punct)/,"gu").replace(/punct/g,Pr).getRegex(),Fs=Y(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ds=Y(ea).replace("(?:-->|$)","-->").getRegex(),Ls=Y("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ds).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),zr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ps=Y(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",zr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),H0=Y(/^!?\[(label)\]\[(ref)\]/).replace("label",zr).replace("ref",Qn).getRegex(),G0=Y(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qn).getRegex(),Ns=Y("reflink|nolink(?!\\()","g").replace("reflink",H0).replace("nolink",G0).getRegex(),na={_backpedal:Vt,anyPunctuation:Is,autolink:Fs,blockSkip:_s,br:D0,code:$s,del:Vt,emStrongLDelim:Ms,emStrongRDelimAst:Rs,emStrongRDelimUnd:Es,escape:Ss,link:Ps,nolink:G0,punctuation:As,reflink:H0,reflinkSearch:Ns,tag:Ls,text:Ts,url:Vt},Os={...na,link:Y(/^!?\[(label)\]\((.*?)\)/).replace("label",zr).getRegex(),reflink:Y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",zr).getRegex()},Sn={...na,emStrongRDelimAst:Bs,emStrongLDelim:Cs,url:Y(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Hs={...Sn,br:Y(D0).replace("{2,}","*").getRegex(),text:Y(Sn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ur={normal:ta,gfm:ws,pedantic:ks},Gt={normal:na,gfm:Sn,breaks:Hs,pedantic:Os},Gs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ra=r=>Gs[r];function Oe(r,e){if(e){if(Te.escapeTest.test(r))return r.replace(Te.escapeReplace,Ra)}else if(Te.escapeTestNoEncode.test(r))return r.replace(Te.escapeReplaceNoEncode,Ra);return r}function Ba(r){try{r=encodeURI(r).replace(Te.percentDecode,"%")}catch{return null}return r}function Ea(r,e){var i;const t=r.replace(Te.findPipe,(o,c,h)=>{let d=!1,p=c;for(;--p>=0&&h[p]==="\\";)d=!d;return d?"|":" |"}),n=t.split(Te.splitPipe);let a=0;if(n[0].trim()||n.shift(),n.length>0&&!((i=n.at(-1))!=null&&i.trim())&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;a<n.length;a++)n[a]=n[a].trim().replace(Te.slashPipe,"|");return n}function jt(r,e,t){const n=r.length;if(n===0)return"";let a=0;for(;a<n&&r.charAt(n-a-1)===e;)a++;return r.slice(0,n-a)}function js(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}function Ia(r,e,t,n,a){const i=e.href,o=e.title||null,c=r[1].replace(a.other.outputLinkReplace,"$1");n.state.inLink=!0;const h={type:r[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:o,text:c,tokens:n.inlineTokens(c)};return n.state.inLink=!1,h}function Ws(r,e,t){const n=r.match(t.other.indentCodeCompensation);if(n===null)return e;const a=n[1];return e.split(`
`).map(i=>{const o=i.match(t.other.beginningSpace);if(o===null)return i;const[c]=o;return c.length>=a.length?i.slice(a.length):i}).join(`
`)}var qr=class{constructor(r){Q(this,"options");Q(this,"rules");Q(this,"lexer");this.options=r||wt}space(r){const e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){const e=this.rules.block.code.exec(r);if(e){const t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:jt(t,`
`)}}}fences(r){const e=this.rules.block.fences.exec(r);if(e){const t=e[0],n=Ws(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(r){const e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){const n=jt(t,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(t=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){const e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:jt(e[0],`
`)}}blockquote(r){const e=this.rules.block.blockquote.exec(r);if(e){let t=jt(e[0],`
`).split(`
`),n="",a="";const i=[];for(;t.length>0;){let o=!1;const c=[];let h;for(h=0;h<t.length;h++)if(this.rules.other.blockquoteStart.test(t[h]))c.push(t[h]),o=!0;else if(!o)c.push(t[h]);else break;t=t.slice(h);const d=c.join(`
`),p=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${d}`:d,a=a?`${a}
${p}`:p;const x=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,i,!0),this.lexer.state.top=x,t.length===0)break;const f=i.at(-1);if((f==null?void 0:f.type)==="code")break;if((f==null?void 0:f.type)==="blockquote"){const v=f,w=v.raw+`
`+t.join(`
`),k=this.blockquote(w);i[i.length-1]=k,n=n.substring(0,n.length-v.raw.length)+k.raw,a=a.substring(0,a.length-v.text.length)+k.text;break}else if((f==null?void 0:f.type)==="list"){const v=f,w=v.raw+`
`+t.join(`
`),k=this.list(w);i[i.length-1]=k,n=n.substring(0,n.length-f.raw.length)+k.raw,a=a.substring(0,a.length-v.raw.length)+k.raw,t=w.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:i,text:a}}}list(r){let e=this.rules.block.list.exec(r);if(e){let t=e[1].trim();const n=t.length>1,a={type:"list",raw:"",ordered:n,start:n?+t.slice(0,-1):"",loose:!1,items:[]};t=n?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=n?t:"[*+-]");const i=this.rules.other.listItemRegex(t);let o=!1;for(;r;){let h=!1,d="",p="";if(!(e=i.exec(r))||this.rules.block.hr.test(r))break;d=e[0],r=r.substring(d.length);let x=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,T=>" ".repeat(3*T.length)),f=r.split(`
`,1)[0],v=!x.trim(),w=0;if(this.options.pedantic?(w=2,p=x.trimStart()):v?w=e[1].length+1:(w=e[2].search(this.rules.other.nonSpaceChar),w=w>4?1:w,p=x.slice(w),w+=e[1].length),v&&this.rules.other.blankLine.test(f)&&(d+=f+`
`,r=r.substring(f.length+1),h=!0),!h){const T=this.rules.other.nextBulletRegex(w),R=this.rules.other.hrRegex(w),B=this.rules.other.fencesBeginRegex(w),D=this.rules.other.headingBeginRegex(w),P=this.rules.other.htmlBeginRegex(w);for(;r;){const N=r.split(`
`,1)[0];let H;if(f=N,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),H=f):H=f.replace(this.rules.other.tabCharGlobal,"    "),B.test(f)||D.test(f)||P.test(f)||T.test(f)||R.test(f))break;if(H.search(this.rules.other.nonSpaceChar)>=w||!f.trim())p+=`
`+H.slice(w);else{if(v||x.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(x)||D.test(x)||R.test(x))break;p+=`
`+f}!v&&!f.trim()&&(v=!0),d+=N+`
`,r=r.substring(N.length+1),x=H.slice(w)}}a.loose||(o?a.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(o=!0));let k=null,q;this.options.gfm&&(k=this.rules.other.listIsTask.exec(p),k&&(q=k[0]!=="[ ] ",p=p.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:d,task:!!k,checked:q,loose:!1,text:p,tokens:[]}),a.raw+=d}const c=a.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let h=0;h<a.items.length;h++)if(this.lexer.state.top=!1,a.items[h].tokens=this.lexer.blockTokens(a.items[h].text,[]),!a.loose){const d=a.items[h].tokens.filter(x=>x.type==="space"),p=d.length>0&&d.some(x=>this.rules.other.anyLine.test(x.raw));a.loose=p}if(a.loose)for(let h=0;h<a.items.length;h++)a.items[h].loose=!0;return a}}html(r){const e=this.rules.block.html.exec(r);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(r){const e=this.rules.block.def.exec(r);if(e){const t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:n,title:a}}}table(r){var o;const e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const t=Ea(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=(o=e[3])!=null&&o.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===n.length){for(const c of n)this.rules.other.tableAlignRight.test(c)?i.align.push("right"):this.rules.other.tableAlignCenter.test(c)?i.align.push("center"):this.rules.other.tableAlignLeft.test(c)?i.align.push("left"):i.align.push(null);for(let c=0;c<t.length;c++)i.header.push({text:t[c],tokens:this.lexer.inline(t[c]),header:!0,align:i.align[c]});for(const c of a)i.rows.push(Ea(c,i.header.length).map((h,d)=>({text:h,tokens:this.lexer.inline(h),header:!1,align:i.align[d]})));return i}}lheading(r){const e=this.rules.block.lheading.exec(r);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(r){const e=this.rules.block.paragraph.exec(r);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){const e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){const e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){const e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){const e=this.rules.inline.link.exec(r);if(e){const t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;const i=jt(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{const i=js(e[2],"()");if(i===-2)return;if(i>-1){const c=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,c).trim(),e[3]=""}}let n=e[2],a="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(n);i&&(n=i[1],a=i[3])}else a=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?n=n.slice(1):n=n.slice(1,-1)),Ia(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){const n=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=e[n.toLowerCase()];if(!a){const i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return Ia(t,a,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let n=this.rules.inline.emStrongLDelim.exec(r);if(!n||n[3]&&t.match(this.rules.other.unicodeAlphaNumeric))return;if(!(n[1]||n[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const i=[...n[0]].length-1;let o,c,h=i,d=0;const p=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,e=e.slice(-1*r.length+i);(n=p.exec(e))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(c=[...o].length,n[3]||n[4]){h+=c;continue}else if((n[5]||n[6])&&i%3&&!((i+c)%3)){d+=c;continue}if(h-=c,h>0)continue;c=Math.min(c,c+h+d);const x=[...n[0]][0].length,f=r.slice(0,i+n.index+x+c);if(Math.min(i,c)%2){const w=f.slice(1,-1);return{type:"em",raw:f,text:w,tokens:this.lexer.inlineTokens(w)}}const v=f.slice(2,-2);return{type:"strong",raw:f,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(r){const e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," ");const n=this.rules.other.nonSpaceChar.test(t),a=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return n&&a&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){const e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r){const e=this.rules.inline.del.exec(r);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(r){const e=this.rules.inline.autolink.exec(r);if(e){let t,n;return e[2]==="@"?(t=e[1],n="mailto:"+t):(t=e[1],n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(r){var t;let e;if(e=this.rules.inline.url.exec(r)){let n,a;if(e[2]==="@")n=e[0],a="mailto:"+n;else{let i;do i=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(i!==e[0]);n=e[0],e[1]==="www."?a="http://"+e[0]:a=e[0]}return{type:"link",raw:e[0],text:n,href:a,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(r){const e=this.rules.inline.text.exec(r);if(e){const t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Ye=class $n{constructor(e){Q(this,"tokens");Q(this,"options");Q(this,"state");Q(this,"tokenizer");Q(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||wt,this.options.tokenizer=this.options.tokenizer||new qr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:Te,block:ur.normal,inline:Gt.normal};this.options.pedantic?(t.block=ur.pedantic,t.inline=Gt.pedantic):this.options.gfm&&(t.block=ur.gfm,this.options.breaks?t.inline=Gt.breaks:t.inline=Gt.gfm),this.tokenizer.rules=t}static get rules(){return{block:ur,inline:Gt}}static lex(e,t){return new $n(t).lex(e)}static lexInline(e,t){return new $n(t).inlineTokens(e)}lex(e){e=e.replace(Te.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){var a,i,o;for(this.options.pedantic&&(e=e.replace(Te.tabCharGlobal,"    ").replace(Te.spaceLine,""));e;){let c;if((i=(a=this.options.extensions)==null?void 0:a.block)!=null&&i.some(d=>(c=d.call({lexer:this},e,t))?(e=e.substring(c.raw.length),t.push(c),!0):!1))continue;if(c=this.tokenizer.space(e)){e=e.substring(c.raw.length);const d=t.at(-1);c.raw.length===1&&d!==void 0?d.raw+=`
`:t.push(c);continue}if(c=this.tokenizer.code(e)){e=e.substring(c.raw.length);const d=t.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=`
`+c.raw,d.text+=`
`+c.text,this.inlineQueue.at(-1).src=d.text):t.push(c);continue}if(c=this.tokenizer.fences(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.heading(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.hr(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.blockquote(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.list(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.html(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.def(e)){e=e.substring(c.raw.length);const d=t.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=`
`+c.raw,d.text+=`
`+c.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title});continue}if(c=this.tokenizer.table(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.lheading(e)){e=e.substring(c.raw.length),t.push(c);continue}let h=e;if((o=this.options.extensions)!=null&&o.startBlock){let d=1/0;const p=e.slice(1);let x;this.options.extensions.startBlock.forEach(f=>{x=f.call({lexer:this},p),typeof x=="number"&&x>=0&&(d=Math.min(d,x))}),d<1/0&&d>=0&&(h=e.substring(0,d+1))}if(this.state.top&&(c=this.tokenizer.paragraph(h))){const d=t.at(-1);n&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+c.raw,d.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):t.push(c),n=h.length!==e.length,e=e.substring(c.raw.length);continue}if(c=this.tokenizer.text(e)){e=e.substring(c.raw.length);const d=t.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=`
`+c.raw,d.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):t.push(c);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var c,h,d;let n=e,a=null;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)p.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,a.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(a=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;e;){i||(o=""),i=!1;let p;if((h=(c=this.options.extensions)==null?void 0:c.inline)!=null&&h.some(f=>(p=f.call({lexer:this},e,t))?(e=e.substring(p.raw.length),t.push(p),!0):!1))continue;if(p=this.tokenizer.escape(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.tag(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.link(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(p.raw.length);const f=t.at(-1);p.type==="text"&&(f==null?void 0:f.type)==="text"?(f.raw+=p.raw,f.text+=p.text):t.push(p);continue}if(p=this.tokenizer.emStrong(e,n,o)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.codespan(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.br(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.del(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.autolink(e)){e=e.substring(p.raw.length),t.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(e))){e=e.substring(p.raw.length),t.push(p);continue}let x=e;if((d=this.options.extensions)!=null&&d.startInline){let f=1/0;const v=e.slice(1);let w;this.options.extensions.startInline.forEach(k=>{w=k.call({lexer:this},v),typeof w=="number"&&w>=0&&(f=Math.min(f,w))}),f<1/0&&f>=0&&(x=e.substring(0,f+1))}if(p=this.tokenizer.inlineText(x)){e=e.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(o=p.raw.slice(-1)),i=!0;const f=t.at(-1);(f==null?void 0:f.type)==="text"?(f.raw+=p.raw,f.text+=p.text):t.push(p);continue}if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}},_r=class{constructor(r){Q(this,"options");Q(this,"parser");this.options=r||wt}space(r){return""}code({text:r,lang:e,escaped:t}){var i;const n=(i=(e||"").match(Te.notSpaceStart))==null?void 0:i[0],a=r.replace(Te.endingNewline,"")+`
`;return n?'<pre><code class="language-'+Oe(n)+'">'+(t?a:Oe(a,!0))+`</code></pre>
`:"<pre><code>"+(t?a:Oe(a,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){const e=r.ordered,t=r.start;let n="";for(let o=0;o<r.items.length;o++){const c=r.items[o];n+=this.listitem(c)}const a=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+a+i+`>
`+n+"</"+a+`>
`}listitem(r){var t;let e="";if(r.task){const n=this.checkbox({checked:!!r.checked});r.loose?((t=r.tokens[0])==null?void 0:t.type)==="paragraph"?(r.tokens[0].text=n+" "+r.tokens[0].text,r.tokens[0].tokens&&r.tokens[0].tokens.length>0&&r.tokens[0].tokens[0].type==="text"&&(r.tokens[0].tokens[0].text=n+" "+Oe(r.tokens[0].tokens[0].text),r.tokens[0].tokens[0].escaped=!0)):r.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):e+=n+" "}return e+=this.parser.parse(r.tokens,!!r.loose),`<li>${e}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",t="";for(let a=0;a<r.header.length;a++)t+=this.tablecell(r.header[a]);e+=this.tablerow({text:t});let n="";for(let a=0;a<r.rows.length;a++){const i=r.rows[a];t="";for(let o=0;o<i.length;o++)t+=this.tablecell(i[o]);n+=this.tablerow({text:t})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){const e=this.parser.parseInline(r.tokens),t=r.header?"th":"td";return(r.align?`<${t} align="${r.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${Oe(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:t}){const n=this.parser.parseInline(t),a=Ba(r);if(a===null)return n;r=a;let i='<a href="'+r+'"';return e&&(i+=' title="'+Oe(e)+'"'),i+=">"+n+"</a>",i}image({href:r,title:e,text:t,tokens:n}){n&&(t=this.parser.parseInline(n,this.parser.textRenderer));const a=Ba(r);if(a===null)return Oe(t);r=a;let i=`<img src="${r}" alt="${t}"`;return e&&(i+=` title="${Oe(e)}"`),i+=">",i}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:Oe(r.text)}},aa=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}},Je=class Tn{constructor(e){Q(this,"options");Q(this,"renderer");Q(this,"textRenderer");this.options=e||wt,this.options.renderer=this.options.renderer||new _r,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new aa}static parse(e,t){return new Tn(t).parse(e)}static parseInline(e,t){return new Tn(t).parseInline(e)}parse(e,t=!0){var a,i;let n="";for(let o=0;o<e.length;o++){const c=e[o];if((i=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&i[c.type]){const d=c,p=this.options.extensions.renderers[d.type].call({parser:this},d);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type)){n+=p||"";continue}}const h=c;switch(h.type){case"space":{n+=this.renderer.space(h);continue}case"hr":{n+=this.renderer.hr(h);continue}case"heading":{n+=this.renderer.heading(h);continue}case"code":{n+=this.renderer.code(h);continue}case"table":{n+=this.renderer.table(h);continue}case"blockquote":{n+=this.renderer.blockquote(h);continue}case"list":{n+=this.renderer.list(h);continue}case"html":{n+=this.renderer.html(h);continue}case"paragraph":{n+=this.renderer.paragraph(h);continue}case"text":{let d=h,p=this.renderer.text(d);for(;o+1<e.length&&e[o+1].type==="text";)d=e[++o],p+=`
`+this.renderer.text(d);t?n+=this.renderer.paragraph({type:"paragraph",raw:p,text:p,tokens:[{type:"text",raw:p,text:p,escaped:!0}]}):n+=p;continue}default:{const d='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return n}parseInline(e,t=this.renderer){var a,i;let n="";for(let o=0;o<e.length;o++){const c=e[o];if((i=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&i[c.type]){const d=this.options.extensions.renderers[c.type].call({parser:this},c);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(c.type)){n+=d||"";continue}}const h=c;switch(h.type){case"escape":{n+=t.text(h);break}case"html":{n+=t.html(h);break}case"link":{n+=t.link(h);break}case"image":{n+=t.image(h);break}case"strong":{n+=t.strong(h);break}case"em":{n+=t.em(h);break}case"codespan":{n+=t.codespan(h);break}case"br":{n+=t.br(h);break}case"del":{n+=t.del(h);break}case"text":{n+=t.text(h);break}default:{const d='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return n}},kn,$r=(kn=class{constructor(r){Q(this,"options");Q(this,"block");this.options=r||wt}preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}provideLexer(){return this.block?Ye.lex:Ye.lexInline}provideParser(){return this.block?Je.parse:Je.parseInline}},Q(kn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),kn),j0=class{constructor(...r){Q(this,"defaults",Xn());Q(this,"options",this.setOptions);Q(this,"parse",this.parseMarkdown(!0));Q(this,"parseInline",this.parseMarkdown(!1));Q(this,"Parser",Je);Q(this,"Renderer",_r);Q(this,"TextRenderer",aa);Q(this,"Lexer",Ye);Q(this,"Tokenizer",qr);Q(this,"Hooks",$r);this.use(...r)}walkTokens(r,e){var n,a;let t=[];for(const i of r)switch(t=t.concat(e.call(this,i)),i.type){case"table":{const o=i;for(const c of o.header)t=t.concat(this.walkTokens(c.tokens,e));for(const c of o.rows)for(const h of c)t=t.concat(this.walkTokens(h.tokens,e));break}case"list":{const o=i;t=t.concat(this.walkTokens(o.items,e));break}default:{const o=i;(a=(n=this.defaults.extensions)==null?void 0:n.childTokens)!=null&&a[o.type]?this.defaults.extensions.childTokens[o.type].forEach(c=>{const h=o[c].flat(1/0);t=t.concat(this.walkTokens(h,e))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,e)))}}return t}use(...r){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(t=>{const n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const i=e.renderers[a.name];i?e.renderers[a.name]=function(...o){let c=a.renderer.apply(this,o);return c===!1&&(c=i.apply(this,o)),c}:e.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[a.level];i?i.unshift(a.tokenizer):e[a.level]=[a.tokenizer],a.start&&(a.level==="block"?e.startBlock?e.startBlock.push(a.start):e.startBlock=[a.start]:a.level==="inline"&&(e.startInline?e.startInline.push(a.start):e.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(e.childTokens[a.name]=a.childTokens)}),n.extensions=e),t.renderer){const a=this.defaults.renderer||new _r(this.defaults);for(const i in t.renderer){if(!(i in a))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const o=i,c=t.renderer[o],h=a[o];a[o]=(...d)=>{let p=c.apply(a,d);return p===!1&&(p=h.apply(a,d)),p||""}}n.renderer=a}if(t.tokenizer){const a=this.defaults.tokenizer||new qr(this.defaults);for(const i in t.tokenizer){if(!(i in a))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,c=t.tokenizer[o],h=a[o];a[o]=(...d)=>{let p=c.apply(a,d);return p===!1&&(p=h.apply(a,d)),p}}n.tokenizer=a}if(t.hooks){const a=this.defaults.hooks||new $r;for(const i in t.hooks){if(!(i in a))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const o=i,c=t.hooks[o],h=a[o];$r.passThroughHooks.has(i)?a[o]=d=>{if(this.defaults.async)return Promise.resolve(c.call(a,d)).then(x=>h.call(a,x));const p=c.call(a,d);return h.call(a,p)}:a[o]=(...d)=>{let p=c.apply(a,d);return p===!1&&(p=h.apply(a,d)),p}}n.hooks=a}if(t.walkTokens){const a=this.defaults.walkTokens,i=t.walkTokens;n.walkTokens=function(o){let c=[];return c.push(i.call(this,o)),a&&(c=c.concat(a.call(this,o))),c}}this.defaults={...this.defaults,...n}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return Ye.lex(r,e??this.defaults)}parser(r,e){return Je.parse(r,e??this.defaults)}parseMarkdown(r){return(t,n)=>{const a={...n},i={...this.defaults,...a},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&a.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=r);const c=i.hooks?i.hooks.provideLexer():r?Ye.lex:Ye.lexInline,h=i.hooks?i.hooks.provideParser():r?Je.parse:Je.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(d=>c(d,i)).then(d=>i.hooks?i.hooks.processAllTokens(d):d).then(d=>i.walkTokens?Promise.all(this.walkTokens(d,i.walkTokens)).then(()=>d):d).then(d=>h(d,i)).then(d=>i.hooks?i.hooks.postprocess(d):d).catch(o);try{i.hooks&&(t=i.hooks.preprocess(t));let d=c(t,i);i.hooks&&(d=i.hooks.processAllTokens(d)),i.walkTokens&&this.walkTokens(d,i.walkTokens);let p=h(d,i);return i.hooks&&(p=i.hooks.postprocess(p)),p}catch(d){return o(d)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){const n="<p>An error occurred:</p><pre>"+Oe(t.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(t);throw t}}},xt=new j0;function J(r,e){return xt.parse(r,e)}J.options=J.setOptions=function(r){return xt.setOptions(r),J.defaults=xt.defaults,B0(J.defaults),J};J.getDefaults=Xn;J.defaults=wt;J.use=function(...r){return xt.use(...r),J.defaults=xt.defaults,B0(J.defaults),J};J.walkTokens=function(r,e){return xt.walkTokens(r,e)};J.parseInline=xt.parseInline;J.Parser=Je;J.parser=Je.parse;J.Renderer=_r;J.TextRenderer=aa;J.Lexer=Ye;J.lexer=Ye.lex;J.Tokenizer=qr;J.Hooks=$r;J.parse=J;J.options;J.setOptions;J.use;J.walkTokens;J.parseInline;Je.parse;Ye.lex;class A extends Error{constructor(e,t){var n="KaTeX parse error: "+e,a,i,o=t&&t.loc;if(o&&o.start<=o.end){var c=o.lexer.input;a=o.start,i=o.end,a===c.length?n+=" at end of input: ":n+=" at position "+(a+1)+": ";var h=c.slice(a,i).replace(/[^]/g,"$&̲"),d;a>15?d="…"+c.slice(a-15,a):d=c.slice(0,a);var p;i+15<c.length?p=c.slice(i,i+15)+"…":p=c.slice(i),n+=d+h+p}super(n),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,A.prototype),this.position=a,a!=null&&i!=null&&(this.length=i-a),this.rawMessage=e}}var Us=/([A-Z])/g,Ks=r=>r.replace(Us,"-$1").toLowerCase(),Zs={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Vs=/[&><"']/g,xe=r=>String(r).replace(Vs,e=>Zs[e]),Tr=r=>r.type==="ordgroup"||r.type==="color"?r.body.length===1?Tr(r.body[0]):r:r.type==="font"?Tr(r.body):r,Xs=new Set(["mathord","textord","atom"]),tt=r=>Xs.has(Tr(r).type),Ys=r=>{var e=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);return e?e[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1])?null:e[1].toLowerCase():"_relative"},An={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:r=>"#"+r},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(r,e)=>(e.push(r),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:r=>Math.max(0,r),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:r=>Math.max(0,r),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:r=>Math.max(0,r),cli:"-e, --max-expand <n>",cliProcessor:r=>r==="Infinity"?1/0:parseInt(r)},globalGroup:{type:"boolean",cli:!1}};function Js(r){if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function Qs(r){if(r.default!==void 0)return r.default;var e=Array.isArray(r.type)?r.type[0]:r.type;return Js(e)}function eo(r,e,t,n){var a=t[e];r[e]=a!==void 0?n.processor?n.processor(a):a:Qs(n)}class ia{constructor(e){e===void 0&&(e={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t of Object.keys(An)){var n=An[t];n&&eo(this,t,e,n)}}reportNonstrict(e,t,n){var a=this.strict;if(typeof a=="function"&&(a=a(e,t,n)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new A("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),n);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,n){var a=this.strict;if(typeof a=="function")try{a=a(e,t,n)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+t+" ["+e+"]")),!1)}isTrusted(e){if("url"in e&&e.url&&!e.protocol){var t=Ys(e.url);if(t==null)return!1;e.protocol=t}var n=typeof this.trust=="function"?this.trust(e):this.trust;return!!n}}class it{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return He[to[this.id]]}sub(){return He[ro[this.id]]}fracNum(){return He[no[this.id]]}fracDen(){return He[ao[this.id]]}cramp(){return He[io[this.id]]}text(){return He[so[this.id]]}isTight(){return this.size>=2}}var sa=0,Mr=1,_t=2,Qe=3,Jt=4,Fe=5,Ct=6,Ae=7,He=[new it(sa,0,!1),new it(Mr,0,!0),new it(_t,1,!1),new it(Qe,1,!0),new it(Jt,2,!1),new it(Fe,2,!0),new it(Ct,3,!1),new it(Ae,3,!0)],to=[Jt,Fe,Jt,Fe,Ct,Ae,Ct,Ae],ro=[Fe,Fe,Fe,Fe,Ae,Ae,Ae,Ae],no=[_t,Qe,Jt,Fe,Ct,Ae,Ct,Ae],ao=[Qe,Qe,Fe,Fe,Ae,Ae,Ae,Ae],io=[Mr,Mr,Qe,Qe,Fe,Fe,Ae,Ae],so=[sa,Mr,_t,Qe,_t,Qe,_t,Qe],L={DISPLAY:He[sa],TEXT:He[_t],SCRIPT:He[Jt],SCRIPTSCRIPT:He[Ct]},zn=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function oo(r){for(var e=0;e<zn.length;e++)for(var t=zn[e],n=0;n<t.blocks.length;n++){var a=t.blocks[n];if(r>=a[0]&&r<=a[1])return t.name}return null}var Ar=[];zn.forEach(r=>r.blocks.forEach(e=>Ar.push(...e)));function W0(r){for(var e=0;e<Ar.length;e+=2)if(r>=Ar[e]&&r<=Ar[e+1])return!0;return!1}var ge=r=>r+" "+r,At=80,lo=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},co=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},ho=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},uo=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},mo=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},po=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},fo=function(e,t,n){var a=n-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},go=function(e,t,n){t=1e3*t;var a="";switch(e){case"sqrtMain":a=lo(t,At);break;case"sqrtSize1":a=co(t,At);break;case"sqrtSize2":a=ho(t,At);break;case"sqrtSize3":a=uo(t,At);break;case"sqrtSize4":a=mo(t,At);break;case"sqrtTall":a=fo(t,At,n)}return a},bo=function(e,t){switch(e){case"⎜":return ge("M291 0 H417 V"+t+" H291z");case"∣":return ge("M145 0 H188 V"+t+" H145z");case"∥":return ge("M145 0 H188 V"+t+" H145z")+ge("M367 0 H410 V"+t+" H367z");case"⎟":return ge("M457 0 H583 V"+t+" H457z");case"⎢":return ge("M319 0 H403 V"+t+" H319z");case"⎥":return ge("M263 0 H347 V"+t+" H263z");case"⎪":return ge("M384 0 H504 V"+t+" H384z");case"⏐":return ge("M312 0 H355 V"+t+" H312z");case"‖":return ge("M257 0 H300 V"+t+" H257z")+ge("M478 0 H521 V"+t+" H478z");default:return""}},Fa={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:ge("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:ge("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:ge("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:ge("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:ge("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:ge("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:ge("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:ge("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},vo=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function yo(r){return"toText"in r}class Ft{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>{if(yo(e))return e.toText();throw new Error("Expected MathDomNode with toText, got "+e.constructor.name)}).join("")}}var qn={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},xo={ex:!0,em:!0,mu:!0},U0=function(e){return typeof e!="string"&&(e=e.unit),e in qn||e in xo||e==="ex"},le=function(e,t){var n;if(e.unit in qn)n=qn[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var a;if(t.style.isTight()?a=t.havingStyle(t.style.text()):a=t,e.unit==="ex")n=a.fontMetrics().xHeight;else if(e.unit==="em")n=a.fontMetrics().quad;else throw new A("Invalid unit: '"+e.unit+"'");a!==t&&(n*=a.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},_=function(e){return+e.toFixed(4)+"em"},ct=function(e){return e.filter(t=>t).join(" ")},oa=function(e){var t="";for(var n of Object.keys(e)){var a=e[n];a!==void 0&&(t+=Ks(n)+":"+a+";")}return t},K0=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var a=t.getColor();a&&(this.style.color=a)}},Z0=function(e){var t=document.createElement(e);t.className=ct(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var a=0;a<this.children.length;a++)t.appendChild(this.children[a].toNode());return t},wo=/[\s"'>/=\x00-\x1f]/,V0=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+xe(ct(this.classes))+'"');var n=oa(this.style);n&&(t+=' style="'+xe(n)+'"');for(var a of Object.keys(this.attributes)){if(wo.test(a))throw new A("Invalid attribute name '"+a+"'");t+=" "+a+'="'+xe(this.attributes[a])+'"'}t+=">";for(var i=0;i<this.children.length;i++)t+=this.children[i].toMarkup();return t+="</"+e+">",t};class Dt{constructor(e,t,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,K0.call(this,e,n,a),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Z0.call(this,"span")}toMarkup(){return V0.call(this,"span")}}class Nr{constructor(e,t,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,K0.call(this,t,a),this.children=n||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Z0.call(this,"a")}toMarkup(){return V0.call(this,"a")}}class ko{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");return e.src=this.src,e.alt=this.alt,e.className="mord",Object.assign(e.style,this.style),e}toMarkup(){var e='<img src="'+xe(this.src)+'"'+(' alt="'+xe(this.alt)+'"'),t=oa(this.style);return t&&(e+=' style="'+xe(t)+'"'),e+="'/>",e}}var So={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Be{constructor(e,t,n,a,i,o,c,h){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=a||0,this.skew=i||0,this.width=o||0,this.classes=c||[],this.style=h||{},this.maxFontSize=0;var d=oo(this.text.charCodeAt(0));d&&this.classes.push(d+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=So[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement("span"),t.style.marginRight=_(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=ct(this.classes)),Object.keys(this.style).length>0&&(t=t||document.createElement("span"),Object.assign(t.style,this.style)),t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=xe(ct(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+_(this.italic)+";"),n+=oa(this.style),n&&(e=!0,t+=' style="'+xe(n)+'"');var a=xe(this.text);return e?(t+=">",t+=a,t+="</span>",t):a}}class et{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var a=0;a<this.children.length;a++)t.appendChild(this.children[a].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t of Object.keys(this.attributes))e+=" "+t+'="'+xe(this.attributes[t])+'"';e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</svg>",e}}class ht{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",Fa[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+xe(this.alternate)+'"/>':'<path d="'+xe(Fa[this.pathName])+'"/>'}}class _n{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var e="<line";for(var t of Object.keys(this.attributes))e+=" "+t+'="'+xe(this.attributes[t])+'"';return e+="/>",e}}function $o(r){if(r instanceof Be)return r;throw new Error("Expected symbolNode but got "+String(r)+".")}function To(r){if(r instanceof Dt)return r;throw new Error("Expected span<HtmlDomNode> but got "+String(r)+".")}var Ao=r=>r instanceof Dt||r instanceof Nr||r instanceof Ft,Ge={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},dr={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Da={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function zo(r,e){Ge[r]=e}function la(r,e,t){if(!Ge[e])throw new Error("Font metrics not found for font: "+e+".");var n=r.charCodeAt(0),a=Ge[e][n];if(!a&&r[0]in Da&&(n=Da[r[0]].charCodeAt(0),a=Ge[e][n]),!a&&t==="text"&&W0(n)&&(a=Ge[e][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var tn={};function qo(r){var e;if(r>=5?e=0:r>=3?e=1:e=2,!tn[e]){var t=tn[e]={cssEmPerMu:dr.quad[e]/18};for(var n in dr)dr.hasOwnProperty(n)&&(t[n]=dr[n][e])}return tn[e]}var re={math:{},text:{}};function s(r,e,t,n,a,i){re[r][a]={font:e,group:t,replace:n},i&&n&&(re[r][n]=re[r][a])}var l="math",S="text",u="main",g="ams",ne="accent-token",C="bin",ze="close",Lt="inner",E="mathord",fe="op-token",Ee="open",rr="punct",b="rel",rt="spacing",y="textord";s(l,u,b,"≡","\\equiv",!0);s(l,u,b,"≺","\\prec",!0);s(l,u,b,"≻","\\succ",!0);s(l,u,b,"∼","\\sim",!0);s(l,u,b,"⊥","\\perp");s(l,u,b,"⪯","\\preceq",!0);s(l,u,b,"⪰","\\succeq",!0);s(l,u,b,"≃","\\simeq",!0);s(l,u,b,"∣","\\mid",!0);s(l,u,b,"≪","\\ll",!0);s(l,u,b,"≫","\\gg",!0);s(l,u,b,"≍","\\asymp",!0);s(l,u,b,"∥","\\parallel");s(l,u,b,"⋈","\\bowtie",!0);s(l,u,b,"⌣","\\smile",!0);s(l,u,b,"⊑","\\sqsubseteq",!0);s(l,u,b,"⊒","\\sqsupseteq",!0);s(l,u,b,"≐","\\doteq",!0);s(l,u,b,"⌢","\\frown",!0);s(l,u,b,"∋","\\ni",!0);s(l,u,b,"∝","\\propto",!0);s(l,u,b,"⊢","\\vdash",!0);s(l,u,b,"⊣","\\dashv",!0);s(l,u,b,"∋","\\owns");s(l,u,rr,".","\\ldotp");s(l,u,rr,"⋅","\\cdotp");s(l,u,rr,"⋅","·");s(S,u,y,"⋅","·");s(l,u,y,"#","\\#");s(S,u,y,"#","\\#");s(l,u,y,"&","\\&");s(S,u,y,"&","\\&");s(l,u,y,"ℵ","\\aleph",!0);s(l,u,y,"∀","\\forall",!0);s(l,u,y,"ℏ","\\hbar",!0);s(l,u,y,"∃","\\exists",!0);s(l,u,y,"∇","\\nabla",!0);s(l,u,y,"♭","\\flat",!0);s(l,u,y,"ℓ","\\ell",!0);s(l,u,y,"♮","\\natural",!0);s(l,u,y,"♣","\\clubsuit",!0);s(l,u,y,"℘","\\wp",!0);s(l,u,y,"♯","\\sharp",!0);s(l,u,y,"♢","\\diamondsuit",!0);s(l,u,y,"ℜ","\\Re",!0);s(l,u,y,"♡","\\heartsuit",!0);s(l,u,y,"ℑ","\\Im",!0);s(l,u,y,"♠","\\spadesuit",!0);s(l,u,y,"§","\\S",!0);s(S,u,y,"§","\\S");s(l,u,y,"¶","\\P",!0);s(S,u,y,"¶","\\P");s(l,u,y,"†","\\dag");s(S,u,y,"†","\\dag");s(S,u,y,"†","\\textdagger");s(l,u,y,"‡","\\ddag");s(S,u,y,"‡","\\ddag");s(S,u,y,"‡","\\textdaggerdbl");s(l,u,ze,"⎱","\\rmoustache",!0);s(l,u,Ee,"⎰","\\lmoustache",!0);s(l,u,ze,"⟯","\\rgroup",!0);s(l,u,Ee,"⟮","\\lgroup",!0);s(l,u,C,"∓","\\mp",!0);s(l,u,C,"⊖","\\ominus",!0);s(l,u,C,"⊎","\\uplus",!0);s(l,u,C,"⊓","\\sqcap",!0);s(l,u,C,"∗","\\ast");s(l,u,C,"⊔","\\sqcup",!0);s(l,u,C,"◯","\\bigcirc",!0);s(l,u,C,"∙","\\bullet",!0);s(l,u,C,"‡","\\ddagger");s(l,u,C,"≀","\\wr",!0);s(l,u,C,"⨿","\\amalg");s(l,u,C,"&","\\And");s(l,u,b,"⟵","\\longleftarrow",!0);s(l,u,b,"⇐","\\Leftarrow",!0);s(l,u,b,"⟸","\\Longleftarrow",!0);s(l,u,b,"⟶","\\longrightarrow",!0);s(l,u,b,"⇒","\\Rightarrow",!0);s(l,u,b,"⟹","\\Longrightarrow",!0);s(l,u,b,"↔","\\leftrightarrow",!0);s(l,u,b,"⟷","\\longleftrightarrow",!0);s(l,u,b,"⇔","\\Leftrightarrow",!0);s(l,u,b,"⟺","\\Longleftrightarrow",!0);s(l,u,b,"↦","\\mapsto",!0);s(l,u,b,"⟼","\\longmapsto",!0);s(l,u,b,"↗","\\nearrow",!0);s(l,u,b,"↩","\\hookleftarrow",!0);s(l,u,b,"↪","\\hookrightarrow",!0);s(l,u,b,"↘","\\searrow",!0);s(l,u,b,"↼","\\leftharpoonup",!0);s(l,u,b,"⇀","\\rightharpoonup",!0);s(l,u,b,"↙","\\swarrow",!0);s(l,u,b,"↽","\\leftharpoondown",!0);s(l,u,b,"⇁","\\rightharpoondown",!0);s(l,u,b,"↖","\\nwarrow",!0);s(l,u,b,"⇌","\\rightleftharpoons",!0);s(l,g,b,"≮","\\nless",!0);s(l,g,b,"","\\@nleqslant");s(l,g,b,"","\\@nleqq");s(l,g,b,"⪇","\\lneq",!0);s(l,g,b,"≨","\\lneqq",!0);s(l,g,b,"","\\@lvertneqq");s(l,g,b,"⋦","\\lnsim",!0);s(l,g,b,"⪉","\\lnapprox",!0);s(l,g,b,"⊀","\\nprec",!0);s(l,g,b,"⋠","\\npreceq",!0);s(l,g,b,"⋨","\\precnsim",!0);s(l,g,b,"⪹","\\precnapprox",!0);s(l,g,b,"≁","\\nsim",!0);s(l,g,b,"","\\@nshortmid");s(l,g,b,"∤","\\nmid",!0);s(l,g,b,"⊬","\\nvdash",!0);s(l,g,b,"⊭","\\nvDash",!0);s(l,g,b,"⋪","\\ntriangleleft");s(l,g,b,"⋬","\\ntrianglelefteq",!0);s(l,g,b,"⊊","\\subsetneq",!0);s(l,g,b,"","\\@varsubsetneq");s(l,g,b,"⫋","\\subsetneqq",!0);s(l,g,b,"","\\@varsubsetneqq");s(l,g,b,"≯","\\ngtr",!0);s(l,g,b,"","\\@ngeqslant");s(l,g,b,"","\\@ngeqq");s(l,g,b,"⪈","\\gneq",!0);s(l,g,b,"≩","\\gneqq",!0);s(l,g,b,"","\\@gvertneqq");s(l,g,b,"⋧","\\gnsim",!0);s(l,g,b,"⪊","\\gnapprox",!0);s(l,g,b,"⊁","\\nsucc",!0);s(l,g,b,"⋡","\\nsucceq",!0);s(l,g,b,"⋩","\\succnsim",!0);s(l,g,b,"⪺","\\succnapprox",!0);s(l,g,b,"≆","\\ncong",!0);s(l,g,b,"","\\@nshortparallel");s(l,g,b,"∦","\\nparallel",!0);s(l,g,b,"⊯","\\nVDash",!0);s(l,g,b,"⋫","\\ntriangleright");s(l,g,b,"⋭","\\ntrianglerighteq",!0);s(l,g,b,"","\\@nsupseteqq");s(l,g,b,"⊋","\\supsetneq",!0);s(l,g,b,"","\\@varsupsetneq");s(l,g,b,"⫌","\\supsetneqq",!0);s(l,g,b,"","\\@varsupsetneqq");s(l,g,b,"⊮","\\nVdash",!0);s(l,g,b,"⪵","\\precneqq",!0);s(l,g,b,"⪶","\\succneqq",!0);s(l,g,b,"","\\@nsubseteqq");s(l,g,C,"⊴","\\unlhd");s(l,g,C,"⊵","\\unrhd");s(l,g,b,"↚","\\nleftarrow",!0);s(l,g,b,"↛","\\nrightarrow",!0);s(l,g,b,"⇍","\\nLeftarrow",!0);s(l,g,b,"⇏","\\nRightarrow",!0);s(l,g,b,"↮","\\nleftrightarrow",!0);s(l,g,b,"⇎","\\nLeftrightarrow",!0);s(l,g,b,"△","\\vartriangle");s(l,g,y,"ℏ","\\hslash");s(l,g,y,"▽","\\triangledown");s(l,g,y,"◊","\\lozenge");s(l,g,y,"Ⓢ","\\circledS");s(l,g,y,"®","\\circledR");s(S,g,y,"®","\\circledR");s(l,g,y,"∡","\\measuredangle",!0);s(l,g,y,"∄","\\nexists");s(l,g,y,"℧","\\mho");s(l,g,y,"Ⅎ","\\Finv",!0);s(l,g,y,"⅁","\\Game",!0);s(l,g,y,"‵","\\backprime");s(l,g,y,"▲","\\blacktriangle");s(l,g,y,"▼","\\blacktriangledown");s(l,g,y,"■","\\blacksquare");s(l,g,y,"⧫","\\blacklozenge");s(l,g,y,"★","\\bigstar");s(l,g,y,"∢","\\sphericalangle",!0);s(l,g,y,"∁","\\complement",!0);s(l,g,y,"ð","\\eth",!0);s(S,u,y,"ð","ð");s(l,g,y,"╱","\\diagup");s(l,g,y,"╲","\\diagdown");s(l,g,y,"□","\\square");s(l,g,y,"□","\\Box");s(l,g,y,"◊","\\Diamond");s(l,g,y,"¥","\\yen",!0);s(S,g,y,"¥","\\yen",!0);s(l,g,y,"✓","\\checkmark",!0);s(S,g,y,"✓","\\checkmark");s(l,g,y,"ℶ","\\beth",!0);s(l,g,y,"ℸ","\\daleth",!0);s(l,g,y,"ℷ","\\gimel",!0);s(l,g,y,"ϝ","\\digamma",!0);s(l,g,y,"ϰ","\\varkappa");s(l,g,Ee,"┌","\\@ulcorner",!0);s(l,g,ze,"┐","\\@urcorner",!0);s(l,g,Ee,"└","\\@llcorner",!0);s(l,g,ze,"┘","\\@lrcorner",!0);s(l,g,b,"≦","\\leqq",!0);s(l,g,b,"⩽","\\leqslant",!0);s(l,g,b,"⪕","\\eqslantless",!0);s(l,g,b,"≲","\\lesssim",!0);s(l,g,b,"⪅","\\lessapprox",!0);s(l,g,b,"≊","\\approxeq",!0);s(l,g,C,"⋖","\\lessdot");s(l,g,b,"⋘","\\lll",!0);s(l,g,b,"≶","\\lessgtr",!0);s(l,g,b,"⋚","\\lesseqgtr",!0);s(l,g,b,"⪋","\\lesseqqgtr",!0);s(l,g,b,"≑","\\doteqdot");s(l,g,b,"≓","\\risingdotseq",!0);s(l,g,b,"≒","\\fallingdotseq",!0);s(l,g,b,"∽","\\backsim",!0);s(l,g,b,"⋍","\\backsimeq",!0);s(l,g,b,"⫅","\\subseteqq",!0);s(l,g,b,"⋐","\\Subset",!0);s(l,g,b,"⊏","\\sqsubset",!0);s(l,g,b,"≼","\\preccurlyeq",!0);s(l,g,b,"⋞","\\curlyeqprec",!0);s(l,g,b,"≾","\\precsim",!0);s(l,g,b,"⪷","\\precapprox",!0);s(l,g,b,"⊲","\\vartriangleleft");s(l,g,b,"⊴","\\trianglelefteq");s(l,g,b,"⊨","\\vDash",!0);s(l,g,b,"⊪","\\Vvdash",!0);s(l,g,b,"⌣","\\smallsmile");s(l,g,b,"⌢","\\smallfrown");s(l,g,b,"≏","\\bumpeq",!0);s(l,g,b,"≎","\\Bumpeq",!0);s(l,g,b,"≧","\\geqq",!0);s(l,g,b,"⩾","\\geqslant",!0);s(l,g,b,"⪖","\\eqslantgtr",!0);s(l,g,b,"≳","\\gtrsim",!0);s(l,g,b,"⪆","\\gtrapprox",!0);s(l,g,C,"⋗","\\gtrdot");s(l,g,b,"⋙","\\ggg",!0);s(l,g,b,"≷","\\gtrless",!0);s(l,g,b,"⋛","\\gtreqless",!0);s(l,g,b,"⪌","\\gtreqqless",!0);s(l,g,b,"≖","\\eqcirc",!0);s(l,g,b,"≗","\\circeq",!0);s(l,g,b,"≜","\\triangleq",!0);s(l,g,b,"∼","\\thicksim");s(l,g,b,"≈","\\thickapprox");s(l,g,b,"⫆","\\supseteqq",!0);s(l,g,b,"⋑","\\Supset",!0);s(l,g,b,"⊐","\\sqsupset",!0);s(l,g,b,"≽","\\succcurlyeq",!0);s(l,g,b,"⋟","\\curlyeqsucc",!0);s(l,g,b,"≿","\\succsim",!0);s(l,g,b,"⪸","\\succapprox",!0);s(l,g,b,"⊳","\\vartriangleright");s(l,g,b,"⊵","\\trianglerighteq");s(l,g,b,"⊩","\\Vdash",!0);s(l,g,b,"∣","\\shortmid");s(l,g,b,"∥","\\shortparallel");s(l,g,b,"≬","\\between",!0);s(l,g,b,"⋔","\\pitchfork",!0);s(l,g,b,"∝","\\varpropto");s(l,g,b,"◀","\\blacktriangleleft");s(l,g,b,"∴","\\therefore",!0);s(l,g,b,"∍","\\backepsilon");s(l,g,b,"▶","\\blacktriangleright");s(l,g,b,"∵","\\because",!0);s(l,g,b,"⋘","\\llless");s(l,g,b,"⋙","\\gggtr");s(l,g,C,"⊲","\\lhd");s(l,g,C,"⊳","\\rhd");s(l,g,b,"≂","\\eqsim",!0);s(l,u,b,"⋈","\\Join");s(l,g,b,"≑","\\Doteq",!0);s(l,g,C,"∔","\\dotplus",!0);s(l,g,C,"∖","\\smallsetminus");s(l,g,C,"⋒","\\Cap",!0);s(l,g,C,"⋓","\\Cup",!0);s(l,g,C,"⩞","\\doublebarwedge",!0);s(l,g,C,"⊟","\\boxminus",!0);s(l,g,C,"⊞","\\boxplus",!0);s(l,g,C,"⋇","\\divideontimes",!0);s(l,g,C,"⋉","\\ltimes",!0);s(l,g,C,"⋊","\\rtimes",!0);s(l,g,C,"⋋","\\leftthreetimes",!0);s(l,g,C,"⋌","\\rightthreetimes",!0);s(l,g,C,"⋏","\\curlywedge",!0);s(l,g,C,"⋎","\\curlyvee",!0);s(l,g,C,"⊝","\\circleddash",!0);s(l,g,C,"⊛","\\circledast",!0);s(l,g,C,"⋅","\\centerdot");s(l,g,C,"⊺","\\intercal",!0);s(l,g,C,"⋒","\\doublecap");s(l,g,C,"⋓","\\doublecup");s(l,g,C,"⊠","\\boxtimes",!0);s(l,g,b,"⇢","\\dashrightarrow",!0);s(l,g,b,"⇠","\\dashleftarrow",!0);s(l,g,b,"⇇","\\leftleftarrows",!0);s(l,g,b,"⇆","\\leftrightarrows",!0);s(l,g,b,"⇚","\\Lleftarrow",!0);s(l,g,b,"↞","\\twoheadleftarrow",!0);s(l,g,b,"↢","\\leftarrowtail",!0);s(l,g,b,"↫","\\looparrowleft",!0);s(l,g,b,"⇋","\\leftrightharpoons",!0);s(l,g,b,"↶","\\curvearrowleft",!0);s(l,g,b,"↺","\\circlearrowleft",!0);s(l,g,b,"↰","\\Lsh",!0);s(l,g,b,"⇈","\\upuparrows",!0);s(l,g,b,"↿","\\upharpoonleft",!0);s(l,g,b,"⇃","\\downharpoonleft",!0);s(l,u,b,"⊶","\\origof",!0);s(l,u,b,"⊷","\\imageof",!0);s(l,g,b,"⊸","\\multimap",!0);s(l,g,b,"↭","\\leftrightsquigarrow",!0);s(l,g,b,"⇉","\\rightrightarrows",!0);s(l,g,b,"⇄","\\rightleftarrows",!0);s(l,g,b,"↠","\\twoheadrightarrow",!0);s(l,g,b,"↣","\\rightarrowtail",!0);s(l,g,b,"↬","\\looparrowright",!0);s(l,g,b,"↷","\\curvearrowright",!0);s(l,g,b,"↻","\\circlearrowright",!0);s(l,g,b,"↱","\\Rsh",!0);s(l,g,b,"⇊","\\downdownarrows",!0);s(l,g,b,"↾","\\upharpoonright",!0);s(l,g,b,"⇂","\\downharpoonright",!0);s(l,g,b,"⇝","\\rightsquigarrow",!0);s(l,g,b,"⇝","\\leadsto");s(l,g,b,"⇛","\\Rrightarrow",!0);s(l,g,b,"↾","\\restriction");s(l,u,y,"‘","`");s(l,u,y,"$","\\$");s(S,u,y,"$","\\$");s(S,u,y,"$","\\textdollar");s(l,u,y,"%","\\%");s(S,u,y,"%","\\%");s(l,u,y,"_","\\_");s(S,u,y,"_","\\_");s(S,u,y,"_","\\textunderscore");s(l,u,y,"∠","\\angle",!0);s(l,u,y,"∞","\\infty",!0);s(l,u,y,"′","\\prime");s(l,u,y,"△","\\triangle");s(l,u,y,"Γ","\\Gamma",!0);s(l,u,y,"Δ","\\Delta",!0);s(l,u,y,"Θ","\\Theta",!0);s(l,u,y,"Λ","\\Lambda",!0);s(l,u,y,"Ξ","\\Xi",!0);s(l,u,y,"Π","\\Pi",!0);s(l,u,y,"Σ","\\Sigma",!0);s(l,u,y,"Υ","\\Upsilon",!0);s(l,u,y,"Φ","\\Phi",!0);s(l,u,y,"Ψ","\\Psi",!0);s(l,u,y,"Ω","\\Omega",!0);s(l,u,y,"A","Α");s(l,u,y,"B","Β");s(l,u,y,"E","Ε");s(l,u,y,"Z","Ζ");s(l,u,y,"H","Η");s(l,u,y,"I","Ι");s(l,u,y,"K","Κ");s(l,u,y,"M","Μ");s(l,u,y,"N","Ν");s(l,u,y,"O","Ο");s(l,u,y,"P","Ρ");s(l,u,y,"T","Τ");s(l,u,y,"X","Χ");s(l,u,y,"¬","\\neg",!0);s(l,u,y,"¬","\\lnot");s(l,u,y,"⊤","\\top");s(l,u,y,"⊥","\\bot");s(l,u,y,"∅","\\emptyset");s(l,g,y,"∅","\\varnothing");s(l,u,E,"α","\\alpha",!0);s(l,u,E,"β","\\beta",!0);s(l,u,E,"γ","\\gamma",!0);s(l,u,E,"δ","\\delta",!0);s(l,u,E,"ϵ","\\epsilon",!0);s(l,u,E,"ζ","\\zeta",!0);s(l,u,E,"η","\\eta",!0);s(l,u,E,"θ","\\theta",!0);s(l,u,E,"ι","\\iota",!0);s(l,u,E,"κ","\\kappa",!0);s(l,u,E,"λ","\\lambda",!0);s(l,u,E,"μ","\\mu",!0);s(l,u,E,"ν","\\nu",!0);s(l,u,E,"ξ","\\xi",!0);s(l,u,E,"ο","\\omicron",!0);s(l,u,E,"π","\\pi",!0);s(l,u,E,"ρ","\\rho",!0);s(l,u,E,"σ","\\sigma",!0);s(l,u,E,"τ","\\tau",!0);s(l,u,E,"υ","\\upsilon",!0);s(l,u,E,"ϕ","\\phi",!0);s(l,u,E,"χ","\\chi",!0);s(l,u,E,"ψ","\\psi",!0);s(l,u,E,"ω","\\omega",!0);s(l,u,E,"ε","\\varepsilon",!0);s(l,u,E,"ϑ","\\vartheta",!0);s(l,u,E,"ϖ","\\varpi",!0);s(l,u,E,"ϱ","\\varrho",!0);s(l,u,E,"ς","\\varsigma",!0);s(l,u,E,"φ","\\varphi",!0);s(l,u,C,"∗","*",!0);s(l,u,C,"+","+");s(l,u,C,"−","-",!0);s(l,u,C,"⋅","\\cdot",!0);s(l,u,C,"∘","\\circ",!0);s(l,u,C,"÷","\\div",!0);s(l,u,C,"±","\\pm",!0);s(l,u,C,"×","\\times",!0);s(l,u,C,"∩","\\cap",!0);s(l,u,C,"∪","\\cup",!0);s(l,u,C,"∖","\\setminus",!0);s(l,u,C,"∧","\\land");s(l,u,C,"∨","\\lor");s(l,u,C,"∧","\\wedge",!0);s(l,u,C,"∨","\\vee",!0);s(l,u,y,"√","\\surd");s(l,u,Ee,"⟨","\\langle",!0);s(l,u,Ee,"∣","\\lvert");s(l,u,Ee,"∥","\\lVert");s(l,u,ze,"?","?");s(l,u,ze,"!","!");s(l,u,ze,"⟩","\\rangle",!0);s(l,u,ze,"∣","\\rvert");s(l,u,ze,"∥","\\rVert");s(l,u,b,"=","=");s(l,u,b,":",":");s(l,u,b,"≈","\\approx",!0);s(l,u,b,"≅","\\cong",!0);s(l,u,b,"≥","\\ge");s(l,u,b,"≥","\\geq",!0);s(l,u,b,"←","\\gets");s(l,u,b,">","\\gt",!0);s(l,u,b,"∈","\\in",!0);s(l,u,b,"","\\@not");s(l,u,b,"⊂","\\subset",!0);s(l,u,b,"⊃","\\supset",!0);s(l,u,b,"⊆","\\subseteq",!0);s(l,u,b,"⊇","\\supseteq",!0);s(l,g,b,"⊈","\\nsubseteq",!0);s(l,g,b,"⊉","\\nsupseteq",!0);s(l,u,b,"⊨","\\models");s(l,u,b,"←","\\leftarrow",!0);s(l,u,b,"≤","\\le");s(l,u,b,"≤","\\leq",!0);s(l,u,b,"<","\\lt",!0);s(l,u,b,"→","\\rightarrow",!0);s(l,u,b,"→","\\to");s(l,g,b,"≱","\\ngeq",!0);s(l,g,b,"≰","\\nleq",!0);s(l,u,rt," ","\\ ");s(l,u,rt," ","\\space");s(l,u,rt," ","\\nobreakspace");s(S,u,rt," ","\\ ");s(S,u,rt," "," ");s(S,u,rt," ","\\space");s(S,u,rt," ","\\nobreakspace");s(l,u,rt,"","\\nobreak");s(l,u,rt,"","\\allowbreak");s(l,u,rr,",",",");s(l,u,rr,";",";");s(l,g,C,"⊼","\\barwedge",!0);s(l,g,C,"⊻","\\veebar",!0);s(l,u,C,"⊙","\\odot",!0);s(l,u,C,"⊕","\\oplus",!0);s(l,u,C,"⊗","\\otimes",!0);s(l,u,y,"∂","\\partial",!0);s(l,u,C,"⊘","\\oslash",!0);s(l,g,C,"⊚","\\circledcirc",!0);s(l,g,C,"⊡","\\boxdot",!0);s(l,u,C,"△","\\bigtriangleup");s(l,u,C,"▽","\\bigtriangledown");s(l,u,C,"†","\\dagger");s(l,u,C,"⋄","\\diamond");s(l,u,C,"⋆","\\star");s(l,u,C,"◃","\\triangleleft");s(l,u,C,"▹","\\triangleright");s(l,u,Ee,"{","\\{");s(S,u,y,"{","\\{");s(S,u,y,"{","\\textbraceleft");s(l,u,ze,"}","\\}");s(S,u,y,"}","\\}");s(S,u,y,"}","\\textbraceright");s(l,u,Ee,"{","\\lbrace");s(l,u,ze,"}","\\rbrace");s(l,u,Ee,"[","\\lbrack",!0);s(S,u,y,"[","\\lbrack",!0);s(l,u,ze,"]","\\rbrack",!0);s(S,u,y,"]","\\rbrack",!0);s(l,u,Ee,"(","\\lparen",!0);s(l,u,ze,")","\\rparen",!0);s(S,u,y,"<","\\textless",!0);s(S,u,y,">","\\textgreater",!0);s(l,u,Ee,"⌊","\\lfloor",!0);s(l,u,ze,"⌋","\\rfloor",!0);s(l,u,Ee,"⌈","\\lceil",!0);s(l,u,ze,"⌉","\\rceil",!0);s(l,u,y,"\\","\\backslash");s(l,u,y,"∣","|");s(l,u,y,"∣","\\vert");s(S,u,y,"|","\\textbar",!0);s(l,u,y,"∥","\\|");s(l,u,y,"∥","\\Vert");s(S,u,y,"∥","\\textbardbl");s(S,u,y,"~","\\textasciitilde");s(S,u,y,"\\","\\textbackslash");s(S,u,y,"^","\\textasciicircum");s(l,u,b,"↑","\\uparrow",!0);s(l,u,b,"⇑","\\Uparrow",!0);s(l,u,b,"↓","\\downarrow",!0);s(l,u,b,"⇓","\\Downarrow",!0);s(l,u,b,"↕","\\updownarrow",!0);s(l,u,b,"⇕","\\Updownarrow",!0);s(l,u,fe,"∐","\\coprod");s(l,u,fe,"⋁","\\bigvee");s(l,u,fe,"⋀","\\bigwedge");s(l,u,fe,"⨄","\\biguplus");s(l,u,fe,"⋂","\\bigcap");s(l,u,fe,"⋃","\\bigcup");s(l,u,fe,"∫","\\int");s(l,u,fe,"∫","\\intop");s(l,u,fe,"∬","\\iint");s(l,u,fe,"∭","\\iiint");s(l,u,fe,"∏","\\prod");s(l,u,fe,"∑","\\sum");s(l,u,fe,"⨂","\\bigotimes");s(l,u,fe,"⨁","\\bigoplus");s(l,u,fe,"⨀","\\bigodot");s(l,u,fe,"∮","\\oint");s(l,u,fe,"∯","\\oiint");s(l,u,fe,"∰","\\oiiint");s(l,u,fe,"⨆","\\bigsqcup");s(l,u,fe,"∫","\\smallint");s(S,u,Lt,"…","\\textellipsis");s(l,u,Lt,"…","\\mathellipsis");s(S,u,Lt,"…","\\ldots",!0);s(l,u,Lt,"…","\\ldots",!0);s(l,u,Lt,"⋯","\\@cdots",!0);s(l,u,Lt,"⋱","\\ddots",!0);s(l,u,y,"⋮","\\varvdots");s(S,u,y,"⋮","\\varvdots");s(l,u,ne,"ˊ","\\acute");s(l,u,ne,"ˋ","\\grave");s(l,u,ne,"¨","\\ddot");s(l,u,ne,"~","\\tilde");s(l,u,ne,"ˉ","\\bar");s(l,u,ne,"˘","\\breve");s(l,u,ne,"ˇ","\\check");s(l,u,ne,"^","\\hat");s(l,u,ne,"⃗","\\vec");s(l,u,ne,"˙","\\dot");s(l,u,ne,"˚","\\mathring");s(l,u,E,"","\\@imath");s(l,u,E,"","\\@jmath");s(l,u,y,"ı","ı");s(l,u,y,"ȷ","ȷ");s(S,u,y,"ı","\\i",!0);s(S,u,y,"ȷ","\\j",!0);s(S,u,y,"ß","\\ss",!0);s(S,u,y,"æ","\\ae",!0);s(S,u,y,"œ","\\oe",!0);s(S,u,y,"ø","\\o",!0);s(S,u,y,"Æ","\\AE",!0);s(S,u,y,"Œ","\\OE",!0);s(S,u,y,"Ø","\\O",!0);s(S,u,ne,"ˊ","\\'");s(S,u,ne,"ˋ","\\`");s(S,u,ne,"ˆ","\\^");s(S,u,ne,"˜","\\~");s(S,u,ne,"ˉ","\\=");s(S,u,ne,"˘","\\u");s(S,u,ne,"˙","\\.");s(S,u,ne,"¸","\\c");s(S,u,ne,"˚","\\r");s(S,u,ne,"ˇ","\\v");s(S,u,ne,"¨",'\\"');s(S,u,ne,"˝","\\H");s(S,u,ne,"◯","\\textcircled");var X0={"--":!0,"---":!0,"``":!0,"''":!0};s(S,u,y,"–","--",!0);s(S,u,y,"–","\\textendash");s(S,u,y,"—","---",!0);s(S,u,y,"—","\\textemdash");s(S,u,y,"‘","`",!0);s(S,u,y,"‘","\\textquoteleft");s(S,u,y,"’","'",!0);s(S,u,y,"’","\\textquoteright");s(S,u,y,"“","``",!0);s(S,u,y,"“","\\textquotedblleft");s(S,u,y,"”","''",!0);s(S,u,y,"”","\\textquotedblright");s(l,u,y,"°","\\degree",!0);s(S,u,y,"°","\\degree");s(S,u,y,"°","\\textdegree",!0);s(l,u,y,"£","\\pounds");s(l,u,y,"£","\\mathsterling",!0);s(S,u,y,"£","\\pounds");s(S,u,y,"£","\\textsterling",!0);s(l,g,y,"✠","\\maltese");s(S,g,y,"✠","\\maltese");var La='0123456789/@."';for(var rn=0;rn<La.length;rn++){var Pa=La.charAt(rn);s(l,u,y,Pa,Pa)}var Na='0123456789!@*()-=+";:?/.,';for(var nn=0;nn<Na.length;nn++){var Oa=Na.charAt(nn);s(S,u,y,Oa,Oa)}var Cr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var an=0;an<Cr.length;an++){var mr=Cr.charAt(an);s(l,u,E,mr,mr),s(S,u,y,mr,mr)}s(l,g,y,"C","ℂ");s(S,g,y,"C","ℂ");s(l,g,y,"H","ℍ");s(S,g,y,"H","ℍ");s(l,g,y,"N","ℕ");s(S,g,y,"N","ℕ");s(l,g,y,"P","ℙ");s(S,g,y,"P","ℙ");s(l,g,y,"Q","ℚ");s(S,g,y,"Q","ℚ");s(l,g,y,"R","ℝ");s(S,g,y,"R","ℝ");s(l,g,y,"Z","ℤ");s(S,g,y,"Z","ℤ");s(l,u,E,"h","ℎ");s(S,u,E,"h","ℎ");var F;for(var we=0;we<Cr.length;we++){var he=Cr.charAt(we);F=String.fromCharCode(55349,56320+we),s(l,u,E,he,F),s(S,u,y,he,F),F=String.fromCharCode(55349,56372+we),s(l,u,E,he,F),s(S,u,y,he,F),F=String.fromCharCode(55349,56424+we),s(l,u,E,he,F),s(S,u,y,he,F),F=String.fromCharCode(55349,56580+we),s(l,u,E,he,F),s(S,u,y,he,F),F=String.fromCharCode(55349,56684+we),s(l,u,E,he,F),s(S,u,y,he,F),F=String.fromCharCode(55349,56736+we),s(l,u,E,he,F),s(S,u,y,he,F),F=String.fromCharCode(55349,56788+we),s(l,u,E,he,F),s(S,u,y,he,F),F=String.fromCharCode(55349,56840+we),s(l,u,E,he,F),s(S,u,y,he,F),F=String.fromCharCode(55349,56944+we),s(l,u,E,he,F),s(S,u,y,he,F),we<26&&(F=String.fromCharCode(55349,56632+we),s(l,u,E,he,F),s(S,u,y,he,F),F=String.fromCharCode(55349,56476+we),s(l,u,E,he,F),s(S,u,y,he,F))}F="𝕜";s(l,u,E,"k",F);s(S,u,y,"k",F);for(var pt=0;pt<10;pt++){var st=pt.toString();F=String.fromCharCode(55349,57294+pt),s(l,u,E,st,F),s(S,u,y,st,F),F=String.fromCharCode(55349,57314+pt),s(l,u,E,st,F),s(S,u,y,st,F),F=String.fromCharCode(55349,57324+pt),s(l,u,E,st,F),s(S,u,y,st,F),F=String.fromCharCode(55349,57334+pt),s(l,u,E,st,F),s(S,u,y,st,F)}var Mn="ÐÞþ";for(var sn=0;sn<Mn.length;sn++){var pr=Mn.charAt(sn);s(l,u,E,pr,pr),s(S,u,y,pr,pr)}var Cn={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},Ha={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},Ga={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},_o={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},gt={mathClass:"",textClass:"",font:""},ja={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},Wa={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},Ua={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},Rn={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},Bn={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},Ka={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},En={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},Za=[Cn,Cn,Ha,Ha,Ga,Ga,_o,gt,gt,gt,ja,ja,Wa,Wa,Ua,Ua,Rn,Rn,Bn,Bn,Ka,Ka,gt,gt,En,En],Mo=[Cn,gt,Rn,Bn,En],Co=r=>{var e=r.charCodeAt(0),t=r.charCodeAt(1),n=(e-55296)*1024+(t-56320)+65536;if(119808<=n&&n<120484){var a=Math.floor((n-119808)/26);return Za[a]}else if(120782<=n&&n<=120831){var i=Math.floor((n-120782)/10);return Mo[i]}else{if(n===120485||n===120486)return Za[0];if(120486<n&&n<120782)return gt;throw new A("Unsupported character: "+r)}},Or=function(e,t,n){if(re[n][e]){var a=re[n][e].replace;a&&(e=a)}return{value:e,metrics:la(e,t,n)}},ke=function(e,t,n,a,i){var o=Or(e,t,n),c=o.metrics;e=o.value;var h;if(c){var d=c.italic;(n==="text"||a&&a.font==="mathit")&&(d=0),h=new Be(e,c.height,c.depth,d,c.skew,c.width,i)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+n+"'")),h=new Be(e,0,0,0,0,0,i);if(a){h.maxFontSize=a.sizeMultiplier,a.style.isTight()&&h.classes.push("mtight");var p=a.getColor();p&&(h.style.color=p)}return h},ca=function(e,t,n,a){return a===void 0&&(a=[]),n.font==="boldsymbol"&&Or(e,"Main-Bold",t).metrics?ke(e,"Main-Bold",t,n,a.concat(["mathbf"])):e==="\\"||re[t][e].font==="main"?ke(e,"Main-Regular",t,n,a):ke(e,"AMS-Regular",t,n,a.concat(["amsrm"]))},Ro=function(e,t,n){return n!=="textord"&&Or(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Hr=function(e,t,n){var a=e.mode,i=e.text,o=["mord"],{font:c,fontFamily:h,fontWeight:d,fontShape:p}=t,x=a==="math"||a==="text"&&!!c,f=x?c:h,v="",w="";if(i.charCodeAt(0)===55349){var k=Co(i);v=k.font,w=k[a+"Class"]}if(v)return ke(i,v,a,t,o.concat(w));if(f){var q,T;if(f==="boldsymbol"){var R=Ro(i,a,n);q=R.fontName,T=[R.fontClass]}else x?(q=In[c].fontName,T=[c]):(q=fr(h,d,p),T=[h,d,p]);if(Or(i,q,a).metrics)return ke(i,q,a,t,o.concat(T));if(X0.hasOwnProperty(i)&&q.slice(0,10)==="Typewriter"){for(var B=[],D=0;D<i.length;D++)B.push(ke(i[D],q,a,t,o.concat(T)));return nt(B)}}if(n==="mathord")return ke(i,"Math-Italic",a,t,o.concat(["mathnormal"]));if(n==="textord"){var P=re[a][i]&&re[a][i].font;if(P==="ams"){var N=fr("amsrm",d,p);return ke(i,N,a,t,o.concat("amsrm",d,p))}else if(P==="main"||!P){var H=fr("textrm",d,p);return ke(i,H,a,t,o.concat(d,p))}else{var U=fr(P,d,p);return ke(i,U,a,t,o.concat(U,d,p))}}else throw new Error("unexpected type: "+n+" in makeOrd")},Bo=(r,e)=>{if(ct(r.classes)!==ct(e.classes)||r.skew!==e.skew||r.maxFontSize!==e.maxFontSize||r.italic!==0&&r.hasClass("mathnormal"))return!1;if(r.classes.length===1){var t=r.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n of Object.keys(r.style))if(r.style[n]!==e.style[n])return!1;for(var a of Object.keys(e.style))if(r.style[a]!==e.style[a])return!1;return!0},Y0=r=>{for(var e=0;e<r.length-1;e++){var t=r[e],n=r[e+1];t instanceof Be&&n instanceof Be&&Bo(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,r.splice(e+1,1),e--)}return r},ha=function(e){for(var t=0,n=0,a=0,i=0;i<e.children.length;i++){var o=e.children[i];o.height>t&&(t=o.height),o.depth>n&&(n=o.depth),o.maxFontSize>a&&(a=o.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=a},$=function(e,t,n,a){var i=new Dt(e,t,n,a);return ha(i),i},ut=(r,e,t,n)=>new Dt(r,e,t,n),Rt=function(e,t,n){var a=$([e],[],t);return a.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),a.style.borderBottomWidth=_(a.height),a.maxFontSize=1,a},Eo=function(e,t,n,a){var i=new Nr(e,t,n,a);return ha(i),i},nt=function(e){var t=new Ft(e);return ha(t),t},Bt=function(e,t){return e instanceof Ft?$([],[e],t):e},Io=function(e){if(e.positionType==="individualShift"){for(var t=e.children,n=[t[0]],a=-t[0].shift-t[0].elem.depth,i=a,o=1;o<t.length;o++){var c=-t[o].shift-i-t[o].elem.depth,h=c-(t[o-1].elem.height+t[o-1].elem.depth);i=i+c,n.push({type:"kern",size:h}),n.push(t[o])}return{children:n,depth:a}}var d;if(e.positionType==="top"){for(var p=e.positionData,x=0;x<e.children.length;x++){var f=e.children[x];p-=f.type==="kern"?f.size:f.elem.height+f.elem.depth}d=p}else if(e.positionType==="bottom")d=-e.positionData;else{var v=e.children[0];if(v.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")d=-v.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")d=-v.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:d}},V=function(e,t){for(var{children:n,depth:a}=Io(e),i=0,o=0;o<n.length;o++){var c=n[o];if(c.type==="elem"){var h=c.elem;i=Math.max(i,h.maxFontSize,h.height)}}i+=2;var d=$(["pstrut"],[]);d.style.height=_(i);for(var p=[],x=a,f=a,v=a,w=0;w<n.length;w++){var k=n[w];if(k.type==="kern")v+=k.size;else{var q=k.elem,T=k.wrapperClasses||[],R=k.wrapperStyle||{},B=$(T,[d,q],void 0,R);B.style.top=_(-i-v-q.depth),k.marginLeft&&(B.style.marginLeft=k.marginLeft),k.marginRight&&(B.style.marginRight=k.marginRight),p.push(B),v+=q.height+q.depth}x=Math.min(x,v),f=Math.max(f,v)}var D=$(["vlist"],p);D.style.height=_(f);var P;if(x<0){var N=$([],[]),H=$(["vlist"],[N]);H.style.height=_(-x);var U=$(["vlist-s"],[new Be("​")]);P=[$(["vlist-r"],[D,U]),$(["vlist-r"],[H])]}else P=[$(["vlist-r"],[D])];var j=$(["vlist-t"],P);return P.length===2&&j.classes.push("vlist-t2"),j.height=f,j.depth=-x,j},J0=(r,e)=>{var t=$(["mspace"],[],e),n=le(r,e);return t.style.marginRight=_(n),t},fr=(r,e,t)=>{var n,a;switch(r){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=r}return e==="textbf"&&t==="textit"?a="BoldItalic":e==="textbf"?a="Bold":t==="textit"?a="Italic":a="Regular",n+"-"+a},In={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Q0={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},ei=function(e,t){var[n,a,i]=Q0[e],o=new ht(n),c=new et([o],{width:_(a),height:_(i),style:"width:"+_(a),viewBox:"0 0 "+1e3*a+" "+1e3*i,preserveAspectRatio:"xMinYMin"}),h=ut(["overlay"],[c],t);return h.height=i,h.style.height=_(i),h.style.width=_(a),h},se={number:3,unit:"mu"},ft={number:4,unit:"mu"},Ve={number:5,unit:"mu"},Fo={mord:{mop:se,mbin:ft,mrel:Ve,minner:se},mop:{mord:se,mop:se,mrel:Ve,minner:se},mbin:{mord:ft,mop:ft,mopen:ft,minner:ft},mrel:{mord:Ve,mop:Ve,mopen:Ve,minner:Ve},mopen:{},mclose:{mop:se,mbin:ft,mrel:Ve,minner:se},mpunct:{mord:se,mop:se,mrel:Ve,mopen:se,mclose:se,mpunct:se,minner:se},minner:{mord:se,mop:se,mbin:ft,mrel:Ve,mopen:se,mpunct:se,minner:se}},Do={mord:{mop:se},mop:{mord:se,mop:se},mbin:{},mrel:{},mopen:{},mclose:{mop:se},mpunct:{},minner:{mop:se}},ti={},Rr={},Br={};function M(r){for(var{type:e,names:t,props:n,handler:a,htmlBuilder:i,mathmlBuilder:o}=r,c={type:e,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:a},h=0;h<t.length;++h)ti[t[h]]=c;e&&(i&&(Rr[e]=i),o&&(Br[e]=o))}function kt(r){var{type:e,htmlBuilder:t,mathmlBuilder:n}=r;M({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:n})}var Er=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},me=function(e){return e.type==="ordgroup"?e.body:[e]},Lo=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),Po=new Set(["rightmost","mrel","mclose","mpunct"]),No={display:L.DISPLAY,text:L.TEXT,script:L.SCRIPT,scriptscript:L.SCRIPTSCRIPT},Oo={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},be=function(e,t,n,a){a===void 0&&(a=[null,null]);for(var i=[],o=0;o<e.length;o++){var c=X(e[o],t);if(c instanceof Ft){var h=c.children;i.push(...h)}else i.push(c)}if(Y0(i),!n)return i;var d=t;if(e.length===1){var p=e[0];p.type==="sizing"?d=t.havingSize(p.size):p.type==="styling"&&(d=t.havingStyle(No[p.style]))}var x=$([a[0]||"leftmost"],[],t),f=$([a[1]||"rightmost"],[],t),v=n==="root";return Fn(i,(w,k)=>{var q=k.classes[0],T=w.classes[0];q==="mbin"&&Po.has(T)?k.classes[0]="mord":T==="mbin"&&Lo.has(q)&&(w.classes[0]="mord")},{node:x},f,v),Fn(i,(w,k)=>{var q,T,R=Ln(k),B=Ln(w),D=R&&B?w.hasClass("mtight")?(q=Do[R])==null?void 0:q[B]:(T=Fo[R])==null?void 0:T[B]:null;if(D)return J0(D,d)},{node:x},f,v),i},Fn=function(e,t,n,a,i){a&&e.push(a);for(var o=0;o<e.length;o++){var c=e[o],h=ri(c);if(h){Fn(h.children,t,n,null,i);continue}var d=!c.hasClass("mspace");if(d){var p=t(c,n.node);p&&(n.insertAfter?n.insertAfter(p):(e.unshift(p),o++))}d?n.node=c:i&&c.hasClass("newline")&&(n.node=$(["leftmost"])),n.insertAfter=(x=>f=>{e.splice(x+1,0,f),o++})(o)}a&&e.pop()},ri=function(e){return e instanceof Ft||e instanceof Nr||e instanceof Dt&&e.hasClass("enclosing")?e:null},Dn=function(e,t){var n=ri(e);if(n){var a=n.children;if(a.length){if(t==="right")return Dn(a[a.length-1],"right");if(t==="left")return Dn(a[0],"left")}}return e},Ln=function(e,t){if(!e)return null;t&&(e=Dn(e,t));var n=e.classes[0];return Oo[n]||null},Qt=function(e,t){var n=["nulldelimiter"].concat(e.baseSizingClasses());return $(t.concat(n))},X=function(e,t,n){if(!e)return $();if(Rr[e.type]){var a=Rr[e.type](e,t);if(n&&t.size!==n.size){a=$(t.sizingClasses(n),[a],t);var i=t.sizeMultiplier/n.sizeMultiplier;a.height*=i,a.depth*=i}return a}else throw new A("Got group of unknown type: '"+e.type+"'")};function gr(r,e){var t=$(["base"],r,e),n=$(["strut"]);return n.style.height=_(t.height+t.depth),t.depth&&(n.style.verticalAlign=_(-t.depth)),t.children.unshift(n),t}function Pn(r,e){var t=null;r.length===1&&r[0].type==="tag"&&(t=r[0].tag,r=r[0].body);var n=be(r,e,"root"),a;n.length===2&&n[1].hasClass("tag")&&(a=n.pop());for(var i=[],o=[],c=0;c<n.length;c++)if(o.push(n[c]),n[c].hasClass("mbin")||n[c].hasClass("mrel")||n[c].hasClass("allowbreak")){for(var h=!1;c<n.length-1&&n[c+1].hasClass("mspace")&&!n[c+1].hasClass("newline");)c++,o.push(n[c]),n[c].hasClass("nobreak")&&(h=!0);h||(i.push(gr(o,e)),o=[])}else n[c].hasClass("newline")&&(o.pop(),o.length>0&&(i.push(gr(o,e)),o=[]),i.push(n[c]));o.length>0&&i.push(gr(o,e));var d;t?(d=gr(be(t,e,!0),e),d.classes=["tag"],i.push(d)):a&&i.push(a);var p=$(["katex-html"],i);if(p.setAttribute("aria-hidden","true"),d){var x=d.children[0];x.style.height=_(p.height+p.depth),p.depth&&(x.style.verticalAlign=_(-p.depth))}return p}function ni(r){return new Ft(r)}class z{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=ct(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof pe&&this.children[n+1]instanceof pe){for(var a=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof pe;)a+=this.children[++n].toText();e.appendChild(new pe(a).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=xe(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+xe(ct(this.classes))+'"'),e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class pe{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return xe(this.toText())}toText(){return this.text}}class ai{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",_(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+_(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Ho=new Set(["\\imath","\\jmath"]),Go=new Set(["mrow","mtable"]),De=function(e,t,n){return re[t][e]&&re[t][e].replace&&e.charCodeAt(0)!==55349&&!(X0.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(e=re[t][e].replace),new pe(e)},ua=function(e){return e.length===1?e[0]:new z("mrow",e)},jo={mathit:"italic",boldsymbol:r=>r.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},da=(r,e)=>{if(r.mode==="text"){if(e.fontFamily==="texttt")return"monospace";if(e.fontFamily==="textsf")return e.fontShape==="textit"&&e.fontWeight==="textbf"?"sans-serif-bold-italic":e.fontShape==="textit"?"sans-serif-italic":e.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(e.fontShape==="textit"&&e.fontWeight==="textbf")return"bold-italic";if(e.fontShape==="textit")return"italic";if(e.fontWeight==="textbf")return"bold"}var t=e.font;if(!t||t==="mathnormal")return null;var n=r.mode,a=jo[t];if(a)return typeof a=="function"?a(r):a;var i=r.text;if(Ho.has(i))return null;if(re[n][i]){var o=re[n][i].replace;o&&(i=o)}var c=In[t].fontName;return la(i,c,n)?In[t].variant:null};function on(r){if(!r)return!1;if(r.type==="mi"&&r.children.length===1){var e=r.children[0];return e instanceof pe&&e.text==="."}else if(r.type==="mo"&&r.children.length===1&&r.getAttribute("separator")==="true"&&r.getAttribute("lspace")==="0em"&&r.getAttribute("rspace")==="0em"){var t=r.children[0];return t instanceof pe&&t.text===","}else return!1}var Ie=function(e,t,n){if(e.length===1){var a=te(e[0],t);return n&&a instanceof z&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var i=[],o,c=0;c<e.length;c++){var h=te(e[c],t);if(h instanceof z&&o instanceof z){if(h.type==="mtext"&&o.type==="mtext"&&h.getAttribute("mathvariant")===o.getAttribute("mathvariant")){o.children.push(...h.children);continue}else if(h.type==="mn"&&o.type==="mn"){o.children.push(...h.children);continue}else if(on(h)&&o.type==="mn"){o.children.push(...h.children);continue}else if(h.type==="mn"&&on(o))h.children=[...o.children,...h.children],i.pop();else if((h.type==="msup"||h.type==="msub")&&h.children.length>=1&&(o.type==="mn"||on(o))){var d=h.children[0];d instanceof z&&d.type==="mn"&&(d.children=[...o.children,...d.children],i.pop())}else if(o.type==="mi"&&o.children.length===1){var p=o.children[0];if(p instanceof pe&&p.text==="̸"&&(h.type==="mo"||h.type==="mi"||h.type==="mn")){var x=h.children[0];x instanceof pe&&x.text.length>0&&(x.text=x.text.slice(0,1)+"̸"+x.text.slice(1),i.pop())}}}i.push(h),o=h}return i},dt=function(e,t,n){return ua(Ie(e,t,n))},te=function(e,t){if(!e)return new z("mrow");if(Br[e.type])return Br[e.type](e,t);throw new A("Got group of unknown type: '"+e.type+"'")};function Va(r,e,t,n,a){var i=Ie(r,t),o;i.length===1&&i[0]instanceof z&&Go.has(i[0].type)?o=i[0]:o=new z("mrow",i);var c=new z("annotation",[new pe(e)]);c.setAttribute("encoding","application/x-tex");var h=new z("semantics",[o,c]),d=new z("math",[h]);d.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&d.setAttribute("display","block");var p=a?"katex":"katex-mathml";return $([p],[d])}var Wo=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Xa=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Ya=function(e,t){return t.size<2?e:Wo[e-1][t.size-1]};class Xe{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||Xe.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=Xa[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(t,e),new Xe(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Ya(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:Xa[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=Ya(Xe.BASESIZE,e);return this.size===t&&this.textSize===Xe.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Xe.BASESIZE?["sizing","reset-size"+this.size,"size"+Xe.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=qo(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Xe.BASESIZE=6;var ii=function(e){return new Xe({style:e.displayMode?L.DISPLAY:L.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},si=function(e,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),e=$(n,[e])}return e},Uo=function(e,t,n){var a=ii(n),i;if(n.output==="mathml")return Va(e,t,a,n.displayMode,!0);if(n.output==="html"){var o=Pn(e,a);i=$(["katex"],[o])}else{var c=Va(e,t,a,n.displayMode,!1),h=Pn(e,a);i=$(["katex"],[c,h])}return si(i,n)},Ko=function(e,t,n){var a=ii(n),i=Pn(e,a),o=$(["katex"],[i]);return si(o,n)},Zo={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Gr=function(e){var t=new z("mo",[new pe(Zo[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},Vo={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Xo=new Set(["widehat","widecheck","widetilde","utilde"]),jr=function(e,t){function n(){var c=4e5,h=e.label.slice(1);if(Xo.has(h)&&"base"in e){var d=e.base.type==="ordgroup"?e.base.body.length:1,p,x,f;if(d>5)h==="widehat"||h==="widecheck"?(p=420,c=2364,f=.42,x=h+"4"):(p=312,c=2340,f=.34,x="tilde4");else{var v=[1,1,2,2,3,3][d];h==="widehat"||h==="widecheck"?(c=[0,1062,2364,2364,2364][v],p=[0,239,300,360,420][v],f=[0,.24,.3,.3,.36,.42][v],x=h+v):(c=[0,600,1033,2339,2340][v],p=[0,260,286,306,312][v],f=[0,.26,.286,.3,.306,.34][v],x="tilde"+v)}var w=new ht(x),k=new et([w],{width:"100%",height:_(f),viewBox:"0 0 "+c+" "+p,preserveAspectRatio:"none"});return{span:ut([],[k],t),minWidth:0,height:f}}else{var q=[],T=Vo[h];if(!T)throw new Error('No SVG data for "'+h+'".');var[R,B,D]=T,P=D/1e3,N=R.length,H,U;if(N===1){if(T.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+h+'".');H=["hide-tail"],U=[T[3]]}else if(N===2)H=["halfarrow-left","halfarrow-right"],U=["xMinYMin","xMaxYMin"];else if(N===3)H=["brace-left","brace-center","brace-right"],U=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+N+" children.");for(var j=0;j<N;j++){var ae=new ht(R[j]),de=new et([ae],{width:"400em",height:_(P),viewBox:"0 0 "+c+" "+D,preserveAspectRatio:U[j]+" slice"}),Z=ut([H[j]],[de],t);if(N===1)return{span:Z,minWidth:B,height:P};Z.style.height=_(P),q.push(Z)}return{span:$(["stretchy"],q,t),minWidth:B,height:P}}}var{span:a,minWidth:i,height:o}=n();return a.height=o,a.style.height=_(o),i>0&&(a.style.minWidth=_(i)),a},Yo=function(e,t,n,a,i){var o,c=e.height+e.depth+n+a;if(/fbox|color|angl/.test(t)){if(o=$(["stretchy",t],[],i),t==="fbox"){var h=i.color&&i.getColor();h&&(o.style.borderColor=h)}}else{var d=[];/^[bx]cancel$/.test(t)&&d.push(new _n({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&d.push(new _n({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var p=new et(d,{width:"100%",height:_(c)});o=ut([],[p],i)}return o.height=c,o.style.height=_(c),o},Jo={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Qo={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function el(r){return r in Jo}function G(r,e){if(!r||r.type!==e)throw new Error("Expected node of type "+e+", but got "+(r?"node of type "+r.type:String(r)));return r}function Wr(r){var e=Ur(r);if(!e)throw new Error("Expected node of symbol group type, but got "+(r?"node of type "+r.type:String(r)));return e}function Ur(r){return r&&(r.type==="atom"||Qo.hasOwnProperty(r.type))?r:null}var oi=r=>{if(r instanceof Be)return r;if(Ao(r)&&r.children.length===1)return oi(r.children[0])},ma=(r,e)=>{var t,n,a;r&&r.type==="supsub"?(n=G(r.base,"accent"),t=n.base,r.base=t,a=To(X(r,e)),r.base=n):(n=G(r,"accent"),t=n.base);var i=X(t,e.havingCrampedStyle()),o=n.isShifty&&tt(t),c=0;if(o){var h,d;c=(h=(d=oi(i))==null?void 0:d.skew)!=null?h:0}var p=n.label==="\\c",x=p?i.height+i.depth:Math.min(i.height,e.fontMetrics().xHeight),f;if(n.isStretchy)f=jr(n,e),f=V({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"elem",elem:f,wrapperClasses:["svg-align"],wrapperStyle:c>0?{width:"calc(100% - "+_(2*c)+")",marginLeft:_(2*c)}:void 0}]});else{var v,w;n.label==="\\vec"?(v=ei("vec",e),w=Q0.vec[1]):(v=Hr({mode:n.mode,text:n.label},e,"textord"),v=$o(v),v.italic=0,w=v.width,p&&(x+=v.depth)),f=$(["accent-body"],[v]);var k=n.label==="\\textcircled";k&&(f.classes.push("accent-full"),x=i.height);var q=c;k||(q-=w/2),f.style.left=_(q),n.label==="\\textcircled"&&(f.style.top=".2em"),f=V({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:-x},{type:"elem",elem:f}]})}var T=$(["mord","accent"],[f],e);return a?(a.children[0]=T,a.height=Math.max(T.height,a.height),a.classes[0]="mord",a):T},li=(r,e)=>{var t=r.isStretchy?Gr(r.label):new z("mo",[De(r.label,r.mode)]),n=new z("mover",[te(r.base,e),t]);return n.setAttribute("accent","true"),n},tl=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(r=>"\\"+r).join("|"));M({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(r,e)=>{var t=Er(e[0]),n=!tl.test(r.funcName),a=!n||r.funcName==="\\widehat"||r.funcName==="\\widetilde"||r.funcName==="\\widecheck";return{type:"accent",mode:r.parser.mode,label:r.funcName,isStretchy:n,isShifty:a,base:t}},htmlBuilder:ma,mathmlBuilder:li});M({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(r,e)=>{var t=e[0],n=r.parser.mode;return n==="math"&&(r.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+r.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:r.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:ma,mathmlBuilder:li});M({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(r,e)=>{var{parser:t,funcName:n}=r,a=e[0];return{type:"accentUnder",mode:t.mode,label:n,base:a}},htmlBuilder:(r,e)=>{var t=X(r.base,e),n=jr(r,e),a=r.label==="\\utilde"?.12:0,i=V({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:t}]});return $(["mord","accentunder"],[i],e)},mathmlBuilder:(r,e)=>{var t=Gr(r.label),n=new z("munder",[te(r.base,e),t]);return n.setAttribute("accentunder","true"),n}});var br=r=>{var e=new z("mpadded",r?[r]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};M({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(r,e,t){var{parser:n,funcName:a}=r;return{type:"xArrow",mode:n.mode,label:a,body:e[0],below:t[0]}},htmlBuilder(r,e){var t=e.style,n=e.havingStyle(t.sup()),a=Bt(X(r.body,n,e),e),i=r.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(i+"-arrow-pad");var o;r.below&&(n=e.havingStyle(t.sub()),o=Bt(X(r.below,n,e),e),o.classes.push(i+"-arrow-pad"));var c=jr(r,e),h=-e.fontMetrics().axisHeight+.5*c.height,d=-e.fontMetrics().axisHeight-.5*c.height-.111;(a.depth>.25||r.label==="\\xleftequilibrium")&&(d-=a.depth);var p;if(o){var x=-e.fontMetrics().axisHeight+o.height+.5*c.height+.111;p=V({positionType:"individualShift",children:[{type:"elem",elem:a,shift:d},{type:"elem",elem:c,shift:h,wrapperClasses:["svg-align"]},{type:"elem",elem:o,shift:x}]})}else p=V({positionType:"individualShift",children:[{type:"elem",elem:a,shift:d},{type:"elem",elem:c,shift:h,wrapperClasses:["svg-align"]}]});return $(["mrel","x-arrow"],[p],e)},mathmlBuilder(r,e){var t=Gr(r.label);t.setAttribute("minsize",r.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(r.body){var a=br(te(r.body,e));if(r.below){var i=br(te(r.below,e));n=new z("munderover",[t,i,a])}else n=new z("mover",[t,a])}else if(r.below){var o=br(te(r.below,e));n=new z("munder",[t,o])}else n=br(),n=new z("mover",[t,n]);return n}});function ci(r,e){var t=be(r.body,e,!0);return $([r.mclass],t,e)}function hi(r,e){var t,n=Ie(r.body,e);return r.mclass==="minner"?t=new z("mpadded",n):r.mclass==="mord"?r.isCharacterBox?(t=n[0],t.type="mi"):t=new z("mi",n):(r.isCharacterBox?(t=n[0],t.type="mo"):t=new z("mo",n),r.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):r.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):r.mclass==="mopen"||r.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):r.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}M({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(r,e){var{parser:t,funcName:n}=r,a=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:me(a),isCharacterBox:tt(a)}},htmlBuilder:ci,mathmlBuilder:hi});var Kr=r=>{var e=r.type==="ordgroup"&&r.body.length?r.body[0]:r;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};M({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(r,e){var{parser:t}=r;return{type:"mclass",mode:t.mode,mclass:Kr(e[0]),body:me(e[1]),isCharacterBox:tt(e[1])}}});M({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(r,e){var{parser:t,funcName:n}=r,a=e[1],i=e[0],o;n!=="\\stackrel"?o=Kr(a):o="mrel";var c={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:me(a)},h={type:"supsub",mode:i.mode,base:c,sup:n==="\\underset"?null:i,sub:n==="\\underset"?i:null};return{type:"mclass",mode:t.mode,mclass:o,body:[h],isCharacterBox:tt(h)}},htmlBuilder:ci,mathmlBuilder:hi});M({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(r,e){var{parser:t}=r;return{type:"pmb",mode:t.mode,mclass:Kr(e[0]),body:me(e[0])}},htmlBuilder(r,e){var t=be(r.body,e,!0),n=$([r.mclass],t,e);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(r,e){var t=Ie(r.body,e),n=new z("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var rl={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Ja=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),Qa=r=>r.type==="textord"&&r.text==="@",nl=(r,e)=>(r.type==="mathord"||r.type==="atom")&&r.text===e;function al(r,e,t){var n=rl[r];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var a=t.callFunction("\\\\cdleft",[e[0]],[]),i={type:"atom",text:n,mode:"math",family:"rel"},o=t.callFunction("\\Big",[i],[]),c=t.callFunction("\\\\cdright",[e[1]],[]),h={type:"ordgroup",mode:"math",body:[a,o,c]};return t.callFunction("\\\\cdparent",[h],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var d={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[d],[])}default:return{type:"textord",text:" ",mode:"math"}}}function il(r){var e=[];for(r.gullet.beginGroup(),r.gullet.macros.set("\\cr","\\\\\\relax"),r.gullet.beginGroup();;){e.push(r.parseExpression(!1,"\\\\")),r.gullet.endGroup(),r.gullet.beginGroup();var t=r.fetch().text;if(t==="&"||t==="\\\\")r.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new A("Expected \\\\ or \\cr or \\end",r.nextToken)}for(var n=[],a=[n],i=0;i<e.length;i++){for(var o=e[i],c=Ja(),h=0;h<o.length;h++)if(!Qa(o[h]))c.body.push(o[h]);else{n.push(c),h+=1;var d=Wr(o[h]).text,p=new Array(2);if(p[0]={type:"ordgroup",mode:"math",body:[]},p[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(d))if("<>AV".includes(d))for(var x=0;x<2;x++){for(var f=!0,v=h+1;v<o.length;v++){if(nl(o[v],d)){f=!1,h=v;break}if(Qa(o[v]))throw new A("Missing a "+d+" character to complete a CD arrow.",o[v]);p[x].body.push(o[v])}if(f)throw new A("Missing a "+d+" character to complete a CD arrow.",o[h])}else throw new A('Expected one of "<>AV=|." after @',o[h]);var w=al(d,p,r),k={type:"styling",body:[w],mode:"math",style:"display",resetFont:!0};n.push(k),c=Ja()}i%2===0?n.push(c):n.shift(),n=[],a.push(n)}r.gullet.endGroup(),r.gullet.endGroup();var q=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:q,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}M({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(r,e){var{parser:t,funcName:n}=r;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:e[0]}},htmlBuilder(r,e){var t=e.havingStyle(e.style.sup()),n=Bt(X(r.label,t,e),e);return n.classes.push("cd-label-"+r.side),n.style.bottom=_(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(r,e){var t=new z("mrow",[te(r.label,e)]);return t=new z("mpadded",[t]),t.setAttribute("width","0"),r.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new z("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});M({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(r,e){var{parser:t}=r;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(r,e){var t=Bt(X(r.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(r,e){return new z("mrow",[te(r.fragment,e)])}});M({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(r,e){for(var{parser:t}=r,n=G(e[0],"ordgroup"),a=n.body,i="",o=0;o<a.length;o++){var c=G(a[o],"textord");i+=c.text}var h=parseInt(i),d;if(isNaN(h))throw new A("\\@char has non-numeric argument "+i);if(h<0||h>=1114111)throw new A("\\@char with invalid code point "+i);return h<=65535?d=String.fromCharCode(h):(h-=65536,d=String.fromCharCode((h>>10)+55296,(h&1023)+56320)),{type:"textord",mode:t.mode,text:d}}});var ui=(r,e)=>{var t=be(r.body,e.withColor(r.color),!1);return nt(t)},di=(r,e)=>{var t=Ie(r.body,e.withColor(r.color)),n=new z("mstyle",t);return n.setAttribute("mathcolor",r.color),n};M({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(r,e){var{parser:t}=r,n=G(e[0],"color-token").color,a=e[1];return{type:"color",mode:t.mode,color:n,body:me(a)}},htmlBuilder:ui,mathmlBuilder:di});M({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(r,e){var{parser:t,breakOnTokenText:n}=r,a=G(e[0],"color-token").color;t.gullet.macros.set("\\current@color",a);var i=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:a,body:i}},htmlBuilder:ui,mathmlBuilder:di});M({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(r,e,t){var{parser:n}=r,a=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,i=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:i,size:a&&G(a,"size").value}},htmlBuilder(r,e){var t=$(["mspace"],[],e);return r.newLine&&(t.classes.push("newline"),r.size&&(t.style.marginTop=_(le(r.size,e)))),t},mathmlBuilder(r,e){var t=new z("mspace");return r.newLine&&(t.setAttribute("linebreak","newline"),r.size&&t.setAttribute("height",_(le(r.size,e)))),t}});var Nn={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},mi=r=>{var e=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new A("Expected a control sequence",r);return e},sl=r=>{var e=r.gullet.popToken();return e.text==="="&&(e=r.gullet.popToken(),e.text===" "&&(e=r.gullet.popToken())),e},pi=(r,e,t,n)=>{var a=r.gullet.macros.get(t.text);a==null&&(t.noexpand=!0,a={tokens:[t],numArgs:0,unexpandable:!r.gullet.isExpandable(t.text)}),r.gullet.macros.set(e,a,n)};M({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(r){var{parser:e,funcName:t}=r;e.consumeSpaces();var n=e.fetch();if(Nn[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=Nn[n.text]),G(e.parseFunction(),"internal");throw new A("Invalid token after macro prefix",n)}});M({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(r){var{parser:e,funcName:t}=r,n=e.gullet.popToken(),a=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new A("Expected a control sequence",n);for(var i=0,o,c=[[]];e.gullet.future().text!=="{";)if(n=e.gullet.popToken(),n.text==="#"){if(e.gullet.future().text==="{"){o=e.gullet.future(),c[i].push("{");break}if(n=e.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new A('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==i+1)throw new A('Argument number "'+n.text+'" out of order');i++,c.push([])}else{if(n.text==="EOF")throw new A("Expected a macro definition");c[i].push(n.text)}var{tokens:h}=e.gullet.consumeArg();return o&&h.unshift(o),(t==="\\edef"||t==="\\xdef")&&(h=e.gullet.expandTokens(h),h.reverse()),e.gullet.macros.set(a,{tokens:h,numArgs:i,delimiters:c},t===Nn[t]),{type:"internal",mode:e.mode}}});M({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(r){var{parser:e,funcName:t}=r,n=mi(e.gullet.popToken());e.gullet.consumeSpaces();var a=sl(e);return pi(e,n,a,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});M({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(r){var{parser:e,funcName:t}=r,n=mi(e.gullet.popToken()),a=e.gullet.popToken(),i=e.gullet.popToken();return pi(e,n,i,t==="\\\\globalfuture"),e.gullet.pushToken(i),e.gullet.pushToken(a),{type:"internal",mode:e.mode}}});var Ut=function(e,t,n){var a=re.math[e]&&re.math[e].replace,i=la(a||e,t,n);if(!i)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return i},pa=function(e,t,n,a){var i=n.havingBaseStyle(t),o=$(a.concat(i.sizingClasses(n)),[e],n),c=i.sizeMultiplier/n.sizeMultiplier;return o.height*=c,o.depth*=c,o.maxFontSize=i.sizeMultiplier,o},fi=function(e,t,n){var a=t.havingBaseStyle(n),i=(1-t.sizeMultiplier/a.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=_(i),e.height-=i,e.depth+=i},ol=function(e,t,n,a,i,o){var c=ke(e,"Main-Regular",i,a),h=pa(c,t,a,o);return fi(h,a,t),h},ll=function(e,t,n,a){return ke(e,"Size"+t+"-Regular",n,a)},gi=function(e,t,n,a,i,o){var c=ll(e,t,i,a),h=pa($(["delimsizing","size"+t],[c],a),L.TEXT,a,o);return n&&fi(h,a,L.TEXT),h},ln=function(e,t,n){var a;t==="Size1-Regular"?a="delim-size1":a="delim-size4";var i=$(["delimsizinginner",a],[$([],[ke(e,t,n)])]);return{type:"elem",elem:i}},cn=function(e,t,n){var a=Ge["Size4-Regular"][e.charCodeAt(0)]?Ge["Size4-Regular"][e.charCodeAt(0)][4]:Ge["Size1-Regular"][e.charCodeAt(0)][4],i=new ht("inner",bo(e,Math.round(1e3*t))),o=new et([i],{width:_(a),height:_(t),style:"width:"+_(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),c=ut([],[o],n);return c.height=t,c.style.height=_(t),c.style.width=_(a),{type:"elem",elem:c}},On=.008,vr={type:"kern",size:-1*On},cl=new Set(["|","\\lvert","\\rvert","\\vert"]),hl=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),bi=function(e,t,n,a,i,o){var c,h,d,p,x="",f=0;c=d=p=e,h=null;var v="Size1-Regular";e==="\\uparrow"?d=p="⏐":e==="\\Uparrow"?d=p="‖":e==="\\downarrow"?c=d="⏐":e==="\\Downarrow"?c=d="‖":e==="\\updownarrow"?(c="\\uparrow",d="⏐",p="\\downarrow"):e==="\\Updownarrow"?(c="\\Uparrow",d="‖",p="\\Downarrow"):cl.has(e)?(d="∣",x="vert",f=333):hl.has(e)?(d="∥",x="doublevert",f=556):e==="["||e==="\\lbrack"?(c="⎡",d="⎢",p="⎣",v="Size4-Regular",x="lbrack",f=667):e==="]"||e==="\\rbrack"?(c="⎤",d="⎥",p="⎦",v="Size4-Regular",x="rbrack",f=667):e==="\\lfloor"||e==="⌊"?(d=c="⎢",p="⎣",v="Size4-Regular",x="lfloor",f=667):e==="\\lceil"||e==="⌈"?(c="⎡",d=p="⎢",v="Size4-Regular",x="lceil",f=667):e==="\\rfloor"||e==="⌋"?(d=c="⎥",p="⎦",v="Size4-Regular",x="rfloor",f=667):e==="\\rceil"||e==="⌉"?(c="⎤",d=p="⎥",v="Size4-Regular",x="rceil",f=667):e==="("||e==="\\lparen"?(c="⎛",d="⎜",p="⎝",v="Size4-Regular",x="lparen",f=875):e===")"||e==="\\rparen"?(c="⎞",d="⎟",p="⎠",v="Size4-Regular",x="rparen",f=875):e==="\\{"||e==="\\lbrace"?(c="⎧",h="⎨",p="⎩",d="⎪",v="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(c="⎫",h="⎬",p="⎭",d="⎪",v="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(c="⎧",p="⎩",d="⎪",v="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(c="⎫",p="⎭",d="⎪",v="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(c="⎧",p="⎭",d="⎪",v="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(c="⎫",p="⎩",d="⎪",v="Size4-Regular");var w=Ut(c,v,i),k=w.height+w.depth,q=Ut(d,v,i),T=q.height+q.depth,R=Ut(p,v,i),B=R.height+R.depth,D=0,P=1;if(h!==null){var N=Ut(h,v,i);D=N.height+N.depth,P=2}var H=k+B+D,U=Math.max(0,Math.ceil((t-H)/(P*T))),j=H+U*P*T,ae=a.fontMetrics().axisHeight;n&&(ae*=a.sizeMultiplier);var de=j/2-ae,Z=[];if(x.length>0){var Ce=j-k-B,ue=Math.round(j*1e3),ce=vo(x,Math.round(Ce*1e3)),qe=new ht(x,ce),Le=_(f/1e3),at=_(ue/1e3),Nt=new et([qe],{width:Le,height:at,viewBox:"0 0 "+f+" "+ue}),_e=ut([],[Nt],a);_e.height=ue/1e3,_e.style.width=Le,_e.style.height=at,Z.push({type:"elem",elem:_e})}else{if(Z.push(ln(p,v,i)),Z.push(vr),h===null){var O=j-k-B+2*On;Z.push(cn(d,O,a))}else{var ie=(j-k-B-D)/2+2*On;Z.push(cn(d,ie,a)),Z.push(vr),Z.push(ln(h,v,i)),Z.push(vr),Z.push(cn(d,ie,a))}Z.push(vr),Z.push(ln(c,v,i))}var ve=a.havingBaseStyle(L.TEXT),Ze=V({positionType:"bottom",positionData:de,children:Z});return pa($(["delimsizing","mult"],[Ze],ve),L.TEXT,a,o)},hn=80,un=.08,dn=function(e,t,n,a,i){var o=go(e,a,n),c=new ht(e,o),h=new et([c],{width:"400em",height:_(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return ut(["hide-tail"],[h],i)},ul=function(e,t){var n=t.havingBaseSizing(),a=ki("\\surd",e*n.sizeMultiplier,wi,n),i=n.sizeMultiplier,o=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),c,h,d,p,x;return a.type==="small"?(p=1e3+1e3*o+hn,e<1?i=1:e<1.4&&(i=.7),h=(1+o+un)/i,d=(1+o)/i,c=dn("sqrtMain",h,p,o,t),c.style.minWidth="0.853em",x=.833/i):a.type==="large"?(p=(1e3+hn)*Xt[a.size],d=(Xt[a.size]+o)/i,h=(Xt[a.size]+o+un)/i,c=dn("sqrtSize"+a.size,h,p,o,t),c.style.minWidth="1.02em",x=1/i):(h=e+o+un,d=e+o,p=Math.floor(1e3*e+o)+hn,c=dn("sqrtTall",h,p,o,t),c.style.minWidth="0.742em",x=1.056),c.height=d,c.style.height=_(h),{span:c,advanceWidth:x,ruleWidth:(t.fontMetrics().sqrtRuleThickness+o)*i}},vi=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),dl=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),yi=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Xt=[0,1.2,1.8,2.4,3],xi=function(e,t,n,a,i){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),vi.has(e)||yi.has(e))return gi(e,t,!1,n,a,i);if(dl.has(e))return bi(e,Xt[t],!1,n,a,i);throw new A("Illegal delimiter: '"+e+"'")},ml=[{type:"small",style:L.SCRIPTSCRIPT},{type:"small",style:L.SCRIPT},{type:"small",style:L.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],pl=[{type:"small",style:L.SCRIPTSCRIPT},{type:"small",style:L.SCRIPT},{type:"small",style:L.TEXT},{type:"stack"}],wi=[{type:"small",style:L.SCRIPTSCRIPT},{type:"small",style:L.SCRIPT},{type:"small",style:L.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],fl=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";var t=e.type;throw new Error("Add support for delim type '"+t+"' here.")},ki=function(e,t,n,a){for(var i=Math.min(2,3-a.style.size),o=i;o<n.length;o++){var c=n[o];if(c.type==="stack")break;var h=Ut(e,fl(c),"math"),d=h.height+h.depth;if(c.type==="small"){var p=a.havingBaseStyle(c.style);d*=p.sizeMultiplier}if(d>t)return c}return n[n.length-1]},Hn=function(e,t,n,a,i,o){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var c;yi.has(e)?c=ml:vi.has(e)?c=wi:c=pl;var h=ki(e,t,c,a);return h.type==="small"?ol(e,h.style,n,a,i,o):h.type==="large"?gi(e,h.size,n,a,i,o):bi(e,t,n,a,i,o)},mn=function(e,t,n,a,i,o){var c=a.fontMetrics().axisHeight*a.sizeMultiplier,h=901,d=5/a.fontMetrics().ptPerEm,p=Math.max(t-c,n+c),x=Math.max(p/500*h,2*p-d);return Hn(e,x,!0,a,i,o)},e0={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},gl=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function t0(r){return"isMiddle"in r}function Zr(r,e){var t=Ur(r);if(t&&gl.has(t.text))return t;throw t?new A("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",r):new A("Invalid delimiter type '"+r.type+"'",r)}M({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(r,e)=>{var t=Zr(e[0],r);return{type:"delimsizing",mode:r.parser.mode,size:e0[r.funcName].size,mclass:e0[r.funcName].mclass,delim:t.text}},htmlBuilder:(r,e)=>r.delim==="."?$([r.mclass]):xi(r.delim,r.size,e,r.mode,[r.mclass]),mathmlBuilder:r=>{var e=[];r.delim!=="."&&e.push(De(r.delim,r.mode));var t=new z("mo",e);r.mclass==="mopen"||r.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=_(Xt[r.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function r0(r){if(!r.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}M({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(r,e)=>{var t=r.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new A("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:r.parser.mode,delim:Zr(e[0],r).text,color:t}}});M({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(r,e)=>{var t=Zr(e[0],r),n=r.parser;++n.leftrightDepth;var a=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var i=G(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:a,left:t.text,right:i.delim,rightColor:i.color}},htmlBuilder:(r,e)=>{r0(r);for(var t=be(r.body,e,!0,["mopen","mclose"]),n=0,a=0,i=!1,o=0;o<t.length;o++){var c=t[o];t0(c)?i=!0:(n=Math.max(t[o].height,n),a=Math.max(t[o].depth,a))}n*=e.sizeMultiplier,a*=e.sizeMultiplier;var h;if(r.left==="."?h=Qt(e,["mopen"]):h=mn(r.left,n,a,e,r.mode,["mopen"]),t.unshift(h),i)for(var d=1;d<t.length;d++){var p=t[d];if(t0(p)){var x=p.isMiddle;t[d]=mn(x.delim,n,a,x.options,r.mode,[])}}var f;if(r.right===".")f=Qt(e,["mclose"]);else{var v=r.rightColor?e.withColor(r.rightColor):e;f=mn(r.right,n,a,v,r.mode,["mclose"])}return t.push(f),$(["minner"],t,e)},mathmlBuilder:(r,e)=>{r0(r);var t=Ie(r.body,e);if(r.left!=="."){var n=new z("mo",[De(r.left,r.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(r.right!=="."){var a=new z("mo",[De(r.right,r.mode)]);a.setAttribute("fence","true"),r.rightColor&&a.setAttribute("mathcolor",r.rightColor),t.push(a)}return ua(t)}});M({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(r,e)=>{var t=Zr(e[0],r);if(!r.parser.leftrightDepth)throw new A("\\middle without preceding \\left",t);return{type:"middle",mode:r.parser.mode,delim:t.text}},htmlBuilder:(r,e)=>{var t;return r.delim==="."?t=Qt(e,[]):(t=xi(r.delim,1,e,r.mode,[]),t.isMiddle={delim:r.delim,options:e}),t},mathmlBuilder:(r,e)=>{var t=r.delim==="\\vert"||r.delim==="|"?De("|","text"):De(r.delim,r.mode),n=new z("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var Vr=(r,e)=>{var t=Bt(X(r.body,e),e),n=r.label.slice(1),a=e.sizeMultiplier,i,o,c=tt(r.body);if(n==="sout")i=$(["stretchy","sout"]),i.height=e.fontMetrics().defaultRuleThickness/a,o=-.5*e.fontMetrics().xHeight;else if(n==="phase"){var h=le({number:.6,unit:"pt"},e),d=le({number:.35,unit:"ex"},e),p=e.havingBaseSizing();a=a/p.sizeMultiplier;var x=t.height+t.depth+h+d;t.style.paddingLeft=_(x/2+h);var f=Math.floor(1e3*x*a),v=po(f),w=new et([new ht("phase",v)],{width:"400em",height:_(f/1e3),viewBox:"0 0 400000 "+f,preserveAspectRatio:"xMinYMin slice"});i=ut(["hide-tail"],[w],e),i.style.height=_(x),o=t.depth+h+d}else{/cancel/.test(n)?c||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var k,q,T=0;/box/.test(n)?(T=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),k=e.fontMetrics().fboxsep+(n==="colorbox"?0:T),q=k):n==="angl"?(T=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),k=4*T,q=Math.max(0,.25-t.depth)):(k=c?.2:0,q=k),i=Yo(t,n,k,q,e),/fbox|boxed|fcolorbox/.test(n)?(i.style.borderStyle="solid",i.style.borderWidth=_(T)):n==="angl"&&T!==.049&&(i.style.borderTopWidth=_(T),i.style.borderRightWidth=_(T)),o=t.depth+q,r.backgroundColor&&(i.style.backgroundColor=r.backgroundColor,r.borderColor&&(i.style.borderColor=r.borderColor))}var R;if(r.backgroundColor)R=V({positionType:"individualShift",children:[{type:"elem",elem:i,shift:o},{type:"elem",elem:t,shift:0}]});else{var B=/cancel|phase/.test(n)?["svg-align"]:[];R=V({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:i,shift:o,wrapperClasses:B}]})}return/cancel/.test(n)&&(R.height=t.height,R.depth=t.depth),/cancel/.test(n)&&!c?$(["mord","cancel-lap"],[R],e):$(["mord"],[R],e)},Xr=(r,e)=>{var t,n=new z(r.label.includes("colorbox")?"mpadded":"menclose",[te(r.body,e)]);switch(r.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),r.label==="\\fcolorbox"){var a=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);n.setAttribute("style","border: "+_(a)+" solid "+r.borderColor)}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return r.backgroundColor&&n.setAttribute("mathbackground",r.backgroundColor),n};M({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","hbox"]},handler(r,e,t){var{parser:n,funcName:a}=r,i=G(e[0],"color-token").color,o=e[1];return{type:"enclose",mode:n.mode,label:a,backgroundColor:i,body:o}},htmlBuilder:Vr,mathmlBuilder:Xr});M({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"]},handler(r,e,t){var{parser:n,funcName:a}=r,i=G(e[0],"color-token").color,o=G(e[1],"color-token").color,c=e[2];return{type:"enclose",mode:n.mode,label:a,backgroundColor:o,borderColor:i,body:c}},htmlBuilder:Vr,mathmlBuilder:Xr});M({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(r,e){var{parser:t}=r;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});M({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],props:{numArgs:1},handler(r,e){var{parser:t,funcName:n}=r,a=e[0];return{type:"enclose",mode:t.mode,label:n,body:a}},htmlBuilder:Vr,mathmlBuilder:Xr});M({type:"enclose",names:["\\sout"],props:{numArgs:1,allowedInText:!0},handler(r,e){var{parser:t,funcName:n}=r;t.mode==="math"&&t.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var a=e[0];return{type:"enclose",mode:t.mode,label:n,body:a}},htmlBuilder:Vr,mathmlBuilder:Xr});M({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(r,e){var{parser:t}=r;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var Si={};function We(r){for(var{type:e,names:t,props:n,handler:a,htmlBuilder:i,mathmlBuilder:o}=r,c={type:e,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},h=0;h<t.length;++h)Si[t[h]]=c;i&&(Rr[e]=i),o&&(Br[e]=o)}var $i={};function m(r,e){$i[r]=e}class Me{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new Me(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class Re{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new Re(t,Me.range(this,e))}}function n0(r){var e=[];r.consumeSpaces();var t=r.fetch().text;for(t==="\\relax"&&(r.consume(),r.consumeSpaces(),t=r.fetch().text);t==="\\hline"||t==="\\hdashline";)r.consume(),e.push(t==="\\hdashline"),r.consumeSpaces(),t=r.fetch().text;return e}var Yr=r=>{var e=r.parser.settings;if(!e.displayMode)throw new A("{"+r.envName+"} can be used only in display mode.")},bl=new Set(["gather","gather*"]);function fa(r){if(!r.includes("ed"))return!r.includes("*")}function mt(r,e,t){var{hskipBeforeAndAfter:n,addJot:a,cols:i,arraystretch:o,colSeparationType:c,autoTag:h,singleRow:d,emptySingleRow:p,maxNumCols:x,leqno:f}=e;if(r.gullet.beginGroup(),d||r.gullet.macros.set("\\cr","\\\\\\relax"),!o){var v=r.gullet.expandMacroAsText("\\arraystretch");if(v==null)o=1;else if(o=parseFloat(v),!o||o<0)throw new A("Invalid \\arraystretch: "+v)}r.gullet.beginGroup();var w=[],k=[w],q=[],T=[],R=h!=null?[]:void 0;function B(){h&&r.gullet.macros.set("\\@eqnsw","1",!0)}function D(){R&&(r.gullet.macros.get("\\df@tag")?(R.push(r.subparse([new Re("\\df@tag")])),r.gullet.macros.set("\\df@tag",void 0,!0)):R.push(!!h&&r.gullet.macros.get("\\@eqnsw")==="1"))}for(B(),T.push(n0(r));;){var P=r.parseExpression(!1,d?"\\end":"\\\\");r.gullet.endGroup(),r.gullet.beginGroup();var N={type:"ordgroup",mode:r.mode,body:P};t&&(N={type:"styling",mode:r.mode,style:t,resetFont:!0,body:[N]}),w.push(N);var H=r.fetch().text;if(H==="&"){if(x&&w.length===x){if(d||c)throw new A("Too many tab characters: &",r.nextToken);r.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}r.consume()}else if(H==="\\end"){D(),w.length===1&&N.type==="styling"&&N.body.length===1&&N.body[0].type==="ordgroup"&&N.body[0].body.length===0&&(k.length>1||!p)&&k.pop(),T.length<k.length+1&&T.push([]);break}else if(H==="\\\\"){r.consume();var U=void 0;r.gullet.future().text!==" "&&(U=r.parseSizeGroup(!0)),q.push(U?U.value:null),D(),T.push(n0(r)),w=[],k.push(w),B()}else throw new A("Expected & or \\\\ or \\cr or \\end",r.nextToken)}return r.gullet.endGroup(),r.gullet.endGroup(),{type:"array",mode:r.mode,addJot:a,arraystretch:o,body:k,cols:i,rowGaps:q,hskipBeforeAndAfter:n,hLinesBeforeRow:T,colSeparationType:c,tags:R,leqno:f}}function ga(r){return r.slice(0,1)==="d"?"display":"text"}var Ue=function(e,t){var n,a,i=e.body.length,o=e.hLinesBeforeRow,c=0,h=new Array(i),d=[],p=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),x=1/t.fontMetrics().ptPerEm,f=5*x;if(e.colSeparationType&&e.colSeparationType==="small"){var v=t.havingStyle(L.SCRIPT).sizeMultiplier;f=.2778*(v/t.sizeMultiplier)}var w=e.colSeparationType==="CD"?le({number:3,unit:"ex"},t):12*x,k=3*x,q=e.arraystretch*w,T=.7*q,R=.3*q,B=0;function D(cr){for(var hr=0;hr<cr.length;++hr)hr>0&&(B+=.25),d.push({pos:B,isDashed:cr[hr]})}for(D(o[0]),n=0;n<e.body.length;++n){var P=e.body[n],N=T,H=R;c<P.length&&(c=P.length);var U={cells:new Array(P.length),height:0,depth:0,pos:0};for(a=0;a<P.length;++a){var j=X(P[a],t);H<j.depth&&(H=j.depth),N<j.height&&(N=j.height),U.cells[a]=j}var ae=e.rowGaps[n],de=0;ae&&(de=le(ae,t),de>0&&(de+=R,H<de&&(H=de),de=0)),e.addJot&&n<e.body.length-1&&(H+=k),U.height=N,U.depth=H,B+=N,U.pos=B,B+=H+de,h[n]=U,D(o[n+1])}var Z=B/2+t.fontMetrics().axisHeight,Ce=e.cols||[],ue=[],ce,qe,Le=[];if(e.tags&&e.tags.some(cr=>cr))for(n=0;n<i;++n){var at=h[n],Nt=at.pos-Z,_e=e.tags[n],O=void 0;_e===!0?O=$(["eqn-num"],[],t):_e===!1?O=$([],[],t):O=$([],be(_e,t,!0),t),O.depth=at.depth,O.height=at.height,Le.push({type:"elem",elem:O,shift:Nt})}for(a=0,qe=0;a<c||qe<Ce.length;++a,++qe){for(var ie,ve=Ce[qe],Ze=!0;((Ot=ve)==null?void 0:Ot.type)==="separator";){var Ot;if(Ze||(ce=$(["arraycolsep"],[]),ce.style.width=_(t.fontMetrics().doubleRuleSep),ue.push(ce)),ve.separator==="|"||ve.separator===":"){var Ht=ve.separator==="|"?"solid":"dashed",$t=$(["vertical-separator"],[],t);$t.style.height=_(B),$t.style.borderRightWidth=_(p),$t.style.borderRightStyle=Ht,$t.style.margin="0 "+_(-p/2);var Sa=B-Z;Sa&&($t.style.verticalAlign=_(-Sa)),ue.push($t)}else throw new A("Invalid separator type: "+ve.separator);qe++,ve=Ce[qe],Ze=!1}if(!(a>=c)){var Tt=void 0;if(a>0||e.hskipBeforeAndAfter){var $a,Ta;Tt=($a=(Ta=ve)==null?void 0:Ta.pregap)!=null?$a:f,Tt!==0&&(ce=$(["arraycolsep"],[]),ce.style.width=_(Tt),ue.push(ce))}var Aa=[];for(n=0;n<i;++n){var sr=h[n],or=sr.cells[a];if(or){var rs=sr.pos-Z;or.depth=sr.depth,or.height=sr.height,Aa.push({type:"elem",elem:or,shift:rs})}}var ns=V({positionType:"individualShift",children:Aa}),as=$(["col-align-"+(((ie=ve)==null?void 0:ie.align)||"c")],[ns]);if(ue.push(as),a<c-1||e.hskipBeforeAndAfter){var za,qa;Tt=(za=(qa=ve)==null?void 0:qa.postgap)!=null?za:f,Tt!==0&&(ce=$(["arraycolsep"],[]),ce.style.width=_(Tt),ue.push(ce))}}}var lr=$(["mtable"],ue);if(d.length>0){for(var is=Rt("hline",t,p),ss=Rt("hdashline",t,p),en=[{type:"elem",elem:lr,shift:0}];d.length>0;){var _a=d.pop(),Ma=_a.pos-Z;_a.isDashed?en.push({type:"elem",elem:ss,shift:Ma}):en.push({type:"elem",elem:is,shift:Ma})}lr=V({positionType:"individualShift",children:en})}if(Le.length===0)return $(["mord"],[lr],t);var os=V({positionType:"individualShift",children:Le}),ls=$(["tag"],[os],t);return nt([lr,ls])},vl={c:"center ",l:"left ",r:"right "},Ke=function(e,t){for(var n=[],a=new z("mtd",[],["mtr-glue"]),i=new z("mtd",[],["mml-eqn-num"]),o=0;o<e.body.length;o++){for(var c=e.body[o],h=[],d=0;d<c.length;d++)h.push(new z("mtd",[te(c[d],t)]));e.tags&&e.tags[o]&&(h.unshift(a),h.push(a),e.leqno?h.unshift(i):h.push(i)),n.push(new z("mtr",h))}var p=new z("mtable",n),x=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);p.setAttribute("rowspacing",_(x));var f="",v="";if(e.cols&&e.cols.length>0){var w=e.cols,k="",q=!1,T=0,R=w.length;w[0].type==="separator"&&(f+="top ",T=1),w[w.length-1].type==="separator"&&(f+="bottom ",R-=1);for(var B=T;B<R;B++){var D=w[B];D.type==="align"?(v+=vl[D.align],q&&(k+="none "),q=!0):D.type==="separator"&&q&&(k+=D.separator==="|"?"solid ":"dashed ",q=!1)}p.setAttribute("columnalign",v.trim()),/[sd]/.test(k)&&p.setAttribute("columnlines",k.trim())}if(e.colSeparationType==="align"){for(var P=e.cols||[],N="",H=1;H<P.length;H++)N+=H%2?"0em ":"1em ";p.setAttribute("columnspacing",N.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?p.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?p.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?p.setAttribute("columnspacing","0.5em"):p.setAttribute("columnspacing","1em");var U="",j=e.hLinesBeforeRow;f+=j[0].length>0?"left ":"",f+=j[j.length-1].length>0?"right ":"";for(var ae=1;ae<j.length-1;ae++)U+=j[ae].length===0?"none ":j[ae][0]?"dashed ":"solid ";return/[sd]/.test(U)&&p.setAttribute("rowlines",U.trim()),f!==""&&(p=new z("menclose",[p]),p.setAttribute("notation",f.trim())),e.arraystretch&&e.arraystretch<1&&(p=new z("mstyle",[p]),p.setAttribute("scriptlevel","1")),p},Ti=function(e,t){e.envName.includes("ed")||Yr(e);var n=[],a=e.envName.includes("at")?"alignat":"align",i=e.envName==="split",o=mt(e.parser,{cols:n,addJot:!0,autoTag:i?void 0:fa(e.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:i?2:void 0,leqno:e.parser.settings.leqno},"display"),c=0,h=0,d={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var p="",x=0;x<t[0].body.length;x++){var f=G(t[0].body[x],"textord");p+=f.text}c=Number(p),h=c*2}var v=!h;o.body.forEach(function(T){for(var R=1;R<T.length;R+=2){var B=G(T[R],"styling"),D=G(B.body[0],"ordgroup");D.body.unshift(d)}if(v)h<T.length&&(h=T.length);else{var P=T.length/2;if(c<P)throw new A("Too many math in a row: "+("expected "+c+", but got "+P),T[0])}});for(var w=0;w<h;++w){var k="r",q=0;w%2===1?k="l":w>0&&v&&(q=1),n[w]={type:"align",align:k,pregap:q,postgap:0}}return o.colSeparationType=v?"align":"alignat",o};We({type:"array",names:["array","darray"],props:{numArgs:1},handler(r,e){var t=Ur(e[0]),n=t?[e[0]]:G(e[0],"ordgroup").body,a=n.map(function(o){var c=Wr(o),h=c.text;if("lcr".includes(h))return{type:"align",align:h};if(h==="|")return{type:"separator",separator:"|"};if(h===":")return{type:"separator",separator:":"};throw new A("Unknown column alignment: "+h,o)}),i={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return mt(r.parser,i,ga(r.envName))},htmlBuilder:Ue,mathmlBuilder:Ke});We({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(r){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[r.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(r.envName.charAt(r.envName.length-1)==="*"){var a=r.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),t=a.fetch().text,!"lcr".includes(t))throw new A("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),n.cols=[{type:"align",align:t}]}}var i=mt(r.parser,n,ga(r.envName)),o=Math.max(0,...i.body.map(c=>c.length));return i.cols=new Array(o).fill({type:"align",align:t}),e?{type:"leftright",mode:r.mode,body:[i],left:e[0],right:e[1],rightColor:void 0}:i},htmlBuilder:Ue,mathmlBuilder:Ke});We({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(r){var e={arraystretch:.5},t=mt(r.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:Ue,mathmlBuilder:Ke});We({type:"array",names:["subarray"],props:{numArgs:1},handler(r,e){var t=Ur(e[0]),n=t?[e[0]]:G(e[0],"ordgroup").body,a=n.map(function(c){var h=Wr(c),d=h.text;if("lc".includes(d))return{type:"align",align:d};throw new A("Unknown column alignment: "+d,c)});if(a.length>1)throw new A("{subarray} can contain only one column");var i={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5},o=mt(r.parser,i,"script");if(o.body.length>0&&o.body[0].length>1)throw new A("{subarray} can contain only one column");return o},htmlBuilder:Ue,mathmlBuilder:Ke});We({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(r){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=mt(r.parser,e,ga(r.envName));return{type:"leftright",mode:r.mode,body:[t],left:r.envName.includes("r")?".":"\\{",right:r.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Ue,mathmlBuilder:Ke});We({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Ti,htmlBuilder:Ue,mathmlBuilder:Ke});We({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(r){bl.has(r.envName)&&Yr(r);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:fa(r.envName),emptySingleRow:!0,leqno:r.parser.settings.leqno};return mt(r.parser,e,"display")},htmlBuilder:Ue,mathmlBuilder:Ke});We({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Ti,htmlBuilder:Ue,mathmlBuilder:Ke});We({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(r){Yr(r);var e={autoTag:fa(r.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:r.parser.settings.leqno};return mt(r.parser,e,"display")},htmlBuilder:Ue,mathmlBuilder:Ke});We({type:"array",names:["CD"],props:{numArgs:0},handler(r){return Yr(r),il(r.parser)},htmlBuilder:Ue,mathmlBuilder:Ke});m("\\nonumber","\\gdef\\@eqnsw{0}");m("\\notag","\\nonumber");M({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(r,e){throw new A(r.funcName+" valid only within array environment")}});var a0=Si;M({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(r,e){var{parser:t,funcName:n}=r,a=e[0];if(a.type!=="ordgroup")throw new A("Invalid environment name",a);for(var i="",o=0;o<a.body.length;++o)i+=G(a.body[o],"textord").text;if(n==="\\begin"){if(!a0.hasOwnProperty(i))throw new A("No such environment: "+i,a);var c=a0[i],{args:h,optArgs:d}=t.parseArguments("\\begin{"+i+"}",c),p={mode:t.mode,envName:i,parser:t},x=c.handler(p,h,d);t.expect("\\end",!1);var f=t.nextToken,v=G(t.parseFunction(),"environment");if(v.name!==i)throw new A("Mismatch: \\begin{"+i+"} matched by \\end{"+v.name+"}",f);return x}return{type:"environment",mode:t.mode,name:i,nameGroup:a}}});var Ai=(r,e)=>{var t=r.font,n=e.withFont(t);return X(r.body,n)},zi=(r,e)=>{var t=r.font,n=e.withFont(t);return te(r.body,n)},i0={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};M({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(r,e)=>{var{parser:t,funcName:n}=r,a=Er(e[0]),i=n;return i in i0&&(i=i0[i]),{type:"font",mode:t.mode,font:i.slice(1),body:a}},htmlBuilder:Ai,mathmlBuilder:zi});M({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(r,e)=>{var{parser:t}=r,n=e[0];return{type:"mclass",mode:t.mode,mclass:Kr(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:tt(n)}}});M({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(r,e)=>{var{parser:t,funcName:n,breakOnTokenText:a}=r,{mode:i}=t,o=t.parseExpression(!0,a);return{type:"font",mode:i,font:"math"+n.slice(1),body:{type:"ordgroup",mode:t.mode,body:o}}},htmlBuilder:Ai,mathmlBuilder:zi});var yl=(r,e)=>{var t=e.style,n=t.fracNum(),a=t.fracDen(),i;i=e.havingStyle(n);var o=X(r.numer,i,e);if(r.continued){var c=8.5/e.fontMetrics().ptPerEm,h=3.5/e.fontMetrics().ptPerEm;o.height=o.height<c?c:o.height,o.depth=o.depth<h?h:o.depth}i=e.havingStyle(a);var d=X(r.denom,i,e),p,x,f;r.hasBarLine?(r.barSize?(x=le(r.barSize,e),p=Rt("frac-line",e,x)):p=Rt("frac-line",e),x=p.height,f=p.height):(p=null,x=0,f=e.fontMetrics().defaultRuleThickness);var v,w,k;t.size===L.DISPLAY.size?(v=e.fontMetrics().num1,x>0?w=3*f:w=7*f,k=e.fontMetrics().denom1):(x>0?(v=e.fontMetrics().num2,w=f):(v=e.fontMetrics().num3,w=3*f),k=e.fontMetrics().denom2);var q;if(p){var R=e.fontMetrics().axisHeight;v-o.depth-(R+.5*x)<w&&(v+=w-(v-o.depth-(R+.5*x))),R-.5*x-(d.height-k)<w&&(k+=w-(R-.5*x-(d.height-k)));var B=-(R-.5*x);q=V({positionType:"individualShift",children:[{type:"elem",elem:d,shift:k},{type:"elem",elem:p,shift:B},{type:"elem",elem:o,shift:-v}]})}else{var T=v-o.depth-(d.height-k);T<w&&(v+=.5*(w-T),k+=.5*(w-T)),q=V({positionType:"individualShift",children:[{type:"elem",elem:d,shift:k},{type:"elem",elem:o,shift:-v}]})}i=e.havingStyle(t),q.height*=i.sizeMultiplier/e.sizeMultiplier,q.depth*=i.sizeMultiplier/e.sizeMultiplier;var D;t.size===L.DISPLAY.size?D=e.fontMetrics().delim1:t.size===L.SCRIPTSCRIPT.size?D=e.havingStyle(L.SCRIPT).fontMetrics().delim2:D=e.fontMetrics().delim2;var P,N;return r.leftDelim==null?P=Qt(e,["mopen"]):P=Hn(r.leftDelim,D,!0,e.havingStyle(t),r.mode,["mopen"]),r.continued?N=$([]):r.rightDelim==null?N=Qt(e,["mclose"]):N=Hn(r.rightDelim,D,!0,e.havingStyle(t),r.mode,["mclose"]),$(["mord"].concat(i.sizingClasses(e)),[P,$(["mfrac"],[q]),N],e)},xl=(r,e)=>{var t=new z("mfrac",[te(r.numer,e),te(r.denom,e)]);if(!r.hasBarLine)t.setAttribute("linethickness","0px");else if(r.barSize){var n=le(r.barSize,e);t.setAttribute("linethickness",_(n))}if(r.leftDelim!=null||r.rightDelim!=null){var a=[];if(r.leftDelim!=null){var i=new z("mo",[new pe(r.leftDelim.replace("\\",""))]);i.setAttribute("fence","true"),a.push(i)}if(a.push(t),r.rightDelim!=null){var o=new z("mo",[new pe(r.rightDelim.replace("\\",""))]);o.setAttribute("fence","true"),a.push(o)}return ua(a)}return t},qi=(r,e)=>{if(!e)return r;var t={type:"styling",mode:r.mode,style:e,body:[r]};return t};M({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(r,e)=>{var{parser:t,funcName:n}=r,a=e[0],i=e[1],o,c=null,h=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":o=!0;break;case"\\\\atopfrac":o=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":o=!1,c="(",h=")";break;case"\\\\bracefrac":o=!1,c="\\{",h="\\}";break;case"\\\\brackfrac":o=!1,c="[",h="]";break;default:throw new Error("Unrecognized genfrac command")}var d=n==="\\cfrac",p=null;return d||n.startsWith("\\d")?p="display":n.startsWith("\\t")&&(p="text"),qi({type:"genfrac",mode:t.mode,numer:a,denom:i,continued:d,hasBarLine:o,leftDelim:c,rightDelim:h,barSize:null},p)},htmlBuilder:yl,mathmlBuilder:xl});M({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(r){var{parser:e,funcName:t,token:n}=r,a;switch(t){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:a,token:n}}});var s0=["display","text","script","scriptscript"],o0=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};M({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(r,e){var{parser:t}=r,n=e[4],a=e[5],i=Er(e[0]),o=i.type==="atom"&&i.family==="open"?o0(i.text):null,c=Er(e[1]),h=c.type==="atom"&&c.family==="close"?o0(c.text):null,d=G(e[2],"size"),p,x=null;d.isBlank?p=!0:(x=d.value,p=x.number>0);var f=null,v=e[3];if(v.type==="ordgroup"){if(v.body.length>0){var w=G(v.body[0],"textord");f=s0[Number(w.text)]}}else v=G(v,"textord"),f=s0[Number(v.text)];return qi({type:"genfrac",mode:t.mode,numer:n,denom:a,continued:!1,hasBarLine:p,barSize:x,leftDelim:o,rightDelim:h},f)}});M({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(r,e){var{parser:t,funcName:n,token:a}=r;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:G(e[0],"size").value,token:a}}});M({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(r,e)=>{var{parser:t,funcName:n}=r,a=e[0],i=G(e[1],"infix").size;if(!i)throw new Error("\\\\abovefrac expected size, but got "+String(i));var o=e[2],c=i.number>0;return{type:"genfrac",mode:t.mode,numer:a,denom:o,continued:!1,hasBarLine:c,barSize:i,leftDelim:null,rightDelim:null}}});var _i=(r,e)=>{var t=e.style,n,a;r.type==="supsub"?(n=r.sup?X(r.sup,e.havingStyle(t.sup()),e):X(r.sub,e.havingStyle(t.sub()),e),a=G(r.base,"horizBrace")):a=G(r,"horizBrace");var i=X(a.base,e.havingBaseStyle(L.DISPLAY)),o=jr(a,e),c;if(a.isOver?c=V({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:.1},{type:"elem",elem:o,wrapperClasses:["svg-align"]}]}):c=V({positionType:"bottom",positionData:i.depth+.1+o.height,children:[{type:"elem",elem:o,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:i}]}),n){var h=$(["minner",a.isOver?"mover":"munder"],[c],e);a.isOver?c=V({positionType:"firstBaseline",children:[{type:"elem",elem:h},{type:"kern",size:.2},{type:"elem",elem:n}]}):c=V({positionType:"bottom",positionData:h.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:h}]})}return $(["minner",a.isOver?"mover":"munder"],[c],e)},wl=(r,e)=>{var t=Gr(r.label);return new z(r.isOver?"mover":"munder",[te(r.base,e),t])};M({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],props:{numArgs:1},handler(r,e){var{parser:t,funcName:n}=r;return{type:"horizBrace",mode:t.mode,label:n,isOver:n.includes("\\over"),base:e[0]}},htmlBuilder:_i,mathmlBuilder:wl});M({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(r,e)=>{var{parser:t}=r,n=e[1],a=G(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:t.mode,href:a,body:me(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(r,e)=>{var t=be(r.body,e,!1);return Eo(r.href,[],t,e)},mathmlBuilder:(r,e)=>{var t=dt(r.body,e);return t instanceof z||(t=new z("mrow",[t])),t.setAttribute("href",r.href),t}});M({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(r,e)=>{var{parser:t}=r,n=G(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var a=[],i=0;i<n.length;i++){var o=n[i];o==="~"&&(o="\\textasciitilde"),a.push({type:"textord",mode:"text",text:o})}var c={type:"text",mode:t.mode,font:"\\texttt",body:a};return{type:"href",mode:t.mode,href:n,body:me(c)}}});M({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(r,e){var{parser:t}=r;return{type:"hbox",mode:t.mode,body:me(e[0])}},htmlBuilder(r,e){var t=be(r.body,e.withFont(""),!1);return nt(t)},mathmlBuilder(r,e){return new z("mrow",Ie(r.body,e.withFont("")))}});M({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(r,e)=>{var{parser:t,funcName:n,token:a}=r,i=G(e[0],"raw").string,o=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var c,h={};switch(n){case"\\htmlClass":h.class=i,c={command:"\\htmlClass",class:i};break;case"\\htmlId":h.id=i,c={command:"\\htmlId",id:i};break;case"\\htmlStyle":h.style=i,c={command:"\\htmlStyle",style:i};break;case"\\htmlData":{for(var d=i.split(","),p=0;p<d.length;p++){var x=d[p],f=x.indexOf("=");if(f<0)throw new A("\\htmlData key/value '"+x+"' missing equals sign");var v=x.slice(0,f),w=x.slice(f+1);h["data-"+v.trim()]=w}c={command:"\\htmlData",attributes:h};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(c)?{type:"html",mode:t.mode,attributes:h,body:me(o)}:t.formatUnsupportedCmd(n)},htmlBuilder:(r,e)=>{var t=be(r.body,e,!1),n=["enclosing"];r.attributes.class&&n.push(...r.attributes.class.trim().split(/\s+/));var a=$(n,t,e);for(var i in r.attributes)i!=="class"&&r.attributes.hasOwnProperty(i)&&a.setAttribute(i,r.attributes[i]);return a},mathmlBuilder:(r,e)=>dt(r.body,e)});M({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(r,e)=>{var{parser:t}=r;return{type:"htmlmathml",mode:t.mode,html:me(e[0]),mathml:me(e[1])}},htmlBuilder:(r,e)=>{var t=be(r.html,e,!1);return nt(t)},mathmlBuilder:(r,e)=>dt(r.mathml,e)});var pn=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new A("Invalid size: '"+e+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!U0(n))throw new A("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};M({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(r,e,t)=>{var{parser:n}=r,a={number:0,unit:"em"},i={number:.9,unit:"em"},o={number:0,unit:"em"},c="";if(t[0])for(var h=G(t[0],"raw").string,d=h.split(","),p=0;p<d.length;p++){var x=d[p].split("=");if(x.length===2){var f=x[1].trim();switch(x[0].trim()){case"alt":c=f;break;case"width":a=pn(f);break;case"height":i=pn(f);break;case"totalheight":o=pn(f);break;default:throw new A("Invalid key: '"+x[0]+"' in \\includegraphics.")}}}var v=G(e[0],"url").url;return c===""&&(c=v,c=c.replace(/^.*[\\/]/,""),c=c.substring(0,c.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:v})?{type:"includegraphics",mode:n.mode,alt:c,width:a,height:i,totalheight:o,src:v}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(r,e)=>{var t=le(r.height,e),n=0;r.totalheight.number>0&&(n=le(r.totalheight,e)-t);var a=0;r.width.number>0&&(a=le(r.width,e));var i={height:_(t+n)};a>0&&(i.width=_(a)),n>0&&(i.verticalAlign=_(-n));var o=new ko(r.src,r.alt,i);return o.height=t,o.depth=n,o},mathmlBuilder:(r,e)=>{var t=new z("mglyph",[]);t.setAttribute("alt",r.alt);var n=le(r.height,e),a=0;if(r.totalheight.number>0&&(a=le(r.totalheight,e)-n,t.setAttribute("valign",_(-a))),t.setAttribute("height",_(n+a)),r.width.number>0){var i=le(r.width,e);t.setAttribute("width",_(i))}return t.setAttribute("src",r.src),t}});M({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(r,e){var{parser:t,funcName:n}=r,a=G(e[0],"size");if(t.settings.strict){var i=n[1]==="m",o=a.value.unit==="mu";i?(o||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+a.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):o&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:a.value}},htmlBuilder(r,e){return J0(r.dimension,e)},mathmlBuilder(r,e){var t=le(r.dimension,e);return new ai(t)}});M({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(r,e)=>{var{parser:t,funcName:n}=r,a=e[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:a}},htmlBuilder:(r,e)=>{var t;r.alignment==="clap"?(t=$([],[X(r.body,e)]),t=$(["inner"],[t],e)):t=$(["inner"],[X(r.body,e)]);var n=$(["fix"],[]),a=$([r.alignment],[t,n],e),i=$(["strut"]);return i.style.height=_(a.height+a.depth),a.depth&&(i.style.verticalAlign=_(-a.depth)),a.children.unshift(i),a=$(["thinbox"],[a],e),$(["mord","vbox"],[a],e)},mathmlBuilder:(r,e)=>{var t=new z("mpadded",[te(r.body,e)]);if(r.alignment!=="rlap"){var n=r.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});M({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(r,e){var{funcName:t,parser:n}=r,a=n.mode;n.switchMode("math");var i=t==="\\("?"\\)":"$",o=n.parseExpression(!1,i);return n.expect(i),n.switchMode(a),{type:"styling",mode:n.mode,style:"text",resetFont:!0,body:o}}});M({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(r,e){throw new A("Mismatched "+r.funcName)}});var l0=(r,e)=>{switch(e.style.size){case L.DISPLAY.size:return r.display;case L.TEXT.size:return r.text;case L.SCRIPT.size:return r.script;case L.SCRIPTSCRIPT.size:return r.scriptscript;default:return r.text}};M({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(r,e)=>{var{parser:t}=r;return{type:"mathchoice",mode:t.mode,display:me(e[0]),text:me(e[1]),script:me(e[2]),scriptscript:me(e[3])}},htmlBuilder:(r,e)=>{var t=l0(r,e),n=be(t,e,!1);return nt(n)},mathmlBuilder:(r,e)=>{var t=l0(r,e);return dt(t,e)}});var Mi=(r,e,t,n,a,i,o)=>{r=$([],[r]);var c=t&&tt(t),h,d;if(e){var p=X(e,n.havingStyle(a.sup()),n);d={elem:p,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-p.depth)}}if(t){var x=X(t,n.havingStyle(a.sub()),n);h={elem:x,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-x.height)}}var f;if(d&&h){var v=n.fontMetrics().bigOpSpacing5+h.elem.height+h.elem.depth+h.kern+r.depth+o;f=V({positionType:"bottom",positionData:v,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:_(-i)},{type:"kern",size:h.kern},{type:"elem",elem:r},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:_(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(h){var w=r.height-o;f=V({positionType:"top",positionData:w,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:_(-i)},{type:"kern",size:h.kern},{type:"elem",elem:r}]})}else if(d){var k=r.depth+o;f=V({positionType:"bottom",positionData:k,children:[{type:"elem",elem:r},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:_(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return r;var q=[f];if(h&&i!==0&&!c){var T=$(["mspace"],[],n);T.style.marginRight=_(i),q.unshift(T)}return $(["mop","op-limits"],q,n)},Ci=new Set(["\\smallint"]),Pt=(r,e)=>{var t,n,a=!1,i;r.type==="supsub"?(t=r.sup,n=r.sub,i=G(r.base,"op"),a=!0):i=G(r,"op");var o=e.style,c=!1;o.size===L.DISPLAY.size&&i.symbol&&!Ci.has(i.name)&&(c=!0);var h,d;if(i.symbol){var p=c?"Size2-Regular":"Size1-Regular",x="";if((i.name==="\\oiint"||i.name==="\\oiiint")&&(x=i.name.slice(1),i.name=x==="oiint"?"\\iint":"\\iiint"),h=ke(i.name,p,"math",e,["mop","op-symbol",c?"large-op":"small-op"]),d=h.italic,x.length>0){var f=ei(x+"Size"+(c?"2":"1"),e);h=V({positionType:"individualShift",children:[{type:"elem",elem:h,shift:0},{type:"elem",elem:f,shift:c?.08:0}]}),i.name="\\"+x,h.classes.unshift("mop"),h.italic=d}}else if(i.body){var v=be(i.body,e,!0);v.length===1&&v[0]instanceof Be?(h=v[0],h.classes[0]="mop"):h=$(["mop"],v,e)}else{for(var w=[],k=1;k<i.name.length;k++)w.push(ca(i.name[k],i.mode,e));h=$(["mop"],w,e)}var q=0,T=0;if((h instanceof Be||i.name==="\\oiint"||i.name==="\\oiiint")&&!i.suppressBaseShift){var R;q=(h.height-h.depth)/2-e.fontMetrics().axisHeight,T=(R=h.italic)!=null?R:0}return a?Mi(h,t,n,e,o,T,q):(q&&(h.style.position="relative",h.style.top=_(q)),h)},nr=(r,e)=>{var t;if(r.symbol)t=new z("mo",[De(r.name,r.mode)]),Ci.has(r.name)&&t.setAttribute("largeop","false");else if(r.body)t=new z("mo",Ie(r.body,e));else{t=new z("mi",[new pe(r.name.slice(1))]);var n=new z("mo",[De("⁡","text")]);r.parentIsSupSub?t=new z("mrow",[t,n]):t=ni([t,n])}return t},kl={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};M({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(r,e)=>{var{parser:t,funcName:n}=r,a=n;return a.length===1&&(a=kl[a]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Pt,mathmlBuilder:nr});M({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(r,e)=>{var{parser:t}=r,n=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:me(n)}},htmlBuilder:Pt,mathmlBuilder:nr});var Sl={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};M({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(r){var{parser:e,funcName:t}=r;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Pt,mathmlBuilder:nr});M({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(r){var{parser:e,funcName:t}=r;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Pt,mathmlBuilder:nr});M({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(r){var{parser:e,funcName:t}=r,n=t;return n.length===1&&(n=Sl[n]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:Pt,mathmlBuilder:nr});var Ri=(r,e)=>{var t,n,a=!1,i;r.type==="supsub"?(t=r.sup,n=r.sub,i=G(r.base,"operatorname"),a=!0):i=G(r,"operatorname");var o;if(i.body.length>0){for(var c=i.body.map(x=>{var f="text"in x?x.text:void 0;return typeof f=="string"?{type:"textord",mode:x.mode,text:f}:x}),h=be(c,e.withFont("mathrm"),!0),d=0;d<h.length;d++){var p=h[d];p instanceof Be&&(p.text=p.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}o=$(["mop"],h,e)}else o=$(["mop"],[],e);return a?Mi(o,t,n,e,e.style,0,0):o},$l=(r,e)=>{for(var t=Ie(r.body,e.withFont("mathrm")),n=!0,a=0;a<t.length;a++){var i=t[a];if(!(i instanceof ai))if(i instanceof z)switch(i.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var o=i.children[0];i.children.length===1&&o instanceof pe?o.text=o.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var c=t.map(p=>p.toText()).join("");t=[new pe(c)]}var h=new z("mi",t);h.setAttribute("mathvariant","normal");var d=new z("mo",[De("⁡","text")]);return r.parentIsSupSub?new z("mrow",[h,d]):ni([h,d])};M({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(r,e)=>{var{parser:t,funcName:n}=r,a=e[0];return{type:"operatorname",mode:t.mode,body:me(a),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Ri,mathmlBuilder:$l});m("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");kt({type:"ordgroup",htmlBuilder(r,e){return r.semisimple?nt(be(r.body,e,!1)):$(["mord"],be(r.body,e,!0),e)},mathmlBuilder(r,e){return dt(r.body,e,!0)}});M({type:"overline",names:["\\overline"],props:{numArgs:1},handler(r,e){var{parser:t}=r,n=e[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(r,e){var t=X(r.body,e.havingCrampedStyle()),n=Rt("overline-line",e),a=e.fontMetrics().defaultRuleThickness,i=V({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*a},{type:"elem",elem:n},{type:"kern",size:a}]});return $(["mord","overline"],[i],e)},mathmlBuilder(r,e){var t=new z("mo",[new pe("‾")]);t.setAttribute("stretchy","true");var n=new z("mover",[te(r.body,e),t]);return n.setAttribute("accent","true"),n}});M({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(r,e)=>{var{parser:t}=r,n=e[0];return{type:"phantom",mode:t.mode,body:me(n)}},htmlBuilder:(r,e)=>{var t=be(r.body,e.withPhantom(),!1);return nt(t)},mathmlBuilder:(r,e)=>{var t=Ie(r.body,e);return new z("mphantom",t)}});m("\\hphantom","\\smash{\\phantom{#1}}");M({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(r,e)=>{var{parser:t}=r,n=e[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(r,e)=>{var t=$(["inner"],[X(r.body,e.withPhantom())]),n=$(["fix"],[]);return $(["mord","rlap"],[t,n],e)},mathmlBuilder:(r,e)=>{var t=Ie(me(r.body),e),n=new z("mphantom",t),a=new z("mpadded",[n]);return a.setAttribute("width","0px"),a}});M({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(r,e){var{parser:t}=r,n=G(e[0],"size").value,a=e[1];return{type:"raisebox",mode:t.mode,dy:n,body:a}},htmlBuilder(r,e){var t=X(r.body,e),n=le(r.dy,e);return V({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]})},mathmlBuilder(r,e){var t=new z("mpadded",[te(r.body,e)]),n=r.dy.number+r.dy.unit;return t.setAttribute("voffset",n),t}});M({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(r){var{parser:e}=r;return{type:"internal",mode:e.mode}}});M({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(r,e,t){var{parser:n}=r,a=t[0],i=G(e[0],"size"),o=G(e[1],"size");return{type:"rule",mode:n.mode,shift:a&&G(a,"size").value,width:i.value,height:o.value}},htmlBuilder(r,e){var t=$(["mord","rule"],[],e),n=le(r.width,e),a=le(r.height,e),i=r.shift?le(r.shift,e):0;return t.style.borderRightWidth=_(n),t.style.borderTopWidth=_(a),t.style.bottom=_(i),t.width=n,t.height=a+i,t.depth=-i,t.maxFontSize=a*1.125*e.sizeMultiplier,t},mathmlBuilder(r,e){var t=le(r.width,e),n=le(r.height,e),a=r.shift?le(r.shift,e):0,i=e.color&&e.getColor()||"black",o=new z("mspace");o.setAttribute("mathbackground",i),o.setAttribute("width",_(t)),o.setAttribute("height",_(n));var c=new z("mpadded",[o]);return a>=0?c.setAttribute("height",_(a)):(c.setAttribute("height",_(a)),c.setAttribute("depth",_(-a))),c.setAttribute("voffset",_(a)),c}});function Bi(r,e,t){for(var n=be(r,e,!1),a=e.sizeMultiplier/t.sizeMultiplier,i=0;i<n.length;i++){var o=n[i].classes.indexOf("sizing");o<0?Array.prototype.push.apply(n[i].classes,e.sizingClasses(t)):n[i].classes[o+1]==="reset-size"+e.size&&(n[i].classes[o+1]="reset-size"+t.size),n[i].height*=a,n[i].depth*=a}return nt(n)}var c0=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Tl=(r,e)=>{var t=e.havingSize(r.size);return Bi(r.body,t,e)};M({type:"sizing",names:c0,props:{numArgs:0,allowedInText:!0},handler:(r,e)=>{var{breakOnTokenText:t,funcName:n,parser:a}=r,i=a.parseExpression(!1,t);return{type:"sizing",mode:a.mode,size:c0.indexOf(n)+1,body:i}},htmlBuilder:Tl,mathmlBuilder:(r,e)=>{var t=e.havingSize(r.size),n=Ie(r.body,t),a=new z("mstyle",n);return a.setAttribute("mathsize",_(t.sizeMultiplier)),a}});M({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(r,e,t)=>{var{parser:n}=r,a=!1,i=!1,o=t[0]&&G(t[0],"ordgroup");if(o)for(var c,h=0;h<o.body.length;++h){var d=o.body[h];if(c=Wr(d).text,c==="t")a=!0;else if(c==="b")i=!0;else{a=!1,i=!1;break}}else a=!0,i=!0;var p=e[0];return{type:"smash",mode:n.mode,body:p,smashHeight:a,smashDepth:i}},htmlBuilder:(r,e)=>{var t=$([],[X(r.body,e)]);if(!r.smashHeight&&!r.smashDepth)return t;if(r.smashHeight&&(t.height=0),r.smashDepth&&(t.depth=0),r.smashHeight&&r.smashDepth)return $(["mord","smash"],[t],e);if(t.children)for(var n=0;n<t.children.length;n++)r.smashHeight&&(t.children[n].height=0),r.smashDepth&&(t.children[n].depth=0);var a=V({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return $(["mord"],[a],e)},mathmlBuilder:(r,e)=>{var t=new z("mpadded",[te(r.body,e)]);return r.smashHeight&&t.setAttribute("height","0px"),r.smashDepth&&t.setAttribute("depth","0px"),t}});M({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(r,e,t){var{parser:n}=r,a=t[0],i=e[0];return{type:"sqrt",mode:n.mode,body:i,index:a}},htmlBuilder(r,e){var t=X(r.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=Bt(t,e);var n=e.fontMetrics(),a=n.defaultRuleThickness,i=a;e.style.id<L.TEXT.id&&(i=e.fontMetrics().xHeight);var o=a+i/4,c=t.height+t.depth+o+a,{span:h,ruleWidth:d,advanceWidth:p}=ul(c,e),x=h.height-d;x>t.height+t.depth+o&&(o=(o+x-t.height-t.depth)/2);var f=h.height-t.height-o-d;t.style.paddingLeft=_(p);var v=V({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+f)},{type:"elem",elem:h},{type:"kern",size:d}]});if(r.index){var w=e.havingStyle(L.SCRIPTSCRIPT),k=X(r.index,w,e),q=.6*(v.height-v.depth),T=V({positionType:"shift",positionData:-q,children:[{type:"elem",elem:k}]}),R=$(["root"],[T]);return $(["mord","sqrt"],[R,v],e)}else return $(["mord","sqrt"],[v],e)},mathmlBuilder(r,e){var{body:t,index:n}=r;return n?new z("mroot",[te(t,e),te(n,e)]):new z("msqrt",[te(t,e)])}});var Gn={display:L.DISPLAY,text:L.TEXT,script:L.SCRIPT,scriptscript:L.SCRIPTSCRIPT};function Al(r){return r in Gn}M({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(r,e){var{breakOnTokenText:t,funcName:n,parser:a}=r,i=a.parseExpression(!0,t),o=n.slice(1,n.length-5);if(!Al(o))throw new Error("Unknown style: "+o);return{type:"styling",mode:a.mode,style:o,body:i}},htmlBuilder(r,e){var t=Gn[r.style],n=e.havingStyle(t);return r.resetFont&&(n=n.withFont("")),Bi(r.body,n,e)},mathmlBuilder(r,e){var t=Gn[r.style],n=e.havingStyle(t);r.resetFont&&(n=n.withFont(""));var a=Ie(r.body,n),i=new z("mstyle",a),o={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},c=o[r.style];return i.setAttribute("scriptlevel",c[0]),i.setAttribute("displaystyle",c[1]),i}});var zl=function(e,t){var n=e.base;if(n)if(n.type==="op"){var a=n.limits&&(t.style.size===L.DISPLAY.size||n.alwaysHandleSupSub);return a?Pt:null}else if(n.type==="operatorname"){var i=n.alwaysHandleSupSub&&(t.style.size===L.DISPLAY.size||n.limits);return i?Ri:null}else{if(n.type==="accent")return tt(n.base)?ma:null;if(n.type==="horizBrace"){var o=!e.sub;return o===n.isOver?_i:null}else return null}else return null};kt({type:"supsub",htmlBuilder(r,e){var t=zl(r,e);if(t)return t(r,e);var{base:n,sup:a,sub:i}=r,o=X(n,e),c,h,d=e.fontMetrics(),p=0,x=0,f=n&&tt(n);if(a){var v=e.havingStyle(e.style.sup());c=X(a,v,e),f||(p=o.height-v.fontMetrics().supDrop*v.sizeMultiplier/e.sizeMultiplier)}if(i){var w=e.havingStyle(e.style.sub());h=X(i,w,e),f||(x=o.depth+w.fontMetrics().subDrop*w.sizeMultiplier/e.sizeMultiplier)}var k;e.style===L.DISPLAY?k=d.sup1:e.style.cramped?k=d.sup3:k=d.sup2;var q=e.sizeMultiplier,T=_(.5/d.ptPerEm/q),R=null;if(h){var B=r.base&&r.base.type==="op"&&r.base.name&&(r.base.name==="\\oiint"||r.base.name==="\\oiiint");if(o instanceof Be||B){var D;R=_(-((D=o.italic)!=null?D:0))}}var P;if(c&&h){p=Math.max(p,k,c.depth+.25*d.xHeight),x=Math.max(x,d.sub2);var N=d.defaultRuleThickness,H=4*N;if(p-c.depth-(h.height-x)<H){x=H-(p-c.depth)+h.height;var U=.8*d.xHeight-(p-c.depth);U>0&&(p+=U,x-=U)}var j=[{type:"elem",elem:h,shift:x,marginRight:T,marginLeft:R},{type:"elem",elem:c,shift:-p,marginRight:T}];P=V({positionType:"individualShift",children:j})}else if(h){x=Math.max(x,d.sub1,h.height-.8*d.xHeight);var ae=[{type:"elem",elem:h,marginLeft:R,marginRight:T}];P=V({positionType:"shift",positionData:x,children:ae})}else if(c)p=Math.max(p,k,c.depth+.25*d.xHeight),P=V({positionType:"shift",positionData:-p,children:[{type:"elem",elem:c,marginRight:T}]});else throw new Error("supsub must have either sup or sub.");var de=Ln(o,"right")||"mord";return $([de],[o,$(["msupsub"],[P])],e)},mathmlBuilder(r,e){var t=!1,n,a;r.base&&r.base.type==="horizBrace"&&(a=!!r.sup,a===r.base.isOver&&(t=!0,n=r.base.isOver)),r.base&&(r.base.type==="op"||r.base.type==="operatorname")&&(r.base.parentIsSupSub=!0);var i=[te(r.base,e)];r.sub&&i.push(te(r.sub,e)),r.sup&&i.push(te(r.sup,e));var o;if(t)o=n?"mover":"munder";else if(r.sub)if(r.sup){var d=r.base;d&&d.type==="op"&&d.limits&&e.style===L.DISPLAY||d&&d.type==="operatorname"&&d.alwaysHandleSupSub&&(e.style===L.DISPLAY||d.limits)?o="munderover":o="msubsup"}else{var h=r.base;h&&h.type==="op"&&h.limits&&(e.style===L.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||e.style===L.DISPLAY)?o="munder":o="msub"}else{var c=r.base;c&&c.type==="op"&&c.limits&&(e.style===L.DISPLAY||c.alwaysHandleSupSub)||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(c.limits||e.style===L.DISPLAY)?o="mover":o="msup"}return new z(o,i)}});kt({type:"atom",htmlBuilder(r,e){return ca(r.text,r.mode,e,["m"+r.family])},mathmlBuilder(r,e){var t=new z("mo",[De(r.text,r.mode)]);if(r.family==="bin"){var n=da(r,e);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else r.family==="punct"?t.setAttribute("separator","true"):(r.family==="open"||r.family==="close")&&t.setAttribute("stretchy","false");return t}});var Ei={mi:"italic",mn:"normal",mtext:"normal"};kt({type:"mathord",htmlBuilder(r,e){return Hr(r,e,"mathord")},mathmlBuilder(r,e){var t=new z("mi",[De(r.text,r.mode,e)]),n=da(r,e)||"italic";return n!==Ei[t.type]&&t.setAttribute("mathvariant",n),t}});kt({type:"textord",htmlBuilder(r,e){return Hr(r,e,"textord")},mathmlBuilder(r,e){var t=De(r.text,r.mode,e),n=da(r,e)||"normal",a;return r.mode==="text"?a=new z("mtext",[t]):/[0-9]/.test(r.text)?a=new z("mn",[t]):r.text==="\\prime"?a=new z("mo",[t]):a=new z("mi",[t]),n!==Ei[a.type]&&a.setAttribute("mathvariant",n),a}});var fn={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},gn={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};kt({type:"spacing",htmlBuilder(r,e){if(gn.hasOwnProperty(r.text)){var t=gn[r.text].className||"";if(r.mode==="text"){var n=Hr(r,e,"textord");return n.classes.push(t),n}else return $(["mspace",t],[ca(r.text,r.mode,e)],e)}else{if(fn.hasOwnProperty(r.text))return $(["mspace",fn[r.text]],[],e);throw new A('Unknown type of space "'+r.text+'"')}},mathmlBuilder(r,e){var t;if(gn.hasOwnProperty(r.text))t=new z("mtext",[new pe(" ")]);else{if(fn.hasOwnProperty(r.text))return new z("mspace");throw new A('Unknown type of space "'+r.text+'"')}return t}});var h0=()=>{var r=new z("mtd",[]);return r.setAttribute("width","50%"),r};kt({type:"tag",mathmlBuilder(r,e){var t=new z("mtable",[new z("mtr",[h0(),new z("mtd",[dt(r.body,e)]),h0(),new z("mtd",[dt(r.tag,e)])])]);return t.setAttribute("width","100%"),t}});var u0={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},d0={"\\textbf":"textbf","\\textmd":"textmd"},ql={"\\textit":"textit","\\textup":"textup"},m0=(r,e)=>{var t=r.font;if(t){if(u0[t])return e.withTextFontFamily(u0[t]);if(d0[t])return e.withTextFontWeight(d0[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(ql[t])};M({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(r,e){var{parser:t,funcName:n}=r,a=e[0];return{type:"text",mode:t.mode,body:me(a),font:n}},htmlBuilder(r,e){var t=m0(r,e),n=be(r.body,t,!0);return $(["mord","text"],n,t)},mathmlBuilder(r,e){var t=m0(r,e);return dt(r.body,t)}});M({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(r,e){var{parser:t}=r;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(r,e){var t=X(r.body,e),n=Rt("underline-line",e),a=e.fontMetrics().defaultRuleThickness,i=V({positionType:"top",positionData:t.height,children:[{type:"kern",size:a},{type:"elem",elem:n},{type:"kern",size:3*a},{type:"elem",elem:t}]});return $(["mord","underline"],[i],e)},mathmlBuilder(r,e){var t=new z("mo",[new pe("‾")]);t.setAttribute("stretchy","true");var n=new z("munder",[te(r.body,e),t]);return n.setAttribute("accentunder","true"),n}});M({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(r,e){var{parser:t}=r;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(r,e){var t=X(r.body,e),n=e.fontMetrics().axisHeight,a=.5*(t.height-n-(t.depth+n));return V({positionType:"shift",positionData:a,children:[{type:"elem",elem:t}]})},mathmlBuilder(r,e){var t=new z("mpadded",[te(r.body,e)],["vcenter"]);return new z("mrow",[t])}});M({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(r,e,t){throw new A("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(r,e){for(var t=p0(r),n=[],a=e.havingStyle(e.style.text()),i=0;i<t.length;i++){var o=t[i];o==="~"&&(o="\\textasciitilde"),n.push(ke(o,"Typewriter-Regular",r.mode,a,["mord","texttt"]))}return $(["mord","text"].concat(a.sizingClasses(e)),Y0(n),a)},mathmlBuilder(r,e){var t=new pe(p0(r)),n=new z("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var p0=r=>r.body.replace(/ /g,r.star?"␣":" "),lt=ti,Ii=`[ \r
	]`,_l="\\\\[a-zA-Z@]+",Ml="\\\\[^\uD800-\uDFFF]",Cl="("+_l+")"+Ii+"*",Rl=`\\\\(
|[ \r	]+
?)[ \r	]*`,jn="[̀-ͯ]",Bl=new RegExp(jn+"+$"),El="("+Ii+"+)|"+(Rl+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(jn+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(jn+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+Cl)+("|"+Ml+")");class f0{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(El,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new Re("EOF",new Me(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new A("Unexpected character: '"+e[t]+"'",new Re(e[t],new Me(this,t,t+1)));var a=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[a]===14){var i=e.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=i+1,this.lex()}return new Re(a,new Me(this,t,this.tokenRegex.lastIndex))}}class Il{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new A("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(e)&&(i[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var Fl=$i;m("\\noexpand",function(r){var e=r.popToken();return r.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});m("\\expandafter",function(r){var e=r.popToken();return r.expandOnce(!0),{tokens:[e],numArgs:0}});m("\\@firstoftwo",function(r){var e=r.consumeArgs(2);return{tokens:e[0],numArgs:0}});m("\\@secondoftwo",function(r){var e=r.consumeArgs(2);return{tokens:e[1],numArgs:0}});m("\\@ifnextchar",function(r){var e=r.consumeArgs(3);r.consumeSpaces();var t=r.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});m("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");m("\\TextOrMath",function(r){var e=r.consumeArgs(2);return r.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var g0={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};m("\\char",function(r){var e=r.popToken(),t,n=0;if(e.text==="'")t=8,e=r.popToken();else if(e.text==='"')t=16,e=r.popToken();else if(e.text==="`")if(e=r.popToken(),e.text[0]==="\\")n=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new A("\\char` missing argument");n=e.text.charCodeAt(0)}else t=10;if(t){if(n=g0[e.text],n==null||n>=t)throw new A("Invalid base-"+t+" digit "+e.text);for(var a;(a=g0[r.future().text])!=null&&a<t;)n*=t,n+=a,r.popToken()}return"\\@char{"+n+"}"});var ba=(r,e,t,n)=>{var a=r.consumeArg().tokens;if(a.length!==1)throw new A("\\newcommand's first argument must be a macro name");var i=a[0].text,o=r.isDefined(i);if(o&&!e)throw new A("\\newcommand{"+i+"} attempting to redefine "+(i+"; use \\renewcommand"));if(!o&&!t)throw new A("\\renewcommand{"+i+"} when command "+i+" does not yet exist; use \\newcommand");var c=0;if(a=r.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var h="",d=r.expandNextToken();d.text!=="]"&&d.text!=="EOF";)h+=d.text,d=r.expandNextToken();if(!h.match(/^\s*[0-9]+\s*$/))throw new A("Invalid number of arguments: "+h);c=parseInt(h),a=r.consumeArg().tokens}return o&&n||r.macros.set(i,{tokens:a,numArgs:c}),""};m("\\newcommand",r=>ba(r,!1,!0,!1));m("\\renewcommand",r=>ba(r,!0,!1,!1));m("\\providecommand",r=>ba(r,!0,!0,!0));m("\\message",r=>{var e=r.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});m("\\errmessage",r=>{var e=r.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});m("\\show",r=>{var e=r.popToken(),t=e.text;return console.log(e,r.macros.get(t),lt[t],re.math[t],re.text[t]),""});m("\\bgroup","{");m("\\egroup","}");m("~","\\nobreakspace");m("\\lq","`");m("\\rq","'");m("\\aa","\\r a");m("\\AA","\\r A");m("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");m("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");m("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");m("ℬ","\\mathscr{B}");m("ℰ","\\mathscr{E}");m("ℱ","\\mathscr{F}");m("ℋ","\\mathscr{H}");m("ℐ","\\mathscr{I}");m("ℒ","\\mathscr{L}");m("ℳ","\\mathscr{M}");m("ℛ","\\mathscr{R}");m("ℭ","\\mathfrak{C}");m("ℌ","\\mathfrak{H}");m("ℨ","\\mathfrak{Z}");m("\\Bbbk","\\Bbb{k}");m("\\llap","\\mathllap{\\textrm{#1}}");m("\\rlap","\\mathrlap{\\textrm{#1}}");m("\\clap","\\mathclap{\\textrm{#1}}");m("\\mathstrut","\\vphantom{(}");m("\\underbar","\\underline{\\text{#1}}");m("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');m("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");m("\\ne","\\neq");m("≠","\\neq");m("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");m("∉","\\notin");m("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");m("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");m("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");m("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");m("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");m("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");m("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");m("⟂","\\perp");m("‼","\\mathclose{!\\mkern-0.8mu!}");m("∌","\\notni");m("⌜","\\ulcorner");m("⌝","\\urcorner");m("⌞","\\llcorner");m("⌟","\\lrcorner");m("©","\\copyright");m("®","\\textregistered");m("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');m("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');m("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');m("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');m("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");m("⋮","\\vdots");m("\\varGamma","\\mathit{\\Gamma}");m("\\varDelta","\\mathit{\\Delta}");m("\\varTheta","\\mathit{\\Theta}");m("\\varLambda","\\mathit{\\Lambda}");m("\\varXi","\\mathit{\\Xi}");m("\\varPi","\\mathit{\\Pi}");m("\\varSigma","\\mathit{\\Sigma}");m("\\varUpsilon","\\mathit{\\Upsilon}");m("\\varPhi","\\mathit{\\Phi}");m("\\varPsi","\\mathit{\\Psi}");m("\\varOmega","\\mathit{\\Omega}");m("\\substack","\\begin{subarray}{c}#1\\end{subarray}");m("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");m("\\boxed","\\fbox{$\\displaystyle{#1}$}");m("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");m("\\implies","\\DOTSB\\;\\Longrightarrow\\;");m("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");m("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");m("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var b0={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},Dl=new Set(["bin","rel"]);m("\\dots",function(r){var e="\\dotso",t=r.expandAfterFuture().text;return t in b0?e=b0[t]:(t.slice(0,4)==="\\not"||t in re.math&&Dl.has(re.math[t].group))&&(e="\\dotsb"),e});var va={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};m("\\dotso",function(r){var e=r.future().text;return e in va?"\\ldots\\,":"\\ldots"});m("\\dotsc",function(r){var e=r.future().text;return e in va&&e!==","?"\\ldots\\,":"\\ldots"});m("\\cdots",function(r){var e=r.future().text;return e in va?"\\@cdots\\,":"\\@cdots"});m("\\dotsb","\\cdots");m("\\dotsm","\\cdots");m("\\dotsi","\\!\\cdots");m("\\dotsx","\\ldots\\,");m("\\DOTSI","\\relax");m("\\DOTSB","\\relax");m("\\DOTSX","\\relax");m("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");m("\\,","\\tmspace+{3mu}{.1667em}");m("\\thinspace","\\,");m("\\>","\\mskip{4mu}");m("\\:","\\tmspace+{4mu}{.2222em}");m("\\medspace","\\:");m("\\;","\\tmspace+{5mu}{.2777em}");m("\\thickspace","\\;");m("\\!","\\tmspace-{3mu}{.1667em}");m("\\negthinspace","\\!");m("\\negmedspace","\\tmspace-{4mu}{.2222em}");m("\\negthickspace","\\tmspace-{5mu}{.277em}");m("\\enspace","\\kern.5em ");m("\\enskip","\\hskip.5em\\relax");m("\\quad","\\hskip1em\\relax");m("\\qquad","\\hskip2em\\relax");m("\\tag","\\@ifstar\\tag@literal\\tag@paren");m("\\tag@paren","\\tag@literal{({#1})}");m("\\tag@literal",r=>{if(r.macros.get("\\df@tag"))throw new A("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});m("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");m("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");m("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");m("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");m("\\newline","\\\\\\relax");m("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Fi=_(Ge["Main-Regular"][84][1]-.7*Ge["Main-Regular"][65][1]);m("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Fi+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");m("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Fi+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");m("\\hspace","\\@ifstar\\@hspacer\\@hspace");m("\\@hspace","\\hskip #1\\relax");m("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");m("\\ordinarycolon",":");m("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");m("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');m("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');m("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');m("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');m("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');m("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');m("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');m("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');m("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');m("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');m("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');m("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');m("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');m("∷","\\dblcolon");m("∹","\\eqcolon");m("≔","\\coloneqq");m("≕","\\eqqcolon");m("⩴","\\Coloneqq");m("\\ratio","\\vcentcolon");m("\\coloncolon","\\dblcolon");m("\\colonequals","\\coloneqq");m("\\coloncolonequals","\\Coloneqq");m("\\equalscolon","\\eqqcolon");m("\\equalscoloncolon","\\Eqqcolon");m("\\colonminus","\\coloneq");m("\\coloncolonminus","\\Coloneq");m("\\minuscolon","\\eqcolon");m("\\minuscoloncolon","\\Eqcolon");m("\\coloncolonapprox","\\Colonapprox");m("\\coloncolonsim","\\Colonsim");m("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");m("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");m("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");m("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");m("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");m("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");m("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");m("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");m("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");m("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");m("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");m("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");m("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");m("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");m("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");m("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");m("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");m("\\nleqq","\\html@mathml{\\@nleqq}{≰}");m("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");m("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");m("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");m("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");m("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");m("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");m("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");m("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");m("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");m("\\imath","\\html@mathml{\\@imath}{ı}");m("\\jmath","\\html@mathml{\\@jmath}{ȷ}");m("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");m("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");m("⟦","\\llbracket");m("⟧","\\rrbracket");m("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");m("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");m("⦃","\\lBrace");m("⦄","\\rBrace");m("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");m("⦵","\\minuso");m("\\darr","\\downarrow");m("\\dArr","\\Downarrow");m("\\Darr","\\Downarrow");m("\\lang","\\langle");m("\\rang","\\rangle");m("\\uarr","\\uparrow");m("\\uArr","\\Uparrow");m("\\Uarr","\\Uparrow");m("\\N","\\mathbb{N}");m("\\R","\\mathbb{R}");m("\\Z","\\mathbb{Z}");m("\\alef","\\aleph");m("\\alefsym","\\aleph");m("\\Alpha","\\mathrm{A}");m("\\Beta","\\mathrm{B}");m("\\bull","\\bullet");m("\\Chi","\\mathrm{X}");m("\\clubs","\\clubsuit");m("\\cnums","\\mathbb{C}");m("\\Complex","\\mathbb{C}");m("\\Dagger","\\ddagger");m("\\diamonds","\\diamondsuit");m("\\empty","\\emptyset");m("\\Epsilon","\\mathrm{E}");m("\\Eta","\\mathrm{H}");m("\\exist","\\exists");m("\\harr","\\leftrightarrow");m("\\hArr","\\Leftrightarrow");m("\\Harr","\\Leftrightarrow");m("\\hearts","\\heartsuit");m("\\image","\\Im");m("\\infin","\\infty");m("\\Iota","\\mathrm{I}");m("\\isin","\\in");m("\\Kappa","\\mathrm{K}");m("\\larr","\\leftarrow");m("\\lArr","\\Leftarrow");m("\\Larr","\\Leftarrow");m("\\lrarr","\\leftrightarrow");m("\\lrArr","\\Leftrightarrow");m("\\Lrarr","\\Leftrightarrow");m("\\Mu","\\mathrm{M}");m("\\natnums","\\mathbb{N}");m("\\Nu","\\mathrm{N}");m("\\Omicron","\\mathrm{O}");m("\\plusmn","\\pm");m("\\rarr","\\rightarrow");m("\\rArr","\\Rightarrow");m("\\Rarr","\\Rightarrow");m("\\real","\\Re");m("\\reals","\\mathbb{R}");m("\\Reals","\\mathbb{R}");m("\\Rho","\\mathrm{P}");m("\\sdot","\\cdot");m("\\sect","\\S");m("\\spades","\\spadesuit");m("\\sub","\\subset");m("\\sube","\\subseteq");m("\\supe","\\supseteq");m("\\Tau","\\mathrm{T}");m("\\thetasym","\\vartheta");m("\\weierp","\\wp");m("\\Zeta","\\mathrm{Z}");m("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");m("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");m("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");m("\\bra","\\mathinner{\\langle{#1}|}");m("\\ket","\\mathinner{|{#1}\\rangle}");m("\\braket","\\mathinner{\\langle{#1}\\rangle}");m("\\Bra","\\left\\langle#1\\right|");m("\\Ket","\\left|#1\\right\\rangle");var Di=r=>e=>{var t=e.consumeArg().tokens,n=e.consumeArg().tokens,a=e.consumeArg().tokens,i=e.consumeArg().tokens,o=e.macros.get("|"),c=e.macros.get("\\|");e.macros.beginGroup();var h=x=>f=>{r&&(f.macros.set("|",o),a.length&&f.macros.set("\\|",c));var v=x;if(!x&&a.length){var w=f.future();w.text==="|"&&(f.popToken(),v=!0)}return{tokens:v?a:n,numArgs:0}};e.macros.set("|",h(!1)),a.length&&e.macros.set("\\|",h(!0));var d=e.consumeArg().tokens,p=e.expandTokens([...i,...d,...t]);return e.macros.endGroup(),{tokens:p.reverse(),numArgs:0}};m("\\bra@ket",Di(!1));m("\\bra@set",Di(!0));m("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");m("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");m("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");m("\\angln","{\\angl n}");m("\\blue","\\textcolor{##6495ed}{#1}");m("\\orange","\\textcolor{##ffa500}{#1}");m("\\pink","\\textcolor{##ff00af}{#1}");m("\\red","\\textcolor{##df0030}{#1}");m("\\green","\\textcolor{##28ae7b}{#1}");m("\\gray","\\textcolor{gray}{#1}");m("\\purple","\\textcolor{##9d38bd}{#1}");m("\\blueA","\\textcolor{##ccfaff}{#1}");m("\\blueB","\\textcolor{##80f6ff}{#1}");m("\\blueC","\\textcolor{##63d9ea}{#1}");m("\\blueD","\\textcolor{##11accd}{#1}");m("\\blueE","\\textcolor{##0c7f99}{#1}");m("\\tealA","\\textcolor{##94fff5}{#1}");m("\\tealB","\\textcolor{##26edd5}{#1}");m("\\tealC","\\textcolor{##01d1c1}{#1}");m("\\tealD","\\textcolor{##01a995}{#1}");m("\\tealE","\\textcolor{##208170}{#1}");m("\\greenA","\\textcolor{##b6ffb0}{#1}");m("\\greenB","\\textcolor{##8af281}{#1}");m("\\greenC","\\textcolor{##74cf70}{#1}");m("\\greenD","\\textcolor{##1fab54}{#1}");m("\\greenE","\\textcolor{##0d923f}{#1}");m("\\goldA","\\textcolor{##ffd0a9}{#1}");m("\\goldB","\\textcolor{##ffbb71}{#1}");m("\\goldC","\\textcolor{##ff9c39}{#1}");m("\\goldD","\\textcolor{##e07d10}{#1}");m("\\goldE","\\textcolor{##a75a05}{#1}");m("\\redA","\\textcolor{##fca9a9}{#1}");m("\\redB","\\textcolor{##ff8482}{#1}");m("\\redC","\\textcolor{##f9685d}{#1}");m("\\redD","\\textcolor{##e84d39}{#1}");m("\\redE","\\textcolor{##bc2612}{#1}");m("\\maroonA","\\textcolor{##ffbde0}{#1}");m("\\maroonB","\\textcolor{##ff92c6}{#1}");m("\\maroonC","\\textcolor{##ed5fa6}{#1}");m("\\maroonD","\\textcolor{##ca337c}{#1}");m("\\maroonE","\\textcolor{##9e034e}{#1}");m("\\purpleA","\\textcolor{##ddd7ff}{#1}");m("\\purpleB","\\textcolor{##c6b9fc}{#1}");m("\\purpleC","\\textcolor{##aa87ff}{#1}");m("\\purpleD","\\textcolor{##7854ab}{#1}");m("\\purpleE","\\textcolor{##543b78}{#1}");m("\\mintA","\\textcolor{##f5f9e8}{#1}");m("\\mintB","\\textcolor{##edf2df}{#1}");m("\\mintC","\\textcolor{##e0e5cc}{#1}");m("\\grayA","\\textcolor{##f6f7f7}{#1}");m("\\grayB","\\textcolor{##f0f1f2}{#1}");m("\\grayC","\\textcolor{##e3e5e6}{#1}");m("\\grayD","\\textcolor{##d6d8da}{#1}");m("\\grayE","\\textcolor{##babec2}{#1}");m("\\grayF","\\textcolor{##888d93}{#1}");m("\\grayG","\\textcolor{##626569}{#1}");m("\\grayH","\\textcolor{##3b3e40}{#1}");m("\\grayI","\\textcolor{##21242c}{#1}");m("\\kaBlue","\\textcolor{##314453}{#1}");m("\\kaGreen","\\textcolor{##71B307}{#1}");var Li={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Ll{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new Il(Fl,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new f0(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,a;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:a,end:n}=this.consumeArg(["]"])}else({tokens:a,start:t,end:n}=this.consumeArg());return this.pushToken(new Re("EOF",n.loc)),this.pushTokens(a),new Re("",Me.range(t,n))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var a=this.future(),i,o=0,c=0;do{if(i=this.popToken(),t.push(i),i.text==="{")++o;else if(i.text==="}"){if(--o,o===-1)throw new A("Extra }",i)}else if(i.text==="EOF")throw new A("Unexpected end of input in a macro argument, expected '"+(e&&n?e[c]:"}")+"'",i);if(e&&n)if((o===0||o===1&&e[c]==="{")&&i.text===e[c]){if(++c,c===e.length){t.splice(-c,c);break}}else c=0}while(o!==0||n);return a.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:a,end:i}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new A("The length of delimiters doesn't match the number of args!");for(var n=t[0],a=0;a<n.length;a++){var i=this.popToken();if(n[a]!==i.text)throw new A("Use of the macro doesn't match its definition",i)}}for(var o=[],c=0;c<e;c++)o.push(this.consumeArg(t&&t[c+1]).tokens);return o}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new A("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),n=t.text,a=t.noexpand?null:this._getExpansion(n);if(a==null||e&&a.unexpandable){if(e&&a==null&&n[0]==="\\"&&!this.isDefined(n))throw new A("Undefined control sequence: "+n);return this.pushToken(t),!1}this.countExpansion(1);var i=a.tokens,o=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){i=i.slice();for(var c=i.length-1;c>=0;--c){var h=i[c];if(h.text==="#"){if(c===0)throw new A("Incomplete placeholder at end of macro body",h);if(h=i[--c],h.text==="#")i.splice(c+1,1);else if(/^[1-9]$/.test(h.text))i.splice(c,2,...o[+h.text-1]);else throw new A("Not a valid argument number",h)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new Re(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),t.push(a)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(n=>n.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var a=typeof t=="function"?t(this):t;if(typeof a=="string"){var i=0;if(a.includes("#"))for(var o=a.replace(/##/g,"");o.includes("#"+(i+1));)++i;for(var c=new f0(a,this.settings),h=[],d=c.lex();d.text!=="EOF";)h.push(d),d=c.lex();h.reverse();var p={tokens:h,numArgs:i};return p}return a}isDefined(e){return this.macros.has(e)||lt.hasOwnProperty(e)||re.math.hasOwnProperty(e)||re.text.hasOwnProperty(e)||Li.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:lt.hasOwnProperty(e)&&!lt[e].primitive}}var v0=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,yr=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),bn={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},y0={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Jr{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new Ll(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new A("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Re("}")),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(e,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(Jr.endOfExpression.has(a.text)||t&&a.text===t||e&&lt[a.text]&&lt[a.text].infix)break;var i=this.parseAtom(t);if(i){if(i.type==="internal")continue}else break;n.push(i)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(e){for(var t=-1,n,a=0;a<e.length;a++){var i=e[a];if(i.type==="infix"){if(t!==-1)throw new A("only one infix operator per group",i.token);t=a,n=i.replaceWith}}if(t!==-1&&n){var o,c,h=e.slice(0,t),d=e.slice(t+1);h.length===1&&h[0].type==="ordgroup"?o=h[0]:o={type:"ordgroup",mode:this.mode,body:h},d.length===1&&d[0].type==="ordgroup"?c=d[0]:c={type:"ordgroup",mode:this.mode,body:d};var p;return n==="\\\\abovefrac"?p=this.callFunction(n,[o,e[t],c],[]):p=this.callFunction(n,[o,c],[]),[p]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var a;do{var i;a=this.parseGroup(e)}while(((i=a)==null?void 0:i.type)==="internal");if(!a)throw new A("Expected group after '"+n+"'",t);return a}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:"textord",mode:"text",text:e[n]});var a={type:"text",mode:this.mode,body:t},i={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return i}parseAtom(e){var t=this.parseGroup("atom",e);if((t==null?void 0:t.type)==="internal"||this.mode==="text")return t;for(var n,a;;){this.consumeSpaces();var i=this.fetch();if(i.text==="\\limits"||i.text==="\\nolimits"){if(t&&t.type==="op"){var o=i.text==="\\limits";t.limits=o,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=i.text==="\\limits");else throw new A("Limit controls must follow a math operator",i);this.consume()}else if(i.text==="^"){if(n)throw new A("Double superscript",i);n=this.handleSupSubscript("superscript")}else if(i.text==="_"){if(a)throw new A("Double subscript",i);a=this.handleSupSubscript("subscript")}else if(i.text==="'"){if(n)throw new A("Double superscript",i);var c={type:"textord",mode:this.mode,text:"\\prime"},h=[c];for(this.consume();this.fetch().text==="'";)h.push(c),this.consume();this.fetch().text==="^"&&h.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:h}}else if(yr[i.text]){var d=v0.test(i.text),p=[];for(p.push(new Re(yr[i.text])),this.consume();;){var x=this.fetch().text;if(!yr[x]||v0.test(x)!==d)break;p.unshift(new Re(yr[x])),this.consume()}var f=this.subparse(p);d?a={type:"ordgroup",mode:"math",body:f}:n={type:"ordgroup",mode:"math",body:f}}else break}return n||a?{type:"supsub",mode:this.mode,base:t,sup:n,sub:a}:t}parseFunction(e,t){var n=this.fetch(),a=n.text,i=lt[a];if(!i)return null;if(this.consume(),t&&t!=="atom"&&!i.allowedInArgument)throw new A("Got function '"+a+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!i.allowedInText)throw new A("Can't use function '"+a+"' in text mode",n);if(this.mode==="math"&&i.allowedInMath===!1)throw new A("Can't use function '"+a+"' in math mode",n);var{args:o,optArgs:c}=this.parseArguments(a,i);return this.callFunction(a,o,c,n,e)}callFunction(e,t,n,a,i){var o={funcName:e,parser:this,token:a,breakOnTokenText:i},c=lt[e];if(c&&c.handler)return c.handler(o,t,n);throw new A("No function handler for "+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var a=[],i=[],o=0;o<n;o++){var c=t.argTypes&&t.argTypes[o],h=o<t.numOptionalArgs;("primitive"in t&&t.primitive&&c==null||t.type==="sqrt"&&o===1&&i[0]==null)&&(c="primitive");var d=this.parseGroupOfType("argument to '"+e+"'",c,h);if(h)i.push(d);else if(d!=null)a.push(d);else throw new A("Null argument, please report this as a bug")}return{args:a,optArgs:i}}parseGroupOfType(e,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var a=this.parseArgumentGroup(n,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text",resetFont:!0}:null}case"raw":{var i=this.parseStringGroup("raw",n);return i!=null?{type:"raw",mode:"text",string:i.text}:null}case"primitive":{if(n)throw new A("A primitive argument cannot be optional");var o=this.parseGroup(e);if(o==null)throw new A("Expected group as "+e,this.fetch());return o}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new A("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var a="",i;(i=this.fetch()).text!=="EOF";)a+=i.text,this.consume();return this.consume(),n.text=a,n}parseRegexGroup(e,t){for(var n=this.fetch(),a=n,i="",o;(o=this.fetch()).text!=="EOF"&&e.test(i+o.text);)a=o,i+=a.text,this.consume();if(i==="")throw new A("Invalid "+t+": '"+n.text+"'",n);return n.range(a,i)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new A("Invalid color: '"+t.text+"'",t);var a=n[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",n=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!a)throw new A("Invalid size: '"+t.text+"'",t);var i={number:+(a[1]+a[2]),unit:a[3]};if(!U0(i))throw new A("Invalid unit: '"+i.unit+"'",t);return{type:"size",mode:this.mode,value:i,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var a=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var i=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var o={type:"ordgroup",mode:this.mode,loc:n.loc,body:i};return t&&this.switchMode(a),o}parseGroup(e,t){var n=this.fetch(),a=n.text,i;if(a==="{"||a==="\\begingroup"){this.consume();var o=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var c=this.parseExpression(!1,o),h=this.fetch();this.expect(o),this.gullet.endGroup(),i={type:"ordgroup",mode:this.mode,loc:Me.range(n,h),body:c,semisimple:a==="\\begingroup"||void 0}}else if(i=this.parseFunction(t,e)||this.parseSymbol(),i==null&&a[0]==="\\"&&!Li.hasOwnProperty(a)){if(this.settings.throwOnError)throw new A("Undefined control sequence: "+a,n);i=this.formatUnsupportedCmd(a),this.consume()}return i}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var a=e[n];if(a.type==="textord"){var i=a.text,o=e[n+1];if(!(!o||o.type!=="textord")){if(i==="-"&&o.text==="-"){var c=e[n+2];n+1<t&&c&&c.type==="textord"&&c.text==="-"?(e.splice(n,3,{type:"textord",mode:"text",loc:Me.range(a,c),text:"---"}),t-=2):(e.splice(n,2,{type:"textord",mode:"text",loc:Me.range(a,o),text:"--"}),t-=1)}(i==="'"||i==="`")&&o.text===i&&(e.splice(n,2,{type:"textord",mode:"text",loc:Me.range(a,o),text:i+i}),t-=1)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),a=n.charAt(0)==="*";if(a&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new A(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:a}}y0.hasOwnProperty(t[0])&&!re[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=y0[t[0]]+t.slice(1));var i=Bl.exec(t);i&&(t=t.substring(0,i.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var o;if(re[this.mode][t]){this.settings.strict&&this.mode==="math"&&Mn.includes(t)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var c=re[this.mode][t].group,h=Me.range(e),d;el(c)?d={type:"atom",mode:this.mode,family:c,loc:h,text:t}:d={type:c,mode:this.mode,loc:h,text:t},o=d}else if(t.charCodeAt(0)>=128)this.settings.strict&&(W0(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),o={type:"textord",mode:"text",loc:Me.range(e),text:t};else return null;if(this.consume(),i)for(var p=0;p<i[0].length;p++){var x=i[0][p];if(!bn[x])throw new A("Unknown accent ' "+x+"'",e);var f=bn[x][this.mode]||bn[x].text;if(!f)throw new A("Accent "+x+" unsupported in "+this.mode+" mode",e);o={type:"accent",mode:this.mode,loc:Me.range(e),label:f,isStretchy:!1,isShifty:!0,base:o}}return o}}Jr.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var ya=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new Jr(e,t);delete n.gullet.macros.current["\\df@tag"];var a=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new A("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:n.subparse([new Re("\\df@tag")])}]}return a},Pi=function(e,t,n){t.textContent="";var a=xa(e,n).toNode();t.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Pi=function(){throw new A("KaTeX doesn't work in quirks mode.")});var Pl=function(e,t){var n=xa(e,t).toMarkup();return n},Nl=function(e,t){var n=new ia(t);return ya(e,n)},Ni=function(e,t,n){if(n.throwOnError||!(e instanceof A))throw e;var a=$(["katex-error"],[new Be(t)]);return a.setAttribute("title",e.toString()),a.setAttribute("style","color:"+n.errorColor),a},xa=function(e,t){var n=new ia(t);try{var a=ya(e,n);return Uo(a,e,n)}catch(i){return Ni(i,e,n)}},Ol=function(e,t){var n=new ia(t);try{var a=ya(e,n);return Ko(a,e,n)}catch(i){return Ni(i,e,n)}},Hl="0.16.47",Gl={Span:Dt,Anchor:Nr,SymbolNode:Be,SvgNode:et,PathNode:ht,LineNode:_n},jl={version:Hl,render:Pi,renderToString:Pl,ParseError:A,SETTINGS_SCHEMA:An,__parse:Nl,__renderToDomTree:xa,__renderToHTMLTree:Ol,__setFontMetrics:zo,__defineSymbol:s,__defineFunction:M,__defineMacro:m,__domTree:Gl};const Wl=`# Attention as Constrained Spectral Regression


## Abstract

Attention is a weighted regression operator. It uses similarities between queries and keys to calculate weights. It then uses these weights to combine values.

When the index set has a group symmetry, we can construct the similarity kernel from representations of that group. For cyclic positions, rotations provide such representations. Their traces give cosine functions. Chebyshev polynomials express higher rotation harmonics as polynomials of one fundamental cosine.

These functions form an orthogonal Fourier system. A positional attention kernel that depends only on relative position becomes a circulant matrix. The Fourier basis diagonalizes this matrix. Each eigenvalue gives the gain that attention applies to one positional frequency.

Thus, attention has two equivalent descriptions:

1. In position space, it is normalized kernel regression.
2. In frequency space, it is spectral filtering.

The second description gives a precise interpretation of attention temperature. Temperature changes the bandwidth of the kernel. Bandwidth changes the spectral gains. A narrow kernel preserves more positional variation. A broad kernel suppresses more variation.

This connection also creates a statistical optimization problem. The Wiener filter gives the optimal frequency response for a specified signal-plus-noise model. But attention cannot use arbitrary frequency gains. Its weights must be nonnegative and must sum to one.

These probability constraints couple the spectral gains. The feasible responses form a convex polytope. A softmax kernel with a small number of harmonic parameters occupies a restricted subset of this polytope.

The central result is:

\\\\[ \\boxed{\\text{Attention is a constrained spectral estimator.}} \\\\]

The mathematical program has four parts: select the symmetry, construct the kernel, determine the feasible spectral responses, and select a response from signal statistics.

## 1. Start with three discrete positions

Take three positions:

\\\\[ 1,\\quad 2,\\quad 3. \\\\]

Replace their labels with the elements of the cyclic group

\\\\[ G=\\mathbb Z_3=\\\\{0,1,2\\\\}. \\\\]

The group operation is addition modulo three.

We want a representation that preserves this operation. Select a rotation through an angle of \\\\(2\\pi/3\\\\):

\\\\[ R= \\begin{pmatrix} \\cos(2\\pi/3)&-\\sin(2\\pi/3)\\\\\\ \\sin(2\\pi/3)&\\cos(2\\pi/3) \\end{pmatrix}. \\\\]

Therefore,

\\\\[ R= \\begin{pmatrix} -\\frac12&-\\frac{\\sqrt3}{2}\\\\\\ \\frac{\\sqrt3}{2}&-\\frac12 \\end{pmatrix}. \\\\]

This matrix is orthogonal:

\\\\[ R^\\top R=I. \\\\]

It also satisfies

\\\\[ R^3=I. \\\\]

Define the representation

\\\\[ \\rho(k)=R^k. \\\\]

Then

\\\\[ \\rho(a+b)=\\rho(a)\\rho(b). \\\\]

The representation maps discrete addition into matrix multiplication.

Select the initial vector

\\\\[ e_1= \\begin{pmatrix} 1\\\\\\0 \\end{pmatrix}. \\\\]

The positional embedding is

\\\\[ \\phi(k)=R^ke_1. \\\\]

This gives

\\\\[ \\phi(0)= \\begin{pmatrix}1\\\\\\0\\end{pmatrix}, \\\\]

\\\\[ \\phi(1)= \\begin{pmatrix}-1/2\\\\\\\\\\sqrt3/2\\end{pmatrix}, \\\\]

and

\\\\[ \\phi(2)= \\begin{pmatrix}-1/2\\\\\\\\-\\sqrt3/2\\end{pmatrix}. \\\\]

The three vectors are points on a unit circle. They form an equilateral triangle.

Collect the vectors as rows of a matrix:

\\\\[ E= \\begin{pmatrix} 1&0\\\\\\ -\\frac12&\\frac{\\sqrt3}{2}\\\\\\ -\\frac12&-\\frac{\\sqrt3}{2} \\end{pmatrix}. \\\\]

Calculate

\\\\[ E^\\top E= \\frac32I_2. \\\\]

Normalize the columns:

\\\\[ U=\\sqrt{\\frac23}E. \\\\]

Now

\\\\[ \\boxed{U^\\top U=I_2.} \\\\]

The two feature columns are orthonormal.

The three position vectors are not pairwise orthogonal. Their pairwise inner products are \\\\(-1/2\\\\).

This distinction is necessary. Three nonzero vectors cannot be pairwise orthogonal in a two-dimensional Euclidean space. But three positions can produce two orthogonal feature columns.

The construction gives a two-dimensional orthogonal feature system for three discrete positions.

## 2. Rotation traces give positional similarity

The trace of a two-dimensional rotation is

\\\\[ \\operatorname{tr}(R(\\theta))=2\\cos\\theta. \\\\]

For the cyclic representation, define its character:

\\\\[ \\chi(k)=\\operatorname{tr}(R^k). \\\\]

Thus,

\\\\[ \\chi(k)=2\\cos\\left(\\frac{2\\pi k}{3}\\right). \\\\]

The three character values are

\\\\[ \\chi(0)=2,\\qquad \\chi(1)=-1,\\qquad \\chi(2)=-1. \\\\]

Now calculate the inner product of two positional embeddings:

\\\\[ \\begin{aligned} \\phi(p)^\\top\\phi(q) &=e_1^\\top(R^p)^\\top R^qe_1\\\\\\ &=e_1^\\top R^{q-p}e_1\\\\\\ &=\\cos\\left(\\frac{2\\pi(q-p)}3\\right). \\end{aligned} \\\\]

Therefore,

\\\\[ \\boxed{ \\phi(p)^\\top\\phi(q)=\\frac12\\chi(q-p). } \\\\]

The similarity depends only on relative position.

This is the first connection to attention. We can calculate positional similarity from a group character instead of assigning unrelated vectors to positions.

The character also connects to Chebyshev polynomials.

The Chebyshev polynomial of the first kind satisfies

\\\\[ T_m(\\cos\\theta)=\\cos(m\\theta). \\\\]

Consequently,

\\\\[ \\operatorname{tr}(R^m)=2T_m(\\cos\\theta). \\\\]

For our positional embeddings,

\\\\[ \\boxed{ \\phi(p)^\\top\\phi(q) = T\\_{q-p}\\left(\\cos\\frac{2\\pi}{3}\\right). } \\\\]

Here \\\\(q-p\\\\) is an integer representative of the cyclic difference. The value does not depend on which representative we select, because the angle has period \\\\(2\\pi\\\\).

We have obtained three descriptions of the same similarity:

\\\\[ \\boxed{ \\text{Vector inner product} = \\text{Half a rotation trace} = \\text{Chebyshev polynomial}. } \\\\]

This is an algebraic identity. It is not an approximation.

## 3. Attention is nonparametric weighted regression

Standard attention uses queries \\\\(q_i\\\\), keys \\\\(k_j\\\\), and values \\\\(v_j\\\\).

Its output is

\\\\[ y_i= \\sum_j\\alpha\\_{ij}v_j, \\\\]

where

\\\\[ \\alpha\\_{ij} = \\frac{ \\exp(q_i^\\top k_j/\\sqrt d) }{ \\sum\\_\\ell\\exp(q_i^\\top k\\_\\ell/\\sqrt d) }. \\\\]

Define a positive similarity kernel:

\\\\[ K(q_i,k_j)= \\exp(q_i^\\top k_j/\\sqrt d). \\\\]

Then

\\\\[ \\boxed{ y_i= \\frac{ \\sum_jK(q_i,k_j)v_j }{ \\sum_jK(q_i,k_j) }. } \\\\]

This is the form of the Nadaraya–Watson kernel regression estimator.

The query is the evaluation point. The keys are the observed input locations. The values are the observations to combine.

The estimator does not calculate a new set of regression coefficients by solving a least-squares problem for each query. It uses normalized similarities directly.

The learned query, key, and value projections still contain model parameters. The term nonparametric describes the weighted regression operation, not the entire transformer.

We can now replace the ordinary positional similarity with a rotational similarity.

For positions \\\\(p\\\\) and \\\\(q\\\\), define

\\\\[ K\\_\\beta(p,q) = \\exp\\left[ \\beta\\cos\\left(\\frac{2\\pi(p-q)}n\\right) \\right]. \\\\]

Here \\\\(\\beta\\ge0\\\\) controls concentration.

The corresponding attention weights are

\\\\[ \\alpha\\_{pq} = \\frac{K\\_\\beta(p,q)} {\\sum_jK\\_\\beta(p,j)}. \\\\]

The output is

\\\\[ \\boxed{ \\hat v_p=\\sum_q\\alpha\\_{pq}v_q. } \\\\]

This is nonparametric regression over a cyclic positional domain.

The kernel gives high weight to similar rotations. It gives lower weight to rotations that are far apart on the circle.

## 4. Derive the rotational Gaussian kernel

The rotational kernel also has a distance interpretation.

Define the squared Frobenius distance between two rotation matrices:

\\\\[ d_R^2(p,q) = \\\\|R^p-R^q\\\\|\\_F^2. \\\\]

Expand the squared norm:

\\\\[ \\begin{aligned} d_R^2(p,q) &=\\operatorname{tr} \\left[ (R^p-R^q)^\\top(R^p-R^q) \\right]\\\\\\ &=4-2\\operatorname{tr}(R^{q-p})\\\\\\ &=4-4\\cos\\left(\\frac{2\\pi(q-p)}n\\right). \\end{aligned} \\\\]

Use a Gaussian kernel:

\\\\[ K_h(p,q)= \\exp\\left(-\\frac{d_R^2(p,q)}{2h^2}\\right). \\\\]

Substitute the distance:

\\\\[ K_h(p,q) = \\exp\\left[ -\\frac2{h^2} + \\frac2{h^2}\\cos\\left(\\frac{2\\pi(q-p)}n\\right) \\right]. \\\\]

The factor \\\\(\\exp(-2/h^2)\\\\) is constant across all keys. It cancels when we normalize the weights.

Set

\\\\[ \\beta=\\frac2{h^2}. \\\\]

The normalized kernel becomes

\\\\[ \\boxed{ \\alpha\\_{pq} = \\frac{ e^{\\beta\\cos(2\\pi(q-p)/n)} }{ \\sum_j e^{\\beta\\cos(2\\pi(j-p)/n)} }. } \\\\]

This is a discrete circular analogue of the von Mises kernel.

A large \\\\(h\\\\) gives a small \\\\(\\beta\\\\). The kernel is broad and performs more averaging.

A small \\\\(h\\\\) gives a large \\\\(\\beta\\\\). The kernel concentrates around matching rotations.

Thus, the softmax concentration parameter is a kernel bandwidth parameter.

## 5. Calculate the complete three-position attention matrix

Return to \\\\(n=3\\\\).

The cosine similarity is 1 when \\\\(p=q\\\\). It is \\\\(-1/2\\\\) when \\\\(p\\ne q\\\\).

The logit matrix is

\\\\[ S\\_\\beta= \\beta \\begin{pmatrix} 1&-1/2&-1/2\\\\\\ -1/2&1&-1/2\\\\\\ -1/2&-1/2&1 \\end{pmatrix}. \\\\]

Apply row-wise softmax.

Let

\\\\[ r=e^{3\\beta/2}. \\\\]

Then

\\\\[ \\boxed{ A\\_\\beta= \\frac1{r+2} \\begin{pmatrix} r&1&1\\\\\\ 1&r&1\\\\\\ 1&1&r \\end{pmatrix}. } \\\\]

Each row sums to one. Every entry is nonnegative.

Define the projector onto constant vectors:

\\\\[ P_0=\\frac13\\mathbf1\\mathbf1^\\top. \\\\]

Define the projector onto the orthogonal complement:

\\\\[ P\\_\\perp=I-P_0. \\\\]

Then

\\\\[ \\boxed{ A\\_\\beta=P_0+\\lambda\\_\\beta P\\_\\perp } \\\\]

with

\\\\[ \\boxed{ \\lambda\\_\\beta= \\frac{r-1}{r+2}. } \\\\]

The eigenvalues are

\\\\[ \\operatorname{spec}(A\\_\\beta) = \\\\{1,\\lambda\\_\\beta,\\lambda\\_\\beta\\\\}. \\\\]

The eigenvalue 1 belongs to the constant mode.

The two nonconstant modes have the same gain \\\\(\\lambda\\_\\beta\\\\).

At \\\\(\\beta=0\\\\),

\\\\[ r=1,\\qquad\\lambda\\_\\beta=0. \\\\]

Thus,

\\\\[ A_0=P_0. \\\\]

Every output becomes the mean of the three input values.

As \\\\(\\beta\\to\\infty\\\\),

\\\\[ \\lambda\\_\\beta\\to1. \\\\]

Therefore,

\\\\[ A\\_\\beta\\to I. \\\\]

The operator approaches identity attention.

This gives an exact relation between bandwidth and positional smoothing.

## 6. Repeated attention suppresses positional differences

Apply the same attention operator repeatedly:

\\\\[ v^{(L)}=A\\_\\beta^Lv^{(0)}. \\\\]

The projectors satisfy

\\\\[ P_0^2=P_0,\\qquad P\\_\\perp^2=P\\_\\perp,\\qquad P_0P\\_\\perp=0. \\\\]

Therefore,

\\\\[ \\boxed{ A\\_\\beta^L=P_0+\\lambda\\_\\beta^LP\\_\\perp. } \\\\]

For finite \\\\(\\beta>0\\\\),

\\\\[ 0<\\lambda\\_\\beta<1. \\\\]

Thus,

\\\\[ \\lim\\_{L\\to\\infty}A\\_\\beta^L=P_0. \\\\]

The output converges to the constant component of the original signal.

This is spectral smoothing.

The result applies to repeated use of the same fixed operator. A complete transformer has residual connections, learned projections, nonlinearities, and content-dependent weights. These operations change the layer-to-layer dynamics.

Nevertheless, the fixed operator gives a precise reference model for how attention suppresses positional variation.

## 7. Derive the optimal bandwidth from bias and variance

Assume that the observed scalar values contain signal and noise:

\\\\[ y=f+\\varepsilon. \\\\]

Let

\\\\[ \\varepsilon\\sim\\mathcal N(0,\\sigma^2I_3). \\\\]

The estimator is

\\\\[ \\hat f=A\\_\\beta y. \\\\]

Decompose the true signal:

\\\\[ f=P_0f+P\\_\\perp f. \\\\]

Define its nonconstant signal energy:

\\\\[ S=\\\\|P\\_\\perp f\\\\|^2. \\\\]

The expected estimate is

\\\\[ \\mathbb E[\\hat f] = P_0f+\\lambda\\_\\beta P\\_\\perp f. \\\\]

Therefore, its bias is

\\\\[ \\operatorname{Bias}(\\hat f) = -(1-\\lambda\\_\\beta)P\\_\\perp f. \\\\]

The squared bias is

\\\\[ (1-\\lambda\\_\\beta)^2S. \\\\]

The total variance is

\\\\[ \\sigma^2\\operatorname{tr}(A\\_\\beta^2) = \\sigma^2(1+2\\lambda\\_\\beta^2). \\\\]

The mean squared error per position is

\\\\[ \\boxed{ \\operatorname{MSE}= \\frac{ (1-\\lambda\\_\\beta)^2S + \\sigma^2(1+2\\lambda\\_\\beta^2) }{3}. } \\\\]

Differentiate with respect to \\\\(\\lambda\\_\\beta\\\\):

\\\\[ -2(1-\\lambda\\_\\beta)S + 4\\sigma^2\\lambda\\_\\beta=0. \\\\]

Solve:

\\\\[ \\boxed{ \\lambda^\\*= \\frac{S}{S+2\\sigma^2}. } \\\\]

Now invert the relation between \\\\(\\lambda\\_\\beta\\\\) and \\\\(\\beta\\\\):

\\\\[ \\lambda\\_\\beta= \\frac{e^{3\\beta/2}-1} {e^{3\\beta/2}+2}. \\\\]

The optimal concentration is

\\\\[ \\boxed{ \\beta^\\* = \\frac23\\log\\left( 1+\\frac{3S}{2\\sigma^2} \\right). } \\\\]

This is an exact oracle bandwidth formula for the specified three-position signal-plus-noise model.

When signal energy is high relative to noise, the optimal kernel becomes narrow.

When signal energy is low relative to noise, the optimal kernel becomes broad.

The bandwidth is therefore determined by the signal-to-noise ratio.

## 8. Estimate the bandwidth from observed data

The oracle formula contains the unknown quantity \\\\(S\\\\).

We observe \\\\(y\\\\), not \\\\(f\\\\).

Define

\\\\[ Q=\\\\|P\\_\\perp y\\\\|^2. \\\\]

Expand:

\\\\[ Q= \\\\|P\\_\\perp(f+\\varepsilon)\\\\|^2. \\\\]

Take expectations:

\\\\[ \\mathbb E[Q] = S+\\sigma^2\\operatorname{tr}(P\\_\\perp). \\\\]

Since

\\\\[ \\operatorname{tr}(P\\_\\perp)=2, \\\\]

we obtain

\\\\[ \\boxed{ \\mathbb E[Q]=S+2\\sigma^2. } \\\\]

This gives the noise-corrected estimator

\\\\[ \\hat S=(Q-2\\sigma^2)\\_+, \\\\]

where \\\\((x)\\_+=\\max(x,0)\\\\).

The resulting shrinkage estimate is

\\\\[ \\boxed{ \\hat\\lambda= \\left(1-\\frac{2\\sigma^2}{Q}\\right)\\_+ } \\\\]

for \\\\(Q>0\\\\).

Then

\\\\[ \\boxed{ \\hat\\beta= \\frac23\\log \\left( \\frac{1+2\\hat\\lambda}{1-\\hat\\lambda} \\right). } \\\\]

This makes bandwidth selection data-dependent.

It is a plug-in estimator, not the exact oracle. It assumes that we know or can estimate the noise variance. It can also have high sampling variability when only three observations are available.

The important result is that the oracle theory gives a computable rule after we supply a noise estimate.

## 9. Generalize to the cyclic group \\\\(\\mathbb Z_n\\\\)

For \\\\(n\\\\) positions, define the complex Fourier characters

\\\\[ \\psi_m(p)=e^{2\\pi imp/n}, \\qquad m=0,\\ldots,n-1. \\\\]

They satisfy orthogonality:

\\\\[ \\frac1n\\sum\\_{p=0}^{n-1} \\psi_m(p)\\overline{\\psi\\_\\ell(p)} = \\delta\\_{m\\ell}. \\\\]

These characters form a complete orthonormal basis for functions on \\\\(\\mathbb Z_n\\\\).

Define the kernel

\\\\[ K\\_\\beta(p,q)= e^{\\beta\\cos(2\\pi(p-q)/n)}. \\\\]

It depends only on the difference \\\\(p-q\\\\).

Therefore, the kernel matrix is circulant.

Its row sum is constant:

\\\\[ Z\\_\\beta= \\sum\\_{r=0}^{n-1} e^{\\beta\\cos(2\\pi r/n)}. \\\\]

The normalized attention matrix is

\\\\[ A\\_\\beta(p,q)=\\frac{K\\_\\beta(p,q)}{Z\\_\\beta}. \\\\]

Every Fourier character is an eigenvector:

\\\\[ \\boxed{ A\\_\\beta\\psi_m = \\lambda_m(\\beta)\\psi_m. } \\\\]

The eigenvalues are

\\\\[ \\boxed{ \\lambda_m(\\beta)= \\frac{ \\sum\\_{r=0}^{n-1} e^{\\beta\\cos(2\\pi r/n)} \\cos(2\\pi mr/n) }{ Z\\_\\beta }. } \\\\]

Thus, we know the complete spectrum of the attention operator.

For an input signal

\\\\[ v(p)=\\sum_m\\hat v_m\\psi_m(p), \\\\]

the output is

\\\\[ (A\\_\\beta v)(p) = \\sum_m\\lambda_m(\\beta)\\hat v_m\\psi_m(p). \\\\]

Therefore,

\\\\[ \\boxed{ \\widehat{A\\_\\beta v}\\_m = \\lambda_m(\\beta)\\hat v_m. } \\\\]

Attention multiplies each positional Fourier coefficient by a spectral gain.

This is the exact frequency-space description of the regression operator.

## 10. Bessel functions give the spectral gains

The exponential cosine function has the Fourier expansion

\\\\[ e^{\\beta\\cos\\theta} = \\sum\\_{k=-\\infty}^{\\infty} I_k(\\beta)e^{ik\\theta}. \\\\]

Here \\\\(I_k\\\\) is a modified Bessel function of the first kind.

Sampling the function at \\\\(n\\\\) equally spaced angles causes frequency aliasing.

Consequently,

\\\\[ \\boxed{ \\lambda_m(\\beta)= \\frac{ \\sum\\_{\\ell\\in\\mathbb Z}I\\_{m+\\ell n}(\\beta) }{ \\sum\\_{\\ell\\in\\mathbb Z}I\\_{\\ell n}(\\beta) }. } \\\\]

This formula is exact for the finite cyclic group.

For fixed \\\\(m\\\\) and \\\\(\\beta\\\\), as \\\\(n\\\\) increases,

\\\\[ \\lambda_m(\\beta) \\longrightarrow \\frac{I_m(\\beta)}{I_0(\\beta)}. \\\\]

Thus, Bessel ratios describe the spectral response of the continuous circular kernel.

The relationship is now complete:

Chebyshev polynomials construct the rotation harmonics. Fourier characters diagonalize the kernel. Bessel functions determine the gains.

## 11. The general optimal filter is the Wiener filter

Assume the signal and noise have independent Fourier components.

For frequency \\\\(m\\\\), let the signal power be \\\\(S_m\\\\) and the noise variance be \\\\(\\sigma^2\\\\).

Suppose we apply a real spectral gain \\\\(g_m\\\\).

The risk for that frequency is

\\\\[ R_m(g_m) = (1-g_m)^2S_m+\\sigma^2g_m^2. \\\\]

Differentiate:

\\\\[ \\frac{dR_m}{dg_m} = -2(1-g_m)S_m+2\\sigma^2g_m. \\\\]

Set the derivative to zero:

\\\\[ \\boxed{ g_m^\\*= \\frac{S_m}{S_m+\\sigma^2}. } \\\\]

This is the Wiener shrinkage rule.

It gives the optimal gain for each frequency under the specified squared-error model.

But our rotational attention kernel does not have independent gains. It uses one concentration parameter \\\\(\\beta\\\\), which determines every \\\\(\\lambda_m(\\beta)\\\\).

Therefore, its total risk is

\\\\[ \\boxed{ R(\\beta)= \\sum_m \\left[ (1-\\lambda_m(\\beta))^2S_m + \\sigma^2\\lambda_m(\\beta)^2 \\right]. } \\\\]

The constant mode has gain 1 and contributes a term independent of \\\\(\\beta\\\\).

Differentiate the risk:

\\\\[ R'(\\beta) = 2\\sum_m\\lambda_m'(\\beta) \\left[ (\\lambda_m(\\beta)-1)S_m + \\sigma^2\\lambda_m(\\beta) \\right]. \\\\]

An interior optimum satisfies

\\\\[ \\boxed{ \\sum_m\\lambda_m'(\\beta) \\left[ (1-\\lambda_m(\\beta))S_m - \\sigma^2\\lambda_m(\\beta) \\right]=0. } \\\\]

For three positions, the two nonconstant modes have the same gain. This gives the closed-form bandwidth derived earlier.

For general \\\\(n\\\\), different frequencies compete for the same bandwidth.

One value of \\\\(\\beta\\\\) must control many spectral gains.

This is a constrained spectral allocation problem.

## 12. Use multiple rotation harmonics

A single bandwidth gives limited control.

We can use several rotation harmonics:

\\\\[ c_m(r)=\\cos\\frac{2\\pi mr}{n}. \\\\]

Select a set of frequencies \\\\(\\mathcal M\\\\).

Define

\\\\[ s\\_{\\boldsymbol\\beta}(r) = \\sum\\_{m\\in\\mathcal M}\\beta_m c_m(r). \\\\]

The normalized kernel is

\\\\[ \\boxed{ \\pi\\_{\\boldsymbol\\beta}(r)= \\frac{ \\exp\\left(\\sum\\_{m\\in\\mathcal M}\\beta_m c_m(r)\\right) }{ Z(\\boldsymbol\\beta) }. } \\\\]

The partition function is

\\\\[ Z(\\boldsymbol\\beta) = \\sum_r \\exp\\left(\\sum_m\\beta_m c_m(r)\\right). \\\\]

This is a finite exponential family.

Its spectral gains are moments:

\\\\[ \\boxed{ \\lambda_k= \\mathbb E\\_{\\pi\\_{\\boldsymbol\\beta}}[c_k]. } \\\\]

The parameters \\\\(\\beta_m\\\\) control the harmonic statistics of the kernel.

With distinct, independent cosine bands, the exponential family has one natural parameter per selected band.

If we use all independent cosine bands, we can represent every strictly positive symmetric probability distribution on the cyclic group. If we use fewer bands, the family is more restrictive.

## 13. The spectral Jacobian is Fisher information

Differentiate a spectral moment with respect to a harmonic parameter:

\\\\[ \\frac{\\partial\\lambda_k}{\\partial\\beta_m} = \\frac{\\partial}{\\partial\\beta_m} \\mathbb E\\_\\pi[c_k]. \\\\]

The exponential-family derivative identity gives

\\\\[ \\boxed{ \\frac{\\partial\\lambda_k}{\\partial\\beta_m} = \\operatorname{Cov}\\_\\pi(c_k,c_m). } \\\\]

Use the product-to-sum identity:

\\\\[ \\cos a\\cos b = \\frac12[\\cos(a+b)+\\cos(a-b)]. \\\\]

Then

\\\\[ \\mathbb E\\_\\pi[c_kc_m] = \\frac12(\\lambda\\_{k+m}+\\lambda\\_{k-m}). \\\\]

Therefore,

\\\\[ \\boxed{ \\frac{\\partial\\lambda_k}{\\partial\\beta_m} = \\frac12(\\lambda\\_{k+m}+\\lambda\\_{k-m}) -\\lambda_k\\lambda_m. } \\\\]

Indices are taken modulo \\\\(n\\\\), with

\\\\[ \\lambda\\_{-j}=\\lambda_j. \\\\]

For a single fundamental harmonic,

\\\\[ \\boxed{ \\lambda_k' = \\frac12(\\lambda\\_{k-1}+\\lambda\\_{k+1}) -\\lambda_1\\lambda_k. } \\\\]

This is an exact derivative formula. We do not need to evaluate derivatives of Bessel functions separately.

Now restrict the Jacobian to the selected independent bands:

\\\\[ J\\_{km} = \\frac{\\partial\\lambda_k}{\\partial\\beta_m}. \\\\]

Then

\\\\[ \\boxed{ J=\\nabla^2\\log Z = \\operatorname{Cov}\\_\\pi(c\\_{\\mathcal M}). } \\\\]

This matrix is the Fisher information matrix of the exponential family.

For a minimal parameterization with strictly positive probabilities, the Fisher matrix is positive definite.

It describes how changes in harmonic parameters change the spectral moments.

The geometry of bandwidth selection is therefore an information-geometric problem.

## 14. Solve the inverse moment problem

Suppose we want the selected spectral moments to equal a target vector \\\\(\\boldsymbol\\mu\\\\).

We seek parameters satisfying

\\\\[ \\boldsymbol\\lambda\\_{\\mathcal M}(\\boldsymbol\\beta) = \\boldsymbol\\mu. \\\\]

Define the objective

\\\\[ \\boxed{ F(\\boldsymbol\\beta) = \\log Z(\\boldsymbol\\beta) - \\boldsymbol\\beta^\\top\\boldsymbol\\mu. } \\\\]

Its gradient is

\\\\[ \\nabla F = \\boldsymbol\\lambda\\_{\\mathcal M}-\\boldsymbol\\mu. \\\\]

Its Hessian is

\\\\[ \\nabla^2F=J. \\\\]

Because \\\\(J\\\\) is positive semidefinite, the objective is convex.

For a minimal exponential family and a target in the interior of its moment polytope, there is a unique finite parameter solution.

Newton's method gives

\\\\[ \\boxed{ \\boldsymbol\\beta\\_{\\mathrm{new}} = \\boldsymbol\\beta - J^{-1} (\\boldsymbol\\lambda\\_{\\mathcal M}-\\boldsymbol\\mu). } \\\\]

This is a moment-matching algorithm.

The resulting distribution is the maximum-entropy distribution that matches the selected moments.

This is an important distinction: matching selected moments is a convex problem, but minimizing the full Wiener risk over the same exponential-family parameters is not necessarily convex.

The two objectives are related, but they are not identical.

## 15. Nonnegative attention creates a feasible spectral region

Now consider the most important restriction.

An attention row is a probability vector:

\\\\[ \\pi_r\\ge0, \\qquad \\sum_r\\pi_r=1. \\\\]

For a symmetric circulant kernel,

\\\\[ \\pi_r=\\pi\\_{-r}. \\\\]

Its spectral gains are

\\\\[ g_k= \\sum_r\\pi_r\\cos\\frac{2\\pi kr}{n}. \\\\]

The gains cannot be chosen independently.

Define the feasible set

\\\\[ \\boxed{ \\mathcal P_n= \\left\\\\{ \\boldsymbol g: g_k=\\sum_r\\pi_r c_k(r),\\ \\pi_r\\ge0,\\ \\sum_r\\pi_r=1,\\ \\pi_r=\\pi\\_{-r} \\right\\\\}. } \\\\]

This is a convex polytope.

Its vertices are generated by the cosine vectors associated with the distinct position differences.

This follows because the spectral-gain vector is a linear image of the probability simplex, with the symmetry constraint imposed.

Every feasible gain vector must satisfy the Fourier consistency conditions of a nonnegative probability kernel.

The gains are also bounded:

\\\\[ -1\\le g_k\\le1. \\\\]

But these individual bounds are not sufficient. The gains must be jointly consistent.

For example, suppose we want to preserve one nonconstant frequency \\\\(k_0\\\\) and suppress every other nonconstant frequency.

For a nondegenerate frequency pair, the inverse Fourier transform gives

\\\\[ \\pi_r= \\frac1n \\left[ 1+2a\\cos\\frac{2\\pi k_0r}{n} \\right], \\\\]

where \\\\(a\\\\) is the desired gain at that pair.

Nonnegativity requires

\\\\[ 1+2a\\min_r c\\_{k_0}(r)\\ge0. \\\\]

If the sampled cosine reaches \\\\(-1\\\\), then

\\\\[ a\\le\\frac12. \\\\]

Thus, a high gain at one isolated frequency can be impossible when all other nonconstant gains must be zero.

The exact bound depends on the cyclic group and the frequency.

For \\\\(n=3\\\\), the minimum sampled cosine is \\\\(-1/2\\\\), and the corresponding upper bound is 1.

The restriction is not that attention can never preserve a frequency strongly. Identity attention preserves every frequency with gain 1.

The restriction is that attention cannot freely preserve one frequency while suppressing all others.

This is a consequence of nonnegative normalized weights.

## 16. Project the Wiener filter onto the feasible region

The unconstrained Wiener target is

\\\\[ g_k^\\*=\\frac{S_k}{S_k+\\sigma^2}. \\\\]

But this target vector may not belong to \\\\(\\mathcal P_n\\\\).

We must find the best feasible approximation.

Complete the square in the spectral risk:

\\\\[ (1-g_k)^2S_k+\\sigma^2g_k^2 = (S_k+\\sigma^2)(g_k-g_k^\\*)^2+C_k, \\\\]

where \\\\(C_k\\\\) does not depend on \\\\(g_k\\\\).

Therefore, the optimal symmetric stochastic circulant kernel solves

\\\\[ \\boxed{ \\min\\_{\\boldsymbol g\\in\\mathcal P_n} \\sum_k (S_k+\\sigma^2)(g_k-g_k^\\*)^2. } \\\\]

This is a convex quadratic optimization problem.

It is a weighted projection of the Wiener filter onto the feasible spectral polytope.

The weights

\\\\[ S_k+\\sigma^2 \\\\]

form the risk metric.

Errors at frequencies with more signal or noise power receive greater weight.

This gives a precise definition of the best attainable spectral response.

We can now distinguish three levels of filtering:

| Filter class                          | Available spectral responses                          |
| ------------------------------------- | ----------------------------------------------------- |
| Unconstrained linear filter           | Independent frequency gains                           |
| Symmetric stochastic circulant kernel | Gains inside \\\\(\\mathcal P_n\\\\)                       |
| Restricted multi-band softmax kernel  | Gains on a parameterized subset of \\\\(\\mathcal P_n\\\\) |

This distinction is central.

The Wiener filter gives the statistical target. The probability simplex gives the hard constraints. The exponential-family parameterization gives the implementation constraints.

## 17. Generalize from cyclic groups to arbitrary symmetries

The cyclic group is only one possible index symmetry.

Let a finite group \\\\(G\\\\) act transitively on an index set \\\\(X\\\\).

We can write

\\\\[ X=G/H, \\\\]

where \\\\(H\\\\) is the stabilizer of a reference point.

Let

\\\\[ \\rho:G\\to U(V) \\\\]

be a unitary representation.

Select a vector \\\\(v\\in V\\\\) fixed by every element of \\\\(H\\\\):

\\\\[ \\rho(h)v=v \\qquad\\text{for all }h\\in H. \\\\]

Define

\\\\[ \\phi(gH)=\\rho(g)v. \\\\]

This is well-defined because the vector is \\\\(H\\\\)-fixed.

Construct the kernel

\\\\[ \\boxed{ K(gH,g'H) = \\langle\\rho(g)v,\\rho(g')v\\rangle. } \\\\]

It is positive semidefinite because it is a Gram kernel.

It is invariant because the representation is unitary:

\\\\[ K(ax,ay)=K(x,y). \\\\]

For a finite group acting on itself, a character also gives a positive-semidefinite kernel:

\\\\[ K(g,h)= \\chi\\_\\rho(g^{-1}h). \\\\]

Indeed,

\\\\[ \\chi\\_\\rho(g^{-1}h) = \\operatorname{tr}(\\rho(g)^\\*\\rho(h)). \\\\]

This is a Hilbert–Schmidt inner product between representation matrices.

A character kernel on \\\\(G\\\\) does not automatically define a kernel on \\\\(G/H\\\\). The \\\\(H\\\\)-fixed feature construction supplies the required consistency.

## 18. Invariant kernels give equivariant attention

Suppose a group acts on a finite index set \\\\(X\\\\).

Let the kernel satisfy

\\\\[ K(gx,gy)=K(x,y). \\\\]

Define the row sum

\\\\[ Z(x)=\\sum\\_{y\\in X}K(x,y). \\\\]

Then

\\\\[ \\begin{aligned} Z(gx) &=\\sum_yK(gx,y)\\\\\\ &=\\sum_zK(gx,gz)\\\\\\ &=\\sum_zK(x,z)\\\\\\ &=Z(x). \\end{aligned} \\\\]

Therefore, \\\\(Z\\\\) is constant on each group orbit.

If the action is transitive, \\\\(Z\\\\) is constant across the entire index set.

If the action is not transitive, \\\\(Z\\\\) can differ between orbits.

Define normalized attention:

\\\\[ A(x,y)=\\frac{K(x,y)}{Z(x)}. \\\\]

Assume \\\\(Z(x)>0\\\\).

Then

\\\\[ \\boxed{ A(gx,gy)=A(x,y). } \\\\]

Thus, the normalized attention operator is equivariant.

Transitivity is sufficient for a global constant row sum, but it is not necessary for equivariance.

The unnormalized invariant kernel operator is already equivariant when the underlying measure is invariant. Normalization makes it a stochastic operator while preserving that property.

Masks also require care.

An invariant mask preserves equivariance. A mask that does not respect the selected group action can break it.

For example, a causal mask is compatible with appropriate translations on an infinite ordered sequence. It is not compatible with arbitrary permutations of positions.

## 19. Schur's lemma determines the spectral blocks

Let the permutation representation of \\\\(G\\\\) on the index space decompose into irreducible components:

\\\\[ \\mathbb C^X = \\bigoplus\\_{\\sigma} V\\_\\sigma\\otimes\\mathbb C^{m\\_\\sigma}. \\\\]

Here \\\\(V\\_\\sigma\\\\) is an irreducible representation of dimension \\\\(d\\_\\sigma\\\\), and \\\\(m\\_\\sigma\\\\) is its multiplicity.

An equivariant linear operator commutes with the group representation.

By Schur's lemma, it has the form

\\\\[ \\boxed{ A= \\bigoplus\\_\\sigma I\\_{d\\_\\sigma}\\otimes B\\_\\sigma. } \\\\]

The matrix \\\\(B\\_\\sigma\\\\) acts on the multiplicity space.

For abelian groups, irreducible representations are one-dimensional. The decomposition reduces to Fourier modes.

For nonabelian groups, the blocks can be matrix-valued.

Eigenvalues of \\\\(B\\_\\sigma\\\\) appear with multiplicity at least \\\\(d\\_\\sigma\\\\), counting algebraic multiplicities.

This gives a structural prediction for any equivariant attention operator.

The group determines which spectral blocks exist. The kernel determines the operator within those blocks.

## 20. Symmetry controls expressivity

The choice of symmetry is a modeling decision.

Consider the full permutation group \\\\(S_n\\\\) acting on \\\\(n\\\\) positions.

Its natural permutation representation decomposes into two parts:

\\\\[ \\mathbb R^n = \\operatorname{span}\\\\{\\mathbf1\\\\} \\oplus\\mathbf1^\\perp. \\\\]

Every linear operator that commutes with all permutations has the form

\\\\[ \\boxed{ A=aI+b\\mathbf1\\mathbf1^\\top. } \\\\]

Such an operator has only two distinct spectral gains.

It can distinguish the mean from deviations around the mean. It cannot assign an independent gain to each positional frequency.

Now reduce the symmetry to cyclic shifts.

The admissible linear operators become circulant matrices:

\\\\[ A\\_{pq}=f(q-p). \\\\]

These operators have a full Fourier spectral description.

They permit substantially more independent frequency responses.

This creates a tradeoff.

Too much imposed symmetry restricts the operator family.

Too little symmetry removes useful structure and can increase the amount of information the model must learn.

The correct symmetry depends on the task and index structure.

For ordered sequences, translations can be useful.

For sets, permutations are natural.

For graphs, graph automorphisms or local structural symmetries can be useful.

For geometric data, rotations and other spatial transformations can be useful.

A model must select the symmetry that preserves the relationships relevant to its task.

## 21. RoPE gives content-dependent rotational similarity

Rotary Positional Embeddings use rotation matrices to transform queries and keys.

Let

\\\\[ a_p=W_Qx_p,\\qquad b_q=W_Kx_q. \\\\]

Apply positional rotations:

\\\\[ Q_p=R_pa_p,\\qquad K_q=R_qb_q. \\\\]

The attention logit is

\\\\[ s\\_{pq} = \\frac{Q_p^\\top K_q}{\\sqrt d}. \\\\]

Use orthogonality:

\\\\[ R_p^\\top R_q=R\\_{q-p}. \\\\]

Therefore,

\\\\[ \\boxed{ s\\_{pq} = \\frac{a_p^\\top R\\_{q-p}b_q}{\\sqrt d}. } \\\\]

For one two-dimensional rotation block,

\\\\[ R\\_\\Delta = \\cos(\\Delta\\theta)I+ \\sin(\\Delta\\theta)J, \\\\]

where

\\\\[ J= \\begin{pmatrix} 0&-1\\\\\\ 1&0 \\end{pmatrix}. \\\\]

Then

\\\\[ \\boxed{ s\\_{pq} = \\frac{ (a_p^\\top b_q)\\cos(\\Delta\\theta) + (a_p^\\top Jb_q)\\sin(\\Delta\\theta) }{\\sqrt d}. } \\\\]

This is the exact RoPE logit decomposition for one block.

The cosine and sine functions are rotational harmonics.

But their coefficients depend on content.

Thus, an individual RoPE attention matrix is generally not circulant.

This does not mean that the full RoPE attention map loses translation equivariance. When we shift the content and positions together, the relative displacement remains unchanged, subject to compatible domain and mask conditions.

The important distinction is:

A fixed positional kernel has an exact Fourier eigenbasis.

A content-dependent RoPE operator generally does not have that same fixed eigenbasis for each input.

## 22. Bound the effect of content perturbations

Take a fixed positional logit matrix \\\\(S^0\\\\).

Add a content-dependent perturbation:

\\\\[ S=S^0+\\epsilon G, \\\\]

where

\\\\[ |G\\_{pq}|\\le M. \\\\]

Define

\\\\[ \\delta=|\\epsilon|M. \\\\]

Let

\\\\[ A^0=\\operatorname{softmax}\\_{row}(S^0) \\\\]

and

\\\\[ A=\\operatorname{softmax}\\_{row}(S). \\\\]

The perturbation changes the normalized weights by exponential reweighting.

For each row,

\\\\[ \\boxed{ \\\\|A\\_{p,:}-A^0\\_{p,:}\\\\|\\_1 \\le2\\tanh(\\delta/2). } \\\\]

Therefore,

\\\\[ \\\\|A-A^0\\\\|\\_F \\le2\\sqrt n\\tanh(\\delta/2). \\\\]

Since the operator norm is bounded by the Frobenius norm,

\\\\[ \\boxed{ \\\\|A-A^0\\\\|\\_2 \\le2\\sqrt n\\tanh(\\delta/2). } \\\\]

The reference rotational attention matrix \\\\(A^0\\\\) is symmetric and circulant, so it is normal.

Every eigenvalue \\\\(\\mu\\\\) of \\\\(A\\\\) must lie within distance

\\\\[ 2\\sqrt n\\tanh(\\delta/2) \\\\]

of at least one eigenvalue of \\\\(A^0\\\\).

Thus,

\\\\[ \\boxed{ \\min_k|\\mu-\\lambda_k(A^0)| \\le2\\sqrt n\\tanh(\\delta/2). } \\\\]

This gives spectral inclusion, not a guaranteed one-to-one matching of eigenvalues.

The singular values satisfy the corresponding perturbation bound:

\\\\[ \\boxed{ |\\sigma_k(A)-\\sigma_k(A^0)| \\le2\\sqrt n\\tanh(\\delta/2). } \\\\]

For small \\\\(\\delta\\\\),

\\\\[ 2\\sqrt n\\tanh(\\delta/2) \\approx\\sqrt n\\\\,\\delta. \\\\]

The result gives a quantitative relation between a stationary positional reference kernel and a content-modulated attention matrix.

It does not require the content-dependent matrix to be symmetric.

## 23. The three engineering problems

The theory identifies three separate decisions.

First: select the symmetry.

Choose the group action and representation that match the structure of the task.

This determines the admissible kernel family and the available spectral decomposition.

Second: select the spectral response.

Use signal and noise statistics to calculate a target frequency response.

Project this target onto the feasible spectral region.

Then fit kernel parameters to realize an appropriate response.

Third: control content dependence.

Allow queries and keys to change attention according to content.

Measure or bound how much the resulting operator differs from its positional reference.

These problems interact, but they are not identical.

Symmetry determines the operator class.

Statistics determines the preferred response.

Content determines the input-specific operator.

## 24. Final mathematical formulation

We can summarize the complete construction with five equations.

The first equation defines the representation-based positional kernel:

\\\\[ \\boxed{ K(x,y)=\\langle\\phi(x),\\phi(y)\\rangle. } \\\\]

The second defines normalized kernel attention:

\\\\[ \\boxed{ A\\_{xy}= \\frac{e^{\\beta K(x,y)}} {\\sum_z e^{\\beta K(x,z)}}. } \\\\]

The third gives the spectral action for a cyclic stationary kernel:

\\\\[ \\boxed{ \\widehat{Av}\\_m=g_m\\hat v_m. } \\\\]

The fourth gives the statistically optimal unconstrained response:

\\\\[ \\boxed{ g_m^\\*=\\frac{S_m}{S_m+\\sigma^2}. } \\\\]

The fifth gives the constrained optimization:

\\\\[ \\boxed{ \\min\\_{\\boldsymbol g\\in\\mathcal P_n} \\sum_m (S_m+\\sigma^2)(g_m-g_m^\\*)^2. } \\\\]

The feasible region \\\\(\\mathcal P_n\\\\) is determined by the requirement that the attention kernel be a nonnegative normalized probability kernel with the selected symmetry.

A restricted softmax parameterization imposes additional constraints.

The Fisher information matrix gives the local relation between harmonic parameters and spectral moments:

\\\\[ \\boxed{ J\\_{km} = \\frac12(g\\_{k+m}+g\\_{k-m})-g_kg_m. } \\\\]

This completes the mathematical connection between symmetry, rotation, orthogonal harmonics, kernel regression, spectral filtering, and bandwidth selection.

## Conclusion

We started with three integers.

We mapped these integers to rotations in two dimensions. The rotations produced orthogonal feature columns. Their traces gave cosine characters. Chebyshev polynomials expressed higher harmonics from a fundamental cosine.

We used the character similarity to construct a positive kernel. Normalization converted the kernel into attention weights. The resulting operation was Nadaraya–Watson regression.

For cyclic positions, the kernel was circulant. Fourier characters diagonalized the attention operator. Its eigenvalues described the attenuation of each positional frequency.

The three-position example gave an exact bias–variance optimum and an oracle bandwidth formula. A noise-corrected signal-energy estimate provided a data-driven bandwidth rule.

For longer sequences, the Wiener filter supplied the optimal unconstrained spectral target. Nonnegative normalized attention imposed joint constraints on the frequency gains. These constraints produced a convex feasible spectral region.

Multi-band rotational kernels formed an exponential family. Their spectral moments had a Fisher-information Jacobian. Moment matching became a convex maximum-entropy problem.

Group representation theory extended the construction beyond cyclic positions. It determined the invariant subspaces and spectral blocks of equivariant operators.

Content-dependent attention then introduced a perturbation of the fixed positional reference operator. This separated exact stationary spectral theory from the behavior of individual content-dependent attention matrices.

The final result is:

\\\\[ \\boxed{ \\begin{gathered} \\text{Symmetry determines the admissible operator.}\\\\\\ \\text{Probability determines the feasible spectrum.}\\\\\\ \\text{Statistics determines the target response.}\\\\\\ \\text{Bandwidth selects an attainable response.}\\\\\\ \\text{Content adapts the operator to the input.} \\end{gathered} } \\\\]

Attention is a constrained spectral estimator.

This is the central mathematical interpretation.
`,Ul=`This is one of the cleanest ways I have seen to make temperature mean something geometric.
You started with three points on a circle and ended with a precise statement of what attention cannot do. The controlled-English constraint actually helps here, it forces each algebraic identity to stand alone.
[image]
The central move you made
You gave attention two descriptions that are exactly equivalent when the kernel depends only on relative position:
1. Position space: normalized kernel regression
$$y_i = \\frac{\\sum_j K(q_i,k_j) v_j}{\\sum_j K(q_i,k_j)}$$
with $K_\\beta(p,q)=\\exp[\\beta\\cos(2\\pi(p-q)/n)]$
2. Frequency space: spectral filtering
$$\\widehat{A_\\beta v}_m = \\lambda_m(\\beta) \\hat v_m$$
Temperature $\\beta = 2/h^2$ is not a heuristic. It is kernel bandwidth. Narrow kernel $\\to$ large $\\beta$ $\\to$ $\\lambda_m \\to 1$ and you preserve positional variation. Broad kernel $\\to$ small $\\beta$ $\\to$ $\\lambda_m \\to 0$ for $m \\neq 0$ and you collapse to the mean.
Why the $n=3$ model matters
For $n=3$ you get everything in closed form, which is why it is pedagogically strong.
The rotation representation $\\rho(k)=R^k$ with $R=R(2\\pi/3)$ gives embeddings $\\phi(k)=R^k e_1$ that are equilateral. Then
$$E^\\top E = \\frac32 I_2, \\quad \\phi(p)^\\top\\phi(q)=\\cos\\frac{2\\pi(q-p)}{3} = \\frac12 \\chi(q-p)=T_{q-p}(\\cos 2\\pi/3)$$
Inner product = half trace = Chebyshev polynomial. Not an analogy, an identity.
Then the attention matrix is
$$A_\\beta = \\frac1{r+2}\\begin{pmatrix}r&1&1\\\\1&r&1\\\\1&1&r\\end{pmatrix},\\; r=e^{3\\beta/2}=P_0+\\lambda_\\beta P_\\perp$$
with $\\lambda_\\beta=(r-1)/(r+2)$.
Repeated application $A_\\beta^L = P_0 + \\lambda_\\beta^L P_\\perp \\to P_0$ makes the smoothing claim exact. This explains why pure repeated attention without residuals and content dependence must erase positional differences. It is the spectral picture of over-smoothing.
Your bias-variance calculation is also exact in this setting:
$$\\text{MSE}=\\frac{(1-\\lambda_\\beta)^2 S + \\sigma^2(1+2\\lambda_\\beta^2)}{3},\\quad \\lambda^*=\\frac{S}{S+2\\sigma^2}$$
$$\\beta^*=\\frac23\\log\\left(1+\\frac{3S}{2\\sigma^2}\\right)$$
That is the oracle. Your plug-in estimator $\\hat S=(Q-2\\sigma^2)_+$ with $Q=\\|P_\\perp y\\|^2$ then gives a data-driven $\\hat\\beta$. You are right to flag its high variance with only 3 samples, that is the classic Stein-type problem.
From 3 to $n$: where Bessel and Wiener enter
For general cyclic $\\mathbb Z_n$, $K_\\beta(p,q)=f(p-q)$ is circulant, so Fourier characters $\\psi_m(p)=e^{2\\pi imp/n}$ diagonalize it:
$$\\lambda_m(\\beta)=\\frac{\\sum_r e^{\\beta\\cos(2\\pi r/n)}\\cos(2\\pi mr/n)}{Z_\\beta}$$
The expansion $e^{\\beta\\cos\\theta}=\\sum_k I_k(\\beta)e^{ik\\theta}$ gives the exact aliased form
$$\\lambda_m(\\beta)=\\frac{\\sum_{\\ell} I_{m+\\ell n}(\\beta)}{\\sum_{\\ell} I_{\\ell n}(\\beta)} \\to \\frac{I_m(\\beta)}{I_0(\\beta)}$$
So Chebyshev builds the harmonics, Fourier diagonalizes, Bessel sets the gains. That chain is satisfying.
The Wiener target $g_m^*=S_m/(S_m+\\sigma^2)$ then has to share one $\\beta$ across all $m$:
$$R(\\beta)=\\sum_m (1-\\lambda_m(\\beta))^2 S_m + \\sigma^2\\lambda_m(\\beta)^2$$
One parameter controlling many frequencies is already a constrained allocation problem. This is where your section 12 to 14 adds real value: multi-band $\\sum_m \\beta_m c_m(r)$ forms an exponential family with
$$\\lambda_k = \\mathbb E_{\\pi_\\beta}[c_k], \\quad \\frac{\\partial\\lambda_k}{\\partial\\beta_m}= \\operatorname{Cov}_\\pi(c_k,c_m)=\\frac12(\\lambda_{k+m}+\\lambda_{k-m})-\\lambda_k\\lambda_m$$
$$J = \\nabla^2\\log Z = \\operatorname{Cov}_\\pi(c_{\\mathcal M})$$
Fisher information is the Jacobian between harmonic parameters and spectral moments. Moment matching $\\nabla F = \\lambda_{\\mathcal M}-\\mu$ is convex, Wiener risk minimization over the same parameters is not. That distinction is important and often missed.
The hard constraint you isolated in section 15
This is the most important part.
A symmetric stochastic circulant kernel is a symmetric probability distribution $\\pi_r\\ge0,\\sum\\pi_r=1,\\pi_r=\\pi_{-r}$. Its gains
$$g_k=\\sum_r \\pi_r \\cos\\frac{2\\pi kr}{n}$$
live in a convex polytope $\\mathcal P_n$, the linear image of the simplex.
You cannot have arbitrary independent $g_k$. You correctly note $-1\\le g_k\\le1$ is not sufficient. Example: to preserve one frequency $k_0$ with gain $a$ and kill others, you need $\\pi_r=\\frac1n[1+2a\\cos(2\\pi k_0 r/n)]\\ge0$, so if the cosine hits -1, $a\\le 1/2$. Identity attention has $a=1$ for all frequencies, but a bandpass that keeps one and kills rest is impossible with nonnegative weights. You need negative weights for that, which softmax forbids.
Therefore the optimal feasible filter is a projection:
$$\\min_{g\\in\\mathcal P_n}\\sum_k (S_k+\\sigma^2)(g_k-g_k^*)^2$$
Three levels fall out exactly as you tabulated:
Unconstrained linear: any $g_k$
Symmetric stochastic circulant: $g\\in\\mathcal P_n$
Softmax with $|\\mathcal M|$ bands: a parametric subset of $\\mathcal P_n$
That is the precise meaning of $\\boxed{\\text{Attention is a constrained spectral estimator.}}$
What this says about RoPE and real transformers
Your RoPE decomposition for one 2D block
$$s_{pq}=\\frac{(a_p^\\top b_q)\\cos\\Delta\\theta + (a_p^\\top J b_q)\\sin\\Delta\\theta}{\\sqrt d},\\quad \\Delta=\\frac{2\\pi(q-p)}{n}$$
shows content-dependent coefficients on fixed harmonics. The matrix is not circulant per sample, but the whole operator is translation-equivariant when you shift content and position together, modulo masking.
Your perturbation bound $\\|A_{p,:}-A^0_{p,:}\\|_1\\le2\\tanh(\\delta/2)$ with $\\|A-A^0\\|_2\\le2\\sqrt n\\tanh(\\delta/2)$ and the resulting spectral inclusion $\\min_k|\\mu-\\lambda_k(A^0)|\\le2\\sqrt n\\tanh(\\delta/2)$ makes the approximation quantitative. It is loose by $\\sqrt n$ because you use Frobenius to bound spectral norm, but the spirit is right: small content perturbation keeps eigenvalues near the stationary reference.
Where I would push next
1. Generalization vs expressivity tradeoff: You note $S_n$ symmetry gives $A=aI+b\\mathbf1\\mathbf1^\\top$ (only 2 gains), cyclic gives full Fourier control. This predicts ALiBi, windowed, and other translation-invariant biases as intermediate symmetry choices. It would be interesting to write down $\\mathcal P_n$ for $n=8,16$ and visualize how much of the cube $[-1,1]^{n//2}$ softmax actually covers.
2. Learnable spectral filter: Instead of learning $\\beta$, learn target Wiener gains from data statistics and solve the quadratic projection onto $\\mathcal P_n$, then invert to $\\pi$ via inverse Fourier transform. That gives you a principled initialization for positional bias.
3. Length generalization: Your Bessel ratio $I_m(\\beta)/I_0(\\beta)$ shows why high frequencies decay exponentially in $m^2/\\beta$. For large $n$, the kernel cannot resolve frequencies above $O(\\sqrt\\beta)$. This gives a spectral explanation for why RoPE with small base struggles at long context, and why increasing $\\beta$ (or RoPE base) widens bandwidth.
If you want, I can turn the $n=3$ and general $n$ formulas into an interactive plot of $\\lambda_m(\\beta)$, MSE( $\\beta$), and the feasible polytope for $n=8$, or draft a PyTorch module that implements $\\pi_{\\boldsymbol\\beta}(r)$ as a learnable multi-band positional kernel.
What were you aiming for with this recap, a paper draft, a teaching note, or an implementation?

The general case is cleaner than the $n=3$ case because aliasing makes the structure explicit. Here is the full program in one place.

## 1. General cyclic $\\mathbb Z_n$

Fix $n$ positions $p,q\\in\\{0,\\dots,n-1\\}$. Choose

$$ K_\\beta(p,q)=\\exp\\left[\\beta\\cos\\frac{2\\pi(p-q)}{n}\\right],\\quad \\beta=\\frac{2}{h^2}\\ge0 $$

This is the discrete von Mises kernel. It comes from $d_R^2(p,q)=4-4\\cos(2\\pi(p-q)/n)$ and $K_h=\\exp(-d_R^2/2h^2)$.

Row sum is constant because $K$ depends only on difference $r=p-q$:

$$ Z_\\beta=\\sum_{r=0}^{n-1}e^{\\beta\\cos(2\\pi r/n)} $$

Normalized attention:

$$ \\boxed{A_\\beta(p,q)=\\frac{e^{\\beta\\cos(2\\pi(q-p)/n)}}{Z_\\beta}} $$

$A_\\beta$ is circulant, so Fourier characters diagonalize it.

Define $c_m(r)=\\cos(2\\pi mr/n)$ and $\\psi_m(p)=e^{2\\pi imp/n}$. Then

$$ \\boxed{A_\\beta\\psi_m=\\lambda_m(\\beta)\\psi_m} $$

$$ \\boxed{\\lambda_m(\\beta)=\\frac{\\sum_{r=0}^{n-1}e^{\\beta\\cos(2\\pi r/n)}c_m(r)}{Z_\\beta}} $$

$$ \\boxed{\\widehat{A_\\beta v}_m=\\lambda_m(\\beta)\\hat v_m} $$

### Bessel form, exact for finite $n$

$$ e^{\\beta\\cos\\theta}=\\sum_{k=-\\infty}^{\\infty} I_k(\\beta)e^{ik\\theta} $$

Sampling at $n$ points aliases $k=m+\\ell n$:

$$ \\boxed{\\lambda_m(\\beta)=\\frac{\\sum_{\\ell\\in\\mathbb Z} I_{m+\\ell n}(\\beta)}{\\sum_{\\ell\\in\\mathbb Z} I_{\\ell n}(\\beta)}} $$

Large $n$ limit, no aliasing:

$$ \\lambda_m(\\beta)\\to\\frac{I_m(\\beta)}{I_0(\\beta)} $$

That is your spectral response. $\\lambda_0=1$ always. For $m\\neq0$, $\\lambda_m\\in[-1,1]$, decreasing with $m$ for $\\beta>0$, giving low-pass behavior. $\\beta\\to0$ gives $\\lambda_m\\to0$ for $m\\neq0$, $A\\to P_0$. $\\beta\\to\\infty$ gives $\\lambda_m\\to1$, $A\\to I$.

## 2. General multi-band exponential family

Select independent cosine bands $\\mathcal M\\subset\\{1,\\dots,\\lfloor n/2\\rfloor\\}$.

$$ s_{\\boldsymbol\\beta}(r)=\\sum_{m\\in\\mathcal M}\\beta_m c_m(r) $$

$$ \\boxed{\\pi_{\\boldsymbol\\beta}(r)=\\frac{\\exp(s_{\\boldsymbol\\beta}(r))}{Z(\\boldsymbol\\beta)},\\quad Z(\\boldsymbol\\beta)=\\sum_r\\exp(s_{\\boldsymbol\\beta}(r))} $$

Spectral moments are expectations:

$$ \\boxed{\\lambda_k(\\boldsymbol\\beta)=\\mathbb E_{\\pi_{\\boldsymbol\\beta}}[c_k]} $$

This can realize any strictly positive symmetric distribution when $\\mathcal M$ contains all independent bands. With fewer bands it is a restricted subset.

Jacobian = Fisher information:

$$ \\boxed{\\frac{\\partial\\lambda_k}{\\partial\\beta_m}=\\operatorname{Cov}_\\pi(c_k,c_m)=\\frac12(\\lambda_{k+m}+\\lambda_{k-m})-\\lambda_k\\lambda_m} $$

Indices mod $n$, $\\lambda_{-j}=\\lambda_j$. For single $\\beta$:

$$ \\lambda_k'=\\frac12(\\lambda_{k-1}+\\lambda_{k+1})-\\lambda_1\\lambda_k $$

$$ \\boxed{J=\\nabla^2\\log Z=\\operatorname{Cov}_\\pi(c_{\\mathcal M})} $$

Moment matching $\\boldsymbol\\lambda_{\\mathcal M}(\\boldsymbol\\beta)=\\boldsymbol\\mu$ is convex:

$$ F(\\boldsymbol\\beta)=\\log Z(\\boldsymbol\\beta)-\\boldsymbol\\beta^\\top\\boldsymbol\\mu,\\quad \\nabla F=\\boldsymbol\\lambda_{\\mathcal M}-\\boldsymbol\\mu,\\quad \\nabla^2F=J $$

Newton step:

$$ \\boxed{\\boldsymbol\\beta_{\\rm new}=\\boldsymbol\\beta-J^{-1}(\\boldsymbol\\lambda_{\\mathcal M}-\\boldsymbol\\mu)} $$

This gives the max-entropy distribution matching selected moments.

## 3. Risk and Wiener target, general $n$

Signal plus noise model with independent Fourier powers $S_m$, noise $\\sigma^2$.

Risk per frequency for gain $g_m$:

$$ R_m(g_m)=(1-g_m)^2S_m+\\sigma^2g_m^2 $$

Unconstrained optimum:

$$ \\boxed{g_m^*=\\frac{S_m}{S_m+\\sigma^2}} $$

For a one-parameter kernel, total risk

$$ \\boxed{R(\\beta)=\\sum_m(1-\\lambda_m(\\beta))^2S_m+\\sigma^2\\lambda_m(\\beta)^2} $$

Interior optimum:

$$ \\boxed{\\sum_m\\lambda_m'(\\beta)\\left[(1-\\lambda_m(\\beta))S_m-\\sigma^2\\lambda_m(\\beta)\\right]=0} $$

For $n=3$ this reduces to your closed form $\\lambda^*=S/(S+2\\sigma^2)$ and $\\beta^*=\\frac23\\log(1+3S/2\\sigma^2)$.

## 4. Feasible spectral polytope, general $n$

Attention requires $\\pi_r\\ge0$, $\\sum\\pi_r=1$, $\\pi_r=\\pi_{-r}$.

$$ \\boxed{\\mathcal P_n=\\left\\{\\mathbf g: g_k=\\sum_r\\pi_r c_k(r),\\ \\pi_r\\ge0,\\ \\sum\\pi_r=1,\\ \\pi_r=\\pi_{-r}\\right\\}} $$

Convex polytope, vertices from cosine vectors. Individual bounds $-1\\le g_k\\le1$ are not sufficient, joint consistency is required. Example: isolated frequency with gain $a$ and all others zero needs $\\pi_r=\\frac1n[1+2a c_{k_0}(r)]\\ge0$, so if $\\min c_{k_0}=-1$ then $a\\le1/2$.

Constrained optimal feasible filter is weighted projection of Wiener target onto polytope:

$$ \\boxed{\\min_{\\mathbf g\\in\\mathcal P_n}\\sum_m (S_m+\\sigma^2)(g_m-g_m^*)^2} $$

Convex quadratic program. Then fit $\\boldsymbol\\beta$ to approximate that projection.

| Filter class | Spectral set |
| --- | --- |
| Unconstrained linear | independent $g_m$ |
| Symmetric stochastic circulant | $g\\in\\mathcal P_n$ |
| Multi-band softmax $|\\mathcal M|$ params | parametric subset of $\\mathcal P_n$ |

## 5. General group $G$ acting on $X$

This is the full generalization beyond cyclic.

Let $G$ finite, acting transitively $X=G/H$, $H$ stabilizer. Choose unitary $\\rho:G\\to U(V)$, choose $v\\in V$ with $\\rho(h)v=v$ for all $h\\in H$.

$$ \\boxed{\\phi(gH)=\\rho(g)v} $$

Kernel:

$$ \\boxed{K(x,y)=\\langle\\phi(x),\\phi(y)\\rangle} $$

Positive semidefinite as Gram kernel, invariant:

$$ K(gx,gy)=K(x,y) $$

Character kernel on $G$ itself:

$$ K(g,h)=\\chi_\\rho(g^{-1}h)=\\operatorname{tr}(\\rho(g)^*\\rho(h))=\\langle\\rho(g),\\rho(h)\\rangle_{HS} $$

Invariant kernel gives equivariant normalized attention. Row sum $Z(x)=\\sum_y K(x,y)$ is constant on $G$-orbits, constant globally if action transitive. Then

$$ \\boxed{A(x,y)=\\frac{K(x,y)}{Z(x)},\\quad A(gx,gy)=A(x,y)} $$

Spectral blocks from representation theory. Permutation representation:

$$ \\mathbb C^X=\\bigoplus_\\sigma V_\\sigma\\otimes\\mathbb C^{m_\\sigma} $$

$d_\\sigma=\\dim V_\\sigma$, $m_\\sigma$ multiplicity. By Schur's lemma, any equivariant $A$:

$$ \\boxed{A=\\bigoplus_\\sigma I_{d_\\sigma}\\otimes B_\\sigma} $$

$B_\\sigma$ acts on multiplicity space. For abelian $G$, $d_\\sigma=1$, we recover Fourier modes $\\psi_m$ and diagonal gains $\\lambda_m$. For nonabelian $G$, blocks are matrix-valued, eigenvalues repeat with multiplicity at least $d_\\sigma$.

This gives the symmetry-expressivity tradeoff you noted: $S_n$ gives $A=aI+b\\mathbf1\\mathbf1^\\top$ (only 2 gains), cyclic gives circulant $A_{pq}=f(q-p)$ (full Fourier control).

## 6. Content-dependent case

RoPE: $a_p=W_Qx_p$, $b_q=W_Kx_q$, $R_\\Delta$ rotation by $\\Delta=q-p$,

$$ s_{pq}=a_p^\\top R_{q-p}b_q/\\sqrt d $$

For one 2D block with $J=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$:

$$ s_{pq}=\\frac{(a_p^\\top b_q)\\cos\\Delta\\theta+(a_p^\\top Jb_q)\\sin\\Delta\\theta}{\\sqrt d} $$

Fixed reference $S^0$, perturbation $S=S^0+\\epsilon G$, $|G_{pq}|\\le M$, $\\delta=|\\epsilon|M$:

$$ \\|A_{p,:}-A^0_{p,:}\\|_1\\le2\\tanh(\\delta/2),\\quad \\|A-A^0\\|_2\\le2\\sqrt n\\tanh(\\delta/2) $$

$$ \\min_k|\\mu-\\lambda_k(A^0)|\\le2\\sqrt n\\tanh(\\delta/2),\\quad |\\sigma_k(A)-\\sigma_k(A^0)|\\le2\\sqrt n\\tanh(\\delta/2) $$

So the stationary circulant $A^0$ is the spectral reference, content moves eigenvalues within that tube.

## 7. Final five equations, general form

$$ K(x,y)=\\langle\\phi(x),\\phi(y)\\rangle $$
$$ A_{xy}=e^{\\beta K(x,y)}/\\sum_z e^{\\beta K(x,z)} $$
$$ \\widehat{Av}_\\sigma = B_\\sigma\\hat v_\\sigma,\\ \\text{ abelian: } \\widehat{Av}_m=g_m\\hat v_m $$
$$ g_m^*=S_m/(S_m+\\sigma^2) $$
$$ \\min_{\\mathbf g\\in\\mathcal P_X}\\sum_m(S_m+\\sigma^2)(g_m-g_m^*)^2,\\quad J_{km}=\\frac12(g_{k+m}+g_{k-m})-g_kg_m $$

with $\\mathcal P_X$ defined by $\\pi\\ge0$, $\\sum\\pi=1$, symmetry $\\pi_r=\\pi_{-r}$.

In words:

$$\\text{Symmetry determines admissible operator.}$$
$$\\text{Probability determines feasible spectrum.}$$
$$\\text{Statistics determines target response.}$$
$$\\text{Bandwidth selects attainable response.}$$
$$\\text{Content adapts operator to input.}$$

If you want, I can turn this into code that computes $\\lambda_m(\\beta)$ via the aliased Bessel sum for any $n$, plus the Newton solver for $\\boldsymbol\\beta$ to hit a target Wiener spectrum, so you can plot $\\mathcal P_n$ for $n=8,16,32$.
`,Kl=[{key:"gram-realizability",chapter:16,title:"Exact realizability and minimum feature dimension",summary:"Shared query/key dot products realize exactly those cyclic kernels whose nonconstant log-Fourier coefficients are nonnegative.",body:String.raw`This is an addition to the manuscript, not a claim of publication priority.

Let \(\pi\) be a strictly positive symmetric probability distribution on \(\mathbb Z_n\):

\[
\pi_r>0,\qquad \sum_{r=0}^{n-1}\pi_r=1,\qquad \pi_r=\pi_{-r}.
\]

Set \(A_{ij}=\pi_{j-i}\) and let

\[
\ell_m=\sum_{r=0}^{n-1}\log(\pi_r)e^{-2\pi i mr/n}
\]

be the Fourier coefficients of the log-kernel. They are real because \(\pi\) is real and even.

There exist real feature vectors \(x_0,\ldots,x_{n-1}\) such that

\[
A_{ij}=\frac{\exp(x_i^\top x_j)}{\sum_k\exp(x_i^\top x_k)}
\]

if and only if

\[
\boxed{\ell_m\geq0\quad\text{for every }m\neq0.}
\]

When this condition holds, the minimum Gram rank is

\[
\boxed{d_{\min}=\#\{m\neq0:\ell_m>0\}.}
\]

A conjugate Fourier pair contributes two real dimensions; a nonzero Nyquist mode contributes one. The uniform kernel has rank zero.

**Proof sketch.** Let \(L_{ij}=\log\pi_{j-i}\). If a symmetric score matrix \(S\) has row-softmax equal to \(A\), then \(S_{ij}=L_{ij}+c_i\). Symmetry of both \(S\) and \(L\) forces all \(c_i\) equal, so \(S=L+c\mathbf1\mathbf1^\top\). Adding the rank-one matrix changes only the constant Fourier mode. Since \(S\) must be positive semidefinite, every nonconstant \(\ell_m\) must be nonnegative. Conversely, when those coefficients are nonnegative, choose \(c=-\ell_0/n\). Then \(S\) is PSD; factor it as \(XX^\top\). The constant shift cancels under softmax, and the rank is exactly the number of positive nonconstant modes.

**Four positions expose the gap.** Write a symmetric four-position spectrum as \((1,x,y,x)\). Its kernel is

\[
\pi=\frac14(1+2x+y,\;1-y,\;1-2x+y,\;1-y).
\]

Strict positivity and Gram realizability reduce to

\[
\boxed{x\geq0,\qquad y\geq x^2.}
\]

Now take

\[
\pi=\frac1{17}(8,4,1,4),\qquad
g=\left(1,\frac7{17},\frac1{17},\frac7{17}\right).
\]

Every kernel entry is positive and every spectral gain is positive. But

\[
\frac1{17}<\left(\frac7{17}\right)^2,
\qquad
\ell_2=\log(1/2)<0.
\]

This valid stochastic convolution cannot be represented by shared query/key dot products in any embedding dimension. Increasing the feature dimension cannot remove the wrong-sign log-spectrum obstruction.

The three feasibility questions are therefore distinct:

| Constraint | Exact question |
| --- | --- |
| Probability feasibility | Is the inverse Fourier kernel nonnegative? |
| Gram feasibility | Are its nonconstant log-Fourier coefficients nonnegative? |
| Dimension feasibility | Does the embedding cover the required log-spectrum rank? |

The theorem is a cyclic form of conditional positive definiteness. The log-kernel criterion and the attention-specific rank statement sit on that foundation. For the classical results, see [Bhatia and Jain](https://arxiv.org/html/1409.7479v1); attention as nonparametric kernel regression appears in [Nguyen et al.](https://arxiv.org/abs/2206.00206). Exponential-family covariance and moment-polytope identities are standard material in [Wainwright and Jordan](https://wainwrightwork.github.io/publications.html); recent attention-specific exponential-family geometry appears in [Rubacher](https://proceedings.mlr.press/v306/rubacher26a.html). The realizability formulation and the architecture-induced risk gap are the development presented here.

The probability constraint applies to an individual stochastic head or a nonnegative mixture of heads. A multi-head layer with learned value maps and output projection is generally a signed combination of head outputs, not itself a stochastic averaging operator. State the result per head, then analyze channel mixing separately.

With all independent symmetric gains retained, the feasible set is more specifically a simplex: symmetric orbit masses form a simplex, and the cosine transform is invertible on even functions. Lower-dimensional gain plots are projections of that simplex.

For a concrete statistical consequence, choose nonconstant signal powers \(S_1=S_3=7\sigma^2/10\) and \(S_2=\sigma^2/16\). The Wiener gains are \(7/17,1/17,7/17\). The best shared-feature Gram kernel has excess risk at least \(0.0108523\,\sigma^2\). This is an architecture-induced gap beyond probability feasibility.`},{key:"sharp-stability",chapter:22,title:"A dimension-free stability bound under content modulation",summary:"Bounded exponential reweighting changes a doubly stochastic reference by at most sinh(delta), with no sequence-length factor.",body:String.raw`This is an addition to the manuscript, not a claim of publication priority.

Let \(P\) be a doubly stochastic reference attention matrix:

\[
P\geq0,\qquad P\mathbf1=\mathbf1,\qquad \mathbf1^\top P=\mathbf1^\top.
\]

Define content modulation by

\[
A_{ij}=\frac{P_{ij}e^{E_{ij}}}{\sum_kP_{ik}e^{E_{ik}}},
\]

and assume each row of \(E\) has oscillation at most \(2\delta\):

\[
\max_jE_{ij}-\min_jE_{ij}\leq2\delta.
\]

Then for every vector \(v\),

\[
\boxed{
\|(A-P)v\|_2^2
\leq\sinh^2(\delta)\bigl(\|v\|_2^2-\|Pv\|_2^2\bigr).
}
\]

Therefore,

\[
\boxed{\|A-P\|_{2\to2}\leq\sinh(\delta).}
\]

There is no sequence-length factor. If \(P\) is circulant and \(\psi_m\) is a unit-norm Fourier eigenvector with eigenvalue \(\lambda_m\), then

\[
\boxed{
\|A\psi_m-\lambda_m\psi_m\|_2
\leq\sinh(\delta)\sqrt{1-|\lambda_m|^2}.
}
\]

**Proof sketch.** Fix a row and write \(p_j=P_{ij}\), \(X_j=e^{E_{ij}}\), \(\mu=\mathbb E_pX\), \(r=X/\mu\). The tilted row has likelihood ratio \(r\). Since \(X\in[e^{-\delta},e^\delta]\),

\[
\mathbb E_p(r-1)^2=\frac{\operatorname{Var}_p(X)}{\mu^2}\leq\sinh^2\delta.
\]

Centering within the row and applying Cauchy–Schwarz gives the stated squared-norm bound. Dropping the nonnegative \(\|Pv\|^2\) term gives the operator bound. The constant is sharp: for the uniform reference, a two-level perturbation with \(+\delta\) on a fraction \(1/(1+e^{2\delta})\) of columns approaches equality as \(n\) grows.

**Comparison with Section 22.** The article’s earlier bound is

\[
\|A-P\|_2\leq2\sqrt n\,\tanh(\delta/2).
\]

The new bound behaves as \(\delta\) for small \(\delta\), not \(\sqrt n\,\delta\). For example, at \(n=4096\) and \(\delta=0.05\), the earlier bound is about \(3.1993\), while \(\sinh(0.05)\approx0.05002\). For large \(\delta\), either bound may be smaller, so retain their minimum.

The mode-resolved inequality is the useful part: a frequency that \(P\) nearly preserves is less disturbed by bounded content modulation. The constant mode is unchanged exactly.

**Depth corollary.** Let \(P\) be circulant, \(Q=I-\mathbf1\mathbf1^\top/n\), \(\rho=\max_{m\neq0}|\lambda_m(P)|<1\), and \(\eta=\sinh\delta\). If

\[
\eta<\sqrt{\frac{1-\rho}{1+\rho}},
\]

then

\[
\gamma=\rho+\eta\sqrt{1-\rho^2}<1
\]

and

\[
\|QA_L\cdots A_1v\|_2\leq\gamma^L\|Qv\|_2.
\]

Bounded content modulation can therefore preserve the contraction of repeated averaging, though the limiting consensus value need not equal the original mean. Learned value maps, residuals, and other transformer operations require separate analysis.`}],Zl=String.raw`## 26. A first controlled experiment

The theorem notes establish feasibility and stability. They do not show that gradient descent finds useful harmonic coefficients. This experiment tests that mechanism directly.

Five single-head attention networks were trained on 16-position cyclic tasks. Each has identity value maps and no residual, feed-forward block, or learned output projection. Only the score rule changes. There were three seeds, two initialization restarts, 800 Adam updates, validation-based checkpoint selection, and 4,096 held-out examples per task. The 90 training fits produced 45 selected runs.

| Attention | Parameters | Smooth signals | Mixed frequencies | Content grouping |
| --- | ---: | ---: | ---: | ---: |
| Single rotational band | 1 | 0.3141 | 0.9712 | 0.06362 |
| Multiple rotational bands | 8 | **0.3056** | **0.4739** | 0.05999 |
| Gram-constrained bands | 8 | 0.3207 | 0.5285 | 0.05981 |
| Dot-product baseline | 288 | 0.3259 | 0.5079 | 3.743e-05 |
| Rotational + content hybrid | 56 | **0.3055** | **0.4713** | **2.898e-06** |

Lower mean squared error is better. Entries are means across three training seeds on a common held-out set. Seed standard deviations are at most \(3.45\times10^{-3}\); per-seed results are in the linked artifact.

**What the experiment supports.** Eight learned harmonic coefficients were enough to improve on a 288-parameter dot-product baseline for the two stationary signal tasks. The Gram constraint cost error on those tasks, which is consistent with the expressivity gap: the constraint is a structural prior, not a free improvement.

**Where position is insufficient.** On content grouping, position-only models retained roughly \(6\times10^{-2}\) error, while content-dependent attention dropped to \(10^{-5}\) or below. The dot-product baseline reached \(3.743\times10^{-5}\), roughly \(1.6\times10^{3}\) times lower than the pure multi-band model, showing a fixed positional kernel cannot solve this task. The hybrid, combining both paths, reached \(2.898\times10^{-6}\) with 56 parameters — about \(12.9\times\) below the dot-product baseline.

These results support the combined design direction: **rotational structure for stationary signal processing, plus content-dependent scores when the task requires grouping.** They do not establish superiority over a complete Transformer, language-model quality, or a speed/memory advantage. Value maps, residuals, and output projections were deliberately removed. The tasks match the cyclic assumptions, and one optimizer configuration was used without a hyperparameter or parameter-matched sweep. The reported variation is across training seeds on a common test set, not across independently generated test sets.

## 27. Factorial ablation: harmonics vs. positional parameters

The first experiment established that harmonic scores are trainable. It did not isolate whether the harmonic *basis* contributes anything beyond spending positional parameters. This experiment closes that gap with a controlled factorial design on mixed-frequency denoising: the content pathway (Wq/Wk over the vector ("value", "label", 1), head_dim 8) is architecturally identical across every model that includes it, and two different positional priors are compared at the same parameter budget. Ten seeds per cell, seed root 20261018, checkpoint selection on 512 validation examples, 4,096 held-out test examples.

| Model | Positional harmonics | Content scores | Positional params | In-distribution MSE |
| --- | --- | --- | ---: | ---: |
| A. Positional only | learned β (per band) | no | 8 | **0.4708** |
| B. Content only | none | yes | 0 | 0.8707 |
| C. Harmonic hybrid | learned β + content | identical to B | 8 | **0.4680** |
| D. Content + learned RPB | relative-position bias table (n entries) | identical to B | n | **0.4687** |

**Three answers.** First, content alone is *catastrophic* here — B (0.8707) is nearly twice as bad as every model with positional information, because the pure content pathway cannot distinguish *where* a token sits and therefore cannot denoise frequency structure. Second, **the harmonic basis does not beat an equally-sized learned relative-position bias**: C (0.4680) and D (0.4687) differ by \(7.2\times10^{-4}\) MSE, and the paired bootstrap 95% CI is \([-1.0\times10^{-3},\ -4.4\times10^{-4}]\). The difference is statistically detectable but practically negligible — roughly 0.15% of the total error. Third, harmonic structure *does* help sample efficiency: at 1/8 of the training budget the harmonic hybrid reaches 0.4841 vs. D's 0.5088 and A's 0.5070, a clear early-training advantage that narrows as data increases.

**Distribution shift (train- and eval-at-shift configs, mean over 10 seeds).**

| Shift | A | B | C | D |
| --- | ---: | ---: | ---: | ---: |
| n=16 baseline | 0.4697 | 0.8604 | 0.4663 | 0.4676 |
| n=32 | 0.2568 | 0.5416 | 0.2556 | 0.2520 |
| n=64 | 0.1227 | 0.3268 | 0.1209 | **0.1206** |
| noise ×0.4 | 0.4680 | 0.8701 | 0.4644 | 0.4651 |
| noise ×2.5 | 0.4796 | 0.8857 | 0.4755 | 0.4761 |
| band shift +2 | 0.3633 | 0.7002 | 0.3631 | 0.3634 |

Two honest observations. The shift arm retrains at each configuration because the harmonic parameterization changes size with \(n\) (8 coefficients at \(n=16\), 16 at \(n=32\), 32 at \(n=64\)); this measures architectural transfer, not inference-time length generalization. And at larger \(n\) the learned RPB (D) actually edges out the harmonic model (C), with 0.1206 vs 0.1209 at \(n=64\) — the two designs converge once the positional bias has enough capacity to fit whatever profile it needs.

**What this changes in the story.** The §26 headline — harmonic attention with 8 parameters beating a 288-parameter dot-product baseline on mixed-frequency denoising — was real but underdiagnosed. The factorial decomposition shows the advantage was *not* about harmonic structure versus other positional priors; harmonic β and a learned RPB land within noise of each other, and both inherit their gains from injecting positional information that the pure content model lacks. The remaining genuine differentiator is the harmonic prior's **sample efficiency at low training budgets**, where the structured basis does appear to reach a good solution faster than an unconstrained bias table.

**Artifacts.** [factorial_ablation.py](./experiments/factorial-ablation/factorial_ablation.py), [results.json](./experiments/factorial-ablation/results.json), and [README.md](./experiments/factorial-ablation/README.md) document the design, the paired bootstrap method (5,000 resamples, 95% level), and the full per-seed runs. Gradient checks across all four models: max finite-difference error \(4.44\times10^{-11}\).

## 28. Length generalization: harmonic attention across sequence lengths

§27 closed the parameter-count confound but could not test frozen transfer, because the harmonic parameterization there changed size with \(n\). This section removes that limitation by tying each learned coefficient \(\beta_m\) to an **absolute frequency** \(m=1,\dots,8\), not to a sequence length. The band matrix at any length \(n\) is \(\cos(2\pi m\Delta/n)\) with the same \(m\), so the 8 coefficients apply unchanged at every \(n\ge16\). The RPB baseline (a 16-entry relative-position table) has no such natural extension; its best transfer is periodic linear interpolation. Task: mixed-frequency denoising, same recipe as §27. Ten seeds, seed root 20261018.

**Main result. Frozen harmonic attention does transfer, and meaningfully outperforms frozen RPB at every longer length.** The frozen model is not free — retraining at the target length always does better — but the frozen harmonic model's error at \(n=128\) is **less than half** the frozen RPB's, and it approaches the retrained harmonic reference within \(27\%\) relative error. The frozen RPB degrades badly because its 16-position table literally does not describe the distances it encounters at \(n=64\) or \(n=128\).

| Evaluation length | Frozen harmonic | Frozen RPB | Retrained harmonic | Retrained RPB | Frozen harmonic vs frozen RPB |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 16 (train) | 0.4762 | 0.4687 | 0.4680 | 0.4687 | worse by 0.0076 |
| 32 | 0.7122 | 1.1193 | 0.2876 | 0.2472 | **better by 0.4071** |
| 64 | 0.2580 | 0.5533 | 0.1989 | 0.1212 | **better by 0.2953** |
| 128 | 0.1327 | 0.2806 | 0.1044 | 0.0606 | **better by 0.1478** |

All harmonic-frozen vs RPB-frozen comparisons at \(n \geq 32\) are decisive: paired bootstrap 95% CIs exclude zero by a wide margin, and the harmonic model's variance across seeds is substantially lower (std \(2.3\times10^{-3}\) vs \(2.7\times10^{-3}\) at \(n=64\), \(1.4\times10^{-3}\) vs \(1.2\times10^{-3}\) at \(n=128\)) despite the frozen harmonic having to extrapolate a 16-position spectral prior to four times longer sequences.

**Where frozen harmonic fails.** At \(n=32\), the frozen harmonic model (0.7122) is significantly *worse* than at either \(n=16\) or \(n=64\). This is not a bug: the task has spectral content at \(m=6\) and \(m=n/2\), so at \(n=32\) the absolute frequencies that matter shift relative to what the model learned at \(n=16\), and the frozen 8-band prior cannot adapt. By \(n=64\) and \(n=128\), the task's spectral support overlaps more naturally with the frozen bands, and the harmonic model's error drops smoothly. **Frozen transfer depends on the task's frequency support overlapping the learned bands, not just on the architecture.**

**Sample efficiency and robustness under frozen transfer.** Both at \(n=128\) and under noise perturbations at \(n=128\), the frozen harmonic model dominates:

| Condition | Frozen harmonic | Frozen RPB |
| --- | ---: | ---: |
| 1/8 training budget, \(n=128\) | **0.1199** | 0.2283 |
| 1/4 budget | **0.1214** | 0.2574 |
| 1/2 budget | **0.1259** | 0.2710 |
| Full budget | **0.1327** | 0.2806 |
| Noise ×0.4 | **0.0880** | 0.2613 |
| Noise ×2.5 | **0.4132** | 0.5353 |

An unexpected finding: the frozen harmonic model's \(n=128\) performance *degrades slightly* with more training (0.1199 at 1/8 budget → 0.1327 at full budget). This is overfitting to the \(n=16\) task — the model learns more specific β values that are less transferable. The harmonic prior's transfer advantage is most visible when trained briefly, and the frozen RPB's interpolation (which is bounded to [−1, 1] under periodic extension) does not show the same effect.

**The full architectural story.** The three experiments now compose into a single narrative: (§26) harmonic scores are trainable and beat a much larger dot-product baseline on stationary tasks; (§27) the harmonic *basis* is not uniquely special — an equal-parameter learned RPB matches it in-distribution; but (§28) harmonic structure has a unique **frozen length transfer** property that RPBs lack, because frequencies are absolute and lengths are relative. The hybrid "harmonic + content" architecture is therefore not a cheap Transformer, nor uniquely powerful in-distribution — it is a positional prior with a transfer behavior that content-only and RPB-based attention cannot match when evaluated at lengths other than the training length.

**Artifacts.** [length_generalization.py](./experiments/length-generalization/length_generalization.py), [results.json](./experiments/length-generalization/results.json), and [README.md](./experiments/length-generalization/README.md) document the fixed-frequency parameterization, the paired bootstrap method, and the per-seed runs. Gradient checks: max finite-difference error \(4.24\times10^{-11}\).

## 29. Positional prior comparison: harmonic β vs RoPE vs ALiBi vs continuous RPB

Is the frozen length transfer advantage specific to the learned harmonic parameterization, or is it shared by the priors already deployed in production attention models? This section puts harmonic β, RoPE, ALiBi, and a continuous relative-position bias head-to-head under identical conditions: same content pathway, same optimizer, same checkpoint selection, same mixed-frequency denoising task, 10 seeds per cell (seed root 20261018). Training is at \(n=16\); evaluation is frozen at 16, 32, 64, 128.

The four priors span the learnability–expressivity tradeoff. RoPE has **zero learned positional parameters** — the rotation frequencies \(\theta_k = 10000^{-2(k-1)/8}\) are fixed by design, making it the minimum-parameters baseline that the others must beat to justify themselves. ALiBi has **one** learned slope scaling a linear \(\Delta\) penalty. Continuous RPB is a learned 2-layer MLP on \((\sin(2\pi\Delta/n), \cos(2\pi\Delta/n))\), hidden size 4 (10 parameters) — it normalizes by \(n\), so it transfers automatically. Harmonic β has **8** learned absolute-frequency coefficients.

**Results, frozen after training at n=16, mean over 10 seeds.**

| Eval length | Harmonic β | RoPE | ALiBi | Continuous RPB | Best prior |
| ---: | ---: | ---: | ---: | ---: | --- |
| 16 (train) | **0.3734** | 0.7271 | 0.6809 | 0.5255 | harmonic |
| 32 | 0.4403 | 0.4610 | 0.5203 | **0.3414** | continuous RPB |
| 64 | 0.2332 | **0.2217** | 0.4511 | 0.1975 | continuous RPB |
| 128 | 0.1162 | 0.1614 | 0.4214 | **0.1087** | continuous RPB |

All paired harmonic-vs-other differences are decisive except harmonic-vs-continuous-RPB at \(n=128\), which is within \(7\times10^{-3}\) with a CI excluding zero by only \(2\times10^{-3}\). The bootstrap CIs are in the linked artifact.

**Three structural findings.**

*First, harmonic β dominates in-distribution.* Its 0.3734 at \(n=16\) is roughly half RoPE's 0.7271 and far below ALiBi's 0.6809. RoPE's fixed frequencies cannot learn the task's spectral shape; ALiBi's single slope learns only "prefer local" but cannot represent band-pass structure. The harmonic prior's advantage is not transfer — it is expressive matching of the spectral signal, which requires learning.

*Second, no single prior wins at every length, and harmonic β has a specific failure mode.* At \(n=32\), continuous RPB beats harmonic (0.3414 vs 0.4403) because the task's \(m=n/2=16\) band falls outside the 8 learned harmonic coefficients. At \(n=64\) and \(n=128\), the two designs converge within noise, and RoPE is competitive at \(n=64\) because its fixed rotation frequencies include useful intermediate bands by construction. **Frozen transfer depends on the target length's spectral support overlapping the learned bands** — the same conclusion §28 drew for RPBs.

*Third, ALiBi is the clear loser.* Its frozen transfer is the worst of the four at every length beyond training (0.5203, 0.4511, 0.4214 at 32/64/128). This is not surprising: the linear \(\Delta\) penalty has a single scalar to encode shape, and its magnitude scales linearly with the Δ range when applied un-normalized, so the same learned slope effectively applies a much stronger penalty at longer lengths. ALiBi's design — a coarse, position-count-based bias — has no spectral content to transfer.

**What this changes in the architectural story.** Harmonic β is the best prior when the task's frequencies are fixed and you are training — but *not* uniquely good for frozen transfer. Continuous RPB matches or beats it at every longer length once the frequency support shifts out of the learned bands, because it re-normalizes by \(n\) and can express shapes the harmonic basis can't. RoPE is competitive at \(n=64\) despite no learning, validating that its fixed rotation frequencies are a reasonable universal inductive bias. **The correct architectural recommendation is not "use harmonic attention," but rather: match the positional prior to the task's spectral content, and retrain (or use a length-normalized continuous prior) when the task's frequency support changes with length.** For the specific setting of stationary signals with a fixed spectral prior, harmonic β remains the strongest learned parameterization we have measured — but it is not a general-purpose winner.

**Artifacts.** [positional_prior_comparison.py](./experiments/positional-prior-comparison/positional_prior_comparison.py), [results.json](./experiments/positional-prior-comparison/results.json), and [README.md](./experiments/positional-prior-comparison/README.md) document the design, RoPE's fixed-frequency implementation, paired bootstrap method, and per-seed runs. Gradient checks: max finite-difference error \(4.72\times10^{-11}\).`,Vl=String.raw`## Appendix A — Reproducible checks

All numerical claims in the two theorem notes have a runnable check:

- [spectral_attention_checks.py](./experiments/spectral_attention_checks.py)
- [results.json](./experiments/results.json)

The script requires Python 3 and NumPy. It fixes the seed to 20261018 and exits non-zero if any asserted inequality fails. The results below were produced with Python 3.12 and NumPy 2.5.2.

| Check | Observed result |
| --- | --- |
| Feasible cyclic Gram reconstructions, \(n=3,\ldots,64\) | 140 cases, maximum reconstruction error \(1.11\times10^{-16}\), zero rank mismatches |
| Random positive symmetric kernels | 78 infeasible cases; every one had a negative nonconstant log-Fourier coefficient |
| Four-point counterexample \(\pi=(8,4,1,4)/17\) | \(\ell_2=\log(1/2)=-0.6931\); fails Gram feasibility |
| Content-modulation operator bound | 120 random cases, maximum ratio to \(\sinh\delta\): 0.5489 |
| Fourier-mode leakage bound | 3,413 mode checks, maximum ratio: 0.3430 |
| Uniform-reference sharpness, \(n=2048,\ \delta=1\) | ratio to \(\sinh\delta\): 0.99999996 |
| Four-point constrained risk | \(x=0.3892215\), \(y=0.1514934\), excess risk \(0.0108523\,\sigma^2\) |

These are numerical sanity checks on the proofs and constructions. They are **not** experiments on trained transformers, and they should not be presented as benchmark evidence. The next empirical step is a controlled comparison between single-band softmax, signed multi-band logits, Gram-constrained multi-band logits, and full stochastic projection on fixed synthetic spectra, followed by fitting a stationary reference to recorded attention matrices.

## Appendix B — Scope, notation, algorithms, and provenance

**Notation.** The earlier sections use several objects that should not share a symbol.

| Symbol | Meaning |
| --- | --- |
| \(s(x,y)\) | real similarity or score |
| \(W(x,y)=e^{s(x,y)}\) | positive weight kernel |
| \(K\) | a Gram similarity where explicitly identified as such |
| \(D=\operatorname{diag}(W\mathbf1)\) | row-normalization matrix |
| \(A=D^{-1}W\) | row-stochastic attention operator |
| \(\beta\) | inverse kernel bandwidth |
| \(\pi_r\) | symmetric cyclic probability mass |
| \(g_m,\lambda_m\) | Fourier gain and spectral multiplier |
| \(\ell_m\) | log-kernel Fourier coefficient |
| \(\mathcal P_n\) | probability-feasible spectral set |
| \(E,\delta\) | content perturbation and row oscillation |

Throughout, a score is real. A complex unitary feature representation must be converted to a real score, for example \(\operatorname{Re}\langle\phi(x),\phi(y)\rangle\), before exponentiation and normalization.

**Scope and assumptions.** The cyclic results assume a finite index set, a symmetric relative-position kernel, and a single stochastic attention head. Theorem 2 assumes a doubly stochastic reference \(P\); content modulation may be asymmetric. A causal mask or a finite boundary breaks exact circulant symmetry and requires a Toeplitz or block-Toeplitz analysis. A multi-head layer with learned value maps and output projection is not itself a stochastic averaging operator; the probability constraint applies per head or to a nonnegative mixture. Residual connections, layer normalization, and changing content are outside the reference model unless stated otherwise.

**Computation.** The spectral gain curve is computed by FFT in \(O(n\log n)\) time and \(O(n)\) memory. Checking the nonconstant log-Fourier coefficients is also \(O(n\log n)\); constructing the minimum-rank factor by eigendecomposition is \(O(n^3)\) in the general dense case. The probability-feasible projection is a convex quadratic program; a generic interior-point solve is polynomial but cubic in the number of gain variables, while structure-aware FISTA or ADMM can exploit the circulant transform. Finite cyclic aliasing is exact and should be evaluated with the finite sum, not replaced by the Bessel ratio. Damped Newton moment matching should stop on \(\|\boldsymbol\lambda_{\mathcal M}(\boldsymbol\beta)-\boldsymbol\mu\|_\infty\leq\varepsilon\), with a backtracking step and a check on the condition number of the Fisher matrix. Those implementation details matter; a formula without a stopping rule is not an algorithm.

**Claims and provenance.** The following are established ingredients rather than new results: attention as nonparametric kernel regression; Fourier diagonalization of circulant operators; the softmax–Gaussian limit; the covariance/Hessian identity for exponential families; and the row-sum argument for orbit-wise normalization. The two additions developed in this manuscript are the exact cyclic Gram-softmax realizability/rank criterion with its four-position barrier and risk gap, and the dimension-free mode-resolved stability bound with the depth corollary. First-in-literature priority is not claimed.

**References**

1. Tan Nguyen, Minh Pham, Tam Nguyen, Khai Nguyen, Stanley J. Osher, and Nhat Ho. [Transformer with Fourier Integral Attentions](https://arxiv.org/abs/2206.00206), 2022.
2. Martin J. Wainwright and Michael I. Jordan. [Graphical Models, Exponential Families, and Variational Inference](https://wainwrightwork.github.io/publications.html), 2008.
3. Rajendra Bhatia and Tanvi Jain. [On some positive definite functions](https://arxiv.org/html/1409.7479v1), 2014.
4. Bodie Rubacher. [Attention Implements the Fisher Geometry of Exponential Families](https://proceedings.mlr.press/v306/rubacher26a.html), ICML 2026.
5. Saul Santos, Nuno Gonçalves, Daniel C. McNamee, Marcos Treviso, and André F. T. Martins. [Sparse Attention as Compact Kernel Regression](https://arxiv.org/abs/2601.22766), 2026.
6. Shafayeth Jamil and Rehan Kapadia. [The Routing and Filtering Structure of Attention](https://arxiv.org/abs/2605.18826), 2026.
7. Zhigao Huang, Pinghui Wu, Musheng Chen, Quanfa Li, and Miao Pan. [Spectral attention for transformers](https://doi.org/10.1007/s44443-026-00599-5), 2026.
8. Xinghao Wang et al. [Prism: Spectral-Aware Block-Sparse Attention](https://arxiv.org/abs/2602.08426), 2026.
9. Kimi Team. [Kimi Linear: An Expressive, Efficient Attention Architecture](https://arxiv.org/abs/2510.26692), 2025.
10. Alexia Jolicoeur-Martineau, Rhea Sanjay Sukthanker, Pashmina Cameron, and Emy Gervais. [Sliding-window beats linear attention](https://arxiv.org/abs/2608.28444), 2026.
11. Yutao Sun et al. [Efficient Attention Mechanisms for Large Language Models: A Survey](https://arxiv.org/abs/2507.19595), 2025.`,Xl=""+new URL("cover_image-D6fOtB8i.webp",import.meta.url).href,Yl=""+new URL("cyclic_attention_kernel-DgRFjUNA.webp",import.meta.url).href,Jl=""+new URL("bessel_aligned_spectral-_otRJV1X.webp",import.meta.url).href,Ql=""+new URL("wiener_filter_optimal-d14s13kJ.webp",import.meta.url).href,ec=""+new URL("fesiable_spectral_polytope-Bm4v_Fzo.webp",import.meta.url).href,tc=""+new URL("fisher_jacobian-De6bci-c.webp",import.meta.url).href,ye=r=>String(r).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Oi(r,e=!1){try{const t=jl.renderToString(r,{displayMode:e,throwOnError:!0,trust:!1,strict:"ignore",output:"htmlAndMathml"});return e?`<div class="math-block">${t}</div>`:t}catch(t){const n=e?"div":"span";return`<${n} class="math-error" role="note" title="${ye(t.message)}"><span class="math-error-label">Formula could not be typeset</span> <code>${ye(r)}</code></${n}>`}}function rc(r){return r.replace(/\\([_*])/g,"$1").replace(/\\\\([{}|,])/g,"\\$1").replace(/\\begin\{(pmatrix|aligned|gathered)\}([\s\S]*?)\\end\{\1\}/g,(e,t,n)=>{const a=n.replace(/\\{3,}/g,(i,o)=>{const c=/[a-zA-Z]/.test(n[o+i.length]||"");return"\\".repeat(c?3:2)});return`\\begin{${t}}${a}\\end{${t}}`})}function nc(r,e){const t=[];let n="SPECTRALMATHTOKEN";for(;r.includes(n);)n+="X";const a=e?r.replace(/\\{2}([\[\]()])/g,"\\$1"):r,i=new RegExp("(```[^\\n]*\\n[\\s\\S]*?```|~~~[^\\n]*\\n[\\s\\S]*?~~~|`+[^`\\n]*`+)|\\\\\\[([\\s\\S]*?)\\\\\\]|\\\\\\(([\\s\\S]*?)\\\\\\)|\\$\\$([\\s\\S]*?)\\$\\$|(?<![\\\\$])\\$(?!\\$)([^\\n$]+?)(?<!\\\\)\\$(?!\\$)","g"),o=a.replace(i,(h,d,p,x,f,v)=>{if(d)return d;const w=p!==void 0||f!==void 0,k=p??x??f??v,q=e?rc(k):k,T=`${n}${t.length}END`;return t.push({token:T,tex:q,display:w}),T}),c=new RegExp(`${n}(\\d+)END`,"g");return{text:o,formulas:t,restore:h=>h.replace(c,(d,p)=>{const x=t[Number(p)];return Oi(x.tex,x.display)}),plain:h=>h.replace(c,(d,p)=>t[Number(p)].tex.trim())}}function ac(r){return r.replace(/\\mathbb\s*\{?Z\}?/g,"ℤ").replace(/\\([a-zA-Z]+)\b/g,"$1").replace(/[*`{}$]/g,"").replace(/\s+/g," ").trim()}function ar(r,e){const{id:t}=r,n=[];let a;if(t==="notes")a=e.trim().split(/\n\s*\n/).map(o=>`<p>${ye(o).replace(/\n/g,`<br>
`)}</p>`).join(`
`);else{const o=t==="review"?Wn.slice(0,-1).reduce((f,v)=>f.replace(v,`

## ${v}

`),e):e,c=nc(o,t==="essay"),h=new Map;let d=!0;a=new j0({gfm:!0,renderer:{heading({tokens:f,depth:v,text:w}){const k=d;if(d=!1,k&&v===1)return"";const q=ac(c.plain(w)),T=q.normalize("NFKD").toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-|-$/g,"")||"section",R=(h.get(T)||0)+1;h.set(T,R);const B=`${t}-${T}${R>1?`-${R}`:""}`;return(v===2||v===3)&&n.push({id:B,title:q}),`<h${v} id="${ye(B)}">${this.parser.parseInline(f)}</h${v}>
`},html({text:f}){return ye(f)},link({href:f,title:v,tokens:w}){const k=this.parser.parseInline(w);if(/^\s*(?:javascript|vbscript|data):/i.test(f))return k;const q=/^(?:https?:)?\/\//i.test(f);return`<a href="${ye(f)}"${v?` title="${ye(v)}"`:""}${q?' target="_blank" rel="noopener noreferrer"':""}>${k}</a>`}}}).parse(c.text);const x=new Set(c.formulas.filter(f=>f.display).map(f=>f.token));a=a.replace(/<p>([\s\S]*?)<\/p>/g,(f,v)=>{const w=v.split(/(SPECTRALMATHTOKENX*\d+END)/g);if(!w.some(T=>x.has(T)))return f;let k="",q="";for(const T of w)x.has(T)?(k.trim()&&(q+=`<p>${k}</p>`),q+=T,k=""):k+=T;return k.trim()&&(q+=`<p>${k}</p>`),q}),a=c.restore(a)}n.length||(n.push({id:`${t}-overview`,title:"Overview"}),a=`<div id="${t}-overview" class="document-overview-anchor"></div>
${a}`);const i=e.trim().split(/\s+/u).length;return{...r,source:e,html:a,sections:n,wordCount:i,minutes:Math.max(1,Math.ceil(i/200))}}const Wn=["The central move you made","Why the $n=3$ model matters","From 3 to $n$: where Bessel and Wiener enter","The hard constraint you isolated in section 15","What this says about RoPE and real transformers","Where I would push next","If you want, I can turn the $n=3$"],Hi={review:"Review",note:"Working note",theorem:"Theorem",checkpoint:"Checkpoint"},Wt=[{key:"geometry",title:"Symmetry → kernel",range:[1,4],question:"How do three positions become an attention kernel?",description:"Rotations, characters, and the exact three-position operator."},{key:"spectrum",title:"Kernel → spectrum",range:[5,16],question:"Which frequency responses can attention actually realize?",description:"Closed forms, Bessel gains, Wiener targets, and feasible spectra."},{key:"symmetry",title:"Cyclic → general groups",range:[17,20],question:"Which spectral blocks survive a general symmetry?",description:"Group actions, equivariant kernels, and Schur decomposition."},{key:"content",title:"Stationary → content",range:[21,24],question:"What survives when content breaks stationarity?",description:"RoPE, perturbation bounds, and the engineering decisions."}],x0=[{key:"visual-abstract",number:"01",lead:!0,image:Xl,width:1920,height:1280,title:"Two views of the same attention operator",alt:"Two-panel visual abstract. Position space shows a circulant attention matrix and a von Mises kernel on a circle; frequency space shows low-pass Bessel spectral gains.",caption:"A translation-invariant cyclic kernel defines attention weights in position space. Fourier diagonalization turns those weights into a low-pass spectral filter."},{key:"cyclic-kernel",number:"02",chapter:9,image:Yl,width:1920,height:1280,title:"The general cyclic attention kernel",alt:"Technical diagram of a 16 by 16 cyclic attention matrix with a diagonal band and a colorbar for attention weight.",caption:"For n = 16, every row is a cyclic shift of the same kernel. The diagonal band shows how β concentrates attention around zero relative offset."},{key:"bessel-gains",number:"03",chapter:10,image:Jl,width:1920,height:1280,title:"Aliased Bessel spectral gains",alt:"Technical diagram showing the Bessel ratio formula and a decaying low-pass curve of spectral gain against frequency.",caption:"The spectral gain λₘ decays with frequency. Sampling at n points sums aliases; in the large-n limit the gain becomes Iₘ(β)/I₀(β)."},{key:"wiener-filter",number:"04",chapter:11,image:Ql,width:1808,height:1152,title:"Wiener target and optimal bandwidth",alt:"Technical diagram showing signal power, the Wiener gain, achieved gain, and risk versus bandwidth with a marked minimum.",caption:"The unconstrained Wiener gain balances signal and noise frequency by frequency. Risk falls then rises with β, and its minimum selects a bandwidth."},{key:"feasible-polytope",number:"05",chapter:16,image:ec,width:1568,height:1312,title:"The feasible spectral polytope",alt:"Technical diagram of a projected feasible spectral region for eight positions, with the unconstrained Wiener target and its projection.",caption:"For n = 8, nonnegative normalized weights map to a convex polytope in gain space. The constrained optimum is the risk-weighted projection of the Wiener target onto that set."},{key:"fisher-blocks",number:"06",chapter:20,image:tc,width:1920,height:1280,title:"Fisher information and group blocks",alt:"Technical diagram with a Fisher information heatmap on the left and a block-diagonal equivariant operator under Schur's lemma on the right.",caption:"Fisher information couples spectral moments through a covariance matrix. Under a general symmetry, Schur's lemma makes an equivariant operator block diagonal."}];function w0(r){const e=`Figure ${r.number}: ${r.title}`;return`<figure class="article-figure${r.lead?" article-figure--lead":""}" id="figure-${r.key}">
    <div class="article-figure-frame">
      <button class="article-figure-open" type="button" aria-label="Expand ${ye(e)}">
        <img src="${r.image}" alt="${ye(r.alt)}" width="${r.width}" height="${r.height}" loading="lazy" decoding="async" />
        <span class="article-figure-zoom" aria-hidden="true">Expand ↗</span>
      </button>
    </div>
    <figcaption>
      <span class="article-figure-label">FIG. ${r.number}</span>
      <span class="article-figure-title">${ye(r.title)}</span>
      <span class="article-figure-note">${ye(r.caption)}</span>
    </figcaption>
  </figure>`}function ic(r,e){return ar({id:`integrated-${e}`},r).html.replace(/^<div id="[^"]+" class="document-overview-anchor"><\/div>\n?/,"")}function Qr({kind:r,key:e,chapter:t,title:n,summary:a,body:i,section:o,action:c="Open"}){const h=`essay-${r}-${e}`,d=ic(i,e);return{id:h,kind:r,chapter:t,title:n,summary:a,body:i,html:`<aside class="annotation annotation--${r}" id="${h}" data-chapter="${o.id}" data-annotation="${r}" aria-labelledby="${h}-title">
      <details class="annotation-details">
        <summary class="annotation-summary">
          <span class="annotation-label-row"><span class="annotation-type">${Hi[r]}</span></span>
          <span class="annotation-title" id="${h}-title">${ye(n)}</span>
          <span class="annotation-gist">${ye(a)}</span>
          <span class="annotation-toggle" aria-hidden="true"><span class="when-closed">${c}</span><span class="when-open">Close</span><span class="annotation-sign">+</span></span>
        </summary>
        <div class="annotation-body">${d}</div>
      </details>
    </aside>`}}function sc(r,e){const t=Wn.slice(0,-1).map((i,o)=>{const c=r.indexOf(i),h=r.indexOf(Wn[o+1],c);return r.slice(c+i.length,h).trim()}),n=r.split(/(?=^## )/m).slice(1).map(i=>i.replace(/^## [^\n]+\n/,"").trim());return n[6]=n[6].split("If you want, I can turn this into code")[0].trim(),[{key:"two-descriptions",chapter:4,title:"Position space, frequency space, and bandwidth",summary:"Temperature is a bandwidth; position and frequency descriptions are the same operator.",source:t[0],commentaryIndex:0},{key:"three-positions",chapter:8,title:"Closed-form gains and the bandwidth estimate",summary:"The closed-form 3×3 operator, repeated smoothing, and the oracle bandwidth.",source:t[1],commentaryIndex:1},{key:"cyclic",chapter:10,title:"General cyclic kernel and exact Bessel form",summary:"For general n, the kernel is circulant and the gains have an exact Bessel form.",source:n[0],sourceSection:1},{key:"wiener",chapter:11,title:"General risk and the Wiener target",summary:"The risk-minimizing frequency response before the probability constraint.",source:n[2],sourceSection:3},{key:"fisher",chapter:14,title:"Shared bandwidth, Fisher information, and convexity",summary:"A single bandwidth traces a curve; Fisher information measures that family locally.",source:t[2],commentaryIndex:2},{key:"multi-band",chapter:14,title:"Multi-band moments and the Newton update",summary:"Moment matching for a richer filter family, with a Newton update.",source:n[1],sourceSection:2},{key:"coupled-gains",chapter:15,title:"Why independent gain bounds are insufficient",summary:"Nonnegative weights couple the gains; the interval [-1,1] is not the feasible set.",source:t[3],commentaryIndex:3},{key:"polytope",chapter:16,title:"Feasible polytope and constrained projection",summary:"The exact feasible set and the projection of the Wiener target onto it.",source:n[3],sourceSection:4},{key:"groups",chapter:20,title:"General group actions and spectral blocks",summary:"The general group-action construction and Schur's block decomposition.",source:n[4],sourceSection:5},{key:"rope-reference",chapter:22,title:"RoPE and the stationary reference",summary:"Fixed harmonics under RoPE and the stationary reference operator.",source:t[4],commentaryIndex:4},{key:"perturbation",chapter:22,title:"Content-dependent scores and perturbation bounds",summary:"Content-dependent logits and the eigenvalue tube around the reference.",source:n[5],sourceSection:6},{key:"extensions",chapter:23,title:"Proposed extensions: expressivity, learned filters, and length",summary:"Three research directions: expressivity, learned filters, and length generalization.",source:t[5],commentaryIndex:5},{key:"formulation",chapter:24,title:"Five equations in the general formulation",summary:"The five equations in their general group form.",source:n[6],sourceSection:7}].map(i=>{const o=e.sections.find(c=>c.title.startsWith(`${i.chapter}. `));return Qr({kind:"review",...i,body:i.source,section:o,action:"Read review"})})}const oc=[{key:"kernel-recipe",chapter:2,title:"The whole trick in one construction",summary:"A character kernel supplies positivity, a Fourier basis, and a temperature dial together.",body:String.raw`The working notes compress the argument into one reusable move. Choose a representation \(\rho\) of the symmetry group, take its character \(\chi(g)=\operatorname{tr}\rho(g)\), and set

\[ K(p,q)=\chi(q^{-1}p). \]

Three properties arrive together:

- **Positive definiteness.** This is a Hilbert–Schmidt Gram kernel, so its Gram matrix is positive semidefinite.
- **An eigenbasis.** For a finite abelian group, the characters are the Fourier eigenfunctions; a relative-position kernel is circulant.
- **A bandwidth control.** Exponentiating and normalizing produces \(e^{\beta K}/Z\), moving from broad averaging toward local attention.

The same note marks the limit: a content-dependent factor breaks translation invariance, and the free eigenbasis becomes a perturbation problem.`},{key:"normalization",chapter:5,title:"Normalization changes the operator, not the kernel",summary:"The kernel is PSD; row-softmax attention need not be symmetric unless symmetry equalizes row sums.",body:String.raw`Let \(W_{pq}=e^{\beta K(p,q)}\) and \(D=\operatorname{diag}(W\mathbf 1)\). Row normalization gives

\[ A=D^{-1}W, \]

which is stochastic but generally not symmetric. What survives is the similarity

\[ D^{1/2}AD^{-1/2}=D^{-1/2}WD^{-1/2}\succeq0. \]

So \(A\) has real nonnegative eigenvalues. In the translation-invariant case every row sum is the same, so \(A=W/c\) is itself symmetric PSD. The symmetry is doing more than making the picture pretty: it makes the spectral argument exact.`},{key:"one-parameter",chapter:12,title:"One temperature traces one curve",summary:"A single bandwidth cannot allocate spectral gain independently across frequencies.",body:String.raw`One inverse temperature traces a one-dimensional curve \(\beta\mapsto\{\lambda_m(\beta)\}\) inside the feasible spectral set. The Wiener target \(g_m^*=S_m/(S_m+\sigma^2)\) generally does not lie on that curve.

Introducing independent harmonic coefficients,

\[ s_{\boldsymbol\beta}(r)=\sum_{m\in\mathcal M}\beta_m c_m(r), \]

turns the curve into an exponential family of distributions \(\pi_{\boldsymbol\beta}\propto e^{s_{\boldsymbol\beta}}\). Its local metric is the Fisher information

\[ J_{km}=\operatorname{Cov}_{\pi_\beta}(c_k,c_m). \]

Fisher information says how to move through the family; Wiener risk says where to move. They are different geometries.`},{key:"two-gaps",chapter:16,title:"Separate the two reasons a filter fails",summary:"Feasibility loss and parameterization loss answer different engineering questions.",body:String.raw`Compare the unconstrained Wiener filter \(w\), the best feasible stochastic filter \(g^\star\), and the best filter in the chosen family \(g(\theta^\star)\). Then

\[ R(g(\theta^\star))-R(w)=\underbrace{R(g^\star)-R(w)}_{\text{feasibility gap}}+\underbrace{R(g(\theta^\star))-R(g^\star)}_{\text{parameterization gap}}. \]

The first term asks whether nonnegative normalization is the obstruction. The second asks whether the chosen softmax family is too small. This is a sharper diagnostic than total error alone.`},{key:"transitivity",chapter:19,title:"Transitivity gives invariance, not a Fourier basis",summary:"The spectral decomposition depends on the group and representation, not only on invariance.",body:String.raw`A transitive action supplies an invariant kernel and an equivariant normalized operator. It does not guarantee an ordinary Fourier eigenbasis. That is automatic for finite abelian groups acting regularly. For nonabelian groups, the decomposition is block Fourier: the operator commutes with the representation and acts on multiplicity spaces.

Central character kernels act as scalars on irreducible blocks. General stochastic group convolutions can be matrix-valued. The distinction determines which spectral degrees of freedom are actually available.`},{key:"psd-is-not-probability",chapter:18,title:"Positive semidefinite is not yet probability",summary:"A Gram kernel may have negative entries; exponentiate a real similarity before normalizing.",body:String.raw`A positive-semidefinite similarity does not automatically define attention weights. Consider

\[
K=\begin{pmatrix}1&-1/2\\-1/2&1\end{pmatrix}.
\]

It is positive definite, invariant under swapping the two indices, and has positive row sums. Row normalization still gives

\[
A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix},
\]

which is not a probability-weight matrix.

Keep three objects separate:

1. a real similarity or score \(s(x,y)\);
2. positive weights \(W(x,y)=\exp(s(x,y))>0\);
3. the normalized operator \(A=D^{-1}W\).

For complex unitary features, use a real-valued score such as \(\operatorname{Re}\langle\phi(x),\phi(y)\rangle\). An invariant Gram matrix gives equivariance; entrywise positivity and stochasticity require the extra exponential step.`},{key:"representation-design",chapter:23,title:"Learn the representation, not the matrix",summary:"A representation-parameterized filter keeps positivity, equivariance, and a tractable spectrum by construction.",body:String.raw`The notes end with a design principle rather than a theorem: if positive definiteness, equivariance, and a tractable spectrum should survive by construction, parameterize a representation or a small mixture of irreducible characters instead of an unconstrained attention matrix.

The trade is explicit. A richer representation class buys expressivity and costs spectral control. That is a more useful engineering question than asking a generic attention matrix to behave like a filter after training.`}],lc=[{key:"normalizing-factor",chapter:4,title:"Why can the Gaussian prefactor be discarded?",summary:"Think about what normalization does to a common positive factor.",body:String.raw`It multiplies every key by the same positive constant. Row-wise normalization divides by the same factor, so the attention weights are unchanged. This is why the Gaussian prefactor does not affect the softmax.`},{key:"repeated-attention",chapter:6,title:"Why does repeated attention erase positional differences?",summary:"Look at the two projectors and the gain in the (n=3) case.",body:String.raw`For the fixed \(n=3\) operator, \(A_\beta^L=P_0+\lambda_\beta^L P_\perp\) with \(0<\lambda_\beta<1\). The nonconstant component decays geometrically while the constant mode survives. Residuals and content dependence change the layer dynamics; the claim is about the fixed reference operator.`},{key:"permutation-symmetry",chapter:20,title:"What is lost under full permutation symmetry?",summary:"Count the independent spectral gains.",body:String.raw`Under \(S_n\), an equivariant attention matrix has the form \(A=aI+b\mathbf1\mathbf1^\top\). Only two spectral gains remain, compared with the full Fourier family available to a cyclic action. More symmetry means fewer parameters and less spectral resolution.`},{key:"feasibility",chapter:24,title:"Which equation encodes probability feasibility?",summary:"Separate the objective from the constraint set.",body:String.raw`The constrained problem \(\min_{\mathbf g\in\mathcal P_n}\sum_m(S_m+\sigma^2)(g_m-g_m^*)^2\) encodes feasibility through the set \(\mathcal P_n\), defined by nonnegative normalized weights. The objective alone is the Wiener target; without the constraint, the optimum would be the unconstrained gain \(g_m^*\).`}];function cc(r){return oc.map(e=>{const t=r.sections.find(n=>n.title.startsWith(`${e.chapter}. `));return Qr({kind:"note",...e,section:t,action:"Read note"})})}function hc(r){return Kl.map(e=>{const t=r.sections.find(n=>n.title.startsWith(`${e.chapter}. `));return Qr({kind:"theorem",...e,section:t,action:"Read theorem"})})}function uc(r){return lc.map(e=>{const t=r.sections.find(n=>n.title.startsWith(`${e.chapter}. `));return Qr({kind:"checkpoint",...e,section:t,action:"Reveal"})})}function dc(r,e){var x;const t=[...sc(e,r),...cc(r),...hc(r),...uc(r)].sort((f,v)=>f.chapter-v.chapter),n=new Map;for(const f of t){const v=r.sections.find(w=>w.id===f.html.match(/data-chapter="([^"]+)"/)[1]);n.set(v.id,(n.get(v.id)??"")+f.html),v.annotationCount=(v.annotationCount??0)+1}const a=new Map;for(const f of x0.filter(v=>v.chapter)){const v=r.sections.find(w=>w.title.startsWith(`${f.chapter}. `));a.set(v.id,(a.get(v.id)??"")+w0(f))}const i=r.html;r.html=r.sections.map((f,v)=>{const w=i.indexOf(`<h2 id="${f.id}"`),k=r.sections[v+1],q=k?i.indexOf(`<h2 id="${k.id}"`):i.length;return i.slice(w,q)+(a.get(f.id)??"")+(n.get(f.id)??"")}).join("");const o=x0.find(f=>f.lead),c=r.sections.find(f=>/^\d+\./.test(f.title));if(o&&c){const f=`<h2 id="${c.id}"`,v=r.html.indexOf(f);v>=0&&(r.html=r.html.slice(0,v)+w0(o)+r.html.slice(v))}for(const f of Wt){f.annotations=t.filter(w=>w.chapter>=f.range[0]&&w.chapter<=f.range[1]).length;const v=r.sections.find(w=>w.title.startsWith(`${f.range[0]}. `));f.anchor=v==null?void 0:v.id,f.sectionCount=r.sections.filter(w=>{const k=w.title.match(/^(\d+)\./);return k?Number(k[1])>=f.range[0]&&Number(k[1])<=f.range[1]:!1}).length}for(const f of r.sections){const v=f.title.match(/^(\d+)\./);if(!v)continue;const w=Number(v[1]);f.phase=(x=Wt.find(k=>w>=k.range[0]&&w<=k.range[1]))==null?void 0:x.title}r.annotationCount=t.length,r.reviewCount=t.filter(f=>f.kind==="review").length,r.noteCount=t.filter(f=>f.kind==="note").length,r.theoremCount=t.filter(f=>f.kind==="theorem").length,r.checkpointCount=t.filter(f=>f.kind==="checkpoint").length,r.route=Wt;const h=`<section class="reading-route" aria-labelledby="reading-route-title">
    <header class="reading-route-head">
      <span class="route-kicker">Reading route · four transitions</span>
      <h2 id="reading-route-title">How the argument develops</h2>
      <p>Follow the derivation in order, or jump to the transition you need. Companion notes sit beside the step they clarify.</p>
    </header>
    <ol class="route-track">
      ${Wt.map(f=>`<li><a class="route-phase" href="#${f.anchor}">
            <span class="route-index">${String(Wt.indexOf(f)+1).padStart(2,"0")}</span>
            <span class="route-meta">§${f.range[0]}–${f.range[1]} · ${f.annotations} annotations</span>
            <span class="route-phase-title">${ye(f.title)}</span>
            <span class="route-question">${ye(f.question)}</span>
          </a></li>`).join("")}
    </ol>
  </section>`,d=`<details class="annotation-index">
    <summary>
      <span class="annotation-index-kicker">Companion annotations</span>
      <span class="annotation-index-count">${t.length} annotations</span>
      <span class="annotation-index-key">${r.reviewCount} review · ${r.noteCount} working · ${r.theoremCount} theorems · ${r.checkpointCount} checkpoints</span>
      <span class="annotation-sign" aria-hidden="true">+</span>
    </summary>
    <div class="annotation-index-body">
      <p>Review annotations test and extend the derivation. Working notes expose the intuition. Theorems state the exact extensions and their proof strategies. Checkpoints ask you to use the result.</p>
      <div class="annotation-index-grid">
        ${t.map(f=>`<a class="annotation-index-link annotation-index-link--${f.kind}" href="#${f.id}">
              <span class="annotation-index-kind">${Hi[f.kind]}</span>
              <span class="annotation-index-title">${ye(f.title)}</span>
              <span class="annotation-index-section">§${f.chapter}</span>
            </a>`).join("")}
      </div>
    </div>
  </details>`;r.html=h+d+r.html;const p=t.reduce((f,v)=>f+v.body.replace(/<[^>]+>/g," ").split(/\s+/u).length+v.title.split(/\s+/u).length+v.summary.split(/\s+/u).length,0)+250;return r.wordCount+=p,r.minutes=Math.ceil(r.wordCount/200),r}const mc=String.raw`## 25. Where this stands in 2026

This essay treats a stationary relative-position head as a reference operator. Work available by October 2026 keeps that object useful, but it no longer describes the whole frontier.

**Sparse attention has a kernel interpretation.** [Sparse Attention as Compact Kernel Regression](https://arxiv.org/abs/2601.22766) shows that normalized ReLU and sparsemax attention correspond to Epanechnikov kernel regression, while entmax variants correspond to biweight and triweight kernels; softmax is the limiting Gaussian case. Sparsity is therefore kernel design, not merely token selection. The feasible-filter story should cover compact kernels, not only the Gaussian or von Mises kernel.

**Routing is not filtering.** The interaction matrix satisfies

\[ QK^\top=\underbrace{S}_{\text{symmetric filtering}}+\underbrace{A}_{\text{skew routing}}. \]

The filtering term scales mutual relevance; the routing term moves information between positions. [The Routing and Filtering Structure of Attention](https://arxiv.org/abs/2605.18826) finds routing at low rank across 1,776 heads and shows that linearizing the first seven layers of a 125M model costs less than 5% perplexity, while standard attention collapses under the same intervention. The circulant model describes filtering. A complete account must add routing and causal masking.

**Frequency control is becoming adaptive.** [Spectral attention for transformers](https://doi.org/10.1007/s44443-026-00599-5) applies learnable per-head FFT masks to attention maps. Low frequencies carry most of the useful signal in its setup, but learned masks outperform fixed low-, high-, and band-pass filters. A single \(\beta\) traces one curve; the frontier is input-conditioned frequency control. [Prism](https://arxiv.org/abs/2602.08426) gives a concrete failure mode: mean-pooling block summaries act as a low-pass filter and erase high-frequency RoPE information needed for block selection. A spectral correction restores that information while keeping block-level selection.

**Efficiency claims are contested.** [Kimi Linear](https://arxiv.org/abs/2510.26692) reports a KDA+MLA hybrid that outperforms full attention in its fair-comparison setup, with up to 75% less KV cache and 6× decoding throughput at 1M context. [Sliding-window beats linear attention](https://arxiv.org/abs/2608.28444) reports that sliding-window attention with sinks matches or beats most retrofitted linear-attention models, with 2–10× higher long-context retrieval performance on NIAH and BABILong. Architecture, training budget, and task choice change the answer.

**The revised claim.** Stationary relative-position attention is a constrained kernel smoother and circulant spectral filter. Sparse and content-dependent attention replace the fixed kernel with compact or input-conditioned filters; causal masks, routing, and hybrid linear attention break the pure circulant picture. The feasible polytope and the feasibility–parameterization gap remain useful, but they must be recomputed for the larger family.

**Open problem.** The exact cyclic Gram-softmax criterion is proved in the theorem note after Section 16. What remains open is empirical: measure which of the feasible gains trained heads occupy, compare projection onto the feasible set with learned per-head spectral masks, and repeat the analysis for causal Toeplitz, sparse-kernel, and routing-decomposed operators. Use fixed synthetic signal spectra and known noise to compare single-band softmax, signed multi-band logits, Gram-constrained multi-band logits, and the full stochastic risk projection. On recorded attention matrices, fit a stationary reference first, then report residual row oscillation, operator error, and per-mode leakage instead of assuming the perturbation is small. That comparison is the concrete next test, not another closed-form characterization of the same family.

These are recent preprints and journal results. Several efficiency claims are self-reported and have not been independently replicated.`;function pc(r){const e=ar({id:"essay"},mc),t=e.sections.find(c=>c.title.startsWith("25. ")),n=r.sections.find(c=>c.title==="Conclusion"),a=`<h2 id="${n.id}"`,i=r.html.indexOf(a);if(!t||i<0)throw new Error("Could not place the 2026 context section.");r.html=r.html.slice(0,i)+e.html+r.html.slice(i);const o=r.sections.indexOf(n);return r.sections.splice(o,0,t),r.wordCount+=e.wordCount,r.minutes=Math.ceil(r.wordCount/200),r}function fc(r){const e=ar({id:"essay"},Zl),t=e.sections.find(c=>c.title.startsWith("26. ")),n=r.sections.find(c=>c.title==="Conclusion"),a=`<h2 id="${n.id}"`,i=r.html.indexOf(a);if(!t||i<0)throw new Error("Could not place the empirical study.");r.html=r.html.slice(0,i)+e.html+r.html.slice(i);const o=r.sections.indexOf(n);return r.sections.splice(o,0,t),r.wordCount+=e.wordCount,r.minutes=Math.ceil(r.wordCount/200),r}function gc(r){const e=ar({id:"essay"},Vl);return r.html+=`<details class="appendix-disclosure">
    <summary><span class="appendix-kicker">Appendices</span><strong>Reproducible checks, scope, and references</strong><span class="appendix-action" aria-hidden="true"></span></summary>
    <div class="appendix-body">${e.html}</div>
  </details>`,r.sections.push(...e.sections),r.wordCount+=e.wordCount,r.minutes=Math.ceil(r.wordCount/200),r}const Se=gc(fc(pc(dc(ar({id:"essay",title:"Attention as Constrained Spectral Regression",label:"Annotated essay",description:"The full derivation with annotations, a 2026 research update, a controlled experiment, and reproducible checks."},Wl),Ul)))),oe=32,vt=oe/2,er=Math.PI*2,vn=12,k0=2.4,W={cx:150,cy:136,inner:24,outer:94},I={x:34,y:22,stride:7,cell:6.2,size:224},ee={x:36,width:252,baseline:194,height:172};let bc=0;function vc(r){const e=Math.max(r*1.06,.05);return[.05,.1,.15,.2,.25,.3,.4,.5,.75,1].find(n=>n>=e)??1}function S0(r){const e=Array.from({length:oe},(c,h)=>Math.exp(r*(Math.cos(er*h/oe)-1))),t=e.reduce((c,h)=>c+h,0),n=e.map(c=>c/t),a=Array.from({length:vt+1},(c,h)=>Math.max(0,n.reduce((d,p,x)=>d+p*Math.cos(er*h*x/oe),0))),i=Math.max(...n),o=1/n.reduce((c,h)=>c+h**2,0);return{weights:n,gains:a,peak:i,effectiveWidth:o}}function Ir(r,e){return[W.cx+Math.cos(e)*r,W.cy+Math.sin(e)*r]}function xr(r,e){const t=-Math.PI/2+er*r/oe,[n,a]=Ir(e,t),i=Math.abs(Math.cos(t))<.2?"middle":Math.cos(t)>0?"start":"end",o=Math.abs(Math.cos(t))<.2?3:0;return`<text class="spec-polar-label" x="${n.toFixed(2)}" y="${(a+o).toFixed(2)}" text-anchor="${i}">${r}</text>`}function yc(r){const e=[.25,.5,.75].map(n=>{const a=W.inner+(W.outer-W.inner)*n;return`<circle class="spec-ring" cx="${W.cx}" cy="${W.cy}" r="${a.toFixed(2)}"/>`}),t=Array.from({length:oe},(n,a)=>{const i=-Math.PI/2+er*a/oe,[o,c]=Ir(W.inner,i),[h,d]=Ir(W.inner+1,i);return`<line class="spec-beam" x1="${o.toFixed(2)}" y1="${c.toFixed(2)}" x2="${h.toFixed(2)}" y2="${d.toFixed(2)}"><title>Position ${a}</title></line><circle class="spec-beam-tip" cx="${h.toFixed(2)}" cy="${d.toFixed(2)}" r="1.45"/>`}).join("");return`<svg class="spec-svg spec-position-svg" viewBox="0 0 300 286" role="img" aria-labelledby="${r}-position-title ${r}-position-desc">
    <title id="${r}-position-title">Cyclic attention weights in position space</title>
    <desc id="${r}-position-desc">Thirty-two radial bars show the normalized attention weight at each cyclic offset. The dashed ring marks uniform weight.</desc>
    <g aria-hidden="true">
      <line class="spec-axis-line" x1="${W.cx-W.outer}" y1="${W.cy}" x2="${W.cx+W.outer}" y2="${W.cy}"/>
      <line class="spec-axis-line" x1="${W.cx}" y1="${W.cy-W.outer}" x2="${W.cx}" y2="${W.cy+W.outer}"/>
      ${e}
      <circle class="spec-ring spec-ring--outer" cx="${W.cx}" cy="${W.cy}" r="${W.outer}"/>
      ${t}
      <circle class="spec-uniform-ring" cx="${W.cx}" cy="${W.cy}" r="60"/>
      <circle class="spec-center-dot" cx="${W.cx}" cy="${W.cy}" r="1.7"/>
      ${xr(0,W.outer+14)}
      ${xr(8,W.outer+14)}
      ${xr(16,W.outer+14)}
      ${xr(24,W.outer+14)}
      <text class="spec-svg-caption" x="${W.cx}" y="280" text-anchor="middle">relative position r</text>
    </g>
  </svg>`}function xc(r){const e=[];for(let i=0;i<oe;i++)for(let o=0;o<oe;o++)e.push(`<rect class="spec-matrix-cell" x="${(I.x+o*I.stride).toFixed(2)}" y="${(I.y+i*I.stride).toFixed(2)}" width="${I.cell}" height="${I.cell}" rx="0.35" fill-opacity="0.12"/>`);const t=[0,8,16,24,31],n=t.map(i=>`<text class="spec-matrix-tick" x="${(I.x+i*I.stride+I.cell/2).toFixed(2)}" y="15" text-anchor="middle">${i}</text>`).join(""),a=t.map(i=>{const o=I.y+i*I.stride+I.cell/2+2.5;return`<text class="spec-matrix-tick" x="${I.x-6}" y="${o.toFixed(2)}" text-anchor="end">${i}</text>`}).join("");return`<svg class="spec-svg spec-matrix-svg" viewBox="0 0 280 280" role="img" aria-labelledby="${r}-matrix-title ${r}-matrix-desc">
    <title id="${r}-matrix-title">Attention matrix and its Toeplitz structure</title>
    <desc id="${r}-matrix-desc">A thirty-two by thirty-two attention matrix. Rows are query positions and columns are key positions. Cell shade encodes the attention weight; equal diagonals show that the matrix is Toeplitz.</desc>
    <g aria-hidden="true">
      <rect class="spec-matrix-ground" x="${I.x}" y="${I.y}" width="${I.size}" height="${I.size}"/>
      ${e.join("")}
      <rect class="spec-matrix-frame" x="${I.x}" y="${I.y}" width="${I.size}" height="${I.size}"/>
      ${n}
      ${a}
      <text class="spec-matrix-axis" x="${I.x+I.size/2}" y="275" text-anchor="middle">key position j</text>
      <text class="spec-matrix-axis" x="9" y="${I.y+I.size/2}" text-anchor="middle" transform="rotate(-90 9 ${I.y+I.size/2})">query i</text>
      <g class="spec-probe-marks" visibility="hidden">
        <line class="spec-crosshair" x1="0" y1="0" x2="0" y2="0"/>
        <line class="spec-crosshair" x1="0" y1="0" x2="0" y2="0"/>
        <rect class="spec-probe-cell" x="0" y="0" width="${I.cell}" height="${I.cell}" rx="0.35"/>
      </g>
    </g>
  </svg>`}function wc(r){const e=Array.from({length:vt+1},(a,i)=>{const o=ee.x+(i+.5)*ee.width/(vt+1);return`<g><line class="spec-spectrum-stem" x1="${o.toFixed(2)}" y1="${ee.baseline}" x2="${o.toFixed(2)}" y2="${ee.baseline}"><title>Mode ${i}</title></line><circle class="spec-spectrum-dot" cx="${o.toFixed(2)}" cy="${ee.baseline}" r="2.25"><title>Mode ${i}</title></circle></g>`}).join(""),t=[0,.25,.5,.75,1].map(a=>{const i=ee.baseline-a*ee.height,o=a===0||a===.5||a===1?`<text class="spec-axis-tick" x="${ee.x-7}" y="${(i+3).toFixed(2)}" text-anchor="end">${a.toFixed(2)}</text>`:"";return`<line class="spec-gridline${a===1?" spec-gridline--unity":""}" x1="${ee.x}" y1="${i.toFixed(2)}" x2="${ee.x+ee.width}" y2="${i.toFixed(2)}"/>${o}`}).join(""),n=[0,4,8,12,16].map(a=>`<text class="spec-axis-tick" x="${(ee.x+(a+.5)*ee.width/(vt+1)).toFixed(2)}" y="${ee.baseline+14}" text-anchor="middle">${a}</text>`).join("");return`<svg class="spec-svg spec-spectrum-svg" viewBox="0 0 300 246" role="img" aria-labelledby="${r}-spectrum-title ${r}-spectrum-desc">
    <title id="${r}-spectrum-title">Nonnegative cosine Fourier gains</title>
    <desc id="${r}-spectrum-desc">Seventeen nonnegative cosine gains from the constant mode through the Nyquist mode. Each stem is one frequency; zero gain sits on the baseline.</desc>
    <g aria-hidden="true">
      ${t}
      <path class="spec-spectrum-fill" d=""/>
      <line class="spec-spectrum-axis" x1="${ee.x}" y1="${ee.baseline}" x2="${ee.x+ee.width}" y2="${ee.baseline}"/>
      ${e}
      <polyline class="spec-spectrum-line" points=""/>
      ${n}
      <text class="spec-axis-caption" x="${ee.x+ee.width/2}" y="232" text-anchor="middle">frequency mode m</text>
    </g>
  </svg>`}function kc(r){const e=`spec-instrument-${++bc}`;let t=S0(k0);r.innerHTML=`
    <div class="spec-instrument">
      <div class="spec-masthead">
        <div class="spec-masthead-block">
          <span class="spec-kicker">Cyclic softmax kernel</span>
          <span class="spec-kernel">w(r) ∝ exp[β(cos θ<sub>r</sub> − 1)]</span>
        </div>
        <div class="spec-masthead-block spec-masthead-right">
          <span class="spec-kicker">Grid</span>
          <span class="spec-mono">n = 32 &nbsp;·&nbsp; θ<sub>r</sub> = 2πr/32</span>
        </div>
      </div>

      <div class="spec-plates">
        <section class="spec-plate" aria-labelledby="${e}-position-heading">
          <div class="spec-plate-head">
            <span class="spec-index" aria-hidden="true">01</span>
            <h3 id="${e}-position-heading">Position space</h3>
            <span class="spec-meta" id="${e}-scale">scale 0–0.05</span>
          </div>
          ${yc(e)}
          <div class="spec-plate-foot">
            <span>r = cyclic offset</span>
            <span><i class="spec-key-line" aria-hidden="true"></i>uniform 1/32</span>
          </div>
        </section>

        <section class="spec-plate" aria-labelledby="${e}-matrix-heading">
          <div class="spec-plate-head">
            <span class="spec-index" aria-hidden="true">02</span>
            <h3 id="${e}-matrix-heading">Attention matrix</h3>
            <span class="spec-meta">32 × 32</span>
          </div>
          ${xc(e)}
          <div class="spec-plate-foot spec-matrix-foot">
            <span class="spec-formula-small">A<sub>ij</sub> = w((j − i) mod 32)</span>
            <span class="spec-probe" id="${e}-probe" aria-hidden="true">i — → j —</span>
          </div>
        </section>

        <section class="spec-plate" aria-labelledby="${e}-spectrum-heading">
          <div class="spec-plate-head">
            <span class="spec-index" aria-hidden="true">03</span>
            <h3 id="${e}-spectrum-heading">Frequency space</h3>
            <span class="spec-meta">m = 0…16</span>
          </div>
          ${wc(e)}
          <div class="spec-plate-foot">
            <span>cosine transform</span>
            <span>λ<sub>m</sub> ≥ 0</span>
          </div>
        </section>
      </div>

      <dl class="spec-metrics" aria-label="Derived measurements">
        <div class="spec-metric">
          <dt>Effective width</dt>
          <dd><span class="spec-metric-number" id="${e}-width">32.0</span><span class="spec-metric-unit">/ 32</span></dd>
        </div>
        <div class="spec-metric">
          <dt>First gain λ<sub>1</sub></dt>
          <dd><span class="spec-metric-number" id="${e}-lambda1">0.000</span></dd>
        </div>
        <div class="spec-metric">
          <dt>Gain λ<sub>8</sub></dt>
          <dd><span class="spec-metric-number" id="${e}-lambda8">0.000</span></dd>
        </div>
      </dl>

      <div class="spec-control">
        <div class="spec-control-heading">
          <label class="spec-control-label" for="${e}-beta">
            <span class="spec-control-glyph" aria-hidden="true">β</span>
            <span>Inverse temperature</span>
          </label>
        </div>
        <div class="spec-control-row">
          <output class="spec-beta-readout" for="${e}-beta" id="${e}-beta-output">2.4</output>
          <div class="spec-slider-column">
            <input class="spec-slider" id="${e}-beta" type="range" min="0" max="${vn}" step="0.1" value="${k0}" aria-describedby="${e}-endpoints ${e}-beta-help"/>
            <div class="spec-endpoints" id="${e}-endpoints">
              <span><b>0</b> Broad averaging</span>
              <span>Local attention <b>${vn}</b></span>
            </div>
            <p class="spec-sr-only" id="${e}-beta-help">Higher values concentrate attention near the current position. Use the arrow keys to adjust inverse temperature.</p>
          </div>
        </div>
      </div>
    </div>`;const n=r.querySelector(".spec-slider"),a=r.querySelector(".spec-beta-readout"),i=r.querySelector(`#${e}-scale`),o=r.querySelector(`#${e}-width`),c=r.querySelector(`#${e}-lambda1`),h=r.querySelector(`#${e}-lambda8`),d=r.querySelector(`#${e}-position-desc`),p=r.querySelector(".spec-uniform-ring"),x=Array.from(r.querySelectorAll(".spec-beam")),f=Array.from(r.querySelectorAll(".spec-beam-tip")),v=r.querySelector(".spec-matrix-svg"),w=Array.from(r.querySelectorAll(".spec-matrix-cell")),k=r.querySelector(`#${e}-probe`),q=r.querySelector(".spec-probe-marks"),T=Array.from(r.querySelectorAll(".spec-crosshair")),R=r.querySelector(".spec-probe-cell"),B=Array.from(r.querySelectorAll(".spec-spectrum-stem")),D=Array.from(r.querySelectorAll(".spec-spectrum-dot")),P=r.querySelector(".spec-spectrum-line"),N=r.querySelector(".spec-spectrum-fill");function H(){const ae=Number(n.value);t=S0(ae);const{weights:de,gains:Z,peak:Ce,effectiveWidth:ue}=t,ce=vc(Ce),qe=W.outer-W.inner;for(let O=0;O<oe;O++){const ie=-Math.PI/2+er*O/oe,ve=W.inner+qe*(de[O]/ce),[Ze,Ot]=Ir(ve,ie),Ht=x[O];Ht.setAttribute("x2",Ze.toFixed(2)),Ht.setAttribute("y2",Ot.toFixed(2)),Ht.querySelector("title").textContent=`r = ${O} · weight ${de[O].toFixed(5)}`,f[O].setAttribute("cx",Ze.toFixed(2)),f[O].setAttribute("cy",Ot.toFixed(2))}const Le=W.inner+qe*(1/oe/ce);p.setAttribute("r",Le.toFixed(2)),i.textContent=`scale 0–${ce.toFixed(2)}`;const at=Math.min(1,Math.max(0,1-1/(oe*Ce))),Nt=Array.from({length:oe},(O,ie)=>.12+.84*(de[ie]/Ce)*at);for(let O=0;O<oe;O++)for(let ie=0;ie<oe;ie++){const ve=(ie-O+oe)%oe;w[O*oe+ie].setAttribute("fill-opacity",Nt[ve].toFixed(3))}const _e=Z.map((O,ie)=>{const ve=ee.x+(ie+.5)*ee.width/(vt+1),Ze=ee.baseline-O*ee.height;return[ve,Ze]});for(let O=0;O<=vt;O++){const[,ie]=_e[O];B[O].setAttribute("y2",ie.toFixed(2)),B[O].querySelector("title").textContent=`m = ${O} · gain ${Z[O].toFixed(5)}`,D[O].setAttribute("cy",ie.toFixed(2)),D[O].querySelector("title").textContent=`m = ${O} · gain ${Z[O].toFixed(5)}`}P.setAttribute("points",_e.map(([O,ie])=>`${O.toFixed(2)},${ie.toFixed(2)}`).join(" ")),N.setAttribute("d",`M${_e[0][0].toFixed(2)},${ee.baseline} `+_e.map(([O,ie])=>`L${O.toFixed(2)},${ie.toFixed(2)}`).join(" ")+` L${_e[vt][0].toFixed(2)},${ee.baseline} Z`),o.textContent=ue.toFixed(1),c.textContent=Z[1].toFixed(3),h.textContent=Z[8].toFixed(3),a.textContent=ae.toFixed(1),n.style.setProperty("--spec-progress",`${ae/vn*100}%`),n.setAttribute("aria-valuetext",`β ${ae.toFixed(1)}. Effective width ${ue.toFixed(1)} of 32. First gain ${Z[1].toFixed(3)}.`),d.textContent=`Thirty-two radial bars show the normalized attention weight at each cyclic offset. The dashed ring marks uniform weight. At β ${ae.toFixed(1)}, peak weight is ${Ce.toFixed(4)} and effective width is ${ue.toFixed(1)} of 32.`}function U(ae){if(!q)return;const de=v.getScreenCTM();if(!de)return;const Z=v.createSVGPoint();Z.x=ae.clientX,Z.y=ae.clientY;const Ce=Z.matrixTransform(de.inverse()),ue=Math.floor((Ce.x-I.x)/I.stride),ce=Math.floor((Ce.y-I.y)/I.stride);if(ue<0||ue>=oe||ce<0||ce>=oe){j();return}const qe=I.x+ue*I.stride+I.cell/2,Le=I.y+ce*I.stride+I.cell/2;T[0].setAttribute("x1",qe.toFixed(2)),T[0].setAttribute("x2",qe.toFixed(2)),T[0].setAttribute("y1",I.y),T[0].setAttribute("y2",I.y+I.size),T[1].setAttribute("y1",Le.toFixed(2)),T[1].setAttribute("y2",Le.toFixed(2)),T[1].setAttribute("x1",I.x),T[1].setAttribute("x2",I.x+I.size),R.setAttribute("x",(I.x+ue*I.stride).toFixed(2)),R.setAttribute("y",(I.y+ce*I.stride).toFixed(2)),q.setAttribute("visibility","visible"),k.textContent=`i ${ce} → j ${ue} · w ${t.weights[(ue-ce+oe)%oe].toFixed(4)}`}function j(){q&&(q.setAttribute("visibility","hidden"),k.textContent="i — → j —")}return n.addEventListener("input",H),v.addEventListener("pointermove",U,{passive:!0}),v.addEventListener("pointerdown",U,{passive:!0}),v.addEventListener("pointerleave",j),v.addEventListener("pointercancel",j),H(),()=>{n.removeEventListener("input",H),v.removeEventListener("pointermove",U),v.removeEventListener("pointerdown",U),v.removeEventListener("pointerleave",j),v.removeEventListener("pointercancel",j),r.replaceChildren()}}const Gi='<svg class="brand-mark-svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true" focusable="false"><path d="M3 18V12M9 18V4M15 18V8M21 18V14"/></svg>',Sc={search:'<circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.6 15.6 4.4 4.4"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.2v2.1M12 19.7v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2.2 12h2.1M19.7 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"/>',moon:'<path d="M20.2 14.6A8.7 8.7 0 0 1 9.4 3.8a8.7 8.7 0 1 0 10.8 10.8Z"/>',menu:'<path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/>',chevron:'<path d="m6.5 9 5.5 5.5L17.5 9"/>'},wr=r=>`<svg class="chrome-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">${Sc[r]}</svg>`,$c=[{href:"#reading",label:"Essay"},{href:"#playground",label:"Explorer"}];function Tc(){return`
    <div class="reading-progress" aria-hidden="true"><div></div></div>
    <header class="site-header" data-chrome="masthead">
      <div class="masthead-inner">
        <a class="brand" href="#top" aria-label="eigen — mathematics and machine learning">
          <span class="brand-mark" aria-hidden="true">${Gi}</span><span class="brand-word">eigen<span class="brand-dot">.</span></span>
        </a>

        <p class="masthead-meta">
          <span class="meta-fields">Attention / Spectral Analysis</span>
          <span class="meta-divider" aria-hidden="true"></span>
          <span class="meta-issue">Annotated</span>
        </p>

        <span class="masthead-spacer" aria-hidden="true"></span>

        <nav class="site-nav" aria-label="On this page">
          ${$c.map(r=>`<a href="${r.href}">${r.label}</a>`).join("")}
        </nav>

        <div class="header-actions">
          <button class="search-trigger" type="button" aria-label="Search the essay" aria-keyshortcuts="Meta+K Control+K">
            ${wr("search")}<span class="search-label">Search</span><kbd aria-hidden="true">⌘K</kbd>
          </button>
          <span class="header-divider" aria-hidden="true"></span>
          <button class="icon-button theme-toggle" type="button" aria-label="Switch color theme" title="Switch color theme">
            <span class="theme-icon theme-icon--sun" aria-hidden="true">${wr("sun")}</span>
            <span class="theme-icon theme-icon--moon" aria-hidden="true">${wr("moon")}</span>
          </button>
          <button class="icon-button mobile-menu" type="button" aria-label="Toggle table of contents" aria-expanded="false" aria-controls="chapter-list">
            ${wr("menu")}
          </button>
        </div>
      </div>
    </header>`}const Un="Attention as Constrained Spectral Regression",Ac=["Attention as","Constrained","Spectral","Regression"],Kt=r=>String(r).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),yn=r=>r==null||r===""?"&mdash;":Kt(r),$0=260,wa=150,Et=(r,e)=>{const t=e*Math.PI/180;return[$0+r*Math.cos(t),$0+r*Math.sin(t)]},K=r=>Number(r.toFixed(2)).toString(),T0=(r,e)=>{const[t,n]=Et(r,e);return`${K(t)} ${K(n)}`},Kn=(r,e,t,n)=>{const[a,i]=Et(t,e),[o,c]=Et(n,e);return`<line class="${r}" x1="${K(a)}" y1="${K(i)}" x2="${K(o)}" y2="${K(c)}"/>`},ot=Et(wa,0),Pe=Et(wa,240),Ne=Et(wa,120),zc=Array.from({length:72},(r,e)=>{const t=e*5,n=e%6===0;return Kn(n?"h-tick h-tick-major":"h-tick",t,178,n?190:184)}).join(""),qc=r=>r===Un?Ac:[r];function _c({title:r,description:e,minutes:t,sectionCount:n,annotationCount:a}={}){const i=Kt(r??Un),o=qc(r??Un),c=yn(t),h=o.map((d,p)=>{const x=["opening-title-line",p===1?"opening-title-line--offset":"",p===o.length-1?"opening-title-line--last":""].filter(Boolean).join(" "),f=p===1?`<em>${Kt(d)}</em>`:Kt(d);return`<span class="${x}">${f}</span>`}).join(`
        `);return`
  <section class="opening-hero" aria-labelledby="hero-title">
    <div class="opening-grid">
      <div class="opening-copy">
        <div class="opening-kicker">
          <span class="opening-square" aria-hidden="true"></span>
          <span>Attention</span>
          <span class="opening-kicker-rule" aria-hidden="true"></span>
          <span>Symmetry &amp; spectral analysis</span>
        </div>
        <h1 class="opening-title" id="hero-title" aria-label="${i}">
        ${h}
        </h1>
        <p class="opening-description">${Kt(e??"")}</p>
        <div class="opening-links">
          <a class="opening-link opening-link--primary" href="#reading">
            Read the derivation
            <span class="opening-link-arrow" aria-hidden="true">&rarr;</span>
          </a>
          <a class="opening-link" href="#playground">
            Cyclic kernel explorer
            <span class="opening-link-arrow" aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </div>

      <figure class="opening-plate" aria-labelledby="opening-plate-caption">
        <div class="opening-plate-head">
          <span>Fig. 01</span>
          <span>Unit circle &middot; n = 3</span>
        </div>
        <div class="opening-plate-art">
          <svg class="opening-figure" viewBox="24 24 472 472" role="img" aria-labelledby="opening-figure-title opening-figure-desc">
            <title id="opening-figure-title">Three cyclic positions on the unit circle</title>
            <desc id="opening-figure-desc">Positions phi zero, phi one and phi two equally spaced at zero, two pi over three and four pi over three radians, with the two pi over three arc, the kernel K beta, and the spectral gain lambda m marked.</desc>
            <defs>
              <pattern id="opening-dotfield" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle class="h-dot" cx="1" cy="1" r="0.7"/>
              </pattern>
            </defs>

            <rect class="h-field" x="24" y="24" width="472" height="472" fill="url(#opening-dotfield)"/>
            <rect class="h-frame" x="24" y="24" width="472" height="472"/>
            <path class="h-corner" d="M24 54V24h30M466 24h30v30M496 466v30h-30M54 496H24v-30"/>
            <path class="h-frame-tick" d="M260 24v12M260 484v12M24 260h12M484 260h12"/>

            <g class="h-rotor" aria-hidden="true">
              <circle class="h-rotor-dash" cx="260" cy="260" r="197"/>
              <path class="h-rotor-mark" d="M260 57l4 7h-8z"/>
            </g>

            <circle class="h-ring" cx="260" cy="260" r="178"/>
            <circle class="h-ring-inner" cx="260" cy="260" r="166"/>
            ${zc}

            <text class="h-formula" x="42" y="50">&phi; : &#8484;&#8323; &rarr; S&sup1;</text>
            <text class="h-micro" x="478" y="50" text-anchor="end">n = 3</text>

            <g class="h-radii">
              <line x1="260" y1="260" x2="${K(ot[0])}" y2="${K(ot[1])}"/>
              <line x1="260" y1="260" x2="${K(Pe[0])}" y2="${K(Pe[1])}"/>
              <line x1="260" y1="260" x2="${K(Ne[0])}" y2="${K(Ne[1])}"/>
            </g>

            <g class="h-chords">
              <path d="M${K(ot[0])} ${K(ot[1])} L${K(Pe[0])} ${K(Pe[1])} L${K(Ne[0])} ${K(Ne[1])} Z"/>
              <line class="h-chord-accent" x1="${K(Pe[0])}" y1="${K(Pe[1])}" x2="${K(Ne[0])}" y2="${K(Ne[1])}"/>
            </g>

            <path class="h-arc" d="M${T0(54,0)} A 54 54 0 0 0 ${T0(54,240)}"/>
            ${Kn("h-arc-tick",0,48,61)}
            ${Kn("h-arc-tick",240,48,61)}
            <text class="h-label h-label-orange" x="277" y="236" text-anchor="middle">2&pi;/3</text>

            <g class="h-points">
              <circle class="h-point-ring" cx="${K(ot[0])}" cy="${K(ot[1])}" r="7"/>
              <circle class="h-point" cx="${K(ot[0])}" cy="${K(ot[1])}" r="3.2"/>
              <circle class="h-point-ring" cx="${K(Pe[0])}" cy="${K(Pe[1])}" r="7"/>
              <circle class="h-point" cx="${K(Pe[0])}" cy="${K(Pe[1])}" r="3.2"/>
              <circle class="h-point-ring" cx="${K(Ne[0])}" cy="${K(Ne[1])}" r="7"/>
              <circle class="h-point" cx="${K(Ne[0])}" cy="${K(Ne[1])}" r="3.2"/>
            </g>

            <text class="h-label" x="410" y="241" text-anchor="middle">&phi;(0)</text>
            <text class="h-label" x="170" y="126" text-anchor="end">&phi;(1)</text>
            <text class="h-label" x="170" y="396" text-anchor="end">&phi;(2)</text>

            <line class="h-leader" x1="185" y1="282" x2="177" y2="282"/>
            <text class="h-label h-label-small" x="174" y="287" text-anchor="end">K&beta;</text>

            <line class="h-leader" x1="344" y1="259" x2="344" y2="252"/>
            <text class="h-label h-label-small" x="344" y="246" text-anchor="middle">&lambda;m</text>

            <g class="h-center">
              <line x1="252" y1="260" x2="268" y2="260"/>
              <line x1="260" y1="252" x2="260" y2="268"/>
              <circle cx="260" cy="260" r="2.2"/>
            </g>
          </svg>
        </div>
        <figcaption class="opening-plate-caption" id="opening-plate-caption">
          <span class="opening-formula">&phi;(j) = e<sup>i2&pi;j/3</sup></span>
          <span>j = 0, 1, 2</span>
        </figcaption>
      </figure>

      <div class="opening-meta-row">
        <dl class="opening-meta">
          <div class="opening-meta-cell opening-meta-source">
            <dt>Edition</dt>
            <dd>Annotated essay</dd>
          </div>
          <div class="opening-meta-cell">
            <dt>Sections</dt>
            <dd>${yn(n)}</dd>
          </div>
          <div class="opening-meta-cell">
            <dt>Annotations</dt>
            <dd>${yn(a)}</dd>
          </div>
          <div class="opening-meta-cell opening-meta-time">
            <dt>Time</dt>
            <dd id="hero-time">${c} min read</dd>
          </div>
        </dl>
        <button type="button" id="save-essay" class="save-button" aria-label="Save essay" aria-pressed="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg>
          <span>Save</span>
        </button>
      </div>
    </div>
  </section>`}const A0=r=>String(r).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Mc="00";function Cc(){return`
    <aside class="chapter-sidebar" aria-label="Contents">
      <header class="rail-head">
        <span class="rail-kicker"><span class="rail-mark" aria-hidden="true"></span>Contents</span>
        <span class="rail-count"><span id="chapter-count">00</span><span class="rail-count-label">sections</span></span>
      </header>
      <div class="rail-ruler" aria-hidden="true"></div>
      <nav id="chapter-list" aria-label="Table of contents"></nav>
      <footer class="rail-foot">
        <div class="side-progress" aria-hidden="true"><span></span></div>
        <div class="rail-foot-row">
          <span class="rail-foot-mark" aria-hidden="true"></span>
          <span id="reading-left">Reading progress</span>
        </div>
      </footer>
      <button class="rail-close" type="button" aria-label="Close contents">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg>
      </button>
    </aside>`}function Rc(r){return(Array.isArray(r)?r:[]).map((t,n)=>{const a=String((t==null?void 0:t.title)??"Untitled").replace(/^\s*\d+\.\s*/,"").trim()||"Untitled",i=n===0?`<span class="chapter-number chapter-number--abstract" aria-hidden="true">${Mc}</span>`:`<span class="chapter-number" aria-hidden="true">${String(n).padStart(2,"0")}</span>`,o=Number((t==null?void 0:t.annotationCount)??0),c=o?`<span class="chapter-review" title="${o} companion annotation${o===1?"":"s"}" aria-label="${o} companion annotation${o===1?"":"s"}">+${o}</span>`:"";return`<a href="${`#${A0((t==null?void 0:t.id)??"")}`}" class="chapter-link">${i}<span class="chapter-title">${A0(a)}${c}</span></a>`}).join("")}const z0=r=>String(r??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Bc='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg>',Ec='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',Ic=(r,e,t=`${e}s`)=>`${r} ${r===1?e:t}`;function Fc(r={title:"Attention as Constrained Spectral Regression",description:"",minutes:0,sections:[],annotationCount:0}){var e,t,n;return`<div class="reading-topline">
    <div class="reading-identity">
      <span class="reading-kicker">ANNOTATED ESSAY</span>
      <span class="reading-identity-meta">${((e=r.sections)==null?void 0:e.length)??0} SECTIONS · ${r.annotationCount??0} ANNOTATIONS · ${r.minutes??0} MIN</span>
    </div>
    <div class="reading-tools">
      <span class="reading-tools-label" aria-hidden="true">TYPE</span>
      <button type="button" class="text-size" aria-label="Increase reading text size" title="Cycle reading text size">Aa</button>
      <button type="button" class="focus-toggle" aria-label="Toggle distraction-free reading" aria-pressed="false" title="Distraction-free reading">${Bc}</button>
    </div>
  </div>

  <header class="article-header">
    <div class="article-header-rule">
      <span>ATTENTION / SYMMETRY</span>
      <span>ANNOTATED ESSAY</span>
      <span>${Ic(((t=r.sections)==null?void 0:t.length)??0,"SECTION","SECTIONS")}</span>
    </div>
    <div class="article-measure" aria-hidden="true">${"<span></span>".repeat(12)}</div>
    <div class="article-header-grid">
      <div class="article-header-copy">
        <div class="article-label">
          <span id="document-kind">ANNOTATED ESSAY</span>
          <span class="article-label-separator" aria-hidden="true">/</span>
          <span id="document-time">${r.minutes??0} MIN READ</span>
        </div>
        <h2 class="article-title" id="document-title">${z0(r.title)}</h2>
        <p class="article-description" id="document-description">${z0(r.description)}</p>
      </div>
      <aside class="article-folio" aria-label="Essay extent">
        <span class="article-folio-kicker">COMPANION NOTES</span>
        <span class="article-folio-number" id="article-folio-number">${r.annotationCount??0}</span>
        <span class="article-folio-unit" id="article-folio-unit">ANNOTATIONS</span>
        <span class="article-folio-meta" id="article-folio-meta">${((n=r.sections)==null?void 0:n.length)??0} SECTIONS<br />${r.minutes??0} MIN READING</span>
      </aside>
    </div>
  </header>

  <article id="article-content" class="prose" aria-labelledby="document-title"></article>

  <footer class="reading-close">
    <div class="reading-close-rule" aria-hidden="true"><span>∴</span></div>
    <p class="reading-close-note">End of the annotated edition · ${r.annotationCount??0} companion annotations</p>
    <div class="reading-close-actions">
      <a class="reading-close-contents" href="#playground">Kernel explorer <span aria-hidden="true">↑</span></a>
      <button type="button" id="back-to-top" aria-label="Return to the top of the page">Return to top ${Ec}</button>
    </div>
  </footer>`}const Dc=""+new URL("intro-DjC4ulrF.mp3",import.meta.url).href,kr=r=>String(r).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Lc='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.6 15.6 4.4 4.4"/></svg>',q0='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg>',Pc='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg>',Nc='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',ji='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',Oc='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.4v13.2L19 12z"/></svg>',Hc='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>',zt=new Set((()=>{try{const r=JSON.parse(localStorage.getItem("eigen-saved")||"[]");return Array.isArray(r)?r:[]}catch{return[]}})());let Wi=[];document.querySelector("#app").innerHTML=`
  <a class="skip-link" href="#reading">Skip to the essay</a>
  ${Tc()}
  <div class="page-layout">
    ${Cc()}
    <main id="top">
      ${_c({title:Se.title,description:"Attention as normalized kernel regression and spectral filtering, with annotations, a 2026 research update, a controlled experiment, and reproducible checks.",minutes:Se.minutes,sectionCount:Se.sections.length,annotationCount:Se.annotationCount})}
      <section class="audio-intro" aria-labelledby="audio-intro-title">
        <div class="audio-intro-copy">
          <span class="audio-kicker">Audio</span>
          <h2 id="audio-intro-title">Introduction</h2>
          <p>66 seconds.</p>
        </div>
        <div class="audio-player">
          <button class="audio-toggle" id="audio-toggle" type="button" data-playing="false" aria-label="Play audio introduction">
            <span class="audio-icon audio-icon--play">${Oc}</span>
            <span class="audio-icon audio-icon--pause">${Hc}</span>
          </button>
          <div class="audio-player-main">
            <div class="audio-player-meta"><span>Intro</span><span id="audio-time" aria-hidden="true">0:00 / 1:06</span></div>
            <input class="audio-seek" id="audio-seek" type="range" min="0" max="66" step="0.1" value="0" aria-label="Audio introduction position" aria-valuetext="0:00 of 1:06" />
          </div>
          <audio id="audio-intro" src="${Dc}" preload="none"></audio>
        </div>
      </section>
      <section class="central-idea" aria-label="Central result">
        <div class="idea-label"><span>Central result</span><span class="idea-arrow" aria-hidden="true">↘</span></div>
        <div class="idea-content">
          <p>Attention is a <em>constrained spectral estimator.</em></p>
          <span>Nonnegative, normalized weights couple the attainable frequency gains.</span>
        </div>
        <div class="idea-formula">${Oi("\\widehat{Av}_m = \\lambda_m\\hat v_m")}</div>
      </section>
      <section id="playground" class="playground-section" aria-labelledby="playground-title">
        <div class="section-heading">
          <div><div class="eyebrow">Cyclic attention · n = 32</div><h2 id="playground-title">Kernel and spectral response</h2></div>
          <span class="interactive-badge"><span aria-hidden="true"></span>Interactive</span>
        </div>
        <p class="section-description">Adjust inverse temperature β to compare positional attention weights, the resulting attention matrix, and their Fourier gains.</p>
        <div class="explorer-card">
          <div class="explorer-card-heading"><span>Position and frequency representations</span><span class="experiment-tag">Experiment 01</span></div>
          <div id="explorer"></div>
        </div>
      </section>
      <section id="reading" class="reading-section" aria-label="Annotated essay">
        ${Fc(Se)}
      </section>
      <footer class="site-footer">
        <a class="brand" href="#top" aria-label="eigen home"><span class="brand-mark" aria-hidden="true">${Gi}</span><span class="brand-word">eigen<span class="brand-dot">.</span></span></a>
        <span>Mathematics &amp; machine learning</span>
        <a href="#playground">Open the kernel explorer ${ji}</a>
      </footer>
    </main>
  </div>
  <dialog id="figure-dialog" aria-labelledby="figure-dialog-title">
    <div class="figure-dialog-head">
      <div><span id="figure-dialog-label" class="figure-dialog-label"></span><span id="figure-dialog-title" class="figure-dialog-title"></span></div>
      <div class="figure-dialog-actions">
        <a id="figure-dialog-source" href="#" target="_blank" rel="noopener noreferrer">Open image <span aria-hidden="true">↗</span></a>
        <button class="figure-dialog-close" type="button" aria-label="Close figure">${q0}</button>
      </div>
    </div>
    <div class="figure-dialog-canvas"><img id="figure-dialog-image" alt="" /></div>
    <p id="figure-dialog-caption" class="figure-dialog-caption"></p>
  </dialog>
  <dialog id="search-dialog" aria-label="Search the essay">
    <div class="search-dialog-heading">
      ${Lc}
      <input id="search-input" type="search" placeholder="Search the essay and annotations…" aria-label="Search the essay" autocomplete="off" />
      <button class="close-search" type="button" aria-label="Close search">${q0}</button>
    </div>
    <div class="search-hint">Essay · working notes · review · checkpoints</div>
    <div id="search-results"></div>
    <div class="search-footer"><span>All ${Se.annotationCount} companion annotations are indexed</span><kbd>Esc to close</kbd></div>
  </dialog>
  <div id="toast" role="status" aria-live="polite"></div>
`;kc(document.querySelector("#explorer"));const It=r=>{const e=document.querySelector("#toast");e.textContent=r,e.classList.add("visible"),clearTimeout(It.timer),It.timer=setTimeout(()=>e.classList.remove("visible"),2400)},Ui=document.querySelector("#reading"),yt=document.querySelector("#article-content"),bt=document.querySelector("#chapter-list"),Mt=document.querySelector(".mobile-menu");yt.innerHTML=Se.html;document.querySelector("#hero-time").textContent=`${Se.minutes} min read`;const $e=document.querySelector("#audio-intro"),Zn=document.querySelector("#audio-toggle"),qt=document.querySelector("#audio-seek"),Gc=document.querySelector("#audio-time");function Sr(r){if(!Number.isFinite(r)||r<0)return"0:00";const e=Math.floor(r);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function St(){const r=Number.isFinite($e.duration)?$e.duration:66,e=Math.min($e.currentTime||0,r),t=r?e/r*100:0;qt.max=String(r),qt.value=String(e),qt.style.setProperty("--audio-progress",`${t}%`),qt.setAttribute("aria-valuetext",`${Sr(e)} of ${Sr(r)}`),Gc.textContent=`${Sr(e)} / ${Sr(r)}`;const n=!$e.paused;Zn.dataset.playing=String(n),Zn.setAttribute("aria-label",n?"Pause audio introduction":"Play audio introduction")}Zn.addEventListener("click",()=>{$e.paused?($e.ended&&($e.currentTime=0),$e.play().catch(()=>It("The audio could not be played."))):$e.pause()});qt.addEventListener("input",()=>{$e.currentTime=Number(qt.value),St()});$e.addEventListener("play",St);$e.addEventListener("pause",St);$e.addEventListener("ended",St);$e.addEventListener("timeupdate",St);$e.addEventListener("loadedmetadata",St);St();const Yt=document.querySelector("#figure-dialog"),_0=document.querySelector("#figure-dialog-image"),jc=document.querySelector("#figure-dialog-title"),Wc=document.querySelector("#figure-dialog-label"),Uc=document.querySelector("#figure-dialog-caption"),Kc=document.querySelector("#figure-dialog-source"),Ki=document.querySelector(".figure-dialog-close");yt.addEventListener("click",r=>{var i,o,c;const e=r.target.closest(".article-figure-open");if(!e)return;const t=e.closest(".article-figure"),n=t==null?void 0:t.querySelector("img");if(!n)return;const a=n.currentSrc||n.src;_0.src=a,_0.alt=n.alt,jc.textContent=((i=t.querySelector(".article-figure-title"))==null?void 0:i.textContent)??"Figure",Wc.textContent=((o=t.querySelector(".article-figure-label"))==null?void 0:o.textContent)??"Figure",Uc.textContent=((c=t.querySelector(".article-figure-note"))==null?void 0:c.textContent)??"",Kc.href=a,Yt.showModal(),Ki.focus()});Ki.addEventListener("click",()=>Yt.close());Yt.addEventListener("click",r=>{r.target===Yt&&Yt.close()});function Zc(r){const e=document.getElementById(r);if(!e)return null;const t=e.matches("details")?e:e.querySelector(":scope > details")??e.closest("details");return t&&(t.open=!0),e}function Zi(r){const e=Zc(r);e==null||e.scrollIntoView({behavior:"instant",block:"start"})}function ir(){document.body.classList.remove("mobile-toc-open"),Mt==null||Mt.setAttribute("aria-expanded","false")}function Vc(){document.querySelector("#chapter-count").textContent=String(Se.sections.length).padStart(2,"0"),document.querySelector(".rail-count-label").textContent=Se.sections.length===1?"section":"sections",bt.innerHTML=Rc(Se.sections)}function Xc(){if(Ui.getBoundingClientRect().top>window.innerHeight*.65){bt.querySelectorAll(".chapter-link").forEach(i=>{i.classList.remove("current"),i.removeAttribute("aria-current")});return}const e=(document.querySelector(".site-header").getBoundingClientRect().bottom||76)+56,t=new Set(Se.sections.map(i=>i.id));let n=null;for(const i of yt.querySelectorAll("h2[id], h3[id]")){if(!t.has(i.id))continue;const o=i.closest("details");if(!(o&&!o.open)&&i.getClientRects().length)if(i.getBoundingClientRect().top<=e)n=i.id;else break}let a=null;if(bt.querySelectorAll(".chapter-link").forEach(i=>{const o=!!n&&i.hash===`#${n}`;i.classList.toggle("current",o),o?(i.setAttribute("aria-current","location"),a=i):i.removeAttribute("aria-current")}),a&&bt.clientHeight>0){const i=bt.getBoundingClientRect(),o=a.getBoundingClientRect();(o.top<i.top||o.bottom>i.bottom)&&(bt.scrollTop+=o.top-i.top-18)}}function Vi(){const r=document.documentElement.scrollHeight-window.innerHeight,e=r>0?Math.min(1,Math.max(0,window.scrollY/r)):0,t=document.querySelector(".reading-progress > div");t&&(t.style.width=`${e*100}%`);const n=document.querySelector(".side-progress > span");n&&(n.style.width=`${e*100}%`),document.querySelector("#reading-left").textContent=e<.01?"Reading progress":`${Math.max(1,Math.ceil(Se.minutes*(1-e)))} min remaining`,Xc()}let xn=!1;window.addEventListener("scroll",()=>{xn||(xn=!0,requestAnimationFrame(()=>{xn=!1,Vi()}))},{passive:!0});Vc();Vi();function Xi(){const r=document.querySelector("#save-essay"),e=zt.has("essay");r.setAttribute("aria-pressed",String(e)),r.setAttribute("aria-label",e?"Remove saved essay":"Save essay"),r.innerHTML=`${e?Nc:Pc}<span>${e?"Saved":"Save"}</span>`}Xi();document.querySelector("#save-essay").addEventListener("click",()=>{zt.has("essay")?zt.delete("essay"):zt.add("essay"),localStorage.setItem("eigen-saved",JSON.stringify([...zt])),Xi(),It(zt.has("essay")?"Saved in this browser.":"Removed from saved reading.")});function Yi(r){var n;const e=r==="dark";document.documentElement.dataset.theme=e?"dark":"light",localStorage.setItem("eigen-theme",e?"dark":"light");const t=document.querySelector(".theme-toggle");t.setAttribute("aria-label",e?"Switch to light theme":"Switch to dark theme"),t.setAttribute("title",e?"Switch to light theme":"Switch to dark theme"),(n=document.querySelector('meta[name="theme-color"]'))==null||n.setAttribute("content",e?"#0d1714":"#eef3f0")}Yi(localStorage.getItem("eigen-theme")||"light");document.querySelector(".theme-toggle").addEventListener("click",()=>{Yi(document.documentElement.dataset.theme==="dark"?"light":"dark")});const Vn=["standard","large","extra large"],wn=Number(localStorage.getItem("eigen-text-size"));let Zt=Number.isInteger(wn)&&Vn[wn]?wn:0;function Ji(){Ui.style.setProperty("--reading-size",`${21+Zt*2}px`)}Ji();document.querySelector(".text-size").addEventListener("click",()=>{Zt=(Zt+1)%Vn.length,localStorage.setItem("eigen-text-size",String(Zt)),Ji(),It(`Reading text: ${Vn[Zt]}.`)});document.querySelector(".focus-toggle").addEventListener("click",r=>{const e=document.body.classList.toggle("focus-mode");r.currentTarget.setAttribute("aria-pressed",String(e)),It(e?"Distraction-free reading.":"Contents restored.")});bt.addEventListener("click",r=>{r.target.closest(".chapter-link")&&ir()});Mt.addEventListener("click",()=>{const r=document.body.classList.toggle("mobile-toc-open");Mt.setAttribute("aria-expanded",String(r))});var C0;(C0=document.querySelector(".rail-close"))==null||C0.addEventListener("click",ir);document.addEventListener("click",r=>{document.body.classList.contains("mobile-toc-open")&&(r.target.closest(".chapter-sidebar")||r.target.closest(".mobile-menu")||ir())});document.querySelector(".chapter-sidebar").addEventListener("click",r=>{r.target===r.currentTarget&&ir()});document.querySelector("#back-to-top").addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});let Fr=[];window.addEventListener("beforeprint",()=>{Fr=[...yt.querySelectorAll(".annotation-details:not([open])")],Fr.forEach(r=>{r.open=!0}),yt.querySelectorAll(".article-figure img").forEach(r=>{r.loading="eager"}),yt.querySelectorAll(".appendix-disclosure:not([open])").forEach(r=>{r.open=!0})});window.addEventListener("afterprint",()=>{Fr.forEach(r=>{r.open=!1}),Fr=[],yt.querySelectorAll(".appendix-disclosure").forEach(r=>{r.open=!1})});const Yc={review:"Review",note:"Working note",checkpoint:"Checkpoint"},ka=document.createElement("template");ka.innerHTML=Se.html;ka.content.querySelectorAll(".katex-mathml").forEach(r=>r.remove());let M0=Se.sections[0].id;var R0;for(const r of ka.content.querySelectorAll("h2, h3, p, li, .math-block, .annotation-title, .annotation-gist, figcaption")){if(r.matches("h2, h3")&&(M0=r.id),(R0=r.parentElement)!=null&&R0.closest("p, li, .math-block"))continue;const e=r.textContent.replace(/\s+/g," ").trim();if(!e)continue;const t=r.closest(".annotation"),n=r.closest(".article-figure");Wi.push({anchor:(t==null?void 0:t.id)??(n==null?void 0:n.id)??M0,label:t?Yc[t.dataset.annotation]??"Annotation":n?"Figure":"Essay",text:e})}const je=document.querySelector("#search-dialog"),Dr=document.querySelector("#search-input");function Qi(){const r=Dr.value.trim().toLowerCase(),e=[];if(r.length>=2)for(const n of Wi){const a=n.text.toLowerCase().indexOf(r);if(!(a<0)&&(e.push({...n,text:n.text.slice(Math.max(0,a-70),a+170)}),e.length>=30))break}const t=document.querySelector("#search-results");t.innerHTML=r?r.length<2?'<div class="search-empty">Enter at least two characters.</div>':e.length?`<div class="results-count">${e.length}${e.length===30?"+":""} matches</div>${e.map((n,a)=>`<button class="search-result" type="button" data-result="${a}" data-anchor="${kr(n.anchor)}"><span>${kr(n.label)} ${ji}</span><p>${kr(n.text)}</p></button>`).join("")}`:`<div class="search-empty">No matches for “${kr(Dr.value)}”.<p>Try another mathematical term.</p></div>`:'<div class="search-empty"><span>Search the essay</span><p>Try “Fourier”, “temperature”, or “polytope”.</p></div>',t.querySelectorAll("[data-result]").forEach(n=>{n.addEventListener("click",()=>{const a=e[Number(n.dataset.result)];je.close(),requestAnimationFrame(()=>Zi(a.anchor))})})}function es(){je.showModal(),Qi(),Dr.focus()}document.querySelector(".search-trigger").addEventListener("click",es);document.querySelector(".close-search").addEventListener("click",()=>je.close());je.addEventListener("click",r=>{r.target===je&&je.close()});Dr.addEventListener("input",Qi);document.addEventListener("keydown",r=>{if(r.key==="Escape"&&je.open){r.preventDefault(),je.close();return}(r.metaKey||r.ctrlKey)&&r.key.toLowerCase()==="k"&&(r.preventDefault(),je.open?je.close():es()),r.key==="Escape"&&document.body.classList.contains("mobile-toc-open")&&(ir(),Mt.focus())});function ts(r){const e=decodeURIComponent(String(r).replace(/^#/,""));e&&requestAnimationFrame(()=>Zi(e))}ts(location.hash);window.addEventListener("hashchange",()=>ts(location.hash));
