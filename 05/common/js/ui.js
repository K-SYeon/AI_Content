const UI = {

    init() {

        this.bindEvents();

    },

    bindEvents() {

        $('.btn-generate').on('click', () => {

            this.generateContent();

        });

    },

    async generateContent() {

        const params = {

            grade: '05',

            subject: $('select').val(),

            topic: $('input[type="text"]').val(),

            count: Number(
                $('input[type="number"]').val()
            )

        };

        const result = await AI.generate(params);

        this.renderResult(result);

    },

    renderResult(data) {

        let html = '';

        data.questions.forEach((item, index) => {

            html += `
                <div class="question-item">

                    <div>
                        <strong>문제 ${index + 1}</strong>
                    </div>

                    <div>
                        문제 : ${item.question}
                    </div>

                    <div>
                        TTS : ${item.tts}
                    </div>

                    <div>
                        정답 : ${item.answer}
                    </div>

                    <div>
                        해설 : ${item.explanation}
                    </div>

                </div>
            `;

        });

        $('.result-list').html(html);

    }

};