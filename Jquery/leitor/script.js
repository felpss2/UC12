$(document).ready(function() {
    $.getJSON("dados.json", function(data) {
        var tabela = $("#tabela-dados tbody");
        tabela.empty();
        
        $.each(data, function(key, entry) {
            var linha = $("<tr></tr>");
            linha.append($("<td></td>").text(entry.nome));
            linha.append($("<td></td>").text(entry.idade));
            linha.append($("<td></td>").text(entry.cidade));
            tabela.append(linha);
        });
    });
});
