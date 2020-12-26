(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),o=n(7),a=(n(0),n(104)),r={slug:"git-engineering-practices",title:"Git\u5de5\u7a0b\u5b9e\u8df5",author:"Loki",author_title:"SE",author_url:"https://lokiworks.github.io",author_image_url:"https://avatars1.githubusercontent.com/u/16199375?v=4",tags:["vcs"]},s={permalink:"/blog/git-engineering-practices",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-12-26-git-engineering-practices.md",source:"@site/blog/2020-12-26-git-engineering-practices.md",description:"Git\u5de5\u7a0b\u5b9e\u8df5",date:"2020-12-26T00:00:00.000Z",tags:[{label:"vcs",permalink:"/blog/tags/vcs"}],title:"Git\u5de5\u7a0b\u5b9e\u8df5",readingTime:1.38,truncated:!1,nextItem:{title:"\u6570\u636e\u5e93\u811a\u672c\u7248\u672c\u7ba1\u7406\u5de5\u7a0b\u5b9e\u8df5",permalink:"/blog/database-version-management"}},c=[{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[]}],l={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"git\u5de5\u7a0b\u5b9e\u8df5"},"Git\u5de5\u7a0b\u5b9e\u8df5"),Object(a.b)("p",null,"\u6211\u4f7f\u7528\u8fc7\u7684\u7248\u672c\u7ba1\u7406\u5de5\u5177\u4e3b\u8981\u6709\uff1aSVN\u3001Git\uff0c\u8fd9\u51e0\u5e74Git\u793e\u533a\u7684\u53d1\u5c55\u52bf\u5934\u8981\u8fdc\u8d85\u8fc7SVN\uff0cGit\u5df2\u6210\u4e3a\u7248\u672c\u5de5\u5177\u4e8b\u5b9e\u7684\u6807\u51c6\uff0cGit\u662f\u6bcf\u4e00\u4e2a\u5de5\u7a0b\u5e08\u5fc5\u987b\u638c\u63e1\u7684\u6280\u80fd\uff0c\u8fd9\u91cc\u603b\u7ed3\u4e0bGit\u4f7f\u7528\u4e0a\u7684\u4e00\u4e9b\u5fc3\u5f97\u4e0e\u7ecf\u9a8c\u3002"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git help")," \u5217\u51fa\u5e38\u7528\u7684git\u547d\u4ee4")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"These are common Git commands used in various situations:\n\nstart a working area (see also: git help tutorial)\n   clone      Clone a repository into a new directory\n   init       Create an empty Git repository or reinitialize an existing one\n\nwork on the current change (see also: git help everyday)\n   add        Add file contents to the index\n   mv         Move or rename a file, a directory, or a symlink\n   reset      Reset current HEAD to the specified state\n   rm         Remove files from the working tree and from the index\n\nexamine the history and state (see also: git help revisions)\n   bisect     Use binary search to find the commit that introduced a bug\n   grep       Print lines matching a pattern\n   log        Show commit logs\n   show       Show various types of objects\n   status     Show the working tree status\n\ngrow, mark and tweak your common history\n   branch     List, create, or delete branches\n   checkout   Switch branches or restore working tree files\n   commit     Record changes to the repository\n   diff       Show changes between commits, commit and working tree, etc\n   merge      Join two or more development histories together\n   rebase     Reapply commits on top of another base tip\n   tag        Create, list, delete or verify a tag object signed with GPG\n\ncollaborate (see also: git help workflows)\n   fetch      Download objects and refs from another repository\n   pull       Fetch from and integrate with another repository or a local branch\n   push       Update remote refs along with associated objects\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git ls-files -s")," \u4e0e ",Object(a.b)("inlineCode",{parentName:"li"},"git cat-file -p 2d832d9044c698081e59c322d5a2a459da546469"),"\u914d\u5408\u4f7f\u7528\uff0c\u7528\u6765\u67e5\u770b\u6240\u6709\u5df2\u6682\u5b58\u7684\u6587\u4ef6"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git ls-files -m"),"\u4e0e ",Object(a.b)("inlineCode",{parentName:"li"},"git diff h.txt"),"\u914d\u5408\u4f7f\u7528\uff0c\u7528\u6765\u67e5\u770b\u5df2\u4fee\u6539\u4f46\u672a\u6682\u5b58\u7684\u6587\u4ef6")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-diff"}),"diff --git a/h.txt b/h.txt\nindex 2d832d9..10f825a 100644\n--- a/h.txt\n+++ b/h.txt\n@@ -1 +1,2 @@\n hello,world\n+hello world\n")))}b.isMDXComponent=!0}}]);