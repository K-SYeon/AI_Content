const AI = {

    config: {},

    async generate(params) {

        const prompt = this.buildPrompt(params);

        console.log('Prompt');
        console.log(prompt);

        return this.mockResponse(params);

    },

    buildPrompt(params) {

        return `
        당신은 초등 교육 콘텐츠 전문가입니다.

        학년 : 초등 ${params.grade}학년
        과목 : ${params.subject}
        주제 : ${params.topic}
        문제 수 : ${params.count}

        반드시 JSON만 반환하세요.

        각 문제는 아래 필드를 포함해야 합니다.

        id
        type
        question
        tts
        answer
        explanation

        객관식은 choices 배열을 포함하세요.
        `;

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