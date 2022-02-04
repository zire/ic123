"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[664],{973:function(e,n,t){t.d(n,{Z:function(){return x}});var a=t(7294),i=t(1597),s=t(3201),o=t(3564),l=t(5713),r=t(5673),p=t(8157),c=t(2627),m=t(5859),g=t(21),d=t(9).ZP.div.withConfig({displayName:"blogSidebarstyle__BlogSideBarWrapper",componentId:"sc-zv79dr-0"})(["\n  .search-box {\n    position: relative;\n    display: flex;\n    input {\n      flex-basis: 100%;\n      padding: 15px 45px 15px 15px;\n      border: none;\n      border-radius: 5px;\n      background: #65528f;\n      color: ",';\n      &:focus {\n        border-color: #8a57de;\n      }\n    }\n    button {\n      position: absolute;\n      right: 0px;\n      top: 0;\n      height: 100%;\n      width: auto;\n      border-radius: 5px;\n      background: transparent;\n      font-size: 22px;\n      color: #beabdf;\n      line-height: 40px;\n    }\n  }\n\n  .sidebar-widgets {\n    padding: 0 30px;\n  }\n\n  .widgets-title {\n    margin-bottom: 20px;\n    h3 {\n      display: inline-block;\n      font-size: 21px;\n      font-weight: 500;\n      line-height: 30px;\n      position: relative;\n      &:before {\n        position: absolute;\n        top: 50%;\n        right: -80px;\n        content: "";\n        width: 70px;\n        height: 1px;\n      }\n    }\n  }\n  .recent-post-block {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    border: 1px solid rgba(190, 171, 223, 0.55);\n    border-radius: 5px;\n    & + .recent-post-block {\n      margin-top: 30px;\n    }\n    img {\n      margin-right: 20px;\n      height: 80px;\n      width: 80px;\n      border-radius: 5px;\n    }\n    a {\n      h3 {\n        font-size: 16px;\n        font-weight: 400;\n        color: #beabdf;\n        margin: 0;\n        margin-bottom: 8px;\n        transition: all 0.3s ease-in;\n        &:hover {\n          color: ',';\n        }\n      }\n    }\n    .post-meta-block {\n      margin-bottom: 0;\n      font-size: 14px;\n      color: #7a848e;\n      a {\n        font: 400 13px/20px "Poppins", sans-serif;\n        color: #7a848e;\n        &:hover {\n          color: ',';\n        }\n      }\n      a + a {\n        position: relative;\n        &:before {\n          content: "/";\n          display: inline-block;\n          margin: 0px 5px 0px 0px;\n        }\n      }\n    }\n  }\n\n  .sidebar-widgets {\n    & + .sidebar-widgets {\n      margin-top: 52px;\n    }\n    ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    }\n    &.catagorie {\n      li {\n        & + li {\n          margin-top: 3px;\n        }\n        a {\n          color: #beabdf;\n          display: flex;\n          line-height: 25px;\n          justify-content: space-between;\n          font: 400 16px/35px "Poppins", sans-serif;\n          em {\n            font-style: normal;\n            margin: 0;\n          }\n          span {\n            margin: 0;\n            border-bottom: 1px solid transparent;\n            transition: all 0.3s linear;\n          }\n          &:hover {\n            span,\n            em {\n              color: ',';\n              border-color: #beabdf;\n            }\n          }\n        }\n      }\n    }\n    &.tags {\n      ul {\n        margin-top: -5px;\n        margin-left: -5px;\n        margin-right: -5px;\n      }\n      li {\n        display: inline-block;\n        a {\n          margin: 5px;\n          display: block;\n          padding: 6px 18px;\n          border-radius: 3px;\n          background: #2b1867;\n          font: 400 13px/26px "Poppins", sans-serif;\n          transition: all 0.3s linear;\n          &:hover {\n            color: #2b1867;\n            background: ',";\n          }\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 1024px) {\n    .sidebar-widgets {\n      padding: 0;\n    }\n  }\n"],(function(e){return e.theme.white}),(function(e){return e.theme.white}),(function(e){return e.theme.white}),(function(e){return e.theme.white}),(function(e){return e.theme.white})),x=function(){return a.createElement(d,null,a.createElement(l.Z,{className:"sidebar-widgets"},a.createElement(l.Z,{className:"search-box"},a.createElement("input",{type:"text"}),a.createElement(o.Z,null,a.createElement(s.U41,null)))),a.createElement(l.Z,{className:"sidebar-widgets --recent-post"},a.createElement(l.Z,{className:"widgets-title"},a.createElement(r.Z,{as:"h3"},"Latest Post")),g.Z.recentPosts.map((function(e,n){return a.createElement(l.Z,{className:"recent-post-block",key:n},a.createElement(c.Z,{src:e.thumbnail,alt:"prime-app"}),a.createElement(l.Z,{className:"recent-post-content-block"},a.createElement(i.Link,{to:e.url},a.createElement(r.Z,{as:"h3"},""+e.title," ")),a.createElement(l.Z,{className:"post-meta-block"},"By: ",a.createElement(i.Link,{to:"#"},"Admin"),a.createElement(i.Link,{to:"#"},"Dec, 07"))))}))),a.createElement(l.Z,{className:"sidebar-widgets catagorie"},a.createElement(l.Z,{className:"widgets-title"},a.createElement(r.Z,{as:"h3"},"Categories")),a.createElement(m.a,null,g.Z.categories.map((function(e,n){return a.createElement(m.H,{key:n},a.createElement(i.Link,{to:e.url},a.createElement(p.Z,{as:"span"},e.name),a.createElement(p.Z,{as:"em"},"(",e.count,")")))})))),a.createElement(l.Z,{className:"sidebar-widgets tags"},a.createElement(l.Z,{className:"widgets-title"},a.createElement(r.Z,{as:"h3"},"Tags")),a.createElement(m.a,null,g.Z.tags.map((function(e,n){return a.createElement(m.H,{key:n},a.createElement(i.Link,{to:e.url},a.createElement(p.Z,{as:"span"},e.name)))})))))}},442:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var a=t(7294),i=t(9),s=t(8678),o=t(9357),l=t(6448),r=t(1597),p=t(1424),c=t(8486),m=t(5673),g=t(5713),d=t(8157),x=t(6932),u=t(973),b=t(863),h=t(2026),E=i.ZP.div.withConfig({displayName:"blogListstyle__BlogPageWrapper",componentId:"sc-10znn8k-0"})(['\n  .blog-page-wrapper {\n    padding-bottom: 50px;\n  }\n  .post-block {\n    &.list {\n      margin-bottom: 70px;\n      border-radius: 6px;\n \n      &:hover {\n        .post-thumb-block {\n          img {\n            transform: scale3d(1.1, 1.1, 1);\n          }\n        }\n        .readmore-btn {\n         color: #beabdf;\n        }\n        .post-title {\n          a {\n            color: #beabdf;\n          }\n        }\n      }\n    }\n    &.text-only {\n      margin-bottom: 80px;\n      border: 1px solid rgba(190,171,223,0.55);\n      padding: 45px 55px 35px;\n    }\n    &.qutoe-post {\n      padding: 100px 65px 70px;\n      text-align: center;\n      position: relative;\n      z-index: 1;\n      margin-bottom: 80px;\n      position: relative;\n      &:after{\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 43px;\n        background: rgb(200,56,231);\n        background: linear-gradient( 0deg,rgba(200,56,231,1) 0%,rgba(31,42,213,1) 100% );\n        content: "";\n        opacity: .65;\n        z-index: -1;\n      }\n      &:before {\n        content: url(',");\n        position: absolute;\n        left: 50%;\n        top: 30px;\n        transform: translateX(-50%);\n        z-index: -1;\n        opacity: 1;\n        transition: all 1s ease-in-out;\n      }\n      .post-title {\n        a {\n          color: ",";\n          font-size: 30px;\n          letter-spacing: 1px;\n        }\n      }\n    }\n  }\n\n  .post-thumb-block {\n    overflow: hidden;\n    margin-bottom: 30px;\n    position: relative;\n    border-radius: 6px;\n    .post-meta {\n      padding: 15px 23px;\n      border-radius: 6px;\n      font-size: 15px;\n      line-height: 20px;\n      text-align: center;\n      color: #ffffff;\n      width: 100px;\n      background: rgba(255, 255, 255, 0.15);\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      em {\n        font-weight: 600;\n        font-size: 28px;\n        line-height: 35px;\n        display: block;\n        font-style: normal;\n      }\n    }\n    img {\n      width: 100%;\n      transition: all 0.6s ease-in;\n      border-radius: 6px;\n    }\n  }\n  .post-content-block {\n    border-radius: 0 0 3px 3px;\n    box-shadow: 0px 2px 4px 0px rgba(12, 0, 46, 0.06);\n    padding: 25px 35px;\n    position: relative;\n  }\n  .post-entry {\n    font-size: 15px;\n    font-weight: 300;\n    line-height: 28px;\n    margin-bottom: 25px;\n  }\n  .post-title {\n    a {\n      font-size: 24px;\n      font-weight: 600;\n      line-height: 40px;\n      letter-spacing: 1.5px;\n      margin-bottom: 25px;\n      display: block;\n      -webkit-transition: 450ms all;\n      transition: 450ms all;\n      &:hover {\n        color: #C838E7;\n      }\n    }\n  }\n  .readmore-btn {\n    display: flex;\n    color: ",";\n    align-items: center;\n    transition: all 0.3s ease-in;\n    svg {\n      margin-left: 0px;\n      font-size: 27px;\n      transition: all 0.3s ease-in;\n    }\n    &:hover {\n      svg {\n        transform: translateX(8px);\n      }\n    }\n  }\n  @media only screen and (max-width: 912px) {\n    .blog-page-wrapper {\n      padding-bottom: 80px;\n    }\n  }\n  @media only screen and (max-width: 568px) {\n    .post-block {\n      .post-title {\n        a {\n          font-size: 20px;\n          line-height: 33px;\n        }\n      }\n      &.qutoe-post {\n        .post-title {\n          a {\n            font-size: 20px;\n            line-height: 33px;\n          }\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 480px) {\n    .post-block {\n      &.text-only {\n        padding: 25px 30px 30px;\n      }\n      &.qutoe-post {\n        padding: 80px 25px 40px;\n      }\n    }\n  }\n  @media only screen and (max-width: 375px) {\n    .post-block {\n      .post-title {\n        a {\n          font-size: 17px;\n          line-height: 30px;\n        }\n      }\n      &.qutoe-post {\n        .post-title {\n          a {\n            font-size: 17px;\n            line-height: 30px;\n          }\n        }\n      }\n    }\n  }\n"],"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTEiIGhlaWdodD0iOTIiIHZpZXdCb3g9IjAgMCAxMTEgOTIiPg0KICA8ZGVmcz4NCiAgICA8c3R5bGU+DQogICAgICAuY2xzLTEgew0KICAgICAgICBvcGFjaXR5OiAwLjEyOw0KICAgICAgfQ0KDQogICAgICAuY2xzLTIgew0KICAgICAgICBmaWxsOiAjZmZmOw0KICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7DQogICAgICB9DQogICAgPC9zdHlsZT4NCiAgPC9kZWZzPg0KICA8ZyBpZD0iZmxhdGljb24xNTQ0MTkxMjc5LXN2ZyIgY2xhc3M9ImNscy0xIj4NCiAgICA8cGF0aCBpZD0iUGF0aCIgY2xhc3M9ImNscy0yIiBkPSJNNjQ3LjYzMSwyOTU1LjhhMjUuMDI5LDI1LjAyOSwwLDAsMSwyLjM5MiwxOS40N0EyNi4xMjMsMjYuMTIzLDAsMCwxLDYyNC44ODksMjk5NGgtMC4xMTZjLTkuNDQ2LS4zNi0xNi43ODctMy45OC0yMS44MTktMTAuNzYtOC45OTItMTIuMTItNy45MjEtMzEuMzctNC4yNzEtNDQuMTcsNi4yMTktMjEuODMsMjAuOTU2LTM3LjA3LDM1LjgzNy0zNy4wN2EyMS40LDIxLjQsMCwwLDEsMi43NzIuMTgsMi45NjksMi45NjksMCwwLDEsMi4wNiwxLjI4LDIuODM5LDIuODM5LDAsMCwxLC4zNzUsMi4zNmwtMi43MSw5LjUxYTIuOTEzLDIuOTEzLDAsMCwxLTIuNCwyLjA4Yy0xMi40LDEuODEtMTguNjIxLDE3Ljg3LTIxLjIxMSwyNy4xOGEyNi4yNjIsMjYuMjYyLDAsMCwxLDEwLjMwNi0yLjA3LDMwLjMsMzAuMywwLDAsMSw4LjIxOSwxLjE3QTI2LjE0MiwyNi4xNDIsMCwwLDEsNjQ3LjYzMSwyOTU1LjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTk2IC0yOTAyKSIvPg0KICAgIDxwYXRoIGlkPSJQYXRoLTIiIGRhdGEtbmFtZT0iUGF0aCIgY2xhc3M9ImNscy0yIiBkPSJNNzA2LjAyNSwyOTc1LjI3QTI2LjEyNCwyNi4xMjQsMCwwLDEsNjgwLjg5LDI5OTRoLTAuMTE2Yy05LjQ0Ni0uMzYtMTYuNzg4LTMuOTgtMjEuODE4LTEwLjc2LTguOTkzLTEyLjEyLTcuOTIzLTMxLjM3LTQuMjc0LTQ0LjE3LDYuMjItMjEuODMsMjAuOTU3LTM3LjA3LDM1LjgzOC0zNy4wN2EyMS4zNjQsMjEuMzY0LDAsMCwxLDIuNzcyLjE4LDIuOTY0LDIuOTY0LDAsMCwxLDIuMDYxLDEuMjgsMi44MzksMi44MzksMCwwLDEsLjM3NSwyLjM2bC0yLjcxLDkuNTFhMi45MTQsMi45MTQsMCwwLDEtMi40LDIuMDhjLTEyLjQsMS44MS0xOC42MjIsMTcuODctMjEuMjEzLDI3LjE4YTI2LjI2NywyNi4yNjcsMCwwLDEsMTAuMzA3LTIuMDcsMzAuMjkxLDMwLjI5MSwwLDAsMSw4LjIxOCwxLjE3LDI2LjEzNywyNi4xMzcsMCwwLDEsMTUuNywxMi4xMUEyNS4wNDcsMjUuMDQ3LDAsMCwxLDcwNi4wMjUsMjk3NS4yN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OTYgLTI5MDIpIi8+DQogIDwvZz4NCjwvc3ZnPg0K",(function(e){return e.theme.white}),(function(e){return e.theme.white})),M=function(){return a.createElement(E,null,a.createElement(x.Z,{title:"Blog List"}),a.createElement(g.Z,{className:"blog-list-wrapper"},a.createElement(c.W2,null,a.createElement(c.X2,null,a.createElement(c.JX,{className:"sm-12 md-8"},a.createElement(c.X2,null,a.createElement(c.JX,{className:"xs-12"},a.createElement(g.Z,{className:"post-block list"},a.createElement(g.Z,{className:"post-thumb-block"},a.createElement("img",{src:b.Z,alt:"prime blog page"}),a.createElement(g.Z,{className:"post-meta"},a.createElement(d.Z,{as:"span"},a.createElement(d.Z,{as:"em"}," 15 ")," DEC"))),a.createElement(m.Z,{as:"h2",className:"post-title"},a.createElement(r.Link,{to:"/blog-single"},"It is a long established fact that")),a.createElement(d.Z,{className:"post-entry"},"Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use"),a.createElement(r.Link,{to:"/blog-single",className:"readmore-btn"},"see more ",a.createElement(p.fNt,null)))),a.createElement(c.JX,{className:"xs-12"},a.createElement(g.Z,{className:"post-block list text-only"},a.createElement(m.Z,{as:"h2",className:"post-title"},a.createElement(r.Link,{to:"/blog-single"},"Friendship contrasted solicitude insipidity in introduced literature it.")),a.createElement(d.Z,{className:"post-entry"},"Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use"),a.createElement(r.Link,{to:"/blog-single",className:"readmore-btn"},"see more ",a.createElement(p.fNt,null)))),a.createElement(c.JX,{className:"xs-12"},a.createElement(g.Z,{className:"post-block list qutoe-post"},a.createElement(m.Z,{as:"h2",className:"post-title"},a.createElement(r.Link,{to:"/blog-single"},"Friendship contrasted solicitude insipidity in introduced literature it. He seemed denote except as oppose do spring my.")))),a.createElement(c.JX,{className:"xs-12"},a.createElement(g.Z,{className:"post-block list"},a.createElement(g.Z,{className:"post-thumb-block"},a.createElement("img",{src:h.Z,alt:"prime blog page"}),a.createElement(g.Z,{className:"post-meta"},a.createElement(d.Z,{as:"span"},a.createElement(d.Z,{as:"em"}," 15 ")," DEC"))),a.createElement(m.Z,{as:"h2",className:"post-title"},a.createElement(r.Link,{to:"/blog-single"},"It is a long established fact that")),a.createElement(d.Z,{className:"post-entry"},"Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use"),a.createElement(r.Link,{to:"/blog-single",className:"readmore-btn"},"see more ",a.createElement(p.fNt,null)))))),a.createElement(c.JX,{className:"sm-12 md-4"},a.createElement(u.Z,null))))))},L=t(8048),w=t(4962),N=t(9159),y=function(){return a.createElement(i.f6,{theme:w.Z},a.createElement(s.Z,null,a.createElement(N.Z,null),a.createElement(o.Z,{title:"Cryptik Blog List"}),a.createElement(l.Z,null),a.createElement(M,null),a.createElement(L.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-blog-list-js-8929e4caf0f6aeedad9f.js.map