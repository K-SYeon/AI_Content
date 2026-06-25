const UI = {

    init() {

        this.bindEvents();

    },

    bindEvents() {

        $('.btn-generate').on('click', () => {

            this.showSampleResult();

        });

    },

    showSampleResult() {

        const sampleData = [
            {
                question: '0.3 + 0.5 = ?'
            },
            {
                question: '0.7 + 0.2 = ?'
            },
            {
                question: '0.8 + 0.4 = ?'
            }
        ];

        let html = '';

        sampleData.forEach((item, index) => {

            html += `
                <div class="question-item">
                    문제 ${index + 1}. ${item.question}
                </div>
            `;

        });

        $('.result-list').html(html);

    }

};