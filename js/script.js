
//gerar comentarios
function abrir(materia) {

    if (materia == 'matematica') {
        fetch("../../data/comentarios.json")
            .then(res => res.json())
            .then(comentarios => {
                const container = document.querySelector("#comentarios");
                comentarios.forEach(comentarios => {
                    const card = document.createElement("div");
                    card.className = `card`;

                    card.innerHTML = `
                <h3>${comentarios.usuario}</h3>
                <p>${comentarios.descricao}</p>
                ${comentarios.imagem}
                <div style="display:flex; align-items: center;">

                <img src="https://img.icons8.com/?size=100&id=28sIKIurMBkT&format=png&color=000000" style="width:30px; height:30px; margin: 0 10px;">
                <p>${comentarios.likes}</p>
                </div>
                
                <p style="border: black 1px solid; padding: 15px; border-radius:10px;">Responder</p>
            `;

                    container.appendChild(card);

                });
            });
    }
    if (materia == 'portugues') {


        fetch("../../data/comentarios2.json")
            .then(res => res.json())
            .then(comentarios => {
                const container = document.querySelector("#comentarios");

                comentarios.forEach(comentarios => {
                    const card = document.createElement("div");
                    card.className = `card`;

                    card.innerHTML = `
                        <h3>${comentarios.usuario2}</h3>
                        <p>${comentarios.descricao2}</p>
    
                        <div style="display:flex; align-items: center;">

                        <img src="https://img.icons8.com/?size=100&id=28sIKIurMBkT&format=png&color=000000" style="width:30px; height:30px; margin: 0 10px;">
                        <p>${comentarios.likes2}</p>
                        </div>
                        
                        <p style="border: black 1px solid; padding: 15px; border-radius:10px;">Responder</p>
                    `;

                    container.appendChild(card);
                    card.style.margin = '20px'
                });
            });
    }

}



//cronograma
function Cronograma() {
    fetch("../data/lives.json")
    .then(res => res.json())
    .then(lives => {
        const container = document.querySelector(".notificacoes");

        lives.forEach(live => {
            const card = document.createElement("div");
            card.className = `notif-card ${live.status}`;

            card.innerHTML = `
                        <h3>${live.titulo}</h3>
                        <p>${live.descricao}</p>
                        <span class="status">${live.status.toUpperCase()}</span>
                        <a class="btn-assistir" href="${live.link}" target="_blank">Assistir</a>
                    `;

            container.appendChild(card);
        });
    });
}

//Materias
function materias(materia){
    if(materia == 'm'){
        const container = document.querySelector(".jornadas-container");
   
       for (let i = 1; i <= 16; i++) {
           const card = document.createElement("div");
            card.className = "jornada-card";
   
           card.innerHTML = `
           <a href="curso/cursoM.html" class="card-conteudo matematica">
               <h3>Jornada ${i}</h3>
           </a>
       `;
           container.appendChild(card);
           
       }
    }
    if (materia == 'p') {
         const container = document.querySelector(".jornadas-container");

        for (let i = 1; i <= 16; i++) {
            const card = document.createElement("div");
            card.className = "jornada-card";

            card.innerHTML = `
            <a href="curso/cursoP.html" class="card-conteudo portugues">
               <h3>Jornada ${i}</h3>
           </a>
        `;

            container.appendChild(card);
        }
    }
}

//etapas materias

function Etapa(){
    
}