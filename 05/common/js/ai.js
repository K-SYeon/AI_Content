const AI = {

    async generate(params) {

        console.log('AI Request');

        console.log(params);

        return {
            grade: '05',
            subject: params.subject,
            topic: params.topic,

            questions: [
                {
                    id: 1,
                    type: CONTENT_SCHEMA.questionTypes.MULTIPLE,

                    question: '0.3 + 0.5 = ?',

                    choices: [
                        '0.6',
                        '0.7',
                        '0.8',
                        '0.9'
                    ],

                    answer: '0.8',

                    explanation: '소수점 자리를 맞춰 계산합니다.'
                }
            ]
        };

    }

};