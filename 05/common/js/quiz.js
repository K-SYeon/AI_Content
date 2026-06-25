const Quiz = {

    renderQuestion(question) {

        switch(question.type) {

            case CONTENT_SCHEMA.questionTypes.MULTIPLE:
                return this.renderMultiple(question);

            case CONTENT_SCHEMA.questionTypes.OX:
                return this.renderOX(question);

            default:
                return this.renderUnknown(question);

        }

    },

    renderMultiple(question) {

        let choicesHtml = '';

        question.choices.forEach((choice, index) => {

            choicesHtml += `
                <li>${index + 1}. ${choice}</li>
            `;

        });

        return `
            <div class="question-item">

                <div class="question-type">
                    객관식
                </div>

                <div class="question-title">
                    ${question.question}
                </div>

                <button class="btn-tts" data-tts="${question.tts}">
                    🔊 듣기
                </button>

                <ul class="choice-list">
                    ${choicesHtml}
                </ul>

                <div class="tts-preview">
                    TTS : ${question.tts}
                </div>

                <div>
                    정답 : ${question.answer}
                </div>

                <div>
                    해설 : ${question.explanation}
                </div>

            </div>
        `;

    },

    renderOX(question) {

        return `
            <div class="question-item">

                <div class="question-type">
                    OX
                </div>

                <div class="question-title">
                    ${question.question}
                </div>

                <button class="btn-tts" data-tts="${question.tts}">
                    🔊 듣기
                </button>

                <div>
                    정답 : ${question.answer}
                </div>

            </div>
        `;

    },

    renderUnknown(question) {

        return `
            <div class="question-item">
                지원하지 않는 문제 유형
            </div>
        `;

    }

};