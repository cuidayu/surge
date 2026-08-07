/*
 # > 软件名称: 酷我音乐
 # > 脚本描述: 去除全局广告、解锁会员权限【最高无损】
 # > 脚本作者: 𝐎𝐍𝐙𝟑𝐕
 # > 脚本版本: 3.0.1
 # > 更新时间: 2026-05-12 18:22:30
 # > 频道地址: https://t.me/onz3v_channel
 # > 群组地址: https://t.me/onz3v_group

hostname = *.kuwo.cn, ad.tencentmusic.com, abt-kuwo.tencentmusic.com

^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/((getIOSIsHideAd|getMotor)\.do|adEarnGuajian\/adinfo) url reject-200
^https?:\/\/rich\.kuwo\.cn\/(AdService|ecom)\/kaiping\/ad[iI]nfo url reject-200
^https?:\/\/wapi\.kuwo\.cn\/openapi\/v1\/user\/adVip\/info url reject-200
^https?:\/\/wapi\.kuwo\.cn\/openapi\/v1\/operate(\/(adVip|freeMode\/h5))?\/text url reject-200
^https?:\/\/ad\.tencentmusic\.com\/config\/uni url reject-200
^https?:\/\abt-kuwo\.tencentmusic\.com\/kuwo\/ui\/info url reject-200
^https?:\/\/vip1\.kuwo\.cn\/vip\/enc\/user\/vip url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/music(pay)?\.kuwo\.cn\/music.pay\?newver=3 url script-analyze-echo-response https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/.+\.kuwo\.cn\/mobi\.s\?f=kwxs&q= url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/tingshu\.kuwo\.cn\/api\/v2\/pay\/app\/getConfigInfo url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/tingshu\.kuwo\.cn\/v2\/api\/pay\/payInfo\/kwplayer\/payMiniBar url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/audiobookpay\.kuwo\.cn\/a\.p\?simpleToken=1 url script-analyze-echo-response https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/audiobookpay\.kuwo\.cn\/a\.p\?newver=3 url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/vip1\.kuwo\.cn\/(commercia\/)?vip\/(v2\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear)) url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/user\/vip url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/vip1\.kuwo\.cn\/commercia\/vip\/dressCenter\/getTabList url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/vip1\.kuwo\.cn\/commercia\/vipTab\/myTab\/base url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/vip1\.kuwo\.cn\/commercia\/userAssets\/downloadCoupon\/reduce url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js
^https?:\/\/homepages\.kuwo\.cn(\.eo\.dnse1\.com)?\/mgxh\.s url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js

*/
