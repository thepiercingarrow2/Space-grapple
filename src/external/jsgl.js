GL=function(){function b(a,b,c,d){var e=4*(Math.floor(a[0])+Math.floor(a[1])*d.w);if(d.depthEnabled){var f=a[2];if(f>c[e/4])return;c[e/4]=f}var g=[];g[0]=a[3][0],g[1]=a[3][1],g[2]=a[3][2],g[3]=a[3][3];var h=d.textures[d.curTexture];if(d.textureEnabled&&void 0!=h){var i=a[4][0],j=a[4][1];i=Math.floor(i*h.w)%h.w,j=Math.floor(j*h.h)%h.h;var k=4*(i+j*h.w);g[0]*=h.pixels[k+0],g[1]*=h.pixels[k+1],g[2]*=h.pixels[k+2],g[3]*=h.pixels[k+3]}b[e+0]=g[0],b[e+1]=g[1],b[e+2]=g[2],b[e+3]=g[3]}function c(a,b,c,d){for(var e=Math.floor(a[0][0]),f=Math.floor(a[0][1]),g=Math.ceil(a[1][0]),h=Math.ceil(a[1][1]),i=Math.abs(g-e),j=Math.abs(h-f),k=g>e?1:-1,l=h>f?1:-1,m=i-j,n=i>j?i:j;;){var o=Math.abs(i>j?g-e:h-f)/n,p=1-o,q=4*(e+f*d.w),r=1/(1*o/a[0][2]+1*p/a[1][2]);if(d.depthEnabled){if(r>c[q/4])continue;c[q/4]=r}var s=[];s[0]=(o*a[0][3][0]/a[0][2]+p*a[1][3][0]/a[1][2])*r,s[1]=(o*a[0][3][1]/a[0][2]+p*a[1][3][1]/a[1][2])*r,s[2]=(o*a[0][3][2]/a[0][2]+p*a[1][3][2]/a[1][2])*r,s[3]=(o*a[0][3][3]/a[0][2]+p*a[1][3][3]/a[1][2])*r;var t=d.textures[d.curTexture];if(d.textureEnabled&&void 0!=t){var u=(o*a[0][4][0]/a[0][2]+p*a[1][4][0]/a[1][2])*r,v=(o*a[0][4][1]/a[0][2]+p*a[1][4][1]/a[1][2])*r;u=Math.floor(u*t.w)%t.w,v=Math.floor(v*t.h)%t.h;var w=4*(u+v*t.w);s[0]*=t.pixels[w+0],s[1]*=t.pixels[w+1],s[2]*=t.pixels[w+2],s[3]*=t.pixels[w+3]}if(b[q+0]=s[0],b[q+1]=s[1],b[q+2]=s[2],b[q+3]=s[3],e==g&&f==h)break;var x=2*m;x>-j&&(m-=j,e+=k),i>x&&(m+=i,f+=l)}}function d(a,b,c,d){if(!d.cullingEnabled||a[0][5])for(var p,e=Math.floor(a[0][0]),f=Math.floor(a[1][0]),g=Math.floor(a[2][0]),h=Math.floor(a[0][1]),i=Math.floor(a[1][1]),j=Math.floor(a[2][1]),k=Math.min(e,f,g),l=Math.min(h,i,j),m=Math.max(e,f,g),n=Math.max(h,i,j),o=1/((i-j)*(e-g)+(g-f)*(h-j)),q=k;m>=q;q++)for(var r=l;n>=r;r++)if(ic0=((i-j)*(q-g)+(g-f)*(r-j))*o,!(ic0<0||ic0>1||(ic1=((j-h)*(q-g)+(e-g)*(r-j))*o,ic1<0||ic1>1||(ic2=1-ic0-ic1,ic2<0||ic2>1)))){p=4*(q+r*d.w);var s=1/(1*ic0/a[0][2]+1*ic1/a[1][2]+1*ic2/a[2][2]);if(d.depthEnabled){if(s>c[p/4])continue;c[p/4]=s}var t=[];t[0]=(ic0*a[0][3][0]/a[0][2]+ic1*a[1][3][0]/a[1][2]+ic2*a[2][3][0]/a[2][2])*s,t[1]=(ic0*a[0][3][1]/a[0][2]+ic1*a[1][3][1]/a[1][2]+ic2*a[2][3][1]/a[2][2])*s,t[2]=(ic0*a[0][3][2]/a[0][2]+ic1*a[1][3][2]/a[1][2]+ic2*a[2][3][2]/a[2][2])*s,t[3]=(ic0*a[0][3][3]/a[0][2]+ic1*a[1][3][3]/a[1][2]+ic2*a[2][3][3]/a[2][2])*s;var u=d.textures[d.curTexture];if(d.textureEnabled&&void 0!=u){var v=(ic0*a[0][4][0]/a[0][2]+ic1*a[1][4][0]/a[1][2]+ic2*a[2][4][0]/a[2][2])*s,w=(ic0*a[0][4][1]/a[0][2]+ic1*a[1][4][1]/a[1][2]+ic2*a[2][4][1]/a[2][2])*s;v=Math.floor(v*u.w)%u.w,w=Math.floor(w*u.h)%u.h;var x=4*(v+w*u.w);t[0]*=u.pixels[x+0],t[1]*=u.pixels[x+1],t[2]*=u.pixels[x+2],t[3]*=u.pixels[x+3]}b[p+0]=t[0],b[p+1]=t[1],b[p+2]=t[2],b[p+3]=t[3]}}function e(a,b,c,e){if(e.cullingEnabled){if(!a[0][5])return;a[2][5]=!0}d([a[0],a[1],a[2]],b,c,e),d([a[2],a[3],a[0]],b,c,e)}function f(a){return 0>a?0:a>1?1:a}var a={};return a.POINTS=0,a.LINES=1,a.TRIANGLES=4,a.QUADS=7,a.NO_ERROR=0,a.INVALID_ENUM=1280,a.INVALID_VALUE=1281,a.INVALID_OPERATION=1282,a.DEPTH_TEST=2929,a.CULL_FACE=2884,a.TEXTURE_2D=3553,a.BYTE=5120,a.FLOAT=5126,a.MODELVIEW=5888,a.PROJECTION=5889,a.DEPTH_COMPONENT=6402,a.RGBA=6408,a.DEPTH_BUFFER_BIT=256,a.COLOR_BUFFER_BIT=16384,a.Context=function(b,c){this.w=b,this.h=c,this.bufColor=[],this.bufDepth=[],this.matModelView=mat4.create(),this.matProj=mat4.create(),this.curMatrix=this.matModelView,this.err=a.NO_ERROR,this.bufColorClear=[0,0,0,1],this.bufDepthClear=1,this.beginMode=-1,this.beginColor=[1,1,1,1],this.beginTexCoord=[0,0],this.textures=[],this.curTexture=0,this.depthEnabled=!1,this.cullingEnabled=!1,this.textureEnabled=!1},a.Context.prototype.enable=function(b){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):b!=a.DEPTH_TEST&&b!=a.CULL_FACE&&b!=a.TEXTURE_2D?(this.err=a.INVALID_ENUM,null):void(b==a.DEPTH_TEST?this.depthEnabled=!0:b==a.CULL_FACE?this.cullingEnabled=!0:b==a.TEXTURE_2D&&(this.textureEnabled=!0))},a.Context.prototype.disable=function(b){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):b!=a.DEPTH_TEST&&b!=a.CULL_FACE&&b!=a.TEXTURE_2D?(this.err=a.INVALID_ENUM,null):void(b==a.DEPTH_TEST?this.depthEnabled=!1:b==a.CULL_FACE?this.cullingEnabled=!1:b==a.TEXTURE_2D&&(this.textureEnabled=!1))},a.Context.prototype.getError=function(){return-1!=this.beginMode?0:this.err},a.Context.prototype.clearColor=function(b,c,d,e){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):void(this.bufColorClear=[f(b),f(c),f(d),f(e)])},a.Context.prototype.clearDepth=function(b){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):void(this.bufDepthClear=b)},a.Context.prototype.clear=function(b){if(b-a.COLOR_BUFFER_BIT-a.DEPTH_BUFFER_BIT>0)return this.err=a.INVALID_VALUE,null;if(0!=(b&a.COLOR_BUFFER_BIT))for(var c=this.w*this.h*4,d=0;c>d;d++)this.bufColor[d]=this.bufColorClear[d%4];if(0!=(b&a.DEPTH_BUFFER_BIT))for(var c=this.w*this.h,d=0;c>d;d++)this.bufDepth[d]=this.bufDepthClear},a.Context.prototype.begin=function(b){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):b!=a.POINTS&&b!=a.LINES&&b!=a.TRIANGLES&&b!=a.QUADS?(this.err=a.INVALID_ENUM,null):(this.beginMode=b,void(this.beginVertices=[]))},a.Context.prototype.end=function(){if(-1==this.beginMode)return this.err=a.INVALID_OPERATION,null;for(var f=0;f<this.beginVertices.length;f++){var g=this.beginVertices[f],h=[g[0],g[1],g[2],1];if(mat4.multiplyVec4(this.matModelView,h),this.cullingEnabled&&(this.beginMode==a.QUADS&&f%4==0||this.beginMode==a.TRIANGLES&&f%3==0)){var i=vec3.create();vec3.subtract(this.beginVertices[f],this.beginVertices[f+1],i);var j=vec3.create();vec3.subtract(this.beginVertices[f],this.beginVertices[f+2],j);var k=vec3.create();vec3.cross(i,j,k);var l=vec3.dot(k,this.beginVertices[f]);g[5]=0>=l}mat4.multiplyVec4(this.matProj,h);var m=[];m[0]=h[0]/h[3],m[1]=h[1]/h[3],m[2]=h[2]/h[3],g[0]=(m[0]+1)/2*this.w,g[1]=(1-m[1])/2*this.h,g[2]=m[2],this.beginVertices[f]=g}if(this.beginMode==a.POINTS)for(var f=0;f<this.beginVertices.length;f+=1)b(this.beginVertices[f],this.bufColor,this.bufDepth,this);else if(this.beginMode==a.LINES&&this.beginVertices.length>=2)for(var f=0;f<this.beginVertices.length;f+=2)c([this.beginVertices[f],this.beginVertices[f+1]],this.bufColor,this.bufDepth,this);else if(this.beginMode==a.TRIANGLES&&this.beginVertices.length>=3)for(var f=0;f<this.beginVertices.length;f+=3)d([this.beginVertices[f],this.beginVertices[f+1],this.beginVertices[f+2]],this.bufColor,this.bufDepth,this);else if(this.beginMode==a.QUADS&&this.beginVertices.length>=4)for(var f=0;f<this.beginVertices.length;f+=4)e([this.beginVertices[f],this.beginVertices[f+1],this.beginVertices[f+2],this.beginVertices[f+3]],this.bufColor,this.bufDepth,this);this.beginMode=-1,this.beginVertices=null},a.Context.prototype.color4f=function(a,b,c,d){this.beginColor=[f(a),f(b),f(c),f(d)]},a.Context.prototype.color3f=function(a,b,c){return this.color4f(a,b,c,1)},a.Context.prototype.texCoord2f=function(a,b){this.beginTexCoord=[a,b]},a.Context.prototype.vertex3f=function(b,c,d){return-1==this.beginMode?(this.err=a.INVALID_OPERATION,null):void this.beginVertices.push([b,c,d,this.beginColor,this.beginTexCoord])},a.Context.prototype.matrixMode=function(b){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):b!=a.MODELVIEW&&b!=a.PROJECTION?(this.err=a.INVALID_ENUM,null):void(this.curMatrix=b==a.MODELVIEW?this.matModelView:this.matProj)},a.Context.prototype.loadIdentity=function(){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):void mat4.identity(this.curMatrix)},a.Context.prototype.translatef=function(b,c,d){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):void mat4.translate(this.curMatrix,[b,c,d])},a.Context.prototype.scalef=function(b,c,d){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):void mat4.scale(this.curMatrix,[b,c,d])},a.Context.prototype.rotatef=function(b,c,d,e){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):void mat4.rotate(this.curMatrix,b,[c,d,e])},a.Context.prototype.perspective=function(a,b,c,d){mat4.perspective(a,b,c,d,this.curMatrix)},a.Context.prototype.lookAt=function(a,b,c,d,e,f,g,h,i){mat4.lookAt([a,b,c],[d,e,f],[g,h,i],this.curMatrix)},a.Context.prototype.genTextures=function(b,c){if(-1!=this.beginMode)return this.err=a.INVALID_OPERATION,null;if(0>b)return this.err=a.INVALID_VALUE,null;for(var d=0;b>d;d++){var e=this.textures.length+1;c[d]=e,this.textures[e-1]={pixels:null,w:0,h:0}}},a.Context.prototype.bindTexture=function(b,c){return-1!=this.beginMode?(this.err=a.INVALID_OPERATION,null):b!=a.TEXTURE_2D?(this.err=a.INVALID_ENUM,null):void(b==a.TEXTURE_2D&&(this.curTexture=c-1))},a.Context.prototype.texImage2D=function(b,c,d,e,f){if(-1!=this.beginMode)return this.err=a.INVALID_OPERATION,null;if(b!=a.TEXTURE_2D)return this.err=a.INVALID_ENUM,null;if(e!=a.BYTE&&e!=a.FLOAT)return this.err=a.INVALID_ENUM,null;var g=this.textures[this.curTexture];if(void 0!=g){g.pixels=[],g.w=c,g.h=d;for(var h=c*d*4,i=0;h>i;i+=4)g.pixels[i+0]=f[i+0]/(e==a.BYTE?255:1),g.pixels[i+1]=f[i+1]/(e==a.BYTE?255:1),g.pixels[i+2]=f[i+2]/(e==a.BYTE?255:1),g.pixels[i+3]=f[i+3]/(e==a.BYTE?255:1)}},a.Context.prototype.readPixels=function(b,c,d,e,f,g,h){if(-1!=this.beginMode)return this.err=a.INVALID_OPERATION,null;if(f!=a.RGBA&&f!=a.DEPTH_COMPONENT||g!=a.BYTE&&g!=a.FLOAT)return this.err=a.INVALID_ENUM,null;if(0>d||0>e)return this.err=a.INVALID_VALUE,null;if(f==a.RGBA)for(var i=this.w*this.h*4,j=0;i>j;j+=4)h[j+0]=this.bufColor[j+0]*(g==a.BYTE?255:1),h[j+1]=this.bufColor[j+1]*(g==a.BYTE?255:1),h[j+2]=this.bufColor[j+2]*(g==a.BYTE?255:1),h[j+3]=this.bufColor[j+3]*(g==a.BYTE?255:1);else if(f==a.DEPTH_COMPONENT)for(var i=this.w*this.h,j=0;i>j;j++)h[j+0]=this.bufDepth[j]*(g==a.BYTE?255:1)},a}();
