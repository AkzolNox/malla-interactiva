document.addEventListener('DOMContentLoaded', () => {
    const semestersContainer = document.getElementById('semesters');
    
    // Datos de ejemplo de la malla curricular
    const mallaCurricular = [
        {
            semester: "Semestre 1",
            courses: [
                "Introducción a la Programación", 
                "Matemáticas I", 
                "Inglés Técnico"
            ]
        },
        {
            semester: "Semestre 2",
            courses: [
                "Estructuras de Datos", 
                "Matemáticas II", 
                "Bases de Datos"
            ]
        },
        {
            semester: "Semestre 3",
            courses: [
                "Algoritmos", 
                "Redes de Computadoras", 
                "Ingeniería de Software"
            ]
        }
        // Puedes agregar más semestres aquí
    ];

    // Función para generar la malla interactiva
    function generarMalla() {
        mallaCurricular.forEach(semesterData => {
            // Crear elemento de semestre
            const semesterElement = document.createElement('div');
            semesterElement.className = 'semester';
            semesterElement.textContent = semesterData.semester;
            
            // Crear contenedor de cursos
            const coursesElement = document.createElement('div');
            coursesElement.className = 'courses';
            
            // Agregar cursos al semestre
            semesterData.courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.className = 'course';
                courseElement.textContent = course;
                coursesElement.appendChild(courseElement);
            });
            
            // Evento para mostrar/ocultar cursos
            semesterElement.addEventListener('click', () => {
                coursesElement.style.display = 
                    coursesElement.style.display === 'block' ? 'none' : 'block';
            });
            
            // Agregar elementos al DOM
            semesterElement.appendChild(coursesElement);
            semestersContainer.appendChild(semesterElement);
        });
    }

    // Inicializar la malla
    generarMalla();
});
