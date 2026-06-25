const UI = {

    init() {

        this.bindEvents();

    },

    bindEvents() {

        $('.btn-generate').on('click', () => {

            this.generateContent();

        });

        $(document).on('click', '.btn-tts', function() {

            const text = $(this).data('tts');

            TTS.speak(text);

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

        data.questions.forEach((item) => {

            html += Quiz.renderQuestion(item);

        });

        $('.result-list').html(html);

    }

};