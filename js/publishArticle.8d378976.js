(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["publishArticle"],{5439:function(t,e,i){},af43:function(t,e,i){"use strict";var a=i("5439"),s=i.n(a);s.a},b704:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"publish-article"},[i("Publish",{ref:"publish",attrs:{labels:t.labels,tableData:t.tableData,edit:!1,title:"发表文章",btnText:"添加"},on:{handleSumbit:t.handleSumbit,resetDialog:t.resetDialog}})],1)},s=[],l=i("2423"),n=i("21f4"),r=i("b16a"),u={name:"PublishArticle",components:{Publish:n["a"]},data:function(){return{file:"",labels:{tag:"标签",title:"标题",description:"描述"},tableData:[{tag:"",title:"",description:""}]}},methods:{handleSumbit:function(t){var e=this;l["a"].publishArticle(t).then((function(i){i.data&&(e.submitSuccess(i.data),r["a"].createOneTimeline({title:t.title,status:"发布文章"}))}))},submitSuccess:function(t){this.$refs.publish.$refs.quillEditor.quill.root.innerHTML="",sessionStorage.clear(),this.resetDialog(),this.$message({message:t.msg,duration:1e3})},resetDialog:function(){for(var t in this.tableData[0])this.tableData[0][t]=""}}},c=u,o=(i("af43"),i("2877")),b=Object(o["a"])(c,a,s,!1,null,"1bc3c26f",null);e["default"]=b.exports}}]);
//# sourceMappingURL=publishArticle.8d378976.js.map