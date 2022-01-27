import {Counter} from "./sample_class";

// インスタンス化
const counter = new Counter();

// init()で初期化した後処理を実行
counter.init().then(() => {
    counter.increment();
});