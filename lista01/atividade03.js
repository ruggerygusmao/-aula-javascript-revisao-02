/*3) Os alunos da turma de Front-end estão estudando em horários diferentes:
a) Se o horário for o matutino, mostrar a mensagem "Bom Dia!".
b) Se o horário for vespertino, mostrar "Boa Tarde!".
c) Se o horário for noturno, mostrar "Boa Noite!".
d) Se não houver informação, mostrar  "Valor Inválido!".
 */

function consultaHorario(horario){
    switch(horario){
        case "matutino":
            return "Bom Dia!";
            break;
        case "vespertino":
            return "Boa tarde!";
            break;
        case "noturno":
            return "Boa noite!";
            break;
        default : 
            return "Valor Inválido!";
            break;
    }
}

console.log(consultaHorario("noturno"))