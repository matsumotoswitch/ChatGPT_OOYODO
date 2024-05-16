javascript:
(
	function()
	{
		/* ChatGPT側の画像を変更 */
		{
			var customCSS = 
			`
				.gizmo-shadow-stroke.flex.h-6.w-6.items-center.justify-center.overflow-hidden.rounded-full
				, .gizmo-bot-avatar.flex.h-6.w-6.items-center.justify-center.overflow-hidden.rounded-full
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
		
		/* ChatGPTの名前欄変更 */
		function changeName()
		{
			document.querySelectorAll('.font-semibold.select-none').forEach
			(
				function(element)
				{
					/* 名前の「あなた」を「提督」に変更 */
					if (element.textContent === 'あなた')
					{
						element.textContent = '提督';
					}
					/* 名前の「ChatGPT」を「秘書艦『大淀』」に変更 */
					if (element.textContent === 'ChatGPT')
					{
						element.textContent = '秘書艦『大淀』';
					}
				}
			);
		}
		
		/* 名前の変更は0.1秒毎に行う */
		setInterval(changeName, 100);
	}
)();
