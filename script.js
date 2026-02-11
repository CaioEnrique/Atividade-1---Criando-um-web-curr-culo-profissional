document.addEventListener('DOMContentLoaded', function() {
    const editarBtn = document.getElementById('editarBtn');
    
    const camposEditaveis = [
        'nome', 'titulo', 'localizacao', 'email', 'telefone', 
        'linkedin', 'github', 'resumo-texto'
    ];

    editarBtn.addEventListener('click', function() {
        camposEditaveis.forEach(id => {
            const elemento = document.getElementById(id);
            const valorAtual = elemento.innerText;
            
            const novoValor = prompt(`Editar ${id}:`, valorAtual);
            
            if (novoValor !== null && novoValor.trim() !== '') {
                elemento.innerText = novoValor;
            }
        });

        editarHabilidades();
        editarExperiencia();
        editarFormacao();
        editarIdiomas();
        editarCertificacoes();
        
        alert('Currículo atualizado com sucesso!');
    });

    function editarHabilidades() {
        const skillsContainer = document.querySelector('.skills');
        const skillsAtuais = Array.from(skillsContainer.children).map(skill => skill.innerText);
        
        const novasSkills = prompt('Edite suas habilidades técnicas (separadas por vírgula):', skillsAtuais.join(', '));
        
        if (novasSkills) {
            const skillsArray = novasSkills.split(',').map(skill => skill.trim());
            skillsContainer.innerHTML = skillsArray.map(skill => `<span class="skill">${skill}</span>`).join('');
        }
    }

    function editarExperiencia() {
        const expItems = document.querySelectorAll('.experiencia .item');
        
        expItems.forEach((item, index) => {
            const cargo = item.querySelector('h4')?.innerText || '';
            const periodo = item.querySelector('.periodo')?.innerText || '';
            
            const editCargo = prompt(`Editar cargo/empresa (Experiência ${index + 1}):`, cargo);
            const editPeriodo = prompt(`Editar período (Experiência ${index + 1}):`, periodo);
            
            if (editCargo) item.querySelector('h4').innerText = editCargo;
            if (editPeriodo) item.querySelector('.periodo').innerText = editPeriodo;
        });
    }

    function editarFormacao() {
        const formacaoItem = document.querySelector('.formacao .item');
        if (formacaoItem) {
            const curso = formacaoItem.querySelector('h4')?.innerText || '';
            const instituicao = formacaoItem.querySelector('p')?.innerText || '';
            
            const novoCurso = prompt('Editar formação:', curso);
            const novaInstituicao = prompt('Editar instituição e período:', instituicao);
            
            if (novoCurso) formacaoItem.querySelector('h4').innerText = novoCurso;
            if (novaInstituicao) formacaoItem.querySelector('p').innerText = novaInstituicao;
        }
    }

    function editarIdiomas() {
        const idiomasList = document.querySelectorAll('.idiomas ul li');
        const idiomasAtuais = Array.from(idiomasList).map(li => li.innerText);
        
        const novosIdiomas = prompt('Edite seus idiomas (separados por vírgula):', idiomasAtuais.join(', '));
        
        if (novosIdiomas) {
            const idiomasArray = novosIdiomas.split(',').map(idioma => idioma.trim());
            const idiomasContainer = document.querySelector('.idiomas ul');
            idiomasContainer.innerHTML = idiomasArray.map(idioma => `<li>${idioma}</li>`).join('');
        }
    }

    function editarCertificacoes() {
        const certificacoesList = document.querySelectorAll('.certificacoes ul li');
        const certificacoesAtuais = Array.from(certificacoesList).map(li => li.innerText);
        
        const novasCertificacoes = prompt('Edite suas certificações/cursos (separados por vírgula):', certificacoesAtuais.join(', '));
        
        if (novasCertificacoes) {
            const certificacoesArray = novasCertificacoes.split(',').map(cert => cert.trim());
            const certificacoesContainer = document.querySelector('.certificacoes ul');
            certificacoesContainer.innerHTML = certificacoesArray.map(cert => `<li>${cert}</li>`).join('');
        }
    }
});