var app = {
    IsItOn: function(){
        var h1_height = document.getElementsByTagName('h1')[0].offsetHeight;
        var img = document.getElementsByTagName('img')[0];
        img.style.height = parseInt(window.innerHeight,10)-parseInt(h1_height, 10)+'px';
        img.style.maxWidth = parseInt(window.innerWidth,10)-20+'px';
    },

    initialize: function() {
        this.IsItOn();
    }

};

app.initialize();