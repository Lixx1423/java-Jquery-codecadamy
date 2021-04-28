$(document).ready(function () {

    $('#cart').on('click', () => {
      $('#cartMenu').show();
    })
    
    $('#account').on('click', () => {
      $('#accountMenu').show();
    })
    
    $('#help').on('click', () => {
      $('#helpMenu').show();
    })
    
     $('.dropdown').on('mouseleave', () => {
        $('#cartMenu').hide();
    })
    
    $('.dropdown').on('mouseleave', () => {
        $('#accountMenu').hide();
    })
    
    $('.dropdown').on('mouseleave', () => {
        $('#helpMenu').hide();
    })
    
    
    
    
    
    
    });