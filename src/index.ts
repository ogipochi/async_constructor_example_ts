import {Counter} from "./sample_class";

// Note: わかりやすさのために関数に分割

/**
 * やりたい処理を実行
 */
const sample = async () => {
    const counter = await Counter.Instantiate();
    counter.increment();
}

sample();