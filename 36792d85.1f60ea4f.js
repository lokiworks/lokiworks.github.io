(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{119:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/monorepo_f8-cf500b5991eb6b7feed63ef904fa0867.jpg"},120:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/gvfs-architecture-858b7214c60188fc448ce9aeb61d870f.png"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return n})),a.d(t,"default",(function(){return s}));var b=a(3),c=a(7),o=(a(0),a(104)),i={slug:"build-monorepo",title:"\u6784\u5efa\u5355\u4f53\u4ed3\u5e93",author:"Loki",author_title:"SE",author_url:"https://lokiworks.github.io",author_image_url:"https://avatars1.githubusercontent.com/u/16199375?v=4",tags:["design"]},l={permalink:"/blog/build-monorepo",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-05-20-build-monorepo.md",source:"@site/blog/2020-05-20-build-monorepo.md",description:"\u6784\u5efa\u5355\u4f53\u4ed3\u5e93",date:"2020-05-20T00:00:00.000Z",tags:[{label:"design",permalink:"/blog/tags/design"}],title:"\u6784\u5efa\u5355\u4f53\u4ed3\u5e93",readingTime:.515,truncated:!1,prevItem:{title:"\u5982\u4f55\u9605\u8bfb\u6e90\u7801",permalink:"/blog/how-to-read-sourcecode"},nextItem:{title:"\u8f6f\u4ef6\u8bbe\u8ba1",permalink:"/blog/software-design"}},n=[{value:"\u4f18\u52bf",id:"\u4f18\u52bf",children:[]},{value:"Git\u5355\u4f53\u4ed3\u5e93\u4e0a\u7684\u5b9e\u8df5",id:"git\u5355\u4f53\u4ed3\u5e93\u4e0a\u7684\u5b9e\u8df5",children:[]},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[{value:"\u8054\u7cfb\u65b9\u5f0f",id:"\u8054\u7cfb\u65b9\u5f0f",children:[]}]}],r={toc:n};function s(e){var t=e.components,i=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(b.a)({},r,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u6784\u5efa\u5355\u4f53\u4ed3\u5e93"},"\u6784\u5efa\u5355\u4f53\u4ed3\u5e93"),Object(o.b)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728\u5355\u4f53\u4ed3\u5e93\u4e0a\u7684\u4e00\u4e9b\u601d\u8003\u53ca\u5b9e\u8df5\uff0c\u81f3\u4e8e\u662f\u9009\u62e9\u5355\u4ed3\u8fd8\u662f\u591a\u4ed3\uff0c\u9700\u8981\u6839\u636e\u5b9e\u9645\u7684\u60c5\u51b5\u53bb\u505a\u9009\u62e9\u3002"),Object(o.b)("h2",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u4ee3\u7801\u5171\u4eab\u548c\u91cd\u7528")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u53ea\u6709\u4e00\u4e2a\u4ed3\u5e93\uff0c\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u770b\u5230\u5176\u4ed6\u4eba\u5199\u7684\u4ee3\u7801\u3002\u5728\u5199\u65b0\u7684\u5de5\u5177\u6216\u8005\u901a\u7528\u529f\u80fd\u65f6\u53ef\u4ee5\u5728\u4ed3\u5e93\u4e2d\u67e5\u627e\u662f\u4e0d\u662f\u5df2\u7ecf\u6709\u73b0\u6210\u7684\u4ee3\u7801\u4e86\uff0c\u907f\u514d\u91cd\u590d\u7684\u9020\u8f6e\u5b50"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u5355\u4e00\u7248\u672c\u7ba1\u7406")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u76f4\u63a5\u4f9d\u8d56\u5176\u4ed6\u56e2\u961f\u7684\u4ee3\u7801\uff0c \u800c\u4e0d\u662f\u4f7f\u7528\u5176\u63d0\u4f9b\u7684\u7c7b\u5e93\u3002\u4f7f\u7528\u7c7b\u5e93\u4f1a\u5b58\u5728\u7740\u94bb\u77f3\u4f9d\u8d56\u95ee\u9898\u3002\n",Object(o.b)("img",{alt:"alt",src:a(119).default})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u65b9\u4fbf\u91cd\u6784")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u4f7f\u7528\u91cd\u6784\u5de5\u5177\uff0c\u5bf9\u4ed3\u5e93\u4e2d\u7684\u7c7b\u3001\u65b9\u6cd5\u7b49\u8fdb\u884c\u91cd\u547d\u540d\u3002\u800c\u4e0d\u7528\u62c5\u5fc3\u6709\u4efb\u4f55\u9057\u6f0f\u7684\u5730\u65b9")))),Object(o.b)("h2",{id:"git\u5355\u4f53\u4ed3\u5e93\u4e0a\u7684\u5b9e\u8df5"},"Git\u5355\u4f53\u4ed3\u5e93\u4e0a\u7684\u5b9e\u8df5"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{}),"\u5b9e\u9a8c\u73af\u5883: Win10\ngit\u7248\u672c: 2.26.2\nVFSForGit \u7248\u672c: 1.0.20112.1\n\u514b\u9686\u5bf9\u8c61:https://github.com/torvalds/linux\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u90e8\u5206\u514b\u9686\u548c\u7a00\u758f\u68c0\u51fa",Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"\u4ece2.25.0\u5f00\u59cb\u652f\u6301\u7684\u7279\u6027\uff0c",Object(o.b)("strong",{parentName:"p"},"\u90e8\u5206\u514b\u9686"),"\u53ef\u4ee5\u907f\u514d\u4e0b\u8f7d\u4e0d\u5fc5\u8981\u7684\u5bf9\u8c61\uff0c\u4ece\u800c\u51cf\u5c11\u4e0b\u8f7d\u7684\u65f6\u95f4\u3002",Object(o.b)("strong",{parentName:"p"},"\u7a00\u758f\u68c0\u51fa")," \u5ba2\u6237\u7aef\u53ef\u4ee5\u68c0\u51fa\u7279\u5b9a\u7684\u76ee\u5f55\u3002\u901a\u5e38\u662f\u4e24\u8005\u642d\u914d\u4f7f\u7528")))),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"$ git clone --filter=blob:none --no-checkout https://github.com/torvalds/linux\n$ cd linux/\n$ git sparse-checkout init --cone\n$ git sparse-checkout set init/usr # \u8fd9\u91cc\u53ea\u68c0\u51fainit\u548cusr\u76ee\u5f55\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"VFSForGit",Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"\u5fae\u8f6f\u5f00\u53d1\u7684\u4ea7\u54c1\uff0c\u672c\u5730\u7684Git\u5e93\u526f\u672c\u90fd\u662f\u865a\u62df\u5316\u7684\u3002\u53ea\u5305\u542b\u5143\u6570\u636e\u548c\u5fc5\u8981\u7684\u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n",Object(o.b)("img",{alt:"alt",src:a(120).default}))))),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"$ gvfs clone https://lokiworks@dev.azure.com/lokiworks/linux/_git/linux # \u53ea\u9700\u8981\u5c06git\u547d\u4ee4\u6362\u6210gvfs\uff0c\u56e0\u4e3agithub\u76ee\u524d\u4e0d\u652f\u6301gvfs\u534f\u8bae\uff0c\u6240\u4ee5\u5c06linux\u4ee3\u7801\u514b\u9686\u5230\u4e2a\u4eba\u7684\u4ee3\u7801\u4ed3\u5e93\u4e0b\n$ cd src/ # \u6240\u6709\u7684\u4ee3\u7801\u6587\u4ef6\u5168\u90fd\u653e\u5728src\u6587\u4ef6\u5939\u4e0b\n")),Object(o.b)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5355\u4f53\u4ed3\u5e93\u56fa\u7136\u597d\uff0c\u4f46\u662f\u5e76\u4e0d\u9002\u5408\u6bcf\u4e00\u4e2a\u4f01\u4e1a"),Object(o.b)("li",{parentName:"ul"},"git\u76ee\u524d\u5728\u5927\u578b\u4ed3\u5e93\u4e0a\u652f\u6301\u7684\u5e76\u4e0d\u597d\u3002\u5373\u4f7f\u4f7f\u7528\u4e86",Object(o.b)("strong",{parentName:"li"},"\u90e8\u5206\u514b\u9686"),"\u3001",Object(o.b)("strong",{parentName:"li"},"\u7a00\u758f\u68c0\u51fa"),"\uff0c\u514b\u9686\u7684\u901f\u5ea6\u4f9d\u7136\u5f88\u6162"),Object(o.b)("li",{parentName:"ul"},"VFSForGit\u56fa\u7136\u5f88\u597d\uff0c\u4f46\u662f\u76ee\u524d\u4e5f\u53ea\u6709Azure DevOps\u3001Bitbucket\u652f\u6301gvfs\u534f\u8bae\u3002\u5e0c\u671b\u672a\u6765\u5728github\u3001gitlab\u5e73\u53f0\u4e0a\u4e5f\u80fd\u4f7f\u7528gvfs\u3002")),Object(o.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(b.a)({parentName:"li"},{href:"https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext"}),"https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/microsoft/VFSForGit"}),"https://github.com/microsoft/VFSForGit")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(b.a)({parentName:"li"},{href:"https://git-scm.com"}),"https://git-scm.com")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/"}),"https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/devops/learn/git/git-at-scale"}),"https://docs.microsoft.com/en-us/azure/devops/learn/git/git-at-scale"))),Object(o.b)("h3",{id:"\u8054\u7cfb\u65b9\u5f0f"},"\u8054\u7cfb\u65b9\u5f0f"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6b22\u8fce\u8ba2\u9605\u6211\u7684\u516c\u4f17\u53f7\uff0c\u8fd9\u91cc\u4e3b\u8981\u4f1a\u53d1\u8868\u4e9b\u8f6f\u4ef6\u5de5\u7a0b\u4e0a\u7684\u4e00\u4e9b\u60f3\u6cd5\u53ca\u5b9e\u8df5\n",Object(o.b)("img",{alt:"\u5fae\u4fe1\u516c\u4f17\u53f7",src:a(107).default}))))}s.isMDXComponent=!0}}]);