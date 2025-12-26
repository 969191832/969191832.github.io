nt-family: -apple-system, sans-serif;
            }
			            #wechat-mask p {
							                font-size: 18px;
											                color: #333;
															                line-height: 1.6;
																			                margin: 0 20px;
																							            }
																										            #wechat-mask b {
																														                color: #49b1f5;
																																		            }
																																					            #wechat-arrow {
																																									                position: absolute;
																																													                top: 20px;
																																																	                right: 20px;
																																																					                font-size: 40px;
																																																									                color: #333;
																																																													                animation: float 1.5s infinite ease-in-out;
																																																																	            }
																																																																				            @keyframes float {
																																																																								                0%, 100% { transform: translateY(0); }
																																																																												                50% { transform: translateY(-10px); }
																																																																																            }
																																																																																			        `;
																																																																																					        document.head.appendChild(style);

																																																																																							      document.addEventListener('DOMContentLoaded', function () {
    // 判断是否在微信浏览器中
    var ua = navigator.userAgent.toLowerCase();
    var isWeChat = ua.indexOf('micromessenger') !== -1;

    if (isWeChat) {
        // 创建遮罩层样式
        var style = document.createElement('style');
        style.innerHTML = `
            #wechat-mask {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.95);
                z-index: 99999;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                fo  // 创建遮罩层 HTML 结构
        var div = document.createElement('div');
        div.id = 'wechat-mask';
        div.innerHTML = `
            <div id="wechat-arrow">↗</div>
            <p>由于微信限制，无法直接浏览</p>
            <p>请点击右上角 <b>...</b></p>
            <p>选择 <b>在浏览器打开</b> 以继续访问</p>
        `;

        // 插入到页面
        document.body.appendChild(div);
        
        // 禁止页面滚动
        document.body.style.overflow = 'hidden';
    }
});
