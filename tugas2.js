document.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById('newsModal');
            const closeBtn = document.querySelector('.close-btn');

            const modalTitle = document.getElementById('modalTitle');
            const modalDate = document.getElementById('modalDate');
            const modalViews = document.getElementById('modalViews');
            const modalImg = document.getElementById('modalImg');
            const modalSummary = document.getElementById('modalSummary');

            const readButtons = document.querySelectorAll('.btn-read');

            readButtons.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();

                    const card = e.target.closest('.news-card');

                    const title = card.querySelector('h4').innerText;
                    const imgSrc = card.querySelector('.card-img-wrapper img').src;
                    const metaSpans = card.querySelectorAll('.meta span');
                    const date = metaSpans[0] ? metaSpans[0].innerText : '';
                    const views = metaSpans[1] ? metaSpans[1].innerText : '';

                    modalTitle.innerText = title;
                    modalDate.innerText = date;
                    modalViews.innerText = views;
                    modalImg.src = imgSrc;
                    modalImg.alt = title;

                    modalSummary.innerText = `Berikut adalah ringkasan berita dari "${title}". Kegiatan ini diselenggarakan oleh Pemerintah Desa Melung bersama masyarakat untuk meningkatkan partisipasi, kebersamaan, dan ketertiban administrasi desa.`;

                    modal.style.display = 'flex';
                });
            });

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    modal.style.display = 'none';
                });
            }

            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });