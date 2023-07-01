'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// document.getElementById("button").onclick = function() {
//   // ここに#buttonをクリックしたら発生させる処理を記述する
// };


function generate() {
    var random = Math.floor(Math.random() * 20) + 1;
    //   var image = document.getElementById("image");
    //   var text = document.getElementById("text");
    // console.log(image);
    // console.log(text);

    var str = "";
    switch (random) {
        case 1:
            str = "人と比べなくていい。比べるなら過去の自分！";
            break;
        case 2:
            str = "９９対１だとしても、１が正しいこともある！";
            break;
        case 3:
            str = "一流とは、誰よりも失敗し、誰よりもそこから学んだ人";
            break;
        case 4:
            str = "あなたはあなたのままで素晴らしい";
            break;
        case 5:
            str = "コンプレックスは武器になる";
            break;
        case 6:
            str = "人は無力じゃない、微力なだけだ！";
            break;
        case 7:
            str = "思考、言葉、感情、行動という順序が有って、この最後の行動をするかでいかに人生を劇的に変化させるかが決まると言っても過言ではない！";
            break;
        case 8:
            str = "一度きりの人生、誰に遠慮がいるもんか！";
            break;
        case 9:
            str = "みんな素の自分は、スーパーポジティブ！赤ちゃんの頃立ち上がるのを諦めたことあったかい？";
            break;
        case 10:
            str = "「何のために」動くかの理由がはっきりわかっている人は強い";
            break;
        case 11:
            str = "後悔することは、やらなかったことであり出来なかったことではない";
            break;
        case 12:
            str = "晴の日は枝が伸びる。雨の日は根が伸びる。";
            break;
        case 13:
            str = "成長しようとしている人だけが壁を感じる";
            break;
        case 14:
            str = "大変な時は自分が大きく変わる時変われる時";
            break;
        case 15:
            str = "死ぬこと以外かすり傷";
            break;
        case 16:
            str = "失敗は挑戦することで得られる価値である";
            break;
        case 17:
            str = "どんな変化でも喜びを持って受け入れる";
            break;
        case 18:
            str = "生まれた感謝は、そのままプレゼントする";
            break;
        case 19:
            str = "言葉を変えることは、人生を変えること";
            break;
        case 20:
            str = "毎日のチャレンジを楽しむ！";
            break;
        // 略
        default:
            break;
    }
    text.innerHTML = str;
    // text.innerHTML = "";
    // console.log(str);
    image.src = "image" + random + ".jpg";
}

function reset() {
    //   var image = document.getElementById("image");
    //   var text = document.getElementById("text");
    // console.log(image);
    // console.log(text);

    text.innerHTML = "";
    image.src = "";
}
