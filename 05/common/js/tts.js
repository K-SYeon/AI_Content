const TTS = {

    speak(text) {

        const utterance = new SpeechSynthesisUtterance(text);

        utterance.lang = 'ko-KR';

        speechSynthesis.cancel();

        speechSynthesis.speak(utterance);

    }

};