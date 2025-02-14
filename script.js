
        document.getElementById('searchInput').addEventListener('input', function() {
            let searchTerm = this.value.toLowerCase().trim(); // Captura o valor do campo de pesquisa e remove espaços extras
            let courses = document.querySelectorAll('.card'); // Obtém todos os cards de cursos

            // Se o campo de pesquisa estiver vazio, exibe todos os cursos
            if (searchTerm === '') {
                courses.forEach(function(course) {
                    course.classList.remove('hidden'); // Mostra todos os cursos
                });
            } else {
                // Loop pelos cursos e verifica se o nome ou categoria do curso contém o termo de busca
                courses.forEach(function(course) {
                    let courseName = course.querySelector('.card-title').textContent.toLowerCase().trim(); // Nome do curso
                    let courseCategory = course.querySelector('.curso-categoria').textContent.toLowerCase().trim(); // Categoria do curso
                    
                    // Verifica se o nome ou a categoria contém o termo de busca
                    if (courseName.includes(searchTerm) || courseCategory.includes(searchTerm)) {
                        course.classList.remove('hidden'); // Mostra o curso
                    } else {
                        course.classList.add('hidden'); // Oculta o curso
                    }
                });
            }
        });

        // Ordenação automática ao carregar
        window.addEventListener('load', function() {
            let courses = Array.from(document.querySelectorAll('.card'));
            courses.sort((a, b) => parseInt(a.getAttribute('data-duracao')) - parseInt(b.getAttribute('data-duracao')));
            let container = document.getElementById('coursesList');
            courses.forEach(course => container.appendChild(course));
        });
   