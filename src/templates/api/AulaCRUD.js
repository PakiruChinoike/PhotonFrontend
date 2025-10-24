

export const getAulaByUsuario = async (id) => {
    const aulas = [
        {
            nome_aula: "Cubos",
            nome_professor: "Roberto",
            data: "23/10/2024",
            id: 1,
        },
        {
            nome_aula: "Geometria Analítica",
            nome_professor: "Roberto",
            data: "21/09/2024",
            id: 2
        },
        {
            nome_aula: "Logaritmos",
            nome_professor: "Roberto",
            data: "25/12/2030",
            id: 3
        }
    ]

    return aulas;
}