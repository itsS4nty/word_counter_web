export class WordCounterSDK {
    private suscribers: WordCounterSDKListeners[] = [];
    private file: string = '';
    private words: string[] = [];

    constructor(file: string = '/public/books/dracula.txt') {
        this.file = file;
    }

    setFile(file: string) {
        if(!file) return;
        this.file = file;
    }

    setWords(words: string[]) {
        if(!words || !words.length) return;
        this.words = words;
    }

    findWords() {
        // logic
        this.publishOnWordFound();
    }

    subscribeToEvents(callback: WordCounterSDKListeners) {
        this.suscribers.push(callback);
    }

    unsubscribeToEvents(callback: WordCounterSDKListeners) {
        let index = this.suscribers.indexOf(callback);
        if(index !== -1) this.suscribers.splice(index, 1);
    }

    protected publishOnWordFound() {
        this.suscribers.forEach((listener) => listener.onWordFound?.());
    }

}

export interface WordCounterSDKListeners {
    onWordFound?(): void;
}