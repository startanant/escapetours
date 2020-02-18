var languages_list = '';

function getFacts(country) {

    document.getElementById('country_name').innerText = "";
    document.getElementById('population').innerText = "";
    document.getElementById('area').innerText = "";
    document.getElementById('languages').innerText = "";

    $.getJSON("https://raw.githubusercontent.com/iancoleman/cia_world_factbook_api/master/data/factbook.json", function (countries) {
        let country_name = countries.countries[country].data.name;
        let area = countries.countries[country].data.geography.area.total.value;
        let population = countries.countries[country].data.people.population.total;
        countries.countries[country].data.people.languages.language.forEach(logLanguage);
        languages_list = languages_list.replace('only', '');

        document.getElementById('country_name').innerText = country_name;
        document.getElementById('population').innerText = "Population: " + population / 1000000 + " million";
        document.getElementById('area').innerText = "Area: " + area + " sq km";
        document.getElementById('languages').innerText = "Languages: " + languages_list;
        languages_list = '';



    });

}


function logLanguage(element, index, array) {
    if (index < 3) {
        languages_list += element.name + " ";
    }

    return languages_list;

}
