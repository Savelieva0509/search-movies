"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{197:function(A,t,e){e.d(t,{Cm:function(){return r},Hg:function(){return n},TW:function(){return i},hG:function(){return a},qF:function(){return B}});var c=e(388),g="946436ca4073577028dd0f99867a7b5f",n=function(){var A=c.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(g));return console.log(A),A},B=function(A){return c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(g,"&query=").concat(A,"&page=1"))},a=function(A){return c.Z.get("https://api.themoviedb.org/3/movie/".concat(A,"?api_key=").concat(g,"&language=en-US"))},i=function(A){return c.Z.get("https://api.themoviedb.org/3/movie/".concat(A,"/credits?api_key=").concat(g,"&language=en-US"))},r=function(A){return c.Z.get("https://api.themoviedb.org/3/movie/".concat(A,"/reviews?api_key=").concat(g,"&language=en-US&page=1"))}},541:function(A,t,e){e.r(t),e.d(t,{Cast:function(){return Y}});var c=e(439),g=e(204),n=e(791),B=e(689),a=e(197),i=e(63),r=e(184),Y=function(){var A=(0,n.useState)(null),t=(0,c.Z)(A,2),e=t[0],Y=t[1],o=(0,n.useState)(!1),s=(0,c.Z)(o,2),w=s[0],D=s[1],d=(0,B.UO)().movieId,f=(0,n.useState)(null),j=(0,c.Z)(f,1)[0];if((0,n.useEffect)((function(){try{D(!0),(0,a.TW)(d).finally((function(){return D(!1)})).then((function(A){Y(A.data.cast)}))}catch(A){j(A),D(!1)}}),[j,d]),e)return(0,r.jsxs)(r.Fragment,{children:[w&&(0,r.jsx)(g.Z,{}),e.length>0?(0,r.jsx)("ul",{children:e.map((function(A){var t=A.id,e=A.original_name,c=A.profile_path,g=A.character;return(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{width:200,height:300,src:c?"https://image.tmdb.org/t/p/w200/".concat(c):i,alt:e}),(0,r.jsx)("p",{children:e}),(0,r.jsxs)("p",{children:["Character: ",g]})]},t)}))}):(0,r.jsx)("p",{children:"We don`t have any information about cast"})]})}},63:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=541.e5dd12c0.chunk.js.map