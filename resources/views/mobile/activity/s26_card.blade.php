<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>学霸宝宝养成计划</title>
    <meta name="description" content="fenlibao"/>
    <meta name="format-detection" content="telephone=no">
    @include('public.head')
    {{--<link rel="stylesheet" href="{{$su}}/mobile/v2/css/common.css">--}}
    {{--<link rel="stylesheet" href="{{$su}}/mobile/css/search/search.css">--}}
    {{--<link rel="stylesheet" href="{{$su}}/mobile/v2/css/yi.min_temp.min.css?v={{$rv}}">--}}
    <link rel="stylesheet" href="{{$su}}/mobile/v2/css/index.min.css?v={{$rv}}">
    <style>
        .breast-banner {
            width: 750px;
            height: 360px;
            margin-bottom: 40px;
            object-fit: cover;
        }
        .breast-container {
            display: flex;
            display: -webkit-flex;
            flex-direction: row;
            -webkit-flex-direction: row;
            flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            margin-top: 0px;
            padding-left: 24px;
            padding-right: 36px;
            padding-top: 5px;
        }
        .breast-group-img {
            object-fit: cover;
            width: 218px;
            height: 218px;
            margin-left: 12px;
            margin-top: 11px;
            box-shadow: 3px 3px 5px #f7d77f;
        }
        .breast-join-num {
            color: #B87919;
            font-size: 24px;
            margin-left: 36px;
        }
    </style>
    <!--移动端版本兼容 -->
    <script type="text/javascript" src="{{$su}}/mobile/v2/js/pxrem.min.js"></script>
    <!--移动端版本兼容 end -->
    <script> var CIData = CIData || [];</script>
</head>
<body style="padding-top: 358px; background: url('{{$s26CardData[0]['img']}}') no-repeat center top, url('{{$su}}/mobile/v2/images/s26_strech_bg.png') repeat center">
{{--<img class="breast-banner" src="{{ $breastMilkData[0]['img'] }}">--}}
<span class="breast-join-num">已有{{$count}}人参加</span>
{{--<img style="display: none" src="{{$su}}/mobile/v2/images/s26_reg_more.png">--}}
<div id="mainContainer" class="breast-container">
    @foreach($s26CardData as $index => $item)
        @if($index > 0)
            <a href="index?defaultPath=/courseAudio/{{$item['cid']}}&forcejump=1" onclick="CIData.push(['trackEvent', 'wyeth', 'click_s26_card_activity', 'index', {{$index}}]);">
                <img class="breast-group-img" src="{{$item['img']}}">
            </a>
        @endif
    @endforeach
</div>

{{--<div style="width: 750px; display: flex; justify-content: center; margin-top: 21px">--}}
<img onclick="window.location.href = '/mobile/index?defaultPath=/all'" id="btn_reg_more" style="width: 494px; margin-left: 128px; margin-top: 25px;" src="{{$su}}/mobile/v2/images/s26_reg_more.png">
{{--</div>--}}

<script src="{{$su}}/js/jquery.min.js"></script>
<script src="{{$su}}/js/lodash.min.js"></script>
<script src="{{$su}}/mobile/v2/js/index.min.js"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="{{config('course.static_url')}}/js/weixin1.js?v={{$rv}}"></script>

<script>
    var fromOpenid = '{{$openid}}';
    var appUrl = '{{config('app.url')}}';

    var shareUrl = appUrl + '/mobile/S26Card?&from_openid=' + fromOpenid;
    var shareTitle = '学霸宝宝养成计划';
    var sharePicture = '{{$s26CardData[0]['img']}}';
    var shareDesc = '别家孩子都会叫妈了，自己宝宝还只会咿咿呀呀，难道是在娘胎里底子没打好？';

    var token;
    $.getJSON('/token', function (data) {
        if ('token' in data) {
            token = data.token;
        }
    });

    if (window.screen.height > 750) {
        console.log(window.screen.height);
        $("#btn_reg_more").css('margin-top', '150px');
    }

    var wxOptions = {
        debug: false,
        reqUrl: document.URL,
        shareTimelineData: {
            title: shareTitle,
            link: shareUrl,
            imgUrl: sharePicture,
            success: function() {
                if (token) {
//                    myRecordShare();
                }
            }
        },
        shareAppData: {
            title: shareTitle,
            link: shareUrl,
            imgUrl: sharePicture,
            desc: shareDesc,
            success: function() {
                if (token) {
//                    myRecordShare();
                }
            }
        }
    };
    WeiXinSDK.init(wxOptions);

    //根据QueryString参数名称获取值

    function getQueryStringByName(name){
        var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
        if(result == null || result.length < 1){
            return "";
        }
        return result[1];
    }
</script>

<!-- baidu statistics -->
@include('public.statistics')
<script>
    CIData.push(['trackEvent', 'wyeth', 's26_card_channel', 'wyeth_channel', getQueryStringByName('_hw_c')]);
</script>

</body>
</html>