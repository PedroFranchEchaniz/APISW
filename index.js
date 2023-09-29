$(document).ready(function () {

    $.ajax({
        url: 'https://swapi.dev/api/people',
        type: 'GET'
    }).done(function (resp) {
        var listaSW = resp.results;
        listaSW.forEach(function (personaje) {
            var id = personaje.url.split('/').reverse()[1];
            var template = ` <div class="card mt-3" style="width:350px">
            <img class="card-img-top" src="https://starwars-visualguide.com/assets/img/characters/${id}.jpg"
                alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${personaje.name}</h4>
                <p class="card-text">${personaje.birth_year}</p>
                <p class="card-text">${personaje.species}</p>
                <button  itemid="${id}" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"><i class="bi bi-plus"></i></button>
            </div>
        </div>`;
            $('#lista-starwars').append(template);
        });
    });

    $(document).on('click', '.btn', function () {
        var personaId = $(this).attr('itemid');
        $.ajax({
            url: `https://swapi.dev/api/people/${personaId}`,
            type: 'GET',
        }).done(function (responde) {
            persona = responde[personaId];
            var template = ``;
        })
    })

});