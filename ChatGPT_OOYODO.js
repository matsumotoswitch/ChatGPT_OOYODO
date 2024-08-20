javascript:
(
	function()
	{
		/* ChatGPT側の画像を変更 */
		{
			var customCSS = 
			`
				.gizmo-bot-avatar.flex.h-8.w-8.items-center.justify-center.overflow-hidden.rounded-full
				, .relative.p-1.rounded-sm.flex.items-center.justify-center.bg-token-main-surface-primary.text-token-text-primary.h-8.w-8
				{
					width: 64px !important;
					height: 64px !important;
				}
				
				/* 背景画像設定 */
				.relative.p-1.rounded-sm.flex.items-center.justify-center.bg-token-main-surface-primary.text-token-text-primary.h-8.w-8
				{
					background-image: url('https://raw.githubusercontent.com/matsumotoswitch/ChatGPT_OOYODO/main/ooyd_lr.png');
					background-color: transparent !important;
					/* ここでもサイズを指定しないと画像が小さいまま */
					width: 64px !important;
					height: 64px !important;
				}
				
				/* SVGを非表示にする */
				.relative.p-1.rounded-sm.flex.items-center.justify-center.bg-token-main-surface-primary.text-token-text-primary.h-8.w-8 svg
				{
					display: none;
				}
			`;
			
			var style = document.createElement('style');
			style.type = 'text/css';
			style.appendChild(document.createTextNode(customCSS));
			document.head.appendChild(style);
		}
	}
)();
