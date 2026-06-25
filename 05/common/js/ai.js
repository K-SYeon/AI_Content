const AI = {

    config: {
        model: 'gpt-4o-mini',
        maxQuestions: 20
    },

    async generate(params) {

        console.log('AI Request');

        console.log(params);

        return this.mockResponse(params);

    },

    mockResponse(params) {

        return {
            grade: '05',
            subject: params.subject,
            topic: params.topic,
            questions: [
                {
                    id:1,
                    type:CONTENT_SCHEMA.questionTypes.MULTIPLE,
                    question:'0.3 + 0.5 = ?',
                    tts:'0점 3과 0점 5를 더하면 얼마일까요?',
                    choices:[
                        '0.6',
                        '0.7',
                        '0.8',
                        '0.9'
                    ],
                    answer:'0.8',
                    explanation:'소수점 자리를 맞춰 계산합니다.'
                }
            ]
        };

    }

};