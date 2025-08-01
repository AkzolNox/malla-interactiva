document.addEventListener('DOMContentLoaded', () => {
    const semestersContainer = document.getElementById('semesters');
    
    // Datos de ejemplo (puedes reemplazarlos con los de tu carrera)
    const mallaCurricular = [
        {
            semester: "Semestre 1",
            courses: ["Introducción a la Programación", "Matemáticas I", "Inglés Técnico"]
        },
        {
            semester: "Semestre 2",
            courses: ["Estructuras de Datos", "Matemáticas II", "Bases de Datos"]
        },
        {
            semester: "Semestre 3",
            courses: ["Algoritmos", "Redes de Computadoras", "Ingeniería de Software"]
        },
        // Agrega más semestres...
    ];

    // Generar la malla interactiva
    mallaCurricular.forEach(semesterData => {
        const semesterElement = document.createElement('div');
        semesterElement.className = 'semester';
        semesterElement.textContent = semesterData.semester;
        
        const coursesElement = document.createElement('div');
        coursesElement.className = 'courses';
        
        semesterData.courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';
            courseElement.textContent = course;
            coursesElement.appendChild(courseElement);
        });
        
        semesterElement.addEventListener('click', () => {
            coursesElement.style.display = coursesElement.style.display === 'block' ? 'none' : 'block';
        });
        
        semesterElement.appendChild(coursesElement);
        semestersContainer.appendChild(semesterElement);
    });
});