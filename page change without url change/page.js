$('nav a').on('click', function(e) {              
    e.preventDefault();                               
    var url = this.href;                               
    $('nav a.current').removeClass('current');         
    $(this).addClass('current');                    
  
    $('#container').remove();                        
    $('#section').load(url + ' #container').hide().fadeIn('slow'); ; 
  });