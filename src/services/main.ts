import { WordCounterSDK } from 'word_counter_sdk_lib/dist';


export class MainService {
    public word_count_sdk: WordCounterSDK = new WordCounterSDK(true);
}