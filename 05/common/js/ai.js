const AI = {

    async generate(params) {

        console.log('AI Request');

        console.log(params);

        return {

            questions: [

                {
                    question: '0.3 + 0.5 = ?'
                },

                {
                    question: '0.7 + 0.2 = ?'
                },

                {
                    question: '0.8 + 0.4 = ?'
                }

            ]

        };

    }

};