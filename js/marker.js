let currentLanguage = null;

$('.language__block').mouseup(function(e){
    if (currentLanguage == null){
        if ($(e.target).attr("class") != 'language__block'){
            $(e.target).parent().css('background-color','#ffc71e')
            $('.language__overlay').addClass('hiddering')
            $('.language').addClass('hiddering')
            $('.language__border').addClass('hiddering')
            $('.language__block').css('pointer-events','none')
            $('.language__border').css('pointer-events','none')
            setTimeout(function() {
                $('.language__overlay').css('display','none')
                $('.language').css('display','none')
                $('.language__border').css('display','none')
            }, 999)
            currentLanguage = $(e.target).parent().find('.language__title').text()
        }else if ($(e.target).attr("class") == 'language__block') {
            $(e.target).css('background-color','#ffc71e')
            $('.language__overlay').addClass('hiddering')
            $('.language').addClass('hiddering')
            $('.language__border').addClass('hiddering')
            $('.language__block').css('pointer-events','none')
            $('.language__border').css('pointer-events','none')
            setTimeout(function() {
                $('.language__overlay').css('display','none')
                $('.language').css('display','none')
                $('.language__border').css('display','none')
            }, 999)
            currentLanguage = $(e.target).find('.language__title').text()
        }
    }

    if (currentLanguage == 'german') {
        let lahtaM = L.marker([83.33,-161.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper lahtaM_adaptive">'+
            '<img class="marker-point lahtaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 lahtaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 lahtaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal lahtaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines lahtaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 lahtaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Lachta</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/UVWhEKJg4sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Лахта

        let dacanM = L.marker([82.62,-97.44], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper dacanM_adaptive">'+
            '<img class="marker-point dacanM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dacanM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dacanM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dacanM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dacanM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dacanM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Dazan</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/worJTRsIpyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дацан

        let ZSDM = L.marker([78,-130.25], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper ZSDM_adaptive">'+
            '<img class="marker-point ZSDM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ZSDM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ZSDM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ZSDM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ZSDM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ZSDM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">ZSD</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/xaJArSH7ZDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//ЗСД

        let petropavlovskayaM = L.marker([70.8,-47.35], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three petropavlovskayaM_adaptive">'+
            '<img class="marker-point petropavlovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petropavlovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petropavlovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petropavlovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petropavlovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petropavlovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Perer-und-Paul Kathedrale</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Nrs2i2UciWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петропавловская крепость

        let mechetM = L.marker([73.4,-41.11], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-three marker-wrapper_area-three mechetM_adaptive">'+
            '<img class="marker-point mechetM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mechetM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mechetM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mechetM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mechetM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mechetM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Moschee</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/84TcZvSBb40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мечеть

        let avroraM = L.marker([73.494,-29.685], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three avroraM_adaptive">'+
            '<img class="marker-point avroraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 avroraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 avroraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal avroraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines avroraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 avroraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Aurora</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/z0NNPEbXSOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Аврора

        let troitskiyM = L.marker([70.02,-38.188], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three troitskiyM_adaptive">'+
            '<img class="marker-point troitskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 troitskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 troitskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal troitskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines troitskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 troitskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Troizki Brücke</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/UqwChrHHJiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Троицкий мост

        let spasM = L.marker([64.52,-37.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two spasM_adaptive">'+
            '<img class="marker-point spasM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 spasM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 spasM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal spasM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines spasM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 spasM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Auferstehungskirche</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/wHo2ehFg0Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Спас на крови

        let alexandrovskayaM = L.marker([63.3,-47.8], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one alexandrovskayaM_adaptive">'+
            '<img class="marker-point alexandrovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Alexandersäule</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/_D8nUbNcU0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александровская колонна

        let ermitajM = L.marker([65,-49.5], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one ermitajM_adaptive">'+
            '<img class="marker-point ermitajM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ermitajM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ermitajM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ermitajM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ermitajM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ermitajM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Ermitage</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/QMAmVy5MXrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Эрмитаж

        let admiralteistvoM = L.marker([62.86,-54.09], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one admiralteistvoM_adaptive">'+
            '<img class="marker-point admiralteistvoM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteistvoM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteistvoM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteistvoM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteistvoM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteistvoM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Admiralität</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/lNP1jVcucL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейство

        let mikhailovskiM = L.marker([64.75,-29.73], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two mikhailovskiM_adaptive">'+
            '<img class="marker-point mikhailovskiM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mikhailovskiM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mikhailovskiM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mikhailovskiM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mikhailovskiM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mikhailovskiM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Mikhailowskiy Schloss</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/1rPhlb77uOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Михайловский замок

        let medniyM = L.marker([61.71,-58.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one medniyM_adaptive">'+
            '<img class="marker-point medniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 medniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 medniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal medniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines medniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 medniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Der eherne Reiter</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/fwxzQyGQ8FI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Медный всадник

        let isaakiyM = L.marker([59.944,-55.89], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one isaakiyM_adaptive">'+
            '<img class="marker-point isaakiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 isaakiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 isaakiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal isaakiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines isaakiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 isaakiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Isaak</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/SACXzEyAmgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Исаакий

        let admiralteiskayaM = L.marker([61.44,-48.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-one marker-wrapper_area-one admiralteiskayaM_adaptive">'+
            '<img class="marker-point admiralteiskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteiskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteiskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteiskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteiskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteiskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Admiralität U-Bahn</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/ruo0hQefVbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейская

        let RGPUM = L.marker([60.27,-44.46], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two RGPUM_adaptive">'+
            '<img class="marker-point RGPUM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 RGPUM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 RGPUM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal RGPUM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines RGPUM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 RGPUM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Herzen universität</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/goGjgemplEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//РГПУ

        let kazanskiyM = L.marker([60.07,-40.594], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two kazanskiyM_adaptive">'+
            '<img class="marker-point kazanskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 kazanskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 kazanskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal kazanskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines kazanskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 kazanskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Kazaner Kathedrale</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/3ErZhl5OozU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Казанский собор

        let petrekirheM = L.marker([62.15,-41.18], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two petrekirheM_adaptive">'+
            '<img class="marker-point petrekirheM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petrekirheM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petrekirheM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petrekirheM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petrekirheM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petrekirheM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Petrikirche</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/eqtm_G1GivU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петрекирхе

        let basilikaM = L.marker([61.24,-36.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-two marker-wrapper_area-two basilikaM_adaptive">'+
            '<img class="marker-point basilikaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 basilikaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 basilikaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal basilikaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines basilikaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 basilikaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">St. Katharina</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/c7_KxlZ9uo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Базилика

        let alexandrinkiyM = L.marker([58.00,-31.01], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two alexandrinkiyM_adaptive">'+
            '<img class="marker-point alexandrinkiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrinkiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrinkiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrinkiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrinkiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrinkiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Alexandrinskiy Theater</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/-mLPiGGgEMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александринский

        let dvortsoviyM = L.marker([65.28,-54.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one dvortsoviyM_adaptive">'+
            '<img class="marker-point dvortsoviyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dvortsoviyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dvortsoviyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dvortsoviyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dvortsoviyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dvortsoviyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Schlossrücke</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/bMJhoQE1eLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дворцовый

        let strelkaM = L.marker([67.29,-55.43], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one strelkaM_adaptive">'+
            '<img class="marker-point strelkaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 strelkaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 strelkaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal strelkaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines strelkaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 strelkaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Der Pfeil der Wassiljewski Insel</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Qm3Se4S99DQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Стрелка

        let golandiyaM = L.marker([55.98,-68.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-four marker-wrapper_area-four golandiyaM_adaptive">'+
            '<img class="marker-point golandiyaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 golandiyaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 golandiyaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal golandiyaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines golandiyaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 golandiyaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">New Holland</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/c3omCHSyESM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Новая Голландия

        let mariinskiyM = L.marker([52.14,-64.4], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four mariinskiyM_adaptive">'+
            '<img class="marker-point mariinskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mariinskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mariinskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mariinskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mariinskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mariinskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Mariinsky Theater</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/a5F0PYIA4QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мариинский театр

        let sinagogaM = L.marker([51.28,-67.81], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four sinagogaM_adaptive">'+
            '<img class="marker-point sinagogaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 sinagogaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 sinagogaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal sinagogaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines sinagogaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 sinagogaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Große Choral Synagoge</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/qpWsVuBRhC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Синагога

        let vitebskiyM = L.marker([45.72,-36.45], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper vitebskiyM_adaptive">'+
            '<img class="marker-point vitebskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 vitebskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 vitebskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal vitebskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines vitebskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 vitebskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Vitebskiy Bahnhof</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/5XTD3aHKfVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Витебский

        let mogilaM = L.marker([49.84, 11.645], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper mogilaM_adaptive">'+
            '<img class="marker-point mogilaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mogilaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mogilaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mogilaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mogilaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mogilaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Euler&#8217;s Grab</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/9FSgohnmN1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Могила Леонардо Эйлера

        let mostPetraM = L.marker([66.311, 23.005], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-five mostPetraM_adaptive">'+
            '<img class="marker-point mostPetraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mostPetraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mostPetraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mostPetraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mostPetraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mostPetraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Die Brücke von Peter dem Großen</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/hT3jrLP4xgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мост Петра Великого

        let smolniyUniversityM = L.marker([68.624, 19.006], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-five marker-wrapper_area-five smolniyUniversityM_adaptive">'+
            '<img class="marker-point smolniyUniversityM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 smolniyUniversityM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 smolniyUniversityM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal smolniyUniversityM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines smolniyUniversityM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 smolniyUniversityM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Smolny</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/b5pmkDp-eHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Смольный институт

        let letniyM = L.marker([67.78, -31.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two letniyM_adaptive">'+
            '<img class="marker-point letniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 letniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 letniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal letniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines letniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 letniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Sommergarten</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/wHA66Ly05f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Летний сад
    }else if (currentLanguage == 'russian'){
        let lahtaM = L.marker([83.33,-161.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper lahtaM_adaptive">'+
            '<img class="marker-point lahtaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 lahtaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 lahtaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal lahtaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines lahtaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 lahtaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Лахта</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/ItmsLU7MB2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Лахта

        let dacanM = L.marker([82.62,-97.44], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper dacanM_adaptive">'+
            '<img class="marker-point dacanM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dacanM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dacanM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dacanM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dacanM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dacanM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Дацан</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/N7XeI0CbNBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дацан

        let ZSDM = L.marker([78,-130.25], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper ZSDM_adaptive">'+
            '<img class="marker-point ZSDM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ZSDM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ZSDM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ZSDM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ZSDM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ZSDM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">ЗСД - МАГИСТРАЛЬ СЕВЕРНОЙ СТОЛИЦЫ</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/hz3wpF9-OnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//ЗСД

        let petropavlovskayaM = L.marker([70.8,-47.35], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three petropavlovskayaM_adaptive">'+
            '<img class="marker-point petropavlovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petropavlovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petropavlovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petropavlovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petropavlovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petropavlovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Петропавловская крепость</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/9AHR8fCnzFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петропавловская крепость

        let mechetM = L.marker([73.4,-41.11], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-three marker-wrapper_area-three mechetM_adaptive">'+
            '<img class="marker-point mechetM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mechetM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mechetM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mechetM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mechetM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mechetM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Мечеть</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/rt7HOq_z_iQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мечеть

        let avroraM = L.marker([73.494,-29.685], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three avroraM_adaptive">'+
            '<img class="marker-point avroraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 avroraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 avroraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal avroraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines avroraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 avroraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Аврора</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/F3T_SlXxev0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Аврора

        let troitskiyM = L.marker([70.02,-38.188], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three troitskiyM_adaptive">'+
            '<img class="marker-point troitskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 troitskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 troitskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal troitskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines troitskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 troitskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Троицкий мост</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/BfpEIx04IFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Троицкий мост

        let spasM = L.marker([64.52,-37.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two spasM_adaptive">'+
            '<img class="marker-point spasM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 spasM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 spasM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal spasM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines spasM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 spasM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Спас на крови</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/WSCFa5HGT2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Спас на крови

        let alexandrovskayaM = L.marker([63.3,-47.8], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one alexandrovskayaM_adaptive">'+
            '<img class="marker-point alexandrovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Александровская колонна</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Qb5adjjS0Tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александровская колонна

        let ermitajM = L.marker([65,-49.5], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one ermitajM_adaptive">'+
            '<img class="marker-point ermitajM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ermitajM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ermitajM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ermitajM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ermitajM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ermitajM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Эрмитаж</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/NHZowSgBlxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Эрмитаж

        let admiralteistvoM = L.marker([62.86,-54.09], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one admiralteistvoM_adaptive">'+
            '<img class="marker-point admiralteistvoM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteistvoM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteistvoM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteistvoM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteistvoM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteistvoM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Адмиралтейство</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/E7K8Z07UlZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейство

        let mikhailovskiM = L.marker([64.75,-29.73], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two mikhailovskiM_adaptive">'+
            '<img class="marker-point mikhailovskiM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mikhailovskiM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mikhailovskiM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mikhailovskiM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mikhailovskiM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mikhailovskiM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Михайловский замок</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/54BJhrZvYA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Михайловский замок

        let medniyM = L.marker([61.71,-58.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one medniyM_adaptive">'+
            '<img class="marker-point medniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 medniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 medniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal medniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines medniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 medniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Медный всадник</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/g8oI3UbkRho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Медный всадник

        let isaakiyM = L.marker([59.944,-55.89], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one isaakiyM_adaptive">'+
            '<img class="marker-point isaakiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 isaakiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 isaakiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal isaakiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines isaakiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 isaakiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">исаакиевский собор</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/tiQBDZDylkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Исаакий

        let admiralteiskayaM = L.marker([61.44,-48.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-one marker-wrapper_area-one admiralteiskayaM_adaptive">'+
            '<img class="marker-point admiralteiskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteiskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteiskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteiskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteiskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteiskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Метро Адмиралтейская</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/wFE5hmfL8bI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейская

        let RGPUM = L.marker([60.27,-44.46], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two RGPUM_adaptive">'+
            '<img class="marker-point RGPUM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 RGPUM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 RGPUM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal RGPUM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines RGPUM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 RGPUM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">РГПУ им. А. И. Герцена</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/FlxyQ5UK1WU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//РГПУ

        let kazanskiyM = L.marker([60.07,-40.594], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two kazanskiyM_adaptive">'+
            '<img class="marker-point kazanskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 kazanskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 kazanskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal kazanskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines kazanskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 kazanskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Казанский собор</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/5pXMTXpv3W4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Казанский собор

        let petrekirheM = L.marker([62.15,-41.18], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two petrekirheM_adaptive">'+
            '<img class="marker-point petrekirheM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petrekirheM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petrekirheM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petrekirheM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petrekirheM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petrekirheM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Петрекирхе</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/b7mYlkD9k6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петрекирхе

        let basilikaM = L.marker([61.24,-36.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-two marker-wrapper_area-two basilikaM_adaptive">'+
            '<img class="marker-point basilikaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 basilikaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 basilikaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal basilikaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines basilikaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 basilikaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">БАЗИЛИКА СВ. ЕКАТЕРИНЫ</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/eGBEzO4akXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Базилика

        let alexandrinkiyM = L.marker([58.00,-31.01], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two alexandrinkiyM_adaptive">'+
            '<img class="marker-point alexandrinkiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrinkiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrinkiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrinkiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrinkiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrinkiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Александринский театр</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/qHUeEeK0Sv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александринский

        let dvortsoviyM = L.marker([65.28,-54.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one dvortsoviyM_adaptive">'+
            '<img class="marker-point dvortsoviyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dvortsoviyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dvortsoviyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dvortsoviyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dvortsoviyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dvortsoviyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Дворцовый мост</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/b81xQa6SO1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дворцовый

        let strelkaM = L.marker([67.29,-55.43], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one strelkaM_adaptive">'+
            '<img class="marker-point strelkaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 strelkaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 strelkaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal strelkaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines strelkaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 strelkaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Стрелка Васильевского острова</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/BpPLFpBiozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Стрелка

        let golandiyaM = L.marker([55.98,-68.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-four marker-wrapper_area-four golandiyaM_adaptive">'+
            '<img class="marker-point golandiyaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 golandiyaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 golandiyaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal golandiyaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines golandiyaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 golandiyaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Новая Голландия</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/GtMo-AZIvXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Новая Голландия

        let mariinskiyM = L.marker([52.14,-64.4], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four mariinskiyM_adaptive">'+
            '<img class="marker-point mariinskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mariinskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mariinskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mariinskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mariinskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mariinskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Мариинский театр</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/gZtX8mJxYlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мариинский театр

        let sinagogaM = L.marker([51.28,-67.81], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four sinagogaM_adaptive">'+
            '<img class="marker-point sinagogaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 sinagogaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 sinagogaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal sinagogaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines sinagogaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 sinagogaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Синагога</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/fHG4eV66oLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Синагога

        let vitebskiyM = L.marker([45.72,-36.45], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper vitebskiyM_adaptive">'+
            '<img class="marker-point vitebskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 vitebskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 vitebskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal vitebskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines vitebskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 vitebskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Витебский вокзал</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/C-eQCIrJVZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Витебский

        let mogilaM = L.marker([49.84, 11.645], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper mogilaM_adaptive">'+
            '<img class="marker-point mogilaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mogilaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mogilaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mogilaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mogilaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mogilaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Могила Леонардо Эйлера</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/WGij0rX1RkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Могила Леонардо Эйлера

        let mostPetraM = L.marker([66.311, 23.005], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-five mostPetraM_adaptive">'+
            '<img class="marker-point mostPetraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mostPetraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mostPetraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mostPetraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mostPetraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mostPetraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Мост Петра Великого</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/S2BA6QzQ2gM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мост Петра Великого

        let smolniyUniversityM = L.marker([68.624, 19.006], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-five marker-wrapper_area-five smolniyUniversityM_adaptive">'+
            '<img class="marker-point smolniyUniversityM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 smolniyUniversityM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 smolniyUniversityM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal smolniyUniversityM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines smolniyUniversityM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 smolniyUniversityM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Смольный институт</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/KWAviiviA-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Смольный институт

        let letniyM = L.marker([67.78, -31.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two letniyM_adaptive">'+
            '<img class="marker-point letniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 letniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 letniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal letniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines letniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 letniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Летний сад</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Fc7P99drkek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Летний сад
    }else if (currentLanguage == 'english'){
        let lahtaM = L.marker([83.33,-161.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper lahtaM_adaptive">'+
            '<img class="marker-point lahtaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 lahtaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 lahtaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal lahtaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines lahtaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 lahtaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Lakhta Center</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/IWQlD3qbL9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Лахта

        let dacanM = L.marker([82.62,-97.44], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper dacanM_adaptive">'+
            '<img class="marker-point dacanM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dacanM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dacanM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dacanM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dacanM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dacanM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Datsun</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/d45z5ag9wpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дацан

        let ZSDM = L.marker([78,-130.25], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper ZSDM_adaptive">'+
            '<img class="marker-point ZSDM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ZSDM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ZSDM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ZSDM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ZSDM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ZSDM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">West high-speed diameter</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/05QBssjfuFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//ЗСД

        let petropavlovskayaM = L.marker([70.8,-47.35], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three petropavlovskayaM_adaptive">'+
            '<img class="marker-point petropavlovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petropavlovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petropavlovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petropavlovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petropavlovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petropavlovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Church of Saints Peter and Paul</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/XHWOfMZwCio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петропавловская крепость

        let mechetM = L.marker([73.4,-41.11], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-three marker-wrapper_area-three mechetM_adaptive">'+
            '<img class="marker-point mechetM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mechetM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mechetM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mechetM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mechetM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mechetM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Mosque</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/i_TzE8JJ17c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мечеть

        let avroraM = L.marker([73.494,-29.685], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three avroraM_adaptive">'+
            '<img class="marker-point avroraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 avroraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 avroraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal avroraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines avroraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 avroraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Cruiser “Aurora”</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/PCGKvulfeKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Аврора

        let troitskiyM = L.marker([70.02,-38.188], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three troitskiyM_adaptive">'+
            '<img class="marker-point troitskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 troitskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 troitskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal troitskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines troitskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 troitskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Trinity bridge</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/G7q53gv9Tz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Троицкий мост

        let spasM = L.marker([64.52,-37.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two spasM_adaptive">'+
            '<img class="marker-point spasM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 spasM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 spasM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal spasM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines spasM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 spasM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Church of the Savior</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/4mb1LnULm-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Спас на крови

        let alexandrovskayaM = L.marker([63.3,-47.8], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one alexandrovskayaM_adaptive">'+
            '<img class="marker-point alexandrovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">The Alexander’s column</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/4Hc_MOlIBCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александровская колонна

        let ermitajM = L.marker([65,-49.5], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one ermitajM_adaptive">'+
            '<img class="marker-point ermitajM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ermitajM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ermitajM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ermitajM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ermitajM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ermitajM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Hermitage</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/GcyLhLY2RwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Эрмитаж

        let admiralteistvoM = L.marker([62.86,-54.09], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one admiralteistvoM_adaptive">'+
            '<img class="marker-point admiralteistvoM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteistvoM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteistvoM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteistvoM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteistvoM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteistvoM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Admiralty</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/pry7YpiTrDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейство

        let mikhailovskiM = L.marker([64.75,-29.73], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two mikhailovskiM_adaptive">'+
            '<img class="marker-point mikhailovskiM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mikhailovskiM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mikhailovskiM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mikhailovskiM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mikhailovskiM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mikhailovskiM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Mikhailovsky castle</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/MIKCjI9of9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Михайловский замок

        let medniyM = L.marker([61.71,-58.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one medniyM_adaptive">'+
            '<img class="marker-point medniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 medniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 medniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal medniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines medniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 medniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">The Bronze Horseman</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/J0KvzqBjsWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Медный всадник

        let isaakiyM = L.marker([59.944,-55.89], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one isaakiyM_adaptive">'+
            '<img class="marker-point isaakiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 isaakiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 isaakiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal isaakiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines isaakiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 isaakiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">St. Isaac’s Cathedral</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/uQp_KHLjutY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Исаакий

        let admiralteiskayaM = L.marker([61.44,-48.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-one marker-wrapper_area-one admiralteiskayaM_adaptive">'+
            '<img class="marker-point admiralteiskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteiskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteiskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteiskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteiskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteiskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Метро Admiralteyskaya subway</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/8JatC1igLJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейская

        let RGPUM = L.marker([60.27,-44.46], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two RGPUM_adaptive">'+
            '<img class="marker-point RGPUM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 RGPUM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 RGPUM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal RGPUM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines RGPUM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 RGPUM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Russian State Pedagogical University</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/gRrsO6P0msc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//РГПУ

        let kazanskiyM = L.marker([60.07,-40.594], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two kazanskiyM_adaptive">'+
            '<img class="marker-point kazanskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 kazanskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 kazanskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal kazanskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines kazanskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 kazanskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">The Kazan Cathedral</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/cv0XdnZe0L8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Казанский собор

        let petrekirheM = L.marker([62.15,-41.18], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two petrekirheM_adaptive">'+
            '<img class="marker-point petrekirheM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petrekirheM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petrekirheM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petrekirheM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petrekirheM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petrekirheM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Petrikirche</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/9FESCrCYE6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петрекирхе

        let basilikaM = L.marker([61.24,-36.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-two marker-wrapper_area-two basilikaM_adaptive">'+
            '<img class="marker-point basilikaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 basilikaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 basilikaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal basilikaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines basilikaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 basilikaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Basilica de Saint Catherine</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/JgB9slUkchw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Базилика

        let alexandrinkiyM = L.marker([58.00,-31.01], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two alexandrinkiyM_adaptive">'+
            '<img class="marker-point alexandrinkiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrinkiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrinkiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrinkiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrinkiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrinkiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">The Alexandrinskiy theatre</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/ihoFsxt8QB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александринский

        let dvortsoviyM = L.marker([65.28,-54.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one dvortsoviyM_adaptive">'+
            '<img class="marker-point dvortsoviyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dvortsoviyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dvortsoviyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dvortsoviyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dvortsoviyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dvortsoviyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Palace bridge</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/T4Y5eQdCULQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дворцовый

        let strelkaM = L.marker([67.29,-55.43], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one strelkaM_adaptive">'+
            '<img class="marker-point strelkaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 strelkaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 strelkaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal strelkaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines strelkaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 strelkaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">The Arrow of Vasilievsky Island</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/6XFM4roXM3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Стрелка

        let golandiyaM = L.marker([55.98,-68.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-four marker-wrapper_area-four golandiyaM_adaptive">'+
            '<img class="marker-point golandiyaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 golandiyaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 golandiyaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal golandiyaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines golandiyaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 golandiyaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">New Holland</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/3PV1JCwPeOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Новая Голландия

        let mariinskiyM = L.marker([52.14,-64.4], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four mariinskiyM_adaptive">'+
            '<img class="marker-point mariinskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mariinskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mariinskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mariinskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mariinskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mariinskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">The Mariinsky theater</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/gLGsin_h0pA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мариинский театр

        let sinagogaM = L.marker([51.28,-67.81], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four sinagogaM_adaptive">'+
            '<img class="marker-point sinagogaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 sinagogaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 sinagogaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal sinagogaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines sinagogaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 sinagogaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Synagogue</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/f2akdiGwnJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Синагога

        let vitebskiyM = L.marker([45.72,-36.45], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper vitebskiyM_adaptive">'+
            '<img class="marker-point vitebskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 vitebskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 vitebskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal vitebskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines vitebskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 vitebskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Vitebsky railway station</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/IyjF1Dd5KoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Витебский

        let mogilaM = L.marker([49.84, 11.645], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper mogilaM_adaptive">'+
            '<img class="marker-point mogilaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mogilaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mogilaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mogilaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mogilaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mogilaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Euler&#8217;s grave</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/9CZp7sNVV-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Могила Леонардо Эйлера

        let mostPetraM = L.marker([66.311, 23.005], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-five mostPetraM_adaptive">'+
            '<img class="marker-point mostPetraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mostPetraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mostPetraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mostPetraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mostPetraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mostPetraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">The bridge of Peter I</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/0-_Zz6iHCFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мост Петра Великого

        let smolniyUniversityM = L.marker([68.624, 19.006], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-five marker-wrapper_area-five smolniyUniversityM_adaptive">'+
            '<img class="marker-point smolniyUniversityM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 smolniyUniversityM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 smolniyUniversityM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal smolniyUniversityM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines smolniyUniversityM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 smolniyUniversityM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">State educational Institute Smolny</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/UUfYAne3fk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Смольный институт

        let letniyM = L.marker([67.78, -31.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two letniyM_adaptive">'+
            '<img class="marker-point letniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 letniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 letniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal letniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines letniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 letniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Summer garden</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Ha9zrRK0Nl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Летний сад
    }else if (currentLanguage == 'spanish'){
        let lahtaM = L.marker([83.33,-161.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper lahtaM_adaptive">'+
            '<img class="marker-point lahtaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 lahtaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 lahtaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal lahtaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines lahtaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 lahtaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El Lakhta Center</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/zy8EIkWQMZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Лахта

        let dacanM = L.marker([82.62,-97.44], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper dacanM_adaptive">'+
            '<img class="marker-point dacanM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dacanM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dacanM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dacanM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dacanM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dacanM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Datsan</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Qr1TQ9hNJ2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дацан

        let ZSDM = L.marker([78,-130.25], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper ZSDM_adaptive">'+
            '<img class="marker-point ZSDM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ZSDM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ZSDM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ZSDM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ZSDM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ZSDM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El diámetro occidental de alta velocidad</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/to1uCEKehyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//ЗСД

        let petropavlovskayaM = L.marker([70.8,-47.35], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three petropavlovskayaM_adaptive">'+
            '<img class="marker-point petropavlovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petropavlovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petropavlovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petropavlovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petropavlovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petropavlovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La Catedral de San Pedro y San Pablo</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/t25ZnTBy0dM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петропавловская крепость

        let mechetM = L.marker([73.4,-41.11], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-three marker-wrapper_area-three mechetM_adaptive">'+
            '<img class="marker-point mechetM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mechetM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mechetM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mechetM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mechetM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mechetM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La mezquita</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Ywf4H8nF9Zk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мечеть

        let avroraM = L.marker([73.494,-29.685], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three avroraM_adaptive">'+
            '<img class="marker-point avroraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 avroraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 avroraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal avroraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines avroraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 avroraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El crucero “Aurora”</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/BlOJk2TSnHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Аврора

        let troitskiyM = L.marker([70.02,-38.188], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three troitskiyM_adaptive">'+
            '<img class="marker-point troitskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 troitskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 troitskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal troitskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines troitskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 troitskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El puente de la Trinidad</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/W7SdzHXDkIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Троицкий мост

        let spasM = L.marker([64.52,-37.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two spasM_adaptive">'+
            '<img class="marker-point spasM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 spasM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 spasM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal spasM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines spasM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 spasM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La iglesia del Salvador</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/H9zvfpFwuuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Спас на крови

        let alexandrovskayaM = L.marker([63.3,-47.8], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one alexandrovskayaM_adaptive">'+
            '<img class="marker-point alexandrovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La columna de Alejandro</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/kI0eWsbeGlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александровская колонна

        let ermitajM = L.marker([65,-49.5], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one ermitajM_adaptive">'+
            '<img class="marker-point ermitajM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ermitajM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ermitajM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ermitajM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ermitajM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ermitajM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La Ermita</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/QzmNimxKKAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Эрмитаж

        let admiralteistvoM = L.marker([62.86,-54.09], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one admiralteistvoM_adaptive">'+
            '<img class="marker-point admiralteistvoM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteistvoM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteistvoM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteistvoM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteistvoM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteistvoM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El departamento marítimo</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/RbPuBkeB2R8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейство

        let mikhailovskiM = L.marker([64.75,-29.73], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two mikhailovskiM_adaptive">'+
            '<img class="marker-point mikhailovskiM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mikhailovskiM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mikhailovskiM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mikhailovskiM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mikhailovskiM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mikhailovskiM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El castillo de Mijáilovski</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/BnkxvakvGv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Михайловский замок

        let medniyM = L.marker([61.71,-58.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one medniyM_adaptive">'+
            '<img class="marker-point medniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 medniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 medniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal medniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines medniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 medniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El caballero de Bronce</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/LneuDSM4yTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Медный всадник

        let isaakiyM = L.marker([59.944,-55.89], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one isaakiyM_adaptive">'+
            '<img class="marker-point isaakiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 isaakiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 isaakiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal isaakiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines isaakiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 isaakiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La Catedral de San Isaac</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/1yRAXiQAVlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Исаакий

        let admiralteiskayaM = L.marker([61.44,-48.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-one marker-wrapper_area-one admiralteiskayaM_adaptive">'+
            '<img class="marker-point admiralteiskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteiskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteiskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteiskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteiskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteiskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">estación de metro admiralteyskaya</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/hJ-iCB2gGkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейская

        let RGPUM = L.marker([60.27,-44.46], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two RGPUM_adaptive">'+
            '<img class="marker-point RGPUM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 RGPUM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 RGPUM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal RGPUM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines RGPUM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 RGPUM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La universidad pedagógica estatal de Rusia</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/2ty4L4Cga3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//РГПУ

        let kazanskiyM = L.marker([60.07,-40.594], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two kazanskiyM_adaptive">'+
            '<img class="marker-point kazanskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 kazanskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 kazanskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal kazanskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines kazanskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 kazanskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La Catedral de Kazán</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Kc0bwcOXUiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Казанский собор

        let petrekirheM = L.marker([62.15,-41.18], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two petrekirheM_adaptive">'+
            '<img class="marker-point petrekirheM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petrekirheM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petrekirheM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petrekirheM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petrekirheM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petrekirheM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Petrikirche</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Chhr-ohgzUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петрекирхе

        let basilikaM = L.marker([61.24,-36.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-two marker-wrapper_area-two basilikaM_adaptive">'+
            '<img class="marker-point basilikaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 basilikaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 basilikaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal basilikaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines basilikaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 basilikaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La basílica de Santa Catalina </span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/QLP46QR1WdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Базилика

        let alexandrinkiyM = L.marker([58.00,-31.01], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two alexandrinkiyM_adaptive">'+
            '<img class="marker-point alexandrinkiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrinkiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrinkiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrinkiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrinkiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrinkiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El teatro Alexandrinsky</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/X51udkxqrMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александринский

        let dvortsoviyM = L.marker([65.28,-54.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one dvortsoviyM_adaptive">'+
            '<img class="marker-point dvortsoviyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dvortsoviyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dvortsoviyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dvortsoviyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dvortsoviyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dvortsoviyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El puente del palacio</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/FFLA-y1FdYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дворцовый

        let strelkaM = L.marker([67.29,-55.43], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one strelkaM_adaptive">'+
            '<img class="marker-point strelkaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 strelkaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 strelkaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal strelkaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines strelkaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 strelkaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Strelka (la flecha) de la isla Vasílievski</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/cgd4VeU2JTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Стрелка

        let golandiyaM = L.marker([55.98,-68.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-four marker-wrapper_area-four golandiyaM_adaptive">'+
            '<img class="marker-point golandiyaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 golandiyaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 golandiyaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal golandiyaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines golandiyaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 golandiyaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Holanda nueva</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/wzhk8JM9d9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Новая Голландия

        let mariinskiyM = L.marker([52.14,-64.4], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four mariinskiyM_adaptive">'+
            '<img class="marker-point mariinskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mariinskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mariinskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mariinskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mariinskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mariinskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El Teatro Mariinsky</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/FgBDZSwbTFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мариинский театр

        let sinagogaM = L.marker([51.28,-67.81], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four sinagogaM_adaptive">'+
            '<img class="marker-point sinagogaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 sinagogaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 sinagogaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal sinagogaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines sinagogaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 sinagogaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La sinagoga</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/rS9QoDpTmJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Синагога

        let vitebskiyM = L.marker([45.72,-36.45], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper vitebskiyM_adaptive">'+
            '<img class="marker-point vitebskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 vitebskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 vitebskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal vitebskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines vitebskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 vitebskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La estación del tren Vitebsky</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/G15u28yMYBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Витебский

        let mogilaM = L.marker([49.84, 11.645], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper mogilaM_adaptive">'+
            '<img class="marker-point mogilaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mogilaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mogilaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mogilaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mogilaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mogilaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La tumba de Eiler</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Vno8AAfky3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Могила Леонардо Эйлера

        let mostPetraM = L.marker([66.311, 23.005], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-five mostPetraM_adaptive">'+
            '<img class="marker-point mostPetraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mostPetraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mostPetraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mostPetraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mostPetraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mostPetraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El Puente de Pedro el Grande</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/R8wzuonJRJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мост Петра Великого

        let smolniyUniversityM = L.marker([68.624, 19.006], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-five marker-wrapper_area-five smolniyUniversityM_adaptive">'+
            '<img class="marker-point smolniyUniversityM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 smolniyUniversityM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 smolniyUniversityM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal smolniyUniversityM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines smolniyUniversityM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 smolniyUniversityM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El instituto Smolny</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/B-5Qgu_Zi2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Смольный институт

        let letniyM = L.marker([67.78, -31.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two letniyM_adaptive">'+
            '<img class="marker-point letniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 letniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 letniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal letniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines letniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 letniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">El Jardín del verano</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/0IqPMtRqqoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Летний сад
    }else if (currentLanguage == 'french'){
        let lahtaM = L.marker([83.33,-161.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper lahtaM_adaptive">'+
            '<img class="marker-point lahtaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 lahtaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 lahtaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal lahtaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines lahtaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 lahtaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Lakhta</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/czg8gG5t358" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Лахта

        let dacanM = L.marker([82.62,-97.44], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper dacanM_adaptive">'+
            '<img class="marker-point dacanM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dacanM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dacanM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dacanM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dacanM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dacanM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Datsan</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/wH_ib-zjuhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дацан

        let ZSDM = L.marker([78,-130.25], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper ZSDM_adaptive">'+
            '<img class="marker-point ZSDM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ZSDM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ZSDM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ZSDM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ZSDM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ZSDM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">WHSD</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/eWPtQBrzw8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//ЗСД

        let petropavlovskayaM = L.marker([70.8,-47.35], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three petropavlovskayaM_adaptive">'+
            '<img class="marker-point petropavlovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petropavlovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petropavlovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petropavlovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petropavlovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petropavlovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Église Pierre et Paul</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/mHi_TCt0FJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петропавловская крепость

        let mechetM = L.marker([73.4,-41.11], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-three marker-wrapper_area-three mechetM_adaptive">'+
            '<img class="marker-point mechetM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mechetM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mechetM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mechetM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mechetM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mechetM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Mosquée</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/zQz6Gqug4Gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мечеть

        let avroraM = L.marker([73.494,-29.685], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three avroraM_adaptive">'+
            '<img class="marker-point avroraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 avroraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 avroraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal avroraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines avroraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 avroraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Aurore</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/gEVWCG9-OgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Аврора

        let troitskiyM = L.marker([70.02,-38.188], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-three troitskiyM_adaptive">'+
            '<img class="marker-point troitskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 troitskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 troitskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal troitskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines troitskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 troitskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Pont Troïtski</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/RdddPSLGCo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Троицкий мост

        let spasM = L.marker([64.52,-37.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two spasM_adaptive">'+
            '<img class="marker-point spasM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 spasM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 spasM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal spasM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines spasM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 spasM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Cathédrale Saint-Sauveur-sur-le-Sang-Versé</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/W55_T3KOJ7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Спас на крови

        let alexandrovskayaM = L.marker([63.3,-47.8], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one alexandrovskayaM_adaptive">'+
            '<img class="marker-point alexandrovskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrovskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrovskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrovskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrovskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrovskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Colonne Alexandre</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/BoHB4-41o3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александровская колонна

        let ermitajM = L.marker([65,-49.5], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one ermitajM_adaptive">'+
            '<img class="marker-point ermitajM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 ermitajM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 ermitajM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal ermitajM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines ermitajM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 ermitajM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Ermitage</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/1LS_PjL07K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Эрмитаж

        let admiralteistvoM = L.marker([62.86,-54.09], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one admiralteistvoM_adaptive">'+
            '<img class="marker-point admiralteistvoM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteistvoM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteistvoM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteistvoM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteistvoM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteistvoM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Amirauté</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/I9K-hT_7JuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейство

        let mikhailovskiM = L.marker([64.75,-29.73], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two mikhailovskiM_adaptive">'+
            '<img class="marker-point mikhailovskiM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mikhailovskiM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mikhailovskiM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mikhailovskiM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mikhailovskiM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mikhailovskiM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Château Mikhaïlovski</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/k8wQQKvd5cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Михайловский замок

        let medniyM = L.marker([61.71,-58.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one medniyM_adaptive">'+
            '<img class="marker-point medniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 medniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 medniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal medniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines medniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 medniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Le Cavalier de bronze</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/yhxyg-3_6ms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Медный всадник

        let isaakiyM = L.marker([59.944,-55.89], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one isaakiyM_adaptive">'+
            '<img class="marker-point isaakiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 isaakiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 isaakiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal isaakiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines isaakiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 isaakiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La cathédrale Saint-Isaac</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/UX3YitmBok0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Исаакий

        let admiralteiskayaM = L.marker([61.44,-48.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-one marker-wrapper_area-one admiralteiskayaM_adaptive">'+
            '<img class="marker-point admiralteiskayaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 admiralteiskayaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 admiralteiskayaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal admiralteiskayaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines admiralteiskayaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 admiralteiskayaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Métro Admiralteyskaya</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/xTDYNQRgEjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Адмиралтейская

        let RGPUM = L.marker([60.27,-44.46], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two RGPUM_adaptive">'+
            '<img class="marker-point RGPUM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 RGPUM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 RGPUM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal RGPUM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines RGPUM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 RGPUM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Université pédagogique d&#8217;État russe nommée d&#8217;après Herzen</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/Qif--xd8VgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//РГПУ

        let kazanskiyM = L.marker([60.07,-40.594], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two kazanskiyM_adaptive">'+
            '<img class="marker-point kazanskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 kazanskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 kazanskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal kazanskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines kazanskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 kazanskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Cathédrale de Kazan</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/YdJWIGP5Gaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Казанский собор

        let petrekirheM = L.marker([62.15,-41.18], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two petrekirheM_adaptive">'+
            '<img class="marker-point petrekirheM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 petrekirheM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 petrekirheM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal petrekirheM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines petrekirheM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 petrekirheM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Petrikirche</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/eCIPaf1ZxX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Петрекирхе

        let basilikaM = L.marker([61.24,-36.91], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-two marker-wrapper_area-two basilikaM_adaptive">'+
            '<img class="marker-point basilikaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 basilikaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 basilikaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal basilikaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines basilikaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 basilikaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Basilique Sainte-Catherine</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/emh__-zjQSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Базилика

        let alexandrinkiyM = L.marker([58.00,-31.01], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two alexandrinkiyM_adaptive">'+
            '<img class="marker-point alexandrinkiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 alexandrinkiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 alexandrinkiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal alexandrinkiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines alexandrinkiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 alexandrinkiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Théâtre Alexandrinsky</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/nU3DNZYerrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Александринский

        let dvortsoviyM = L.marker([65.28,-54.22], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one dvortsoviyM_adaptive">'+
            '<img class="marker-point dvortsoviyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 dvortsoviyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 dvortsoviyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal dvortsoviyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines dvortsoviyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 dvortsoviyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Pont du Palais</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/9JPeo50D6JE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Дворцовый

        let strelkaM = L.marker([67.29,-55.43], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-one strelkaM_adaptive">'+
            '<img class="marker-point strelkaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 strelkaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 strelkaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal strelkaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines strelkaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 strelkaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La pointe de l&#8217;île Vassilievsky</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/f2ly-3BDZP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Стрелка

        let golandiyaM = L.marker([55.98,-68.82], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-four marker-wrapper_area-four golandiyaM_adaptive">'+
            '<img class="marker-point golandiyaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 golandiyaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 golandiyaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal golandiyaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines golandiyaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 golandiyaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Nouvelle Hollande</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/PSsBvj8XMvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Новая Голландия

        let mariinskiyM = L.marker([52.14,-64.4], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four mariinskiyM_adaptive">'+
            '<img class="marker-point mariinskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mariinskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mariinskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mariinskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mariinskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mariinskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Théâtre Mariinsky</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/9MdAlJYow1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мариинский театр

        let sinagogaM = L.marker([51.28,-67.81], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-four sinagogaM_adaptive">'+
            '<img class="marker-point sinagogaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 sinagogaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 sinagogaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal sinagogaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines sinagogaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 sinagogaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Synagogue</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/wAJyYDRvEPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Синагога

        let vitebskiyM = L.marker([45.72,-36.45], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper vitebskiyM_adaptive">'+
            '<img class="marker-point vitebskiyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 vitebskiyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 vitebskiyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal vitebskiyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines vitebskiyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 vitebskiyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Gare de Vitebsk</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/qT7jaRHR7Kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Витебский

        let mogilaM = L.marker([49.84, 11.645], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper mogilaM_adaptive">'+
            '<img class="marker-point mogilaM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mogilaM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mogilaM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mogilaM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mogilaM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mogilaM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">La tombe d&#8217;Euler</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/BfjOcMNL9Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Могила Леонардо Эйлера

        let mostPetraM = L.marker([66.311, 23.005], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-five mostPetraM_adaptive">'+
            '<img class="marker-point mostPetraM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 mostPetraM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 mostPetraM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal mostPetraM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines mostPetraM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 mostPetraM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Le pont de Pierre le Grand</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/g_aaXNC_ZHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Мост Петра Великого

        let smolniyUniversityM = L.marker([68.624, 19.006], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper_big-five marker-wrapper_area-five smolniyUniversityM_adaptive">'+
            '<img class="marker-point smolniyUniversityM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 smolniyUniversityM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 smolniyUniversityM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal smolniyUniversityM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines smolniyUniversityM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 smolniyUniversityM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Institut Smolny</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/VmVtVC24z3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Смольный институт

        let letniyM = L.marker([67.78, -31.59], {
          icon: L.divIcon({
            className: 'marker',
            html: '<div class="marker-wrapper marker-wrapper_area-two letniyM_adaptive">'+
            '<img class="marker-point letniyM" src="img/marker/marker-point.png" alt="marker-point">'+
            '<img class="marker-circle-1 letniyM" src="img/marker/marker-circle-1.png" alt="marker-circle-1">'+
            '<img class="marker-circle-2 letniyM" src="img/marker/marker-circle-2.png" alt="marker-circle-2">'+
            '<img class="marker-goal letniyM" src="img/marker/marker-goal.png" alt="marker-goal">'+
            '<img class="marker-lines letniyM" src="img/marker/marker-lines.png" alt="marker-lines">'+
            '<img class="marker-circle-3 letniyM" src="img/marker/marker-circle-3.png" alt="marker-circle-3">'+
            '<span class="marker-capture_hidden">Jardin d&#8217;été</span>'+
            '<span class="marker-video_hidden"> width="560" height="315" src="https://www.youtube.com/embed/jPpfj9j4NiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></span>'+
            '</div>'
          })
        }).addTo(map);//Летний сад
    }
    

    map.on('zoomend', function() {
        $(".marker").width(map.getZoom());
        $(".marker").height(map.getZoom());
    });  

    $(".marker-wrapper").css('opacity', '0');
    $(".marker-wrapper_big-one").css('opacity', '0');
    $(".marker-wrapper_big-two").css('opacity', '0');
    $(".marker-wrapper_big-three").css('opacity', '0');
    $(".marker-wrapper_big-four").css('opacity', '0');
    $(".marker-wrapper_big-five").css('opacity', '0');

    let markerWrapperStatus = 'disabled';
    let markerBigOneStatus = 'disabled';
    let markerBigTwoStatus = 'disabled';
    let markerBigThreeStatus = 'disabled';
    let markerBigFourStatus = 'disabled';
    let markerBigFiveStatus = 'disabled';

    if ($(window).width() >= '991'){
        $(".marker-wrapper").mouseover(function(event) {
          $(event.target).css('opacity','1');
          $(event.target).css('z-index','9999');
          $(event.target.querySelector('.marker-lines')).css('animation','0.5s linear 1s marker-lines');
          $(event.target.querySelector('.marker-point')).css('animation','3s linear 1s marker-point, 1s linear appearing');
          $(event.target.querySelector('.marker-circle-1')).css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
          $(event.target.querySelector('.marker-circle-2')).css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
          $(event.target.querySelector('.marker-circle-3')).css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
          $(event.target.querySelector('.marker-goal')).css('animation','3s linear 1s marker-goal, 1s linear appearing');
          $(event.target).css('width','100px');
          $(event.target).css('height','100px');
          $(event.target).css('margin-left','-50px');
          $(event.target).css('margin-top','-50px');
          setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
        })

        $(".marker-wrapper_big-one").mouseover(function(event) {
          $('.marker-wrapper_area-one').css('opacity','1');
          $('.marker-wrapper_area-one').css('z-index','9999');
          $('.marker-wrapper_area-one').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
          $('.marker-wrapper_area-one').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
          $('.marker-wrapper_area-one').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
          $('.marker-wrapper_area-one').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 4s spinning infinite');
          $('.marker-wrapper_area-one').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
          $('.marker-wrapper_area-one').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
          $('.marker-wrapper_area-one').css('width','100px');
          $('.marker-wrapper_area-one').css('height','100px');
          $('.marker-wrapper_area-one').css('margin-left','-50px');
          $('.marker-wrapper_area-one').css('margin-top','-50px');
          setTimeout(function () {markerBigOneStatus = 'enabled'}, 4000);
        })

        $(".marker-wrapper_big-two").mouseover(function(event) {
          $('.marker-wrapper_area-two').css('opacity','1');
          $('.marker-wrapper_area-two').css('z-index','9999');
          $('.marker-wrapper_area-two').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
          $('.marker-wrapper_area-two').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
          $('.marker-wrapper_area-two').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
          $('.marker-wrapper_area-two').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 4s spinning infinite');
          $('.marker-wrapper_area-two').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
          $('.marker-wrapper_area-two').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
          $('.marker-wrapper_area-two').css('width','100px');
          $('.marker-wrapper_area-two').css('height','100px');
          $('.marker-wrapper_area-two').css('margin-left','-50px');
          $('.marker-wrapper_area-two').css('margin-top','-50px');
          setTimeout(function () {markerBigTwoStatus = 'enabled'}, 4000);
        })

        $(".marker-wrapper_big-three").mouseover(function(event) {
          $('.marker-wrapper_area-three').css('opacity','1');
          $('.marker-wrapper_area-three').css('z-index','9999');
          $('.marker-wrapper_area-three').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
          $('.marker-wrapper_area-three').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
          $('.marker-wrapper_area-three').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
          $('.marker-wrapper_area-three').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 4s spinning infinite');
          $('.marker-wrapper_area-three').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
          $('.marker-wrapper_area-three').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
          $('.marker-wrapper_area-three').css('width','100px');
          $('.marker-wrapper_area-three').css('height','100px');
          $('.marker-wrapper_area-three').css('margin-left','-50px');
          $('.marker-wrapper_area-three').css('margin-top','-50px');
          setTimeout(function () {markerBigThreeStatus = 'enabled'}, 4000);
        })

        $(".marker-wrapper_big-four").mouseover(function(event) {
          $('.marker-wrapper_area-four').css('opacity','1');
          $('.marker-wrapper_area-four').css('z-index','9999');
          $('.marker-wrapper_area-four').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
          $('.marker-wrapper_area-four').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
          $('.marker-wrapper_area-four').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
          $('.marker-wrapper_area-four').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 4s spinning infinite');
          $('.marker-wrapper_area-four').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
          $('.marker-wrapper_area-four').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
          $('.marker-wrapper_area-four').css('width','100px');
          $('.marker-wrapper_area-four').css('height','100px');
          $('.marker-wrapper_area-four').css('margin-left','-50px');
          $('.marker-wrapper_area-four').css('margin-top','-50px');
          setTimeout(function () {markerBigFourStatus = 'enabled'}, 4000);
        })

        $(".marker-wrapper_big-five").mouseover(function(event) {
          $('.marker-wrapper_area-five').css('opacity','1');
          $('.marker-wrapper_area-five').css('z-index','9999');
          $('.marker-wrapper_area-five').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
          $('.marker-wrapper_area-five').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
          $('.marker-wrapper_area-five').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
          $('.marker-wrapper_area-five').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 4s spinning infinite');
          $('.marker-wrapper_area-five').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
          $('.marker-wrapper_area-five').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
          $('.marker-wrapper_area-five').css('width','100px');
          $('.marker-wrapper_area-five').css('height','100px');
          $('.marker-wrapper_area-five').css('margin-left','-50px');
          $('.marker-wrapper_area-five').css('margin-top','-50px');
          setTimeout(function () {markerBigFiveStatus = 'enabled'}, 4000);
        })



        let captureStatus;
        let capture;

        $(".marker-wrapper").mouseover(function(e){
            if (markerWrapperStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';    
            }
        });
        $(".marker-wrapper_big-one").mouseover(function(e){
            if (markerBigOneStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';  
            }
        });
        $(".marker-wrapper_big-two").mouseover(function(e){
            if (markerBigTwoStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        });
        $(".marker-wrapper_big-three").mouseover(function(e){
            if (markerBigThreeStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        });
        $(".marker-wrapper_big-four").mouseover(function(e){
            if (markerBigFourStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        });
        $(".marker-wrapper_big-five").mouseover(function(e){
            if (markerBigFiveStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        });
                // При уходе мышки со ссылки
        $(".marker-wrapper").mouseout(function(){
            $('.popup__capture').remove();
            captureStatus = 'close';
        });
        $(".marker-wrapper_big-one").mouseout(function(){
            $('.popup__capture').remove();
            captureStatus = 'close';
        });
        $(".marker-wrapper_big-two").mouseout(function(){
            $('.popup__capture').remove();
            captureStatus = 'close';
        });
        $(".marker-wrapper_big-three").mouseout(function(){
            $('.popup__capture').remove();
            captureStatus = 'close';
        });
        $(".marker-wrapper_big-four").mouseout(function(){
            $('.popup__capture').remove();
            captureStatus = 'close';
        });
        $(".marker-wrapper_big-five").mouseout(function(){
            $('.popup__capture').remove();
            captureStatus = 'close';
        });

        let videoStatus = 'close'
        let video


        $(".marker-wrapper").mouseup(function(e){
            if (markerWrapperStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.text();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        });
        $(".marker-wrapper_big-one").mouseup(function(e){
            if (markerWrapperStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        });
        $(".marker-wrapper_big-two").mouseup(function(e){
            if (markerWrapperStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        });
        $(".marker-wrapper_big-three").mouseup(function(e){
            if (markerWrapperStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        });
        $(".marker-wrapper_big-four").mouseup(function(e){
            if (markerWrapperStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        });
        $(".marker-wrapper_big-five").mouseup(function(e){
            if (markerWrapperStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        });

         map.on('movestart', function() {
            $('.popup__video').remove();
            $('.popup__overlay').css('display','none');
            videoStatus = 'close';
         })
         $('.popup__overlay').mouseup(function(e){
            $('.popup__video').remove();
            $('.popup__overlay').css('display','none');
            videoStatus = 'close'; 
         })
    }else {
        let central_array
        let leftCornerX
        let leftCornerY
        let rightCornerX
        let rightCornerY
        let leftX
        let leftY
        let rightX
        let rightY

        central =  map.getBounds()._southWest + map.getBounds()._northEast
        central = central.replace(/g/g, ' ');
        central = central.replace(/[^.-\s\d]/g, '')
        central_array = central.split(' ')
        leftCornerY = central_array[1]
        leftCornerX = central_array[2]
        rightCornerY = central_array[3]
        rightCornerX = central_array[4]
        leftCornerY = parseFloat(leftCornerY)
        leftCornerX = parseFloat(leftCornerX)
        rightCornerY = parseFloat(rightCornerY)
        rightCornerX = parseFloat(rightCornerX)

        if (leftCornerX >= -61 && leftCornerX <= -50 && leftCornerY <= 64 && leftCornerY >= 48 && rightCornerX >= -48 && rightCornerX <= -39 && rightCornerY <= 72 && rightCornerY >= 60) {
            $('.ermitajM_adaptive').css('opacity','1');
            $('.ermitajM_adaptive').css('z-index','9999');
            $('.ermitajM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
            $('.ermitajM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
            $('.ermitajM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
            $('.ermitajM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
            $('.ermitajM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
            $('.ermitajM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
            $('.ermitajM_adaptive').css('width','100px');
            $('.ermitajM_adaptive').css('height','100px');
            $('.ermitajM_adaptive').css('margin-left','-50px');
            $('.ermitajM_adaptive').css('margin-top','-50px');
            setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
        }
        if (leftCornerX >= -59 && leftCornerX <= -48 && leftCornerY <= 63 && leftCornerY >= 47 && rightCornerX >= -46 && rightCornerX <= -37 && rightCornerY <= 71 && rightCornerY >= 59) {
                $('.alexandrovskayaM_adaptive').css('opacity','1');
                $('.alexandrovskayaM_adaptive').css('z-index','9999');
                $('.alexandrovskayaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.alexandrovskayaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.alexandrovskayaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').css('width','100px');
                $('.alexandrovskayaM_adaptive').css('height','100px');
                $('.alexandrovskayaM_adaptive').css('margin-left','-50px');
                $('.alexandrovskayaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
        }
        if (leftCornerX >= -61 && leftCornerX <= -48 && leftCornerY <= 62 && leftCornerY >= 44 && rightCornerX >= -47 && rightCornerX <= -38 && rightCornerY <= 71 && rightCornerY >= 57) {
            $('.admiralteiskayaM_adaptive').css('opacity','1');
            $('.admiralteiskayaM_adaptive').css('z-index','9999');
            $('.admiralteiskayaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
            $('.admiralteiskayaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
            $('.admiralteiskayaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
            $('.admiralteiskayaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
            $('.admiralteiskayaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
            $('.admiralteiskayaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
            $('.admiralteiskayaM_adaptive').css('width','100px');
            $('.admiralteiskayaM_adaptive').css('height','100px');
            $('.admiralteiskayaM_adaptive').css('margin-left','-50px');
            $('.admiralteiskayaM_adaptive').css('margin-top','-50px');
            setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
        }


        map.on('movestart', function() {
            central =  map.getBounds()._southWest + map.getBounds()._northEast
            central = central.replace(/g/g, ' ')
            central = central.replace(/[^.-\s\d]/g, '')
            central_array = central.split(' ')
            leftCornerY = central_array[1]
            leftCornerX = central_array[2]
            rightCornerY = central_array[3]
            rightCornerX = central_array[4]
            leftCornerY = parseFloat(leftCornerY)
            leftCornerX = parseFloat(leftCornerX)
            rightCornerY = parseFloat(rightCornerY)
            rightCornerX = parseFloat(rightCornerX)
            if (leftCornerX >= -49 && leftCornerX <= -36 && leftCornerY <= 45 && leftCornerY >= 27 && rightCornerX >= -36 && rightCornerX <= -25 && rightCornerY <= 59 && rightCornerY >= 45) {
                $('.vitebskiyM_adaptive').css('opacity','1');
                $('.vitebskiyM_adaptive').css('z-index','9999');
                $('.vitebskiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.vitebskiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.vitebskiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.vitebskiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.vitebskiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.vitebskiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.vitebskiyM_adaptive').css('width','100px');
                $('.vitebskiyM_adaptive').css('height','100px');
                $('.vitebskiyM_adaptive').css('margin-left','-50px');
                $('.vitebskiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -57 && leftCornerX <= -44 && leftCornerY <= 60 && leftCornerY >= 40 && rightCornerX >= -45 && rightCornerX <= -33 && rightCornerY <= 70 && rightCornerY >= 54) {
                $('.RGPUM_adaptive').css('opacity','1');
                $('.RGPUM_adaptive').css('z-index','9999');
                $('.RGPUM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.RGPUM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.RGPUM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.RGPUM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.RGPUM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.RGPUM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.RGPUM_adaptive').css('width','100px');
                $('.RGPUM_adaptive').css('height','100px');
                $('.RGPUM_adaptive').css('margin-left','-50px');
                $('.RGPUM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -52 && leftCornerX <= -40 && leftCornerY <= 60 && leftCornerY >= 42 && rightCornerX >= -39 && rightCornerX <= -30 && rightCornerY <= 68 && rightCornerY >= 56) {
                $('.kazanskiyM_adaptive').css('opacity','1');
                $('.kazanskiyM_adaptive').css('z-index','9999');
                $('.kazanskiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.kazanskiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.kazanskiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.kazanskiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.kazanskiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.kazanskiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.kazanskiyM_adaptive').css('width','100px');
                $('.kazanskiyM_adaptive').css('height','100px');
                $('.kazanskiyM_adaptive').css('margin-left','-50px');
                $('.kazanskiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -54 && leftCornerX <= -41 && leftCornerY <= 62 && leftCornerY >= 44 && rightCornerX >= -40 && rightCornerX <= -31 && rightCornerY <= 70 && rightCornerY >= 58) {
                $('.petrekirheM_adaptive').css('opacity','1');
                $('.petrekirheM_adaptive').css('z-index','9999');
                $('.petrekirheM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.petrekirheM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.petrekirheM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.petrekirheM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.petrekirheM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.petrekirheM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.petrekirheM_adaptive').css('width','100px');
                $('.petrekirheM_adaptive').css('height','100px');
                $('.petrekirheM_adaptive').css('margin-left','-50px');
                $('.petrekirheM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -50 && leftCornerX <= -37 && leftCornerY <= 65 && leftCornerY >= 47 && rightCornerX >= -36 && rightCornerX <= -27 && rightCornerY <= 72 && rightCornerY >= 60) {
                $('.spasM_adaptive').css('opacity','1');
                $('.spasM_adaptive').css('z-index','9999');
                $('.spasM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.spasM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.spasM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.spasM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.spasM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.spasM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.spasM_adaptive').css('width','100px');
                $('.spasM_adaptive').css('height','100px');
                $('.spasM_adaptive').css('margin-left','-50px');
                $('.spasM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -60 && leftCornerX <= -47 && leftCornerY <= 64 && leftCornerY >= 46 && rightCornerX >= -46 && rightCornerX <= -37 && rightCornerY <= 71 && rightCornerY >= 59) {
                $('.alexandrovskayaM_adaptive').css('opacity','1');
                $('.alexandrovskayaM_adaptive').css('z-index','9999');
                $('.alexandrovskayaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.alexandrovskayaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.alexandrovskayaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').css('width','100px');
                $('.alexandrovskayaM_adaptive').css('height','100px');
                $('.alexandrovskayaM_adaptive').css('margin-left','-50px');
                $('.alexandrovskayaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -62 && leftCornerX <= -49 && leftCornerY <= 65 && leftCornerY >= 47 && rightCornerX >= -48 && rightCornerX <= -39 && rightCornerY <= 72 && rightCornerY >= 60) {
                $('.ermitajM_adaptive').css('opacity','1');
                $('.ermitajM_adaptive').css('z-index','9999');
                $('.ermitajM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.ermitajM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.ermitajM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.ermitajM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.ermitajM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.ermitajM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.ermitajM_adaptive').css('width','100px');
                $('.ermitajM_adaptive').css('height','100px');
                $('.ermitajM_adaptive').css('margin-left','-50px');
                $('.ermitajM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -67 && leftCornerX <= -54 && leftCornerY <= 65 && leftCornerY >= 47 && rightCornerX >= -53 && rightCornerX <= -44 && rightCornerY <= 72 && rightCornerY >= 60) {
                $('.dvortsoviyM_adaptive').css('opacity','1');
                $('.dvortsoviyM_adaptive').css('z-index','9999');
                $('.dvortsoviyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.dvortsoviyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.dvortsoviyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.dvortsoviyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.dvortsoviyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.dvortsoviyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.dvortsoviyM_adaptive').css('width','100px');
                $('.dvortsoviyM_adaptive').css('height','100px');
                $('.dvortsoviyM_adaptive').css('margin-left','-50px');
                $('.dvortsoviyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -68 && leftCornerX <= -55 && leftCornerY <= 67 && leftCornerY >= 49 && rightCornerX >= -55 && rightCornerX <= -44 && rightCornerY <= 75 && rightCornerY >= 61) {
                $('.strelkaM_adaptive').css('opacity','1');
                $('.strelkaM_adaptive').css('z-index','9999');
                $('.strelkaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.strelkaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.strelkaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.strelkaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.strelkaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.strelkaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.strelkaM_adaptive').css('width','100px');
                $('.strelkaM_adaptive').css('height','100px');
                $('.strelkaM_adaptive').css('margin-left','-50px');
                $('.strelkaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -67 && leftCornerX <= -53 && leftCornerY <= 63 && leftCornerY >= 45 && rightCornerX >= -54 && rightCornerX <= -43 && rightCornerY <= 72 && rightCornerY >= 58) {
                $('.admiralteistvoM_adaptive').css('opacity','1');
                $('.admiralteistvoM_adaptive').css('z-index','9999');
                $('.admiralteistvoM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.admiralteistvoM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.admiralteistvoM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.admiralteistvoM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.admiralteistvoM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.admiralteistvoM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.admiralteistvoM_adaptive').css('width','100px');
                $('.admiralteistvoM_adaptive').css('height','100px');
                $('.admiralteistvoM_adaptive').css('margin-left','-50px');
                $('.admiralteistvoM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -72 && leftCornerX <= -59 && leftCornerY <= 62 && leftCornerY >= 44 && rightCornerX >= -59 && rightCornerX <= -48 && rightCornerY <= 71 && rightCornerY >= 57) {
                $('.medniyM_adaptive').css('opacity','1');
                $('.medniyM_adaptive').css('z-index','9999');
                $('.medniyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.medniyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.medniyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.medniyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.medniyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.medniyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.medniyM_adaptive').css('width','100px');
                $('.medniyM_adaptive').css('height','100px');
                $('.medniyM_adaptive').css('margin-left','-50px');
                $('.medniyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -69 && leftCornerX <= -56 && leftCornerY <= 60 && leftCornerY >= 42 && rightCornerX >= -56 && rightCornerX <= -45 && rightCornerY <= 69 && rightCornerY >= 55) {
                $('.isaakiyM_adaptive').css('opacity','1');
                $('.isaakiyM_adaptive').css('z-index','9999');
                $('.isaakiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.isaakiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.isaakiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.isaakiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.isaakiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.isaakiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.isaakiyM_adaptive').css('width','100px');
                $('.isaakiyM_adaptive').css('height','100px');
                $('.isaakiyM_adaptive').css('margin-left','-50px');
                $('.isaakiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -44 && leftCornerX <= -31 && leftCornerY <= 68 && leftCornerY >= 50 && rightCornerX >= -31 && rightCornerX <= -20 && rightCornerY <= 75 && rightCornerY >= 61) {
                $('.letniyM_adaptive').css('opacity','1');
                $('.letniyM_adaptive').css('z-index','9999');
                $('.letniyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.letniyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.letniyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.letniyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.letniyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.letniyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.letniyM_adaptive').css('width','100px');
                $('.letniyM_adaptive').css('height','100px');
                $('.letniyM_adaptive').css('margin-left','-50px');
                $('.letniyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -51 && leftCornerX <= -38 && leftCornerY <= 70 && leftCornerY >= 52 && rightCornerX >= -38 && rightCornerX <= -27 && rightCornerY <= 77 && rightCornerY >= 63) {
                $('.troitskiyM_adaptive').css('opacity','1');
                $('.troitskiyM_adaptive').css('z-index','9999');
                $('.troitskiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.troitskiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.troitskiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.troitskiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.troitskiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.troitskiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.troitskiyM_adaptive').css('width','100px');
                $('.troitskiyM_adaptive').css('height','100px');
                $('.troitskiyM_adaptive').css('margin-left','-50px');
                $('.troitskiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -60 && leftCornerX <= -47 && leftCornerY <= 71 && leftCornerY >= 53 && rightCornerX >= -47 && rightCornerX <= -36 && rightCornerY <= 77 && rightCornerY >= 63) {
                $('.petropavlovskayaM_adaptive').css('opacity','1');
                $('.petropavlovskayaM_adaptive').css('z-index','9999');
                $('.petropavlovskayaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.petropavlovskayaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.petropavlovskayaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.petropavlovskayaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.petropavlovskayaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.petropavlovskayaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.petropavlovskayaM_adaptive').css('width','100px');
                $('.petropavlovskayaM_adaptive').css('height','100px');
                $('.petropavlovskayaM_adaptive').css('margin-left','-50px');
                $('.petropavlovskayaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -76 && leftCornerX <= -63 && leftCornerY <= 51 && leftCornerY >= 35 && rightCornerX >= -63 && rightCornerX <= -52 && rightCornerY <= 64 && rightCornerY >= 50) {
                $('.mariinskiyM_adaptive').css('opacity','1');
                $('.mariinskiyM_adaptive').css('z-index','9999');
                $('.mariinskiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mariinskiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mariinskiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mariinskiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mariinskiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mariinskiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mariinskiyM_adaptive').css('width','100px');
                $('.mariinskiyM_adaptive').css('height','100px');
                $('.mariinskiyM_adaptive').css('margin-left','-50px');
                $('.mariinskiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -77 && leftCornerX <= -64 && leftCornerY <= 50 && leftCornerY >= 34 && rightCornerX >= -64 && rightCornerX <= -53 && rightCornerY <= 64 && rightCornerY >= 50) {
                $('.sinagogaM_adaptive').css('opacity','1');
                $('.sinagogaM_adaptive').css('z-index','9999');
                $('.sinagogaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.sinagogaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.sinagogaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.sinagogaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.sinagogaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.sinagogaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.sinagogaM_adaptive').css('width','100px');
                $('.sinagogaM_adaptive').css('height','100px');
                $('.sinagogaM_adaptive').css('margin-left','-50px');
                $('.sinagogaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -109 && leftCornerX <= -96 && leftCornerY <= 81 && leftCornerY >= 65 && rightCornerX >= -96 && rightCornerX <= -85 && rightCornerY <= 85 && rightCornerY >= 71) {
                $('.dacanM_adaptive').css('opacity','1');
                $('.dacanM_adaptive').css('z-index','9999');
                $('.dacanM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.dacanM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.dacanM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.dacanM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.dacanM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.dacanM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.dacanM_adaptive').css('width','100px');
                $('.dacanM_adaptive').css('height','100px');
                $('.dacanM_adaptive').css('margin-left','-50px');
                $('.dacanM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -175 && leftCornerX <= -93 && leftCornerY <= 83 && leftCornerY >= 58 && rightCornerX >= -162 && rightCornerX <= -82 && rightCornerY <= 86 && rightCornerY >= 67) {
                $('.lahtaM_adaptive').css('opacity','1');
                $('.lahtaM_adaptive').css('z-index','9999');
                $('.lahtaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.lahtaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.lahtaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.lahtaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.lahtaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.lahtaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.lahtaM_adaptive').css('width','100px');
                $('.lahtaM_adaptive').css('height','100px');
                $('.lahtaM_adaptive').css('margin-left','-50px');
                $('.lahtaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -143 && leftCornerX <= -130 && leftCornerY <= 76 && leftCornerY >= 60 && rightCornerX >= -130 && rightCornerX <= -119 && rightCornerY <= 82 && rightCornerY >= 68) {
                $('.ZSDM_adaptive').css('opacity','1');
                $('.ZSDM_adaptive').css('z-index','9999');
                $('.ZSDM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.ZSDM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.ZSDM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.ZSDM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.ZSDM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.ZSDM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.ZSDM_adaptive').css('width','100px');
                $('.ZSDM_adaptive').css('height','100px');
                $('.ZSDM_adaptive').css('margin-left','-50px');
                $('.ZSDM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -43 && leftCornerX <= -30 && leftCornerY <= 74 && leftCornerY >= 56 && rightCornerX >= -30 && rightCornerX <= -19 && rightCornerY <= 79 && rightCornerY >= 65) {
                $('.avroraM_adaptive').css('opacity','1');
                $('.avroraM_adaptive').css('z-index','9999');
                $('.avroraM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.avroraM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.avroraM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.avroraM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.avroraM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.avroraM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.avroraM_adaptive').css('width','100px');
                $('.avroraM_adaptive').css('height','100px');
                $('.avroraM_adaptive').css('margin-left','-50px');
                $('.avroraM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= 9 && leftCornerX <= 22 && leftCornerY <= 67 && leftCornerY >= 49 && rightCornerX >= 22 && rightCornerX <= 33 && rightCornerY <= 74 && rightCornerY >= 60) {
                $('.mostPetraM_adaptive').css('opacity','1');
                $('.mostPetraM_adaptive').css('z-index','9999');
                $('.mostPetraM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mostPetraM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mostPetraM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mostPetraM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mostPetraM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mostPetraM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mostPetraM_adaptive').css('width','100px');
                $('.mostPetraM_adaptive').css('height','100px');
                $('.mostPetraM_adaptive').css('margin-left','-50px');
                $('.mostPetraM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= 8 && leftCornerX <= 17 && leftCornerY <= 46 && leftCornerY >= 30 && rightCornerX >= 19 && rightCornerX <= 30 && rightCornerY <= 59 && rightCornerY >= 45) {
                $('.mogilaM_adaptive').css('opacity','1');
                $('.mogilaM_adaptive').css('z-index','9999');
                $('.mogilaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mogilaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mogilaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mogilaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mogilaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mogilaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mogilaM_adaptive').css('width','100px');
                $('.mogilaM_adaptive').css('height','100px');
                $('.mogilaM_adaptive').css('margin-left','-50px');
                $('.mogilaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -61 && leftCornerX <= -48 && leftCornerY <= 62 && leftCornerY >= 44 && rightCornerX >= -49 && rightCornerX <= -38 && rightCornerY <= 71 && rightCornerY >= 57) {
                $('.admiralteiskayaM_adaptive').css('opacity','1');
                $('.admiralteiskayaM_adaptive').css('z-index','9999');
                $('.admiralteiskayaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.admiralteiskayaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.admiralteiskayaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.admiralteiskayaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.admiralteiskayaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.admiralteiskayaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.admiralteiskayaM_adaptive').css('width','100px');
                $('.admiralteiskayaM_adaptive').css('height','100px');
                $('.admiralteiskayaM_adaptive').css('margin-left','-50px');
                $('.admiralteiskayaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigOneStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= 9 && leftCornerX <= 23 && leftCornerY <= 64 && leftCornerY >= 46 && rightCornerX >= 22 && rightCornerX <= 34 && rightCornerY <= 74 && rightCornerY >= 59) {
                $('.smolniyUniversityM_adaptive').css('opacity','1');
                $('.smolniyUniversityM_adaptive').css('z-index','9999');
                $('.smolniyUniversityM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.smolniyUniversityM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.smolniyUniversityM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.smolniyUniversityM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.smolniyUniversityM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.smolniyUniversityM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.smolniyUniversityM_adaptive').css('width','100px');
                $('.smolniyUniversityM_adaptive').css('height','100px');
                $('.smolniyUniversityM_adaptive').css('margin-left','-50px');
                $('.smolniyUniversityM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigFiveStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -49 && leftCornerX <= -36 && leftCornerY <= 61 && leftCornerY >= 43 && rightCornerX >= -36 && rightCornerX <= -25 && rightCornerY <= 70 && rightCornerY >= 56) {
                $('.basilikaM_adaptive').css('opacity','1');
                $('.basilikaM_adaptive').css('z-index','9999');
                $('.basilikaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.basilikaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.basilikaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.basilikaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.basilikaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.basilikaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.basilikaM_adaptive').css('width','100px');
                $('.basilikaM_adaptive').css('height','100px');
                $('.basilikaM_adaptive').css('margin-left','-50px');
                $('.basilikaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigTwoStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -81 && leftCornerX <= -68 && leftCornerY <= 56 && leftCornerY >= 38 && rightCornerX >= -68 && rightCornerX <= -57 && rightCornerY <= 67 && rightCornerY >= 53) {
                $('.golandiyaM_adaptive').css('opacity','1');
                $('.golandiyaM_adaptive').css('z-index','9999');
                $('.golandiyaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.golandiyaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.golandiyaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.golandiyaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.golandiyaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.golandiyaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.golandiyaM_adaptive').css('width','100px');
                $('.golandiyaM_adaptive').css('height','100px');
                $('.golandiyaM_adaptive').css('margin-left','-50px');
                $('.golandiyaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigFourStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -54 && leftCornerX <= -41 && leftCornerY <= 74 && leftCornerY >= 56 && rightCornerX >= -41 && rightCornerX <= -30 && rightCornerY <= 79 && rightCornerY >= 65) {
                $('.mechetM_adaptive').css('opacity','1');
                $('.mechetM_adaptive').css('z-index','9999');
                $('.mechetM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mechetM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mechetM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mechetM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mechetM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mechetM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mechetM_adaptive').css('width','100px');
                $('.mechetM_adaptive').css('height','100px');
                $('.mechetM_adaptive').css('margin-left','-50px');
                $('.mechetM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigThreeStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -54 && leftCornerX <= -41 && leftCornerY <= 74 && leftCornerY >= 56 && rightCornerX >= -41 && rightCornerX <= -30 && rightCornerY <= 79 && rightCornerY >= 65) {
                $('.mikhailovskiM_adaptive').css('opacity','1');
                $('.mikhailovskiM_adaptive').css('z-index','9999');
                $('.mikhailovskiM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mikhailovskiM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mikhailovskiM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mikhailovskiM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mikhailovskiM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mikhailovskiM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mikhailovskiM_adaptive').css('width','100px');
                $('.mikhailovskiM_adaptive').css('height','100px');
                $('.mikhailovskiM_adaptive').css('margin-left','-50px');
                $('.mikhailovskiM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -54 && leftCornerX <= -41 && leftCornerY <= 74 && leftCornerY >= 56 && rightCornerX >= -41 && rightCornerX <= -30 && rightCornerY <= 79 && rightCornerY >= 65) {
                $('.alexandrinkiyM_adaptive').css('opacity','1');
                $('.alexandrinkiyM_adaptive').css('z-index','9999');
                $('.alexandrinkiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.alexandrinkiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.alexandrinkiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.alexandrinkiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.alexandrinkiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.alexandrinkiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.alexandrinkiyM_adaptive').css('width','100px');
                $('.alexandrinkiyM_adaptive').css('height','100px');
                $('.alexandrinkiyM_adaptive').css('margin-left','-50px');
                $('.alexandrinkiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
        })
        map.on('moveend', function() {
            central =  map.getBounds()._southWest + map.getBounds()._northEast
            central = central.replace(/g/g, ' ')
            central = central.replace(/[^.-\s\d]/g, '')
            central_array = central.split(' ')
            leftCornerY = central_array[1]
            leftCornerX = central_array[2]
            rightCornerY = central_array[3]
            rightCornerX = central_array[4]
            leftCornerY = parseFloat(leftCornerY)
            leftCornerX = parseFloat(leftCornerX)
            rightCornerY = parseFloat(rightCornerY)
            rightCornerX = parseFloat(rightCornerX)
            if (leftCornerX >= -49 && leftCornerX <= -36 && leftCornerY <= 45 && leftCornerY >= 27 && rightCornerX >= -36 && rightCornerX <= -25 && rightCornerY <= 59 && rightCornerY >= 45) {
                $('.vitebskiyM_adaptive').css('opacity','1');
                $('.vitebskiyM_adaptive').css('z-index','9999');
                $('.vitebskiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.vitebskiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.vitebskiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.vitebskiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.vitebskiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.vitebskiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.vitebskiyM_adaptive').css('width','100px');
                $('.vitebskiyM_adaptive').css('height','100px');
                $('.vitebskiyM_adaptive').css('margin-left','-50px');
                $('.vitebskiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -57 && leftCornerX <= -44 && leftCornerY <= 60 && leftCornerY >= 40 && rightCornerX >= -45 && rightCornerX <= -33 && rightCornerY <= 70 && rightCornerY >= 54) {
                $('.RGPUM_adaptive').css('opacity','1');
                $('.RGPUM_adaptive').css('z-index','9999');
                $('.RGPUM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.RGPUM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.RGPUM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.RGPUM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.RGPUM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.RGPUM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.RGPUM_adaptive').css('width','100px');
                $('.RGPUM_adaptive').css('height','100px');
                $('.RGPUM_adaptive').css('margin-left','-50px');
                $('.RGPUM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -52 && leftCornerX <= -40 && leftCornerY <= 60 && leftCornerY >= 42 && rightCornerX >= -39 && rightCornerX <= -30 && rightCornerY <= 68 && rightCornerY >= 56) {
                $('.kazanskiyM_adaptive').css('opacity','1');
                $('.kazanskiyM_adaptive').css('z-index','9999');
                $('.kazanskiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.kazanskiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.kazanskiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.kazanskiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.kazanskiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.kazanskiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.kazanskiyM_adaptive').css('width','100px');
                $('.kazanskiyM_adaptive').css('height','100px');
                $('.kazanskiyM_adaptive').css('margin-left','-50px');
                $('.kazanskiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -54 && leftCornerX <= -41 && leftCornerY <= 62 && leftCornerY >= 44 && rightCornerX >= -40 && rightCornerX <= -31 && rightCornerY <= 70 && rightCornerY >= 58) {
                $('.petrekirheM_adaptive').css('opacity','1');
                $('.petrekirheM_adaptive').css('z-index','9999');
                $('.petrekirheM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.petrekirheM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.petrekirheM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.petrekirheM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.petrekirheM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.petrekirheM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.petrekirheM_adaptive').css('width','100px');
                $('.petrekirheM_adaptive').css('height','100px');
                $('.petrekirheM_adaptive').css('margin-left','-50px');
                $('.petrekirheM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -50 && leftCornerX <= -37 && leftCornerY <= 65 && leftCornerY >= 47 && rightCornerX >= -36 && rightCornerX <= -27 && rightCornerY <= 72 && rightCornerY >= 60) {
                $('.spasM_adaptive').css('opacity','1');
                $('.spasM_adaptive').css('z-index','9999');
                $('.spasM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.spasM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.spasM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.spasM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.spasM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.spasM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.spasM_adaptive').css('width','100px');
                $('.spasM_adaptive').css('height','100px');
                $('.spasM_adaptive').css('margin-left','-50px');
                $('.spasM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -60 && leftCornerX <= -47 && leftCornerY <= 64 && leftCornerY >= 46 && rightCornerX >= -46 && rightCornerX <= -37 && rightCornerY <= 71 && rightCornerY >= 59) {
                $('.alexandrovskayaM_adaptive').css('opacity','1');
                $('.alexandrovskayaM_adaptive').css('z-index','9999');
                $('.alexandrovskayaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.alexandrovskayaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.alexandrovskayaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.alexandrovskayaM_adaptive').css('width','100px');
                $('.alexandrovskayaM_adaptive').css('height','100px');
                $('.alexandrovskayaM_adaptive').css('margin-left','-50px');
                $('.alexandrovskayaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -62 && leftCornerX <= -49 && leftCornerY <= 65 && leftCornerY >= 47 && rightCornerX >= -48 && rightCornerX <= -39 && rightCornerY <= 72 && rightCornerY >= 60) {
                $('.ermitajM_adaptive').css('opacity','1');
                $('.ermitajM_adaptive').css('z-index','9999');
                $('.ermitajM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.ermitajM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.ermitajM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.ermitajM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.ermitajM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.ermitajM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.ermitajM_adaptive').css('width','100px');
                $('.ermitajM_adaptive').css('height','100px');
                $('.ermitajM_adaptive').css('margin-left','-50px');
                $('.ermitajM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -67 && leftCornerX <= -54 && leftCornerY <= 65 && leftCornerY >= 47 && rightCornerX >= -53 && rightCornerX <= -44 && rightCornerY <= 72 && rightCornerY >= 60) {
                $('.dvortsoviyM_adaptive').css('opacity','1');
                $('.dvortsoviyM_adaptive').css('z-index','9999');
                $('.dvortsoviyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.dvortsoviyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.dvortsoviyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.dvortsoviyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.dvortsoviyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.dvortsoviyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.dvortsoviyM_adaptive').css('width','100px');
                $('.dvortsoviyM_adaptive').css('height','100px');
                $('.dvortsoviyM_adaptive').css('margin-left','-50px');
                $('.dvortsoviyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -68 && leftCornerX <= -55 && leftCornerY <= 67 && leftCornerY >= 49 && rightCornerX >= -55 && rightCornerX <= -44 && rightCornerY <= 75 && rightCornerY >= 61) {
                $('.strelkaM_adaptive').css('opacity','1');
                $('.strelkaM_adaptive').css('z-index','9999');
                $('.strelkaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.strelkaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.strelkaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.strelkaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.strelkaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.strelkaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.strelkaM_adaptive').css('width','100px');
                $('.strelkaM_adaptive').css('height','100px');
                $('.strelkaM_adaptive').css('margin-left','-50px');
                $('.strelkaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -67 && leftCornerX <= -53 && leftCornerY <= 63 && leftCornerY >= 45 && rightCornerX >= -54 && rightCornerX <= -43 && rightCornerY <= 72 && rightCornerY >= 58) {
                $('.admiralteistvoM_adaptive').css('opacity','1');
                $('.admiralteistvoM_adaptive').css('z-index','9999');
                $('.admiralteistvoM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.admiralteistvoM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.admiralteistvoM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.admiralteistvoM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.admiralteistvoM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.admiralteistvoM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.admiralteistvoM_adaptive').css('width','100px');
                $('.admiralteistvoM_adaptive').css('height','100px');
                $('.admiralteistvoM_adaptive').css('margin-left','-50px');
                $('.admiralteistvoM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -72 && leftCornerX <= -59 && leftCornerY <= 62 && leftCornerY >= 44 && rightCornerX >= -59 && rightCornerX <= -48 && rightCornerY <= 71 && rightCornerY >= 57) {
                $('.medniyM_adaptive').css('opacity','1');
                $('.medniyM_adaptive').css('z-index','9999');
                $('.medniyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.medniyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.medniyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.medniyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.medniyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.medniyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.medniyM_adaptive').css('width','100px');
                $('.medniyM_adaptive').css('height','100px');
                $('.medniyM_adaptive').css('margin-left','-50px');
                $('.medniyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -69 && leftCornerX <= -56 && leftCornerY <= 60 && leftCornerY >= 42 && rightCornerX >= -56 && rightCornerX <= -45 && rightCornerY <= 69 && rightCornerY >= 55) {
                $('.isaakiyM_adaptive').css('opacity','1');
                $('.isaakiyM_adaptive').css('z-index','9999');
                $('.isaakiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.isaakiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.isaakiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.isaakiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.isaakiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.isaakiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.isaakiyM_adaptive').css('width','100px');
                $('.isaakiyM_adaptive').css('height','100px');
                $('.isaakiyM_adaptive').css('margin-left','-50px');
                $('.isaakiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -44 && leftCornerX <= -31 && leftCornerY <= 68 && leftCornerY >= 50 && rightCornerX >= -31 && rightCornerX <= -20 && rightCornerY <= 75 && rightCornerY >= 61) {
                $('.letniyM_adaptive').css('opacity','1');
                $('.letniyM_adaptive').css('z-index','9999');
                $('.letniyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.letniyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.letniyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.letniyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.letniyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.letniyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.letniyM_adaptive').css('width','100px');
                $('.letniyM_adaptive').css('height','100px');
                $('.letniyM_adaptive').css('margin-left','-50px');
                $('.letniyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -51 && leftCornerX <= -38 && leftCornerY <= 70 && leftCornerY >= 52 && rightCornerX >= -38 && rightCornerX <= -27 && rightCornerY <= 77 && rightCornerY >= 63) {
                $('.troitskiyM_adaptive').css('opacity','1');
                $('.troitskiyM_adaptive').css('z-index','9999');
                $('.troitskiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.troitskiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.troitskiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.troitskiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.troitskiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.troitskiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.troitskiyM_adaptive').css('width','100px');
                $('.troitskiyM_adaptive').css('height','100px');
                $('.troitskiyM_adaptive').css('margin-left','-50px');
                $('.troitskiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -60 && leftCornerX <= -47 && leftCornerY <= 71 && leftCornerY >= 53 && rightCornerX >= -47 && rightCornerX <= -36 && rightCornerY <= 77 && rightCornerY >= 63) {
                $('.petropavlovskayaM_adaptive').css('opacity','1');
                $('.petropavlovskayaM_adaptive').css('z-index','9999');
                $('.petropavlovskayaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.petropavlovskayaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.petropavlovskayaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.petropavlovskayaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.petropavlovskayaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.petropavlovskayaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.petropavlovskayaM_adaptive').css('width','100px');
                $('.petropavlovskayaM_adaptive').css('height','100px');
                $('.petropavlovskayaM_adaptive').css('margin-left','-50px');
                $('.petropavlovskayaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -76 && leftCornerX <= -63 && leftCornerY <= 51 && leftCornerY >= 35 && rightCornerX >= -63 && rightCornerX <= -52 && rightCornerY <= 64 && rightCornerY >= 50) {
                $('.mariinskiyM_adaptive').css('opacity','1');
                $('.mariinskiyM_adaptive').css('z-index','9999');
                $('.mariinskiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mariinskiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mariinskiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mariinskiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mariinskiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mariinskiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mariinskiyM_adaptive').css('width','100px');
                $('.mariinskiyM_adaptive').css('height','100px');
                $('.mariinskiyM_adaptive').css('margin-left','-50px');
                $('.mariinskiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -77 && leftCornerX <= -64 && leftCornerY <= 50 && leftCornerY >= 34 && rightCornerX >= -64 && rightCornerX <= -53 && rightCornerY <= 64 && rightCornerY >= 50) {
                $('.sinagogaM_adaptive').css('opacity','1');
                $('.sinagogaM_adaptive').css('z-index','9999');
                $('.sinagogaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.sinagogaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.sinagogaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.sinagogaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.sinagogaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.sinagogaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.sinagogaM_adaptive').css('width','100px');
                $('.sinagogaM_adaptive').css('height','100px');
                $('.sinagogaM_adaptive').css('margin-left','-50px');
                $('.sinagogaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -109 && leftCornerX <= -96 && leftCornerY <= 81 && leftCornerY >= 65 && rightCornerX >= -96 && rightCornerX <= -85 && rightCornerY <= 85 && rightCornerY >= 71) {
                $('.dacanM_adaptive').css('opacity','1');
                $('.dacanM_adaptive').css('z-index','9999');
                $('.dacanM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.dacanM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.dacanM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.dacanM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.dacanM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.dacanM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.dacanM_adaptive').css('width','100px');
                $('.dacanM_adaptive').css('height','100px');
                $('.dacanM_adaptive').css('margin-left','-50px');
                $('.dacanM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -175 && leftCornerX <= -93 && leftCornerY <= 83 && leftCornerY >= 58 && rightCornerX >= -162 && rightCornerX <= -82 && rightCornerY <= 86 && rightCornerY >= 67) {
                $('.lahtaM_adaptive').css('opacity','1');
                $('.lahtaM_adaptive').css('z-index','9999');
                $('.lahtaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.lahtaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.lahtaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.lahtaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.lahtaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.lahtaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.lahtaM_adaptive').css('width','100px');
                $('.lahtaM_adaptive').css('height','100px');
                $('.lahtaM_adaptive').css('margin-left','-50px');
                $('.lahtaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -143 && leftCornerX <= -130 && leftCornerY <= 76 && leftCornerY >= 60 && rightCornerX >= -130 && rightCornerX <= -119 && rightCornerY <= 82 && rightCornerY >= 68) {
                $('.ZSDM_adaptive').css('opacity','1');
                $('.ZSDM_adaptive').css('z-index','9999');
                $('.ZSDM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.ZSDM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.ZSDM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.ZSDM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.ZSDM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.ZSDM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.ZSDM_adaptive').css('width','100px');
                $('.ZSDM_adaptive').css('height','100px');
                $('.ZSDM_adaptive').css('margin-left','-50px');
                $('.ZSDM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -43 && leftCornerX <= -30 && leftCornerY <= 74 && leftCornerY >= 56 && rightCornerX >= -30 && rightCornerX <= -19 && rightCornerY <= 79 && rightCornerY >= 65) {
                $('.avroraM_adaptive').css('opacity','1');
                $('.avroraM_adaptive').css('z-index','9999');
                $('.avroraM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.avroraM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.avroraM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.avroraM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.avroraM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.avroraM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.avroraM_adaptive').css('width','100px');
                $('.avroraM_adaptive').css('height','100px');
                $('.avroraM_adaptive').css('margin-left','-50px');
                $('.avroraM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= 9 && leftCornerX <= 22 && leftCornerY <= 67 && leftCornerY >= 49 && rightCornerX >= 22 && rightCornerX <= 33 && rightCornerY <= 74 && rightCornerY >= 60) {
                $('.mostPetraM_adaptive').css('opacity','1');
                $('.mostPetraM_adaptive').css('z-index','9999');
                $('.mostPetraM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mostPetraM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mostPetraM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mostPetraM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mostPetraM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mostPetraM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mostPetraM_adaptive').css('width','100px');
                $('.mostPetraM_adaptive').css('height','100px');
                $('.mostPetraM_adaptive').css('margin-left','-50px');
                $('.mostPetraM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= 8 && leftCornerX <= 17 && leftCornerY <= 46 && leftCornerY >= 30 && rightCornerX >= 19 && rightCornerX <= 30 && rightCornerY <= 59 && rightCornerY >= 45) {
                $('.mogilaM_adaptive').css('opacity','1');
                $('.mogilaM_adaptive').css('z-index','9999');
                $('.mogilaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mogilaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mogilaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mogilaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mogilaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mogilaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mogilaM_adaptive').css('width','100px');
                $('.mogilaM_adaptive').css('height','100px');
                $('.mogilaM_adaptive').css('margin-left','-50px');
                $('.mogilaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -61 && leftCornerX <= -48 && leftCornerY <= 62 && leftCornerY >= 44 && rightCornerX >= -49 && rightCornerX <= -38 && rightCornerY <= 71 && rightCornerY >= 57) {
                $('.admiralteiskayaM_adaptive').css('opacity','1');
                $('.admiralteiskayaM_adaptive').css('z-index','9999');
                $('.admiralteiskayaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.admiralteiskayaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.admiralteiskayaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.admiralteiskayaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.admiralteiskayaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.admiralteiskayaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.admiralteiskayaM_adaptive').css('width','100px');
                $('.admiralteiskayaM_adaptive').css('height','100px');
                $('.admiralteiskayaM_adaptive').css('margin-left','-50px');
                $('.admiralteiskayaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigOneStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= 9 && leftCornerX <= 23 && leftCornerY <= 64 && leftCornerY >= 46 && rightCornerX >= 22 && rightCornerX <= 34 && rightCornerY <= 74 && rightCornerY >= 59) {
                $('.smolniyUniversityM_adaptive').css('opacity','1');
                $('.smolniyUniversityM_adaptive').css('z-index','9999');
                $('.smolniyUniversityM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.smolniyUniversityM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.smolniyUniversityM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.smolniyUniversityM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.smolniyUniversityM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.smolniyUniversityM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.smolniyUniversityM_adaptive').css('width','100px');
                $('.smolniyUniversityM_adaptive').css('height','100px');
                $('.smolniyUniversityM_adaptive').css('margin-left','-50px');
                $('.smolniyUniversityM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigFiveStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -49 && leftCornerX <= -36 && leftCornerY <= 61 && leftCornerY >= 43 && rightCornerX >= -36 && rightCornerX <= -25 && rightCornerY <= 70 && rightCornerY >= 56) {
                $('.basilikaM_adaptive').css('opacity','1');
                $('.basilikaM_adaptive').css('z-index','9999');
                $('.basilikaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.basilikaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.basilikaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.basilikaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.basilikaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.basilikaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.basilikaM_adaptive').css('width','100px');
                $('.basilikaM_adaptive').css('height','100px');
                $('.basilikaM_adaptive').css('margin-left','-50px');
                $('.basilikaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigTwoStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -81 && leftCornerX <= -68 && leftCornerY <= 56 && leftCornerY >= 38 && rightCornerX >= -68 && rightCornerX <= -57 && rightCornerY <= 67 && rightCornerY >= 53) {
                $('.golandiyaM_adaptive').css('opacity','1');
                $('.golandiyaM_adaptive').css('z-index','9999');
                $('.golandiyaM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.golandiyaM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.golandiyaM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.golandiyaM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.golandiyaM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.golandiyaM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.golandiyaM_adaptive').css('width','100px');
                $('.golandiyaM_adaptive').css('height','100px');
                $('.golandiyaM_adaptive').css('margin-left','-50px');
                $('.golandiyaM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigFourStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -54 && leftCornerX <= -41 && leftCornerY <= 74 && leftCornerY >= 56 && rightCornerX >= -41 && rightCornerX <= -30 && rightCornerY <= 79 && rightCornerY >= 65) {
                $('.mechetM_adaptive').css('opacity','1');
                $('.mechetM_adaptive').css('z-index','9999');
                $('.mechetM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mechetM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mechetM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mechetM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mechetM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mechetM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mechetM_adaptive').css('width','100px');
                $('.mechetM_adaptive').css('height','100px');
                $('.mechetM_adaptive').css('margin-left','-50px');
                $('.mechetM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerBigThreeStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -54 && leftCornerX <= -41 && leftCornerY <= 74 && leftCornerY >= 56 && rightCornerX >= -41 && rightCornerX <= -30 && rightCornerY <= 79 && rightCornerY >= 65) {
                $('.mikhailovskiM_adaptive').css('opacity','1');
                $('.mikhailovskiM_adaptive').css('z-index','9999');
                $('.mikhailovskiM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.mikhailovskiM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.mikhailovskiM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.mikhailovskiM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.mikhailovskiM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.mikhailovskiM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.mikhailovskiM_adaptive').css('width','100px');
                $('.mikhailovskiM_adaptive').css('height','100px');
                $('.mikhailovskiM_adaptive').css('margin-left','-50px');
                $('.mikhailovskiM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
            if (leftCornerX >= -54 && leftCornerX <= -41 && leftCornerY <= 74 && leftCornerY >= 56 && rightCornerX >= -41 && rightCornerX <= -30 && rightCornerY <= 79 && rightCornerY >= 65) {
                $('.alexandrinkiyM_adaptive').css('opacity','1');
                $('.alexandrinkiyM_adaptive').css('z-index','9999');
                $('.alexandrinkiyM_adaptive').children('.marker-lines').css('animation','0.5s linear 1s marker-lines');
                $('.alexandrinkiyM_adaptive').children('.marker-point').css('animation','3s linear 1s marker-point, 1s linear appearing');
                $('.alexandrinkiyM_adaptive').children('.marker-circle-1').css('animation','3s linear 1s marker-circle-1, 1s linear appearing');
                $('.alexandrinkiyM_adaptive').children('.marker-circle-2').css('animation','3s linear 1s marker-circle-2, 1s linear appearing, 10s linear 11s spinning infinite');
                $('.alexandrinkiyM_adaptive').children('.marker-circle-3').css('animation','3s linear 1s marker-circle-3, 1s linear appearing');
                $('.alexandrinkiyM_adaptive').children('.marker-goal').css('animation','3s linear 1s marker-goal, 1s linear appearing');
                $('.alexandrinkiyM_adaptive').css('width','100px');
                $('.alexandrinkiyM_adaptive').css('height','100px');
                $('.alexandrinkiyM_adaptive').css('margin-left','-50px');
                $('.alexandrinkiyM_adaptive').css('margin-top','-50px');
                setTimeout(function () {markerWrapperStatus = 'enabled'}, 4000);
            }
        })
        let captureStatus;
        let capture;
        $(".marker-wrapper").bind('touchstart', (function(e){
            if (markerWrapperStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
        $(".admiralteiskayaM_adaptive").bind('touchstart', (function(e){
            if (markerBigOneStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
        $(".basilikaM_adaptive").bind('touchstart', (function(e){
            if (markerBigTwoStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
        $(".mechetM_adaptive").bind('touchstart', (function(e){
            if (markerBigThreeStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
        $(".golandiyaM_adaptive").bind('touchstart', (function(e){
            if (markerBigFourStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
        $(".smolniyUniversityM_adaptive").bind('touchstart', (function(e){
            if (markerBigFiveStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
            
        map.on('movestart', function() {
            $('.popup__capture').remove();
            captureStatus = 'close';
        })
        $(".marker-wrapper_big-one").bind('touchstart', (function(e){
            if (markerBigOneStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
        $(".marker-wrapper_big-two").bind('touchstart', (function(e){
            if (markerBigTwoStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
        $(".marker-wrapper_big-three").bind('touchstart', (function(e){
            if (markerBigThreeStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
        $(".marker-wrapper_big-four").bind('touchstart', (function(e){
            if (markerBigFourStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));
        $(".marker-wrapper_big-five").bind('touchstart', (function(e){
            if (markerBigFiveStatus != 'disabled'){
                if (captureStatus == 'open') {
                    $('.popup__capture').remove();
                    captureStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-capture_hidden');
                capture = element.text();
                $('#map').append($('<div class="popup__capture"><span class="popup__text">' + capture + '</span></div>'));
                captureStatus = 'open';
            }
        }));

        let videoStatus = 'close'
        let video

        $(".marker-wrapper").bind('touchstart',(function(e){
            if (markerWrapperStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        }));
        $(".marker-wrapper_big-one").bind('touchstart',(function(e){
            if (markerBigOneStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        }));
        $(".marker-wrapper_big-two").bind('touchstart',(function(e){
            if (markerBigTwoStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        }));
        $(".marker-wrapper_big-three").bind('touchstart',(function(e){
            if (markerBigThreeStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        }));
        $(".marker-wrapper_big-four").bind('touchstart',(function(e){
            if (markerBigFourStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        }));
        $(".marker-wrapper_big-five").bind('touchstart',(function(e){
            if (markerBigFiveStatus != 'disabled'){
                if (videoStatus == 'open') {
                    $('.popup__video').remove();
                    videoStatus = 'close';
                }
                let elementParent = $(e.target).parent();
                let element = elementParent.find('.marker-video_hidden');
                video = element.html();
                $('.popup__overlay').css('display','block')
                $('#map').append($('<div class="popup__video"><svg class="loading" viewBox="0 0 50 50"><circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg><iframe ' + video + '</iframe></div>'));
                videoStatus = 'open';    
            }
        }));
         map.on('movestart', function() {
            $('.popup__video').remove();
            $('.popup__overlay').css('display','none');
            videoStatus = 'close'; 
         })
         $('.border-top').bind('touchstart',(function(e){
            $('.popup__video').remove();
            $('.popup__overlay').css('display','none');
            videoStatus = 'close';             
         }))
         $('.border-right').bind('touchstart',(function(e){
            $('.popup__video').remove();
            $('.popup__overlay').css('display','none');
            videoStatus = 'close';             
         }))
         $('.border-bottom').bind('touchstart',(function(e){
            $('.popup__video').remove();
            $('.popup__overlay').css('display','none');
            videoStatus = 'close';              
         }))
         $('.border-left').bind('touchstart',(function(e){
            $('.popup__video').remove();
            $('.popup__overlay').css('display','none');
            videoStatus = 'close';            
         }))
         $('.popup__overlay').bind('touchstart',(function(e){
            $('.popup__video').remove();
            $('.popup__overlay').css('display','none');
            videoStatus = 'close';            
         }))
        
    }
   
})