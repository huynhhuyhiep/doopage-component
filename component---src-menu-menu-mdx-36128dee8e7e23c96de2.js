(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/9Lm":function(n,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return M})),o.d(e,"default",(function(){return v}));var t=o("Fcif"),i=o("+I+c"),c=o("mXGw"),a=o("/FXl"),r=o("TjRS"),l=o("CR/M"),p=o.n(l),u=o("ZFoC"),d=o("Jd/G"),s=o("53ZH"),b=o("K86Y"),m=o("aD51");"undefined"!=typeof MenuOptionProps&&MenuOptionProps&&MenuOptionProps===Object(MenuOptionProps)&&Object.isExtensible(MenuOptionProps)&&!MenuOptionProps.hasOwnProperty("__filemeta")&&Object.defineProperty(MenuOptionProps,"__filemeta",{configurable:!0,value:{name:"MenuOptionProps",filename:"src/Menu/index.tsx"}}),"undefined"!=typeof MenuProps&&MenuProps&&MenuProps===Object(MenuProps)&&Object.isExtensible(MenuProps)&&!MenuProps.hasOwnProperty("__filemeta")&&Object.defineProperty(MenuProps,"__filemeta",{configurable:!0,value:{name:"MenuProps",filename:"src/Menu/index.tsx"}});var O=function(n){var e=n.options,o=n.divider,a=Object(i.a)(n,["options","divider"]),r=Object(c.useRef)();return Object(m.c)(s.a,Object(t.a)({},a,{ref:r}),e.map((function(n,c){var a=n.name,l=n.id,p=n.onClick,u=n.closeOnClick,d=void 0===u||u,s=n.divider,O=Object(i.a)(n,["name","id","onClick","closeOnClick","divider"]),f=o&&c!==e.length-1;return Object(m.c)(b.a,Object(t.a)({id:l,key:l,name:a,onClick:function(e){var o;null==p||p(n,e),d&&(null===(o=r.current)||void 0===o||o.close())},divider:f||s},O))})))},f=Object(c.memo)(O),j=f;void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"__DOCZ_DUMMY_EXPORT_DEFAULT",filename:"src/Menu/index.tsx"}});var h=function(n){return null};void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MenuOption",filename:"src/Menu/index.tsx"}});var g=o("YmFV"),M={};void 0!==M&&M&&M===Object(M)&&Object.isExtensible(M)&&!M.hasOwnProperty("__filemeta")&&Object.defineProperty(M,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Menu/Menu.mdx"}});var y={_frontmatter:M},_=r.a;function v(n){var e,o,c,l=n.components,s=Object(i.a)(n,["components"]);return Object(a.b)(_,Object(t.a)({},y,s,{components:l,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"menu"},"Menu"),Object(a.b)("p",null,"Base on ",Object(a.b)("a",{parentName:"p",href:"https://huynhhuyhiep.github.io/doopage-react-ui-kit/popup"},"Popup")),Object(a.b)("p",null,"Related component"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://huynhhuyhiep.github.io/doopage-react-ui-kit/menu-item"},"MenuItem"))),Object(a.b)("p",null,"Icon"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://material-ui.com/components/material-icons/"},"https://material-ui.com/components/material-icons/"))),Object(a.b)("h2",{id:"basic-usage"},"Basic usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { Menu } from '@doopage/react-ui-kit'\n\nconst Example = () => {\n    return (\n      <Menu\n        label={'menu'}\n        options={[{id: '1', name: 'option1', onClick: () => {console.log('on click')}}]}\n      />\n    );\n}\n\nexport default Example;\n")),Object(a.b)("h2",{id:"playground"},"Playground"),Object(a.b)("h3",{id:"basic"},"Basic"),Object(a.b)(u.c,{__position:0,__code:"() => {\n  const handleClick = item => console.log('on click', item)\n  return (\n    <Menu\n      label={'menu'}\n      options={[\n        { name: 'option 1', onClick: handleClick },\n        { name: 'option 2', onClick: handleClick },\n      ]}\n    />\n  )\n}",__scope:(e={props:s,DefaultLayout:r.a,AdbIcon:p.a,Playground:u.c,Props:u.d,Avatar:d.b,MenuOption:h,Menu:j,doopageLogo:g.a},e.DefaultLayout=r.a,e._frontmatter=M,e),mdxType:"Playground"},(function(){var n=function(n){return console.log("on click",n)};return Object(a.b)(j,{label:"menu",options:[{name:"option 1",onClick:n},{name:"option 2",onClick:n}],mdxType:"Menu"})})),Object(a.b)("h3",{id:"hover"},"Hover"),Object(a.b)(u.c,{__position:1,__code:"() => {\n  const handleClick = item => console.log('on click', item)\n  return (\n    <Menu\n      button={\n        <div\n          style={{\n            width: 100,\n            backgroundColor: 'gray',\n            textAlign: 'center',\n            color: '#fff',\n          }}\n        >\n          menu\n        </div>\n      }\n      hover\n      options={[\n        {\n          id: '1',\n          name: 'option 1',\n          onClick: handleClick,\n          description: 'description option 1',\n          icon: <AdbIcon />,\n          disabled: true,\n          divider: true,\n        },\n        {\n          id: '2',\n          name: 'option 2',\n          onClick: handleClick,\n          description: 'description option 2',\n          icon: <Avatar src={doopageLogo} size=\"small\" shadow={false} />,\n          closeOnClick: false,\n        },\n      ]}\n    />\n  )\n}",__scope:(o={props:s,DefaultLayout:r.a,AdbIcon:p.a,Playground:u.c,Props:u.d,Avatar:d.b,MenuOption:h,Menu:j,doopageLogo:g.a},o.DefaultLayout=r.a,o._frontmatter=M,o),mdxType:"Playground"},(function(){var n=function(n){return console.log("on click",n)};return Object(a.b)(j,{button:Object(a.b)("div",{style:{width:100,backgroundColor:"gray",textAlign:"center",color:"#fff"}},"menu"),hover:!0,options:[{id:"1",name:"option 1",onClick:n,description:"description option 1",icon:Object(a.b)(p.a,{mdxType:"AdbIcon"}),disabled:!0,divider:!0},{id:"2",name:"option 2",onClick:n,description:"description option 2",icon:Object(a.b)(d.b,{src:g.a,size:"small",shadow:!1,mdxType:"Avatar"}),closeOnClick:!1}],mdxType:"Menu"})})),Object(a.b)("h3",{id:"context-menu"},"Context Menu"),Object(a.b)(u.c,{__position:2,__code:"() => {\n  const handleClick = item => console.log('on click', item)\n  return (\n    <Menu\n      getContextMenu={openMenu => {\n        return (\n          <div\n            onContextMenu={e => {\n              const { top, left } = openMenu(e)\n            }}\n            style={{\n              width: 500,\n              height: 300,\n              backgroundColor: '#eeeeee',\n              textAlign: 'center',\n            }}\n          >\n            Right click to open menu\n          </div>\n        )\n      }}\n      options={[\n        {\n          id: '1',\n          name: 'option 1',\n          onClick: handleClick,\n          description: 'description option 1',\n          icon: <AdbIcon />,\n          disabled: true,\n          divider: true,\n        },\n        {\n          id: '2',\n          name: 'option 2',\n          onClick: handleClick,\n          description: 'description option 2',\n          icon: <Avatar src={doopageLogo} size=\"small\" shadow={false} />,\n          closeOnClick: false,\n        },\n      ]}\n    />\n  )\n}",__scope:(c={props:s,DefaultLayout:r.a,AdbIcon:p.a,Playground:u.c,Props:u.d,Avatar:d.b,MenuOption:h,Menu:j,doopageLogo:g.a},c.DefaultLayout=r.a,c._frontmatter=M,c),mdxType:"Playground"},(function(){var n=function(n){return console.log("on click",n)};return Object(a.b)(j,{getContextMenu:function(n){return Object(a.b)("div",{onContextMenu:function(e){var o=n(e);o.top,o.left},style:{width:500,height:300,backgroundColor:"#eeeeee",textAlign:"center"}},"Right click to open menu")},options:[{id:"1",name:"option 1",onClick:n,description:"description option 1",icon:Object(a.b)(p.a,{mdxType:"AdbIcon"}),disabled:!0,divider:!0},{id:"2",name:"option 2",onClick:n,description:"description option 2",icon:Object(a.b)(d.b,{src:g.a,size:"small",shadow:!1,mdxType:"Avatar"}),closeOnClick:!1}],mdxType:"Menu"})})),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)(u.d,{of:h,table:!0,mdxType:"Props"}),Object(a.b)("h3",{id:"menu-1"},"Menu"),Object(a.b)(u.d,{of:j,table:!0,mdxType:"Props"}))}void 0!==v&&v&&v===Object(v)&&Object.isExtensible(v)&&!v.hasOwnProperty("__filemeta")&&Object.defineProperty(v,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Menu/Menu.mdx"}}),v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-menu-menu-mdx-36128dee8e7e23c96de2.js.map