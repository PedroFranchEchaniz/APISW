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
        }).done(function (response) {
            persona = response[personaId];
            var template = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">John Doe</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    
                    <div class="row modal-body fondo">
                        <div class="col-6">
                            <img src="https://starwars-visualguide.com/assets/img/characters/${personaId}.jpg" class="rounded-circle"
                                alt="Cinque Terre" width="200px">
                        </div>
                        <div class="info col-6">
                            <p><i class="bi bi-cake2"></i> Birth Year: 24BBY</p>
                            <p>Species: Unknown</p>
                            <p><i class="bi bi-arrows-vertical"></i> Height: 183cm</p>
                            <p>Mass: 84kg</p>
                            <p>Gender: Male</p>
                            <p>Hair Color: Black</p>
                            <p>Skin Color: Light</p>
                        </div>
                    </div>
                    <div class="modal-footer">
    
                    </div>
                </div>
            </div>
        </div>`;
            $('#modal').append(template);

        })
    })

});