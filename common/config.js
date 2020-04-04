// api调用目录
// export const apiUrl = 'https://api.mymoyi.cn/api/moyichat/'
// export const apiUrl = 'http://modi.com/api/moyicosmic/'
// api调用目录
// export const apiUrl = 'https://api.mymoyi.cn/api/moyichat/'
export const apiUrl = 'https://api.mymoyi.cn/api/moyicosmic/'
// export const apiUrl = 'http://192.168.43.15/api/moyicosmic/'


// cnd域名。没有就填写后端域名
// export const cdnUrl = 'http://modi.com'
// export const cdnUrl = 'https://api.mymoyi.cn'
export const cdnUrl = 'http://cdn-fyx.mymoyi.cn' // 七牛云
// export const cdnUrl = 'http://192.168.43.15
// export const cdnUrl = 'https://moyioss.oss-cn-shanghai.aliyuncs.com'

// webSocket

// export const webSocket = 'ws://modi.com:8282'
export const webSocket = 'ws://api.mymoyi.cn:8282/'
// export const webSocket = 'wss://api.mymoyi.cn:8282/'
// export const webSocket = 'ws://192.168.43.15:8282/'

// 网站标题
export const title = 'MoYiCosmic 0.1'
// logo使用base64编码
export const logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAADAFBMVEUAAAD///////////////////8vLy////9aWlr///////////81NTX///8yMjL///////////////9oaGj////d3d1qamr///////+ampr///9JSUn///9JSUltbW3///9ycnL////g4OD///8rKytHR0f///////////////+1tbVqamr///+zs7OWlpYfHx+GhoZKSkpHR0ckJCTd3d3e3t65ubm0tLSCgoL////29vbf39+zs7OHh4ebm5toaGiAgIBcXFwgICD////i4uLx8fHd3d2/v7+UlJRlZWVnZ2fe3t7b29u3t7eAgICFhYU4ODje3t7////u7u7f39/19fX///+VlZW/v7+AgIBKSkr////////////////w8PDAwMC0tLS+vr7e3t6+vr5/f398fHyOjo7////39/fs7Oz////////////k5OTw8PDZ2dny8vLi4uLd3d20tLTLy8t/f395eXnNzc20tLRFRUUcHBz////////v7+/Z2dnf39+4uLjJycnKysrAwMCVlZW1tbW4uLiVlZVISEj7+/v////29vbg4OD09PTk5OTe3t6zs7Pj4+Pl5eXc3Nx+fn6Xl5d1dXWioqL////////19fXe3t7b29vk5OTAwMB+fn6BgYF/f3/KyspLS0ugoKB3d3f6+vr6+vr39/f19fXt7e3l5eXMzMz////V1dXV1dXOzs7o6Oi+vr6Tk5OlpaW1tbXo6Oj///+lpaXm5uaTk5Pg4OCVlZW7u7tdXV10dHSLi4u1tbW0tLT////4+Pj19fX8/Pzv7+/t7e3h4eH39/f4+Pjr6+ve3t7////j4+Pn5+f4+Pj+/v719fWwsLDW1tbT09Pj4+OTk5N/f3/d3d2enp7t7e3g4OD39/ft7e3////Z2dmvr6+8vLzLy8vz8/Pd3d2hoaG/v7/////29vb09PT////ExMSAgIDJycmlpaX////FxcXNzc3GxsakpKTn5+fCwsKqqqqlpaX////////29vacnJz///9dOpxhAAAA/3RSTlMA+Pz6/vUD5QPr1u8G0wft3tzzE+JrCPfgJ9Ab6BQPxwzxfcwODfLEvbpmGthLNB0YEAsKcGJaUyvOrHJFJh8fGxkSv5aUj2s5KyWDfDsj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'
// 次要样式	文字 图标的颜色
export const avatar = cdnUrl + '/assets/img/avatar.png'
// 本地端主动给服务器ping的时间, 0 则不开启 , 单位秒 
export const pingInterval = 0;
// 超时时间 超出时间段将重连系统 单位秒
export const timeout = 30


