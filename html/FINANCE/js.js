window.onload = function () {
    Vue.component('lunbo', {
        template: `
    <div style="background-color: rgb(25, 206, 197); height:576px;">
            <div style="margin: 0 64px;" class="clearfix">
                <div style="float: left;width:726px;height:400px;margin-top:80px;margin-left:40px;">
                    <h5 style="font-weight: bolder;text-align:center;margin-bottom:20px;;font-size: 36px;color: #fff;">您身边的理财专家，十年陪伴值得信赖</h5>
                    <div>
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(i,$index) in lunbo_arr">
                                    <img :src="i" alt="" style="height:349px;display: block; margin: auto;">
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <div style="color:#fff;float: right;border-radius:10px;text-align:center;margin-top:120px;margin-right:20px;width:370px;height:370px; background-color:rgba(255,255,255,.5)">
                    <p style="font-size:20px;margin:40px 0;">预期年化收益率</p>
                    <p style="margin:40px 0;font-family: georgia;font-size: 40px;">5.6%~11.5%</p>
                    <p style="margin:40px 0;font-size:22px;">收益更多，风险更小</p>
                    <div>
                        <a href="" style="line-height:45px;;color: #ffffff;background-color: #f7a21e;display:block;margin:auto;width:297px;height:45px;font-size: 16px;background-color:">立即登录</a>
                    </div>
                    <p style="font-size:14px;line-height:40px;">已有账号，立即登录</p>
                </div>
            </div>
        </div>
    `,
        data() {
            return {
                lunbo_arr: ["https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNzRjODU5YjUzMjEzM2Q0ZTc0ZTRjNWE0YmZlMjk4Yy5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9jMGJiNGJmYTk1MzBiNjU2MDViMmNhZjI5YjljNDM3MS5wbmc_p_p100_p_3D.png"
                ]

            }
        }
    })

    Vue.component('jindu', {
        template: `
        <div style="display:flex;margin:30px 50px;">
                <div v-for="(i,$index) in jindu_arr" style="text-align:center;flex:1;margin-right:10px;margin-left:10px;">
                    <el-progress type="circle" :stroke-width="10" :width="80" :percentage="i.jindu" :color="'#e68a00'"></el-progress>
                    <p>{{i.tit}}</p>
                </div>
        </div>

    `,
        data() {
            return {
                jindu_arr: [{ jindu: 95, tit: "收益率" }, { jindu: 85, tit: "注册用户" }, { jindu: 95, tit: "近期交易数量" }, { jindu: 70, tit: "注册用户" }, { jindu: 70, tit: "收益率" }, { jindu: 60, tit: "收益率" }]
            }
        }
    })

    Vue.component('tit', {
        template: `
        <div>
            <h5 style="font-size: 36px;color: #666;"><slot name="ht5"></slot></h5>
            <p style="width: 60px;background-color: #f7a21e;height: 5px;margin:10px auto;"></p>     
        </div>
    `
    })


    Vue.component('cont', {
        template: `
        <div style="text-align: center;padding-top: 50px;">
                <tit>
                    <span slot="ht5">十年陪伴，值得信赖</span>
                </tit>
                <div style="margin:50px 50px;display: flex;color: #696969;">
                    <div style="flex:1;" v-for="(i,$index) in cont_arr">
                        <div>
                            <img :src="i.img" alt="" style="height:110px;">
                        </div>
                        <h5 style="font-size: 20px;line-height:50px;">{{i.tit}}</h5>
                        <p style="font-size: 13px;line-height:20px;">{{i.txt1}}</p>
                        <p style="font-size: 13px;line-height:20px;">{{i.txt2}}</p>
                    </div>
                </div>
            </div>
    `,
        data() {
            return {
                cont_arr: [{ img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC83MTI2ZjRlMjI3ZjkwYWYzMzY2OWU3YThhZmVlNjM4My0xMzl4MTEwLnBuZw_p_p100_p_3D_p_p100_p_3D.png", tit: "理想回报 工薪门槛", txt1: "一个炫酷的网站才配得上创业者的新潮", txt2: " 飞页采用最新技术，有大气舒适的界面" },
                { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9hMGEzNGYyMzc5OTdkMjhjMDA3ZGEzYzc3ODgzYjBkMS0xMzl4MTEwLnBuZw_p_p100_p_3D_p_p100_p_3D.png", tit: "十年相伴 信用随行", txt1: "一个炫酷的网站才配得上创业者的新潮", txt2: " 飞页采用最新技术，有大气舒适的界面" },
                { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC82NWQ2MDc5ZWUzZjcxYTMzMzdiNzQ4ZjJiZGYzNjZmZi0xMzl4MTEwLnBuZw_p_p100_p_3D_p_p100_p_3D.png", tit: "专业风控 稳健投资", txt1: "一个炫酷的网站才配得上创业者的新潮", txt2: " 飞页采用最新技术，有大气舒适的界面" },
                { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9mNDFmZTJiM2FlMjVhNzg3YWVjZWU3NjZiZWFkNzEwMC0xMzl4MTEwLnBuZw_p_p100_p_3D_p_p100_p_3D.png", tit: "实力雄厚 安全保障", txt1: "一个炫酷的网站才配得上创业者的新潮", txt2: " 飞页采用最新技术，有大气舒适的界面" }
                ]
            }
        }
    })


    Vue.component('cont2', {
        template: `
        <div style="text-align: center;padding-top: 50px;background-color:#f4f4f4;border-bottom:1px solid #ccc;">
                <tit>
                    <span slot="ht5">优选出借计划</span>
                </tit>
                <div style="margin:50px 50px;display: flex;color: #696969;" >
                    <div style="flex:1;" v-for="(i,$index) in cont2_arr" class="cont2">
                        <h5 style="margin-bottom:60px;;font-size:16px;line-height:20px;">{{i.txt1}}</h5>
                        <p style="color: #808080;font-size14px;">预期年化</p>
                        <p style="line-height:60px;font-family: georgia;font-size:36px;color: #FF0000;">{{i.txt2}}</p>
                        <div>
                            <a href="" style="display:block;color:#fff;margin:auto;background-color: rgb(226, 140, 27);width:220px;height:34px;line-height:34px;">立即投资</a>
                        </div>
                    </div>
                </div>
                <div style="margin:50px 0px;"><a href="" class="cont2-a">查看更多</a></div>
        </div>
    `,
        data() {
            return {
                cont2_arr: [{ txt1: "优选借出计划180天封闭期", txt2: "6.8%" },
                { txt1: "优选借出计划90天封闭期", txt2: "6.3%" },
                { txt1: "优选借出计划45天封闭期", txt2: "5.9%" },
                { txt1: "优选借出计划30天封闭期", txt2: "5.6%" }
                ]
            }
        }
    })

    Vue.component('foot', {
        template: `
        <div style="text-align: center;padding-top: 50px;padding-bottom:50px;background-color:#f4f4f4;border-bottom:1px solid #ccc;">
                <tit>
                    <span slot="ht5">战略合作伙伴</span>
                </tit>
                <div style="display:flex;margin:0px 30px;flex-wrap:wrap;">
                    <div style="flex:1;margin:10px 30px;"v-for="(i,$index) in foot_arr">
                        <a href=""><img :src="i" alt="" style="height:60px;"/></a>
                    </div>
                </div>

        </div>
    `,
        data() {
            return {
                foot_arr: [
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9jZTFkODJlNWZlNjI4MGNlM2Q1ZWM4ZWI4NGM3MzViMi5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS80NmQ0ODAyYWFjYzU5ZWE5MzQ2YmE1ZDlkMmM5NDA5MS5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8zNzIyNDM2ZDM4NGZjYzRhY2NlZWE1MmRkYjg1MzY4MC5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS80OTNkM2E4YTY5M2ZmYTg0ZWE2Y2RhYTc5Njc2OTg4Zi5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS84NWNlYWE5NDA5Y2NjNjNhODQzYWQ3ZmFmNjMzZWY4YS5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wNjU4ZGRmYjBmM2ZkOWY5NjdlMDAzMDgxZDE4ZDdjZC5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kNGJiNzU4NTkwYWFmODE2ZmY0MGQyNTU5NTdiMzczYS5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNmI0OTU1NTA4NDNkMjZkNjI2MzY1MDFkMmE4NjJmYS5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8xMjA4NDcwM2Q0OTEyMmIzNzU2NTg5ZDE2YTZmZjgzMS5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9hZWZhM2RhY2E2ZjhmNTZkNzZmNmVkNmRhMDFlZmQ0OC5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9hNDA0ZmQxNjkzYzIyYzVkMmZhOGM1Nzc0NDdkMjg2NC5wbmc_p_p100_p_3D.png",
                    "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS82YzY2NzBhZmNjNTNiM2MwZTE1ZTFlOTI4MTQ4ZTY3OS5wbmc_p_p100_p_3D.png",
                ]
            }
        }
    })

    Vue.component('wehead', {
        template: `
    <div>
        <div style="height: 375px;background-color: #19cec5;text-align: center;overflow: hidden;">
                <img src="https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9jMGJiNGJmYTk1MzBiNjU2MDViMmNhZjI5YjljNDM3MS02MDB4MjkxLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="" style="margin-top: 90px;">
            </div>
            <div style="padding-top: 40px;">
                <tit style="text-align: center;"><span slot="ht5">十年陪伴，值得信赖</span></tit>
                <div style="padding: 20px 350px 100px;color: #808080;font-size:14px;line-height:30px;">
                    <p style="margin-bottom: 30px;">
                        FINANCE金融理财公司成立于2006年，応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑！恒！恓！恔恖恗恘恙恚恛恜恝恞恠恡恦，恧恫恬恮恰恱恲恴恷恹恺，恻恽恾恿悀悁悂悃悆悇悈悊。
                    </p>
                    <p>応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑！恒！恓！恔恖恗恘恙恚恛恜恝恞恠恡恦，恧恫恬恮恰恱恲恴恷恹恺，恻恽恾恿悀悁悂悃悆悇悈悊。</p>
                </div>
            </div>
    </div>
`
    })

    Vue.component('consult-type', {
        template: `
        <div>
            <div style="height: 375px;background-color: #19cec5;text-align: center;overflow: hidden;">
                <img src="https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS83MmY4ODk5OTI3NTc2NzZjN2EwZWQ5YWZmNjZjZTE0My02MDB4MjkxLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="" style="margin-top: 90px;">
            </div>
            <div style="margin:20px 100px;" class="clearfix">
            <div style="float:left;width:278px;line-height:36px;font-size:18px;">
                <div class="aside" style="height:605px;position:relative;background-color:#f2f2f2;">
                    <div style="position: absolute;left: px;bottom: 0px;">
                        <img src="https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC82YzYwYTY1YjFiZTJlYzczMGY2MjZlNTgzMDBlYTQ2NC5wbmc_p_p100_p_3D.png" alt="" style="width: 278px;">
                    </div>
                    <div style="background-color: #f7a21e;text-align:center;color:#fff;">
                        产品分类
                    </div>
                    <div>
                        <a v-for="(i,$index) in type_arr" @click="getind($index)" class="types" style="display:block;">
                            <i class="el-icon-caret-right"></i><span>{{i.type}}</span>
                        </a>
                    </div>
                    
                </div>
            </div>
            
                <div style="float:right;max-width:888px;border:1px solid #f7a21e;background-color:#f2f2f2;box-sizing:border-box;">
                        <div style="background-color: #f7a21e;text-align:center;color:#fff;line-height:36px;">最新产品介绍</div>

                        <div style="position: relative;display:flex;flex-wrap:wrap;padding:10px;" v-if="info">
                            <div v-for="(i,$index) in type_arr[index].types" style="flex:1;margin:5px;text-align:left;" @click="getelement(i),info=!info,fs()">
                                <img :src="i.img" alt="" style="height:238px;" />
                                <p style="text-align:center;line-height:40px;color: #888888;">{{i.names}}</p>
                            </div>
                        </div>
                        

                            <div v-if="!info" style="padding-top:80px;">
                                <typetxt :types="json">
                                    
                                </typetxt>
                            </div>

                        
                </div>
            </div>
            


        </div>
    `,
        data() {
            return {
                index: 0,
                json: '',
                info: true,
                type_arr: [{ type: "产品分类一", types: [{ img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品一" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS84MDg1ODcwZmQ2YjYxNGU5ZTRjYmQzM2MxYzNhZWY0OC0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品二" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wNGY1NTM1Njc0MTBiZjhlZGY1YzEwMmM1YmJkOTY3Ny0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品三" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS81NzJiMzk2YmY5ZTZlNjljZDlkOTZjMjI2ZDRiMWU0ZC0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品四" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品五" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wMDU1MTQ2MGFjNDU0YTNkYmUyYzUxYmE3OGJkZDdmNi0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品六" }], },
                { type: "产品分类二", types: [{ img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品二" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品三" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wNGY1NTM1Njc0MTBiZjhlZGY1YzEwMmM1YmJkOTY3Ny0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品一" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品五" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品四" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品六" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品七" }] },
                { type: "产品分类三", types: [{ img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wNGY1NTM1Njc0MTBiZjhlZGY1YzEwMmM1YmJkOTY3Ny0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品二" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品三" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品四" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品五" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品六" }, { img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0zNTB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", names: "产品七" }] }
                ]
            }
        },
        mounted() {
            bus.$on('f2', (a) => {
                this.info = a
            })
        },
        methods: {
            getind(ind) {
                this.index = ind
            },
            getelement(ite) {
                this.json = ite
            },
            fs() {
                this.n1++
                bus.$emit('f1', this.info)
                console.log(this.info)
            }
        }
    })

    Vue.component('typetxt', {
        template: `
        <div style="width: 888px; padding-left:20px;box-sizing: border-box;">
            <div class="clearfix" >
                <div style="float: left;">
                    <img :src="data.img" alt="" style="width: 363px;height: 363px;">
                </div>
                <div style="float: right; width: 430px;">
                    <p style="font-size: 22px;">{{data.names}}</p>
                    <div style="border-top: 1px solid #000;border-bottom: 1px solid #000;padding:10px 0px; ">
                        <el-rate v-model="value" disabled  text-color="#ff9900" style="display: inline-block;">
                        </el-rate>
                        <span style="float: right;">五星产品</span>
                    </div>
                    <p style="color: #808080;line-height: 1.5em;margin-top:15px;">
                        応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑！恒！恓！恔恖恗恘恙恚恛恜恝恞恠恡恦，恧恫恬恮恰恱恲恴恷恹恺，恻恽恾恿悀悁悂悃悆悇悈悊。
                    </p>
                    <div>
                        <a href="" style="display: block;margin: auto;text-align: center;line-height: 38px" class="zixun">在线咨询</a>
                    </div>
                    <div>
                        <span>分享到：</span>
                    </div>
                    
                    
                </div>
                <div style="float:left; width:100%;margin-top:150px;margin-bottom:30px;">
                        <a style=" display: block;width: 100px;height: 50px;line-height: 50px;margin: auto;" class="zixun" @click="info=!info,fn()">
                        返回列表
                        </a>
                </div>
            </div>
        </div>
    
    `,
        props: ['types', 'infos'],
        data() {
            return {
                data: this.types,
                info: this.infos,
                value: 5
            }
        },
        watch: {
            infos(a, b) {
                this.info = a
            }
        },
        mounted() {
            bus.$on('f1', (a) => {
                this.info = a
            })
        },
        methods: {

            fn() {
                this.n2++
                bus.$emit('f2', this.info)
                console.log(this.info)
            }
        },

    })
    var bus = new Vue()

    Vue.component('zixun', {
        template: `
        <div>
            <div style="height: 375px;background-color: #19cec5;text-align: center;overflow: hidden;">
                <img src="https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8yN2FhMjg5MzQ4YTZiOTBhOTczNzQwNGIzMDQ4M2RhYS02MDB4MjkzLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="" style="margin-top: 90px;">
            </div>
            <div style="margin: 40px 320px;color: #808080;">
                <div style="font-size: 14px;line-height: 28px;margin-bottom:40px;">
                    <p>FINANCE金融理财公司成立于2006年，応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑！恒！恓！恔恖恗恘恙恚恛恜恝恞恠恡恦，恧恫恬恮恰恱恲恴恷恹恺，恻恽恾恿悀悁悂悃悆悇悈悊。</p>
                </div>
                <div>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="one" label="序号" width="180">
                        </el-table-column>
                        <el-table-column prop="two" label="岗位" width="180">
                        </el-table-column>
                        <el-table-column prop="three" label="岗位描述">
                        </el-table-column>
                        <el-table-column prop="four" label="招聘人数">
                        </el-table-column>、
                        <el-table-column prop="five" label="薪资">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        
    `,
        data() {
            return {

                tableData: [{
                    one: '01',
                    two: '市场经理',
                    three: '1.负责售后服务产线修理2.熟悉导航生产流程',
                    four: '5',
                    five: '面议'
                }, {
                    one: '02',
                    two: '销售经理',
                    three: '1.负责售后服务产线修理',
                    four: '5',
                    five: '面议'
                }, {
                    one: '03',
                    two: '市场经理',
                    three: '1.负责售后服务产线修理',
                    four: '5',
                    five: '面议'
                }, {
                    one: '04',
                    two: '市场经理',
                    three: '1.负责售后服务产线修理2.熟悉导航生产流程',
                    four: '5',
                    five: '面议'
                }]
            }
        }
    })

    Vue.component('news', {
        template: `
            <div><div style="padding-bottom: 50px;display: table;" v-for="i in arr">
            <div style="width: 200px;height: 137px;padding-right: 15px;display: table-cell;">
                <img :src="i.img"
                    alt="">
            </div>
            <div style="display: table-cell;position: relative;vertical-align: top;padding-bottom: 20px;">
                <div style="font-size: 18px;color: #757575;margin-bottom: 10px;">
                    {{i.title}}
                </div>
                <div style="font-size: 14px;color: #999999;margin-bottom: 10px;">{{i.time}}</div>
                <div style="font-size: 13px;color: #999999;">{{i.content}}</div>
                <div style="color:#e79e2f;font-size:16px;position: absolute;bottom: -35px;right: 0;">阅读正文</div>
            </div>
    </div></div>`,
        data() {
            return {
                arr: [{
                    img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mNGMxNGM3NDNhMThlZjc1YjJmNzU0ZjFkZDA2ZjMzNy0yMDB4MTMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
                    title: "居民理财投资仍显“胆小”",
                    time: "发布日期：2017-03-09 分类：News",
                    content: "起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。"
                }, {
                    img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS81NzJiMzk2YmY5ZTZlNjljZDlkOTZjMjI2ZDRiMWU0ZC0yMDB4MTMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
                    title: "看房选房速成秘籍：购房“菜鸟”一秒变达人",
                    time: "发布日期：2017-03-09 分类：News",
                    content: "起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。"
                }, {
                    img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wNGY1NTM1Njc0MTBiZjhlZGY1YzEwMmM1YmJkOTY3Ny0yMDB4MTMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
                    title: "5“不”原则发大财 不抱土豪大腿不卖肾",
                    time: "发布日期：2017-03-09 分类：News",
                    content: "起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。"
                }, {
                    img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS84MDg1ODcwZmQ2YjYxNGU5ZTRjYmQzM2MxYzNhZWY0OC0yMDB4MTMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
                    title: "2017经济适用男/女标准出炉：你满足几条?",
                    time: "发布日期：2017-03-09 分类：News",
                    content: "起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。"
                }, {
                    img: "https://ccdn.goodq.top/caches/5298879a47437c1c6c5e6399b11eb6f3/aHR0cDovLzU4MWRhMDNiNDU2ZWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wMDU1MTQ2MGFjNDU0YTNkYmUyYzUxYmE3OGJkZDdmNi0yMDB4MTMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
                    title: "一块白布值两千万?奇葩XX作品还有很多!",
                    time: "发布日期：2017-03-09 分类：News",
                    content: "起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一套安全、稳定、不揪心的自助建站系统：在这里，您只需打字传图、用鼠标自由拖拽，便可在弹指间做出极具专业级别的网站。我们以全球首创的网页线性布局方案和傻瓜式图文编辑为核心，研发出这种颠覆传统的响应式网站制作方式，可以为您节约90%的建站时间。"
                }]
            }
        }
    })




    var router = new VueRouter({
        routes: [
            { path: '/', component: { template: '#index' }, },
            { path: '/aboutus', component: { template: '#aboutus' } },
            { path: '/consult', component: { template: '#consult' }, },
            { path: '/counsel', component: { template: '#counsel' } },
            { path: '/job', component: { template: '#job' } },
            { path: '/contact', component: { template: '#contact' } }
        ]
    })
    new Vue({
        el: '#box',
        router,
        data: {
            home_arr: [{ text: "首页", href: "#/" }, { text: "关于我们", href: "#/aboutus" }, { text: "产品介绍", href: "#/consult" }, { text: "理财资讯", href: "#/counsel" }, { text: "招贤纳士", href: "#/job" }, { text: "联系我们", href: "#/contact" }],
            home_index: "0"
        }
    })

    new Swiper('.swiper-container')
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
        }
    })
}