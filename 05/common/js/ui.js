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
                    문제 ${index + 1}. ${item.question}
                </div>
            `;

        });

        $('.result-list').html(html);

    }

};